"""Build generated DeepSeek-V4 tutorial assets.

The lesson specs carry a template ``starter_code`` with ``__B_<id>__`` tokens plus a
list of ``blanks`` — one entry per token. Interludes are narrative-only segments
that sit between lessons and keep the curriculum's line coverage of
``model.py`` + ``kernel.py`` byte-for-byte exact.

Outputs:

  * ``tutorial/generated/puzzles/NN_<id>.py`` — runnable starter (starter values substituted)
  * ``tutorial/generated/solutions/NN_<id>.py`` — fully correct reference
  * ``tutorial/generated/references/NN_<id>.py`` — raw slice from model.py / kernel.py
  * ``tutorial/generated/lessons.json`` — single source of truth for the web UI
  * ``site/assets/lessons-data.js`` — same payload wrapped as a window global

The build aborts if the union of every segment (lesson + interlude + auto
whitespace gap) fails to reconstruct the original source files.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from tutorial.lesson_specs import LESSON_SPECS, SITE_META  # noqa: E402
from tutorial.interludes import INTERLUDE_SPECS  # noqa: E402
from tutorial.i18n_zh import (  # noqa: E402
    UI_ZH,
    SITE_META_ZH,
    LESSONS_ZH,
    INTERLUDES_ZH,
)


GENERATED_DIR = ROOT / "tutorial" / "generated"
PUZZLES_DIR = GENERATED_DIR / "puzzles"
SOLUTIONS_DIR = GENERATED_DIR / "solutions"
REFERENCES_DIR = GENERATED_DIR / "references"
SITE_ASSETS_DIR = ROOT / "site" / "assets"

SOURCES = ("DeepSeek_official/model.py", "DeepSeek_official/kernel.py")
TOKEN_RE = re.compile(r"__B_([a-zA-Z0-9_]+)__")


# ---------------------------------------------------------------------------
# Pure helpers
# ---------------------------------------------------------------------------

def substitute_blanks(template: str, values: dict[str, str]) -> str:
    """Replace every ``__B_<id>__`` token with ``values[id]``."""
    def repl(match: re.Match[str]) -> str:
        key = match.group(1)
        if key not in values:
            raise KeyError(f"No value supplied for blank {key!r}")
        return values[key]

    return TOKEN_RE.sub(repl, template)


def read_source_slice(source_path: str, line_start: int, line_end: int) -> str:
    path = ROOT / source_path
    lines = path.read_text(encoding="utf-8").splitlines(keepends=True)
    return "".join(lines[line_start - 1 : line_end]).rstrip() + "\n"


# ---------------------------------------------------------------------------
# Segment coverage verifier
# ---------------------------------------------------------------------------

def _explicit_segments() -> list[dict[str, Any]]:
    segments: list[dict[str, Any]] = []
    for spec in LESSON_SPECS:
        segments.append({**spec, "kind": "lesson"})
    for spec in INTERLUDE_SPECS:
        segments.append({**spec, "kind": "interlude"})
    return segments


def _assert_coverage(segments: list[dict[str, Any]]) -> list[dict[str, Any]]:
    """Verify explicit segments partition each source into disjoint ranges with
    only whitespace gaps, and synthesise gap-filler segments so that the union
    reconstructs every line."""
    out: list[dict[str, Any]] = list(segments)

    for source in SOURCES:
        mine = sorted(
            [s for s in segments if s["source_path"] == source],
            key=lambda s: s["line_start"],
        )
        total_lines = len((ROOT / source).read_text(encoding="utf-8").splitlines())

        prev_end = 0
        for seg in mine:
            start, end = seg["line_start"], seg["line_end"]
            if start <= prev_end:
                raise ValueError(
                    f"overlap in {source}: segment {seg['id']} starts at {start} but "
                    f"previous segment ended at {prev_end}"
                )
            if start > prev_end + 1:
                gap_lines = (ROOT / source).read_text(encoding="utf-8").splitlines()[prev_end:start - 1]
                if any(line.strip() for line in gap_lines):
                    raise ValueError(
                        f"gap with real content in {source}:{prev_end + 1}-{start - 1} "
                        f"before segment {seg['id']}. Add an interlude covering it."
                    )
                out.append({
                    "id": f"gap-{source}-{prev_end + 1}-{start - 1}".replace(".", "-"),
                    "kind": "gap",
                    "stage": seg["stage"],
                    "track": source,
                    "source_path": source,
                    "line_start": prev_end + 1,
                    "line_end": start - 1,
                    "title": "Spacer",
                    "tagline": "Whitespace between segments.",
                    "summary": "Blank lines in the reference — preserved so segments reconstruct the file byte-for-byte.",
                })
            prev_end = end
        if prev_end < total_lines:
            tail_lines = (ROOT / source).read_text(encoding="utf-8").splitlines()[prev_end:total_lines]
            if any(line.strip() for line in tail_lines):
                raise ValueError(
                    f"uncovered tail in {source}: L{prev_end + 1}-{total_lines} is not whitespace"
                )
            out.append({
                "id": f"gap-{source}-{prev_end + 1}-{total_lines}".replace(".", "-"),
                "kind": "gap",
                "stage": mine[-1]["stage"] if mine else "foundations",
                "track": source,
                "source_path": source,
                "line_start": prev_end + 1,
                "line_end": total_lines,
                "title": "Trailing whitespace",
                "tagline": "End-of-file whitespace.",
                "summary": "Blank lines at the end of the source — preserved so segments reconstruct the file byte-for-byte.",
            })

    # After injecting gaps, re-verify byte-for-byte reconstruction.
    for source in SOURCES:
        original = (ROOT / source).read_text(encoding="utf-8")
        mine = sorted(
            [s for s in out if s["source_path"] == source],
            key=lambda s: s["line_start"],
        )
        reconstructed_parts: list[str] = []
        all_lines = original.splitlines(keepends=True)
        for seg in mine:
            reconstructed_parts.append("".join(all_lines[seg["line_start"] - 1 : seg["line_end"]]))
        reconstructed = "".join(reconstructed_parts)
        if reconstructed != original:
            # Provide a precise diagnostic on mismatch.
            from difflib import unified_diff

            diff = "\n".join(
                unified_diff(
                    original.splitlines(),
                    reconstructed.splitlines(),
                    fromfile=source,
                    tofile=source + " (reconstructed)",
                    lineterm="",
                    n=1,
                )[:40]
            )
            raise ValueError(f"segment union does not reconstruct {source}:\n{diff}")

    return out


# ---------------------------------------------------------------------------
# I18n merging
# ---------------------------------------------------------------------------

def _translate_lesson_spec(spec: dict[str, Any]) -> dict[str, Any]:
    out = dict(spec)
    zh = LESSONS_ZH.get(spec["id"], {}) or {}
    # Translate blanks by id.
    blanks_zh = zh.get("blanks", {})
    translated_blanks: list[dict[str, Any]] = []
    for blank in spec.get("blanks", []):
        b_zh = blanks_zh.get(blank["id"], {})
        translated_blanks.append({
            **blank,
            "i18n": {"zh": {k: v for k, v in b_zh.items() if v is not None}},
        })
    out["blanks"] = translated_blanks
    out["i18n"] = {
        "zh": {k: v for k, v in zh.items() if k not in ("blanks",) and v is not None}
    }
    return out


def _translate_interlude_spec(spec: dict[str, Any]) -> dict[str, Any]:
    out = dict(spec)
    zh = INTERLUDES_ZH.get(spec["id"], {}) or {}
    out["i18n"] = {"zh": {k: v for k, v in zh.items() if v is not None}}
    return out


# ---------------------------------------------------------------------------
# Build
# ---------------------------------------------------------------------------

def compute_stage_stats(segments: list[dict[str, Any]]) -> list[dict[str, Any]]:
    lesson_counts: dict[str, int] = {}
    interlude_counts: dict[str, int] = {}
    for seg in segments:
        if seg["kind"] == "lesson":
            lesson_counts[seg["stage"]] = lesson_counts.get(seg["stage"], 0) + 1
        elif seg["kind"] == "interlude":
            interlude_counts[seg["stage"]] = interlude_counts.get(seg["stage"], 0) + 1
    out: list[dict[str, Any]] = []
    for stage in SITE_META["stages"]:
        zh = SITE_META_ZH.get("stages", {}).get(stage["id"], {})
        out.append({
            **stage,
            "lesson_count": lesson_counts.get(stage["id"], 0),
            "interlude_count": interlude_counts.get(stage["id"], 0),
            "i18n": {"zh": zh} if zh else {"zh": {}},
        })
    return out


def build_lesson(spec: dict[str, Any]) -> dict[str, Any]:
    blanks = spec.get("blanks", [])
    starter_values = {blank["id"]: blank["starter"] for blank in blanks}
    solution_values = {blank["id"]: blank["solution"] for blank in blanks}

    starter_runnable = substitute_blanks(spec["starter_code"], starter_values)
    solution_runnable = substitute_blanks(spec["starter_code"], solution_values)

    reference_code = read_source_slice(spec["source_path"], spec["line_start"], spec["line_end"])

    basename = f"{spec['order']:02d}_{spec['id']}.py"
    puzzle_path = f"tutorial/generated/puzzles/{basename}"
    solution_path = f"tutorial/generated/solutions/{basename}"
    reference_path = f"tutorial/generated/references/{basename}"

    lesson = dict(spec)
    lesson["blanks"] = blanks
    lesson["starter_runnable"] = starter_runnable
    lesson["solution_runnable"] = solution_runnable
    lesson["solution_code"] = solution_runnable
    lesson["reference_code"] = reference_code
    lesson["puzzle_path"] = puzzle_path
    lesson["solution_path"] = solution_path
    lesson["reference_file_path"] = reference_path
    lesson["workshop_loc"] = len(starter_runnable.splitlines())
    lesson["reference_loc"] = len(reference_code.splitlines())
    lesson["blank_count"] = len(blanks)
    return lesson


def build_interlude(spec: dict[str, Any]) -> dict[str, Any]:
    reference_code = read_source_slice(spec["source_path"], spec["line_start"], spec["line_end"])
    out = dict(spec)
    out["reference_code"] = reference_code
    out["reference_loc"] = len(reference_code.splitlines())
    return out


def build_gap(spec: dict[str, Any]) -> dict[str, Any]:
    reference_code = read_source_slice(spec["source_path"], spec["line_start"], spec["line_end"])
    out = dict(spec)
    out["reference_code"] = reference_code
    out["reference_loc"] = len(reference_code.splitlines())
    return out


def build_payload() -> dict[str, Any]:
    raw_segments = _explicit_segments()
    all_segments = _assert_coverage(raw_segments)

    # Realise each segment.
    realised: list[dict[str, Any]] = []
    for seg in all_segments:
        if seg["kind"] == "lesson":
            realised.append(_translate_lesson_spec(build_lesson(seg)))
        elif seg["kind"] == "interlude":
            realised.append(_translate_interlude_spec(build_interlude(seg)))
        else:
            realised.append(build_gap(seg))

    # Sort globally by (source ordering per kind), then present by (track, line_start).
    track_order = {p: i for i, p in enumerate(SOURCES)}
    realised.sort(key=lambda s: (track_order.get(s["source_path"], 99), s["line_start"]))

    lessons = [s for s in realised if s["kind"] == "lesson"]
    lessons.sort(key=lambda s: s["order"])

    total_blanks = sum(s["blank_count"] for s in lessons)
    meta = {
        **SITE_META,
        "stages": compute_stage_stats(realised),
        "stats": [
            {"label": "Lessons", "value": str(len(lessons))},
            {"label": "Interludes", "value": str(sum(1 for s in realised if s["kind"] == "interlude"))},
            {"label": "Stages", "value": str(len(SITE_META["stages"]))},
            {"label": "Blanks", "value": str(total_blanks)},
            {"label": "Source", "value": " + ".join(SOURCES)},
        ],
        "i18n": {
            "zh": {
                **{k: v for k, v in SITE_META_ZH.items() if k not in ("stages", "tracks")},
                "stats_labels": {
                    "Lessons": "课程",
                    "Interludes": "导读",
                    "Stages": "阶段",
                    "Blanks": "填空",
                    "Source": "源文件",
                },
            }
        },
        "tracks": [
            {
                **track,
                "i18n": {"zh": SITE_META_ZH.get("tracks", {}).get(track["id"], {})},
            }
            for track in SITE_META["tracks"]
        ],
        "ui_strings": {
            "en": _default_ui_en(),
            "zh": UI_ZH,
        },
    }
    return {"meta": meta, "lessons": lessons, "segments": realised}


def _default_ui_en() -> dict[str, str]:
    """The canonical English UI strings. Keep every key in sync with UI_ZH."""
    return {
        "app.lang_toggle": "中文",
        "app.lang_label": "Language",
        "nav.brand": "DeepSeek-V4 Deconstruction Lab",
        "nav.curriculum": "Curriculum",
        "nav.stages": "Stages",
        "nav.lesson_count_singular": "lesson",
        "nav.lesson_count_plural": "lessons",
        "nav.interlude_badge": "read",
        "nav.lesson_badge": "puzzle",
        "nav.blanks_label": "blanks",
        "nav.minutes_label": "min",
        "hero.difficulty": "Difficulty",
        "hero.estimated_time": "Estimated",
        "hero.tags": "Tags",
        "hero.paper_anchor": "Paper anchor",
        "hero.source_anchor": "Source",
        "hero.reference_length": "Reference LOC",
        "hero.workshop_length": "Workshop LOC",
        "section.what_you_learn": "What you will learn",
        "section.workshop_steps": "Workshop steps",
        "section.pitfalls": "Pitfalls",
        "section.why_it_matters": "Why it matters",
        "tabs.puzzle": "Puzzle",
        "tabs.free": "Free editor",
        "tabs.solution": "Solution",
        "tabs.reference": "Reference",
        "tabs.narrative": "Narrative",
        "puzzle.instructions": "Click each highlighted pill to fill it in, then Run tests.",
        "puzzle.run_tests": "Run tests",
        "puzzle.run_solution": "Run solution",
        "puzzle.reset": "Reset",
        "puzzle.hint_label": "Hint",
        "puzzle.expected_label": "Expected expression",
        "puzzle.submit_hint": "Enter to confirm, Esc to cancel editing.",
        "inspector.title": "Test runner",
        "inspector.description": "Your puzzle / free editor submission is checked by the local Python dev server (npm run dev).",
        "inspector.all_pass": "All checks passing",
        "inspector.some_fail": "Some checks failed",
        "inspector.crashed": "Runtime crash",
        "inspector.pass": "PASS",
        "inspector.fail": "FAIL",
        "inspector.expected": "Expected",
        "inspector.actual": "Actual",
        "inspector.duration": "Duration",
        "inspector.stdout": "Stdout",
        "inspector.stdout_empty": "(stdout empty)",
        "inspector.shell_hint": "Shell",
        "inspector.traceback": "Traceback",
        "interlude.hint": "Narrative chapter — a raw source slice with no puzzle. Use arrow keys or the sidebar to move on.",
        "interlude.read_only": "Read-only · no blanks · no tests",
        "footer.next": "Next →",
        "footer.prev": "← Previous",
        "footer.source_atlas": "Source Atlas",
        "footer.source_atlas_desc": "Every line is owned by a lesson or interlude — concatenating all segments reconstructs model.py / kernel.py.",
        "footer.github": "Project on GitHub",
        "difficulty.Warm-up": "Warm-up",
        "difficulty.Core": "Core",
        "difficulty.Advanced": "Advanced",
        "status.running": "Running…",
        "status.idle": "Idle",
        "status.completed": "Completed",
        "status.in_progress": "In progress",
        "status.not_started": "Not started",
        "progress.label": "Progress",
        "progress.completed_of": "{done}/{total} complete",
        "app.placeholder_title": "Pick a session from the left to start.",
        "app.placeholder_subtitle": "Every lesson ships with runnable code, granular fill-in puzzles, and a local test runner.",
        "app.reset_button": "Reset progress",
        "app.reset_confirm": "Clear all lesson progress and drafts on this device?",
        "app.solution_confirm": "Fill every blank with the reference solution?",
        "app.dev_server_error": "Dev server unreachable",
        "app.dev_server_connecting": "(waiting for dev server)",
        "inspector.switch_to_runnable": "Switch to the Puzzle or Free-edit tab to run your code.",
        "inspector.show_diff": "show diff",
    }


def render_reference_file(segment: dict[str, Any]) -> str:
    source = segment["source_path"]
    header = [
        f'"""Reference slice from DeepSeek-V4 `{source}`.',
        "",
        f"Segment : {segment['id']} ({segment['kind']})",
        f"Title   : {segment.get('title', segment['id'])}",
        f"Source  : {source}:{segment['line_start']}-{segment['line_end']}",
        '"""',
        "",
    ]
    return "\n".join(header) + segment["reference_code"].rstrip() + "\n"


