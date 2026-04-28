"""Lesson metadata for the DeepSeek-V4 Deconstruction Lab.

The lessons are written as authored Python templates that contain blank tokens of
the form ``__B_<id>__``. The build step expands those tokens twice: once with
each blank's ``starter`` value (to produce a RUNNABLE starter file that fails the
validator in an informative way) and once with each blank's ``solution`` value
(to produce a fully correct reference).

The web UI keeps the raw template so that puzzle pills can be rendered in-place.
"""

from textwrap import dedent


def code(src: str) -> str:
    return dedent(src).strip("\n") + "\n"


SITE_META = {
    "title": "DeepSeek-V4 Deconstruction Lab",
    "subtitle": (
        "An interactive, puzzle-first deep-dive into `model.py` and `kernel.py` "
        "of the DeepSeek-V4 reference implementation."
    ),
    "lead": (
        "DeepSeek-V4 pairs Compressed Sparse Attention (CSA), Heavily Compressed "
        "Attention (HCA), Manifold-Constrained Hyper-Connections (mHC), and FP4 "
        "quantization-aware training. This lab breaks the reference code into "
        "runnable Python puzzles so you can rebuild every moving piece by hand."
    ),
    "hero_note": (
        "Each puzzle is self-contained Python. Fill in the highlighted blanks, "
        "run the tests, and the web checker diffs your output against the paper's "
        "reference semantics (see `DeepSeek_V4.pdf` Figures 2–6)."
    ),
    "tagline": "Puzzles · Paper Anchors · Local Tests",
    "paper_ref": {
        "title": "DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence",
        "file": "DeepSeek_V4.pdf",
        "doi": "https://huggingface.co/collections/deepseek-ai/deepseek-v4",
    },
    "tracks": [
        {
            "id": "model.py",
            "title": "model.py",
            "description": (
                "Mixed-precision dispatch, RoPE/YaRN, Compressed-Sparse Attention, "
                "Hyper-Connections, and DeepSeekMoE wiring."
            ),
        },
        {
            "id": "kernel.py",
            "title": "kernel.py",
            "description": (
                "TileLang kernels: activation quantization, sparse attention online "
                "softmax, FP4 GEMM scale alignment, and mHC Sinkhorn."
            ),
        },
    ],
    "stages": [
        {
            "id": "foundations",
            "title": "I. Foundations",
            "description": "Mixed-precision dispatch, weight layout, and RMSNorm — the building blocks every block depends on.",
        },
        {
            "id": "rotary",
            "title": "II. Rotary & YaRN",
            "description": "The RoPE frequency table and its YaRN interpolation, plus the complex-pair rotation.",
        },
        {
            "id": "attention",
            "title": "III. Compressed Attention",
            "description": "CSA compressor pooling, KV ring cache, top-k merge, and the lightning indexer.",
        },
        {
            "id": "routing",
            "title": "IV. MoE & Hyper-Connections",
            "description": "DeepSeekMoE gate routing, sparse expert dispatch, and Manifold-Constrained Hyper-Connections.",
        },
        {
            "id": "kernels",
            "title": "V. Kernel Logic",
            "description": "Block-wise activation quantization, sparse attention online softmax, FP4 GEMM scale indexing, and Sinkhorn iterations.",
        },
    ],
}


