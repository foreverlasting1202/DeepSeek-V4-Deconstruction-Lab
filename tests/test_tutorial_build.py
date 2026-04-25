"""Smoke tests for the generated tutorial bundle."""

from __future__ import annotations

import json
import unittest
from pathlib import Path

from tools.build_tutorial import ROOT, SOURCES, build_payload, read_source_slice
from tools.check_lesson import run_user_code
from tutorial.lesson_specs import LESSON_SPECS
from tutorial.interludes import INTERLUDE_SPECS
from tutorial.i18n_zh import LESSONS_ZH, INTERLUDES_ZH, UI_ZH


EXPECTED_LESSON_COUNT = 20


class TutorialBuildTests(unittest.TestCase):
    def setUp(self):
        self.payload = build_payload()

    # ------------------------------------------------------------------
    # Lesson-level invariants
    # ------------------------------------------------------------------

    def test_lesson_count_and_order(self):
        lessons = self.payload["lessons"]
        self.assertEqual(len(lessons), EXPECTED_LESSON_COUNT)
        orders = [lesson["order"] for lesson in lessons]
        self.assertEqual(orders, sorted(orders))
        self.assertEqual(orders, list(range(1, EXPECTED_LESSON_COUNT + 1)))
        ids = [lesson["id"] for lesson in lessons]
        self.assertEqual(len(set(ids)), EXPECTED_LESSON_COUNT)

    def test_reference_slices_match_source(self):
        for lesson in self.payload["lessons"]:
            expected = read_source_slice(
                lesson["source_path"], lesson["line_start"], lesson["line_end"]
            )
            self.assertEqual(expected, lesson["reference_code"], msg=lesson["id"])

    def test_generated_files_exist(self):
        for lesson in self.payload["lessons"]:
            self.assertTrue((ROOT / lesson["puzzle_path"]).exists(), msg=lesson["puzzle_path"])
            self.assertTrue((ROOT / lesson["solution_path"]).exists(), msg=lesson["solution_path"])
            self.assertTrue(
                (ROOT / lesson["reference_file_path"]).exists(),
                msg=lesson["reference_file_path"],
            )

    def test_every_lesson_has_at_least_one_blank(self):
        for spec in LESSON_SPECS:
            self.assertGreaterEqual(len(spec.get("blanks", [])), 1, msg=spec["id"])
            seen = set()
            for blank in spec["blanks"]:
                self.assertNotIn(blank["id"], seen, msg=f"{spec['id']}/{blank['id']} duplicate")
                seen.add(blank["id"])
                self.assertIn("starter", blank, msg=f"{spec['id']}/{blank['id']}")
                self.assertIn("solution", blank, msg=f"{spec['id']}/{blank['id']}")
                self.assertIn(f"__B_{blank['id']}__", spec["starter_code"], msg=f"{spec['id']}/{blank['id']}")

    def test_solution_code_passes_validators(self):
        for spec in LESSON_SPECS:
            blanks = {b["id"]: b["solution"] for b in spec.get("blanks", [])}
            result = run_user_code(spec["id"], blanks=blanks)
            self.assertTrue(result.get("ok"), msg=f"{spec['id']}: {result}")

    def test_starter_code_runs_without_crashing(self):
        for spec in LESSON_SPECS:
            blanks = {b["id"]: b["starter"] for b in spec.get("blanks", [])}
            result = run_user_code(spec["id"], blanks=blanks)
            self.assertIsNone(result.get("error"), msg=f"{spec['id']}: {result}")

    def test_site_bootstrap_exists(self):
        json_path = ROOT / "tutorial" / "generated" / "lessons.json"
        site_data_path = ROOT / "site" / "assets" / "lessons-data.js"
        self.assertTrue(json_path.exists())
        self.assertTrue(site_data_path.exists())
        data = json.loads(json_path.read_text(encoding="utf-8"))
        self.assertEqual(len(data["lessons"]), EXPECTED_LESSON_COUNT)
        self.assertIn("meta", data)
        self.assertIn("stats", data["meta"])
        self.assertEqual(len(data["meta"]["stages"]), 5)
        self.assertIn("segments", data)
        self.assertIn("ui_strings", data["meta"])
        self.assertIn("en", data["meta"]["ui_strings"])
        self.assertIn("zh", data["meta"]["ui_strings"])
        self.assertTrue(
            site_data_path.read_text(encoding="utf-8").startswith(
                "/* auto-generated"
            )
        )

    # ------------------------------------------------------------------
    # Segment coverage: the union of all segments must reconstruct the
    # source files byte-for-byte.
    # ------------------------------------------------------------------

    def test_segments_cover_both_sources_byte_for_byte(self):
        for source in SOURCES:
            original = (ROOT / source).read_text(encoding="utf-8")
            segs = sorted(
                [s for s in self.payload["segments"] if s["source_path"] == source],
                key=lambda s: s["line_start"],
            )
            prev_end = 0
            for seg in segs:
                self.assertEqual(
                    seg["line_start"],
                    prev_end + 1,
                    msg=f"{source}: non-contiguous at segment {seg['id']} "
                    f"(line_start={seg['line_start']} but expected {prev_end + 1})",
                )
                self.assertGreaterEqual(seg["line_end"], seg["line_start"], msg=seg["id"])
                prev_end = seg["line_end"]
            total_lines = len(original.splitlines())
            self.assertEqual(prev_end, total_lines, msg=f"{source}: coverage ends at L{prev_end} / {total_lines}")

            reconstructed_parts = []
            all_lines = original.splitlines(keepends=True)
            for seg in segs:
                reconstructed_parts.append(
                    "".join(all_lines[seg["line_start"] - 1 : seg["line_end"]])
                )
            self.assertEqual(
                original,
                "".join(reconstructed_parts),
                msg=f"{source}: reconstruction from segments does not match original bytes",
            )

    def test_segment_ids_are_unique(self):
        ids = [seg["id"] for seg in self.payload["segments"]]
        self.assertEqual(len(ids), len(set(ids)))

    def test_segment_counts(self):
        lesson_segs = [s for s in self.payload["segments"] if s["kind"] == "lesson"]
        interlude_segs = [s for s in self.payload["segments"] if s["kind"] == "interlude"]
        self.assertEqual(len(lesson_segs), EXPECTED_LESSON_COUNT)
        self.assertEqual(len(interlude_segs), len(INTERLUDE_SPECS))

    # ------------------------------------------------------------------
    # i18n coverage
    # ------------------------------------------------------------------

    def test_every_lesson_has_chinese_translation(self):
        for spec in LESSON_SPECS:
            zh = LESSONS_ZH.get(spec["id"])
            self.assertIsNotNone(zh, msg=f"missing zh translation for {spec['id']}")
            for key in ("title", "summary"):
                self.assertIn(key, zh, msg=f"{spec['id']} missing zh.{key}")
            blanks_zh = zh.get("blanks", {})
            for blank in spec["blanks"]:
                self.assertIn(blank["id"], blanks_zh, msg=f"{spec['id']}/{blank['id']} missing zh")
                b_zh = blanks_zh[blank["id"]]
                self.assertIn("label", b_zh, msg=f"{spec['id']}/{blank['id']} missing zh.label")
                self.assertIn("hint", b_zh, msg=f"{spec['id']}/{blank['id']} missing zh.hint")

    def test_every_interlude_has_chinese_translation(self):
        for spec in INTERLUDE_SPECS:
            zh = INTERLUDES_ZH.get(spec["id"])
            self.assertIsNotNone(zh, msg=f"missing zh translation for interlude {spec['id']}")
            for key in ("title", "summary"):
                self.assertIn(key, zh, msg=f"{spec['id']} missing zh.{key}")

    def test_ui_strings_are_parallel(self):
        ui_en = self.payload["meta"]["ui_strings"]["en"]
        self.assertEqual(
            set(ui_en.keys()),
            set(UI_ZH.keys()),
            msg="EN and ZH UI string keys diverge",
        )


if __name__ == "__main__":
    unittest.main()
