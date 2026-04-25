"""Run server-side checks for a tutorial lesson.

Accepts either a full ``code`` submission (from the free-editor tab) or a
``blanks`` dict (from the puzzle tab). In the puzzle case we substitute every
``__B_<id>__`` token in the lesson template with the value the user filled in.
"""

from __future__ import annotations

import argparse
import builtins
import io
import json
import re
import sys
import time
import traceback
from contextlib import redirect_stdout
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from tutorial.lesson_specs import LESSON_SPECS  # noqa: E402


SAFE_BUILTINS = {
    "abs": abs,
    "all": all,
    "any": any,
    "bool": bool,
    "__build_class__": builtins.__build_class__,
    "__import__": builtins.__import__,
    "complex": complex,
    "dict": dict,
    "enumerate": enumerate,
    "Exception": Exception,
    "float": float,
    "isinstance": isinstance,
    "int": int,
    "KeyError": KeyError,
    "len": len,
    "list": list,
    "max": max,
    "min": min,
    "object": object,
    "pow": pow,
    "print": print,
    "range": range,
    "repr": repr,
    "reversed": reversed,
    "round": round,
    "set": set,
    "sorted": sorted,
    "str": str,
    "sum": sum,
    "tuple": tuple,
    "zip": zip,
}


TOKEN_RE = re.compile(r"__B_([a-zA-Z0-9_]+)__")


def get_lesson(lesson_id: str) -> dict:
    for lesson in LESSON_SPECS:
        if lesson["id"] == lesson_id:
            return lesson
    raise KeyError(f"Unknown lesson id: {lesson_id}")


def materialize_code(lesson: dict, *, code: str | None, blanks: dict[str, str] | None) -> str:
    if code is not None:
        return code
    filled = dict(blanks or {})
    spec_blanks = {blank["id"]: blank for blank in lesson.get("blanks", [])}
    for key, blank in spec_blanks.items():
        if not filled.get(key, "").strip():
            filled[key] = blank["starter"]

    def repl(match: re.Match[str]) -> str:
        key = match.group(1)
        if key not in filled:
            raise KeyError(f"Missing blank value for {key!r}")
        return filled[key]

    return TOKEN_RE.sub(repl, lesson["starter_code"])


def run_user_code(lesson_id: str, *, code: str | None = None, blanks: dict[str, str] | None = None) -> dict:
    lesson = get_lesson(lesson_id)
    try:
        rendered = materialize_code(lesson, code=code, blanks=blanks)
    except Exception:
        return {
            "ok": False,
            "error": "Failed to materialize code (template / blank substitution)",
            "traceback": traceback.format_exc(),
            "stdout": "",
            "results": [],
            "rendered_code": None,
            "duration_ms": 0,
        }

    stdout = io.StringIO()
    namespace = {"__builtins__": SAFE_BUILTINS, "__name__": "__lesson__"}
    start = time.perf_counter()
    try:
        with redirect_stdout(stdout):
            exec(rendered, namespace, namespace)
    except Exception:
        return {
            "ok": False,
            "error": "Code execution failed",
            "traceback": traceback.format_exc(),
            "stdout": stdout.getvalue(),
            "results": [],
            "rendered_code": rendered,
            "duration_ms": int((time.perf_counter() - start) * 1000),
        }

    validator_ns = {"__builtins__": SAFE_BUILTINS, "__name__": "__validator__"}
    try:
        exec(lesson["validator_code"], validator_ns, validator_ns)
        with redirect_stdout(stdout):
            results = validator_ns["run_checks"](namespace)
    except Exception:
        return {
            "ok": False,
            "error": "Validator execution failed",
            "traceback": traceback.format_exc(),
            "stdout": stdout.getvalue(),
            "results": [],
            "rendered_code": rendered,
            "duration_ms": int((time.perf_counter() - start) * 1000),
        }

    duration_ms = int((time.perf_counter() - start) * 1000)

    passed = sum(1 for result in results if result.get("passed"))
    total = len(results)
    summary = {"passed": passed, "total": total}
    return {
        "ok": passed == total and total > 0,
        "summary": summary,
        "results": results,
        "stdout": stdout.getvalue(),
        "rendered_code": rendered,
        "duration_ms": duration_ms,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--lesson-id", required=True)
    parser.add_argument("--code-file")
    parser.add_argument("--use-solution", action="store_true")
    parser.add_argument("--use-starter", action="store_true")
    args = parser.parse_args()

    lesson = get_lesson(args.lesson_id)
    if args.use_solution:
        result = run_user_code(
            args.lesson_id,
            blanks={blank["id"]: blank["solution"] for blank in lesson.get("blanks", [])},
        )
    elif args.use_starter:
        result = run_user_code(
            args.lesson_id,
            blanks={blank["id"]: blank["starter"] for blank in lesson.get("blanks", [])},
        )
    elif args.code_file:
        result = run_user_code(args.lesson_id, code=Path(args.code_file).read_text(encoding="utf-8"))
    else:
        payload = json.loads(sys.stdin.read())
        if "code" in payload and payload["code"] is not None:
            result = run_user_code(args.lesson_id, code=payload["code"])
        else:
            result = run_user_code(args.lesson_id, blanks=payload.get("blanks", {}))

    print(json.dumps(result, ensure_ascii=False))


if __name__ == "__main__":
    main()
