"""Smoke-test every lesson end-to-end.

Runs the solution code for every lesson through the same validator the web UI
uses, and asserts every check passes. Also makes sure the starter code at least
executes (non-zero failed checks are fine, crashes are not)."""

from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from tools.check_lesson import run_user_code
from tutorial.lesson_specs import LESSON_SPECS


def main() -> int:
    failures = 0

    print("== Solutions ==")
    for spec in LESSON_SPECS:
        blanks = {b["id"]: b["solution"] for b in spec.get("blanks", [])}
        result = run_user_code(spec["id"], blanks=blanks)
        summary = result.get("summary", {})
        status = "ok" if result.get("ok") else "FAIL"
        line = f"[{status}] {spec['id']:<26} {summary.get('passed', 0)}/{summary.get('total', 0)}"
        print(line)
        if not result.get("ok"):
            failures += 1
            for check in result.get("results", []):
                if not check.get("passed"):
                    print(f"    - {check['name']}")
                    print(f"      expected: {check['expected']}")
                    print(f"      actual  : {check['actual']}")
            if result.get("error"):
                print("    error:", result["error"])
                print(result.get("traceback", ""))

    print()
    print("== Starters (must run, may fail checks) ==")
    for spec in LESSON_SPECS:
        blanks = {b["id"]: b["starter"] for b in spec.get("blanks", [])}
        result = run_user_code(spec["id"], blanks=blanks)
        if result.get("error"):
            failures += 1
            print(f"[CRASH] {spec['id']}: {result['error']}")
        else:
            summary = result.get("summary", {})
            print(f"[ok]    {spec['id']:<26} starter {summary.get('passed', 0)}/{summary.get('total', 0)}")

    print()
    if failures:
        print(f"FAILED: {failures} issue(s)")
    else:
        print("All lessons healthy.")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