def render_code_file(lesson: dict[str, Any], variant: str) -> str:
    if variant == "puzzle":
        body = lesson["starter_runnable"]
        label = "starter (all blanks default to placeholder values)"
    elif variant == "solution":
        body = lesson["solution_runnable"]
        label = "solution (all blanks filled with reference values)"
    else:
        raise ValueError(variant)

    header = [
        f'"""DeepSeek-V4 Lab — {lesson["session"]} {lesson["title"]} [{variant}].',
        "",
        f"Reference : {lesson['source_path']}:{lesson['line_start']}-{lesson['line_end']}",
        f"Variant   : {label}",
        '"""',
        "",
    ]
    return "\n".join(header) + body.rstrip() + "\n"


def write_outputs(payload: dict[str, Any]) -> None:
    for directory in (PUZZLES_DIR, SOLUTIONS_DIR, REFERENCES_DIR, SITE_ASSETS_DIR):
        directory.mkdir(parents=True, exist_ok=True)

    json_path = GENERATED_DIR / "lessons.json"
    json_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    js_path = SITE_ASSETS_DIR / "lessons-data.js"
    js_path.write_text(
        "/* auto-generated — do not edit. Rerun `npm run build` to refresh. */\n"
        "window.DEEPSEEK_V4_TUTORIAL = "
        + json.dumps(payload, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )

    for lesson in payload["lessons"]:
        (ROOT / lesson["puzzle_path"]).write_text(render_code_file(lesson, "puzzle"), encoding="utf-8")
        (ROOT / lesson["solution_path"]).write_text(render_code_file(lesson, "solution"), encoding="utf-8")
        (ROOT / lesson["reference_file_path"]).write_text(render_reference_file(lesson), encoding="utf-8")


def main() -> None:
    payload = build_payload()
    write_outputs(payload)
    count = len(payload["lessons"])
    interludes = sum(1 for s in payload["segments"] if s["kind"] == "interlude")
    gaps = sum(1 for s in payload["segments"] if s["kind"] == "gap")
    puzzles = len(list(PUZZLES_DIR.glob("*.py")))
    print(
        f"Built {count} lessons + {interludes} interludes ({gaps} auto-gaps) covering "
        f"{' + '.join(SOURCES)} byte-for-byte. {puzzles} puzzle files; JSON at "
        f"{GENERATED_DIR / 'lessons.json'}, site bootstrap at {SITE_ASSETS_DIR / 'lessons-data.js'}."
    )


if __name__ == "__main__":
    main()
