"""Narrative interludes that bridge the interactive lessons.

Each interlude covers a contiguous slice of ``model.py`` or ``kernel.py`` that
is *not* turned into an interactive puzzle. Together with ``LESSON_SPECS`` they
partition every line of both source files so the tutorial can be "played back"
to reconstruct the reference exactly.

Authors fill these in with short narrative. They do not carry puzzle blanks,
starter code, or validators. The build step renders them as read-only cards in
the site with full syntax highlighting.
"""

from __future__ import annotations


INTERLUDE_SPECS: list[dict] = [
    # ──────────────────────────────────────────────────────────────
    # model.py narrative segments
    # ──────────────────────────────────────────────────────────────
    {
        "id": "i01-model-imports",
        "order": 100,
        "stage": "foundations",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 1,
        "line_end": 22,
        "title": "Imports & Precision Defaults",
        "tagline": "The mixed-precision plumbing every later block relies on.",
        "summary": (
            "The module starts by pulling in standard helpers plus the local `kernel` fused ops "
            "(`act_quant`, `fp4_gemm`, `sparse_attn`, `hc_split_sinkhorn`). Globals set the "
            "distributed topology (`world_size`, `rank`) and the default numerics "
            "(`block_size`, `fp4_block_size`, `default_dtype`, `scale_fmt`, `scale_dtype`) that "
            "`Transformer.__init__` will later override from `ModelArgs`."
        ),
        "why_it_matters": [
            "`block_size = 128` is the FP8 tile size; `fp4_block_size = 32` is the FP4 tile.",
            "`default_dtype` is flipped to `torch.float8_e4m3fn` when `ModelArgs.dtype=\"fp8\"`.",
            "The kernel imports declare the GPU-side contract the rest of `model.py` assumes.",
        ],
    },
    {
        "id": "i02-set-dtype",
        "order": 101,
        "stage": "foundations",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 23,
        "line_end": 33,
        "title": "`set_dtype` Context Manager",
        "tagline": "Temporarily override `torch.get_default_dtype()` safely.",
        "summary": (
            "`set_dtype` is a tiny contextmanager that flips the PyTorch default dtype on "
            "entry and restores it on exit, even if the body raises. It is used in `Block` "
            "and `Transformer.__init__` so that HC parameters (`hc_attn_fn`, `hc_ffn_fn`, "
            "`hc_head_fn`, scale/base tensors) are always allocated in FP32 regardless of "
            "what activations are using."
        ),
        "why_it_matters": [
            "HC parameters are stored in FP32 to avoid catastrophic cancellation in Sinkhorn.",
            "The try/finally is load-bearing — without it a crash inside `with` would leave the process in FP8.",
        ],
    },
    {
        "id": "i03-model-args",
        "order": 102,
        "stage": "foundations",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 34,
        "line_end": 81,
        "title": "ModelArgs — The Whole Config",
        "tagline": "Every knob the paper exposes lives here.",
        "summary": (
            "The frozen dataclass enumerates all hyperparameters — shape (`dim`, `n_heads`), "
            "precision (`dtype`, `scale_fmt`, `expert_dtype`, `scale_dtype`), MoE "
            "(`n_routed_experts`, `n_activated_experts`, `score_func`, `route_scale`), "
            "MLA/MQA (`q_lora_rank`, `head_dim`, `rope_head_dim`, `o_groups`, `o_lora_rank`), "
            "sliding-window + compression (`window_size`, `compress_ratios`), YaRN "
            "(`original_seq_len`, `rope_theta`, `rope_factor`, `beta_fast`, `beta_slow`), "
            "the lightning indexer (`index_n_heads`, `index_head_dim`, `index_topk`), and "
            "Hyper-Connections (`hc_mult`, `hc_sinkhorn_iters`, `hc_eps`)."
        ),
        "why_it_matters": [
            "`compress_ratios = (0, 0, 4, 128, 4, 128, 4, 0)` encodes the hybrid attention schedule across layers.",
            "`score_func=\"sqrtsoftplus\"` is the novel gating variant — see Lesson 12.",
            "`hc_mult=4` means each residual actually carries four parallel copies of the hidden state.",
        ],
    },
    {
        "id": "i04-parallel-embedding",
        "order": 103,
        "stage": "foundations",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 82,
        "line_end": 107,
        "title": "ParallelEmbedding — Vocab-Sharded Lookup",
        "tagline": "Each rank owns a vocab slice; zero-mask then all-reduce.",
        "summary": (
            "Embeddings are sharded along the vocabulary dimension. Each rank only stores "
            "`vocab_size // world_size` rows. Token IDs outside the local slice are masked "
            "to zero before `F.embedding`, and the final sum is produced by `dist.all_reduce`. "
            "On `world_size == 1` the fast path skips both the mask and the all-reduce."
        ),
        "why_it_matters": [
            "Sharding embeddings is a huge memory saving — V4 has 129k tokens.",
            "Zero-masking out-of-range indices is a classic trick to avoid per-rank branching.",
        ],
    },
    {
        "id": "i05-linear-forward",
        "order": 200,
        "stage": "foundations",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 151,
        "line_end": 154,
        "title": "Linear.forward — Wire the Dispatcher",
        "tagline": "Two lines, but they bind `Linear` to the precision router.",
        "summary": (
            "`Linear.forward` just calls `linear(x, self.weight, self.bias)`. Because every "
            "parallel variant (`ColumnParallelLinear`, `RowParallelLinear`) inherits from "
            "`Linear`, *every* weight in the model ends up going through the one dispatcher "
            "you built in Lesson 1."
        ),
        "why_it_matters": [
            "This is the keystone: Linear → linear() → {fp4,fp8,BF16} GEMM, no other surface area.",
        ],
    },
    {
        "id": "i06-precompute-helpers",
        "order": 300,
        "stage": "rotary",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 197,
        "line_end": 219,
        "title": "YaRN — Correction-Range Helpers",
        "tagline": "`find_correction_range` + `linear_ramp_factor`.",
        "summary": (
            "Before `precompute_freqs_cis` computes the base RoPE table it stashes three "
            "nested helpers. `find_correction_dim` inverts the RoPE period equation to ask "
            "'at what embedding dim does frequency θᵈ complete N rotations across "
            "`max_seq_len`?'. `find_correction_range` clamps the low/high answer into "
            "`[0, dim-1]`. `linear_ramp_factor` produces the soft window between them so "
            "low-frequency dims are interpolated and high-frequency ones are left alone."
        ),
        "why_it_matters": [
            "These three helpers implement §3 of the YaRN paper almost verbatim.",
            "Without the linear ramp the scaled freqs would have visible kinks at the boundaries.",
        ],
    },
    {
        "id": "i07-rotate-activation",
        "order": 400,
        "stage": "attention",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 245,
        "line_end": 253,
        "title": "Randomized Hadamard Rotation",
        "tagline": "Spread per-feature amplitude before FP8 quantization.",
        "summary": (
            "Activations that are about to be FP8-quantized get a Hadamard rotation first. "
            "By spreading mass across channels, the per-block absmax is less spiky and the "
            "per-block scale quantizes the signal much better. It is applied to Q and KV "
            "paths inside the lightning indexer."
        ),
        "why_it_matters": [
            "Hadamard transforms preserve norms (orthogonal), so information isn't lost.",
            "The external `fast_hadamard_transform` package is used for speed; the spec is standard.",
        ],
    },
    {
        "id": "i08-topk-helpers",
        "order": 401,
        "stage": "attention",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 254,
        "line_end": 277,
        "title": "Window + Compressed Top-k Index Builders",
        "tagline": "Pre-bake the ring-buffer index patterns once and reuse.",
        "summary": (
            "Two `@lru_cache`-memoised helpers compute the causal top-k index matrices used "
            "by sparse attention. `get_window_topk_idxs` emits the sliding-window index map, "
            "handling the ring-buffer rotation for decode. `get_compress_topk_idxs` emits the "
            "index map over the compressed KV cache for the levels that use non-indexed "
            "compression (i.e. `compress_ratio != 4`)."
        ),
        "why_it_matters": [
            "Both are trained on *positions*, not values — caching them avoids rebuilding every step.",
            "The `-1` sentinel is how we encode 'don't attend' before the kernel sees it.",
        ],
    },
    {
        "id": "i09-compressor-init",
        "order": 402,
        "stage": "attention",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 278,
        "line_end": 315,
        "title": "Compressor — State & Overlap Transform",
        "tagline": "Learned gated pooling over `compress_ratio` consecutive tokens.",
        "summary": (
            "`Compressor.__init__` allocates its three learnable matrices (`ape`, `wkv`, "
            "`wgate`), the per-head `norm`, and — crucially — two state buffers `kv_state` "
            "and `score_state` that carry decode-time partial windows across forward calls. "
            "When `compress_ratio == 4` an extra `overlap` flag doubles the buffer so the "
            "compressor sees overlapping windows. `overlap_transform` reshapes the raw "
            "`[b, s, r, 2d]` gated outputs into a 2r stride pattern suitable for that overlap."
        ),
        "why_it_matters": [
            "The two state buffers make this module stateful across decode steps — watch for aliasing bugs.",
            "`self.kv_cache` is set *from the Attention outside*, not in `__init__`.",
        ],
    },
    {
        "id": "i10-compressor-decode",
        "order": 403,
        "stage": "attention",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 343,
        "line_end": 378,
        "title": "Compressor.forward — Decode Path + Finalize",
        "tagline": "Incremental per-token compression using the state buffers.",
        "summary": (
            "When `start_pos > 0` the compressor is in decode mode: the new token contributes "
            "to either the overlap slot or the normal slot, and every `compress_ratio` steps "
            "we trigger one compression event that writes a new compressed KV into "
            "`self.kv_cache`. The post-compression block applies RMSNorm + rotary to the rope "
            "tail, optionally rotates + FP4-quantizes (indexer only), otherwise FP8-quantizes "
            "the non-rope part."
        ),
        "why_it_matters": [
            "Decode compression has to emit *exactly one* compressed KV at the correct stride.",
            "Rotate+FP4 is used only for the indexer's Compressor (`rotate=True`).",
        ],
    },
    {
        "id": "i11-indexer-init",
        "order": 404,
        "stage": "attention",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 379,
        "line_end": 417,
        "title": "Indexer — Low-Rank Q + Rotated Compressor",
        "tagline": "Builds a FP4-style score to pick top-k compressed KV positions.",
        "summary": (
            "The lightning indexer has its own Compressor (flagged `rotate=True` so it uses "
            "Hadamard + FP4). `forward` projects `qr` through `wq_b`, applies rotary to the "
            "tail dims, rotates and FP4-quantizes Q. It then calls its Compressor to refresh "
            "the indexer KV cache. Up to the point the `weights_proj` is computed, this is "
            "the setup for the score we will compute in the next lesson."
        ),
        "why_it_matters": [
            "The indexer uses `n_heads` heads of `head_dim` each (distinct from attention's heads).",
            "FP4 here is a *simulation* during training (quantization-aware), not a real kernel call.",
        ],
    },
    {
        "id": "i12-indexer-tail",
        "order": 405,
        "stage": "attention",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 428,
        "line_end": 435,
        "title": "Indexer — Top-k + Offset Rewriting",
        "tagline": "Pad invalid positions with -1 so the sparse kernel masks them.",
        "summary": (
            "After scoring, the indexer runs `topk` over the compressed axis, then for the "
            "prefill path it masks out positions that would look into the future and rewrites "
            "survivors with the `offset` (which is where the compressed cache starts in the "
            "shared KV buffer). The `-1` sentinel is what the sparse-attention kernel uses to "
            "skip positions without branching."
        ),
        "why_it_matters": [
            "The offset trick lets window positions and compressed positions share one index space.",
            "The future-mask uses integer ratio arithmetic — be careful of off-by-one bugs.",
        ],
    },
    {
        "id": "i13-attention-init",
        "order": 406,
        "stage": "attention",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 436,
        "line_end": 506,
        "title": "Attention — MLA Setup & Q/KV Projection",
        "tagline": "Low-rank Q via `wq_a → q_norm → wq_b`; grouped O via `wo_a → wo_b`.",
        "summary": (
            "`Attention.__init__` builds the Multi-head Latent Attention (MLA) stack: a "
            "low-rank Q (`wq_a`/`q_norm`/`wq_b`), a single KV projection, a grouped O "
            "(`wo_a` column-parallel into groups, `wo_b` row-parallel back out), the learned "
            "`attn_sink` bias, the optional `Compressor`+`Indexer` pair (when `compress_ratio` "
            "is non-zero), and the RoPE cache sized for either the YaRN-enabled hybrid "
            "attention or the pure sliding-window variant. `forward` then prepares Q (projection "
            "+ RMS norm along the head dim + rotary on the rope tail) and KV (projection + "
            "RMS norm + rotary + FP8 simulation on the non-rope dims)."
        ),
        "why_it_matters": [
            "`compress_ratio=0` layers are pure sliding-window — they skip the Compressor entirely.",
            "`compress_ratio=4` enables the Indexer; larger ratios use pure compression.",
        ],
    },
    {
        "id": "i14-attention-output",
        "order": 500,
        "stage": "attention",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 534,
        "line_end": 545,
        "title": "Attention — Inverse Rotary + Grouped O-Projection",
        "tagline": "Un-rotate the rope tail; project out via the low-rank O.",
        "summary": (
            "After the sparse-attention kernel returns, the rope tail of the per-head output "
            "is rotated back with `inverse=True`, the heads are folded into groups, and the "
            "output is projected through the `[n_groups, o_lora_rank]` `wo_a` tensor and the "
            "`wo_b` row-parallel tail."
        ),
        "why_it_matters": [
            "Rotation+inverse-rotation ensures the K·Q dot product is computed in RoPE space but the output lives back in model space.",
            "The comment `BF16 for simplicity` flags a future perf opportunity — `wo_a` could stay in FP8.",
        ],
    },
    {
        "id": "i15-gate-init",
        "order": 501,
        "stage": "routing",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 546,
        "line_end": 563,
        "title": "Gate — Initialization",
        "tagline": "Hash-vs-score routing, plus an optional top-k bias.",
        "summary": (
            "The gate stores the routing matrix `weight: [n_experts, dim]` and, for hash-routed "
            "layers, a lookup `tid2eid: [vocab_size, n_activated_experts]`. For score-routed "
            "layers (the majority) it owns a per-expert `bias` added before the top-k but NOT "
            "before the renormalised routing weights — this is the DeepSeek-V3 top-k bias trick."
        ),
        "why_it_matters": [
            "`layer_id < n_hash_layers` selects hash routing — deterministic per-token experts.",
            "The routing-weights bypass of the bias is subtle; it's what the next lesson exercises.",
        ],
    },
    {
        "id": "i16-expert-header",
        "order": 502,
        "stage": "routing",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 585,
        "line_end": 588,
        "title": "Expert — Header",
        "tagline": "A tiny docstring that sets up what Lesson 14 will decode.",
        "summary": (
            "Just the class-level comment: every expert is a SwiGLU FFN with three Linear "
            "blocks (`w1`, `w2`, `w3`). Computation is upcast to float32 for stability, and "
            "`swiglu_limit` optionally clamps the pre-activation range to avoid FP8 saturation."
        ),
        "why_it_matters": [
            "`swiglu_limit` is only used on routed experts, never on the shared expert.",
        ],
    },
    {
        "id": "i17-moe-init",
        "order": 503,
        "stage": "routing",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 607,
        "line_end": 634,
        "title": "MoE — Sharding & Gate Pre-Call",
        "tagline": "Routed experts live on one rank each; the shared expert is everywhere.",
        "summary": (
            "`MoE.__init__` splits `n_routed_experts` across ranks — rank `r` owns experts "
            "`[r·n_local, (r+1)·n_local)`. Slots outside the rank's range hold `None`. The "
            "shared expert is built on every rank (there is always exactly one). `forward` "
            "flattens `x`, runs the gate to get `(weights, indices)`, and allocates the "
            "accumulation buffer `y` in FP32 before dispatching tokens."
        ),
        "why_it_matters": [
            "The None-valued experts in `self.experts` are NOT bugs — they mark off-rank slots.",
            "`bincount(indices)` counts tokens per expert so we can skip unused experts cheaply.",
        ],
    },
    {
        "id": "i18-block-init",
        "order": 600,
        "stage": "routing",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 646,
        "line_end": 673,
        "title": "Block — HC Parameter Cube",
        "tagline": "Per-block mix/base/scale tensors for the Sinkhorn mixing matrix.",
        "summary": (
            "Each transformer block owns two HC parameter bundles (one for attention, one for "
            "FFN). `hc_attn_fn` and `hc_ffn_fn` are `[mix_hc, hc_dim]` mixing tensors. The "
            "base + scale vectors tune the Sinkhorn inputs (pre-softmax, post-sigmoid, "
            "combine-matrix). All HC parameters are allocated in FP32 via `set_dtype`."
        ),
        "why_it_matters": [
            "`mix_hc = (2 + hc_mult) * hc_mult` spans pre + post + combination rows.",
            "`hc_dim = hc_mult * dim` so each HC copy is a full-width hidden.",
        ],
    },
    {
        "id": "i19-block-forward",
        "order": 601,
        "stage": "routing",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 688,
        "line_end": 702,
        "title": "Block.forward — HC Pre/Attn/Post × Pre/FFN/Post",
        "tagline": "Two HC sandwiches, one per sub-layer.",
        "summary": (
            "The block runs two HC-wrapped sub-layers. Each is a symmetric "
            "`hc_pre → sublayer_norm → sublayer → hc_post` pipeline. The attention "
            "sub-layer uses `hc_attn_fn/scale/base` and `attn_norm`; the FFN sub-layer uses "
            "`hc_ffn_fn/scale/base` and `ffn_norm`. The residual is the *pre-mix* `x`, not "
            "the post-mix output."
        ),
        "why_it_matters": [
            "The residual fed to `hc_post` is the input to `hc_pre`, not its output — classic mHC pattern.",
            "`hc_pre`/`hc_post` are responsible for keeping the 4 HC copies coherent.",
        ],
    },
    {
        "id": "i20-parallel-head",
        "order": 602,
        "stage": "routing",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 703,
        "line_end": 737,
        "title": "ParallelHead — Logits & Static HC Collapse",
        "tagline": "Final RMS norm → vocab-sharded linear → all-gather.",
        "summary": (
            "The LM head is vocab-sharded (same as the embedding). It carries its own "
            "lightweight `hc_head` — a single sigmoid-gated reduction that collapses the HC "
            "copies into one feature map before the final norm + linear. Under TP the logits "
            "are all-gathered across ranks so every rank sees the full vocab."
        ),
        "why_it_matters": [
            "`get_logits` only operates on the last position — the rest of the hidden is dropped for the forward pass.",
            "The `hc_head` here has no Sinkhorn — it is a direct sigmoid-mix (faster, once per step).",
        ],
    },
    {
        "id": "i21-mtp-block",
        "order": 603,
        "stage": "routing",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 738,
        "line_end": 767,
        "title": "MTPBlock — Multi-Token Prediction",
        "tagline": "Reuse `Block` on a projected embedding + hidden mix.",
        "summary": (
            "`MTPBlock` subclasses `Block` to add Multi-Token Prediction: given the main "
            "hidden and a shifted input embedding, it merges them via `e_proj`/`h_proj`, runs "
            "one transformer block, and produces speculative logits through the shared "
            "ParallelHead. During training this provides the auxiliary MTP loss; during "
            "inference it can drive speculative decoding."
        ),
        "why_it_matters": [
            "`self.embed` and `self.head` are wired by Transformer — not owned here.",
            "The class-level `hc_head_fn`/`hc_head_scale`/`hc_head_base` are separate FP32 params for MTP's head.",
        ],
    },
    {
        "id": "i22-transformer",
        "order": 604,
        "stage": "routing",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 768,
        "line_end": 810,
        "title": "Transformer — Global State & Assembly",
        "tagline": "Wire the whole model, including global precision settings.",
        "summary": (
            "`Transformer.__init__` is where the global TP state is set (`world_size`, `rank`, "
            "`default_dtype`, `scale_fmt`, `scale_dtype`). It then builds the embedding, "
            "`n_layers` blocks, the final RMS norm, the shared `ParallelHead`, `n_mtp_layers` "
            "MTP blocks (wired to the shared embed/head), and its own head-level HC "
            "parameters. `forward` embeds the input, expands to `hc_mult` copies, runs each "
            "block, then finalizes through the head."
        ),
        "why_it_matters": [
            "Setting globals inside `__init__` is unusual — without it, `Linear.__init__` would default to BF16.",
            "The `h.unsqueeze(2).repeat(1, 1, hc_mult, 1)` is how HC starts — identical copies.",
        ],
    },
    {
        "id": "i23-main",
        "order": 605,
        "stage": "routing",
        "track": "model.py",
        "source_path": "model.py",
        "line_start": 811,
        "line_end": 828,
        "title": "`__main__` — Smoke Test Harness",
        "tagline": "How the reference is actually exercised.",
        "summary": (
            "The bottom-of-file harness builds a small-sized `Transformer`, runs one prefill "
            "`(2, 128)` batch, then 22 decode steps, and finally exercises the MTP block on a "
            "hand-built hidden tensor. This is the invocation shape every lesson was extracted "
            "from — if you rebuild the model from scratch, this is the smoke test to pass."
        ),
        "why_it_matters": [
            "`torch.manual_seed(0)` plus CUDA is what lets output shapes be deterministic.",
            "`ModelArgs(n_hash_layers=0)` bypasses the hash-routing path for the test.",
        ],
    },
    # ──────────────────────────────────────────────────────────────
    # kernel.py narrative segments
    # ──────────────────────────────────────────────────────────────
    {
        "id": "i24-kernel-imports",
        "order": 700,
        "stage": "kernels",
        "track": "kernel.py",
        "source_path": "kernel.py",
        "line_start": 1,
        "line_end": 39,
        "title": "TileLang Imports & IEEE 754 Fast Math",
        "tagline": "`fast_log2_ceil`, `fast_pow2`, `fast_round_scale` via bit tricks.",
        "summary": (
            "The file imports `tilelang` + `tilelang.language as T`, declares pass configs "
            "(disable warp-specialization + TMA lowering for portability), and defines the "
            "dtype string aliases used throughout. The three `fast_*` helpers compute "
            "ceil(log2(x)) and 2^x via IEEE 754 bit manipulation — avoiding the slow `log`/"
            "`ceil` intrinsics and giving the compiler integer math to fold."
        ),
        "why_it_matters": [
            "`fast_round_scale` is how MXFP power-of-two scales are derived in one cycle.",
            "The same bit trick is reused in the FP4 quantization kernel (Lesson 17).",
        ],
    },
    {
        "id": "i25-act-quant-wrapper",
        "order": 701,
        "stage": "kernels",
        "track": "kernel.py",
        "source_path": "kernel.py",
        "line_start": 103,
        "line_end": 127,
        "title": "`act_quant` — Tensor-Level Wrapper",
        "tagline": "Allocate outputs, JIT the kernel, run it.",
        "summary": (
            "The wrapper reshapes the activation into `[M, N]`, allocates `y` (same dtype if "
            "`inplace`, else FP8), allocates the per-block scale tensor `s`, JITs the kernel "
            "for the current config, and invokes it. When `inplace=True`, the quant+dequant "
            "result is copied back into the input tensor and no scale tensor is returned."
        ),
        "why_it_matters": [
            "The `assert N % block_size == 0` is what makes block-wise quant tractable.",
            "`round_scale` is automatically turned on when `scale_fmt` is set (MXFP semantics).",
        ],
    },
    {
        "id": "i26-fp4-quant",
        "order": 702,
        "stage": "kernels",
        "track": "kernel.py",
        "source_path": "kernel.py",
        "line_start": 128,
        "line_end": 201,
        "title": "`fp4_quant_kernel` + `fp4_act_quant`",
        "tagline": "FP4's tiny dynamic range makes every bit precious.",
        "summary": (
            "Block-wise FP4 quantization uses the same overall shape as the FP8 kernel but "
            "with block 32, `fp4_max = 6.0`, and a power-of-two scale via `fast_round_scale`. "
            "A subnormal-safe floor (`6 * 2**-126`) keeps absmax from underflowing. The "
            "wrapper allocates the packed FP4 storage (`N // 2` bytes along the last axis)."
        ),
        "why_it_matters": [
            "FP4 quantization here is the output side of the same kernel that `fp4_gemm` consumes.",
            "Without the floor, absmax=0 blocks would produce NaN scales.",
        ],
    },
    {
        "id": "i27-fp8-gemm",
        "order": 703,
        "stage": "kernels",
        "track": "kernel.py",
        "source_path": "kernel.py",
        "line_start": 202,
        "line_end": 275,
        "title": "`fp8_gemm_kernel` + Wrapper",
        "tagline": "C[M,N] = A[M,K] @ B[N,K]ᵀ with per-128 FP8 scales on both operands.",
        "summary": (
            "The FP8 GEMM is a classic tiled GEMM with `block_M=32`, `block_N=block_K=128`, "
            "4-stage pipelined K loop, and per-block scale correction applied in FP32 via a "
            "second accumulator (`C_local_accum`). Scales_B has one value per block_N group; "
            "scales_A has one per row per K block. The wrapper contracts input shapes into "
            "`(M, K)` and allocates the output in the current default dtype."
        ),
        "why_it_matters": [
            "Two accumulators (`C_local` in-tile, `C_local_accum` scale-corrected) give 2× accumulation precision.",
            "`T.use_swizzle(panel_size=10)` reorders tiles for L2 locality.",
        ],
    },
    {
        "id": "i28-sparse-attn-wrapper",
        "order": 704,
        "stage": "kernels",
        "track": "kernel.py",
        "source_path": "kernel.py",
        "line_start": 353,
        "line_end": 370,
        "title": "`sparse_attn` — Head Padding Wrapper",
        "tagline": "Pad to `h=16` for kernel efficiency, narrow back afterwards.",
        "summary": (
            "Before invoking the sparse-attention kernel, the wrapper pads the head dimension "
            "to 16 (concatenating zeros if `h<16`) so the per-head fragments hit the warp-tile "
            "optimum. After the kernel returns, the extra heads are sliced off via `narrow`. "
            "`attn_sink` is padded to match."
        ),
        "why_it_matters": [
            "Index-head count in V4 (`index_n_heads=64`, `n_heads=64`) doesn't need padding at runtime, but the kernel is defensive.",
            "`.contiguous()` after `narrow` is needed so downstream GEMMs see a clean layout.",
        ],
    },
    {
        "id": "i29-fp4-gemm-wrapper",
        "order": 800,
        "stage": "kernels",
        "track": "kernel.py",
        "source_path": "kernel.py",
        "line_start": 516,
        "line_end": 536,
        "title": "`fp4_gemm` — Tensor-Level Wrapper",
        "tagline": "Contract shapes, call the JIT'd kernel, return C.",
        "summary": (
            "Mirroring the FP8 wrapper, `fp4_gemm` asserts contiguity, extracts `M/N/K`, "
            "allocates `C` in the current default dtype, JITs the kernel with the right "
            "scale dtype, and invokes it. There is no reshape of the packed FP4 weight — it "
            "stays `[N, K//2]` with packed values on the K axis."
        ),
        "why_it_matters": [
            "The kernel expects `B` to be packed along K; `fp4_quant_kernel` guarantees this.",
        ],
    },
]


__all__ = ["INTERLUDE_SPECS"]