LESSON_SPECS = [
    # ──────────────────────────────────────────────────────────────
    # Stage I — Foundations
    # ──────────────────────────────────────────────────────────────
    {
        "id": "s01-linear-dispatch",
        "order": 1,
        "session": "s01",
        "stage": "foundations",
        "track": "model.py",
        "title": "Linear Dispatch",
        "tagline": "One entry point, three precision paths.",
        "difficulty": "Warm-up",
        "estimated_time": "8 min",
        "tags": ["dispatch", "quantization"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 108,
        "line_end": 120,
        "summary": (
            "`linear()` is the single function every `nn.Linear` inside DeepSeek-V4 funnels "
            "through. It reads the weight dtype and routes into FP4, FP8, or plain BF16 GEMM."
        ),
        "paper_anchor": {
            "section": "§3.4 FP4 Quantization-Aware Training",
            "figure": "Figure 2 — Overall Architecture",
            "summary": (
                "The paper trains routed-expert weights in FP4 and activations in FP8; the "
                "dispatch below is the software seam where that mixed-precision plan actually "
                "bifurcates at runtime."
            ),
        },
        "source_mapping": {
            "real": (
                "In `DeepSeek_official/model.py:108-120`, `linear()` compares against the real "
                "`torch.float4_e2m1fn_x2` / `torch.float8_e4m3fn` dtypes, calls into the TileLang "
                "kernels `act_quant`, `fp4_gemm`, `fp8_gemm` from `kernel.py`, and falls through to "
                "`F.linear(x, weight)` for the BF16 path — every branch returns a real "
                "`torch.Tensor` matrix product."
            ),
            "stub": (
                "The puzzle replaces all three GEMMs (and `act_quant`) with pure-Python stubs that "
                "return tagged tuples like `('bf16', x, weight.dtype)`. The first element is just a "
                "breadcrumb so the validator can prove which branch fired without needing a GPU, "
                "real FP4/FP8 dtype support, or a TileLang installation. `dense_linear(x, weight)` "
                "stands in for `F.linear`."
            ),
        },
        "what_you_learn": [
            "Why quantized weights require an activation quant step first.",
            "Why BF16 is the simplest path — no external `scale` tensor travels alongside the weight.",
            "How a single Python dispatcher keeps the rest of `model.py` agnostic of precision.",
        ],
        "workshop_steps": [
            "Guard the FP4 branch with the correct dtype comparison.",
            "Call `fp4_gemm` with the quantized activation + both scales.",
            "Let the else-branch fall back to an un-quantized BF16 linear.",
        ],
        "pitfalls": [
            "`act_quant` must run on the *activation*, not the weight.",
            "The scale tensor is attached to the weight as `weight.scale`.",
        ],
        "blanks": [
            {
                "id": "fp4_guard",
                "label": "FP4 dtype guard",
                "hint": "Compare `weight.dtype` against `torch.float4_e2m1fn_x2`.",
                "starter": "False",
                "solution": "weight.dtype == torch.float4_e2m1fn_x2",
            },
            {
                "id": "fp4_call",
                "label": "FP4 GEMM call",
                "hint": "Pass the quantized activation `x`, the activation scale `s`, the weight, its `weight.scale`, and `scale_dtype`.",
                "starter": "('bf16', 'x', 'bf16')",
                "solution": "fp4_gemm(x, s, weight, weight.scale, scale_dtype)",
            },
            {
                "id": "bf16_fallback",
                "label": "BF16 fallback",
                "hint": "Call the un-quantized dense linear helper `dense_linear(x, weight)`.",
                "starter": "('bf16', 'x', 'bf16')",
                "solution": "dense_linear(x, weight)",
            },
        ],
        "starter_code": code(
            """
            class TorchStub:
                float4_e2m1fn_x2 = "fp4"
                float8_e4m3fn = "fp8"
                bfloat16 = "bf16"

            torch = TorchStub()

            class Weight:
                def __init__(self, dtype, scale="weight_scale"):
                    self.dtype = dtype
                    self.scale = scale

            block_size = 128
            scale_fmt = "ue8m0"
            scale_dtype = "fp32"

            def act_quant(x, block_size, scale_fmt, scale_dtype):
                return f"quant({x})", f"scale({block_size},{scale_fmt},{scale_dtype})"

            def fp4_gemm(x, s, weight, weight_scale, scale_dtype):
                return ("fp4", x, s, weight_scale, scale_dtype)

            def fp8_gemm(x, s, weight, weight_scale, scale_dtype):
                return ("fp8", x, s, weight_scale, scale_dtype)

            def dense_linear(x, weight):
                return ("bf16", x, weight.dtype)

            def linear(x, weight, bias=None):
                assert bias is None
                if __B_fp4_guard__:
                    x, s = act_quant(x, block_size, scale_fmt, scale_dtype)
                    return __B_fp4_call__
                elif weight.dtype == torch.float8_e4m3fn:
                    x, s = act_quant(x, block_size, scale_fmt, scale_dtype)
                    return fp8_gemm(x, s, weight, weight.scale, scale_dtype)
                else:
                    return __B_bf16_fallback__
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                Weight = ns["Weight"]
                torch = ns["torch"]
                linear = ns["linear"]
                checks = []

                fp4 = linear("x", Weight(torch.float4_e2m1fn_x2))
                checks.append({
                    "name": "FP4 path quantizes activation",
                    "passed": isinstance(fp4, tuple) and fp4[0] == "fp4" and str(fp4[1]).startswith("quant("),
                    "expected": "('fp4', 'quant(x)', ...)",
                    "actual": repr(fp4),
                })

                fp8 = linear("x", Weight(torch.float8_e4m3fn))
                checks.append({
                    "name": "FP8 path stays intact",
                    "passed": isinstance(fp8, tuple) and fp8[0] == "fp8",
                    "expected": "('fp8', ...)",
                    "actual": repr(fp8),
                })

                bf = linear("x", Weight(torch.bfloat16))
                checks.append({
                    "name": "BF16 fallback is dense",
                    "passed": bf == ("bf16", "x", "bf16"),
                    "expected": "('bf16', 'x', 'bf16')",
                    "actual": repr(bf),
                })
                return checks
            """
        ),
    },
    {
        "id": "s02-linear-layout",
        "order": 2,
        "session": "s02",
        "stage": "foundations",
        "track": "model.py",
        "title": "Weight & Scale Layout",
        "tagline": "Precision decides the weight shape long before compute starts.",
        "difficulty": "Warm-up",
        "estimated_time": "10 min",
        "tags": ["layout", "quantization"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 123,
        "line_end": 150,
        "summary": (
            "`Linear.__init__` branches on dtype to decide the physical weight shape and the "
            "size of the companion scale tensor. FP4 packs two values per byte; FP8 stores a "
            "scale per 128×128 block."
        ),
        "paper_anchor": {
            "section": "§3.4 FP4 Quantization-Aware Training",
            "figure": "Figure 2, inset on Mixed Precision",
            "summary": (
                "Packed FP4 storage and per-block FP8 scales are the *physical* layout behind "
                "the mixed-precision boxes drawn in Figure 2 — the code below wires a concrete "
                "tensor shape to each ratio in the paper's quantization table."
            ),
        },
        "source_mapping": {
            "real": (
                "In `Linear.__init__` (`model.py:123-150`), every branch allocates real "
                "`nn.Parameter(torch.empty(out_features, in_features // 2 or in_features, dtype=…))` "
                "tensors and additionally registers an FP8-E8M0 scale tensor via "
                "`self.weight.scale = self.scale = nn.Parameter(...)` for FP4 / FP8 weights. The BF16 "
                "branch calls `self.register_parameter('scale', None)` instead."
            ),
            "stub": (
                "`describe_linear_layout` only returns the SHAPE tuples `(weight_shape, scale_shape)` "
                "— it never allocates a tensor. The puzzle isolates the shape arithmetic (FP4 packs "
                "`in_features // 2` bytes; FP8 needs `ceildiv` per axis; BF16 has `scale_shape=None`) "
                "so you can verify the layout without instantiating real PyTorch parameters."
            ),
        },
        "what_you_learn": [
            "Why FP4 packs two values per byte and needs `in_features // 2` storage.",
            "Why FP8 stores one scale per 128×128 tile (`ceildiv` each dim).",
            "Why BF16 doesn't need a scale tensor at all.",
        ],
        "workshop_steps": [
            "Fill the FP4 scale's column count — `in_features // fp4_block_size`.",
            "Fill the FP8 scale grid — `ceildiv` on both axes.",
            "Leave BF16 with no scale tensor.",
        ],
        "pitfalls": [
            "FP4 block size is 32 (`fp4_block_size`), different from the FP8 block size of 128.",
            "`ceildiv` rounds UP because the last tile may be partial.",
        ],
        "blanks": [
            {
                "id": "fp4_scale_cols",
                "label": "FP4 scale columns",
                "hint": "One scale per 32 FP4 values along K, so `in_features // fp4_block_size`.",
                "starter": "1",
                "solution": "in_features // fp4_block_size",
            },
            {
                "id": "fp8_scale_rows",
                "label": "FP8 scale rows",
                "hint": "One scale per 128 rows, rounded up — `ceildiv(out_features, block_size)`.",
                "starter": "1",
                "solution": "ceildiv(out_features, block_size)",
            },
            {
                "id": "fp8_scale_cols",
                "label": "FP8 scale columns",
                "hint": "One scale per 128 columns, rounded up — `ceildiv(in_features, block_size)`.",
                "starter": "1",
                "solution": "ceildiv(in_features, block_size)",
            },
        ],
        "starter_code": code(
            """
            block_size = 128
            fp4_block_size = 32

            class TorchStub:
                float4_e2m1fn_x2 = "fp4"
                float8_e4m3fn = "fp8"
                bfloat16 = "bf16"

            torch = TorchStub()

            def ceildiv(x, y):
                return (x + y - 1) // y

            def describe_linear_layout(in_features, out_features, dtype):
                if dtype == torch.float4_e2m1fn_x2:
                    weight_shape = (out_features, in_features // 2)
                    scale_shape = (out_features, __B_fp4_scale_cols__)
                elif dtype == torch.float8_e4m3fn:
                    weight_shape = (out_features, in_features)
                    scale_shape = (__B_fp8_scale_rows__, __B_fp8_scale_cols__)
                else:
                    weight_shape = (out_features, in_features)
                    scale_shape = None
                return weight_shape, scale_shape
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                describe = ns["describe_linear_layout"]
                torch = ns["torch"]
                checks = []

                fp4 = describe(256, 512, torch.float4_e2m1fn_x2)
                checks.append({
                    "name": "FP4 packed weight + per-32 scale",
                    "passed": fp4 == ((512, 128), (512, 8)),
                    "expected": "((512, 128), (512, 8))",
                    "actual": repr(fp4),
                })

                fp8 = describe(320, 300, torch.float8_e4m3fn)
                checks.append({
                    "name": "FP8 per-128 block scale grid",
                    "passed": fp8 == ((300, 320), (3, 3)),
                    "expected": "((300, 320), (3, 3))",
                    "actual": repr(fp8),
                })

                bf = describe(8, 8, torch.bfloat16)
                checks.append({
                    "name": "BF16 keeps no scale",
                    "passed": bf == ((8, 8), None),
                    "expected": "((8, 8), None)",
                    "actual": repr(bf),
                })
                return checks
            """
        ),
    },
    {
        "id": "s03-tp-shard",
        "order": 3,
        "session": "s03",
        "stage": "foundations",
        "track": "model.py",
        "title": "Row vs Column Parallel Shards",
        "tagline": "Which axis of the weight gets sliced before forward() runs.",
        "difficulty": "Warm-up",
        "estimated_time": "8 min",
        "tags": ["tensor-parallel", "sharding"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 155,
        "line_end": 180,
        "summary": (
            "`ColumnParallelLinear` slices `out_features`; `RowParallelLinear` slices "
            "`in_features`. The shard happens in the constructor — by the time `forward()` "
            "runs, the weight already has the right local shape."
        ),
        "paper_anchor": {
            "section": "§3.1 Fine-Grained Comm-Compute Overlap",
            "figure": "Figure 2",
            "summary": (
                "Tensor-parallel sharding underpins the fused MoE kernels in §3.1: experts are "
                "split across ranks by output dim (column parallel) and later projected back by "
                "a row-parallel pass that all-reduces partials."
            ),
        },
        "source_mapping": {
            "real": (
                "`ColumnParallelLinear` (`model.py:155-163`) sets `self.part_out_features = "
                "out_features // world_size` then calls `super().__init__(in_features, "
                "self.part_out_features, ...)` so each rank only allocates its slice. "
                "`RowParallelLinear` (`model.py:166-180`) analogously slices `in_features` AND adds "
                "`dist.all_reduce(y)` in its `forward()` to sum partial results across ranks."
            ),
            "stub": (
                "`shard_linear` is a single function returning the post-shard `(in_features, "
                "out_features)` tuple — no `nn.Module`, no `dist`, no all-reduce. The puzzle "
                "isolates the SLICE-WHICH-AXIS choice; the all-reduce side of row-parallel is "
                "covered narratively in the surrounding interludes."
            ),
        },
        "what_you_learn": [
            "Column-parallel: `out_features //= world_size`, each rank holds a tile of the output.",
            "Row-parallel: `in_features //= world_size`, each rank holds a tile of the input, then all-reduce.",
            "Neither path needs to touch the *other* dimension — the split happens on exactly one axis.",
        ],
        "workshop_steps": [
            "Shard `out_features` in the column-parallel branch.",
            "Shard `in_features` in the row-parallel branch.",
            "Confirm the plain branch leaves both sizes unchanged.",
        ],
        "pitfalls": [
            "Integer divide (`//`) — fractional shards would fail at all-reduce time.",
            "The assertion `features % world_size == 0` is checked before `__init__`; don't duplicate it.",
        ],
        "blanks": [
            {
                "id": "col_out",
                "label": "Column-parallel out",
                "hint": "Column-parallel shards the output — `out_features // world_size`.",
                "starter": "out_features",
                "solution": "out_features // world_size",
            },
            {
                "id": "row_in",
                "label": "Row-parallel in",
                "hint": "Row-parallel shards the input — `in_features // world_size`.",
                "starter": "in_features",
                "solution": "in_features // world_size",
            },
        ],
        "starter_code": code(
            """
            def shard_linear(in_features, out_features, world_size, mode):
                if mode == "column":
                    out_features = __B_col_out__
                elif mode == "row":
                    in_features = __B_row_in__
                return in_features, out_features
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                shard = ns["shard_linear"]
                checks = []
                checks.append({
                    "name": "Column parallel shards output",
                    "passed": shard(1024, 1024, 4, "column") == (1024, 256),
                    "expected": "(1024, 256)",
                    "actual": repr(shard(1024, 1024, 4, "column")),
                })
                checks.append({
                    "name": "Row parallel shards input",
                    "passed": shard(1024, 1024, 4, "row") == (256, 1024),
                    "expected": "(256, 1024)",
                    "actual": repr(shard(1024, 1024, 4, "row")),
                })
                checks.append({
                    "name": "Plain mode leaves both alone",
                    "passed": shard(1024, 1024, 4, "plain") == (1024, 1024),
                    "expected": "(1024, 1024)",
                    "actual": repr(shard(1024, 1024, 4, "plain")),
                })
                return checks
            """
        ),
    },
    {
        "id": "s04-rmsnorm",
        "order": 4,
        "session": "s04",
        "stage": "foundations",
        "track": "model.py",
        "title": "RMSNorm in Float32",
        "tagline": "Variance → rsqrt → per-dim scale, promoted to FP32 first.",
        "difficulty": "Warm-up",
        "estimated_time": "9 min",
        "tags": ["rmsnorm", "normalization"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 183,
        "line_end": 196,
        "summary": (
            "DeepSeek-V4 keeps RMSNorm parameters in FP32 even though the checkpoint stores "
            "BF16. The computation path is: promote x → compute mean-square → rsqrt → "
            "multiply by learned scale → cast back."
        ),
        "paper_anchor": {
            "section": "§2.1 Designs Inherited from DeepSeek-V3",
            "figure": "Figure 2",
            "summary": (
                "RMSNorm is the default norm throughout the hybrid attention / MoE stack; its "
                "FP32 recipe is load-bearing for stability when activations live in FP8."
            ),
        },
        "source_mapping": {
            "real": (
                "`RMSNorm.forward` (`model.py:191-196`) is four vectorized lines: "
                "`x = x.float(); var = x.square().mean(-1, keepdim=True); "
                "x = x * torch.rsqrt(var + self.eps); return (self.weight * x).to(dtype)`. "
                "The FP32 promotion and the dtype round-trip are essential for stability when the "
                "input is BF16 / FP8."
            ),
            "stub": (
                "Pure-Python list math: `sum(value * value for value in row) / len(row)` for the "
                "mean-square, and `1.0 / ((var + eps) ** 0.5)` for the inverse RMS. No FP32 "
                "promotion, no broadcasting, no dtype handling. The formula and the placement of "
                "`eps` inside the sqrt are identical — only the tensor mechanics are stripped."
            ),
        },
        "what_you_learn": [
            "Why mean-square (not variance) is enough — RMSNorm drops the mean.",
            "Why `rsqrt(var + eps)` avoids divide-by-zero without branching.",
            "Why the scale parameter is elementwise — it isn't a full matrix multiply.",
        ],
        "workshop_steps": [
            "Compute the per-row mean square.",
            "Use `rsqrt(var + eps)` to form the inverse-RMS scale.",
            "Multiply by the learned per-dim `weight`.",
        ],
        "pitfalls": [
            "`rsqrt` of `var + eps`, not `sqrt(var) + eps` — the epsilon goes INSIDE the sqrt.",
        ],
        "blanks": [
            {
                "id": "mean_square",
                "label": "Mean square",
                "hint": "Average of `value * value` across the row.",
                "starter": "sum(value for value in row) / len(row)",
                "solution": "sum(value * value for value in row) / len(row)",
            },
            {
                "id": "inv_rms",
                "label": "Inverse RMS",
                "hint": "`1 / sqrt(var + eps)` — the epsilon lives inside the sqrt.",
                "starter": "1.0",
                "solution": "1.0 / ((var + eps) ** 0.5)",
            },
        ],
        "starter_code": code(
            """
            def rmsnorm(row, weight, eps=1e-6):
                var = __B_mean_square__
                scale = __B_inv_rms__
                return [weight[i] * row[i] * scale for i in range(len(row))]
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                rmsnorm = ns["rmsnorm"]
                checks = []

                out = rmsnorm([3.0, 4.0], [1.0, 1.0], eps=0.0)
                expected = [3.0 / (12.5 ** 0.5), 4.0 / (12.5 ** 0.5)]
                ok = all(abs(out[i] - expected[i]) < 1e-9 for i in range(2))
                checks.append({
                    "name": "Unit weight, zero eps",
                    "passed": ok,
                    "expected": repr(expected),
                    "actual": repr(out),
                })

                out = rmsnorm([1.0, 1.0, 1.0, 1.0], [2.0, 3.0, 4.0, 5.0], eps=0.0)
                expected = [2.0, 3.0, 4.0, 5.0]
                ok = all(abs(out[i] - expected[i]) < 1e-9 for i in range(4))
                checks.append({
                    "name": "Per-dim weight applied",
                    "passed": ok,
                    "expected": repr(expected),
                    "actual": repr(out),
                })
                return checks
            """
        ),
    },

    # ──────────────────────────────────────────────────────────────
    # Stage II — Rotary & YaRN
    # ──────────────────────────────────────────────────────────────
    {
        "id": "s05-yarn-base-freqs",
        "order": 5,
        "session": "s05",
        "stage": "rotary",
        "track": "model.py",
        "title": "Base RoPE Frequencies",
        "tagline": "Before YaRN stretches anything, you need the canonical table.",
        "difficulty": "Core",
        "estimated_time": "10 min",
        "tags": ["rope", "yarn"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 220,
        "line_end": 220,
        "summary": (
            "RoPE's building block is a geometric frequency table: for each pair index `i`, "
            "the frequency is `1 / base^(i / dim)`. DeepSeek-V4 precomputes it once then "
            "multiplies by position to get the rotation angle grid."
        ),
        "paper_anchor": {
            "section": "§2.3 Hybrid Attention",
            "figure": "Figure 3 — CSA (query-key rotation)",
            "summary": (
                "RoPE is the positional basis shared by the dense sliding-window part and the "
                "compressed KV path in CSA. Getting the frequency table right is a prerequisite "
                "for every later positional transform in the paper."
            ),
        },
        "source_mapping": {
            "real": (
                "Inside `precompute_freqs_cis` (`model.py:220`), this is a single vectorized "
                "expression: `freqs = 1.0 / (base ** (torch.arange(0, dim, 2, dtype=torch.float32) "
                "/ dim))`. It produces a 1-D FP32 tensor of length `dim // 2`, cached by "
                "`@lru_cache(2)` because it depends only on `dim` and `base`."
            ),
            "stub": (
                "A Python `for i in range(0, dim, 2)` loop emits one float per even index. Same "
                "formula, just unrolled element-by-element so the math reads top-to-bottom — no "
                "`torch.arange`, no caching, no FP32 dtype management."
            ),
        },
        "what_you_learn": [
            "Why the exponent walks over EVEN indices — each pair `(2i, 2i+1)` shares one frequency.",
            "Why `base = 10000` is the classical choice and how it controls frequency decay.",
        ],
        "workshop_steps": [
            "Produce one frequency per even pair index.",
            "Match the formula `1 / base^(i/dim)` exactly.",
        ],
        "pitfalls": [
            "`range(0, dim, 2)` — step of 2 because each frequency governs a 2-D rotation.",
        ],
        "blanks": [
            {
                "id": "freq_formula",
                "label": "Base frequency",
                "hint": "Compute `1 / (base ** (i / dim))` for the current even index `i`.",
                "starter": "0.0",
                "solution": "1.0 / (base ** (i / dim))",
            },
        ],
        "starter_code": code(
            """
            def build_base_freqs(dim, base):
                freqs = []
                for i in range(0, dim, 2):
                    freqs.append(__B_freq_formula__)
                return freqs
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                build_base_freqs = ns["build_base_freqs"]
                checks = []

                freqs = build_base_freqs(8, 10000.0)
                expected = [1.0, 0.1, 0.01, 0.001]
                ok = len(freqs) == 4 and all(abs(a - b) < 1e-9 for a, b in zip(freqs, expected))
                checks.append({
                    "name": "Standard RoPE(8, 10000)",
                    "passed": ok,
                    "expected": repr(expected),
                    "actual": repr(freqs),
                })

                freqs = build_base_freqs(4, 100.0)
                expected = [1.0, 0.1]
                ok = all(abs(a - b) < 1e-9 for a, b in zip(freqs, expected))
                checks.append({
                    "name": "Alternate base/dim",
                    "passed": ok,
                    "expected": repr(expected),
                    "actual": repr(freqs),
                })
                return checks
            """
        ),
    },
    {
        "id": "s06-yarn-smooth",
        "order": 6,
        "session": "s06",
        "stage": "rotary",
        "track": "model.py",
        "title": "YaRN Smooth Interpolation",
        "tagline": "Long context without retraining — stretch low frequencies, keep high ones.",
        "difficulty": "Core",
        "estimated_time": "12 min",
        "tags": ["rope", "yarn", "long-context"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 221,
        "line_end": 229,
        "summary": (
            "YaRN interpolates each base frequency toward `freq / factor` via a per-band "
            "smoothing curve. When `smooth[i] = 0`, that band is fully stretched; when "
            "`smooth[i] = 1`, the original RoPE frequency survives."
        ),
        "paper_anchor": {
            "section": "§2.3.3 Other Details",
            "figure": "Figure 3",
            "summary": (
                "DeepSeek-V4 uses YaRN to push the trained RoPE table out to 1M-token context "
                "without retraining. The linear-ramp smooth mask below is the mechanism that "
                "selectively protects high-frequency bands."
            ),
        },
        "source_mapping": {
            "real": (
                "After `smooth = 1 - linear_ramp_factor(low, high, dim // 2)`, "
                "`precompute_freqs_cis` (`model.py:221-229`) does the convex combination "
                "`freqs = freqs / factor * (1 - smooth) + freqs * smooth` (broadcasted over the "
                "frequency band axis), then `freqs = torch.outer(t, freqs)` to build the full "
                "angle grid, and finally `torch.polar(torch.ones_like(freqs), freqs)` converts to "
                "the complex-exponential `freqs_cis` table consumed by `apply_rotary_emb`."
            ),
            "stub": (
                "Two explicit Python loops — one per-band convex combination, one outer-product "
                "row. The polar / complex-exponential conversion is deferred to S07, which uses "
                "Python's built-in `complex` instead of `torch.view_as_complex`."
            ),
        },
        "what_you_learn": [
            "Why the interpolation is a convex combination `freq/factor·(1−s) + freq·s`.",
            "Why the smooth mask — not the factor — is the per-band knob.",
            "How the outer product with `t` produces the final angle grid.",
        ],
        "workshop_steps": [
            "Write the convex combination for each band.",
            "Scan `t` from 0..seqlen to build the outer product grid.",
        ],
        "pitfalls": [
            "`smooth_value = 0` should FULLY stretch (divide by `factor`), not leave alone.",
        ],
        "blanks": [
            {
                "id": "yarn_mix",
                "label": "YaRN mix",
                "hint": "Convex combination: `freq / factor * (1 - smooth_value) + freq * smooth_value`.",
                "starter": "freq",
                "solution": "freq / factor * (1 - smooth_value) + freq * smooth_value",
            },
            {
                "id": "angle_row",
                "label": "Position × frequency row",
                "hint": "For each time step `t`, return `[t * f for f in freqs]`.",
                "starter": "[0.0 for _ in freqs]",
                "solution": "[t * freq for freq in freqs]",
            },
        ],
        "starter_code": code(
            """
            def apply_yarn(freqs, factor, smooth):
                adjusted = []
                for freq, smooth_value in zip(freqs, smooth):
                    adjusted.append(__B_yarn_mix__)
                return adjusted

            def build_angle_grid(seqlen, freqs):
                grid = []
                for t in range(seqlen):
                    grid.append(__B_angle_row__)
                return grid
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                apply_yarn = ns["apply_yarn"]
                build_angle_grid = ns["build_angle_grid"]
                checks = []

                adjusted = apply_yarn([1.0, 0.5], 4.0, [0.0, 1.0])
                checks.append({
                    "name": "smooth=0 stretches, smooth=1 preserves",
                    "passed": abs(adjusted[0] - 0.25) < 1e-9 and abs(adjusted[1] - 0.5) < 1e-9,
                    "expected": "[0.25, 0.5]",
                    "actual": repr(adjusted),
                })

                grid = build_angle_grid(3, [1.0, 0.5])
                expected = [[0.0, 0.0], [1.0, 0.5], [2.0, 1.0]]
                checks.append({
                    "name": "Outer product grid",
                    "passed": grid == expected,
                    "expected": repr(expected),
                    "actual": repr(grid),
                })
                return checks
            """
        ),
    },
    {
        "id": "s07-apply-rotary",
        "order": 7,
        "session": "s07",
        "stage": "rotary",
        "track": "model.py",
        "title": "Apply Rotary Embedding",
        "tagline": "Pack pairs → complex multiply → conjugate if inverse.",
        "difficulty": "Core",
        "estimated_time": "12 min",
        "tags": ["rotary", "complex"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 232,
        "line_end": 244,
        "summary": (
            "Each rotary step treats the last dimension as an array of (x, y) complex pairs, "
            "multiplies by the precomputed `freqs_cis`, and (optionally) takes the conjugate "
            "to reverse the rotation — that's exactly what CSA needs after attention."
        ),
        "paper_anchor": {
            "section": "§2.3.1 Compressed Sparse Attention",
            "figure": "Figure 3",
            "summary": (
                "DSA-style attention rotates both Q and K in CSA, then *unrotates* the attention "
                "output via the inverse path so that the residual stream stays un-rotated — this "
                "conjugate trick replaces a second matrix parameter."
            ),
        },
        "source_mapping": {
            "real": (
                "`apply_rotary_emb` (`model.py:232-244`) does "
                "`x = torch.view_as_complex(x.float().unflatten(-1, (-1, 2)))`, optionally "
                "`freqs_cis = freqs_cis.conj()` for inverse, then "
                "`x = torch.view_as_real(x * freqs_cis).flatten(-2)` and writes back in-place via "
                "`y.copy_(x)`. FP32 promotion is mandatory — BF16 lacks the precision for the "
                "complex multiply at long-context positions."
            ),
            "stub": (
                "Uses Python's built-in `complex(x, y)` to pack adjacent floats into complex "
                "numbers — a stand-in for `view_as_complex`. The conjugate-on-inverse trick is "
                "identical; the only differences are no in-place writeback, no FP32 promotion, and "
                "no broadcast-shape juggling for 3-D vs 4-D inputs."
            ),
        },
        "what_you_learn": [
            "Why inverse rotation is just the complex conjugate — no separate coefficients.",
            "Why packing (x, y) into a single complex number keeps the math one line.",
        ],
        "workshop_steps": [
            "Conjugate each entry of `freqs_cis` in the inverse branch.",
            "Multiply each 2-D pair by the corresponding frequency.",
        ],
        "pitfalls": [
            "`complex(x, y)` — the real part comes first.",
            "`freq_row[pair_index // 2]` — one frequency per PAIR, not per element.",
        ],
        "blanks": [
            {
                "id": "inverse_conj",
                "label": "Inverse → conjugate",
                "hint": "Inverse rotation uses `conjugate(value)` across every `freqs_cis` entry.",
                "starter": "value",
                "solution": "conjugate(value)",
            },
            {
                "id": "complex_mul",
                "label": "Complex multiply",
                "hint": "Rotate one pair: `z * factor`.",
                "starter": "z",
                "solution": "z * factor",
            },
        ],
        "starter_code": code(
            """
            def conjugate(z):
                return complex(z.real, -z.imag)

            def apply_rotary_emb(vectors, freqs_cis, inverse=False):
                if inverse:
                    freqs_cis = [[__B_inverse_conj__ for value in row] for row in freqs_cis]

                output = []
                for vector, freq_row in zip(vectors, freqs_cis):
                    rotated = []
                    for pair_index in range(0, len(vector), 2):
                        z = complex(vector[pair_index], vector[pair_index + 1])
                        factor = freq_row[pair_index // 2]
                        y = __B_complex_mul__
                        rotated.extend([round(y.real, 6), round(y.imag, 6)])
                    output.append(rotated)
                return output
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                apply_rotary_emb = ns["apply_rotary_emb"]
                checks = []

                freq = complex(0.0, 1.0)
                forward = apply_rotary_emb([[1.0, 0.0, 0.0, 1.0]], [[freq, freq]])
                checks.append({
                    "name": "90° rotation",
                    "passed": forward == [[0.0, 1.0, -1.0, 0.0]],
                    "expected": "[[0.0, 1.0, -1.0, 0.0]]",
                    "actual": repr(forward),
                })

                inverse = apply_rotary_emb(forward, [[freq, freq]], inverse=True)
                checks.append({
                    "name": "Inverse via conjugate",
                    "passed": inverse == [[1.0, 0.0, 0.0, 1.0]],
                    "expected": "[[1.0, 0.0, 0.0, 1.0]]",
                    "actual": repr(inverse),
                })
                return checks
            """
        ),
    },

    # ──────────────────────────────────────────────────────────────
    # Stage III — Compressed Attention
    # ──────────────────────────────────────────────────────────────
    {
        "id": "s08-compressor-prefill",
        "order": 8,
        "session": "s08",
        "stage": "attention",
        "track": "model.py",
        "title": "Compressor Prefill",
        "tagline": "Slice into windows of ratio m, then softmax-pool each one.",
        "difficulty": "Core",
        "estimated_time": "14 min",
        "tags": ["csa", "compressor"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 316,
        "line_end": 342,
        "summary": (
            "In prefill the Compressor slices the sequence into fixed `ratio`-sized windows, "
            "softmaxes the learned score tensor *along the window*, and reduces each window "
            "into a single compressed KV entry."
        ),
        "paper_anchor": {
            "section": "§2.3.1 Compressed Sparse Attention — eq. (11) & (12)",
            "figure": "Figure 3",
            "summary": (
                "This is the central equation behind CSA: per-window softmax over `Z`, then a "
                "Hadamard-weighted sum of `C` — reducing n tokens into n/m compressed entries."
            ),
        },
        "source_mapping": {
            "real": (
                "`Compressor.forward` (`model.py:316-342`) projects `kv = self.wkv(x)` and "
                "`score = self.wgate(x)`, calls `kv = kv.unflatten(1, (-1, ratio))` to slice the "
                "sequence into windows, adds the learned positional embedding `self.ape`, "
                "optionally calls `self.overlap_transform` for `compress_ratio == 4`, and finally "
                "fuses the per-window pool as `kv = (kv * score.softmax(dim=2)).sum(dim=2)` — one "
                "softmax-then-weighted-sum tensor expression."
            ),
            "stub": (
                "An explicit Python `for start in range(0, len(kv_rows), ratio)` loop slices the "
                "sequence, then `weighted_sum(window, softmax(scores))` does the per-window pool. "
                "The puzzle ignores the `wkv` / `wgate` projections, the `self.ape` embedding, the "
                "overlap transform, and the decode-state buffers (those are covered in interludes "
                "i09 / i10) so you focus on the softmax-pool recipe itself."
            ),
        },
        "what_you_learn": [
            "Why the softmax goes along the WINDOW axis — it redistributes weight across the m entries, not across features.",
            "Why an incomplete trailing window must be skipped (saved into `kv_state` instead).",
        ],
        "workshop_steps": [
            "Decide `should_compress` — need at least one full window.",
            "Softmax-pool each full window into one compressed KV row.",
        ],
        "pitfalls": [
            "Softmax goes along dim=1 (window), not dim=0 (sequence) or dim=-1 (features).",
        ],
        "blanks": [
            {
                "id": "should_compress",
                "label": "Enough tokens?",
                "hint": "`len(kv_rows) >= ratio` — at least one complete window is available.",
                "starter": "False",
                "solution": "len(kv_rows) >= ratio",
            },
            {
                "id": "pool_window",
                "label": "Weighted pooling",
                "hint": "Call `weighted_sum(window_kv, weights)` where `weights = softmax(window_scores)`.",
                "starter": "[0.0 for _ in window_kv[0]]",
                "solution": "weighted_sum(window_kv, weights)",
            },
        ],
        "starter_code": code(
            """
            def softmax(values):
                exps = [2.718281828 ** value for value in values]
                total = sum(exps)
                return [value / total for value in exps]

            def weighted_sum(vectors, weights):
                cols = len(vectors[0])
                return [sum(vectors[row][col] * weights[row] for row in range(len(vectors))) for col in range(cols)]

            def compress_prefill(kv_rows, score_rows, ratio):
                if not __B_should_compress__:
                    return None
                compressed = []
                for start in range(0, len(kv_rows), ratio):
                    window_kv = kv_rows[start:start + ratio]
                    window_scores = score_rows[start:start + ratio]
                    if len(window_kv) < ratio:
                        break
                    weights = softmax(window_scores)
                    compressed.append(__B_pool_window__)
                return compressed
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                compress_prefill = ns["compress_prefill"]
                checks = []

                not_ready = compress_prefill([[1.0, 1.0]], [0.0], 2)
                checks.append({
                    "name": "Short prefill returns None",
                    "passed": not_ready is None,
                    "expected": "None",
                    "actual": repr(not_ready),
                })

                kv = [[1.0, 0.0], [3.0, 0.0], [0.0, 2.0], [0.0, 6.0]]
                scores = [0.0, 1.0, 0.0, 1.0]
                out = compress_prefill(kv, scores, 2)
                expected = [[2.4621171572600096, 0.0], [0.0, 4.924234314520019]]
                ok = out is not None and all(
                    abs(out[i][j] - expected[i][j]) < 1e-6 for i in range(2) for j in range(2)
                )
                checks.append({
                    "name": "Softmax-pooled windows",
                    "passed": ok,
                    "expected": repr(expected),
                    "actual": repr(out),
                })
                return checks
            """
        ),
    },
    {
        "id": "s09-window-cache",
        "order": 9,
        "session": "s09",
        "stage": "attention",
        "track": "model.py",
        "title": "Window KV Cache",
        "tagline": "Prefill keeps the tail; decode rewrites at (start_pos mod W).",
        "difficulty": "Core",
        "estimated_time": "12 min",
        "tags": ["kv-cache", "ring"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 517,
        "line_end": 533,
        "summary": (
            "The sliding-window part of Attention stores a fixed-size cache of the most recent "
            "KV rows. Prefill writes the last `window_size` entries in order; decode overwrites "
            "one slot at `start_pos % window_size`."
        ),
        "paper_anchor": {
            "section": "§2.3.3 Other Details (Sliding Window)",
            "figure": "Figure 3",
            "summary": (
                "CSA augments sparse top-k with a small sliding window to preserve fine-grained "
                "local structure. This code is where that window survives across autoregressive steps."
            ),
        },
        "source_mapping": {
            "real": (
                "Inside `Attention.forward` (`model.py:517-533`), short prefill is "
                "`self.kv_cache[:bsz, :seqlen] = kv`; long prefill splits and rotates so the ring "
                "already starts at the correct position: `cutoff = seqlen % win`, then "
                "`self.kv_cache[:bsz, cutoff:win], self.kv_cache[:bsz, :cutoff] = "
                "kv[:, -win:].split([win - cutoff, cutoff], dim=1)`. Decode is a single in-place "
                "tensor index write at slot `start_pos % win`."
            ),
            "stub": (
                "`write_kv_cache` operates on a Python `list` instead of a `torch.Tensor` and "
                "skips the prefill split/rotate trick — it just keeps the last `window_size` "
                "elements unrotated. The decode branch's `start_pos % window_size` index is "
                "identical to the real code."
            ),
        },
        "what_you_learn": [
            "Why the prefill path falls back to `values[-window_size:]` when the input is longer than the window.",
            "Why `start_pos % window_size` makes the cache *effectively circular* at no extra cost.",
        ],
        "workshop_steps": [
            "Keep the LAST `window_size` entries in the long-prefill branch.",
            "Overwrite slot `start_pos % window_size` during decode.",
        ],
        "pitfalls": [
            "During decode only a single token is added per step — `values[0]` suffices.",
        ],
        "blanks": [
            {
                "id": "prefill_tail",
                "label": "Prefill tail",
                "hint": "Return the last `window_size` entries: `list(values[-window_size:])`.",
                "starter": "list(values[:window_size])",
                "solution": "list(values[-window_size:])",
            },
            {
                "id": "decode_idx",
                "label": "Decode ring index",
                "hint": "`start_pos % window_size` — modulo keeps the buffer circular.",
                "starter": "0",
                "solution": "start_pos % window_size",
            },
        ],
        "starter_code": code(
            """
            def write_kv_cache(cache, values, start_pos, window_size):
                cache = list(cache)
                if start_pos == 0:
                    if len(values) <= window_size:
                        return values + cache[len(values):]
                    return __B_prefill_tail__
                write_index = __B_decode_idx__
                cache[write_index] = values[0]
                return cache
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                write_kv_cache = ns["write_kv_cache"]
                checks = []

                short = write_kv_cache(["a", "b", "c", "d"], ["x", "y"], 0, 4)
                checks.append({
                    "name": "Short prefill fills from 0",
                    "passed": short == ["x", "y", "c", "d"],
                    "expected": "['x', 'y', 'c', 'd']",
                    "actual": repr(short),
                })

                long = write_kv_cache(["a", "b", "c", "d"], ["x", "y", "z", "w", "u"], 0, 4)
                checks.append({
                    "name": "Long prefill keeps tail window",
                    "passed": long == ["y", "z", "w", "u"],
                    "expected": "['y', 'z', 'w', 'u']",
                    "actual": repr(long),
                })

                decode = write_kv_cache(["a", "b", "c", "d"], ["x"], 6, 4)
                checks.append({
                    "name": "Decode ring write at 6 % 4 = 2",
                    "passed": decode == ["a", "b", "x", "d"],
                    "expected": "['a', 'b', 'x', 'd']",
                    "actual": repr(decode),
                })
                return checks
            """
        ),
    },
    {
        "id": "s10-topk-merge",
        "order": 10,
        "session": "s10",
        "stage": "attention",
        "track": "model.py",
        "title": "Window + Compressed Top-k",
        "tagline": "Merge window indices with the indexer's top-k, then drop sentinels.",
        "difficulty": "Core",
        "estimated_time": "10 min",
        "tags": ["topk", "merge"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 507,
        "line_end": 516,
        "summary": (
            "Before sparse attention fires, the `topk_idxs` tensor concatenates the dense window "
            "indices with the sparse top-k from the Indexer. Entries equal to `-1` are masked "
            "(turn into zero contributions inside the kernel)."
        ),
        "paper_anchor": {
            "section": "§2.3.1 CSA — eq. (17)",
            "figure": "Figure 3",
            "summary": (
                "This is the data-plane version of eq. (17): the union of sliding-window KV and "
                "top-k compressed KV, which the sparse attention kernel reads in lock-step."
            ),
        },
        "source_mapping": {
            "real": (
                "In `Attention.forward` (`model.py:507-516`), this is "
                "`topk_idxs = get_window_topk_idxs(win, bsz, seqlen, start_pos)` followed by "
                "`topk_idxs = torch.cat([topk_idxs, compress_topk_idxs], dim=-1)` and "
                "`topk_idxs = topk_idxs.int()`. Crucially the `-1` sentinel is NOT filtered here — "
                "it is read by `sparse_attn_kernel` (`kernel.py:323-327`) which masks "
                "`idxs[i] != -1` to zero out those gather lanes."
            ),
            "stub": (
                "`build_topk_plan` does the concat in pure Python and additionally filters `-1` "
                "out of the result. That trailing filter is purely a *test affordance* so the "
                "validator can compare a clean list — the real production path keeps the "
                "sentinels in place all the way to the kernel."
            ),
        },
        "what_you_learn": [
            "Why `-1` is kept as an explicit sentinel rather than excised early — the kernel uses it to zero-out contributions.",
            "Why the concat order matters for block-aligned cache reads.",
        ],
        "workshop_steps": [
            "Concatenate window indices and compressed indices in that order.",
            "Drop sentinel `-1` values from the return plan.",
        ],
        "pitfalls": [
            "The sentinel filter happens AFTER the merge — the concatenation itself may contain -1s.",
        ],
        "blanks": [
            {
                "id": "merge_topk",
                "label": "Merge indices",
                "hint": "Append `compress_topk` to `window_topk` when the former is non-empty.",
                "starter": "merged",
                "solution": "merged + list(compress_topk)",
            },
        ],
        "starter_code": code(
            """
            def build_topk_plan(window_topk, compress_topk):
                merged = list(window_topk)
                if compress_topk:
                    merged = __B_merge_topk__
                return [value for value in merged if value != -1]
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                plan = ns["build_topk_plan"]
                checks = []
                checks.append({
                    "name": "Concat then drop sentinel",
                    "passed": plan([3, 4, -1], [8, 9]) == [3, 4, 8, 9],
                    "expected": "[3, 4, 8, 9]",
                    "actual": repr(plan([3, 4, -1], [8, 9])),
                })
                checks.append({
                    "name": "Empty compressed is fine",
                    "passed": plan([0, -1, 2], []) == [0, 2],
                    "expected": "[0, 2]",
                    "actual": repr(plan([0, -1, 2], [])),
                })
                return checks
            """
        ),
    },
    {
        "id": "s11-indexer-score",
        "order": 11,
        "session": "s11",
        "stage": "attention",
        "track": "model.py",
        "title": "Lightning Indexer Scoring",
        "tagline": "Per-head ReLU dot products, weighted and summed.",
        "difficulty": "Advanced",
        "estimated_time": "12 min",
        "tags": ["indexer", "top-k"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 418,
        "line_end": 427,
        "summary": (
            "Index scores are: per head, take `ReLU(q @ k)`; weight by a learned per-head scale; "
            "sum across heads. The Indexer then runs top-k over this scalar score per query."
        ),
        "paper_anchor": {
            "section": "§2.3.1 Lightning Indexer — eq. (15)/(16)",
            "figure": "Figure 3",
            "summary": (
                "Equations 15–16 in the paper. The ReLU is critical — it zeroes out negative "
                "alignments so the top-k survives noisy queries."
            ),
        },
        "source_mapping": {
            "real": (
                "Inside `Indexer.forward` (`model.py:418-427`), the score is "
                "`index_score = torch.einsum('bshd,btd->bsht', q, self.kv_cache[:bsz, :end_pos // ratio])` "
                "— a batched per-head Q·K — followed by "
                "`(index_score.relu_() * weights.unsqueeze(-1)).sum(dim=2)`. The result is "
                "all-reduced across TP ranks, masked, and finally fed to `topk(...)`."
            ),
            "stub": (
                "An explicit triple-loop (head, then dot-product, then accumulate) computes the "
                "same scalar score for one (q, k) pair. No batching, no `einsum`, no `topk` — the "
                "puzzle isolates the per-head ReLU + head-weighted-sum recipe; the surrounding "
                "top-k selection is structurally trivial once the score is correct."
            ),
        },
        "what_you_learn": [
            "Why ReLU clips negatives — negative alignments shouldn't pull a key into the top-k.",
            "Why the head-weight is multiplied AFTER the ReLU.",
        ],
        "workshop_steps": [
            "Compute ReLU of each head's dot product.",
            "Multiply each ReLU'd score by the head weight and accumulate.",
        ],
        "pitfalls": [
            "`max(0, ...)` — `abs(...)` would double-count negatives.",
        ],
        "blanks": [
            {
                "id": "relu_dot",
                "label": "ReLU(q·k)",
                "hint": "`max(0.0, dot)` of the current head's query and key.",
                "starter": "dot",
                "solution": "max(0.0, dot)",
            },
            {
                "id": "head_weighted",
                "label": "Weighted sum",
                "hint": "Multiply the ReLU score by `head_weights[h]` before summing.",
                "starter": "relu",
                "solution": "head_weights[h] * relu",
            },
        ],
        "starter_code": code(
            """
            def index_score(queries, keys, head_weights):
                # queries: [h][d], keys: [d], head_weights: [h]
                total = 0.0
                for h in range(len(queries)):
                    dot = sum(queries[h][i] * keys[i] for i in range(len(keys)))
                    relu = __B_relu_dot__
                    total += __B_head_weighted__
                return total
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                index_score = ns["index_score"]
                checks = []

                score = index_score([[1.0, 0.0], [0.0, -1.0]], [1.0, 1.0], [2.0, 3.0])
                checks.append({
                    "name": "Negative head zeroed by ReLU",
                    "passed": abs(score - 2.0) < 1e-9,
                    "expected": "2.0",
                    "actual": repr(score),
                })

                score = index_score([[1.0, 1.0], [2.0, 0.0]], [1.0, 0.0], [1.0, 0.5])
                checks.append({
                    "name": "Weighted sum across heads",
                    "passed": abs(score - 2.0) < 1e-9,
                    "expected": "2.0",
                    "actual": repr(score),
                })
                return checks
            """
        ),
    },

    # ──────────────────────────────────────────────────────────────
    # Stage IV — Routing & Hyper-Connections
    # ──────────────────────────────────────────────────────────────
    {
        "id": "s12-gate",
        "order": 12,
        "session": "s12",
        "stage": "routing",
        "track": "model.py",
        "title": "Gate — sqrtsoftplus + Bias",
        "tagline": "Bias nudges selection. Weights stay from the raw affinity.",
        "difficulty": "Core",
        "estimated_time": "12 min",
        "tags": ["gate", "moe"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 564,
        "line_end": 584,
        "summary": (
            "DeepSeek-V4's Gate defaults to `sqrt(softplus(scores))`. A learnable bias shifts "
            "only the ranking used for top-k; the returned routing weight comes from the "
            "original un-biased score."
        ),
        "paper_anchor": {
            "section": "§2.1 Designs Inherited — activation change from sigmoid to sqrtsoftplus",
            "figure": "Figure 2",
            "summary": (
                "Paper change from V3: the affinity function is `sqrt(softplus(·))`, and a "
                "bias-assisted top-k keeps load balanced without distorting the routing weights."
            ),
        },
        "source_mapping": {
            "real": (
                "`Gate.forward` (`model.py:564-584`) does `scores = linear(x.float(), "
                "self.weight.float())`, applies the chosen activation (default "
                "`F.softplus(scores).sqrt()`), saves `original_scores = scores`, and only THEN "
                "adds `self.bias` for selection. Indices come from `scores.topk(self.topk, "
                "dim=-1)[1]`, weights come from `original_scores.gather(1, indices)`, and "
                "non-softmax branches additionally re-normalize via `weights /= weights.sum(...)`."
            ),
            "stub": (
                "The puzzle replaces `sqrt(softplus(...))` with plain `softmax` for simplicity, "
                "but keeps the critical separation between *shifted* scores (used to pick the "
                "top-k) and *original* scores (used for the routing weight). Python helpers "
                "`topk_indices` and `gather` mirror their PyTorch counterparts one-to-one."
            ),
        },
        "what_you_learn": [
            "Why the bias term only influences SELECTION, not the final routing weight.",
            "Why the softmax path is the only branch that already sums to 1 and doesn't need renormalization.",
        ],
        "workshop_steps": [
            "Shift scores by bias only for the top-k ranking.",
            "Gather the routing weights from the ORIGINAL (unshifted) scores.",
        ],
        "pitfalls": [
            "When `bias is None` you still want a copy so the caller can't mutate internal state.",
        ],
        "blanks": [
            {
                "id": "shift_with_bias",
                "label": "Selection bias",
                "hint": "`[score + bias[i] for i, score in enumerate(original_scores)]`.",
                "starter": "list(original_scores)",
                "solution": "[score + bias[i] for i, score in enumerate(original_scores)]",
            },
            {
                "id": "gather_weights",
                "label": "Gather weights",
                "hint": "Use the ORIGINAL `original_scores`, not the shifted ones.",
                "starter": "[0.0 for _ in indices]",
                "solution": "gather(original_scores, indices)",
            },
        ],
        "starter_code": code(
            """
            def softmax(values):
                exps = [2.718281828 ** value for value in values]
                total = sum(exps)
                return [value / total for value in exps]

            def gather(values, indices):
                return [values[i] for i in indices]

            def topk_indices(values, k):
                pairs = sorted(enumerate(values), key=lambda item: item[1], reverse=True)
                return [index for index, _ in pairs[:k]]

            def gate(scores, topk, bias=None, route_scale=1.0):
                original_scores = softmax(scores)
                if bias is not None:
                    shifted = __B_shift_with_bias__
                else:
                    shifted = list(original_scores)
                indices = topk_indices(shifted, topk)
                weights = __B_gather_weights__
                return [w * route_scale for w in weights], indices
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                gate = ns["gate"]
                checks = []

                weights, indices = gate([1.0, 2.0, 3.0], topk=2)
                checks.append({
                    "name": "Top-k without bias",
                    "passed": indices == [2, 1] and weights[0] > weights[1],
                    "expected": "indices=[2, 1], weights sorted desc",
                    "actual": f"indices={indices!r}, weights={weights!r}",
                })

                weights, indices = gate([1.0, 2.0, 3.0], topk=1, bias=[5.0, 0.0, -10.0])
                checks.append({
                    "name": "Bias reroutes selection, keeps original weights",
                    "passed": indices == [0] and abs(weights[0] - 0.09003057324840764) < 1e-9,
                    "expected": "indices=[0], weight≈0.0900305...",
                    "actual": f"indices={indices!r}, weights={weights!r}",
                })
                return checks
            """
        ),
    },
    {
        "id": "s13-moe-dispatch",
        "order": 13,
        "session": "s13",
        "stage": "routing",
        "track": "model.py",
        "title": "Sparse MoE Dispatch",
        "tagline": "`bincount` decides who runs. `where` decides which tokens.",
        "difficulty": "Core",
        "estimated_time": "12 min",
        "tags": ["moe", "dispatch"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 635,
        "line_end": 645,
        "summary": (
            "`MoE.forward` skips experts that received no tokens, then gathers `(idx, top)` "
            "pairs per expert and accumulates their contribution with the routing weight. "
            "A shared expert runs unconditionally on every token."
        ),
        "paper_anchor": {
            "section": "§2.1 DeepSeekMoE",
            "figure": "Figure 2",
            "summary": (
                "Fine-grained experts + shared expert is the DeepSeekMoE recipe; the sparse "
                "execution below avoids launching inactive experts entirely."
            ),
        },
        "source_mapping": {
            "real": (
                "`MoE.forward` (`model.py:630-645`) does `counts = torch.bincount("
                "indices.flatten(), minlength=...).tolist()` to skip empty experts, then for each "
                "active expert `i`: `idx, top = torch.where(indices == i); "
                "y[idx] += expert(x[idx], weights[idx, top, None])`. After the routed loop it "
                "all-reduces `y` across TP ranks and unconditionally adds "
                "`y += self.shared_experts(x)`."
            ),
            "stub": (
                "Pure-Python equivalents: `count_indices` mirrors `bincount`, the comprehension "
                "`[(t, k) for t, row in enumerate(routed) ...]` mirrors `torch.where`, and outputs "
                "are scalars instead of tensor rows. The bincount-based skip and the "
                "shared-expert add are preserved exactly."
            ),
        },
        "what_you_learn": [
            "Why `bincount` is a cheap way to avoid launching inactive experts.",
            "Why `(token_idx, top_slot)` must BOTH be preserved — `top_slot` is the index into the routing-weight tensor.",
        ],
        "workshop_steps": [
            "Compute the positions where this expert id appears in `routed`.",
            "Accumulate `expert(x) * weight` into the output.",
        ],
        "pitfalls": [
            "The shared expert is always invoked — don't gate it on routing counts.",
        ],
        "blanks": [
            {
                "id": "expert_positions",
                "label": "Find positions",
                "hint": "Nested loop: for each token, find every `top_slot` where `routed[token][top_slot] == expert_id`.",
                "starter": "[]",
                "solution": "[(t, k) for t, row in enumerate(routed) for k, e in enumerate(row) if e == expert_id]",
            },
            {
                "id": "expert_contrib",
                "label": "Expert contribution",
                "hint": "`expert_fn(inputs[t]) * weights[t][k]` — weight lives at the top slot, not the expert id.",
                "starter": "0.0",
                "solution": "expert_fn(inputs[t]) * weights[t][k]",
            },
        ],
        "starter_code": code(
            """
            def count_indices(routed):
                counts = {}
                for row in routed:
                    for expert_id in row:
                        counts[expert_id] = counts.get(expert_id, 0) + 1
                return counts

            def moe_forward(inputs, routed, weights, experts, shared_expert):
                outputs = [0.0 for _ in inputs]
                counts = count_indices(routed)

                for expert_id, expert_fn in experts.items():
                    if counts.get(expert_id, 0) == 0:
                        continue
                    positions = __B_expert_positions__
                    for t, k in positions:
                        outputs[t] += __B_expert_contrib__

                for t, value in enumerate(inputs):
                    outputs[t] += shared_expert(value)
                return outputs
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                moe_forward = ns["moe_forward"]
                experts = {0: lambda x: x + 1, 1: lambda x: x * 10}
                shared = lambda x: x * 100
                out = moe_forward(
                    inputs=[1.0, 2.0],
                    routed=[[1], [0, 1]],
                    weights=[[0.5], [0.2, 0.3]],
                    experts=experts,
                    shared_expert=shared,
                )
                expected = [105.0, 206.6]
                ok = all(abs(a - b) < 1e-9 for a, b in zip(out, expected))
                return [{
                    "name": "Sparse routing + shared expert",
                    "passed": ok,
                    "expected": repr(expected),
                    "actual": repr(out),
                }]
            """
        ),
    },
    {
        "id": "s14-expert-swiglu",
        "order": 14,
        "session": "s14",
        "stage": "routing",
        "track": "model.py",
        "title": "SwiGLU Expert",
        "tagline": "`silu(gate) * up` — the Expert kernel in three lines of math.",
        "difficulty": "Warm-up",
        "estimated_time": "8 min",
        "tags": ["swiglu", "expert"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 589,
        "line_end": 606,
        "summary": (
            "Each Expert is a classic SwiGLU FFN: two parallel projections `gate = w1(x)` and "
            "`up = w3(x)`, combined as `silu(gate) * up`, then a down-projection `w2`."
        ),
        "paper_anchor": {
            "section": "§2.1 DeepSeekMoE Experts",
            "figure": "—",
            "summary": (
                "Standard SwiGLU FFN reused from V3; DeepSeek-V4 additionally supports FP4 "
                "routed-expert weights via the Linear dispatch you built in s01."
            ),
        },
        "source_mapping": {
            "real": (
                "`Expert.forward` (`model.py:596-606`) computes `gate = self.w1(x).float(); "
                "up = self.w3(x).float()`, optionally clamps `up` and `gate` to "
                "`self.swiglu_limit`, then `x = F.silu(gate) * up`, applies `weights * x` if "
                "MoE-routed, and finally projects back via `self.w2(x.to(dtype))`. All three "
                "linears go through your `linear()` dispatcher from S01."
            ),
            "stub": (
                "The puzzle skips both the `w1` / `w2` / `w3` projections and the optional "
                "clamping — it focuses on the `silu(gate) * up` core multiplication, elementwise "
                "in pure Python. The optional `route_weight` knob is preserved because that one "
                "line is reused inside the MoE loop in S13."
            ),
        },
        "what_you_learn": [
            "Why SwiGLU multiplies SiLU(gate) elementwise with a separate `up` projection.",
            "Why optional clipping on `gate` / `up` stabilises FP4 training.",
        ],
        "workshop_steps": [
            "Compute `silu(gate) * up` elementwise.",
            "Apply `route_weight` if provided (MoE context).",
        ],
        "pitfalls": [
            "`silu(x) = x / (1 + exp(-x))` — don't mix it up with GELU.",
        ],
        "blanks": [
            {
                "id": "silu_mul",
                "label": "SwiGLU combine",
                "hint": "Elementwise `silu(gate[i]) * up[i]`.",
                "starter": "[0.0 for _ in gate]",
                "solution": "[silu(gate[i]) * up[i] for i in range(len(gate))]",
            },
        ],
        "starter_code": code(
            """
            import math

            def silu(x):
                return x / (1.0 + math.exp(-x))

            def expert(gate, up, route_weight=None):
                hidden = __B_silu_mul__
                if route_weight is not None:
                    hidden = [route_weight * value for value in hidden]
                return hidden
            """
        ),
        "validator_code": code(
            """
            import math

            def run_checks(ns):
                expert = ns["expert"]
                silu = ns["silu"]
                checks = []

                out = expert([0.0, 2.0], [3.0, 5.0])
                expected = [silu(0.0) * 3.0, silu(2.0) * 5.0]
                ok = all(abs(a - b) < 1e-9 for a, b in zip(out, expected))
                checks.append({
                    "name": "Elementwise SwiGLU",
                    "passed": ok,
                    "expected": repr(expected),
                    "actual": repr(out),
                })

                out = expert([1.0], [1.0], route_weight=0.5)
                expected = [0.5 * silu(1.0)]
                ok = all(abs(a - b) < 1e-9 for a, b in zip(out, expected))
                checks.append({
                    "name": "Routing weight applied",
                    "passed": ok,
                    "expected": repr(expected),
                    "actual": repr(out),
                })
                return checks
            """
        ),
    },
    {
        "id": "s15-hc-pre",
        "order": 15,
        "session": "s15",
        "stage": "routing",
        "track": "model.py",
        "title": "mHC Pre-Mix",
        "tagline": "Collapse `hc_mult` residual lanes into one, via RMS-normed logits.",
        "difficulty": "Advanced",
        "estimated_time": "12 min",
        "tags": ["mhc", "hyper-connections"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 674,
        "line_end": 682,
        "summary": (
            "`hc_pre()` RMS-normalises the flat residual, scales the `pre` logits, and then "
            "reduces `hc_mult` lanes into a single d-dim vector that the Attention / MoE see."
        ),
        "paper_anchor": {
            "section": "§2.2 Manifold-Constrained Hyper-Connections — eq. (3)",
            "figure": "Figure 2 (Residual/Pre-Block/Post-Block Mixing)",
            "summary": (
                "eq. (3) writes the input mapping Â_l · X_l; the code below is the fused "
                "RMS-norm + mixing step that materialises it at each block boundary."
            ),
        },
        "source_mapping": {
            "real": (
                "`Block.hc_pre` (`model.py:674-682`) flattens `[b, s, hc, d] → [b, s, hc*d]`, "
                "computes `rsqrt = torch.rsqrt(x.square().mean(-1, keepdim=True) + eps)`, projects "
                "`mixes = F.linear(x, hc_fn) * rsqrt`, then calls the TileLang kernel "
                "`hc_split_sinkhorn(mixes, hc_scale, hc_base, ...)` which returns "
                "`(pre, post, comb)`. Finally `y = (pre.unsqueeze(-1) * x.view(shape)).sum(dim=2)` "
                "collapses the `hc` lane axis with a learned weighted sum."
            ),
            "stub": (
                "The puzzle skips the `hc_fn` projection AND the TileLang Sinkhorn kernel "
                "entirely — it pre-supplies the lane logits as an input and only asks you to wire "
                "the rsqrt-scale → softmax-like-normalize → weighted-collapse pipeline. The "
                "Sinkhorn kernel itself is the subject of S20."
            ),
        },
        "what_you_learn": [
            "Why mixing weights come from the CURRENT token, not a fixed residual coefficient.",
            "Why the RMS scale has to use the FLATTENED residual — not per-lane statistics.",
        ],
        "workshop_steps": [
            "Scale the `pre` logits by the inverse-RMS factor.",
            "Normalize the scaled logits to a weight distribution.",
            "Collapse lanes with a weighted sum.",
        ],
        "pitfalls": [
            "`sum(scaled_logits)` is your denominator only because logits are non-negative here — upstream the paper uses `sigmoid(·) + eps`.",
        ],
        "blanks": [
            {
                "id": "scale_logit",
                "label": "Scale logit",
                "hint": "Multiply each logit by the inverse-RMS `scale`.",
                "starter": "value",
                "solution": "value * scale",
            },
            {
                "id": "collapse",
                "label": "Collapse lanes",
                "hint": "For each column, weighted-sum across lanes using `weights`.",
                "starter": "[0.0 for _ in token_states[0]]",
                "solution": "[sum(weights[lane] * token_states[lane][col] for lane in range(len(token_states))) for col in range(len(token_states[0]))]",
            },
        ],
        "starter_code": code(
            """
            def rms_scale(values, eps):
                mean_square = sum(v * v for v in values) / len(values)
                return 1.0 / ((mean_square + eps) ** 0.5)

            def hc_pre(states, logits, eps=1e-6):
                outputs = []
                for token_states, token_logits in zip(states, logits):
                    flat = [v for lane in token_states for v in lane]
                    scale = rms_scale(flat, eps)
                    scaled_logits = [__B_scale_logit__ for value in token_logits]
                    total = sum(scaled_logits)
                    weights = [v / total for v in scaled_logits]
                    outputs.append(__B_collapse__)
                return outputs
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                hc_pre = ns["hc_pre"]
                out = hc_pre(
                    states=[[[1.0, 0.0], [0.0, 3.0]]],
                    logits=[[1.0, 3.0]],
                    eps=0.0,
                )
                expected = [[0.25, 2.25]]
                ok = all(abs(out[0][i] - expected[0][i]) < 1e-9 for i in range(2))
                return [{
                    "name": "Weighted collapse across HC lanes",
                    "passed": ok,
                    "expected": repr(expected),
                    "actual": repr(out),
                }]
            """
        ),
    },
    {
        "id": "s16-hc-post",
        "order": 16,
        "session": "s16",
        "stage": "routing",
        "track": "model.py",
        "title": "mHC Post-Mix",
        "tagline": "`C · x + B · residual` — mHC's answer to the residual add.",
        "difficulty": "Advanced",
        "estimated_time": "10 min",
        "tags": ["mhc", "residual"],
        "source_path": "DeepSeek_official/model.py",
        "line_start": 684,
        "line_end": 687,
        "summary": (
            "`hc_post()` replaces the usual `x + residual` with a learned blend. `post` weights "
            "broadcast the fresh output across lanes; `comb` mixes the old residual lanes."
        ),
        "paper_anchor": {
            "section": "§2.2 Manifold-Constrained Hyper-Connections — eq. (5), (7)",
            "figure": "Figure 2",
            "summary": (
                "eq. (5) + eq. (7) spell out the output mapping C_l and the residual mixing "
                "B_l; together they give us this closed-form post-mix."
            ),
        },
        "source_mapping": {
            "real": (
                "`Block.hc_post` (`model.py:684-687`) is a single tensor expression: "
                "`y = post.unsqueeze(-1) * x.unsqueeze(-2) + torch.sum(comb.unsqueeze(-1) * "
                "residual.unsqueeze(-2), dim=2)`. Two broadcast multiplies and a reduction over "
                "source lanes — closed form, no loops."
            ),
            "stub": (
                "Two nested Python loops over `(lane, col)` make the broadcast pattern explicit. "
                "Each cell is `post[lane] * x[col] + sum(comb[lane][src] * residual[src][col] "
                "for src in ...)` — exactly the closed form, just unrolled so the indexing is "
                "immediately legible."
            ),
        },
        "what_you_learn": [
            "Why the new output is BROADCAST into every lane via `post`.",
            "Why `comb` has to be doubly-stochastic (Sinkhorn upstream) to avoid blowing up.",
        ],
        "workshop_steps": [
            "Compute `post[lane] * x[col]` for each (lane, col).",
            "Add `sum_src(comb[lane][src] * residual[src][col])` as the mixed history.",
        ],
        "pitfalls": [
            "Indexing: `comb[lane][src]` reads row `lane`, column `src` — not the other way.",
        ],
        "blanks": [
            {
                "id": "fresh_branch",
                "label": "Fresh branch",
                "hint": "Broadcast the fresh output: `post[lane] * x[col]`.",
                "starter": "0.0",
                "solution": "post[lane] * x[col]",
            },
            {
                "id": "residual_mix",
                "label": "Residual mix",
                "hint": "Sum over source lanes: `comb[lane][src] * residual[src][col]`.",
                "starter": "0.0",
                "solution": "sum(comb[lane][src] * residual[src][col] for src in range(len(residual)))",
            },
        ],
        "starter_code": code(
            """
            def hc_post(x, residual, post, comb):
                width = len(x)
                out = []
                for lane in range(len(post)):
                    lane_row = []
                    for col in range(width):
                        fresh = __B_fresh_branch__
                        history = __B_residual_mix__
                        lane_row.append(fresh + history)
                    out.append(lane_row)
                return out
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                hc_post = ns["hc_post"]
                out = hc_post(
                    x=[10.0, 20.0],
                    residual=[[1.0, 2.0], [3.0, 4.0]],
                    post=[0.1, 0.2],
                    comb=[[0.5, 0.5], [0.25, 0.75]],
                )
                expected = [[3.0, 5.0], [4.5, 7.5]]
                ok = all(abs(out[i][j] - expected[i][j]) < 1e-9 for i in range(2) for j in range(2))
                return [{
                    "name": "post broadcast + comb mix",
                    "passed": ok,
                    "expected": repr(expected),
                    "actual": repr(out),
                }]
            """
        ),
    },

    # ──────────────────────────────────────────────────────────────
    # Stage V — Kernels
    # ──────────────────────────────────────────────────────────────
    {
        "id": "s17-act-quant",
        "order": 17,
        "session": "s17",
        "stage": "kernels",
        "track": "kernel.py",
        "title": "Block-wise FP8 Act Quant",
        "tagline": "absmax → scale → divide and clamp, one block at a time.",
        "difficulty": "Core",
        "estimated_time": "12 min",
        "tags": ["kernel", "fp8", "quantization"],
        "source_path": "DeepSeek_official/kernel.py",
        "line_start": 40,
        "line_end": 102,
        "summary": (
            "`act_quant_kernel` reduces per-block absmax, derives a scale `max(absmax, 1e-4) / FP8_MAX`, "
            "divides each value by that scale, and clamps into the FP8 range. The scale tensor "
            "is kept separately for the GEMM to multiply back."
        ),
        "paper_anchor": {
            "section": "§3.4 FP4 QAT + §3.2 TileLang kernels",
            "figure": "Figure 2 (mixed-precision path)",
            "summary": (
                "This is the FP8 activation quant kernel referenced by §3.2; `scale_fmt='ue8m0'` "
                "additionally rounds the scale to a power-of-two, matching MXFP8 semantics."
            ),
        },
        "source_mapping": {
            "real": (
                "`act_quant_kernel` (`kernel.py:40-102`) is a TileLang `@tilelang.jit` GPU kernel. "
                "It splits the input into `[blk_m=32, group_size=128]` tiles in shared memory, "
                "calls `T.reduce_absmax` along the group axis, applies the floor "
                "`T.max(amax, 1e-4)`, optionally rounds to a power-of-two scale via "
                "`fast_round_scale` (the MXFP path), then either clamps + casts to FP8 or runs an "
                "in-place QAT round-trip back to BF16 (`inplace=True`)."
            ),
            "stub": (
                "A pure-Python `quantize_row` walks the row block-by-block in a `for` loop. No "
                "GPU, no shared memory, no `T.reduce_absmax`, no power-of-two rounding (mentioned "
                "only in pitfalls). The puzzle nails down the divide-then-clamp recipe and the "
                "`max(amax, 1e-4)` floor — those carry over verbatim to the kernel."
            ),
        },
        "what_you_learn": [
            "Why the floor `max(absmax, 1e-4)` keeps extremely cold blocks from producing zero scales.",
            "Why the clamp happens AFTER the divide — the kernel never stores FP8 values outside [-448, 448].",
        ],
        "workshop_steps": [
            "Derive the per-block scale from `absmax`.",
            "Divide each value by the scale and clamp into FP8 range.",
        ],
        "pitfalls": [
            "`max(amax, 1e-4)` — a cold block could otherwise return scale = 0 and crash the divide.",
        ],
        "blanks": [
            {
                "id": "scale_formula",
                "label": "Derive scale",
                "hint": "`max(amax, 1e-4) / FP8_MAX` — the paper's power-of-2 rounding lives elsewhere.",
                "starter": "1.0",
                "solution": "max(amax, 1e-4) / FP8_MAX",
            },
            {
                "id": "quant_val",
                "label": "Quantized value",
                "hint": "`clamp(value / scale, -FP8_MAX, FP8_MAX)`.",
                "starter": "0.0",
                "solution": "clamp(value / scale, -FP8_MAX, FP8_MAX)",
            },
        ],
        "starter_code": code(
            """
            FP8_MAX = 448.0

            def clamp(value, low, high):
                return max(low, min(high, value))

            def quantize_row(row, block_size):
                quantized = []
                scales = []
                for start in range(0, len(row), block_size):
                    block = row[start:start + block_size]
                    amax = max(abs(v) for v in block)
                    scale = __B_scale_formula__
                    scales.append(scale)
                    for value in block:
                        quantized.append(__B_quant_val__)
                return quantized, scales
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                quantize_row = ns["quantize_row"]
                out, scales = quantize_row([224.0, -448.0, 1.0, -2.0], 2)
                expected_scales = [1.0, 2.0 / 448.0]
                scale_ok = all(abs(a - b) < 1e-12 for a, b in zip(scales, expected_scales))
                out_ok = abs(out[0] - 224.0) < 1e-9 and abs(out[1] + 448.0) < 1e-9 and abs(out[3] + 448.0) < 1e-9
                return [
                    {
                        "name": "Per-block scale from absmax",
                        "passed": scale_ok,
                        "expected": repr(expected_scales),
                        "actual": repr(scales),
                    },
                    {
                        "name": "Divide + clamp quantization",
                        "passed": out_ok,
                        "expected": "[224.0, -448.0, ?, -448.0]",
                        "actual": repr(out),
                    },
                ]
            """
        ),
    },
    {
        "id": "s18-fp4-gemm",
        "order": 18,
        "session": "s18",
        "stage": "kernels",
        "track": "kernel.py",
        "title": "FP4 GEMM Scale Alignment",
        "tagline": "Act scales: per-128. Weight scales: per-32. Align them across K.",
        "difficulty": "Advanced",
        "estimated_time": "14 min",
        "tags": ["fp4", "gemm", "scales"],
        "source_path": "DeepSeek_official/kernel.py",
        "line_start": 441,
        "line_end": 515,
        "summary": (
            "FP4 GEMM stores activation scales per 128-wide group and weight scales per 32-wide "
            "group. For each K index, the act scale group is `kk // 128` and the weight scale "
            "group is `kk // 32` — four weight groups share one act scale."
        ),
        "paper_anchor": {
            "section": "§3.4 FP4 Quantization-Aware Training",
            "figure": "§3.4 Table (scale shapes)",
            "summary": (
                "The asymmetric scale grids (act 1×128 vs weight 1×32) are a direct consequence "
                "of how FP4 QAT stabilises routed-expert weights in DeepSeek-V4."
            ),
        },
        "source_mapping": {
            "real": (
                "`fp4_gemm_kernel` (`kernel.py:441-515`) is a TileLang kernel performing "
                "FP8(act) × FP4(weight) GEMM. It loads FP4 sub-blocks of size `[block_N, 32]`, "
                "casts FP4 → FP32 → FP8, runs FP8×FP8 `T.gemm`, and applies the act scale (one "
                "per 128-K group) AND the weight scale (one per 32-K group) to a second "
                "accumulator. With `n_sub = act_group_size // block_K = 4`, every 4 weight "
                "sub-blocks share one act scale."
            ),
            "stub": (
                "A pure-Python triple-loop reproduces the K-axis arithmetic ONLY: "
                "`act_group = kk // (block_k * n_sub)` and `weight_group = kk // block_k`. There "
                "is no FP4 packing, no FP4→FP8 cast, no real GEMM — the puzzle exists to verify "
                "you derive the correct *index math* the kernel needs."
            ),
        },
        "what_you_learn": [
            "Why four 32-wide weight sub-blocks share ONE activation scale.",
            "Why the accumulator multiplies BOTH scales into every partial sum.",
        ],
        "workshop_steps": [
            "Derive the activation scale index from `kk`.",
            "Derive the weight scale index from `kk`.",
        ],
        "pitfalls": [
            "`act_group = kk // (block_k * n_sub)` — don't forget the extra factor of `n_sub`.",
        ],
        "blanks": [
            {
                "id": "act_group",
                "label": "Act scale group",
                "hint": "`kk // (block_k * n_sub)` — one act scale per 128-wide group.",
                "starter": "0",
                "solution": "kk // (block_k * n_sub)",
            },
            {
                "id": "weight_group",
                "label": "Weight scale group",
                "hint": "`kk // block_k` — one weight scale per 32-wide group.",
                "starter": "0",
                "solution": "kk // block_k",
            },
        ],
        "starter_code": code(
            """
            def fp4_gemm(a, scales_a, b, scales_b, block_k=32, act_group_size=128):
                rows = len(a)
                cols = len(b)
                k = len(a[0])
                out = [[0.0 for _ in range(cols)] for _ in range(rows)]
                n_sub = act_group_size // block_k

                for row in range(rows):
                    for col in range(cols):
                        acc = 0.0
                        for kk in range(k):
                            act_group = __B_act_group__
                            weight_group = __B_weight_group__
                            acc += a[row][kk] * b[col][kk] * scales_a[row][act_group] * scales_b[col][weight_group]
                        out[row][col] = acc
                return out
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                fp4_gemm = ns["fp4_gemm"]
                a = [[1.0] * 128]
                b = [[1.0] * 128]
                scales_a = [[2.0]]
                scales_b = [[1.0, 2.0, 3.0, 4.0]]
                out = fp4_gemm(a, scales_a, b, scales_b)
                expected = 2.0 * 32.0 * (1.0 + 2.0 + 3.0 + 4.0)
                return [{
                    "name": "Act (1×128) + Weight (1×32) scale alignment",
                    "passed": abs(out[0][0] - expected) < 1e-9,
                    "expected": repr(expected),
                    "actual": repr(out[0][0]),
                }]
            """
        ),
    },
    {
        "id": "s19-sparse-attn",
        "order": 19,
        "session": "s19",
        "stage": "kernels",
        "track": "kernel.py",
        "title": "Sparse Attention Online Softmax",
        "tagline": "Running max + running sum keep the sparse loop numerically stable.",
        "difficulty": "Advanced",
        "estimated_time": "16 min",
        "tags": ["kernel", "sparse-attention", "flashattention"],
        "source_path": "DeepSeek_official/kernel.py",
        "line_start": 276,
        "line_end": 352,
        "summary": (
            "The sparse attention kernel sweeps the top-k indices in blocks, maintains a running "
            "max, and rescales the accumulator each time the max changes — classic FlashAttention "
            "online softmax. `attn_sink` is folded into the denominator at the very end."
        ),
        "paper_anchor": {
            "section": "§2.3.1 CSA — eq. (18)-(19)",
            "figure": "Figure 3",
            "summary": (
                "Sparse attention with top-k KV entries; the online softmax below is the kernel "
                "recipe inside `sparse_attn_kernel`."
            ),
        },
        "source_mapping": {
            "real": (
                "`sparse_attn_kernel` (`kernel.py:276-352`) is a FlashAttention-style TileLang "
                "kernel. It pipelines 64-token blocks of top-k indices, gathers KV via "
                "`T.if_then_else(idxs[i] != -1, kv[by, idxs[i], j], 0)`, runs `T.gemm(q_shared, "
                "kv_shared, acc_s, transpose_B=True)` for the scores, maintains per-head "
                "`scores_max` / `sum_exp`, rescales `acc_o` by `T.exp(scores_max_prev - "
                "scores_max)` each step, and folds in `T.exp(attn_sink[i] - scores_max[i])` only "
                "at the very end."
            ),
            "stub": (
                "A scalar Python implementation operating on one query and one head. No tiling, "
                "no shared memory, no `T.gemm`. The running-max / running-sum update equations "
                "and the rescale `exp(prev_max - running_max)` are line-for-line identical to the "
                "kernel — only the parallelism is missing."
            ),
        },
        "what_you_learn": [
            "Why the max update must rescale BOTH the numerator AND the denominator.",
            "Why `attn_sink` only enters the denominator once — it doesn't accumulate values.",
        ],
        "workshop_steps": [
            "Update the running max when a new score arrives.",
            "Rescale the running numerator and denominator with `exp(prev_max - new_max)`.",
            "Add the `attn_sink` term to the denominator at the end.",
        ],
        "pitfalls": [
            "`rescale = exp(prev_max - running_max)` — `running_max` appears SECOND, giving a value ≤ 1.",
        ],
        "blanks": [
            {
                "id": "update_max",
                "label": "Update running max",
                "hint": "`max(running_max, score)`.",
                "starter": "score",
                "solution": "max(running_max, score)",
            },
            {
                "id": "update_num",
                "label": "Update numerator",
                "hint": "`weighted_sum * rescale + exp_score * kv[idx]`.",
                "starter": "exp_score * kv[idx]",
                "solution": "weighted_sum * rescale + exp_score * kv[idx]",
            },
            {
                "id": "update_den",
                "label": "Update denominator",
                "hint": "`running_sum * rescale + exp_score`.",
                "starter": "exp_score",
                "solution": "running_sum * rescale + exp_score",
            },
            {
                "id": "final_den",
                "label": "Final denominator",
                "hint": "`running_sum + sink` — add the sink bias AFTER the loop.",
                "starter": "running_sum",
                "solution": "running_sum + sink",
            },
        ],
        "starter_code": code(
            """
            import math

            def sparse_attn_scalar(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):
                running_max = float("-inf")
                running_sum = 0.0
                weighted_sum = 0.0

                for idx in topk_idxs:
                    if idx == -1:
                        continue
                    score = q * kv[idx] * scale
                    prev_max = running_max
                    running_max = __B_update_max__
                    rescale = 0.0 if prev_max == float("-inf") else math.exp(prev_max - running_max)
                    exp_score = math.exp(score - running_max)
                    weighted_sum = __B_update_num__
                    running_sum = __B_update_den__

                sink = math.exp(attn_sink - running_max)
                return weighted_sum / (__B_final_den__)
            """
        ),
        "validator_code": code(
            """
            import math

            def dense_reference(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):
                selected = [kv[i] for i in topk_idxs if i != -1]
                scores = [q * v * scale for v in selected]
                scores.append(attn_sink)
                mmax = max(scores)
                exps = [math.exp(s - mmax) for s in scores]
                return sum(exps[i] * selected[i] for i in range(len(selected))) / sum(exps)

            def run_checks(ns):
                sparse_attn_scalar = ns["sparse_attn_scalar"]
                q, kv, idxs = 2.0, [1.0, 3.0, 5.0], [2, 0, -1]
                got = sparse_attn_scalar(q, kv, idxs, scale=0.5, attn_sink=-1.0)
                want = dense_reference(q, kv, idxs, scale=0.5, attn_sink=-1.0)
                return [{
                    "name": "Matches dense reference",
                    "passed": abs(got - want) < 1e-9,
                    "expected": repr(want),
                    "actual": repr(got),
                }]
            """
        ),
    },
    {
        "id": "s20-sinkhorn",
        "order": 20,
        "session": "s20",
        "stage": "kernels",
        "track": "kernel.py",
        "title": "mHC Sinkhorn Iterations",
        "tagline": "Alternating row/column normalisation → doubly-stochastic matrix.",
        "difficulty": "Advanced",
        "estimated_time": "14 min",
        "tags": ["sinkhorn", "mhc"],
        "source_path": "DeepSeek_official/kernel.py",
        "line_start": 371,
        "line_end": 438,
        "summary": (
            "mHC projects its `comb` matrix onto the Birkhoff polytope with the Sinkhorn-Knopp "
            "algorithm: start from a softmax-normalised matrix, then alternate row and column "
            "normalisation until the matrix is approximately doubly stochastic."
        ),
        "paper_anchor": {
            "section": "§2.2 mHC — eq. (8)",
            "figure": "Figure 2 (Residual Mixing)",
            "summary": (
                "eq. (8) is the Sinkhorn-Knopp iteration; the manifold constraint caps the "
                "spectral norm of `B_l` at 1 and stabilises the deep HC stack."
            ),
        },
        "source_mapping": {
            "real": (
                "`hc_split_sinkhorn_kernel` (`kernel.py:371-438`) is a TileLang kernel that "
                "computes `pre`, `post`, and `comb` per token from the `mixes` projection. For "
                "`comb`, it row-softmaxes (with `+ eps`), normalises columns, then alternates "
                "row/col normalisation for `sinkhorn_iters - 1` more rounds — all in shared "
                "memory inside one TileLang block per token, parallel across the batch×seq axis."
            ),
            "stub": (
                "Pure-Python alternating `normalize_rows` / `normalize_cols`, starting from a "
                "`softmax_rows(matrix)` call (mirroring the kernel's row-softmax-with-eps step). "
                "The loop body and convergence behaviour are identical; only the per-token "
                "parallelism and the GPU shared-memory allocation are missing."
            ),
        },
        "what_you_learn": [
            "Why a row-normalised matrix isn't doubly stochastic — you need columns too.",
            "Why a handful of iterations is enough in practice (the paper uses 20).",
        ],
        "workshop_steps": [
            "Divide each column by its sum.",
            "Alternate row and column normalisation inside the loop.",
        ],
        "pitfalls": [
            "Add `eps` to denominators — zero-sum columns are uncommon but legal at init.",
        ],
        "blanks": [
            {
                "id": "col_normalize",
                "label": "Column normalise",
                "hint": "Divide every element by its column sum (plus eps).",
                "starter": "matrix",
                "solution": "[[matrix[row][col] / (col_sums[col] + eps) for col in range(len(matrix[0]))] for row in range(len(matrix))]",
            },
            {
                "id": "row_loop",
                "label": "Loop row normalise",
                "hint": "Call `normalize_rows(matrix, eps)` on each iteration.",
                "starter": "matrix",
                "solution": "normalize_rows(matrix, eps)",
            },
            {
                "id": "col_loop",
                "label": "Loop col normalise",
                "hint": "Call `normalize_cols(matrix, eps)` on each iteration.",
                "starter": "matrix",
                "solution": "normalize_cols(matrix, eps)",
            },
        ],
        "starter_code": code(
            """
            import math

            def softmax_rows(matrix):
                out = []
                for row in matrix:
                    m = max(row)
                    exps = [math.exp(v - m) for v in row]
                    total = sum(exps)
                    out.append([v / total for v in exps])
                return out

            def normalize_rows(matrix, eps):
                out = []
                for row in matrix:
                    total = sum(row)
                    out.append([v / (total + eps) for v in row])
                return out

            def normalize_cols(matrix, eps):
                col_sums = [sum(matrix[r][c] for r in range(len(matrix))) for c in range(len(matrix[0]))]
                return __B_col_normalize__

            def sinkhorn(matrix, iters, eps=1e-6):
                matrix = softmax_rows(matrix)
                matrix = normalize_cols(matrix, eps)
                for _ in range(iters - 1):
                    matrix = __B_row_loop__
                    matrix = __B_col_loop__
                return matrix
            """
        ),
        "validator_code": code(
            """
            def run_checks(ns):
                sinkhorn = ns["sinkhorn"]
                out = sinkhorn([[2.0, 1.0], [1.0, 3.0]], iters=8, eps=1e-9)
                row_sums = [sum(row) for row in out]
                col_sums = [out[0][0] + out[1][0], out[0][1] + out[1][1]]
                return [
                    {
                        "name": "Rows converge to 1",
                        "passed": all(abs(s - 1.0) < 5e-4 for s in row_sums),
                        "expected": "~[1.0, 1.0]",
                        "actual": repr(row_sums),
                    },
                    {
                        "name": "Columns converge to 1",
                        "passed": all(abs(s - 1.0) < 5e-4 for s in col_sums),
                        "expected": "~[1.0, 1.0]",
                        "actual": repr(col_sums),
                    },
                ]
            """
        ),
    },
]
