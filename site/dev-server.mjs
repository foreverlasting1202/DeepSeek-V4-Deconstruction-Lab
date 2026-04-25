import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));
const SITE_DIR = join(ROOT, "site");
const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "127.0.0.1";

const MIME = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".py": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

function resolveStatic(pathname) {
  if (pathname === "/" || pathname === "") return join(SITE_DIR, "index.html");
  const trimmed = pathname.replace(/^\/+/, "");
  const candidate = resolve(ROOT, trimmed);
  if (!candidate.startsWith(ROOT)) return null;
  if (existsSync(candidate)) return candidate;
  const inSite = join(SITE_DIR, trimmed);
  if (existsSync(inSite)) return inSite;
  return null;
}

function serveStatic(req, res) {
  const pathname = new URL(req.url, `http://${req.headers.host}`).pathname;
  const target = resolveStatic(pathname);
  if (!target) {
    send(res, 404, "Not found");
    return;
  }
  const stats = statSync(target);
  if (stats.isDirectory()) {
    const indexPath = join(target, "index.html");
    if (!existsSync(indexPath)) {
      send(res, 404, "Not found");
      return;
    }
    send(res, 200, readFileSync(indexPath), MIME[".html"]);
    return;
  }
  const ext = extname(target);
  send(res, 200, readFileSync(target), MIME[ext] || "application/octet-stream");
}

function readBody(req) {
  return new Promise((ok, fail) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => ok(Buffer.concat(chunks).toString("utf-8")));
    req.on("error", fail);
  });
}

function runLessonCheck(lessonId, payload) {
  return new Promise((ok) => {
    const child = spawn("python3", ["tools/check_lesson.py", "--lesson-id", lessonId], {
      cwd: ROOT,
      stdio: ["pipe", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (c) => (stdout += c.toString("utf-8")));
    child.stderr.on("data", (c) => (stderr += c.toString("utf-8")));
    child.on("close", (code) => {
      if (code !== 0) {
        ok({
          ok: false,
          error: "Checker process failed",
          traceback: stderr || stdout,
          results: [],
          stdout: "",
          duration_ms: 0,
        });
        return;
      }
      try {
        ok(JSON.parse(stdout));
      } catch {
        ok({
          ok: false,
          error: "Checker returned invalid JSON",
          traceback: stdout || stderr,
          results: [],
          stdout: "",
          duration_ms: 0,
        });
      }
    });
    child.stdin.write(JSON.stringify(payload));
    child.stdin.end();
  });
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (req.method === "POST" && pathname === "/api/check") {
    try {
      const body = JSON.parse(await readBody(req));
      const lessonId = url.searchParams.get("lesson") || body.lessonId;
      if (!lessonId) {
        send(
          res,
          400,
          JSON.stringify({ ok: false, error: "Missing lesson id" }),
          "application/json; charset=utf-8",
        );
        return;
      }
      const result = await runLessonCheck(lessonId, {
        code: body.code ?? null,
        blanks: body.blanks ?? null,
      });
      send(res, 200, JSON.stringify(result), "application/json; charset=utf-8");
    } catch (error) {
      send(
        res,
        500,
        JSON.stringify({
          ok: false,
          error: "Failed to run check",
          traceback: String(error),
          results: [],
        }),
        "application/json; charset=utf-8",
      );
    }
    return;
  }

  serveStatic(req, res);
});

server.listen(PORT, HOST, () => {
  console.log(`DeepSeek-V4 Deconstruction Lab · http://${HOST}:${PORT}`);
  console.log("Tip: `npm run build` regenerates the lesson bundle after editing lesson_specs.py.");
});
