/* auto-generated — do not edit. Rerun `npm run build` to refresh. */
window.DEEPSEEK_V4_TUTORIAL = {
  "meta": {
    "title": "DeepSeek-V4 Deconstruction Lab",
    "subtitle": "An interactive, puzzle-first deep-dive into `model.py` and `kernel.py` of the DeepSeek-V4 reference implementation.",
    "lead": "DeepSeek-V4 pairs Compressed Sparse Attention (CSA), Heavily Compressed Attention (HCA), Manifold-Constrained Hyper-Connections (mHC), and FP4 quantization-aware training. This lab breaks the reference code into runnable Python puzzles so you can rebuild every moving piece by hand.",
    "hero_note": "Each puzzle is self-contained Python. Fill in the highlighted blanks, run the tests, and the web checker diffs your output against the paper's reference semantics (see `DeepSeek_V4.pdf` Figures 2–6).",
    "tagline": "Puzzles · Paper Anchors · Local Tests",
    "paper_ref": {
      "title": "DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence",
      "file": "DeepSeek_V4.pdf",
      "doi": "https://huggingface.co/collections/deepseek-ai/deepseek-v4"
    },
    "tracks": [
      {
        "id": "model.py",
        "title": "model.py",
        "description": "Mixed-precision dispatch, RoPE/YaRN, Compressed-Sparse Attention, Hyper-Connections, and DeepSeekMoE wiring.",
        "i18n": {
          "zh": {
            "title": "model.py",
            "description": "混合精度分发、RoPE/YaRN、压缩稀疏注意力、超连接 (mHC)、DeepSeekMoE 的组装。"
          }
        }
      },
      {
        "id": "kernel.py",
        "title": "kernel.py",
        "description": "TileLang kernels: activation quantization, sparse attention online softmax, FP4 GEMM scale alignment, and mHC Sinkhorn.",
        "i18n": {
          "zh": {
            "title": "kernel.py",
            "description": "TileLang 编写的算子：激活量化、稀疏注意力在线 Softmax、FP4 GEMM 的 scale 对齐与 mHC 的 Sinkhorn 迭代。"
          }
        }
      }
    ],
    "stages": [
      {
        "id": "foundations",
        "title": "I. Foundations",
        "description": "Mixed-precision dispatch, weight layout, and RMSNorm — the building blocks every block depends on.",
        "lesson_count": 4,
        "interlude_count": 5,
        "i18n": {
          "zh": {
            "title": "一、基础设施",
            "description": "混合精度调度、权重布局、RMSNorm —— 每一层都要用到的砖瓦。"
          }
        }
      },
      {
        "id": "rotary",
        "title": "II. Rotary & YaRN",
        "description": "The RoPE frequency table and its YaRN interpolation, plus the complex-pair rotation.",
        "lesson_count": 3,
        "interlude_count": 1,
        "i18n": {
          "zh": {
            "title": "二、RoPE 与 YaRN",
            "description": "RoPE 的基础频率表、YaRN 的插值方案，以及复数对的旋转。"
          }
        }
      },
      {
        "id": "attention",
        "title": "III. Compressed Attention",
        "description": "CSA compressor pooling, KV ring cache, top-k merge, and the lightning indexer.",
        "lesson_count": 4,
        "interlude_count": 8,
        "i18n": {
          "zh": {
            "title": "三、压缩稀疏注意力",
            "description": "CSA 压缩器池化、KV 环形缓存、Top-k 合并以及闪电索引器 (Lightning Indexer)。"
          }
        }
      },
      {
        "id": "routing",
        "title": "IV. MoE & Hyper-Connections",
        "description": "DeepSeekMoE gate routing, sparse expert dispatch, and Manifold-Constrained Hyper-Connections.",
        "lesson_count": 5,
        "interlude_count": 9,
        "i18n": {
          "zh": {
            "title": "四、DeepSeekMoE 与超连接",
            "description": "DeepSeekMoE 的门控、稀疏专家调度，以及流形约束超连接 (mHC)。"
          }
        }
      },
      {
        "id": "kernels",
        "title": "V. Kernel Logic",
        "description": "Block-wise activation quantization, sparse attention online softmax, FP4 GEMM scale indexing, and Sinkhorn iterations.",
        "lesson_count": 4,
        "interlude_count": 6,
        "i18n": {
          "zh": {
            "title": "五、底层 Kernel",
            "description": "块级激活量化、稀疏注意力在线 Softmax、FP4 GEMM 的 scale 对齐、Sinkhorn 迭代。"
          }
        }
      }
    ],
    "stats": [
      {
        "label": "Lessons",
        "value": "20"
      },
      {
        "label": "Interludes",
        "value": "29"
      },
      {
        "label": "Stages",
        "value": "5"
      },
      {
        "label": "Blanks",
        "value": "42"
      },
      {
        "label": "Source",
        "value": "DeepSeek_official/model.py + DeepSeek_official/kernel.py"
      }
    ],
    "i18n": {
      "zh": {
        "title": "DeepSeek-V4 拆解实验室",
        "subtitle": "一个以填空式练习为主线，逐行剖析 DeepSeek-V4 官方参考实现 `model.py` 与 `kernel.py` 的交互式教程。",
        "lead": "DeepSeek-V4 融合了压缩稀疏注意力 (CSA)、重度压缩注意力 (HCA)、流形约束超连接 (mHC) 以及 FP4 量化感知训练 (QAT)。本实验室把参考代码拆成一个个可运行的 Python 拼图，让你亲手把每一块重新拼回来。",
        "hero_note": "每个练习都是可独立运行的 Python。填好高亮的空格，点击运行测试，Web 校验器会把你的输出和论文里的参考语义逐项对比（见 `DeepSeek_V4.pdf` 图 2–6）。",
        "tagline": "填空练习 · 论文对照 · 本地测试",
        "stats_labels": {
          "Lessons": "课程",
          "Interludes": "导读",
          "Stages": "阶段",
          "Blanks": "填空",
          "Source": "源文件"
        }
      }
    },
    "ui_strings": {
      "en": {
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
        "inspector.show_diff": "show diff"
      },
      "zh": {
        "app.lang_toggle": "English",
        "app.lang_label": "语言",
        "nav.brand": "DeepSeek-V4 拆解实验室",
        "nav.curriculum": "课程大纲",
        "nav.stages": "阶段",
        "nav.lesson_count_singular": "节课",
        "nav.lesson_count_plural": "节课",
        "nav.interlude_badge": "导读",
        "nav.lesson_badge": "练习",
        "nav.blanks_label": "空格",
        "nav.minutes_label": "分钟",
        "hero.difficulty": "难度",
        "hero.estimated_time": "预计用时",
        "hero.tags": "标签",
        "hero.paper_anchor": "论文锚点",
        "hero.source_anchor": "源码定位",
        "hero.reference_length": "参考代码行数",
        "hero.workshop_length": "练习代码行数",
        "section.what_you_learn": "你将学到",
        "section.workshop_steps": "练习步骤",
        "section.pitfalls": "常见陷阱",
        "section.why_it_matters": "关键要点",
        "tabs.puzzle": "填空练习",
        "tabs.free": "自由编辑",
        "tabs.solution": "参考答案",
        "tabs.reference": "源码对照",
        "tabs.narrative": "导读",
        "puzzle.instructions": "点击高亮色块填写答案，完成后点击 “运行测试”。",
        "puzzle.run_tests": "运行测试",
        "puzzle.run_solution": "运行参考答案",
        "puzzle.reset": "重置",
        "puzzle.hint_label": "提示",
        "puzzle.expected_label": "应填入的表达式",
        "puzzle.submit_hint": "按 Enter 确认，按 Esc 取消编辑。",
        "inspector.title": "测试运行器",
        "inspector.description": "填空或自由编辑的代码会提交到本地 Python 开发服务器 (npm run dev)。",
        "inspector.all_pass": "全部检查通过",
        "inspector.some_fail": "部分检查未通过",
        "inspector.crashed": "运行时崩溃",
        "inspector.pass": "通过",
        "inspector.fail": "未通过",
        "inspector.expected": "期望",
        "inspector.actual": "实际",
        "inspector.duration": "耗时",
        "inspector.stdout": "标准输出",
        "inspector.stdout_empty": "(标准输出为空)",
        "inspector.shell_hint": "快捷命令",
        "inspector.traceback": "Python 异常堆栈",
        "interlude.hint": "这是一段导读章节，展示真实源码节选。使用上下方向键或侧边栏切换课程。",
        "interlude.read_only": "只读 · 无填空 · 无测试",
        "footer.next": "下一节 →",
        "footer.prev": "← 上一节",
        "footer.source_atlas": "源码覆盖地图",
        "footer.source_atlas_desc": "每一行都归属于某个课程或导读 — 拼接所有片段即可得到完整的 model.py / kernel.py。",
        "footer.github": "GitHub 项目主页",
        "difficulty.Warm-up": "入门",
        "difficulty.Core": "核心",
        "difficulty.Advanced": "进阶",
        "status.running": "运行中…",
        "status.idle": "等待运行",
        "status.completed": "已完成",
        "status.in_progress": "进行中",
        "status.not_started": "未开始",
        "progress.label": "完成进度",
        "progress.completed_of": "已完成 {done}/{total}",
        "app.placeholder_title": "从左侧选择一节课开始练习。",
        "app.placeholder_subtitle": "每节课都附带可运行的 Python、细粒度填空拼图以及本地测试执行器。",
        "app.reset_button": "重置进度",
        "app.reset_confirm": "确定要清除此设备上所有练习进度和草稿吗？",
        "app.solution_confirm": "要用参考答案填满所有空格吗？",
        "app.dev_server_error": "开发服务器连接失败",
        "app.dev_server_connecting": "（正在连接开发服务器…）",
        "inspector.switch_to_runnable": "切换到「填空」或「自由编辑」标签再运行。",
        "inspector.show_diff": "展开差异"
      }
    }
  },
  "lessons": [
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
      "tags": [
        "dispatch",
        "quantization"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 108,
      "line_end": 120,
      "summary": "`linear()` is the single function every `nn.Linear` inside DeepSeek-V4 funnels through. It reads the weight dtype and routes into FP4, FP8, or plain BF16 GEMM.",
      "paper_anchor": {
        "section": "§3.4 FP4 Quantization-Aware Training",
        "figure": "Figure 2 — Overall Architecture",
        "summary": "The paper trains routed-expert weights in FP4 and activations in FP8; the dispatch below is the software seam where that mixed-precision plan actually bifurcates at runtime."
      },
      "what_you_learn": [
        "Why quantized weights require an activation quant step first.",
        "Why BF16 is the simplest path — no external `scale` tensor travels alongside the weight.",
        "How a single Python dispatcher keeps the rest of `model.py` agnostic of precision."
      ],
      "workshop_steps": [
        "Guard the FP4 branch with the correct dtype comparison.",
        "Call `fp4_gemm` with the quantized activation + both scales.",
        "Let the else-branch fall back to an un-quantized BF16 linear."
      ],
      "pitfalls": [
        "`act_quant` must run on the *activation*, not the weight.",
        "The scale tensor is attached to the weight as `weight.scale`."
      ],
      "blanks": [
        {
          "id": "fp4_guard",
          "label": "FP4 dtype guard",
          "hint": "Compare `weight.dtype` against `torch.float4_e2m1fn_x2`.",
          "starter": "False",
          "solution": "weight.dtype == torch.float4_e2m1fn_x2",
          "i18n": {
            "zh": {
              "label": "FP4 dtype 判别",
              "hint": "用 `weight.dtype` 和 `torch.float4_e2m1fn_x2` 比较。"
            }
          }
        },
        {
          "id": "fp4_call",
          "label": "FP4 GEMM call",
          "hint": "Pass the quantized activation `x`, the activation scale `s`, the weight, its `weight.scale`, and `scale_dtype`.",
          "starter": "('bf16', 'x', 'bf16')",
          "solution": "fp4_gemm(x, s, weight, weight.scale, scale_dtype)",
          "i18n": {
            "zh": {
              "label": "FP4 GEMM 调用",
              "hint": "把量化后的 `x`、scale `s`、权重、`weight.scale`、`scale_dtype` 依次传入。"
            }
          }
        },
        {
          "id": "bf16_fallback",
          "label": "BF16 fallback",
          "hint": "Call the un-quantized dense linear helper `dense_linear(x, weight)`.",
          "starter": "('bf16', 'x', 'bf16')",
          "solution": "dense_linear(x, weight)",
          "i18n": {
            "zh": {
              "label": "BF16 回退分支",
              "hint": "调用未量化的 `dense_linear(x, weight)`。"
            }
          }
        }
      ],
      "starter_code": "class TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\nclass Weight:\n    def __init__(self, dtype, scale=\"weight_scale\"):\n        self.dtype = dtype\n        self.scale = scale\n\nblock_size = 128\nscale_fmt = \"ue8m0\"\nscale_dtype = \"fp32\"\n\ndef act_quant(x, block_size, scale_fmt, scale_dtype):\n    return f\"quant({x})\", f\"scale({block_size},{scale_fmt},{scale_dtype})\"\n\ndef fp4_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp4\", x, s, weight_scale, scale_dtype)\n\ndef fp8_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp8\", x, s, weight_scale, scale_dtype)\n\ndef dense_linear(x, weight):\n    return (\"bf16\", x, weight.dtype)\n\ndef linear(x, weight, bias=None):\n    assert bias is None\n    if __B_fp4_guard__:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return __B_fp4_call__\n    elif weight.dtype == torch.float8_e4m3fn:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp8_gemm(x, s, weight, weight.scale, scale_dtype)\n    else:\n        return __B_bf16_fallback__\n",
      "validator_code": "def run_checks(ns):\n    Weight = ns[\"Weight\"]\n    torch = ns[\"torch\"]\n    linear = ns[\"linear\"]\n    checks = []\n\n    fp4 = linear(\"x\", Weight(torch.float4_e2m1fn_x2))\n    checks.append({\n        \"name\": \"FP4 path quantizes activation\",\n        \"passed\": isinstance(fp4, tuple) and fp4[0] == \"fp4\" and str(fp4[1]).startswith(\"quant(\"),\n        \"expected\": \"('fp4', 'quant(x)', ...)\",\n        \"actual\": repr(fp4),\n    })\n\n    fp8 = linear(\"x\", Weight(torch.float8_e4m3fn))\n    checks.append({\n        \"name\": \"FP8 path stays intact\",\n        \"passed\": isinstance(fp8, tuple) and fp8[0] == \"fp8\",\n        \"expected\": \"('fp8', ...)\",\n        \"actual\": repr(fp8),\n    })\n\n    bf = linear(\"x\", Weight(torch.bfloat16))\n    checks.append({\n        \"name\": \"BF16 fallback is dense\",\n        \"passed\": bf == (\"bf16\", \"x\", \"bf16\"),\n        \"expected\": \"('bf16', 'x', 'bf16')\",\n        \"actual\": repr(bf),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "class TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\nclass Weight:\n    def __init__(self, dtype, scale=\"weight_scale\"):\n        self.dtype = dtype\n        self.scale = scale\n\nblock_size = 128\nscale_fmt = \"ue8m0\"\nscale_dtype = \"fp32\"\n\ndef act_quant(x, block_size, scale_fmt, scale_dtype):\n    return f\"quant({x})\", f\"scale({block_size},{scale_fmt},{scale_dtype})\"\n\ndef fp4_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp4\", x, s, weight_scale, scale_dtype)\n\ndef fp8_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp8\", x, s, weight_scale, scale_dtype)\n\ndef dense_linear(x, weight):\n    return (\"bf16\", x, weight.dtype)\n\ndef linear(x, weight, bias=None):\n    assert bias is None\n    if False:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return ('bf16', 'x', 'bf16')\n    elif weight.dtype == torch.float8_e4m3fn:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp8_gemm(x, s, weight, weight.scale, scale_dtype)\n    else:\n        return ('bf16', 'x', 'bf16')\n",
      "solution_runnable": "class TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\nclass Weight:\n    def __init__(self, dtype, scale=\"weight_scale\"):\n        self.dtype = dtype\n        self.scale = scale\n\nblock_size = 128\nscale_fmt = \"ue8m0\"\nscale_dtype = \"fp32\"\n\ndef act_quant(x, block_size, scale_fmt, scale_dtype):\n    return f\"quant({x})\", f\"scale({block_size},{scale_fmt},{scale_dtype})\"\n\ndef fp4_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp4\", x, s, weight_scale, scale_dtype)\n\ndef fp8_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp8\", x, s, weight_scale, scale_dtype)\n\ndef dense_linear(x, weight):\n    return (\"bf16\", x, weight.dtype)\n\ndef linear(x, weight, bias=None):\n    assert bias is None\n    if weight.dtype == torch.float4_e2m1fn_x2:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp4_gemm(x, s, weight, weight.scale, scale_dtype)\n    elif weight.dtype == torch.float8_e4m3fn:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp8_gemm(x, s, weight, weight.scale, scale_dtype)\n    else:\n        return dense_linear(x, weight)\n",
      "solution_code": "class TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\nclass Weight:\n    def __init__(self, dtype, scale=\"weight_scale\"):\n        self.dtype = dtype\n        self.scale = scale\n\nblock_size = 128\nscale_fmt = \"ue8m0\"\nscale_dtype = \"fp32\"\n\ndef act_quant(x, block_size, scale_fmt, scale_dtype):\n    return f\"quant({x})\", f\"scale({block_size},{scale_fmt},{scale_dtype})\"\n\ndef fp4_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp4\", x, s, weight_scale, scale_dtype)\n\ndef fp8_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp8\", x, s, weight_scale, scale_dtype)\n\ndef dense_linear(x, weight):\n    return (\"bf16\", x, weight.dtype)\n\ndef linear(x, weight, bias=None):\n    assert bias is None\n    if weight.dtype == torch.float4_e2m1fn_x2:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp4_gemm(x, s, weight, weight.scale, scale_dtype)\n    elif weight.dtype == torch.float8_e4m3fn:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp8_gemm(x, s, weight, weight.scale, scale_dtype)\n    else:\n        return dense_linear(x, weight)\n",
      "reference_code": "def linear(x: torch.Tensor, weight: torch.Tensor, bias: Optional[torch.Tensor] = None) -> torch.Tensor:\n    \"\"\"Dispatches to fp4_gemm / fp8_gemm / F.linear based on weight dtype.\n    For quantized weights, x is first quantized to FP8 via act_quant.\"\"\"\n    assert bias is None\n\n    if weight.dtype == torch.float4_e2m1fn_x2:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp4_gemm(x, s, weight, weight.scale, scale_dtype)\n    elif weight.dtype == torch.float8_e4m3fn:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp8_gemm(x, s, weight, weight.scale, scale_dtype)\n    else:\n        return F.linear(x, weight)\n",
      "puzzle_path": "tutorial/generated/puzzles/01_s01-linear-dispatch.py",
      "solution_path": "tutorial/generated/solutions/01_s01-linear-dispatch.py",
      "reference_file_path": "tutorial/generated/references/01_s01-linear-dispatch.py",
      "workshop_loc": 38,
      "reference_loc": 13,
      "blank_count": 3,
      "i18n": {
        "zh": {
          "title": "线性层分发",
          "tagline": "一个入口,三条精度路径。",
          "difficulty": "入门",
          "summary": "`linear()` 是 DeepSeek-V4 里所有 `nn.Linear` 的统一出口。它根据权重的 dtype 把请求路由到 FP4、FP8 或原生 BF16 的 GEMM。",
          "what_you_learn": [
            "为什么量化权重必须先做一次激活量化。",
            "为什么 BF16 最简单 —— 不需要额外的 scale 张量跟着权重走。",
            "单一 Python 分发器如何让 `model.py` 的其余部分与精度解耦。"
          ],
          "workshop_steps": [
            "写出 FP4 分支的 dtype 判断。",
            "用量化后的激活与两个 scale 张量调用 `fp4_gemm`。",
            "让 else 分支回落到未量化的 BF16 线性层。"
          ],
          "pitfalls": [
            "`act_quant` 要作用在 *激活* 上,不是权重。",
            "scale 张量挂在权重对象上,通过 `weight.scale` 访问。"
          ]
        }
      }
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
      "tags": [
        "layout",
        "quantization"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 123,
      "line_end": 150,
      "summary": "`Linear.__init__` branches on dtype to decide the physical weight shape and the size of the companion scale tensor. FP4 packs two values per byte; FP8 stores a scale per 128×128 block.",
      "paper_anchor": {
        "section": "§3.4 FP4 Quantization-Aware Training",
        "figure": "Figure 2, inset on Mixed Precision",
        "summary": "Packed FP4 storage and per-block FP8 scales are the *physical* layout behind the mixed-precision boxes drawn in Figure 2 — the code below wires a concrete tensor shape to each ratio in the paper's quantization table."
      },
      "what_you_learn": [
        "Why FP4 packs two values per byte and needs `in_features // 2` storage.",
        "Why FP8 stores one scale per 128×128 tile (`ceildiv` each dim).",
        "Why BF16 doesn't need a scale tensor at all."
      ],
      "workshop_steps": [
        "Fill the FP4 scale's column count — `in_features // fp4_block_size`.",
        "Fill the FP8 scale grid — `ceildiv` on both axes.",
        "Leave BF16 with no scale tensor."
      ],
      "pitfalls": [
        "FP4 block size is 32 (`fp4_block_size`), different from the FP8 block size of 128.",
        "`ceildiv` rounds UP because the last tile may be partial."
      ],
      "blanks": [
        {
          "id": "fp4_scale_cols",
          "label": "FP4 scale columns",
          "hint": "One scale per 32 FP4 values along K, so `in_features // fp4_block_size`.",
          "starter": "1",
          "solution": "in_features // fp4_block_size",
          "i18n": {
            "zh": {
              "label": "FP4 scale 列数",
              "hint": "每 32 个 FP4 值共享一个 scale,`in_features // fp4_block_size`。"
            }
          }
        },
        {
          "id": "fp8_scale_rows",
          "label": "FP8 scale rows",
          "hint": "One scale per 128 rows, rounded up — `ceildiv(out_features, block_size)`.",
          "starter": "1",
          "solution": "ceildiv(out_features, block_size)",
          "i18n": {
            "zh": {
              "label": "FP8 scale 行数",
              "hint": "每 128 行一个 scale,`ceildiv(out_features, block_size)`。"
            }
          }
        },
        {
          "id": "fp8_scale_cols",
          "label": "FP8 scale columns",
          "hint": "One scale per 128 columns, rounded up — `ceildiv(in_features, block_size)`.",
          "starter": "1",
          "solution": "ceildiv(in_features, block_size)",
          "i18n": {
            "zh": {
              "label": "FP8 scale 列数",
              "hint": "每 128 列一个 scale,`ceildiv(in_features, block_size)`。"
            }
          }
        }
      ],
      "starter_code": "block_size = 128\nfp4_block_size = 32\n\nclass TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\ndef ceildiv(x, y):\n    return (x + y - 1) // y\n\ndef describe_linear_layout(in_features, out_features, dtype):\n    if dtype == torch.float4_e2m1fn_x2:\n        weight_shape = (out_features, in_features // 2)\n        scale_shape = (out_features, __B_fp4_scale_cols__)\n    elif dtype == torch.float8_e4m3fn:\n        weight_shape = (out_features, in_features)\n        scale_shape = (__B_fp8_scale_rows__, __B_fp8_scale_cols__)\n    else:\n        weight_shape = (out_features, in_features)\n        scale_shape = None\n    return weight_shape, scale_shape\n",
      "validator_code": "def run_checks(ns):\n    describe = ns[\"describe_linear_layout\"]\n    torch = ns[\"torch\"]\n    checks = []\n\n    fp4 = describe(256, 512, torch.float4_e2m1fn_x2)\n    checks.append({\n        \"name\": \"FP4 packed weight + per-32 scale\",\n        \"passed\": fp4 == ((512, 128), (512, 8)),\n        \"expected\": \"((512, 128), (512, 8))\",\n        \"actual\": repr(fp4),\n    })\n\n    fp8 = describe(320, 300, torch.float8_e4m3fn)\n    checks.append({\n        \"name\": \"FP8 per-128 block scale grid\",\n        \"passed\": fp8 == ((300, 320), (3, 3)),\n        \"expected\": \"((300, 320), (3, 3))\",\n        \"actual\": repr(fp8),\n    })\n\n    bf = describe(8, 8, torch.bfloat16)\n    checks.append({\n        \"name\": \"BF16 keeps no scale\",\n        \"passed\": bf == ((8, 8), None),\n        \"expected\": \"((8, 8), None)\",\n        \"actual\": repr(bf),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "block_size = 128\nfp4_block_size = 32\n\nclass TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\ndef ceildiv(x, y):\n    return (x + y - 1) // y\n\ndef describe_linear_layout(in_features, out_features, dtype):\n    if dtype == torch.float4_e2m1fn_x2:\n        weight_shape = (out_features, in_features // 2)\n        scale_shape = (out_features, 1)\n    elif dtype == torch.float8_e4m3fn:\n        weight_shape = (out_features, in_features)\n        scale_shape = (1, 1)\n    else:\n        weight_shape = (out_features, in_features)\n        scale_shape = None\n    return weight_shape, scale_shape\n",
      "solution_runnable": "block_size = 128\nfp4_block_size = 32\n\nclass TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\ndef ceildiv(x, y):\n    return (x + y - 1) // y\n\ndef describe_linear_layout(in_features, out_features, dtype):\n    if dtype == torch.float4_e2m1fn_x2:\n        weight_shape = (out_features, in_features // 2)\n        scale_shape = (out_features, in_features // fp4_block_size)\n    elif dtype == torch.float8_e4m3fn:\n        weight_shape = (out_features, in_features)\n        scale_shape = (ceildiv(out_features, block_size), ceildiv(in_features, block_size))\n    else:\n        weight_shape = (out_features, in_features)\n        scale_shape = None\n    return weight_shape, scale_shape\n",
      "solution_code": "block_size = 128\nfp4_block_size = 32\n\nclass TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\ndef ceildiv(x, y):\n    return (x + y - 1) // y\n\ndef describe_linear_layout(in_features, out_features, dtype):\n    if dtype == torch.float4_e2m1fn_x2:\n        weight_shape = (out_features, in_features // 2)\n        scale_shape = (out_features, in_features // fp4_block_size)\n    elif dtype == torch.float8_e4m3fn:\n        weight_shape = (out_features, in_features)\n        scale_shape = (ceildiv(out_features, block_size), ceildiv(in_features, block_size))\n    else:\n        weight_shape = (out_features, in_features)\n        scale_shape = None\n    return weight_shape, scale_shape\n",
      "reference_code": "class Linear(nn.Module):\n    \"\"\"Linear layer supporting BF16, FP8, and FP4 weight formats with per-block scaling.\"\"\"\n\n    def __init__(self, in_features: int, out_features: int, bias: bool = False, dtype = None):\n        super().__init__()\n        self.in_features = in_features\n        self.out_features = out_features\n        dtype = dtype or default_dtype\n        if dtype == torch.float4_e2m1fn_x2:\n            # FP4: weight is [out, in//2] in float4_e2m1fn_x2, logically [out, in] in fp4\n            # Scale is [out, in//32] in float8_e8m0fnu (1 scale per 32 fp4 elements along K)\n            self.weight = nn.Parameter(torch.empty(out_features, in_features // 2, dtype=torch.float4_e2m1fn_x2))\n            scale_out_features = out_features\n            scale_in_features = in_features // fp4_block_size\n            self.weight.scale = self.scale = nn.Parameter(torch.empty(scale_out_features, scale_in_features, dtype=torch.float8_e8m0fnu))\n        elif dtype == torch.float8_e4m3fn:\n            self.weight = nn.Parameter(torch.empty(out_features, in_features, dtype=dtype))\n            scale_out_features = (out_features + block_size - 1) // block_size\n            scale_in_features = (in_features + block_size - 1) // block_size\n            self.weight.scale = self.scale = nn.Parameter(torch.empty(scale_out_features, scale_in_features, dtype=torch.float8_e8m0fnu))\n        else:\n            self.weight = nn.Parameter(torch.empty(out_features, in_features, dtype=dtype))\n            self.register_parameter(\"scale\", None)\n        if bias:\n            self.bias = nn.Parameter(torch.empty(out_features))\n        else:\n            self.register_parameter(\"bias\", None)\n",
      "puzzle_path": "tutorial/generated/puzzles/02_s02-linear-layout.py",
      "solution_path": "tutorial/generated/solutions/02_s02-linear-layout.py",
      "reference_file_path": "tutorial/generated/references/02_s02-linear-layout.py",
      "workshop_loc": 24,
      "reference_loc": 27,
      "blank_count": 3,
      "i18n": {
        "zh": {
          "title": "权重与 Scale 的物理布局",
          "tagline": "精度在前向开始之前就决定了张量形状。",
          "difficulty": "入门",
          "summary": "`Linear.__init__` 根据 dtype 决定权重的物理形状和 scale 张量的大小。FP4 在一个字节里打包两个值,FP8 则是每 128×128 一个 scale。",
          "what_you_learn": [
            "为什么 FP4 要把两个值塞进一个字节,需要 `in_features // 2` 的存储。",
            "为什么 FP8 每 128×128 一块 scale (两个轴都要 `ceildiv`)。",
            "为什么 BF16 根本不需要 scale 张量。"
          ],
          "workshop_steps": [
            "补上 FP4 的 scale 列数 —— `in_features // fp4_block_size`。",
            "补上 FP8 的 scale 网格 —— 两个轴都 `ceildiv`。",
            "BF16 保持没有 scale。"
          ],
          "pitfalls": [
            "FP4 的块大小是 32 (`fp4_block_size`),和 FP8 的 128 不同。",
            "`ceildiv` 要向上取整,最后一块可能是不完整的。"
          ]
        }
      }
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
      "tags": [
        "tensor-parallel",
        "sharding"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 155,
      "line_end": 180,
      "summary": "`ColumnParallelLinear` slices `out_features`; `RowParallelLinear` slices `in_features`. The shard happens in the constructor — by the time `forward()` runs, the weight already has the right local shape.",
      "paper_anchor": {
        "section": "§3.1 Fine-Grained Comm-Compute Overlap",
        "figure": "Figure 2",
        "summary": "Tensor-parallel sharding underpins the fused MoE kernels in §3.1: experts are split across ranks by output dim (column parallel) and later projected back by a row-parallel pass that all-reduces partials."
      },
      "what_you_learn": [
        "Column-parallel: `out_features //= world_size`, each rank holds a tile of the output.",
        "Row-parallel: `in_features //= world_size`, each rank holds a tile of the input, then all-reduce.",
        "Neither path needs to touch the *other* dimension — the split happens on exactly one axis."
      ],
      "workshop_steps": [
        "Shard `out_features` in the column-parallel branch.",
        "Shard `in_features` in the row-parallel branch.",
        "Confirm the plain branch leaves both sizes unchanged."
      ],
      "pitfalls": [
        "Integer divide (`//`) — fractional shards would fail at all-reduce time.",
        "The assertion `features % world_size == 0` is checked before `__init__`; don't duplicate it."
      ],
      "blanks": [
        {
          "id": "col_out",
          "label": "Column-parallel out",
          "hint": "Column-parallel shards the output — `out_features // world_size`.",
          "starter": "out_features",
          "solution": "out_features // world_size",
          "i18n": {
            "zh": {
              "label": "列并行 out_features",
              "hint": "列并行切输出 —— `out_features // world_size`。"
            }
          }
        },
        {
          "id": "row_in",
          "label": "Row-parallel in",
          "hint": "Row-parallel shards the input — `in_features // world_size`.",
          "starter": "in_features",
          "solution": "in_features // world_size",
          "i18n": {
            "zh": {
              "label": "行并行 in_features",
              "hint": "行并行切输入 —— `in_features // world_size`。"
            }
          }
        }
      ],
      "starter_code": "def shard_linear(in_features, out_features, world_size, mode):\n    if mode == \"column\":\n        out_features = __B_col_out__\n    elif mode == \"row\":\n        in_features = __B_row_in__\n    return in_features, out_features\n",
      "validator_code": "def run_checks(ns):\n    shard = ns[\"shard_linear\"]\n    checks = []\n    checks.append({\n        \"name\": \"Column parallel shards output\",\n        \"passed\": shard(1024, 1024, 4, \"column\") == (1024, 256),\n        \"expected\": \"(1024, 256)\",\n        \"actual\": repr(shard(1024, 1024, 4, \"column\")),\n    })\n    checks.append({\n        \"name\": \"Row parallel shards input\",\n        \"passed\": shard(1024, 1024, 4, \"row\") == (256, 1024),\n        \"expected\": \"(256, 1024)\",\n        \"actual\": repr(shard(1024, 1024, 4, \"row\")),\n    })\n    checks.append({\n        \"name\": \"Plain mode leaves both alone\",\n        \"passed\": shard(1024, 1024, 4, \"plain\") == (1024, 1024),\n        \"expected\": \"(1024, 1024)\",\n        \"actual\": repr(shard(1024, 1024, 4, \"plain\")),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def shard_linear(in_features, out_features, world_size, mode):\n    if mode == \"column\":\n        out_features = out_features\n    elif mode == \"row\":\n        in_features = in_features\n    return in_features, out_features\n",
      "solution_runnable": "def shard_linear(in_features, out_features, world_size, mode):\n    if mode == \"column\":\n        out_features = out_features // world_size\n    elif mode == \"row\":\n        in_features = in_features // world_size\n    return in_features, out_features\n",
      "solution_code": "def shard_linear(in_features, out_features, world_size, mode):\n    if mode == \"column\":\n        out_features = out_features // world_size\n    elif mode == \"row\":\n        in_features = in_features // world_size\n    return in_features, out_features\n",
      "reference_code": "class ColumnParallelLinear(Linear):\n    \"\"\"Shards output dim across TP ranks. No all-reduce needed on output.\"\"\"\n    def __init__(self, in_features: int, out_features: int, bias: bool = False, dtype = None):\n        assert out_features % world_size == 0, f\"Output features must be divisible by world size (world_size={world_size})\"\n        self.part_out_features = out_features // world_size\n        super().__init__(in_features, self.part_out_features, bias, dtype)\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        return linear(x, self.weight, self.bias)\n\n\nclass RowParallelLinear(Linear):\n    \"\"\"Shards input dim across TP ranks. All-reduce on output to sum partial results.\"\"\"\n    def __init__(self, in_features: int, out_features: int, bias: bool = False, dtype = None):\n        assert in_features % world_size == 0, f\"Input features must be divisible by world size (world_size={world_size})\"\n        self.part_in_features = in_features // world_size\n        super().__init__(self.part_in_features, out_features, bias, dtype)\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        y = linear(x, self.weight, None)\n        if world_size > 1:\n            y = y.float()\n            dist.all_reduce(y)\n        if self.bias is not None:\n            y += self.bias\n        return y.type_as(x)\n",
      "puzzle_path": "tutorial/generated/puzzles/03_s03-tp-shard.py",
      "solution_path": "tutorial/generated/solutions/03_s03-tp-shard.py",
      "reference_file_path": "tutorial/generated/references/03_s03-tp-shard.py",
      "workshop_loc": 6,
      "reference_loc": 26,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "行 / 列并行切分",
          "tagline": "在 forward 之前就决定切哪根轴。",
          "difficulty": "入门",
          "summary": "`ColumnParallelLinear` 切 `out_features`,`RowParallelLinear` 切 `in_features`。切分发生在构造器里 —— `forward()` 拿到的已经是本地形状。",
          "what_you_learn": [
            "列并行:`out_features //= world_size`,每个 rank 存一段输出。",
            "行并行:`in_features //= world_size`,每个 rank 存一段输入,再 all-reduce。",
            "两条路都只切一根轴,另一根轴保持原样。"
          ],
          "workshop_steps": [
            "列并行分支切 `out_features`。",
            "行并行分支切 `in_features`。",
            "确认普通分支两根轴都不变。"
          ],
          "pitfalls": [
            "必须用整除 `//`,否则 all-reduce 时会对不齐。",
            "`features % world_size == 0` 的断言在 `__init__` 之前就检查过,不必重复。"
          ]
        }
      }
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
      "tags": [
        "rmsnorm",
        "normalization"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 183,
      "line_end": 196,
      "summary": "DeepSeek-V4 keeps RMSNorm parameters in FP32 even though the checkpoint stores BF16. The computation path is: promote x → compute mean-square → rsqrt → multiply by learned scale → cast back.",
      "paper_anchor": {
        "section": "§2.1 Designs Inherited from DeepSeek-V3",
        "figure": "Figure 2",
        "summary": "RMSNorm is the default norm throughout the hybrid attention / MoE stack; its FP32 recipe is load-bearing for stability when activations live in FP8."
      },
      "what_you_learn": [
        "Why mean-square (not variance) is enough — RMSNorm drops the mean.",
        "Why `rsqrt(var + eps)` avoids divide-by-zero without branching.",
        "Why the scale parameter is elementwise — it isn't a full matrix multiply."
      ],
      "workshop_steps": [
        "Compute the per-row mean square.",
        "Use `rsqrt(var + eps)` to form the inverse-RMS scale.",
        "Multiply by the learned per-dim `weight`."
      ],
      "pitfalls": [
        "`rsqrt` of `var + eps`, not `sqrt(var) + eps` — the epsilon goes INSIDE the sqrt."
      ],
      "blanks": [
        {
          "id": "mean_square",
          "label": "Mean square",
          "hint": "Average of `value * value` across the row.",
          "starter": "sum(value for value in row) / len(row)",
          "solution": "sum(value * value for value in row) / len(row)",
          "i18n": {
            "zh": {
              "label": "均方",
              "hint": "整行 `value * value` 的平均。"
            }
          }
        },
        {
          "id": "inv_rms",
          "label": "Inverse RMS",
          "hint": "`1 / sqrt(var + eps)` — the epsilon lives inside the sqrt.",
          "starter": "1.0",
          "solution": "1.0 / ((var + eps) ** 0.5)",
          "i18n": {
            "zh": {
              "label": "逆 RMS",
              "hint": "`1 / sqrt(var + eps)`,epsilon 在 sqrt 里面。"
            }
          }
        }
      ],
      "starter_code": "def rmsnorm(row, weight, eps=1e-6):\n    var = __B_mean_square__\n    scale = __B_inv_rms__\n    return [weight[i] * row[i] * scale for i in range(len(row))]\n",
      "validator_code": "def run_checks(ns):\n    rmsnorm = ns[\"rmsnorm\"]\n    checks = []\n\n    out = rmsnorm([3.0, 4.0], [1.0, 1.0], eps=0.0)\n    expected = [3.0 / (12.5 ** 0.5), 4.0 / (12.5 ** 0.5)]\n    ok = all(abs(out[i] - expected[i]) < 1e-9 for i in range(2))\n    checks.append({\n        \"name\": \"Unit weight, zero eps\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    })\n\n    out = rmsnorm([1.0, 1.0, 1.0, 1.0], [2.0, 3.0, 4.0, 5.0], eps=0.0)\n    expected = [2.0, 3.0, 4.0, 5.0]\n    ok = all(abs(out[i] - expected[i]) < 1e-9 for i in range(4))\n    checks.append({\n        \"name\": \"Per-dim weight applied\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def rmsnorm(row, weight, eps=1e-6):\n    var = sum(value for value in row) / len(row)\n    scale = 1.0\n    return [weight[i] * row[i] * scale for i in range(len(row))]\n",
      "solution_runnable": "def rmsnorm(row, weight, eps=1e-6):\n    var = sum(value * value for value in row) / len(row)\n    scale = 1.0 / ((var + eps) ** 0.5)\n    return [weight[i] * row[i] * scale for i in range(len(row))]\n",
      "solution_code": "def rmsnorm(row, weight, eps=1e-6):\n    var = sum(value * value for value in row) / len(row)\n    scale = 1.0 / ((var + eps) ** 0.5)\n    return [weight[i] * row[i] * scale for i in range(len(row))]\n",
      "reference_code": "class RMSNorm(nn.Module):\n    def __init__(self, dim: int, eps: float = 1e-6):\n        super().__init__()\n        self.dim = dim\n        self.eps = eps\n        # rmsnorm in the checkpoint is stored in bf16, while the parameter here is stored in fp32 for convenient.\n        self.weight = nn.Parameter(torch.ones(dim, dtype=torch.float32))\n\n    def forward(self, x: torch.Tensor):\n        dtype = x.dtype\n        x = x.float()\n        var = x.square().mean(-1, keepdim=True)\n        x = x * torch.rsqrt(var + self.eps)\n        return (self.weight * x).to(dtype)\n",
      "puzzle_path": "tutorial/generated/puzzles/04_s04-rmsnorm.py",
      "solution_path": "tutorial/generated/solutions/04_s04-rmsnorm.py",
      "reference_file_path": "tutorial/generated/references/04_s04-rmsnorm.py",
      "workshop_loc": 4,
      "reference_loc": 14,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "Float32 RMSNorm",
          "tagline": "方差 → rsqrt → 逐维缩放,先升到 FP32。",
          "difficulty": "入门",
          "summary": "DeepSeek-V4 虽然 checkpoint 里 RMSNorm 权重是 BF16,但参数在内存里是 FP32。计算流程是:x 升到 FP32 → 算均方 → rsqrt → 乘上 learned scale → 再转回原 dtype。",
          "what_you_learn": [
            "为什么 mean-square 就够了 —— RMSNorm 直接丢掉均值。",
            "为什么 `rsqrt(var + eps)` 能无分支避免除零。",
            "为什么 scale 是逐维的,并不是一次矩阵乘。"
          ],
          "workshop_steps": [
            "算每一行的均方。",
            "用 `rsqrt(var + eps)` 得到逆 RMS。",
            "乘上 learned 的逐维 `weight`。"
          ],
          "pitfalls": [
            "是 `rsqrt(var + eps)`,不是 `sqrt(var) + eps` —— epsilon 要在 sqrt 里面。"
          ]
        }
      }
    },
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
      "tags": [
        "rope",
        "yarn"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 220,
      "line_end": 220,
      "summary": "RoPE's building block is a geometric frequency table: for each pair index `i`, the frequency is `1 / base^(i / dim)`. DeepSeek-V4 precomputes it once then multiplies by position to get the rotation angle grid.",
      "paper_anchor": {
        "section": "§2.3 Hybrid Attention",
        "figure": "Figure 3 — CSA (query-key rotation)",
        "summary": "RoPE is the positional basis shared by the dense sliding-window part and the compressed KV path in CSA. Getting the frequency table right is a prerequisite for every later positional transform in the paper."
      },
      "what_you_learn": [
        "Why the exponent walks over EVEN indices — each pair `(2i, 2i+1)` shares one frequency.",
        "Why `base = 10000` is the classical choice and how it controls frequency decay."
      ],
      "workshop_steps": [
        "Produce one frequency per even pair index.",
        "Match the formula `1 / base^(i/dim)` exactly."
      ],
      "pitfalls": [
        "`range(0, dim, 2)` — step of 2 because each frequency governs a 2-D rotation."
      ],
      "blanks": [
        {
          "id": "freq_formula",
          "label": "Base frequency",
          "hint": "Compute `1 / (base ** (i / dim))` for the current even index `i`.",
          "starter": "0.0",
          "solution": "1.0 / (base ** (i / dim))",
          "i18n": {
            "zh": {
              "label": "基础频率公式",
              "hint": "对当前偶数索引 `i`,计算 `1 / (base ** (i / dim))`。"
            }
          }
        }
      ],
      "starter_code": "def build_base_freqs(dim, base):\n    freqs = []\n    for i in range(0, dim, 2):\n        freqs.append(__B_freq_formula__)\n    return freqs\n",
      "validator_code": "def run_checks(ns):\n    build_base_freqs = ns[\"build_base_freqs\"]\n    checks = []\n\n    freqs = build_base_freqs(8, 10000.0)\n    expected = [1.0, 0.1, 0.01, 0.001]\n    ok = len(freqs) == 4 and all(abs(a - b) < 1e-9 for a, b in zip(freqs, expected))\n    checks.append({\n        \"name\": \"Standard RoPE(8, 10000)\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(freqs),\n    })\n\n    freqs = build_base_freqs(4, 100.0)\n    expected = [1.0, 0.1]\n    ok = all(abs(a - b) < 1e-9 for a, b in zip(freqs, expected))\n    checks.append({\n        \"name\": \"Alternate base/dim\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(freqs),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def build_base_freqs(dim, base):\n    freqs = []\n    for i in range(0, dim, 2):\n        freqs.append(0.0)\n    return freqs\n",
      "solution_runnable": "def build_base_freqs(dim, base):\n    freqs = []\n    for i in range(0, dim, 2):\n        freqs.append(1.0 / (base ** (i / dim)))\n    return freqs\n",
      "solution_code": "def build_base_freqs(dim, base):\n    freqs = []\n    for i in range(0, dim, 2):\n        freqs.append(1.0 / (base ** (i / dim)))\n    return freqs\n",
      "reference_code": "    freqs = 1.0 / (base ** (torch.arange(0, dim, 2, dtype=torch.float32) / dim))\n",
      "puzzle_path": "tutorial/generated/puzzles/05_s05-yarn-base-freqs.py",
      "solution_path": "tutorial/generated/solutions/05_s05-yarn-base-freqs.py",
      "reference_file_path": "tutorial/generated/references/05_s05-yarn-base-freqs.py",
      "workshop_loc": 5,
      "reference_loc": 1,
      "blank_count": 1,
      "i18n": {
        "zh": {
          "title": "RoPE 基础频率",
          "tagline": "YaRN 拉伸之前,先得有一张标准频率表。",
          "difficulty": "核心",
          "summary": "RoPE 的基石是一张几何递减的频率表:每个索引对 `i`,频率 θ_i = base^(-2i/dim)。这就是原版 RoPE 的公式。",
          "what_you_learn": [
            "为什么频率对维度呈几何递减 —— 低维对应低频(长周期),高维对应高频(短周期)。",
            "`torch.arange(0, dim, 2)` 为什么跳步 —— 每两个维度共用一个旋转角。",
            "频率表为什么可以 `@lru_cache(2)` —— 它只依赖 dim 和 base,不依赖输入。"
          ],
          "workshop_steps": [
            "对每个偶数索引 `i`,写出 `1 / (base ** (i / dim))`。",
            "确认步长是 2,频率表长度为 `dim // 2`。"
          ],
          "pitfalls": [
            "步长是 2,不是 1 —— 频率表长度是 `dim // 2`。",
            "一定要是 FP32,否则 BF16 下分母会溢出。"
          ]
        }
      }
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
      "tags": [
        "rope",
        "yarn",
        "long-context"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 221,
      "line_end": 229,
      "summary": "YaRN interpolates each base frequency toward `freq / factor` via a per-band smoothing curve. When `smooth[i] = 0`, that band is fully stretched; when `smooth[i] = 1`, the original RoPE frequency survives.",
      "paper_anchor": {
        "section": "§2.3.3 Other Details",
        "figure": "Figure 3",
        "summary": "DeepSeek-V4 uses YaRN to push the trained RoPE table out to 1M-token context without retraining. The linear-ramp smooth mask below is the mechanism that selectively protects high-frequency bands."
      },
      "what_you_learn": [
        "Why the interpolation is a convex combination `freq/factor·(1−s) + freq·s`.",
        "Why the smooth mask — not the factor — is the per-band knob.",
        "How the outer product with `t` produces the final angle grid."
      ],
      "workshop_steps": [
        "Write the convex combination for each band.",
        "Scan `t` from 0..seqlen to build the outer product grid."
      ],
      "pitfalls": [
        "`smooth_value = 0` should FULLY stretch (divide by `factor`), not leave alone."
      ],
      "blanks": [
        {
          "id": "yarn_mix",
          "label": "YaRN mix",
          "hint": "Convex combination: `freq / factor * (1 - smooth_value) + freq * smooth_value`.",
          "starter": "freq",
          "solution": "freq / factor * (1 - smooth_value) + freq * smooth_value",
          "i18n": {
            "zh": {
              "label": "YaRN 凸组合",
              "hint": "`freq / factor * (1 - smooth_value) + freq * smooth_value`。"
            }
          }
        },
        {
          "id": "angle_row",
          "label": "Position × frequency row",
          "hint": "For each time step `t`, return `[t * f for f in freqs]`.",
          "starter": "[0.0 for _ in freqs]",
          "solution": "[t * freq for freq in freqs]",
          "i18n": {
            "zh": {
              "label": "位置 × 频率行",
              "hint": "对每个时间步 `t`,返回 `[t * f for f in freqs]`。"
            }
          }
        }
      ],
      "starter_code": "def apply_yarn(freqs, factor, smooth):\n    adjusted = []\n    for freq, smooth_value in zip(freqs, smooth):\n        adjusted.append(__B_yarn_mix__)\n    return adjusted\n\ndef build_angle_grid(seqlen, freqs):\n    grid = []\n    for t in range(seqlen):\n        grid.append(__B_angle_row__)\n    return grid\n",
      "validator_code": "def run_checks(ns):\n    apply_yarn = ns[\"apply_yarn\"]\n    build_angle_grid = ns[\"build_angle_grid\"]\n    checks = []\n\n    adjusted = apply_yarn([1.0, 0.5], 4.0, [0.0, 1.0])\n    checks.append({\n        \"name\": \"smooth=0 stretches, smooth=1 preserves\",\n        \"passed\": abs(adjusted[0] - 0.25) < 1e-9 and abs(adjusted[1] - 0.5) < 1e-9,\n        \"expected\": \"[0.25, 0.5]\",\n        \"actual\": repr(adjusted),\n    })\n\n    grid = build_angle_grid(3, [1.0, 0.5])\n    expected = [[0.0, 0.0], [1.0, 0.5], [2.0, 1.0]]\n    checks.append({\n        \"name\": \"Outer product grid\",\n        \"passed\": grid == expected,\n        \"expected\": repr(expected),\n        \"actual\": repr(grid),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def apply_yarn(freqs, factor, smooth):\n    adjusted = []\n    for freq, smooth_value in zip(freqs, smooth):\n        adjusted.append(freq)\n    return adjusted\n\ndef build_angle_grid(seqlen, freqs):\n    grid = []\n    for t in range(seqlen):\n        grid.append([0.0 for _ in freqs])\n    return grid\n",
      "solution_runnable": "def apply_yarn(freqs, factor, smooth):\n    adjusted = []\n    for freq, smooth_value in zip(freqs, smooth):\n        adjusted.append(freq / factor * (1 - smooth_value) + freq * smooth_value)\n    return adjusted\n\ndef build_angle_grid(seqlen, freqs):\n    grid = []\n    for t in range(seqlen):\n        grid.append([t * freq for freq in freqs])\n    return grid\n",
      "solution_code": "def apply_yarn(freqs, factor, smooth):\n    adjusted = []\n    for freq, smooth_value in zip(freqs, smooth):\n        adjusted.append(freq / factor * (1 - smooth_value) + freq * smooth_value)\n    return adjusted\n\ndef build_angle_grid(seqlen, freqs):\n    grid = []\n    for t in range(seqlen):\n        grid.append([t * freq for freq in freqs])\n    return grid\n",
      "reference_code": "    if original_seq_len > 0:\n        low, high = find_correction_range(beta_fast, beta_slow, dim, base, original_seq_len)\n        smooth = 1 - linear_ramp_factor(low, high, dim // 2)\n        freqs = freqs / factor * (1 - smooth) + freqs * smooth\n\n    t = torch.arange(seqlen)\n    freqs = torch.outer(t, freqs)\n    freqs_cis = torch.polar(torch.ones_like(freqs), freqs)\n    return freqs_cis\n",
      "puzzle_path": "tutorial/generated/puzzles/06_s06-yarn-smooth.py",
      "solution_path": "tutorial/generated/solutions/06_s06-yarn-smooth.py",
      "reference_file_path": "tutorial/generated/references/06_s06-yarn-smooth.py",
      "workshop_loc": 11,
      "reference_loc": 9,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "YaRN 平滑插值",
          "tagline": "低频拉伸 `1/factor`,高频保持原样,中间用线性斜坡。",
          "difficulty": "核心",
          "summary": "要扩展上下文长度时,YaRN 按频率打分:低频维度整体除以 `factor`,高频维度保持,中间区间用 `linear_ramp_factor` 做线性过渡。最后用 `outer(t, freqs)` 乘上时间步,送去 `polar`。",
          "what_you_learn": [
            "为什么只压缩低频 —— 模型已经在原长度上学会了高频,不要扰动。",
            "`smooth` 为什么要 clip 到 `[0, 1]` —— 边界外的频率维度要么完全拉伸、要么完全保留。",
            "`t · freqs` 的外积如何生成每个时间步的角度。"
          ],
          "workshop_steps": [
            "`original_seq_len > 0` 时进入 YaRN 分支。",
            "写出凸组合:`freq / factor * (1 - smooth) + freq * smooth`。",
            "对每个时间步 `t`,返回 `[t * f for f in freqs]`。"
          ],
          "pitfalls": [
            "凸组合括号写错会导致低频和高频颠倒。",
            "`linear_ramp_factor(min, max, dim)` 的顺序,是先算再 clamp。"
          ]
        }
      }
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
      "tags": [
        "rotary",
        "complex"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 232,
      "line_end": 244,
      "summary": "Each rotary step treats the last dimension as an array of (x, y) complex pairs, multiplies by the precomputed `freqs_cis`, and (optionally) takes the conjugate to reverse the rotation — that's exactly what CSA needs after attention.",
      "paper_anchor": {
        "section": "§2.3.1 Compressed Sparse Attention",
        "figure": "Figure 3",
        "summary": "DSA-style attention rotates both Q and K in CSA, then *unrotates* the attention output via the inverse path so that the residual stream stays un-rotated — this conjugate trick replaces a second matrix parameter."
      },
      "what_you_learn": [
        "Why inverse rotation is just the complex conjugate — no separate coefficients.",
        "Why packing (x, y) into a single complex number keeps the math one line."
      ],
      "workshop_steps": [
        "Conjugate each entry of `freqs_cis` in the inverse branch.",
        "Multiply each 2-D pair by the corresponding frequency."
      ],
      "pitfalls": [
        "`complex(x, y)` — the real part comes first.",
        "`freq_row[pair_index // 2]` — one frequency per PAIR, not per element."
      ],
      "blanks": [
        {
          "id": "inverse_conj",
          "label": "Inverse → conjugate",
          "hint": "Inverse rotation uses `conjugate(value)` across every `freqs_cis` entry.",
          "starter": "value",
          "solution": "conjugate(value)",
          "i18n": {
            "zh": {
              "label": "逆旋转共轭",
              "hint": "逆旋转对每个 `freqs_cis` 取 `conjugate(value)`。"
            }
          }
        },
        {
          "id": "complex_mul",
          "label": "Complex multiply",
          "hint": "Rotate one pair: `z * factor`.",
          "starter": "z",
          "solution": "z * factor",
          "i18n": {
            "zh": {
              "label": "复数乘法",
              "hint": "旋转一对:`z * factor`。"
            }
          }
        }
      ],
      "starter_code": "def conjugate(z):\n    return complex(z.real, -z.imag)\n\ndef apply_rotary_emb(vectors, freqs_cis, inverse=False):\n    if inverse:\n        freqs_cis = [[__B_inverse_conj__ for value in row] for row in freqs_cis]\n\n    output = []\n    for vector, freq_row in zip(vectors, freqs_cis):\n        rotated = []\n        for pair_index in range(0, len(vector), 2):\n            z = complex(vector[pair_index], vector[pair_index + 1])\n            factor = freq_row[pair_index // 2]\n            y = __B_complex_mul__\n            rotated.extend([round(y.real, 6), round(y.imag, 6)])\n        output.append(rotated)\n    return output\n",
      "validator_code": "def run_checks(ns):\n    apply_rotary_emb = ns[\"apply_rotary_emb\"]\n    checks = []\n\n    freq = complex(0.0, 1.0)\n    forward = apply_rotary_emb([[1.0, 0.0, 0.0, 1.0]], [[freq, freq]])\n    checks.append({\n        \"name\": \"90° rotation\",\n        \"passed\": forward == [[0.0, 1.0, -1.0, 0.0]],\n        \"expected\": \"[[0.0, 1.0, -1.0, 0.0]]\",\n        \"actual\": repr(forward),\n    })\n\n    inverse = apply_rotary_emb(forward, [[freq, freq]], inverse=True)\n    checks.append({\n        \"name\": \"Inverse via conjugate\",\n        \"passed\": inverse == [[1.0, 0.0, 0.0, 1.0]],\n        \"expected\": \"[[1.0, 0.0, 0.0, 1.0]]\",\n        \"actual\": repr(inverse),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def conjugate(z):\n    return complex(z.real, -z.imag)\n\ndef apply_rotary_emb(vectors, freqs_cis, inverse=False):\n    if inverse:\n        freqs_cis = [[value for value in row] for row in freqs_cis]\n\n    output = []\n    for vector, freq_row in zip(vectors, freqs_cis):\n        rotated = []\n        for pair_index in range(0, len(vector), 2):\n            z = complex(vector[pair_index], vector[pair_index + 1])\n            factor = freq_row[pair_index // 2]\n            y = z\n            rotated.extend([round(y.real, 6), round(y.imag, 6)])\n        output.append(rotated)\n    return output\n",
      "solution_runnable": "def conjugate(z):\n    return complex(z.real, -z.imag)\n\ndef apply_rotary_emb(vectors, freqs_cis, inverse=False):\n    if inverse:\n        freqs_cis = [[conjugate(value) for value in row] for row in freqs_cis]\n\n    output = []\n    for vector, freq_row in zip(vectors, freqs_cis):\n        rotated = []\n        for pair_index in range(0, len(vector), 2):\n            z = complex(vector[pair_index], vector[pair_index + 1])\n            factor = freq_row[pair_index // 2]\n            y = z * factor\n            rotated.extend([round(y.real, 6), round(y.imag, 6)])\n        output.append(rotated)\n    return output\n",
      "solution_code": "def conjugate(z):\n    return complex(z.real, -z.imag)\n\ndef apply_rotary_emb(vectors, freqs_cis, inverse=False):\n    if inverse:\n        freqs_cis = [[conjugate(value) for value in row] for row in freqs_cis]\n\n    output = []\n    for vector, freq_row in zip(vectors, freqs_cis):\n        rotated = []\n        for pair_index in range(0, len(vector), 2):\n            z = complex(vector[pair_index], vector[pair_index + 1])\n            factor = freq_row[pair_index // 2]\n            y = z * factor\n            rotated.extend([round(y.real, 6), round(y.imag, 6)])\n        output.append(rotated)\n    return output\n",
      "reference_code": "def apply_rotary_emb(x: torch.Tensor, freqs_cis: torch.Tensor, inverse: bool = False) -> torch.Tensor:\n    \"\"\"Applies rotary positional embeddings in-place. Uses conjugate for inverse (de-rotation).\"\"\"\n    y = x\n    x = torch.view_as_complex(x.float().unflatten(-1, (-1, 2)))\n    if inverse:\n        freqs_cis = freqs_cis.conj()\n    if x.ndim == 3:\n        freqs_cis = freqs_cis.view(1, x.size(1), x.size(-1))\n    else:\n        freqs_cis = freqs_cis.view(1, x.size(1), 1, x.size(-1))\n    x = torch.view_as_real(x * freqs_cis).flatten(-2)\n    y.copy_(x)\n    return y\n",
      "puzzle_path": "tutorial/generated/puzzles/07_s07-apply-rotary.py",
      "solution_path": "tutorial/generated/solutions/07_s07-apply-rotary.py",
      "reference_file_path": "tutorial/generated/references/07_s07-apply-rotary.py",
      "workshop_loc": 17,
      "reference_loc": 13,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "旋转位置编码的施加",
          "tagline": "相邻两维看作复数,乘上 freqs_cis。",
          "difficulty": "核心",
          "summary": "`apply_rotary_emb` 把 `x` 的最后两维看成复数对,乘上 `freqs_cis`,再拍回实数。`inverse=True` 时取共轭 —— 这是把注意力输出从 RoPE 空间反旋回模型空间的方式。",
          "what_you_learn": [
            "相邻两维如何打包成复数 —— `view_as_complex` + `unflatten`。",
            "为什么 `inverse=True` 只需对 `freqs_cis` 取共轭。",
            "复数乘法 `z * factor` 本质就是旋转 + 缩放。"
          ],
          "workshop_steps": [
            "`inverse=True` 时对每一个 `freqs_cis` 取共轭。",
            "把 x 的相邻两维复数化,和 factor 相乘。"
          ],
          "pitfalls": [
            "必须先转 FP32 再做复数化,否则 BF16 精度不够。",
            "`y.copy_(x)` 是 in-place 写回,共享存储。"
          ]
        }
      }
    },
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
      "tags": [
        "csa",
        "compressor"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 316,
      "line_end": 342,
      "summary": "In prefill the Compressor slices the sequence into fixed `ratio`-sized windows, softmaxes the learned score tensor *along the window*, and reduces each window into a single compressed KV entry.",
      "paper_anchor": {
        "section": "§2.3.1 Compressed Sparse Attention — eq. (11) & (12)",
        "figure": "Figure 3",
        "summary": "This is the central equation behind CSA: per-window softmax over `Z`, then a Hadamard-weighted sum of `C` — reducing n tokens into n/m compressed entries."
      },
      "what_you_learn": [
        "Why the softmax goes along the WINDOW axis — it redistributes weight across the m entries, not across features.",
        "Why an incomplete trailing window must be skipped (saved into `kv_state` instead)."
      ],
      "workshop_steps": [
        "Decide `should_compress` — need at least one full window.",
        "Softmax-pool each full window into one compressed KV row."
      ],
      "pitfalls": [
        "Softmax goes along dim=1 (window), not dim=0 (sequence) or dim=-1 (features)."
      ],
      "blanks": [
        {
          "id": "should_compress",
          "label": "Enough tokens?",
          "hint": "`len(kv_rows) >= ratio` — at least one complete window is available.",
          "starter": "False",
          "solution": "len(kv_rows) >= ratio",
          "i18n": {
            "zh": {
              "label": "窗口充足判断",
              "hint": "`len(kv_rows) >= ratio` —— 至少凑出一个完整窗口。"
            }
          }
        },
        {
          "id": "pool_window",
          "label": "Weighted pooling",
          "hint": "Call `weighted_sum(window_kv, weights)` where `weights = softmax(window_scores)`.",
          "starter": "[0.0 for _ in window_kv[0]]",
          "solution": "weighted_sum(window_kv, weights)",
          "i18n": {
            "zh": {
              "label": "窗口加权池化",
              "hint": "`weighted_sum(window_kv, weights)`,`weights = softmax(window_scores)`。"
            }
          }
        }
      ],
      "starter_code": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef weighted_sum(vectors, weights):\n    cols = len(vectors[0])\n    return [sum(vectors[row][col] * weights[row] for row in range(len(vectors))) for col in range(cols)]\n\ndef compress_prefill(kv_rows, score_rows, ratio):\n    if not __B_should_compress__:\n        return None\n    compressed = []\n    for start in range(0, len(kv_rows), ratio):\n        window_kv = kv_rows[start:start + ratio]\n        window_scores = score_rows[start:start + ratio]\n        if len(window_kv) < ratio:\n            break\n        weights = softmax(window_scores)\n        compressed.append(__B_pool_window__)\n    return compressed\n",
      "validator_code": "def run_checks(ns):\n    compress_prefill = ns[\"compress_prefill\"]\n    checks = []\n\n    not_ready = compress_prefill([[1.0, 1.0]], [0.0], 2)\n    checks.append({\n        \"name\": \"Short prefill returns None\",\n        \"passed\": not_ready is None,\n        \"expected\": \"None\",\n        \"actual\": repr(not_ready),\n    })\n\n    kv = [[1.0, 0.0], [3.0, 0.0], [0.0, 2.0], [0.0, 6.0]]\n    scores = [0.0, 1.0, 0.0, 1.0]\n    out = compress_prefill(kv, scores, 2)\n    expected = [[2.4621171572600096, 0.0], [0.0, 4.924234314520019]]\n    ok = out is not None and all(\n        abs(out[i][j] - expected[i][j]) < 1e-6 for i in range(2) for j in range(2)\n    )\n    checks.append({\n        \"name\": \"Softmax-pooled windows\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef weighted_sum(vectors, weights):\n    cols = len(vectors[0])\n    return [sum(vectors[row][col] * weights[row] for row in range(len(vectors))) for col in range(cols)]\n\ndef compress_prefill(kv_rows, score_rows, ratio):\n    if not False:\n        return None\n    compressed = []\n    for start in range(0, len(kv_rows), ratio):\n        window_kv = kv_rows[start:start + ratio]\n        window_scores = score_rows[start:start + ratio]\n        if len(window_kv) < ratio:\n            break\n        weights = softmax(window_scores)\n        compressed.append([0.0 for _ in window_kv[0]])\n    return compressed\n",
      "solution_runnable": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef weighted_sum(vectors, weights):\n    cols = len(vectors[0])\n    return [sum(vectors[row][col] * weights[row] for row in range(len(vectors))) for col in range(cols)]\n\ndef compress_prefill(kv_rows, score_rows, ratio):\n    if not len(kv_rows) >= ratio:\n        return None\n    compressed = []\n    for start in range(0, len(kv_rows), ratio):\n        window_kv = kv_rows[start:start + ratio]\n        window_scores = score_rows[start:start + ratio]\n        if len(window_kv) < ratio:\n            break\n        weights = softmax(window_scores)\n        compressed.append(weighted_sum(window_kv, weights))\n    return compressed\n",
      "solution_code": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef weighted_sum(vectors, weights):\n    cols = len(vectors[0])\n    return [sum(vectors[row][col] * weights[row] for row in range(len(vectors))) for col in range(cols)]\n\ndef compress_prefill(kv_rows, score_rows, ratio):\n    if not len(kv_rows) >= ratio:\n        return None\n    compressed = []\n    for start in range(0, len(kv_rows), ratio):\n        window_kv = kv_rows[start:start + ratio]\n        window_scores = score_rows[start:start + ratio]\n        if len(window_kv) < ratio:\n            break\n        weights = softmax(window_scores)\n        compressed.append(weighted_sum(window_kv, weights))\n    return compressed\n",
      "reference_code": "    def forward(self, x: torch.Tensor, start_pos: int):\n        assert self.kv_cache is not None\n        bsz, seqlen, _ = x.size()\n        ratio, overlap, d, rd = self.compress_ratio, self.overlap, self.head_dim, self.rope_head_dim\n        dtype = x.dtype\n        # compression need fp32\n        x = x.float()\n        kv = self.wkv(x)\n        score = self.wgate(x)\n        if start_pos == 0:\n            should_compress = seqlen >= ratio\n            remainder = seqlen % ratio\n            cutoff = seqlen - remainder\n            offset = ratio if overlap else 0\n            if overlap and cutoff >= ratio:\n                self.kv_state[:bsz, :ratio] = kv[:, cutoff-ratio : cutoff]\n                self.score_state[:bsz, :ratio] = score[:, cutoff-ratio : cutoff] + self.ape\n            if remainder > 0:\n                kv, self.kv_state[:bsz, offset : offset+remainder] = kv.split([cutoff, remainder], dim=1)\n                self.score_state[:bsz, offset : offset+remainder] = score[:, cutoff:] + self.ape[:remainder]\n                score = score[:, :cutoff]\n            kv = kv.unflatten(1, (-1, ratio))\n            score = score.unflatten(1, (-1, ratio)) + self.ape\n            if overlap:\n                kv = self.overlap_transform(kv, 0)\n                score = self.overlap_transform(score, float(\"-inf\"))\n            kv = (kv * score.softmax(dim=2)).sum(dim=2)\n",
      "puzzle_path": "tutorial/generated/puzzles/08_s08-compressor-prefill.py",
      "solution_path": "tutorial/generated/solutions/08_s08-compressor-prefill.py",
      "reference_file_path": "tutorial/generated/references/08_s08-compressor-prefill.py",
      "workshop_loc": 21,
      "reference_loc": 27,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "Compressor Prefill",
          "tagline": "一整段序列一次性压缩,池化出每个窗口的代表。",
          "difficulty": "核心",
          "summary": "Prefill 阶段一次吃掉整段输入,按 `compress_ratio` 做分块池化:先检查剩下的 token 是否至少能凑出一个窗口,再在每个窗口上做 `softmax(score) * kv` 的加权和。",
          "what_you_learn": [
            "为什么要显式判断 `len(kv_rows) >= ratio` —— 避免半个窗口被塌缩成无意义的均值。",
            "块内 softmax 为什么要配着 `weighted_sum` —— 这是最小版本的 attention。",
            "状态缓冲 `kv_state` / `score_state` 是怎么存放 decode 的续作数据的(见下一课 Interlude)。"
          ],
          "workshop_steps": [
            "检查 `len(kv_rows) >= ratio`,判断是否有完整窗口。",
            "对每个窗口做 `weighted_sum(window_kv, softmax(window_scores))`。"
          ],
          "pitfalls": [
            "`softmax` 必须沿 *窗口内* 做,不是跨窗口。",
            "不足一个 ratio 的尾段要留给 decode 缓冲。"
          ]
        }
      }
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
      "tags": [
        "kv-cache",
        "ring"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 517,
      "line_end": 533,
      "summary": "The sliding-window part of Attention stores a fixed-size cache of the most recent KV rows. Prefill writes the last `window_size` entries in order; decode overwrites one slot at `start_pos % window_size`.",
      "paper_anchor": {
        "section": "§2.3.3 Other Details (Sliding Window)",
        "figure": "Figure 3",
        "summary": "CSA augments sparse top-k with a small sliding window to preserve fine-grained local structure. This code is where that window survives across autoregressive steps."
      },
      "what_you_learn": [
        "Why the prefill path falls back to `values[-window_size:]` when the input is longer than the window.",
        "Why `start_pos % window_size` makes the cache *effectively circular* at no extra cost."
      ],
      "workshop_steps": [
        "Keep the LAST `window_size` entries in the long-prefill branch.",
        "Overwrite slot `start_pos % window_size` during decode."
      ],
      "pitfalls": [
        "During decode only a single token is added per step — `values[0]` suffices."
      ],
      "blanks": [
        {
          "id": "prefill_tail",
          "label": "Prefill tail",
          "hint": "Return the last `window_size` entries: `list(values[-window_size:])`.",
          "starter": "list(values[:window_size])",
          "solution": "list(values[-window_size:])",
          "i18n": {
            "zh": {
              "label": "Prefill 尾段",
              "hint": "返回最后 `window_size` 个元素:`list(values[-window_size:])`。"
            }
          }
        },
        {
          "id": "decode_idx",
          "label": "Decode ring index",
          "hint": "`start_pos % window_size` — modulo keeps the buffer circular.",
          "starter": "0",
          "solution": "start_pos % window_size",
          "i18n": {
            "zh": {
              "label": "Decode 环形索引",
              "hint": "`start_pos % window_size` —— 模运算让缓冲成为环形。"
            }
          }
        }
      ],
      "starter_code": "def write_kv_cache(cache, values, start_pos, window_size):\n    cache = list(cache)\n    if start_pos == 0:\n        if len(values) <= window_size:\n            return values + cache[len(values):]\n        return __B_prefill_tail__\n    write_index = __B_decode_idx__\n    cache[write_index] = values[0]\n    return cache\n",
      "validator_code": "def run_checks(ns):\n    write_kv_cache = ns[\"write_kv_cache\"]\n    checks = []\n\n    short = write_kv_cache([\"a\", \"b\", \"c\", \"d\"], [\"x\", \"y\"], 0, 4)\n    checks.append({\n        \"name\": \"Short prefill fills from 0\",\n        \"passed\": short == [\"x\", \"y\", \"c\", \"d\"],\n        \"expected\": \"['x', 'y', 'c', 'd']\",\n        \"actual\": repr(short),\n    })\n\n    long = write_kv_cache([\"a\", \"b\", \"c\", \"d\"], [\"x\", \"y\", \"z\", \"w\", \"u\"], 0, 4)\n    checks.append({\n        \"name\": \"Long prefill keeps tail window\",\n        \"passed\": long == [\"y\", \"z\", \"w\", \"u\"],\n        \"expected\": \"['y', 'z', 'w', 'u']\",\n        \"actual\": repr(long),\n    })\n\n    decode = write_kv_cache([\"a\", \"b\", \"c\", \"d\"], [\"x\"], 6, 4)\n    checks.append({\n        \"name\": \"Decode ring write at 6 % 4 = 2\",\n        \"passed\": decode == [\"a\", \"b\", \"x\", \"d\"],\n        \"expected\": \"['a', 'b', 'x', 'd']\",\n        \"actual\": repr(decode),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def write_kv_cache(cache, values, start_pos, window_size):\n    cache = list(cache)\n    if start_pos == 0:\n        if len(values) <= window_size:\n            return values + cache[len(values):]\n        return list(values[:window_size])\n    write_index = 0\n    cache[write_index] = values[0]\n    return cache\n",
      "solution_runnable": "def write_kv_cache(cache, values, start_pos, window_size):\n    cache = list(cache)\n    if start_pos == 0:\n        if len(values) <= window_size:\n            return values + cache[len(values):]\n        return list(values[-window_size:])\n    write_index = start_pos % window_size\n    cache[write_index] = values[0]\n    return cache\n",
      "solution_code": "def write_kv_cache(cache, values, start_pos, window_size):\n    cache = list(cache)\n    if start_pos == 0:\n        if len(values) <= window_size:\n            return values + cache[len(values):]\n        return list(values[-window_size:])\n    write_index = start_pos % window_size\n    cache[write_index] = values[0]\n    return cache\n",
      "reference_code": "        # compress kv & attn\n        if start_pos == 0:\n            if seqlen <= win:\n                self.kv_cache[:bsz, :seqlen] = kv\n            else:\n                cutoff = seqlen % win\n                self.kv_cache[:bsz, cutoff: win], self.kv_cache[:bsz, :cutoff] = kv[:, -win:].split([win - cutoff, cutoff], dim=1)\n            if self.compress_ratio:\n                if (kv_compress := self.compressor(x, start_pos)) is not None:\n                    kv = torch.cat([kv, kv_compress], dim=1)\n            # We performed QAT here, kv could also use fp8 format, though current implementation uses bf16\n            o = sparse_attn(q, kv, self.attn_sink, topk_idxs, self.softmax_scale)\n        else:\n            self.kv_cache[:bsz, start_pos % win] = kv.squeeze(1)\n            if self.compress_ratio:\n                self.compressor(x, start_pos)\n            o = sparse_attn(q, self.kv_cache[:bsz], self.attn_sink, topk_idxs, self.softmax_scale)\n",
      "puzzle_path": "tutorial/generated/puzzles/09_s09-window-cache.py",
      "solution_path": "tutorial/generated/solutions/09_s09-window-cache.py",
      "reference_file_path": "tutorial/generated/references/09_s09-window-cache.py",
      "workshop_loc": 9,
      "reference_loc": 17,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "滑动窗口 KV 缓存",
          "tagline": "Prefill 保留尾巴,decode 在 `(start_pos mod W)` 覆写。",
          "difficulty": "核心",
          "summary": "只有最近 `window_size` 个 token 会被保留。Prefill 时把序列末尾原样写入;decode 时用 ring-buffer 覆盖最旧的位置 —— 任何时刻都只保存最近一个窗口。",
          "what_you_learn": [
            "为什么 prefill 的尾巴是 `values[-window_size:]`。",
            "`start_pos % window_size` 如何形成 ring-buffer 行为。",
            "为什么用 `%` 而不是 `//`。"
          ],
          "workshop_steps": [
            "Prefill:取最近 `window_size` 个 KV。",
            "Decode:写回 `start_pos % window_size` 这个槽位。"
          ],
          "pitfalls": [
            "`seqlen > win` 时,保留的是 *最后* `win` 个 token,不是前 `win` 个。",
            "Ring-buffer 偏移要用 `%`,不是 `//`。"
          ]
        }
      }
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
      "tags": [
        "topk",
        "merge"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 507,
      "line_end": 516,
      "summary": "Before sparse attention fires, the `topk_idxs` tensor concatenates the dense window indices with the sparse top-k from the Indexer. Entries equal to `-1` are masked (turn into zero contributions inside the kernel).",
      "paper_anchor": {
        "section": "§2.3.1 CSA — eq. (17)",
        "figure": "Figure 3",
        "summary": "This is the data-plane version of eq. (17): the union of sliding-window KV and top-k compressed KV, which the sparse attention kernel reads in lock-step."
      },
      "what_you_learn": [
        "Why `-1` is kept as an explicit sentinel rather than excised early — the kernel uses it to zero-out contributions.",
        "Why the concat order matters for block-aligned cache reads."
      ],
      "workshop_steps": [
        "Concatenate window indices and compressed indices in that order.",
        "Drop sentinel `-1` values from the return plan."
      ],
      "pitfalls": [
        "The sentinel filter happens AFTER the merge — the concatenation itself may contain -1s."
      ],
      "blanks": [
        {
          "id": "merge_topk",
          "label": "Merge indices",
          "hint": "Append `compress_topk` to `window_topk` when the former is non-empty.",
          "starter": "merged",
          "solution": "merged + list(compress_topk)",
          "i18n": {
            "zh": {
              "label": "Top-k 合并",
              "hint": "如果 `compress_topk` 非空,就追加到 `window_topk` 后面。"
            }
          }
        }
      ],
      "starter_code": "def build_topk_plan(window_topk, compress_topk):\n    merged = list(window_topk)\n    if compress_topk:\n        merged = __B_merge_topk__\n    return [value for value in merged if value != -1]\n",
      "validator_code": "def run_checks(ns):\n    plan = ns[\"build_topk_plan\"]\n    checks = []\n    checks.append({\n        \"name\": \"Concat then drop sentinel\",\n        \"passed\": plan([3, 4, -1], [8, 9]) == [3, 4, 8, 9],\n        \"expected\": \"[3, 4, 8, 9]\",\n        \"actual\": repr(plan([3, 4, -1], [8, 9])),\n    })\n    checks.append({\n        \"name\": \"Empty compressed is fine\",\n        \"passed\": plan([0, -1, 2], []) == [0, 2],\n        \"expected\": \"[0, 2]\",\n        \"actual\": repr(plan([0, -1, 2], [])),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def build_topk_plan(window_topk, compress_topk):\n    merged = list(window_topk)\n    if compress_topk:\n        merged = merged\n    return [value for value in merged if value != -1]\n",
      "solution_runnable": "def build_topk_plan(window_topk, compress_topk):\n    merged = list(window_topk)\n    if compress_topk:\n        merged = merged + list(compress_topk)\n    return [value for value in merged if value != -1]\n",
      "solution_code": "def build_topk_plan(window_topk, compress_topk):\n    merged = list(window_topk)\n    if compress_topk:\n        merged = merged + list(compress_topk)\n    return [value for value in merged if value != -1]\n",
      "reference_code": "        topk_idxs = get_window_topk_idxs(win, bsz, seqlen, start_pos)\n        if self.compress_ratio:\n            offset = kv.size(1) if start_pos == 0 else win\n            if self.indexer is not None:\n                compress_topk_idxs = self.indexer(x, qr, start_pos, offset)\n            else:\n                compress_topk_idxs = get_compress_topk_idxs(ratio, bsz, seqlen, start_pos, offset)\n            topk_idxs = torch.cat([topk_idxs, compress_topk_idxs], dim=-1)\n        topk_idxs = topk_idxs.int()\n",
      "puzzle_path": "tutorial/generated/puzzles/10_s10-topk-merge.py",
      "solution_path": "tutorial/generated/solutions/10_s10-topk-merge.py",
      "reference_file_path": "tutorial/generated/references/10_s10-topk-merge.py",
      "workshop_loc": 5,
      "reference_loc": 9,
      "blank_count": 1,
      "i18n": {
        "zh": {
          "title": "窗口 + 压缩 Top-k 合并",
          "tagline": "先取窗口索引,再拼上压缩索引(若有)。",
          "difficulty": "核心",
          "summary": "稀疏注意力需要一张统一的 topk 索引表。本节把 *窗口索引*(最近的真实位置)和 *压缩索引*(Indexer 或静态公式)沿最后一维拼接起来。只有压缩部分非空时才需要拼;否则原样返回窗口索引。",
          "what_you_learn": [
            "`compress_topk` 什么时候为空 —— `compress_ratio == 0` 的纯滑动窗口层。",
            "为什么索引用 `-1` 表示“跳过” —— kernel 会按此掩码。",
            "统一 topk 索引表让稀疏 attention kernel 无分支地 gather。"
          ],
          "workshop_steps": [
            "把 `compress_topk` 附加到 `window_topk` 后面(若非空)。"
          ],
          "pitfalls": [
            "`compress_topk` 为空时别拼,否则拼出空列表。"
          ]
        }
      }
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
      "tags": [
        "indexer",
        "top-k"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 418,
      "line_end": 427,
      "summary": "Index scores are: per head, take `ReLU(q @ k)`; weight by a learned per-head scale; sum across heads. The Indexer then runs top-k over this scalar score per query.",
      "paper_anchor": {
        "section": "§2.3.1 Lightning Indexer — eq. (15)/(16)",
        "figure": "Figure 3",
        "summary": "Equations 15–16 in the paper. The ReLU is critical — it zeroes out negative alignments so the top-k survives noisy queries."
      },
      "what_you_learn": [
        "Why ReLU clips negatives — negative alignments shouldn't pull a key into the top-k.",
        "Why the head-weight is multiplied AFTER the ReLU."
      ],
      "workshop_steps": [
        "Compute ReLU of each head's dot product.",
        "Multiply each ReLU'd score by the head weight and accumulate."
      ],
      "pitfalls": [
        "`max(0, ...)` — `abs(...)` would double-count negatives."
      ],
      "blanks": [
        {
          "id": "relu_dot",
          "label": "ReLU(q·k)",
          "hint": "`max(0.0, dot)` of the current head's query and key.",
          "starter": "dot",
          "solution": "max(0.0, dot)",
          "i18n": {
            "zh": {
              "label": "ReLU(q·k)",
              "hint": "对当前 head 的 query 和 key 取 `max(0.0, dot)`。"
            }
          }
        },
        {
          "id": "head_weighted",
          "label": "Weighted sum",
          "hint": "Multiply the ReLU score by `head_weights[h]` before summing.",
          "starter": "relu",
          "solution": "head_weights[h] * relu",
          "i18n": {
            "zh": {
              "label": "head 加权求和",
              "hint": "用 `head_weights[h]` 乘以 ReLU 后的得分。"
            }
          }
        }
      ],
      "starter_code": "def index_score(queries, keys, head_weights):\n    # queries: [h][d], keys: [d], head_weights: [h]\n    total = 0.0\n    for h in range(len(queries)):\n        dot = sum(queries[h][i] * keys[i] for i in range(len(keys)))\n        relu = __B_relu_dot__\n        total += __B_head_weighted__\n    return total\n",
      "validator_code": "def run_checks(ns):\n    index_score = ns[\"index_score\"]\n    checks = []\n\n    score = index_score([[1.0, 0.0], [0.0, -1.0]], [1.0, 1.0], [2.0, 3.0])\n    checks.append({\n        \"name\": \"Negative head zeroed by ReLU\",\n        \"passed\": abs(score - 2.0) < 1e-9,\n        \"expected\": \"2.0\",\n        \"actual\": repr(score),\n    })\n\n    score = index_score([[1.0, 1.0], [2.0, 0.0]], [1.0, 0.0], [1.0, 0.5])\n    checks.append({\n        \"name\": \"Weighted sum across heads\",\n        \"passed\": abs(score - 2.0) < 1e-9,\n        \"expected\": \"2.0\",\n        \"actual\": repr(score),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def index_score(queries, keys, head_weights):\n    # queries: [h][d], keys: [d], head_weights: [h]\n    total = 0.0\n    for h in range(len(queries)):\n        dot = sum(queries[h][i] * keys[i] for i in range(len(keys)))\n        relu = dot\n        total += relu\n    return total\n",
      "solution_runnable": "def index_score(queries, keys, head_weights):\n    # queries: [h][d], keys: [d], head_weights: [h]\n    total = 0.0\n    for h in range(len(queries)):\n        dot = sum(queries[h][i] * keys[i] for i in range(len(keys)))\n        relu = max(0.0, dot)\n        total += head_weights[h] * relu\n    return total\n",
      "solution_code": "def index_score(queries, keys, head_weights):\n    # queries: [h][d], keys: [d], head_weights: [h]\n    total = 0.0\n    for h in range(len(queries)):\n        dot = sum(queries[h][i] * keys[i] for i in range(len(keys)))\n        relu = max(0.0, dot)\n        total += head_weights[h] * relu\n    return total\n",
      "reference_code": "        weights = self.weights_proj(x) * (self.softmax_scale * self.n_heads ** -0.5)\n        # We performed QAT here, kv could also use fp8 format, though current implementation uses bf16\n        index_score = torch.einsum(\"bshd,btd->bsht\", q, self.kv_cache[:bsz, :end_pos // ratio])\n        index_score = (index_score.relu_() * weights.unsqueeze(-1)).sum(dim=2)\n        if world_size > 1:\n            dist.all_reduce(index_score)\n        if start_pos == 0:\n            mask = torch.arange(seqlen // ratio).repeat(seqlen, 1) >= torch.arange(1, seqlen + 1).unsqueeze(1) // ratio\n            index_score += torch.where(mask, float(\"-inf\"), 0)\n        topk_idxs = index_score.topk(min(self.index_topk, end_pos // ratio), dim=-1)[1]\n",
      "puzzle_path": "tutorial/generated/puzzles/11_s11-indexer-score.py",
      "solution_path": "tutorial/generated/solutions/11_s11-indexer-score.py",
      "reference_file_path": "tutorial/generated/references/11_s11-indexer-score.py",
      "workshop_loc": 8,
      "reference_loc": 10,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "闪电索引器打分",
          "tagline": "对每个 (q, k) 计算 ReLU(q·k),按 head 加权求和。",
          "difficulty": "核心",
          "summary": "Indexer 用每个 head 的 q 与压缩 KV 做点积,经 ReLU 抑制负得分,然后按 `head_weights[h]` 对 head 做加权求和,得到每个 query 对每个压缩位置的得分。",
          "what_you_learn": [
            "为什么用 ReLU 而不是 softmax —— 得分本身就用于排序,ReLU 足以剔除负贡献。",
            "head 加权让不同 head 可以学到不同的重要性。",
            "得分是累加的,不是 softmax 归一化的 —— 适合后续的 topk。"
          ],
          "workshop_steps": [
            "对每一个 head,算 `max(0.0, dot)`。",
            "乘上 `head_weights[h]`,沿 head 维求和。"
          ],
          "pitfalls": [
            "head 维的 sum 不要和 feature 维的 dot 混淆。",
            "`head_weights[h]` 必须乘在 ReLU 之后,不是之前。"
          ]
        }
      }
    },
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
      "tags": [
        "gate",
        "moe"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 564,
      "line_end": 584,
      "summary": "DeepSeek-V4's Gate defaults to `sqrt(softplus(scores))`. A learnable bias shifts only the ranking used for top-k; the returned routing weight comes from the original un-biased score.",
      "paper_anchor": {
        "section": "§2.1 Designs Inherited — activation change from sigmoid to sqrtsoftplus",
        "figure": "Figure 2",
        "summary": "Paper change from V3: the affinity function is `sqrt(softplus(·))`, and a bias-assisted top-k keeps load balanced without distorting the routing weights."
      },
      "what_you_learn": [
        "Why the bias term only influences SELECTION, not the final routing weight.",
        "Why the softmax path is the only branch that already sums to 1 and doesn't need renormalization."
      ],
      "workshop_steps": [
        "Shift scores by bias only for the top-k ranking.",
        "Gather the routing weights from the ORIGINAL (unshifted) scores."
      ],
      "pitfalls": [
        "When `bias is None` you still want a copy so the caller can't mutate internal state."
      ],
      "blanks": [
        {
          "id": "shift_with_bias",
          "label": "Selection bias",
          "hint": "`[score + bias[i] for i, score in enumerate(original_scores)]`.",
          "starter": "list(original_scores)",
          "solution": "[score + bias[i] for i, score in enumerate(original_scores)]",
          "i18n": {
            "zh": {
              "label": "加偏置打分",
              "hint": "`[score + bias[i] for i, score in enumerate(original_scores)]`。"
            }
          }
        },
        {
          "id": "gather_weights",
          "label": "Gather weights",
          "hint": "Use the ORIGINAL `original_scores`, not the shifted ones.",
          "starter": "[0.0 for _ in indices]",
          "solution": "gather(original_scores, indices)",
          "i18n": {
            "zh": {
              "label": "原始权重 gather",
              "hint": "要用 *原始* `original_scores`,不是带偏置的 shifted。"
            }
          }
        }
      ],
      "starter_code": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef gather(values, indices):\n    return [values[i] for i in indices]\n\ndef topk_indices(values, k):\n    pairs = sorted(enumerate(values), key=lambda item: item[1], reverse=True)\n    return [index for index, _ in pairs[:k]]\n\ndef gate(scores, topk, bias=None, route_scale=1.0):\n    original_scores = softmax(scores)\n    if bias is not None:\n        shifted = __B_shift_with_bias__\n    else:\n        shifted = list(original_scores)\n    indices = topk_indices(shifted, topk)\n    weights = __B_gather_weights__\n    return [w * route_scale for w in weights], indices\n",
      "validator_code": "def run_checks(ns):\n    gate = ns[\"gate\"]\n    checks = []\n\n    weights, indices = gate([1.0, 2.0, 3.0], topk=2)\n    checks.append({\n        \"name\": \"Top-k without bias\",\n        \"passed\": indices == [2, 1] and weights[0] > weights[1],\n        \"expected\": \"indices=[2, 1], weights sorted desc\",\n        \"actual\": f\"indices={indices!r}, weights={weights!r}\",\n    })\n\n    weights, indices = gate([1.0, 2.0, 3.0], topk=1, bias=[5.0, 0.0, -10.0])\n    checks.append({\n        \"name\": \"Bias reroutes selection, keeps original weights\",\n        \"passed\": indices == [0] and abs(weights[0] - 0.09003057324840764) < 1e-9,\n        \"expected\": \"indices=[0], weight≈0.0900305...\",\n        \"actual\": f\"indices={indices!r}, weights={weights!r}\",\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef gather(values, indices):\n    return [values[i] for i in indices]\n\ndef topk_indices(values, k):\n    pairs = sorted(enumerate(values), key=lambda item: item[1], reverse=True)\n    return [index for index, _ in pairs[:k]]\n\ndef gate(scores, topk, bias=None, route_scale=1.0):\n    original_scores = softmax(scores)\n    if bias is not None:\n        shifted = list(original_scores)\n    else:\n        shifted = list(original_scores)\n    indices = topk_indices(shifted, topk)\n    weights = [0.0 for _ in indices]\n    return [w * route_scale for w in weights], indices\n",
      "solution_runnable": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef gather(values, indices):\n    return [values[i] for i in indices]\n\ndef topk_indices(values, k):\n    pairs = sorted(enumerate(values), key=lambda item: item[1], reverse=True)\n    return [index for index, _ in pairs[:k]]\n\ndef gate(scores, topk, bias=None, route_scale=1.0):\n    original_scores = softmax(scores)\n    if bias is not None:\n        shifted = [score + bias[i] for i, score in enumerate(original_scores)]\n    else:\n        shifted = list(original_scores)\n    indices = topk_indices(shifted, topk)\n    weights = gather(original_scores, indices)\n    return [w * route_scale for w in weights], indices\n",
      "solution_code": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef gather(values, indices):\n    return [values[i] for i in indices]\n\ndef topk_indices(values, k):\n    pairs = sorted(enumerate(values), key=lambda item: item[1], reverse=True)\n    return [index for index, _ in pairs[:k]]\n\ndef gate(scores, topk, bias=None, route_scale=1.0):\n    original_scores = softmax(scores)\n    if bias is not None:\n        shifted = [score + bias[i] for i, score in enumerate(original_scores)]\n    else:\n        shifted = list(original_scores)\n    indices = topk_indices(shifted, topk)\n    weights = gather(original_scores, indices)\n    return [w * route_scale for w in weights], indices\n",
      "reference_code": "    def forward(self, x: torch.Tensor, input_ids: Optional[torch.Tensor] = None) -> Tuple[torch.Tensor, torch.Tensor]:\n        scores = linear(x.float(), self.weight.float())\n        if self.score_func == \"softmax\":\n            scores = scores.softmax(dim=-1)\n        elif self.score_func == \"sigmoid\":\n            scores = scores.sigmoid()\n        else:\n            scores = F.softplus(scores).sqrt()\n        original_scores = scores\n        # Bias shifts scores for expert selection (topk) but does not affect routing weights.\n        if self.bias is not None:\n            scores = scores + self.bias\n        if self.hash:\n            indices = self.tid2eid[input_ids]\n        else:\n            indices = scores.topk(self.topk, dim=-1)[1]\n        weights = original_scores.gather(1, indices)\n        if self.score_func != \"softmax\":\n            weights /= weights.sum(dim=-1, keepdim=True)\n        weights *= self.route_scale\n        return weights, indices\n",
      "puzzle_path": "tutorial/generated/puzzles/12_s12-gate.py",
      "solution_path": "tutorial/generated/solutions/12_s12-gate.py",
      "reference_file_path": "tutorial/generated/references/12_s12-gate.py",
      "workshop_loc": 21,
      "reference_loc": 21,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "门控(top-k 偏置 + 原始权重)",
          "tagline": "偏置只影响专家选择,不影响最终路由权重。",
          "difficulty": "核心",
          "summary": "Gate 的关键技巧:`bias` 加到打分上只用于 topk 专家选择,但最终路由权重要从 *原始* (不带偏置的) scores 里 gather。这是 DeepSeek-V3 引入的 top-k 偏置 trick。",
          "what_you_learn": [
            "为什么 bias 不能影响 routing 权重 —— 那会引入不公平的幅值偏差。",
            "`gather(1, indices)` 如何按索引从原始分数里拿值。",
            "top-k 选择 vs 权重再归一化的分工。"
          ],
          "workshop_steps": [
            "`scores_shifted = original_scores + bias`,用它做 topk。",
            "最终权重 gather 自 `original_scores`(不是 shifted)。"
          ],
          "pitfalls": [
            "切记 gather 用 `original_scores`,不是 shifted。",
            "hash 路由的 `indices` 由 lookup 给出,不走 topk。"
          ]
        }
      }
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
      "tags": [
        "moe",
        "dispatch"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 635,
      "line_end": 645,
      "summary": "`MoE.forward` skips experts that received no tokens, then gathers `(idx, top)` pairs per expert and accumulates their contribution with the routing weight. A shared expert runs unconditionally on every token.",
      "paper_anchor": {
        "section": "§2.1 DeepSeekMoE",
        "figure": "Figure 2",
        "summary": "Fine-grained experts + shared expert is the DeepSeekMoE recipe; the sparse execution below avoids launching inactive experts entirely."
      },
      "what_you_learn": [
        "Why `bincount` is a cheap way to avoid launching inactive experts.",
        "Why `(token_idx, top_slot)` must BOTH be preserved — `top_slot` is the index into the routing-weight tensor."
      ],
      "workshop_steps": [
        "Compute the positions where this expert id appears in `routed`.",
        "Accumulate `expert(x) * weight` into the output."
      ],
      "pitfalls": [
        "The shared expert is always invoked — don't gate it on routing counts."
      ],
      "blanks": [
        {
          "id": "expert_positions",
          "label": "Find positions",
          "hint": "Nested loop: for each token, find every `top_slot` where `routed[token][top_slot] == expert_id`.",
          "starter": "[]",
          "solution": "[(t, k) for t, row in enumerate(routed) for k, e in enumerate(row) if e == expert_id]",
          "i18n": {
            "zh": {
              "label": "查找专家位置",
              "hint": "双层循环:对每个 token,枚举每个 `top_slot`,判断 `routed[token][top_slot] == expert_id`。"
            }
          }
        },
        {
          "id": "expert_contrib",
          "label": "Expert contribution",
          "hint": "`expert_fn(inputs[t]) * weights[t][k]` — weight lives at the top slot, not the expert id.",
          "starter": "0.0",
          "solution": "expert_fn(inputs[t]) * weights[t][k]",
          "i18n": {
            "zh": {
              "label": "专家贡献",
              "hint": "`expert_fn(inputs[t]) * weights[t][k]` —— 权重在 top_slot 位置。"
            }
          }
        }
      ],
      "starter_code": "def count_indices(routed):\n    counts = {}\n    for row in routed:\n        for expert_id in row:\n            counts[expert_id] = counts.get(expert_id, 0) + 1\n    return counts\n\ndef moe_forward(inputs, routed, weights, experts, shared_expert):\n    outputs = [0.0 for _ in inputs]\n    counts = count_indices(routed)\n\n    for expert_id, expert_fn in experts.items():\n        if counts.get(expert_id, 0) == 0:\n            continue\n        positions = __B_expert_positions__\n        for t, k in positions:\n            outputs[t] += __B_expert_contrib__\n\n    for t, value in enumerate(inputs):\n        outputs[t] += shared_expert(value)\n    return outputs\n",
      "validator_code": "def run_checks(ns):\n    moe_forward = ns[\"moe_forward\"]\n    experts = {0: lambda x: x + 1, 1: lambda x: x * 10}\n    shared = lambda x: x * 100\n    out = moe_forward(\n        inputs=[1.0, 2.0],\n        routed=[[1], [0, 1]],\n        weights=[[0.5], [0.2, 0.3]],\n        experts=experts,\n        shared_expert=shared,\n    )\n    expected = [105.0, 206.6]\n    ok = all(abs(a - b) < 1e-9 for a, b in zip(out, expected))\n    return [{\n        \"name\": \"Sparse routing + shared expert\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    }]\n",
      "kind": "lesson",
      "starter_runnable": "def count_indices(routed):\n    counts = {}\n    for row in routed:\n        for expert_id in row:\n            counts[expert_id] = counts.get(expert_id, 0) + 1\n    return counts\n\ndef moe_forward(inputs, routed, weights, experts, shared_expert):\n    outputs = [0.0 for _ in inputs]\n    counts = count_indices(routed)\n\n    for expert_id, expert_fn in experts.items():\n        if counts.get(expert_id, 0) == 0:\n            continue\n        positions = []\n        for t, k in positions:\n            outputs[t] += 0.0\n\n    for t, value in enumerate(inputs):\n        outputs[t] += shared_expert(value)\n    return outputs\n",
      "solution_runnable": "def count_indices(routed):\n    counts = {}\n    for row in routed:\n        for expert_id in row:\n            counts[expert_id] = counts.get(expert_id, 0) + 1\n    return counts\n\ndef moe_forward(inputs, routed, weights, experts, shared_expert):\n    outputs = [0.0 for _ in inputs]\n    counts = count_indices(routed)\n\n    for expert_id, expert_fn in experts.items():\n        if counts.get(expert_id, 0) == 0:\n            continue\n        positions = [(t, k) for t, row in enumerate(routed) for k, e in enumerate(row) if e == expert_id]\n        for t, k in positions:\n            outputs[t] += expert_fn(inputs[t]) * weights[t][k]\n\n    for t, value in enumerate(inputs):\n        outputs[t] += shared_expert(value)\n    return outputs\n",
      "solution_code": "def count_indices(routed):\n    counts = {}\n    for row in routed:\n        for expert_id in row:\n            counts[expert_id] = counts.get(expert_id, 0) + 1\n    return counts\n\ndef moe_forward(inputs, routed, weights, experts, shared_expert):\n    outputs = [0.0 for _ in inputs]\n    counts = count_indices(routed)\n\n    for expert_id, expert_fn in experts.items():\n        if counts.get(expert_id, 0) == 0:\n            continue\n        positions = [(t, k) for t, row in enumerate(routed) for k, e in enumerate(row) if e == expert_id]\n        for t, k in positions:\n            outputs[t] += expert_fn(inputs[t]) * weights[t][k]\n\n    for t, value in enumerate(inputs):\n        outputs[t] += shared_expert(value)\n    return outputs\n",
      "reference_code": "        counts = torch.bincount(indices.flatten(), minlength=self.n_routed_experts).tolist()\n        for i in range(self.experts_start_idx, self.experts_end_idx):\n            if counts[i] == 0:\n                continue\n            expert = self.experts[i]\n            idx, top = torch.where(indices == i)\n            y[idx] += expert(x[idx], weights[idx, top, None])\n        if world_size > 1:\n            dist.all_reduce(y)\n        y += self.shared_experts(x)\n        return y.type_as(x).view(shape)\n",
      "puzzle_path": "tutorial/generated/puzzles/13_s13-moe-dispatch.py",
      "solution_path": "tutorial/generated/solutions/13_s13-moe-dispatch.py",
      "reference_file_path": "tutorial/generated/references/13_s13-moe-dispatch.py",
      "workshop_loc": 21,
      "reference_loc": 11,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "稀疏 MoE 分发",
          "tagline": "按专家分桶,每个 token 按权重累加。",
          "difficulty": "核心",
          "summary": "对每个专家 `i`,找出所有路由到它的 (token, top_slot) 对,送入专家网络,再按 `weights[token][top_slot]` 累加到输出。",
          "what_you_learn": [
            "`expert_positions` 如何枚举 (token, top_slot) 对。",
            "为什么权重要取 `weights[t][k]` —— top_slot 位置而不是专家 id。",
            "稀疏分发避免了 all-to-all 的显存爆炸。"
          ],
          "workshop_steps": [
            "对每个 token 的每个 top_slot,判断是否等于当前 expert_id。",
            "把 `expert_fn(inputs[t]) * weights[t][k]` 加到输出。"
          ],
          "pitfalls": [
            "权重在 `weights[t][k]` (top 维度),不在 expert 维度。",
            "同一个 token 可能路由到多个专家,都要累加。"
          ]
        }
      }
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
      "tags": [
        "swiglu",
        "expert"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 589,
      "line_end": 606,
      "summary": "Each Expert is a classic SwiGLU FFN: two parallel projections `gate = w1(x)` and `up = w3(x)`, combined as `silu(gate) * up`, then a down-projection `w2`.",
      "paper_anchor": {
        "section": "§2.1 DeepSeekMoE Experts",
        "figure": "—",
        "summary": "Standard SwiGLU FFN reused from V3; DeepSeek-V4 additionally supports FP4 routed-expert weights via the Linear dispatch you built in s01."
      },
      "what_you_learn": [
        "Why SwiGLU multiplies SiLU(gate) elementwise with a separate `up` projection.",
        "Why optional clipping on `gate` / `up` stabilises FP4 training."
      ],
      "workshop_steps": [
        "Compute `silu(gate) * up` elementwise.",
        "Apply `route_weight` if provided (MoE context)."
      ],
      "pitfalls": [
        "`silu(x) = x / (1 + exp(-x))` — don't mix it up with GELU."
      ],
      "blanks": [
        {
          "id": "silu_mul",
          "label": "SwiGLU combine",
          "hint": "Elementwise `silu(gate[i]) * up[i]`.",
          "starter": "[0.0 for _ in gate]",
          "solution": "[silu(gate[i]) * up[i] for i in range(len(gate))]",
          "i18n": {
            "zh": {
              "label": "SwiGLU 乘",
              "hint": "逐元素 `silu(gate[i]) * up[i]`。"
            }
          }
        }
      ],
      "starter_code": "import math\n\ndef silu(x):\n    return x / (1.0 + math.exp(-x))\n\ndef expert(gate, up, route_weight=None):\n    hidden = __B_silu_mul__\n    if route_weight is not None:\n        hidden = [route_weight * value for value in hidden]\n    return hidden\n",
      "validator_code": "import math\n\ndef run_checks(ns):\n    expert = ns[\"expert\"]\n    silu = ns[\"silu\"]\n    checks = []\n\n    out = expert([0.0, 2.0], [3.0, 5.0])\n    expected = [silu(0.0) * 3.0, silu(2.0) * 5.0]\n    ok = all(abs(a - b) < 1e-9 for a, b in zip(out, expected))\n    checks.append({\n        \"name\": \"Elementwise SwiGLU\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    })\n\n    out = expert([1.0], [1.0], route_weight=0.5)\n    expected = [0.5 * silu(1.0)]\n    ok = all(abs(a - b) < 1e-9 for a, b in zip(out, expected))\n    checks.append({\n        \"name\": \"Routing weight applied\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "import math\n\ndef silu(x):\n    return x / (1.0 + math.exp(-x))\n\ndef expert(gate, up, route_weight=None):\n    hidden = [0.0 for _ in gate]\n    if route_weight is not None:\n        hidden = [route_weight * value for value in hidden]\n    return hidden\n",
      "solution_runnable": "import math\n\ndef silu(x):\n    return x / (1.0 + math.exp(-x))\n\ndef expert(gate, up, route_weight=None):\n    hidden = [silu(gate[i]) * up[i] for i in range(len(gate))]\n    if route_weight is not None:\n        hidden = [route_weight * value for value in hidden]\n    return hidden\n",
      "solution_code": "import math\n\ndef silu(x):\n    return x / (1.0 + math.exp(-x))\n\ndef expert(gate, up, route_weight=None):\n    hidden = [silu(gate[i]) * up[i] for i in range(len(gate))]\n    if route_weight is not None:\n        hidden = [route_weight * value for value in hidden]\n    return hidden\n",
      "reference_code": "    def __init__(self, dim: int, inter_dim: int, dtype=None, swiglu_limit=0):\n        super().__init__()\n        self.w1 = Linear(dim, inter_dim, dtype=dtype)\n        self.w2 = Linear(inter_dim, dim, dtype=dtype)\n        self.w3 = Linear(dim, inter_dim, dtype=dtype)\n        self.swiglu_limit = swiglu_limit\n\n    def forward(self, x: torch.Tensor, weights: Optional[torch.Tensor] = None) -> torch.Tensor:\n        dtype = x.dtype\n        gate = self.w1(x).float()\n        up = self.w3(x).float()\n        if self.swiglu_limit > 0:\n            up = torch.clamp(up, min=-self.swiglu_limit, max=self.swiglu_limit)\n            gate = torch.clamp(gate, max=self.swiglu_limit)\n        x = F.silu(gate) * up\n        if weights is not None:\n            x = weights * x\n        return self.w2(x.to(dtype))\n",
      "puzzle_path": "tutorial/generated/puzzles/14_s14-expert-swiglu.py",
      "solution_path": "tutorial/generated/solutions/14_s14-expert-swiglu.py",
      "reference_file_path": "tutorial/generated/references/14_s14-expert-swiglu.py",
      "workshop_loc": 10,
      "reference_loc": 18,
      "blank_count": 1,
      "i18n": {
        "zh": {
          "title": "SwiGLU 专家",
          "tagline": "`SiLU(gate) * up`,再过 w2。",
          "difficulty": "核心",
          "summary": "SwiGLU 的核心是把 FFN 的激活拆成两路:`w1(x)` 作为门 gate,`w3(x)` 作为 up;最终激活是 `SiLU(gate) * up`,再过一次 `w2` 投回来。",
          "what_you_learn": [
            "SwiGLU 相比 ReLU/GELU 的优势 —— 可学习的门控。",
            "`SiLU(x) = x * sigmoid(x)` 的逐元素实现。",
            "为什么 up 和 gate 维度要一致。"
          ],
          "workshop_steps": [
            "对每个位置 `i`,计算 `silu(gate[i]) * up[i]`。"
          ],
          "pitfalls": [
            "`silu(gate) * up`,不是 `silu(gate * up)` —— 乘法在 silu 之外。"
          ]
        }
      }
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
      "tags": [
        "mhc",
        "hyper-connections"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 674,
      "line_end": 682,
      "summary": "`hc_pre()` RMS-normalises the flat residual, scales the `pre` logits, and then reduces `hc_mult` lanes into a single d-dim vector that the Attention / MoE see.",
      "paper_anchor": {
        "section": "§2.2 Manifold-Constrained Hyper-Connections — eq. (3)",
        "figure": "Figure 2 (Residual/Pre-Block/Post-Block Mixing)",
        "summary": "eq. (3) writes the input mapping Â_l · X_l; the code below is the fused RMS-norm + mixing step that materialises it at each block boundary."
      },
      "what_you_learn": [
        "Why mixing weights come from the CURRENT token, not a fixed residual coefficient.",
        "Why the RMS scale has to use the FLATTENED residual — not per-lane statistics."
      ],
      "workshop_steps": [
        "Scale the `pre` logits by the inverse-RMS factor.",
        "Normalize the scaled logits to a weight distribution.",
        "Collapse lanes with a weighted sum."
      ],
      "pitfalls": [
        "`sum(scaled_logits)` is your denominator only because logits are non-negative here — upstream the paper uses `sigmoid(·) + eps`."
      ],
      "blanks": [
        {
          "id": "scale_logit",
          "label": "Scale logit",
          "hint": "Multiply each logit by the inverse-RMS `scale`.",
          "starter": "value",
          "solution": "value * scale",
          "i18n": {
            "zh": {
              "label": "缩放 logit",
              "hint": "每个 logit 乘上逆 RMS `scale`。"
            }
          }
        },
        {
          "id": "collapse",
          "label": "Collapse lanes",
          "hint": "For each column, weighted-sum across lanes using `weights`.",
          "starter": "[0.0 for _ in token_states[0]]",
          "solution": "[sum(weights[lane] * token_states[lane][col] for lane in range(len(token_states))) for col in range(len(token_states[0]))]",
          "i18n": {
            "zh": {
              "label": "Lane 塌缩",
              "hint": "对每列,按 `weights` 加权求和。"
            }
          }
        }
      ],
      "starter_code": "def rms_scale(values, eps):\n    mean_square = sum(v * v for v in values) / len(values)\n    return 1.0 / ((mean_square + eps) ** 0.5)\n\ndef hc_pre(states, logits, eps=1e-6):\n    outputs = []\n    for token_states, token_logits in zip(states, logits):\n        flat = [v for lane in token_states for v in lane]\n        scale = rms_scale(flat, eps)\n        scaled_logits = [__B_scale_logit__ for value in token_logits]\n        total = sum(scaled_logits)\n        weights = [v / total for v in scaled_logits]\n        outputs.append(__B_collapse__)\n    return outputs\n",
      "validator_code": "def run_checks(ns):\n    hc_pre = ns[\"hc_pre\"]\n    out = hc_pre(\n        states=[[[1.0, 0.0], [0.0, 3.0]]],\n        logits=[[1.0, 3.0]],\n        eps=0.0,\n    )\n    expected = [[0.25, 2.25]]\n    ok = all(abs(out[0][i] - expected[0][i]) < 1e-9 for i in range(2))\n    return [{\n        \"name\": \"Weighted collapse across HC lanes\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    }]\n",
      "kind": "lesson",
      "starter_runnable": "def rms_scale(values, eps):\n    mean_square = sum(v * v for v in values) / len(values)\n    return 1.0 / ((mean_square + eps) ** 0.5)\n\ndef hc_pre(states, logits, eps=1e-6):\n    outputs = []\n    for token_states, token_logits in zip(states, logits):\n        flat = [v for lane in token_states for v in lane]\n        scale = rms_scale(flat, eps)\n        scaled_logits = [value for value in token_logits]\n        total = sum(scaled_logits)\n        weights = [v / total for v in scaled_logits]\n        outputs.append([0.0 for _ in token_states[0]])\n    return outputs\n",
      "solution_runnable": "def rms_scale(values, eps):\n    mean_square = sum(v * v for v in values) / len(values)\n    return 1.0 / ((mean_square + eps) ** 0.5)\n\ndef hc_pre(states, logits, eps=1e-6):\n    outputs = []\n    for token_states, token_logits in zip(states, logits):\n        flat = [v for lane in token_states for v in lane]\n        scale = rms_scale(flat, eps)\n        scaled_logits = [value * scale for value in token_logits]\n        total = sum(scaled_logits)\n        weights = [v / total for v in scaled_logits]\n        outputs.append([sum(weights[lane] * token_states[lane][col] for lane in range(len(token_states))) for col in range(len(token_states[0]))])\n    return outputs\n",
      "solution_code": "def rms_scale(values, eps):\n    mean_square = sum(v * v for v in values) / len(values)\n    return 1.0 / ((mean_square + eps) ** 0.5)\n\ndef hc_pre(states, logits, eps=1e-6):\n    outputs = []\n    for token_states, token_logits in zip(states, logits):\n        flat = [v for lane in token_states for v in lane]\n        scale = rms_scale(flat, eps)\n        scaled_logits = [value * scale for value in token_logits]\n        total = sum(scaled_logits)\n        weights = [v / total for v in scaled_logits]\n        outputs.append([sum(weights[lane] * token_states[lane][col] for lane in range(len(token_states))) for col in range(len(token_states[0]))])\n    return outputs\n",
      "reference_code": "    def hc_pre(self, x: torch.Tensor, hc_fn: torch.Tensor, hc_scale: torch.Tensor, hc_base: torch.Tensor):\n        # x: [b,s,hc,d], hc_fn: [mix_hc,hc*d], hc_scale: [3], hc_base: [mix_hc], y: [b,s,hc,d]\n        shape, dtype = x.size(), x.dtype\n        x = x.flatten(2).float()\n        rsqrt = torch.rsqrt(x.square().mean(-1, keepdim=True) + self.norm_eps)\n        mixes = F.linear(x, hc_fn) * rsqrt\n        pre, post, comb = hc_split_sinkhorn(mixes, hc_scale, hc_base, self.hc_mult, self.hc_sinkhorn_iters, self.hc_eps)\n        y = torch.sum(pre.unsqueeze(-1) * x.view(shape), dim=2)\n        return y.to(dtype), post, comb\n",
      "puzzle_path": "tutorial/generated/puzzles/15_s15-hc-pre.py",
      "solution_path": "tutorial/generated/solutions/15_s15-hc-pre.py",
      "reference_file_path": "tutorial/generated/references/15_s15-hc-pre.py",
      "workshop_loc": 14,
      "reference_loc": 9,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "mHC 预混合",
          "tagline": "用逆 RMS 缩放 logit,按 lane 权重收拢。",
          "difficulty": "进阶",
          "summary": "HC 预混合先用 `rsqrt` 归一化每行的幅值,得到 logits;再按每个 lane 的权重,把 `hc_mult` 份拷贝塌缩为一份送入子层。",
          "what_you_learn": [
            "`rsqrt(mean_square + eps)` 为什么作为逐行 scale。",
            "`weights[lane]` 如何把多份 lane 加权合并。",
            "这一步是 `hc_pre` —— 后续子层只看到单份 hidden。"
          ],
          "workshop_steps": [
            "对每个 logit 乘上逆 RMS scale。",
            "对每列,沿 lanes 做 `weights[lane] * value[lane]` 求和。"
          ],
          "pitfalls": [
            "scale 要广播到每个 logit,不要忘了对齐维度。",
            "加权求和的 weights 是每 lane 一个,不是每列一个。"
          ]
        }
      }
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
      "tags": [
        "mhc",
        "residual"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 684,
      "line_end": 687,
      "summary": "`hc_post()` replaces the usual `x + residual` with a learned blend. `post` weights broadcast the fresh output across lanes; `comb` mixes the old residual lanes.",
      "paper_anchor": {
        "section": "§2.2 Manifold-Constrained Hyper-Connections — eq. (5), (7)",
        "figure": "Figure 2",
        "summary": "eq. (5) + eq. (7) spell out the output mapping C_l and the residual mixing B_l; together they give us this closed-form post-mix."
      },
      "what_you_learn": [
        "Why the new output is BROADCAST into every lane via `post`.",
        "Why `comb` has to be doubly-stochastic (Sinkhorn upstream) to avoid blowing up."
      ],
      "workshop_steps": [
        "Compute `post[lane] * x[col]` for each (lane, col).",
        "Add `sum_src(comb[lane][src] * residual[src][col])` as the mixed history."
      ],
      "pitfalls": [
        "Indexing: `comb[lane][src]` reads row `lane`, column `src` — not the other way."
      ],
      "blanks": [
        {
          "id": "fresh_branch",
          "label": "Fresh branch",
          "hint": "Broadcast the fresh output: `post[lane] * x[col]`.",
          "starter": "0.0",
          "solution": "post[lane] * x[col]",
          "i18n": {
            "zh": {
              "label": "Fresh 分支",
              "hint": "广播 fresh 输出:`post[lane] * x[col]`。"
            }
          }
        },
        {
          "id": "residual_mix",
          "label": "Residual mix",
          "hint": "Sum over source lanes: `comb[lane][src] * residual[src][col]`.",
          "starter": "0.0",
          "solution": "sum(comb[lane][src] * residual[src][col] for src in range(len(residual)))",
          "i18n": {
            "zh": {
              "label": "残差混合",
              "hint": "沿 src lane 求和:`comb[lane][src] * residual[src][col]`。"
            }
          }
        }
      ],
      "starter_code": "def hc_post(x, residual, post, comb):\n    width = len(x)\n    out = []\n    for lane in range(len(post)):\n        lane_row = []\n        for col in range(width):\n            fresh = __B_fresh_branch__\n            history = __B_residual_mix__\n            lane_row.append(fresh + history)\n        out.append(lane_row)\n    return out\n",
      "validator_code": "def run_checks(ns):\n    hc_post = ns[\"hc_post\"]\n    out = hc_post(\n        x=[10.0, 20.0],\n        residual=[[1.0, 2.0], [3.0, 4.0]],\n        post=[0.1, 0.2],\n        comb=[[0.5, 0.5], [0.25, 0.75]],\n    )\n    expected = [[3.0, 5.0], [4.5, 7.5]]\n    ok = all(abs(out[i][j] - expected[i][j]) < 1e-9 for i in range(2) for j in range(2))\n    return [{\n        \"name\": \"post broadcast + comb mix\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    }]\n",
      "kind": "lesson",
      "starter_runnable": "def hc_post(x, residual, post, comb):\n    width = len(x)\n    out = []\n    for lane in range(len(post)):\n        lane_row = []\n        for col in range(width):\n            fresh = 0.0\n            history = 0.0\n            lane_row.append(fresh + history)\n        out.append(lane_row)\n    return out\n",
      "solution_runnable": "def hc_post(x, residual, post, comb):\n    width = len(x)\n    out = []\n    for lane in range(len(post)):\n        lane_row = []\n        for col in range(width):\n            fresh = post[lane] * x[col]\n            history = sum(comb[lane][src] * residual[src][col] for src in range(len(residual)))\n            lane_row.append(fresh + history)\n        out.append(lane_row)\n    return out\n",
      "solution_code": "def hc_post(x, residual, post, comb):\n    width = len(x)\n    out = []\n    for lane in range(len(post)):\n        lane_row = []\n        for col in range(width):\n            fresh = post[lane] * x[col]\n            history = sum(comb[lane][src] * residual[src][col] for src in range(len(residual)))\n            lane_row.append(fresh + history)\n        out.append(lane_row)\n    return out\n",
      "reference_code": "    def hc_post(self, x: torch.Tensor, residual: torch.Tensor, post: torch.Tensor, comb: torch.Tensor):\n        # x: [b,s,d], residual: [b,s,hc,d], post: [b,s,hc], comb: [b,s,hc,hc], y: [b,s,hc,d]\n        y = post.unsqueeze(-1) * x.unsqueeze(-2) + torch.sum(comb.unsqueeze(-1) * residual.unsqueeze(-2), dim=2)\n        return y.type_as(x)\n",
      "puzzle_path": "tutorial/generated/puzzles/16_s16-hc-post.py",
      "solution_path": "tutorial/generated/solutions/16_s16-hc-post.py",
      "reference_file_path": "tutorial/generated/references/16_s16-hc-post.py",
      "workshop_loc": 11,
      "reference_loc": 4,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "mHC 后混合",
          "tagline": "fresh 分支 + 残差重组,恢复 hc_mult 份。",
          "difficulty": "进阶",
          "summary": "HC 后混合把单份输出(`x`)乘到每个 lane(fresh 分支),再把残差的各 lane 按 `comb[lane][src]` 加权求和(residual_mix),两部分相加得到新的 hc_mult 份。",
          "what_you_learn": [
            "fresh 分支 `post[lane] * x[col]` 的广播含义。",
            "`comb` 是 hc×hc 的方阵,把 src lane 映射到 dst lane。",
            "两条路的相加构成新的 lane 矩阵。"
          ],
          "workshop_steps": [
            "fresh:`post[lane] * x[col]`。",
            "residual:对 src lane 做 `comb[lane][src] * residual[src][col]` 求和。"
          ],
          "pitfalls": [
            "`comb[lane][src]` 的 lane 与 src 不要颠倒,否则矩阵方向会反。",
            "fresh 与 residual 两路的形状要一致。"
          ]
        }
      }
    },
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
      "tags": [
        "kernel",
        "fp8",
        "quantization"
      ],
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 40,
      "line_end": 102,
      "summary": "`act_quant_kernel` reduces per-block absmax, derives a scale `max(absmax, 1e-4) / FP8_MAX`, divides each value by that scale, and clamps into the FP8 range. The scale tensor is kept separately for the GEMM to multiply back.",
      "paper_anchor": {
        "section": "§3.4 FP4 QAT + §3.2 TileLang kernels",
        "figure": "Figure 2 (mixed-precision path)",
        "summary": "This is the FP8 activation quant kernel referenced by §3.2; `scale_fmt='ue8m0'` additionally rounds the scale to a power-of-two, matching MXFP8 semantics."
      },
      "what_you_learn": [
        "Why the floor `max(absmax, 1e-4)` keeps extremely cold blocks from producing zero scales.",
        "Why the clamp happens AFTER the divide — the kernel never stores FP8 values outside [-448, 448]."
      ],
      "workshop_steps": [
        "Derive the per-block scale from `absmax`.",
        "Divide each value by the scale and clamp into FP8 range."
      ],
      "pitfalls": [
        "`max(amax, 1e-4)` — a cold block could otherwise return scale = 0 and crash the divide."
      ],
      "blanks": [
        {
          "id": "scale_formula",
          "label": "Derive scale",
          "hint": "`max(amax, 1e-4) / FP8_MAX` — the paper's power-of-2 rounding lives elsewhere.",
          "starter": "1.0",
          "solution": "max(amax, 1e-4) / FP8_MAX",
          "i18n": {
            "zh": {
              "label": "scale 公式",
              "hint": "`max(amax, 1e-4) / FP8_MAX` —— MXFP 的 2 的幂取整放在别处。"
            }
          }
        },
        {
          "id": "quant_val",
          "label": "Quantized value",
          "hint": "`clamp(value / scale, -FP8_MAX, FP8_MAX)`.",
          "starter": "0.0",
          "solution": "clamp(value / scale, -FP8_MAX, FP8_MAX)",
          "i18n": {
            "zh": {
              "label": "量化值",
              "hint": "`clamp(value / scale, -FP8_MAX, FP8_MAX)`。"
            }
          }
        }
      ],
      "starter_code": "FP8_MAX = 448.0\n\ndef clamp(value, low, high):\n    return max(low, min(high, value))\n\ndef quantize_row(row, block_size):\n    quantized = []\n    scales = []\n    for start in range(0, len(row), block_size):\n        block = row[start:start + block_size]\n        amax = max(abs(v) for v in block)\n        scale = __B_scale_formula__\n        scales.append(scale)\n        for value in block:\n            quantized.append(__B_quant_val__)\n    return quantized, scales\n",
      "validator_code": "def run_checks(ns):\n    quantize_row = ns[\"quantize_row\"]\n    out, scales = quantize_row([224.0, -448.0, 1.0, -2.0], 2)\n    expected_scales = [1.0, 2.0 / 448.0]\n    scale_ok = all(abs(a - b) < 1e-12 for a, b in zip(scales, expected_scales))\n    out_ok = abs(out[0] - 224.0) < 1e-9 and abs(out[1] + 448.0) < 1e-9 and abs(out[3] + 448.0) < 1e-9\n    return [\n        {\n            \"name\": \"Per-block scale from absmax\",\n            \"passed\": scale_ok,\n            \"expected\": repr(expected_scales),\n            \"actual\": repr(scales),\n        },\n        {\n            \"name\": \"Divide + clamp quantization\",\n            \"passed\": out_ok,\n            \"expected\": \"[224.0, -448.0, ?, -448.0]\",\n            \"actual\": repr(out),\n        },\n    ]\n",
      "kind": "lesson",
      "starter_runnable": "FP8_MAX = 448.0\n\ndef clamp(value, low, high):\n    return max(low, min(high, value))\n\ndef quantize_row(row, block_size):\n    quantized = []\n    scales = []\n    for start in range(0, len(row), block_size):\n        block = row[start:start + block_size]\n        amax = max(abs(v) for v in block)\n        scale = 1.0\n        scales.append(scale)\n        for value in block:\n            quantized.append(0.0)\n    return quantized, scales\n",
      "solution_runnable": "FP8_MAX = 448.0\n\ndef clamp(value, low, high):\n    return max(low, min(high, value))\n\ndef quantize_row(row, block_size):\n    quantized = []\n    scales = []\n    for start in range(0, len(row), block_size):\n        block = row[start:start + block_size]\n        amax = max(abs(v) for v in block)\n        scale = max(amax, 1e-4) / FP8_MAX\n        scales.append(scale)\n        for value in block:\n            quantized.append(clamp(value / scale, -FP8_MAX, FP8_MAX))\n    return quantized, scales\n",
      "solution_code": "FP8_MAX = 448.0\n\ndef clamp(value, low, high):\n    return max(low, min(high, value))\n\ndef quantize_row(row, block_size):\n    quantized = []\n    scales = []\n    for start in range(0, len(row), block_size):\n        block = row[start:start + block_size]\n        amax = max(abs(v) for v in block)\n        scale = max(amax, 1e-4) / FP8_MAX\n        scales.append(scale)\n        for value in block:\n            quantized.append(clamp(value / scale, -FP8_MAX, FP8_MAX))\n    return quantized, scales\n",
      "reference_code": "@tilelang.jit(pass_configs=pass_configs)\ndef act_quant_kernel(\n    N, block_size=128, in_dtype=BF16, out_dtype=FP8, scale_dtype=FP32,\n    round_scale=False, inplace=False\n):\n    \"\"\"Block-wise FP8 quantization. inplace=True does fused quant+dequant back to BF16.\"\"\"\n    M = T.symbolic(\"M\")\n    fp8_min = -448.0\n    fp8_max = 448.0\n    fp8_max_inv = 1 / fp8_max\n    num_stages = 0 if round_scale or inplace else 2\n    blk_m = 32\n    group_size = block_size\n    # Internal computation in FP32; scale_dtype controls output storage format.\n    compute_dtype = FP32\n    out_dtype = in_dtype if inplace else out_dtype\n\n    @T.prim_func\n    def act_quant_kernel_(\n        X: T.Tensor[(M, N), in_dtype],\n        Y: T.Tensor[(M, N), out_dtype],\n        S: T.Tensor[(M, T.ceildiv(N, group_size)), scale_dtype],\n    ):\n        with T.Kernel(T.ceildiv(M, blk_m), T.ceildiv(N, group_size), threads=128) as (\n            pid_m,\n            pid_n,\n        ):\n            x_shared = T.alloc_shared((blk_m, group_size), in_dtype)\n            x_local = T.alloc_fragment((blk_m, group_size), in_dtype)\n            amax_local = T.alloc_fragment((blk_m,), compute_dtype)\n            s_local = T.alloc_fragment((blk_m,), compute_dtype)\n            y_local = T.alloc_fragment((blk_m, group_size), out_dtype)\n            y_shared = T.alloc_shared((blk_m, group_size), out_dtype)\n\n            for _ in T.Pipelined(1, num_stages=num_stages):\n                T.copy(X[pid_m * blk_m, pid_n * group_size], x_shared)\n                T.copy(x_shared, x_local)\n                T.reduce_absmax(x_local, amax_local, dim=1)\n                for i in T.Parallel(blk_m):\n                    amax_local[i] = T.max(amax_local[i], 1e-4)\n                    if round_scale:\n                        s_local[i] = fast_round_scale(amax_local[i], fp8_max_inv)\n                    else:\n                        s_local[i] = amax_local[i] * fp8_max_inv\n                if inplace:\n                    for i, j in T.Parallel(blk_m, group_size):\n                        y_local[i, j] = T.Cast(\n                            out_dtype,\n                            T.Cast(compute_dtype, T.Cast(out_dtype, T.clamp(\n                                x_local[i, j] / s_local[i], fp8_min, fp8_max\n                            ))) * s_local[i],\n                        )\n                else:\n                    for i, j in T.Parallel(blk_m, group_size):\n                        y_local[i, j] = T.clamp(\n                            x_local[i, j] / s_local[i], fp8_min, fp8_max\n                        )\n                for i in T.Parallel(blk_m):\n                    S[pid_m * blk_m + i, pid_n] = T.Cast(scale_dtype, s_local[i])\n                T.copy(y_local, y_shared)\n                T.copy(y_shared, Y[pid_m * blk_m, pid_n * group_size])\n\n    return act_quant_kernel_\n",
      "puzzle_path": "tutorial/generated/puzzles/17_s17-act-quant.py",
      "solution_path": "tutorial/generated/solutions/17_s17-act-quant.py",
      "reference_file_path": "tutorial/generated/references/17_s17-act-quant.py",
      "workshop_loc": 16,
      "reference_loc": 63,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "块级 FP8 激活量化",
          "tagline": "absmax → scale → divide + clamp。",
          "difficulty": "核心",
          "summary": "kernel 在每个 `[blk_m, group_size]` 块里 `reduce_absmax`,然后用 `max(amax, 1e-4) / FP8_MAX` 得到 scale。`inplace=True` 时先除 scale → cast FP8 → 乘 scale(QAT 模拟);否则直接 clamp 到 FP8 范围后输出。",
          "what_you_learn": [
            "为什么需要 `max(amax, 1e-4)` —— 防止全零块产生除零。",
            "`round_scale` 和 `scale_fmt` 的关系 —— MXFP 需要 2 的幂次 scale。",
            "inplace 的 QAT 模拟如何保持 BF16 输出但已经等效 FP8 精度。"
          ],
          "workshop_steps": [
            "写出 scale = `max(amax, 1e-4) / FP8_MAX`。",
            "对每个值 `value / scale` 再 clamp 到 `[-FP8_MAX, FP8_MAX]`。"
          ],
          "pitfalls": [
            "`scale = amax / FP8_MAX`,不是 `FP8_MAX / amax`。",
            "clamp 是对称的 `[-FP8_MAX, FP8_MAX]`。"
          ]
        }
      }
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
      "tags": [
        "fp4",
        "gemm",
        "scales"
      ],
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 441,
      "line_end": 515,
      "summary": "FP4 GEMM stores activation scales per 128-wide group and weight scales per 32-wide group. For each K index, the act scale group is `kk // 128` and the weight scale group is `kk // 32` — four weight groups share one act scale.",
      "paper_anchor": {
        "section": "§3.4 FP4 Quantization-Aware Training",
        "figure": "§3.4 Table (scale shapes)",
        "summary": "The asymmetric scale grids (act 1×128 vs weight 1×32) are a direct consequence of how FP4 QAT stabilises routed-expert weights in DeepSeek-V4."
      },
      "what_you_learn": [
        "Why four 32-wide weight sub-blocks share ONE activation scale.",
        "Why the accumulator multiplies BOTH scales into every partial sum."
      ],
      "workshop_steps": [
        "Derive the activation scale index from `kk`.",
        "Derive the weight scale index from `kk`."
      ],
      "pitfalls": [
        "`act_group = kk // (block_k * n_sub)` — don't forget the extra factor of `n_sub`."
      ],
      "blanks": [
        {
          "id": "act_group",
          "label": "Act scale group",
          "hint": "`kk // (block_k * n_sub)` — one act scale per 128-wide group.",
          "starter": "0",
          "solution": "kk // (block_k * n_sub)",
          "i18n": {
            "zh": {
              "label": "激活 scale 分组",
              "hint": "`kk // (block_k * n_sub)` —— 激活每 128 一个 scale。"
            }
          }
        },
        {
          "id": "weight_group",
          "label": "Weight scale group",
          "hint": "`kk // block_k` — one weight scale per 32-wide group.",
          "starter": "0",
          "solution": "kk // block_k",
          "i18n": {
            "zh": {
              "label": "权重 scale 分组",
              "hint": "`kk // block_k` —— 权重每 32 一个 scale。"
            }
          }
        }
      ],
      "starter_code": "def fp4_gemm(a, scales_a, b, scales_b, block_k=32, act_group_size=128):\n    rows = len(a)\n    cols = len(b)\n    k = len(a[0])\n    out = [[0.0 for _ in range(cols)] for _ in range(rows)]\n    n_sub = act_group_size // block_k\n\n    for row in range(rows):\n        for col in range(cols):\n            acc = 0.0\n            for kk in range(k):\n                act_group = __B_act_group__\n                weight_group = __B_weight_group__\n                acc += a[row][kk] * b[col][kk] * scales_a[row][act_group] * scales_b[col][weight_group]\n            out[row][col] = acc\n    return out\n",
      "validator_code": "def run_checks(ns):\n    fp4_gemm = ns[\"fp4_gemm\"]\n    a = [[1.0] * 128]\n    b = [[1.0] * 128]\n    scales_a = [[2.0]]\n    scales_b = [[1.0, 2.0, 3.0, 4.0]]\n    out = fp4_gemm(a, scales_a, b, scales_b)\n    expected = 2.0 * 32.0 * (1.0 + 2.0 + 3.0 + 4.0)\n    return [{\n        \"name\": \"Act (1×128) + Weight (1×32) scale alignment\",\n        \"passed\": abs(out[0][0] - expected) < 1e-9,\n        \"expected\": repr(expected),\n        \"actual\": repr(out[0][0]),\n    }]\n",
      "kind": "lesson",
      "starter_runnable": "def fp4_gemm(a, scales_a, b, scales_b, block_k=32, act_group_size=128):\n    rows = len(a)\n    cols = len(b)\n    k = len(a[0])\n    out = [[0.0 for _ in range(cols)] for _ in range(rows)]\n    n_sub = act_group_size // block_k\n\n    for row in range(rows):\n        for col in range(cols):\n            acc = 0.0\n            for kk in range(k):\n                act_group = 0\n                weight_group = 0\n                acc += a[row][kk] * b[col][kk] * scales_a[row][act_group] * scales_b[col][weight_group]\n            out[row][col] = acc\n    return out\n",
      "solution_runnable": "def fp4_gemm(a, scales_a, b, scales_b, block_k=32, act_group_size=128):\n    rows = len(a)\n    cols = len(b)\n    k = len(a[0])\n    out = [[0.0 for _ in range(cols)] for _ in range(rows)]\n    n_sub = act_group_size // block_k\n\n    for row in range(rows):\n        for col in range(cols):\n            acc = 0.0\n            for kk in range(k):\n                act_group = kk // (block_k * n_sub)\n                weight_group = kk // block_k\n                acc += a[row][kk] * b[col][kk] * scales_a[row][act_group] * scales_b[col][weight_group]\n            out[row][col] = acc\n    return out\n",
      "solution_code": "def fp4_gemm(a, scales_a, b, scales_b, block_k=32, act_group_size=128):\n    rows = len(a)\n    cols = len(b)\n    k = len(a[0])\n    out = [[0.0 for _ in range(cols)] for _ in range(rows)]\n    n_sub = act_group_size // block_k\n\n    for row in range(rows):\n        for col in range(cols):\n            acc = 0.0\n            for kk in range(k):\n                act_group = kk // (block_k * n_sub)\n                weight_group = kk // block_k\n                acc += a[row][kk] * b[col][kk] * scales_a[row][act_group] * scales_b[col][weight_group]\n            out[row][col] = acc\n    return out\n",
      "reference_code": "@tilelang.jit(pass_configs=pass_configs)\ndef fp4_gemm_kernel(N, K, out_dtype=BF16, accum_dtype=FP32, scale_dtype=FP32):\n    \"\"\"FP8 act x FP4 weight GEMM kernel.\n\n    C[M, N] = A_fp8[M, K] @ B_fp4[N, K]^T\n\n    Act: 1x128 quant on K (reduce dim), FP8 with configurable scale dtype\n    Weight: 1x32 quant on K (reduce dim), FP4 with E8M0 scale\n\n    B is stored as [N, K//2] in float4_e2m1fn_x2, logical [N, K] in fp4.\n    The FP4 values are packed along the K (last) dimension.\n\n    Strategy: load FP4 sub-blocks of size [block_N, sub_K] (sub_K=32),\n    cast FP4 to FP8 via float, then do FP8xFP8 GEMM.\n    Apply act scale (per 128 on K) and weight scale (per 32 on K) to the accumulator.\n    \"\"\"\n    M = T.symbolic(\"M\")\n    act_group_size = 128\n    weight_group_size = 32\n    block_M = 32\n    block_N = 128\n    block_K = 32   # matches weight_group_size for simple scale handling\n    n_sub = act_group_size // block_K  # 4 sub-blocks per act scale group\n\n    @T.prim_func\n    def fp4_gemm_kernel_(\n        A: T.Tensor[(M, K), FP8],\n        B: T.Tensor[(N, K), FP4],\n        C: T.Tensor[(M, N), out_dtype],\n        scales_a: T.Tensor[(M, T.ceildiv(K, act_group_size)), scale_dtype],\n        scales_b: T.Tensor[(N, T.ceildiv(K, weight_group_size)), scale_dtype],\n    ):\n        with T.Kernel(T.ceildiv(N, block_N), T.ceildiv(M, block_M), threads=128) as (\n            bx,\n            by,\n        ):\n            A_shared = T.alloc_shared((block_M, block_K), FP8)\n            B_fp4_shared = T.alloc_shared((block_N, block_K), FP4)\n            B_shared = T.alloc_shared((block_N, block_K), FP8)\n            C_shared = T.alloc_shared((block_M, block_N), out_dtype)\n            C_local = T.alloc_fragment((block_M, block_N), accum_dtype)\n            C_local_accum = T.alloc_fragment((block_M, block_N), accum_dtype)\n            scale_a_frag = T.alloc_fragment((block_M,), FP32)\n            scale_b_frag = T.alloc_fragment((block_N,), FP32)\n\n            T.use_swizzle(panel_size=10)\n            T.clear(C_local)\n            T.clear(C_local_accum)\n\n            K_iters = T.ceildiv(K, block_K)\n            for k in T.Pipelined(K_iters, num_stages=2):\n                T.copy(A[by * block_M, k * block_K], A_shared)\n                T.copy(B[bx * block_N, k * block_K], B_fp4_shared)\n                # FP4->FP8 cast must go through FP32 to avoid ambiguous C++ overload\n                for i, j in T.Parallel(block_N, block_K):\n                    B_shared[i, j] = T.Cast(FP8, T.Cast(FP32, B_fp4_shared[i, j]))\n\n                # Weight scale: per 32 on K, indexed by k (each k is one block_K=32)\n                for i in T.Parallel(block_N):\n                    scale_b_frag[i] = T.Cast(FP32, scales_b[bx * block_N + i, k])\n\n                # Act scale: per 128 on K, indexed by k // 4\n                for i in T.Parallel(block_M):\n                    scale_a_frag[i] = T.Cast(FP32, scales_a[by * block_M + i, k // n_sub])\n\n                T.gemm(A_shared, B_shared, C_local, transpose_B=True)\n\n                for i, j in T.Parallel(block_M, block_N):\n                    C_local_accum[i, j] += C_local[i, j] * scale_a_frag[i] * scale_b_frag[j]\n                T.clear(C_local)\n\n            T.copy(C_local_accum, C_shared)\n            T.copy(C_shared, C[by * block_M, bx * block_N])\n\n    return fp4_gemm_kernel_\n",
      "puzzle_path": "tutorial/generated/puzzles/18_s18-fp4-gemm.py",
      "solution_path": "tutorial/generated/solutions/18_s18-fp4-gemm.py",
      "reference_file_path": "tutorial/generated/references/18_s18-fp4-gemm.py",
      "workshop_loc": 16,
      "reference_loc": 75,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "FP4 GEMM 的 scale 对齐",
          "tagline": "激活 scale 每 128、权重 scale 每 32,K 方向对齐。",
          "difficulty": "进阶",
          "summary": "FP4 GEMM 的关键:激活 scale 粒度为 128 (沿 K),权重 scale 粒度为 32 (沿 K);kernel 在 K 循环里用不同的粒度索引:权重按 `kk // block_k`,激活按 `kk // (block_k * n_sub)`。",
          "what_you_learn": [
            "`n_sub = act_group_size // block_K = 4` —— 激活的一个 scale 覆盖 4 个权重块。",
            "为什么 FP4 → FP8 的 cast 要经过 FP32 —— C++ 重载消歧。",
            "scale 校正在第二个累加器里做。"
          ],
          "workshop_steps": [
            "激活 scale 索引:`kk // (block_k * n_sub)`。",
            "权重 scale 索引:`kk // block_k`。"
          ],
          "pitfalls": [
            "激活 scale 不要错用 `k // block_k` —— 那是权重 scale。",
            "打包 FP4 存储是 `[N, K//2]` 字节,逻辑上是 `[N, K]` 元素。"
          ]
        }
      }
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
      "tags": [
        "kernel",
        "sparse-attention",
        "flashattention"
      ],
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 276,
      "line_end": 352,
      "summary": "The sparse attention kernel sweeps the top-k indices in blocks, maintains a running max, and rescales the accumulator each time the max changes — classic FlashAttention online softmax. `attn_sink` is folded into the denominator at the very end.",
      "paper_anchor": {
        "section": "§2.3.1 CSA — eq. (18)-(19)",
        "figure": "Figure 3",
        "summary": "Sparse attention with top-k KV entries; the online softmax below is the kernel recipe inside `sparse_attn_kernel`."
      },
      "what_you_learn": [
        "Why the max update must rescale BOTH the numerator AND the denominator.",
        "Why `attn_sink` only enters the denominator once — it doesn't accumulate values."
      ],
      "workshop_steps": [
        "Update the running max when a new score arrives.",
        "Rescale the running numerator and denominator with `exp(prev_max - new_max)`.",
        "Add the `attn_sink` term to the denominator at the end."
      ],
      "pitfalls": [
        "`rescale = exp(prev_max - running_max)` — `running_max` appears SECOND, giving a value ≤ 1."
      ],
      "blanks": [
        {
          "id": "update_max",
          "label": "Update running max",
          "hint": "`max(running_max, score)`.",
          "starter": "score",
          "solution": "max(running_max, score)",
          "i18n": {
            "zh": {
              "label": "更新 running max",
              "hint": "`max(running_max, score)`。"
            }
          }
        },
        {
          "id": "update_num",
          "label": "Update numerator",
          "hint": "`weighted_sum * rescale + exp_score * kv[idx]`.",
          "starter": "exp_score * kv[idx]",
          "solution": "weighted_sum * rescale + exp_score * kv[idx]",
          "i18n": {
            "zh": {
              "label": "更新分子",
              "hint": "`weighted_sum * rescale + exp_score * kv[idx]`。"
            }
          }
        },
        {
          "id": "update_den",
          "label": "Update denominator",
          "hint": "`running_sum * rescale + exp_score`.",
          "starter": "exp_score",
          "solution": "running_sum * rescale + exp_score",
          "i18n": {
            "zh": {
              "label": "更新分母",
              "hint": "`running_sum * rescale + exp_score`。"
            }
          }
        },
        {
          "id": "final_den",
          "label": "Final denominator",
          "hint": "`running_sum + sink` — add the sink bias AFTER the loop.",
          "starter": "running_sum",
          "solution": "running_sum + sink",
          "i18n": {
            "zh": {
              "label": "最终分母",
              "hint": "`running_sum + sink` —— 循环结束后加 sink bias。"
            }
          }
        }
      ],
      "starter_code": "import math\n\ndef sparse_attn_scalar(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):\n    running_max = float(\"-inf\")\n    running_sum = 0.0\n    weighted_sum = 0.0\n\n    for idx in topk_idxs:\n        if idx == -1:\n            continue\n        score = q * kv[idx] * scale\n        prev_max = running_max\n        running_max = __B_update_max__\n        rescale = 0.0 if prev_max == float(\"-inf\") else math.exp(prev_max - running_max)\n        exp_score = math.exp(score - running_max)\n        weighted_sum = __B_update_num__\n        running_sum = __B_update_den__\n\n    sink = math.exp(attn_sink - running_max)\n    return weighted_sum / (__B_final_den__)\n",
      "validator_code": "import math\n\ndef dense_reference(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):\n    selected = [kv[i] for i in topk_idxs if i != -1]\n    scores = [q * v * scale for v in selected]\n    scores.append(attn_sink)\n    mmax = max(scores)\n    exps = [math.exp(s - mmax) for s in scores]\n    return sum(exps[i] * selected[i] for i in range(len(selected))) / sum(exps)\n\ndef run_checks(ns):\n    sparse_attn_scalar = ns[\"sparse_attn_scalar\"]\n    q, kv, idxs = 2.0, [1.0, 3.0, 5.0], [2, 0, -1]\n    got = sparse_attn_scalar(q, kv, idxs, scale=0.5, attn_sink=-1.0)\n    want = dense_reference(q, kv, idxs, scale=0.5, attn_sink=-1.0)\n    return [{\n        \"name\": \"Matches dense reference\",\n        \"passed\": abs(got - want) < 1e-9,\n        \"expected\": repr(want),\n        \"actual\": repr(got),\n    }]\n",
      "kind": "lesson",
      "starter_runnable": "import math\n\ndef sparse_attn_scalar(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):\n    running_max = float(\"-inf\")\n    running_sum = 0.0\n    weighted_sum = 0.0\n\n    for idx in topk_idxs:\n        if idx == -1:\n            continue\n        score = q * kv[idx] * scale\n        prev_max = running_max\n        running_max = score\n        rescale = 0.0 if prev_max == float(\"-inf\") else math.exp(prev_max - running_max)\n        exp_score = math.exp(score - running_max)\n        weighted_sum = exp_score * kv[idx]\n        running_sum = exp_score\n\n    sink = math.exp(attn_sink - running_max)\n    return weighted_sum / (running_sum)\n",
      "solution_runnable": "import math\n\ndef sparse_attn_scalar(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):\n    running_max = float(\"-inf\")\n    running_sum = 0.0\n    weighted_sum = 0.0\n\n    for idx in topk_idxs:\n        if idx == -1:\n            continue\n        score = q * kv[idx] * scale\n        prev_max = running_max\n        running_max = max(running_max, score)\n        rescale = 0.0 if prev_max == float(\"-inf\") else math.exp(prev_max - running_max)\n        exp_score = math.exp(score - running_max)\n        weighted_sum = weighted_sum * rescale + exp_score * kv[idx]\n        running_sum = running_sum * rescale + exp_score\n\n    sink = math.exp(attn_sink - running_max)\n    return weighted_sum / (running_sum + sink)\n",
      "solution_code": "import math\n\ndef sparse_attn_scalar(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):\n    running_max = float(\"-inf\")\n    running_sum = 0.0\n    weighted_sum = 0.0\n\n    for idx in topk_idxs:\n        if idx == -1:\n            continue\n        score = q * kv[idx] * scale\n        prev_max = running_max\n        running_max = max(running_max, score)\n        rescale = 0.0 if prev_max == float(\"-inf\") else math.exp(prev_max - running_max)\n        exp_score = math.exp(score - running_max)\n        weighted_sum = weighted_sum * rescale + exp_score * kv[idx]\n        running_sum = running_sum * rescale + exp_score\n\n    sink = math.exp(attn_sink - running_max)\n    return weighted_sum / (running_sum + sink)\n",
      "reference_code": "@tilelang.jit(pass_configs=pass_configs)\ndef sparse_attn_kernel(h: int, d: int, scale=None):\n    \"\"\"Sparse multi-head attention via index gathering + online softmax (FlashAttention-style).\n    For each (batch, seq_pos), gathers top-k KV positions by index, computes attention\n    with numerically stable running max/sum, and includes a learnable attn_sink bias.\"\"\"\n    b = T.symbolic(\"b\")\n    m = T.symbolic(\"m\")\n    n = T.symbolic(\"n\")\n    topk = T.symbolic(\"topk\")\n    if scale is None:\n        scale = (1.0 / d) ** 0.5\n\n    num_stages = 2\n    threads = 256\n    block = 64\n    num_blocks = tilelang.cdiv(topk, block)\n\n    @T.prim_func\n    def sparse_attn_kernel_(\n        q: T.Tensor[(b, m, h, d), BF16],\n        kv: T.Tensor[(b, n, d), BF16],\n        o: T.Tensor[(b, m, h, d), BF16],\n        attn_sink: T.Tensor[(h,), FP32],\n        topk_idxs: T.Tensor[(b, m, topk), INT32],\n    ):\n        with T.Kernel(m, b, threads=threads) as (bx, by):\n            q_shared = T.alloc_shared((h, d), BF16)\n            kv_shared = T.alloc_shared((block, d), BF16)\n            o_shared = T.alloc_shared((h, d), BF16)\n            acc_s_cast = T.alloc_shared((h, block), BF16)\n\n            idxs = T.alloc_fragment(block, INT32)\n            acc_s = T.alloc_fragment((h, block), FP32)\n            acc_o = T.alloc_fragment((h, d), FP32)\n            scores_max = T.alloc_fragment(h, FP32)\n            scores_max_prev = T.alloc_fragment(h, FP32)\n            scores_scale = T.alloc_fragment(h, FP32)\n            scores_sum = T.alloc_fragment(h, FP32)\n            sum_exp = T.alloc_fragment(h, FP32)\n\n            T.clear(acc_o)\n            T.clear(sum_exp)\n            T.fill(scores_max, -T.infinity(FP32))\n            T.copy(q[by, bx, :, :], q_shared)\n\n            for t in T.Pipelined(num_blocks, num_stages=num_stages):\n                for i in T.Parallel(block):\n                    idxs[i] = T.if_then_else(t * block + i < topk, topk_idxs[by, bx, t * block + i], -1)\n                for i, j in T.Parallel(block, d):\n                    kv_shared[i, j] = T.if_then_else(idxs[i] != -1, kv[by, idxs[i], j], 0)\n                for i, j in T.Parallel(h, block):\n                    acc_s[i, j] = T.if_then_else(idxs[j] != -1, 0, -T.infinity(FP32))\n                T.gemm(q_shared, kv_shared, acc_s, transpose_B=True, policy=T.GemmWarpPolicy.FullRow)\n                for i, j in T.Parallel(h, block):\n                    acc_s[i, j] *= scale\n                T.copy(scores_max, scores_max_prev)\n                T.reduce_max(acc_s, scores_max, dim=1, clear=False)\n                for i in T.Parallel(h):\n                    scores_scale[i] = T.exp(scores_max_prev[i] - scores_max[i])\n                for i, j in T.Parallel(h, block):\n                    acc_s[i, j] = T.exp(acc_s[i, j] - scores_max[i])\n                T.reduce_sum(acc_s, scores_sum, dim=1)\n                for i in T.Parallel(h):\n                    sum_exp[i] = sum_exp[i] * scores_scale[i] + scores_sum[i]\n                T.copy(acc_s, acc_s_cast)\n                for i, j in T.Parallel(h, d):\n                    acc_o[i, j] *= scores_scale[i]\n                T.gemm(acc_s_cast, kv_shared, acc_o, policy=T.GemmWarpPolicy.FullRow)\n\n            for i in T.Parallel(h):\n                sum_exp[i] += T.exp(attn_sink[i] - scores_max[i])\n            for i, j in T.Parallel(h, d):\n                acc_o[i, j] /= sum_exp[i]\n            T.copy(acc_o, o_shared)\n            T.copy(o_shared, o[by, bx, :, :])\n\n    return sparse_attn_kernel_\n",
      "puzzle_path": "tutorial/generated/puzzles/19_s19-sparse-attn.py",
      "solution_path": "tutorial/generated/solutions/19_s19-sparse-attn.py",
      "reference_file_path": "tutorial/generated/references/19_s19-sparse-attn.py",
      "workshop_loc": 20,
      "reference_loc": 77,
      "blank_count": 4,
      "i18n": {
        "zh": {
          "title": "稀疏注意力在线 Softmax",
          "tagline": "running max + running sum,再加 attn_sink。",
          "difficulty": "进阶",
          "summary": "稀疏注意力逐块更新 running max 和 running sum:先 `exp(score - running_max)` 累加分子/分母,然后把 `attn_sink` 作为一个虚拟的 logit 加到最终分母上。",
          "what_you_learn": [
            "在线 softmax 如何用增量 max 保持数值稳定。",
            "为什么分母要再加一个 sink 项 —— 给模型一个“不聚焦”的选项。",
            "增量更新的 rescale = `exp(prev_max - running_max)`。"
          ],
          "workshop_steps": [
            "`running_max = max(running_max, score)`。",
            "`numerator = weighted_sum * rescale + exp_score * kv[idx]`。",
            "`denominator = running_sum * rescale + exp_score`。",
            "循环结束后把 `running_sum + sink` 作为最终分母。"
          ],
          "pitfalls": [
            "`running_max` 不能初始化为 `float('-inf')` 的同时又用 exp —— 会 underflow/NaN。",
            "sink 要在循环 *之后* 加,不是每步加。"
          ]
        }
      }
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
      "tags": [
        "sinkhorn",
        "mhc"
      ],
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 371,
      "line_end": 438,
      "summary": "mHC projects its `comb` matrix onto the Birkhoff polytope with the Sinkhorn-Knopp algorithm: start from a softmax-normalised matrix, then alternate row and column normalisation until the matrix is approximately doubly stochastic.",
      "paper_anchor": {
        "section": "§2.2 mHC — eq. (8)",
        "figure": "Figure 2 (Residual Mixing)",
        "summary": "eq. (8) is the Sinkhorn-Knopp iteration; the manifold constraint caps the spectral norm of `B_l` at 1 and stabilises the deep HC stack."
      },
      "what_you_learn": [
        "Why a row-normalised matrix isn't doubly stochastic — you need columns too.",
        "Why a handful of iterations is enough in practice (the paper uses 20)."
      ],
      "workshop_steps": [
        "Divide each column by its sum.",
        "Alternate row and column normalisation inside the loop."
      ],
      "pitfalls": [
        "Add `eps` to denominators — zero-sum columns are uncommon but legal at init."
      ],
      "blanks": [
        {
          "id": "col_normalize",
          "label": "Column normalise",
          "hint": "Divide every element by its column sum (plus eps).",
          "starter": "matrix",
          "solution": "[[matrix[row][col] / (col_sums[col] + eps) for col in range(len(matrix[0]))] for row in range(len(matrix))]",
          "i18n": {
            "zh": {
              "label": "列归一化",
              "hint": "每个元素除以对应列的和(加上 eps)。"
            }
          }
        },
        {
          "id": "row_loop",
          "label": "Loop row normalise",
          "hint": "Call `normalize_rows(matrix, eps)` on each iteration.",
          "starter": "matrix",
          "solution": "normalize_rows(matrix, eps)",
          "i18n": {
            "zh": {
              "label": "循环行归一化",
              "hint": "每一轮调 `normalize_rows(matrix, eps)`。"
            }
          }
        },
        {
          "id": "col_loop",
          "label": "Loop col normalise",
          "hint": "Call `normalize_cols(matrix, eps)` on each iteration.",
          "starter": "matrix",
          "solution": "normalize_cols(matrix, eps)",
          "i18n": {
            "zh": {
              "label": "循环列归一化",
              "hint": "每一轮调 `normalize_cols(matrix, eps)`。"
            }
          }
        }
      ],
      "starter_code": "import math\n\ndef softmax_rows(matrix):\n    out = []\n    for row in matrix:\n        m = max(row)\n        exps = [math.exp(v - m) for v in row]\n        total = sum(exps)\n        out.append([v / total for v in exps])\n    return out\n\ndef normalize_rows(matrix, eps):\n    out = []\n    for row in matrix:\n        total = sum(row)\n        out.append([v / (total + eps) for v in row])\n    return out\n\ndef normalize_cols(matrix, eps):\n    col_sums = [sum(matrix[r][c] for r in range(len(matrix))) for c in range(len(matrix[0]))]\n    return __B_col_normalize__\n\ndef sinkhorn(matrix, iters, eps=1e-6):\n    matrix = softmax_rows(matrix)\n    matrix = normalize_cols(matrix, eps)\n    for _ in range(iters - 1):\n        matrix = __B_row_loop__\n        matrix = __B_col_loop__\n    return matrix\n",
      "validator_code": "def run_checks(ns):\n    sinkhorn = ns[\"sinkhorn\"]\n    out = sinkhorn([[2.0, 1.0], [1.0, 3.0]], iters=8, eps=1e-9)\n    row_sums = [sum(row) for row in out]\n    col_sums = [out[0][0] + out[1][0], out[0][1] + out[1][1]]\n    return [\n        {\n            \"name\": \"Rows converge to 1\",\n            \"passed\": all(abs(s - 1.0) < 5e-4 for s in row_sums),\n            \"expected\": \"~[1.0, 1.0]\",\n            \"actual\": repr(row_sums),\n        },\n        {\n            \"name\": \"Columns converge to 1\",\n            \"passed\": all(abs(s - 1.0) < 5e-4 for s in col_sums),\n            \"expected\": \"~[1.0, 1.0]\",\n            \"actual\": repr(col_sums),\n        },\n    ]\n",
      "kind": "lesson",
      "starter_runnable": "import math\n\ndef softmax_rows(matrix):\n    out = []\n    for row in matrix:\n        m = max(row)\n        exps = [math.exp(v - m) for v in row]\n        total = sum(exps)\n        out.append([v / total for v in exps])\n    return out\n\ndef normalize_rows(matrix, eps):\n    out = []\n    for row in matrix:\n        total = sum(row)\n        out.append([v / (total + eps) for v in row])\n    return out\n\ndef normalize_cols(matrix, eps):\n    col_sums = [sum(matrix[r][c] for r in range(len(matrix))) for c in range(len(matrix[0]))]\n    return matrix\n\ndef sinkhorn(matrix, iters, eps=1e-6):\n    matrix = softmax_rows(matrix)\n    matrix = normalize_cols(matrix, eps)\n    for _ in range(iters - 1):\n        matrix = matrix\n        matrix = matrix\n    return matrix\n",
      "solution_runnable": "import math\n\ndef softmax_rows(matrix):\n    out = []\n    for row in matrix:\n        m = max(row)\n        exps = [math.exp(v - m) for v in row]\n        total = sum(exps)\n        out.append([v / total for v in exps])\n    return out\n\ndef normalize_rows(matrix, eps):\n    out = []\n    for row in matrix:\n        total = sum(row)\n        out.append([v / (total + eps) for v in row])\n    return out\n\ndef normalize_cols(matrix, eps):\n    col_sums = [sum(matrix[r][c] for r in range(len(matrix))) for c in range(len(matrix[0]))]\n    return [[matrix[row][col] / (col_sums[col] + eps) for col in range(len(matrix[0]))] for row in range(len(matrix))]\n\ndef sinkhorn(matrix, iters, eps=1e-6):\n    matrix = softmax_rows(matrix)\n    matrix = normalize_cols(matrix, eps)\n    for _ in range(iters - 1):\n        matrix = normalize_rows(matrix, eps)\n        matrix = normalize_cols(matrix, eps)\n    return matrix\n",
      "solution_code": "import math\n\ndef softmax_rows(matrix):\n    out = []\n    for row in matrix:\n        m = max(row)\n        exps = [math.exp(v - m) for v in row]\n        total = sum(exps)\n        out.append([v / total for v in exps])\n    return out\n\ndef normalize_rows(matrix, eps):\n    out = []\n    for row in matrix:\n        total = sum(row)\n        out.append([v / (total + eps) for v in row])\n    return out\n\ndef normalize_cols(matrix, eps):\n    col_sums = [sum(matrix[r][c] for r in range(len(matrix))) for c in range(len(matrix[0]))]\n    return [[matrix[row][col] / (col_sums[col] + eps) for col in range(len(matrix[0]))] for row in range(len(matrix))]\n\ndef sinkhorn(matrix, iters, eps=1e-6):\n    matrix = softmax_rows(matrix)\n    matrix = normalize_cols(matrix, eps)\n    for _ in range(iters - 1):\n        matrix = normalize_rows(matrix, eps)\n        matrix = normalize_cols(matrix, eps)\n    return matrix\n",
      "reference_code": "@tilelang.jit(pass_configs=pass_configs)\ndef hc_split_sinkhorn_kernel(hc: int, sinkhorn_iters: int, eps: float):\n    n = T.symbolic(\"n\")\n    mix_hc = (2 + hc) * hc\n    threads = 64\n\n    @T.prim_func\n    def hc_split_sinkhorn_kernel_(\n        mixes: T.Tensor[(n, mix_hc), FP32],\n        hc_scale: T.Tensor[(3,), FP32],\n        hc_base: T.Tensor[(mix_hc,), FP32],\n        pre: T.Tensor[(n, hc), FP32],\n        post: T.Tensor[(n, hc), FP32],\n        comb: T.Tensor[(n, hc, hc), FP32],\n    ):\n        with T.Kernel(n, threads=threads) as i:\n            mixes_shared = T.alloc_shared(mix_hc, FP32)\n            comb_frag = T.alloc_fragment((hc, hc), FP32)\n            T.copy(mixes[i, :], mixes_shared)\n\n            for j in T.Parallel(hc):\n                pre[i, j] = T.sigmoid(mixes_shared[j] * hc_scale[0] + hc_base[j]) + eps\n            for j in T.Parallel(hc):\n                post[i, j] = 2 * T.sigmoid(mixes_shared[j + hc] * hc_scale[1] + hc_base[j + hc])\n            for j, k in T.Parallel(hc, hc):\n                comb_frag[j, k] = mixes_shared[j * hc + k + hc * 2] * hc_scale[2] + hc_base[j * hc + k + hc * 2]\n\n            row_sum = T.alloc_fragment(hc, FP32)\n            col_sum = T.alloc_fragment(hc, FP32)\n\n            # comb = comb.softmax(-1) + eps\n            row_max = T.alloc_fragment(hc, FP32)\n            T.reduce_max(comb_frag, row_max, dim=1)\n            for j, k in T.Parallel(hc, hc):\n                comb_frag[j, k] = T.exp(comb_frag[j, k] - row_max[j])\n            T.reduce_sum(comb_frag, row_sum, dim=1)\n            for j, k in T.Parallel(hc, hc):\n                comb_frag[j, k] = comb_frag[j, k] / row_sum[j] + eps\n\n            # comb = comb / (comb.sum(-2) + eps)\n            T.reduce_sum(comb_frag, col_sum, dim=0)\n            for j, k in T.Parallel(hc, hc):\n                comb_frag[j, k] = comb_frag[j, k] / (col_sum[k] + eps)\n\n            for _ in T.serial(sinkhorn_iters - 1):\n                # comb = comb / (comb.sum(-1) + eps)\n                T.reduce_sum(comb_frag, row_sum, dim=1)\n                for j, k in T.Parallel(hc, hc):\n                    comb_frag[j, k] = comb_frag[j, k] / (row_sum[j] + eps)\n                # comb = comb / (comb.sum(-2) + eps)\n                T.reduce_sum(comb_frag, col_sum, dim=0)\n                for j, k in T.Parallel(hc, hc):\n                    comb_frag[j, k] = comb_frag[j, k] / (col_sum[k] + eps)\n\n            T.copy(comb_frag, comb[i, :, :])\n\n    return hc_split_sinkhorn_kernel_\n\n\ndef hc_split_sinkhorn(mixes: torch.Tensor, hc_scale: torch.Tensor, hc_base: torch.Tensor, hc_mult: int = 4, sinkhorn_iters: int = 20, eps: float = 1e-6):\n    b, s, _ = mixes.size()\n    pre = mixes.new_empty(b, s, hc_mult)\n    post = mixes.new_empty(b, s, hc_mult)\n    comb = mixes.new_empty(b, s, hc_mult, hc_mult)\n    kernel = hc_split_sinkhorn_kernel(hc_mult, sinkhorn_iters, eps)\n    kernel(mixes.view(-1, (2 + hc_mult) * hc_mult), hc_scale, hc_base,\n           pre.view(-1, hc_mult), post.view(-1, hc_mult), comb.view(-1, hc_mult, hc_mult))\n    return pre, post, comb\n",
      "puzzle_path": "tutorial/generated/puzzles/20_s20-sinkhorn.py",
      "solution_path": "tutorial/generated/solutions/20_s20-sinkhorn.py",
      "reference_file_path": "tutorial/generated/references/20_s20-sinkhorn.py",
      "workshop_loc": 29,
      "reference_loc": 68,
      "blank_count": 3,
      "i18n": {
        "zh": {
          "title": "mHC 的 Sinkhorn 迭代",
          "tagline": "交替归一化行与列,收敛到双随机矩阵。",
          "difficulty": "进阶",
          "summary": "Sinkhorn 迭代把任意非负矩阵逼近到双随机:每轮先归一化行,再归一化列。epsilon 防止零行/零列导致除零。",
          "what_you_learn": [
            "Sinkhorn / RAS 的收敛性 —— 多轮 row/col 归一化即可逼近双随机。",
            "`+ eps` 为什么必须出现在分母 —— 避免除零。",
            "mHC 的 comb 为什么要双随机 —— 保证 lane 变换不改变总质量。"
          ],
          "workshop_steps": [
            "每一轮:先对行归一化,再对列归一化。",
            "行归一化调 `normalize_rows(matrix, eps)`。",
            "列归一化调 `normalize_cols(matrix, eps)`。"
          ],
          "pitfalls": [
            "col 归一化的初始化一定要在第一轮 row-softmax 之后立刻做。",
            "eps 要一直加 —— 否则零行会炸。"
          ]
        }
      }
    }
  ],
  "segments": [
    {
      "id": "i01-model-imports",
      "order": 100,
      "stage": "foundations",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 1,
      "line_end": 22,
      "title": "Imports & Precision Defaults",
      "tagline": "The mixed-precision plumbing every later block relies on.",
      "summary": "The module starts by pulling in standard helpers plus the local `kernel` fused ops (`act_quant`, `fp4_gemm`, `sparse_attn`, `hc_split_sinkhorn`). Globals set the distributed topology (`world_size`, `rank`) and the default numerics (`block_size`, `fp4_block_size`, `default_dtype`, `scale_fmt`, `scale_dtype`) that `Transformer.__init__` will later override from `ModelArgs`.",
      "why_it_matters": [
        "`block_size = 128` is the FP8 tile size; `fp4_block_size = 32` is the FP4 tile.",
        "`default_dtype` is flipped to `torch.float8_e4m3fn` when `ModelArgs.dtype=\"fp8\"`.",
        "The kernel imports declare the GPU-side contract the rest of `model.py` assumes."
      ],
      "kind": "interlude",
      "reference_code": "import math\nfrom dataclasses import dataclass\nfrom typing import Tuple, Optional, Literal\nfrom functools import lru_cache\nfrom contextlib import contextmanager\n\nimport torch\nfrom torch import nn\nimport torch.nn.functional as F\nimport torch.distributed as dist\n\nfrom kernel import act_quant, fp4_act_quant, fp8_gemm, fp4_gemm, sparse_attn, hc_split_sinkhorn\n\n\nworld_size = 1\nrank = 0\nblock_size = 128\nfp4_block_size = 32\ndefault_dtype = torch.bfloat16\nscale_fmt = None\nscale_dtype = torch.float32\n",
      "reference_loc": 21,
      "i18n": {
        "zh": {
          "title": "导入与精度默认",
          "tagline": "后面每一个 block 都要用到的基础设施。",
          "summary": "文件开头拉入标准库、`kernel` 里的融合算子 (`act_quant`、`fp4_gemm`、`sparse_attn`、`hc_split_sinkhorn`),并设置分布式拓扑 (`world_size`、`rank`) 与数值默认 (`block_size`、`fp4_block_size`、`default_dtype`、`scale_fmt`、`scale_dtype`) —— 这些全局量会在 `Transformer.__init__` 里被 `ModelArgs` 覆盖。",
          "why_it_matters": [
            "`block_size = 128` 是 FP8 的分块大小;`fp4_block_size = 32` 是 FP4 的分块大小。",
            "当 `ModelArgs.dtype=\"fp8\"` 时,`default_dtype` 会被翻成 `torch.float8_e4m3fn`。",
            "kernel 的 import 声明了 GPU 侧的契约,剩下的 `model.py` 都假定这些存在。"
          ]
        }
      }
    },
    {
      "id": "i02-set-dtype",
      "order": 101,
      "stage": "foundations",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 23,
      "line_end": 33,
      "title": "`set_dtype` Context Manager",
      "tagline": "Temporarily override `torch.get_default_dtype()` safely.",
      "summary": "`set_dtype` is a tiny contextmanager that flips the PyTorch default dtype on entry and restores it on exit, even if the body raises. It is used in `Block` and `Transformer.__init__` so that HC parameters (`hc_attn_fn`, `hc_ffn_fn`, `hc_head_fn`, scale/base tensors) are always allocated in FP32 regardless of what activations are using.",
      "why_it_matters": [
        "HC parameters are stored in FP32 to avoid catastrophic cancellation in Sinkhorn.",
        "The try/finally is load-bearing — without it a crash inside `with` would leave the process in FP8."
      ],
      "kind": "interlude",
      "reference_code": "\n@contextmanager\ndef set_dtype(dtype):\n    \"\"\"Temporarily override torch default dtype, restoring it on exit (even if an exception occurs).\"\"\"\n    prev = torch.get_default_dtype()\n    torch.set_default_dtype(dtype)\n    try:\n        yield\n    finally:\n        torch.set_default_dtype(prev)\n",
      "reference_loc": 10,
      "i18n": {
        "zh": {
          "title": "`set_dtype` 上下文管理器",
          "tagline": "临时覆盖 `torch.get_default_dtype()` 且保证异常安全。",
          "summary": "`set_dtype` 是一个 contextmanager:入 with 时替换 PyTorch 全局默认 dtype,出 with 时恢复,即便函数体抛异常也能恢复。`Block.__init__` 与 `Transformer.__init__` 借此在构造 HC 参数时强制使用 FP32。",
          "why_it_matters": [
            "HC 参数存 FP32,是为了避免 Sinkhorn 里的精度崩溃。",
            "try/finally 是关键 —— 没有它,with 内部抛异常后进程会卡在 FP8。"
          ]
        }
      }
    },
    {
      "id": "i03-model-args",
      "order": 102,
      "stage": "foundations",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 34,
      "line_end": 81,
      "title": "ModelArgs — The Whole Config",
      "tagline": "Every knob the paper exposes lives here.",
      "summary": "The frozen dataclass enumerates all hyperparameters — shape (`dim`, `n_heads`), precision (`dtype`, `scale_fmt`, `expert_dtype`, `scale_dtype`), MoE (`n_routed_experts`, `n_activated_experts`, `score_func`, `route_scale`), MLA/MQA (`q_lora_rank`, `head_dim`, `rope_head_dim`, `o_groups`, `o_lora_rank`), sliding-window + compression (`window_size`, `compress_ratios`), YaRN (`original_seq_len`, `rope_theta`, `rope_factor`, `beta_fast`, `beta_slow`), the lightning indexer (`index_n_heads`, `index_head_dim`, `index_topk`), and Hyper-Connections (`hc_mult`, `hc_sinkhorn_iters`, `hc_eps`).",
      "why_it_matters": [
        "`compress_ratios = (0, 0, 4, 128, 4, 128, 4, 0)` encodes the hybrid attention schedule across layers.",
        "`score_func=\"sqrtsoftplus\"` is the novel gating variant — see Lesson 12.",
        "`hc_mult=4` means each residual actually carries four parallel copies of the hidden state."
      ],
      "kind": "interlude",
      "reference_code": "@dataclass\nclass ModelArgs:\n    \"\"\"Model hyperparameters. Field names match the config JSON keys.\"\"\"\n    max_batch_size: int = 4\n    max_seq_len: int = 4096\n    dtype: Literal[\"bf16\", \"fp8\"] = \"fp8\"\n    scale_fmt: Literal[None, \"ue8m0\"] = \"ue8m0\"\n    expert_dtype: Literal[None, \"fp4\"] = None\n    scale_dtype: Literal[\"fp32\", \"fp8\"] = \"fp8\"\n    vocab_size: int = 129280\n    dim: int = 4096\n    moe_inter_dim: int = 4096\n    n_layers: int = 7\n    n_hash_layers: int = 0\n    n_mtp_layers: int = 1\n    n_heads: int = 64\n    # moe\n    n_routed_experts: int = 8\n    n_shared_experts: int = 1\n    n_activated_experts: int = 2\n    score_func: Literal[\"softmax\", \"sigmoid\", \"sqrtsoftplus\"] = \"sqrtsoftplus\"\n    route_scale: float = 1.\n    swiglu_limit: float = 0.\n    # mqa\n    q_lora_rank: int = 1024\n    head_dim: int = 512\n    rope_head_dim: int = 64\n    norm_eps: float = 1e-6\n    o_groups: int = 8\n    o_lora_rank: int = 1024\n    window_size: int = 128\n    compress_ratios: Tuple[int] = (0, 0, 4, 128, 4, 128, 4, 0)\n    # yarn\n    compress_rope_theta: float = 40000.0\n    original_seq_len: int = 0\n    rope_theta: float = 10000.0\n    rope_factor: float = 40\n    beta_fast: int = 32\n    beta_slow: int = 1\n    # index\n    index_n_heads: int = 64\n    index_head_dim: int = 128\n    index_topk: int = 512\n    # hc\n    hc_mult: int = 4\n    hc_sinkhorn_iters: int = 20\n    hc_eps: float = 1e-6\n",
      "reference_loc": 47,
      "i18n": {
        "zh": {
          "title": "ModelArgs —— 全部配置",
          "tagline": "论文里能调的每一个参数都在这。",
          "summary": "`ModelArgs` 枚举了所有超参:形状 (`dim`、`n_heads`)、精度 (`dtype`、`scale_fmt`、`expert_dtype`、`scale_dtype`)、MoE (`n_routed_experts`、`n_activated_experts`、`score_func`、`route_scale`)、MLA/MQA (`q_lora_rank`、`head_dim`、`rope_head_dim`、`o_groups`、`o_lora_rank`)、滑动窗口 + 压缩 (`window_size`、`compress_ratios`)、YaRN (`original_seq_len`、`rope_theta`、`rope_factor`、`beta_fast`、`beta_slow`)、闪电索引器 (`index_n_heads`、`index_head_dim`、`index_topk`) 以及超连接 (`hc_mult`、`hc_sinkhorn_iters`、`hc_eps`)。",
          "why_it_matters": [
            "`compress_ratios = (0, 0, 4, 128, 4, 128, 4, 0)` 编码了跨层的混合注意力排程。",
            "`score_func=\"sqrtsoftplus\"` 是新引入的门控 —— 见课程 12。",
            "`hc_mult=4` 表示每条残差实际上携带 4 份 hidden state 副本。"
          ]
        }
      }
    },
    {
      "id": "i04-parallel-embedding",
      "order": 103,
      "stage": "foundations",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 82,
      "line_end": 107,
      "title": "ParallelEmbedding — Vocab-Sharded Lookup",
      "tagline": "Each rank owns a vocab slice; zero-mask then all-reduce.",
      "summary": "Embeddings are sharded along the vocabulary dimension. Each rank only stores `vocab_size // world_size` rows. Token IDs outside the local slice are masked to zero before `F.embedding`, and the final sum is produced by `dist.all_reduce`. On `world_size == 1` the fast path skips both the mask and the all-reduce.",
      "why_it_matters": [
        "Sharding embeddings is a huge memory saving — V4 has 129k tokens.",
        "Zero-masking out-of-range indices is a classic trick to avoid per-rank branching."
      ],
      "kind": "interlude",
      "reference_code": "\nclass ParallelEmbedding(nn.Module):\n    \"\"\"Embedding sharded along the vocab dimension. Each rank holds vocab_size // world_size rows.\n    Out-of-range indices are zero-masked before all_reduce to combine partial embeddings.\"\"\"\n    def __init__(self, vocab_size: int, dim: int):\n        super().__init__()\n        self.vocab_size = vocab_size\n        self.dim = dim\n        assert vocab_size % world_size == 0, f\"Vocabulary size must be divisible by world size (world_size={world_size})\"\n        self.part_vocab_size = (vocab_size // world_size)\n        self.vocab_start_idx = rank * self.part_vocab_size\n        self.vocab_end_idx = self.vocab_start_idx + self.part_vocab_size\n        self.weight = nn.Parameter(torch.empty(self.part_vocab_size, self.dim))\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        if world_size > 1:\n            mask = (x < self.vocab_start_idx) | (x >= self.vocab_end_idx)\n            x = x - self.vocab_start_idx\n            x[mask] = 0\n        y = F.embedding(x, self.weight)\n        if world_size > 1:\n            y[mask] = 0\n            dist.all_reduce(y)\n        return y\n",
      "reference_loc": 24,
      "i18n": {
        "zh": {
          "title": "ParallelEmbedding —— 词表切分的查表层",
          "tagline": "每个 rank 只持有词表的一片,先掩码再 all-reduce。",
          "summary": "Embedding 按词表维度切分,每个 rank 只存 `vocab_size // world_size` 行。越界的 token id 在 `F.embedding` 之前被掩码为 0,最终通过 `dist.all_reduce` 汇总。单机 (`world_size==1`) 则走快路径,跳过掩码和 all-reduce。",
          "why_it_matters": [
            "把 embedding 切分下来能省大量显存 —— V4 词表有 12 万余条。",
            "用掩码替代分支是常用的并行 trick,免去 per-rank 的 if。"
          ]
        }
      }
    },
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
      "tags": [
        "dispatch",
        "quantization"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 108,
      "line_end": 120,
      "summary": "`linear()` is the single function every `nn.Linear` inside DeepSeek-V4 funnels through. It reads the weight dtype and routes into FP4, FP8, or plain BF16 GEMM.",
      "paper_anchor": {
        "section": "§3.4 FP4 Quantization-Aware Training",
        "figure": "Figure 2 — Overall Architecture",
        "summary": "The paper trains routed-expert weights in FP4 and activations in FP8; the dispatch below is the software seam where that mixed-precision plan actually bifurcates at runtime."
      },
      "what_you_learn": [
        "Why quantized weights require an activation quant step first.",
        "Why BF16 is the simplest path — no external `scale` tensor travels alongside the weight.",
        "How a single Python dispatcher keeps the rest of `model.py` agnostic of precision."
      ],
      "workshop_steps": [
        "Guard the FP4 branch with the correct dtype comparison.",
        "Call `fp4_gemm` with the quantized activation + both scales.",
        "Let the else-branch fall back to an un-quantized BF16 linear."
      ],
      "pitfalls": [
        "`act_quant` must run on the *activation*, not the weight.",
        "The scale tensor is attached to the weight as `weight.scale`."
      ],
      "blanks": [
        {
          "id": "fp4_guard",
          "label": "FP4 dtype guard",
          "hint": "Compare `weight.dtype` against `torch.float4_e2m1fn_x2`.",
          "starter": "False",
          "solution": "weight.dtype == torch.float4_e2m1fn_x2",
          "i18n": {
            "zh": {
              "label": "FP4 dtype 判别",
              "hint": "用 `weight.dtype` 和 `torch.float4_e2m1fn_x2` 比较。"
            }
          }
        },
        {
          "id": "fp4_call",
          "label": "FP4 GEMM call",
          "hint": "Pass the quantized activation `x`, the activation scale `s`, the weight, its `weight.scale`, and `scale_dtype`.",
          "starter": "('bf16', 'x', 'bf16')",
          "solution": "fp4_gemm(x, s, weight, weight.scale, scale_dtype)",
          "i18n": {
            "zh": {
              "label": "FP4 GEMM 调用",
              "hint": "把量化后的 `x`、scale `s`、权重、`weight.scale`、`scale_dtype` 依次传入。"
            }
          }
        },
        {
          "id": "bf16_fallback",
          "label": "BF16 fallback",
          "hint": "Call the un-quantized dense linear helper `dense_linear(x, weight)`.",
          "starter": "('bf16', 'x', 'bf16')",
          "solution": "dense_linear(x, weight)",
          "i18n": {
            "zh": {
              "label": "BF16 回退分支",
              "hint": "调用未量化的 `dense_linear(x, weight)`。"
            }
          }
        }
      ],
      "starter_code": "class TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\nclass Weight:\n    def __init__(self, dtype, scale=\"weight_scale\"):\n        self.dtype = dtype\n        self.scale = scale\n\nblock_size = 128\nscale_fmt = \"ue8m0\"\nscale_dtype = \"fp32\"\n\ndef act_quant(x, block_size, scale_fmt, scale_dtype):\n    return f\"quant({x})\", f\"scale({block_size},{scale_fmt},{scale_dtype})\"\n\ndef fp4_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp4\", x, s, weight_scale, scale_dtype)\n\ndef fp8_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp8\", x, s, weight_scale, scale_dtype)\n\ndef dense_linear(x, weight):\n    return (\"bf16\", x, weight.dtype)\n\ndef linear(x, weight, bias=None):\n    assert bias is None\n    if __B_fp4_guard__:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return __B_fp4_call__\n    elif weight.dtype == torch.float8_e4m3fn:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp8_gemm(x, s, weight, weight.scale, scale_dtype)\n    else:\n        return __B_bf16_fallback__\n",
      "validator_code": "def run_checks(ns):\n    Weight = ns[\"Weight\"]\n    torch = ns[\"torch\"]\n    linear = ns[\"linear\"]\n    checks = []\n\n    fp4 = linear(\"x\", Weight(torch.float4_e2m1fn_x2))\n    checks.append({\n        \"name\": \"FP4 path quantizes activation\",\n        \"passed\": isinstance(fp4, tuple) and fp4[0] == \"fp4\" and str(fp4[1]).startswith(\"quant(\"),\n        \"expected\": \"('fp4', 'quant(x)', ...)\",\n        \"actual\": repr(fp4),\n    })\n\n    fp8 = linear(\"x\", Weight(torch.float8_e4m3fn))\n    checks.append({\n        \"name\": \"FP8 path stays intact\",\n        \"passed\": isinstance(fp8, tuple) and fp8[0] == \"fp8\",\n        \"expected\": \"('fp8', ...)\",\n        \"actual\": repr(fp8),\n    })\n\n    bf = linear(\"x\", Weight(torch.bfloat16))\n    checks.append({\n        \"name\": \"BF16 fallback is dense\",\n        \"passed\": bf == (\"bf16\", \"x\", \"bf16\"),\n        \"expected\": \"('bf16', 'x', 'bf16')\",\n        \"actual\": repr(bf),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "class TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\nclass Weight:\n    def __init__(self, dtype, scale=\"weight_scale\"):\n        self.dtype = dtype\n        self.scale = scale\n\nblock_size = 128\nscale_fmt = \"ue8m0\"\nscale_dtype = \"fp32\"\n\ndef act_quant(x, block_size, scale_fmt, scale_dtype):\n    return f\"quant({x})\", f\"scale({block_size},{scale_fmt},{scale_dtype})\"\n\ndef fp4_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp4\", x, s, weight_scale, scale_dtype)\n\ndef fp8_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp8\", x, s, weight_scale, scale_dtype)\n\ndef dense_linear(x, weight):\n    return (\"bf16\", x, weight.dtype)\n\ndef linear(x, weight, bias=None):\n    assert bias is None\n    if False:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return ('bf16', 'x', 'bf16')\n    elif weight.dtype == torch.float8_e4m3fn:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp8_gemm(x, s, weight, weight.scale, scale_dtype)\n    else:\n        return ('bf16', 'x', 'bf16')\n",
      "solution_runnable": "class TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\nclass Weight:\n    def __init__(self, dtype, scale=\"weight_scale\"):\n        self.dtype = dtype\n        self.scale = scale\n\nblock_size = 128\nscale_fmt = \"ue8m0\"\nscale_dtype = \"fp32\"\n\ndef act_quant(x, block_size, scale_fmt, scale_dtype):\n    return f\"quant({x})\", f\"scale({block_size},{scale_fmt},{scale_dtype})\"\n\ndef fp4_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp4\", x, s, weight_scale, scale_dtype)\n\ndef fp8_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp8\", x, s, weight_scale, scale_dtype)\n\ndef dense_linear(x, weight):\n    return (\"bf16\", x, weight.dtype)\n\ndef linear(x, weight, bias=None):\n    assert bias is None\n    if weight.dtype == torch.float4_e2m1fn_x2:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp4_gemm(x, s, weight, weight.scale, scale_dtype)\n    elif weight.dtype == torch.float8_e4m3fn:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp8_gemm(x, s, weight, weight.scale, scale_dtype)\n    else:\n        return dense_linear(x, weight)\n",
      "solution_code": "class TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\nclass Weight:\n    def __init__(self, dtype, scale=\"weight_scale\"):\n        self.dtype = dtype\n        self.scale = scale\n\nblock_size = 128\nscale_fmt = \"ue8m0\"\nscale_dtype = \"fp32\"\n\ndef act_quant(x, block_size, scale_fmt, scale_dtype):\n    return f\"quant({x})\", f\"scale({block_size},{scale_fmt},{scale_dtype})\"\n\ndef fp4_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp4\", x, s, weight_scale, scale_dtype)\n\ndef fp8_gemm(x, s, weight, weight_scale, scale_dtype):\n    return (\"fp8\", x, s, weight_scale, scale_dtype)\n\ndef dense_linear(x, weight):\n    return (\"bf16\", x, weight.dtype)\n\ndef linear(x, weight, bias=None):\n    assert bias is None\n    if weight.dtype == torch.float4_e2m1fn_x2:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp4_gemm(x, s, weight, weight.scale, scale_dtype)\n    elif weight.dtype == torch.float8_e4m3fn:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp8_gemm(x, s, weight, weight.scale, scale_dtype)\n    else:\n        return dense_linear(x, weight)\n",
      "reference_code": "def linear(x: torch.Tensor, weight: torch.Tensor, bias: Optional[torch.Tensor] = None) -> torch.Tensor:\n    \"\"\"Dispatches to fp4_gemm / fp8_gemm / F.linear based on weight dtype.\n    For quantized weights, x is first quantized to FP8 via act_quant.\"\"\"\n    assert bias is None\n\n    if weight.dtype == torch.float4_e2m1fn_x2:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp4_gemm(x, s, weight, weight.scale, scale_dtype)\n    elif weight.dtype == torch.float8_e4m3fn:\n        x, s = act_quant(x, block_size, scale_fmt, scale_dtype)\n        return fp8_gemm(x, s, weight, weight.scale, scale_dtype)\n    else:\n        return F.linear(x, weight)\n",
      "puzzle_path": "tutorial/generated/puzzles/01_s01-linear-dispatch.py",
      "solution_path": "tutorial/generated/solutions/01_s01-linear-dispatch.py",
      "reference_file_path": "tutorial/generated/references/01_s01-linear-dispatch.py",
      "workshop_loc": 38,
      "reference_loc": 13,
      "blank_count": 3,
      "i18n": {
        "zh": {
          "title": "线性层分发",
          "tagline": "一个入口,三条精度路径。",
          "difficulty": "入门",
          "summary": "`linear()` 是 DeepSeek-V4 里所有 `nn.Linear` 的统一出口。它根据权重的 dtype 把请求路由到 FP4、FP8 或原生 BF16 的 GEMM。",
          "what_you_learn": [
            "为什么量化权重必须先做一次激活量化。",
            "为什么 BF16 最简单 —— 不需要额外的 scale 张量跟着权重走。",
            "单一 Python 分发器如何让 `model.py` 的其余部分与精度解耦。"
          ],
          "workshop_steps": [
            "写出 FP4 分支的 dtype 判断。",
            "用量化后的激活与两个 scale 张量调用 `fp4_gemm`。",
            "让 else 分支回落到未量化的 BF16 线性层。"
          ],
          "pitfalls": [
            "`act_quant` 要作用在 *激活* 上,不是权重。",
            "scale 张量挂在权重对象上,通过 `weight.scale` 访问。"
          ]
        }
      }
    },
    {
      "id": "gap-DeepSeek_official/model-py-121-122",
      "kind": "gap",
      "stage": "foundations",
      "track": "DeepSeek_official/model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 121,
      "line_end": 122,
      "title": "Spacer",
      "tagline": "Whitespace between segments.",
      "summary": "Blank lines in the reference — preserved so segments reconstruct the file byte-for-byte.",
      "reference_code": "\n",
      "reference_loc": 1
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
      "tags": [
        "layout",
        "quantization"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 123,
      "line_end": 150,
      "summary": "`Linear.__init__` branches on dtype to decide the physical weight shape and the size of the companion scale tensor. FP4 packs two values per byte; FP8 stores a scale per 128×128 block.",
      "paper_anchor": {
        "section": "§3.4 FP4 Quantization-Aware Training",
        "figure": "Figure 2, inset on Mixed Precision",
        "summary": "Packed FP4 storage and per-block FP8 scales are the *physical* layout behind the mixed-precision boxes drawn in Figure 2 — the code below wires a concrete tensor shape to each ratio in the paper's quantization table."
      },
      "what_you_learn": [
        "Why FP4 packs two values per byte and needs `in_features // 2` storage.",
        "Why FP8 stores one scale per 128×128 tile (`ceildiv` each dim).",
        "Why BF16 doesn't need a scale tensor at all."
      ],
      "workshop_steps": [
        "Fill the FP4 scale's column count — `in_features // fp4_block_size`.",
        "Fill the FP8 scale grid — `ceildiv` on both axes.",
        "Leave BF16 with no scale tensor."
      ],
      "pitfalls": [
        "FP4 block size is 32 (`fp4_block_size`), different from the FP8 block size of 128.",
        "`ceildiv` rounds UP because the last tile may be partial."
      ],
      "blanks": [
        {
          "id": "fp4_scale_cols",
          "label": "FP4 scale columns",
          "hint": "One scale per 32 FP4 values along K, so `in_features // fp4_block_size`.",
          "starter": "1",
          "solution": "in_features // fp4_block_size",
          "i18n": {
            "zh": {
              "label": "FP4 scale 列数",
              "hint": "每 32 个 FP4 值共享一个 scale,`in_features // fp4_block_size`。"
            }
          }
        },
        {
          "id": "fp8_scale_rows",
          "label": "FP8 scale rows",
          "hint": "One scale per 128 rows, rounded up — `ceildiv(out_features, block_size)`.",
          "starter": "1",
          "solution": "ceildiv(out_features, block_size)",
          "i18n": {
            "zh": {
              "label": "FP8 scale 行数",
              "hint": "每 128 行一个 scale,`ceildiv(out_features, block_size)`。"
            }
          }
        },
        {
          "id": "fp8_scale_cols",
          "label": "FP8 scale columns",
          "hint": "One scale per 128 columns, rounded up — `ceildiv(in_features, block_size)`.",
          "starter": "1",
          "solution": "ceildiv(in_features, block_size)",
          "i18n": {
            "zh": {
              "label": "FP8 scale 列数",
              "hint": "每 128 列一个 scale,`ceildiv(in_features, block_size)`。"
            }
          }
        }
      ],
      "starter_code": "block_size = 128\nfp4_block_size = 32\n\nclass TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\ndef ceildiv(x, y):\n    return (x + y - 1) // y\n\ndef describe_linear_layout(in_features, out_features, dtype):\n    if dtype == torch.float4_e2m1fn_x2:\n        weight_shape = (out_features, in_features // 2)\n        scale_shape = (out_features, __B_fp4_scale_cols__)\n    elif dtype == torch.float8_e4m3fn:\n        weight_shape = (out_features, in_features)\n        scale_shape = (__B_fp8_scale_rows__, __B_fp8_scale_cols__)\n    else:\n        weight_shape = (out_features, in_features)\n        scale_shape = None\n    return weight_shape, scale_shape\n",
      "validator_code": "def run_checks(ns):\n    describe = ns[\"describe_linear_layout\"]\n    torch = ns[\"torch\"]\n    checks = []\n\n    fp4 = describe(256, 512, torch.float4_e2m1fn_x2)\n    checks.append({\n        \"name\": \"FP4 packed weight + per-32 scale\",\n        \"passed\": fp4 == ((512, 128), (512, 8)),\n        \"expected\": \"((512, 128), (512, 8))\",\n        \"actual\": repr(fp4),\n    })\n\n    fp8 = describe(320, 300, torch.float8_e4m3fn)\n    checks.append({\n        \"name\": \"FP8 per-128 block scale grid\",\n        \"passed\": fp8 == ((300, 320), (3, 3)),\n        \"expected\": \"((300, 320), (3, 3))\",\n        \"actual\": repr(fp8),\n    })\n\n    bf = describe(8, 8, torch.bfloat16)\n    checks.append({\n        \"name\": \"BF16 keeps no scale\",\n        \"passed\": bf == ((8, 8), None),\n        \"expected\": \"((8, 8), None)\",\n        \"actual\": repr(bf),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "block_size = 128\nfp4_block_size = 32\n\nclass TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\ndef ceildiv(x, y):\n    return (x + y - 1) // y\n\ndef describe_linear_layout(in_features, out_features, dtype):\n    if dtype == torch.float4_e2m1fn_x2:\n        weight_shape = (out_features, in_features // 2)\n        scale_shape = (out_features, 1)\n    elif dtype == torch.float8_e4m3fn:\n        weight_shape = (out_features, in_features)\n        scale_shape = (1, 1)\n    else:\n        weight_shape = (out_features, in_features)\n        scale_shape = None\n    return weight_shape, scale_shape\n",
      "solution_runnable": "block_size = 128\nfp4_block_size = 32\n\nclass TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\ndef ceildiv(x, y):\n    return (x + y - 1) // y\n\ndef describe_linear_layout(in_features, out_features, dtype):\n    if dtype == torch.float4_e2m1fn_x2:\n        weight_shape = (out_features, in_features // 2)\n        scale_shape = (out_features, in_features // fp4_block_size)\n    elif dtype == torch.float8_e4m3fn:\n        weight_shape = (out_features, in_features)\n        scale_shape = (ceildiv(out_features, block_size), ceildiv(in_features, block_size))\n    else:\n        weight_shape = (out_features, in_features)\n        scale_shape = None\n    return weight_shape, scale_shape\n",
      "solution_code": "block_size = 128\nfp4_block_size = 32\n\nclass TorchStub:\n    float4_e2m1fn_x2 = \"fp4\"\n    float8_e4m3fn = \"fp8\"\n    bfloat16 = \"bf16\"\n\ntorch = TorchStub()\n\ndef ceildiv(x, y):\n    return (x + y - 1) // y\n\ndef describe_linear_layout(in_features, out_features, dtype):\n    if dtype == torch.float4_e2m1fn_x2:\n        weight_shape = (out_features, in_features // 2)\n        scale_shape = (out_features, in_features // fp4_block_size)\n    elif dtype == torch.float8_e4m3fn:\n        weight_shape = (out_features, in_features)\n        scale_shape = (ceildiv(out_features, block_size), ceildiv(in_features, block_size))\n    else:\n        weight_shape = (out_features, in_features)\n        scale_shape = None\n    return weight_shape, scale_shape\n",
      "reference_code": "class Linear(nn.Module):\n    \"\"\"Linear layer supporting BF16, FP8, and FP4 weight formats with per-block scaling.\"\"\"\n\n    def __init__(self, in_features: int, out_features: int, bias: bool = False, dtype = None):\n        super().__init__()\n        self.in_features = in_features\n        self.out_features = out_features\n        dtype = dtype or default_dtype\n        if dtype == torch.float4_e2m1fn_x2:\n            # FP4: weight is [out, in//2] in float4_e2m1fn_x2, logically [out, in] in fp4\n            # Scale is [out, in//32] in float8_e8m0fnu (1 scale per 32 fp4 elements along K)\n            self.weight = nn.Parameter(torch.empty(out_features, in_features // 2, dtype=torch.float4_e2m1fn_x2))\n            scale_out_features = out_features\n            scale_in_features = in_features // fp4_block_size\n            self.weight.scale = self.scale = nn.Parameter(torch.empty(scale_out_features, scale_in_features, dtype=torch.float8_e8m0fnu))\n        elif dtype == torch.float8_e4m3fn:\n            self.weight = nn.Parameter(torch.empty(out_features, in_features, dtype=dtype))\n            scale_out_features = (out_features + block_size - 1) // block_size\n            scale_in_features = (in_features + block_size - 1) // block_size\n            self.weight.scale = self.scale = nn.Parameter(torch.empty(scale_out_features, scale_in_features, dtype=torch.float8_e8m0fnu))\n        else:\n            self.weight = nn.Parameter(torch.empty(out_features, in_features, dtype=dtype))\n            self.register_parameter(\"scale\", None)\n        if bias:\n            self.bias = nn.Parameter(torch.empty(out_features))\n        else:\n            self.register_parameter(\"bias\", None)\n",
      "puzzle_path": "tutorial/generated/puzzles/02_s02-linear-layout.py",
      "solution_path": "tutorial/generated/solutions/02_s02-linear-layout.py",
      "reference_file_path": "tutorial/generated/references/02_s02-linear-layout.py",
      "workshop_loc": 24,
      "reference_loc": 27,
      "blank_count": 3,
      "i18n": {
        "zh": {
          "title": "权重与 Scale 的物理布局",
          "tagline": "精度在前向开始之前就决定了张量形状。",
          "difficulty": "入门",
          "summary": "`Linear.__init__` 根据 dtype 决定权重的物理形状和 scale 张量的大小。FP4 在一个字节里打包两个值,FP8 则是每 128×128 一个 scale。",
          "what_you_learn": [
            "为什么 FP4 要把两个值塞进一个字节,需要 `in_features // 2` 的存储。",
            "为什么 FP8 每 128×128 一块 scale (两个轴都要 `ceildiv`)。",
            "为什么 BF16 根本不需要 scale 张量。"
          ],
          "workshop_steps": [
            "补上 FP4 的 scale 列数 —— `in_features // fp4_block_size`。",
            "补上 FP8 的 scale 网格 —— 两个轴都 `ceildiv`。",
            "BF16 保持没有 scale。"
          ],
          "pitfalls": [
            "FP4 的块大小是 32 (`fp4_block_size`),和 FP8 的 128 不同。",
            "`ceildiv` 要向上取整,最后一块可能是不完整的。"
          ]
        }
      }
    },
    {
      "id": "i05-linear-forward",
      "order": 200,
      "stage": "foundations",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 151,
      "line_end": 154,
      "title": "Linear.forward — Wire the Dispatcher",
      "tagline": "Two lines, but they bind `Linear` to the precision router.",
      "summary": "`Linear.forward` just calls `linear(x, self.weight, self.bias)`. Because every parallel variant (`ColumnParallelLinear`, `RowParallelLinear`) inherits from `Linear`, *every* weight in the model ends up going through the one dispatcher you built in Lesson 1.",
      "why_it_matters": [
        "This is the keystone: Linear → linear() → {fp4,fp8,BF16} GEMM, no other surface area."
      ],
      "kind": "interlude",
      "reference_code": "    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        return linear(x, self.weight, self.bias)\n",
      "reference_loc": 2,
      "i18n": {
        "zh": {
          "title": "Linear.forward —— 与分发器对接",
          "tagline": "两行代码,却把 `Linear` 绑在了精度路由上。",
          "summary": "`Linear.forward` 直接调用 `linear(x, self.weight, self.bias)`。因为 `ColumnParallelLinear` / `RowParallelLinear` 都继承自 `Linear`,整个模型的每一次线性变换都走同一个 `linear()` 分发器。",
          "why_it_matters": [
            "这是关键接缝:Linear → linear() → {fp4, fp8, BF16} GEMM,别无旁路。"
          ]
        }
      }
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
      "tags": [
        "tensor-parallel",
        "sharding"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 155,
      "line_end": 180,
      "summary": "`ColumnParallelLinear` slices `out_features`; `RowParallelLinear` slices `in_features`. The shard happens in the constructor — by the time `forward()` runs, the weight already has the right local shape.",
      "paper_anchor": {
        "section": "§3.1 Fine-Grained Comm-Compute Overlap",
        "figure": "Figure 2",
        "summary": "Tensor-parallel sharding underpins the fused MoE kernels in §3.1: experts are split across ranks by output dim (column parallel) and later projected back by a row-parallel pass that all-reduces partials."
      },
      "what_you_learn": [
        "Column-parallel: `out_features //= world_size`, each rank holds a tile of the output.",
        "Row-parallel: `in_features //= world_size`, each rank holds a tile of the input, then all-reduce.",
        "Neither path needs to touch the *other* dimension — the split happens on exactly one axis."
      ],
      "workshop_steps": [
        "Shard `out_features` in the column-parallel branch.",
        "Shard `in_features` in the row-parallel branch.",
        "Confirm the plain branch leaves both sizes unchanged."
      ],
      "pitfalls": [
        "Integer divide (`//`) — fractional shards would fail at all-reduce time.",
        "The assertion `features % world_size == 0` is checked before `__init__`; don't duplicate it."
      ],
      "blanks": [
        {
          "id": "col_out",
          "label": "Column-parallel out",
          "hint": "Column-parallel shards the output — `out_features // world_size`.",
          "starter": "out_features",
          "solution": "out_features // world_size",
          "i18n": {
            "zh": {
              "label": "列并行 out_features",
              "hint": "列并行切输出 —— `out_features // world_size`。"
            }
          }
        },
        {
          "id": "row_in",
          "label": "Row-parallel in",
          "hint": "Row-parallel shards the input — `in_features // world_size`.",
          "starter": "in_features",
          "solution": "in_features // world_size",
          "i18n": {
            "zh": {
              "label": "行并行 in_features",
              "hint": "行并行切输入 —— `in_features // world_size`。"
            }
          }
        }
      ],
      "starter_code": "def shard_linear(in_features, out_features, world_size, mode):\n    if mode == \"column\":\n        out_features = __B_col_out__\n    elif mode == \"row\":\n        in_features = __B_row_in__\n    return in_features, out_features\n",
      "validator_code": "def run_checks(ns):\n    shard = ns[\"shard_linear\"]\n    checks = []\n    checks.append({\n        \"name\": \"Column parallel shards output\",\n        \"passed\": shard(1024, 1024, 4, \"column\") == (1024, 256),\n        \"expected\": \"(1024, 256)\",\n        \"actual\": repr(shard(1024, 1024, 4, \"column\")),\n    })\n    checks.append({\n        \"name\": \"Row parallel shards input\",\n        \"passed\": shard(1024, 1024, 4, \"row\") == (256, 1024),\n        \"expected\": \"(256, 1024)\",\n        \"actual\": repr(shard(1024, 1024, 4, \"row\")),\n    })\n    checks.append({\n        \"name\": \"Plain mode leaves both alone\",\n        \"passed\": shard(1024, 1024, 4, \"plain\") == (1024, 1024),\n        \"expected\": \"(1024, 1024)\",\n        \"actual\": repr(shard(1024, 1024, 4, \"plain\")),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def shard_linear(in_features, out_features, world_size, mode):\n    if mode == \"column\":\n        out_features = out_features\n    elif mode == \"row\":\n        in_features = in_features\n    return in_features, out_features\n",
      "solution_runnable": "def shard_linear(in_features, out_features, world_size, mode):\n    if mode == \"column\":\n        out_features = out_features // world_size\n    elif mode == \"row\":\n        in_features = in_features // world_size\n    return in_features, out_features\n",
      "solution_code": "def shard_linear(in_features, out_features, world_size, mode):\n    if mode == \"column\":\n        out_features = out_features // world_size\n    elif mode == \"row\":\n        in_features = in_features // world_size\n    return in_features, out_features\n",
      "reference_code": "class ColumnParallelLinear(Linear):\n    \"\"\"Shards output dim across TP ranks. No all-reduce needed on output.\"\"\"\n    def __init__(self, in_features: int, out_features: int, bias: bool = False, dtype = None):\n        assert out_features % world_size == 0, f\"Output features must be divisible by world size (world_size={world_size})\"\n        self.part_out_features = out_features // world_size\n        super().__init__(in_features, self.part_out_features, bias, dtype)\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        return linear(x, self.weight, self.bias)\n\n\nclass RowParallelLinear(Linear):\n    \"\"\"Shards input dim across TP ranks. All-reduce on output to sum partial results.\"\"\"\n    def __init__(self, in_features: int, out_features: int, bias: bool = False, dtype = None):\n        assert in_features % world_size == 0, f\"Input features must be divisible by world size (world_size={world_size})\"\n        self.part_in_features = in_features // world_size\n        super().__init__(self.part_in_features, out_features, bias, dtype)\n\n    def forward(self, x: torch.Tensor) -> torch.Tensor:\n        y = linear(x, self.weight, None)\n        if world_size > 1:\n            y = y.float()\n            dist.all_reduce(y)\n        if self.bias is not None:\n            y += self.bias\n        return y.type_as(x)\n",
      "puzzle_path": "tutorial/generated/puzzles/03_s03-tp-shard.py",
      "solution_path": "tutorial/generated/solutions/03_s03-tp-shard.py",
      "reference_file_path": "tutorial/generated/references/03_s03-tp-shard.py",
      "workshop_loc": 6,
      "reference_loc": 26,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "行 / 列并行切分",
          "tagline": "在 forward 之前就决定切哪根轴。",
          "difficulty": "入门",
          "summary": "`ColumnParallelLinear` 切 `out_features`,`RowParallelLinear` 切 `in_features`。切分发生在构造器里 —— `forward()` 拿到的已经是本地形状。",
          "what_you_learn": [
            "列并行:`out_features //= world_size`,每个 rank 存一段输出。",
            "行并行:`in_features //= world_size`,每个 rank 存一段输入,再 all-reduce。",
            "两条路都只切一根轴,另一根轴保持原样。"
          ],
          "workshop_steps": [
            "列并行分支切 `out_features`。",
            "行并行分支切 `in_features`。",
            "确认普通分支两根轴都不变。"
          ],
          "pitfalls": [
            "必须用整除 `//`,否则 all-reduce 时会对不齐。",
            "`features % world_size == 0` 的断言在 `__init__` 之前就检查过,不必重复。"
          ]
        }
      }
    },
    {
      "id": "gap-DeepSeek_official/model-py-181-182",
      "kind": "gap",
      "stage": "foundations",
      "track": "DeepSeek_official/model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 181,
      "line_end": 182,
      "title": "Spacer",
      "tagline": "Whitespace between segments.",
      "summary": "Blank lines in the reference — preserved so segments reconstruct the file byte-for-byte.",
      "reference_code": "\n",
      "reference_loc": 1
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
      "tags": [
        "rmsnorm",
        "normalization"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 183,
      "line_end": 196,
      "summary": "DeepSeek-V4 keeps RMSNorm parameters in FP32 even though the checkpoint stores BF16. The computation path is: promote x → compute mean-square → rsqrt → multiply by learned scale → cast back.",
      "paper_anchor": {
        "section": "§2.1 Designs Inherited from DeepSeek-V3",
        "figure": "Figure 2",
        "summary": "RMSNorm is the default norm throughout the hybrid attention / MoE stack; its FP32 recipe is load-bearing for stability when activations live in FP8."
      },
      "what_you_learn": [
        "Why mean-square (not variance) is enough — RMSNorm drops the mean.",
        "Why `rsqrt(var + eps)` avoids divide-by-zero without branching.",
        "Why the scale parameter is elementwise — it isn't a full matrix multiply."
      ],
      "workshop_steps": [
        "Compute the per-row mean square.",
        "Use `rsqrt(var + eps)` to form the inverse-RMS scale.",
        "Multiply by the learned per-dim `weight`."
      ],
      "pitfalls": [
        "`rsqrt` of `var + eps`, not `sqrt(var) + eps` — the epsilon goes INSIDE the sqrt."
      ],
      "blanks": [
        {
          "id": "mean_square",
          "label": "Mean square",
          "hint": "Average of `value * value` across the row.",
          "starter": "sum(value for value in row) / len(row)",
          "solution": "sum(value * value for value in row) / len(row)",
          "i18n": {
            "zh": {
              "label": "均方",
              "hint": "整行 `value * value` 的平均。"
            }
          }
        },
        {
          "id": "inv_rms",
          "label": "Inverse RMS",
          "hint": "`1 / sqrt(var + eps)` — the epsilon lives inside the sqrt.",
          "starter": "1.0",
          "solution": "1.0 / ((var + eps) ** 0.5)",
          "i18n": {
            "zh": {
              "label": "逆 RMS",
              "hint": "`1 / sqrt(var + eps)`,epsilon 在 sqrt 里面。"
            }
          }
        }
      ],
      "starter_code": "def rmsnorm(row, weight, eps=1e-6):\n    var = __B_mean_square__\n    scale = __B_inv_rms__\n    return [weight[i] * row[i] * scale for i in range(len(row))]\n",
      "validator_code": "def run_checks(ns):\n    rmsnorm = ns[\"rmsnorm\"]\n    checks = []\n\n    out = rmsnorm([3.0, 4.0], [1.0, 1.0], eps=0.0)\n    expected = [3.0 / (12.5 ** 0.5), 4.0 / (12.5 ** 0.5)]\n    ok = all(abs(out[i] - expected[i]) < 1e-9 for i in range(2))\n    checks.append({\n        \"name\": \"Unit weight, zero eps\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    })\n\n    out = rmsnorm([1.0, 1.0, 1.0, 1.0], [2.0, 3.0, 4.0, 5.0], eps=0.0)\n    expected = [2.0, 3.0, 4.0, 5.0]\n    ok = all(abs(out[i] - expected[i]) < 1e-9 for i in range(4))\n    checks.append({\n        \"name\": \"Per-dim weight applied\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def rmsnorm(row, weight, eps=1e-6):\n    var = sum(value for value in row) / len(row)\n    scale = 1.0\n    return [weight[i] * row[i] * scale for i in range(len(row))]\n",
      "solution_runnable": "def rmsnorm(row, weight, eps=1e-6):\n    var = sum(value * value for value in row) / len(row)\n    scale = 1.0 / ((var + eps) ** 0.5)\n    return [weight[i] * row[i] * scale for i in range(len(row))]\n",
      "solution_code": "def rmsnorm(row, weight, eps=1e-6):\n    var = sum(value * value for value in row) / len(row)\n    scale = 1.0 / ((var + eps) ** 0.5)\n    return [weight[i] * row[i] * scale for i in range(len(row))]\n",
      "reference_code": "class RMSNorm(nn.Module):\n    def __init__(self, dim: int, eps: float = 1e-6):\n        super().__init__()\n        self.dim = dim\n        self.eps = eps\n        # rmsnorm in the checkpoint is stored in bf16, while the parameter here is stored in fp32 for convenient.\n        self.weight = nn.Parameter(torch.ones(dim, dtype=torch.float32))\n\n    def forward(self, x: torch.Tensor):\n        dtype = x.dtype\n        x = x.float()\n        var = x.square().mean(-1, keepdim=True)\n        x = x * torch.rsqrt(var + self.eps)\n        return (self.weight * x).to(dtype)\n",
      "puzzle_path": "tutorial/generated/puzzles/04_s04-rmsnorm.py",
      "solution_path": "tutorial/generated/solutions/04_s04-rmsnorm.py",
      "reference_file_path": "tutorial/generated/references/04_s04-rmsnorm.py",
      "workshop_loc": 4,
      "reference_loc": 14,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "Float32 RMSNorm",
          "tagline": "方差 → rsqrt → 逐维缩放,先升到 FP32。",
          "difficulty": "入门",
          "summary": "DeepSeek-V4 虽然 checkpoint 里 RMSNorm 权重是 BF16,但参数在内存里是 FP32。计算流程是:x 升到 FP32 → 算均方 → rsqrt → 乘上 learned scale → 再转回原 dtype。",
          "what_you_learn": [
            "为什么 mean-square 就够了 —— RMSNorm 直接丢掉均值。",
            "为什么 `rsqrt(var + eps)` 能无分支避免除零。",
            "为什么 scale 是逐维的,并不是一次矩阵乘。"
          ],
          "workshop_steps": [
            "算每一行的均方。",
            "用 `rsqrt(var + eps)` 得到逆 RMS。",
            "乘上 learned 的逐维 `weight`。"
          ],
          "pitfalls": [
            "是 `rsqrt(var + eps)`,不是 `sqrt(var) + eps` —— epsilon 要在 sqrt 里面。"
          ]
        }
      }
    },
    {
      "id": "i06-precompute-helpers",
      "order": 300,
      "stage": "rotary",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 197,
      "line_end": 219,
      "title": "YaRN — Correction-Range Helpers",
      "tagline": "`find_correction_range` + `linear_ramp_factor`.",
      "summary": "Before `precompute_freqs_cis` computes the base RoPE table it stashes three nested helpers. `find_correction_dim` inverts the RoPE period equation to ask 'at what embedding dim does frequency θᵈ complete N rotations across `max_seq_len`?'. `find_correction_range` clamps the low/high answer into `[0, dim-1]`. `linear_ramp_factor` produces the soft window between them so low-frequency dims are interpolated and high-frequency ones are left alone.",
      "why_it_matters": [
        "These three helpers implement §3 of the YaRN paper almost verbatim.",
        "Without the linear ramp the scaled freqs would have visible kinks at the boundaries."
      ],
      "kind": "interlude",
      "reference_code": "\n\n@lru_cache(2)\ndef precompute_freqs_cis(dim, seqlen, original_seq_len, base, factor, beta_fast, beta_slow) -> torch.Tensor:\n    \"\"\"Precomputes complex exponentials for rotary embeddings with YaRN scaling.\n    When original_seq_len > 0, applies frequency interpolation with a smooth\n    linear ramp between beta_fast and beta_slow correction ranges.\"\"\"\n\n    def find_correction_dim(num_rotations, dim, base, max_seq_len):\n        return dim * math.log(max_seq_len / (num_rotations * 2 * math.pi)) / (2 * math.log(base))\n\n    def find_correction_range(low_rot, high_rot, dim, base, max_seq_len):\n        low = math.floor(find_correction_dim(low_rot, dim, base, max_seq_len))\n        high = math.ceil(find_correction_dim(high_rot, dim, base, max_seq_len))\n        return max(low, 0), min(high, dim-1)\n\n    def linear_ramp_factor(min, max, dim):\n        if min == max:\n            max += 0.001\n        linear_func = (torch.arange(dim, dtype=torch.float32) - min) / (max - min)\n        ramp_func = torch.clamp(linear_func, 0, 1)\n        return ramp_func\n",
      "reference_loc": 22,
      "i18n": {
        "zh": {
          "title": "YaRN —— 修正区间辅助函数",
          "tagline": "`find_correction_range` 与 `linear_ramp_factor`。",
          "summary": "`precompute_freqs_cis` 在计算基础 RoPE 表之前定义了三个嵌套工具。`find_correction_dim` 反解 RoPE 的周期方程,回答“哪一维频率在 `max_seq_len` 内正好完成 N 次旋转”;`find_correction_range` 把答案 clip 到 `[0, dim-1]`;`linear_ramp_factor` 在上下界之间画一条线性斜坡,用来做低频 / 高频之间的软过渡。",
          "why_it_matters": [
            "这三个函数基本逐字实现了 YaRN 论文的第 3 节。",
            "没有这条线性斜坡,缩放后的频率在边界会出现肉眼可见的折角。"
          ]
        }
      }
    },
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
      "tags": [
        "rope",
        "yarn"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 220,
      "line_end": 220,
      "summary": "RoPE's building block is a geometric frequency table: for each pair index `i`, the frequency is `1 / base^(i / dim)`. DeepSeek-V4 precomputes it once then multiplies by position to get the rotation angle grid.",
      "paper_anchor": {
        "section": "§2.3 Hybrid Attention",
        "figure": "Figure 3 — CSA (query-key rotation)",
        "summary": "RoPE is the positional basis shared by the dense sliding-window part and the compressed KV path in CSA. Getting the frequency table right is a prerequisite for every later positional transform in the paper."
      },
      "what_you_learn": [
        "Why the exponent walks over EVEN indices — each pair `(2i, 2i+1)` shares one frequency.",
        "Why `base = 10000` is the classical choice and how it controls frequency decay."
      ],
      "workshop_steps": [
        "Produce one frequency per even pair index.",
        "Match the formula `1 / base^(i/dim)` exactly."
      ],
      "pitfalls": [
        "`range(0, dim, 2)` — step of 2 because each frequency governs a 2-D rotation."
      ],
      "blanks": [
        {
          "id": "freq_formula",
          "label": "Base frequency",
          "hint": "Compute `1 / (base ** (i / dim))` for the current even index `i`.",
          "starter": "0.0",
          "solution": "1.0 / (base ** (i / dim))",
          "i18n": {
            "zh": {
              "label": "基础频率公式",
              "hint": "对当前偶数索引 `i`,计算 `1 / (base ** (i / dim))`。"
            }
          }
        }
      ],
      "starter_code": "def build_base_freqs(dim, base):\n    freqs = []\n    for i in range(0, dim, 2):\n        freqs.append(__B_freq_formula__)\n    return freqs\n",
      "validator_code": "def run_checks(ns):\n    build_base_freqs = ns[\"build_base_freqs\"]\n    checks = []\n\n    freqs = build_base_freqs(8, 10000.0)\n    expected = [1.0, 0.1, 0.01, 0.001]\n    ok = len(freqs) == 4 and all(abs(a - b) < 1e-9 for a, b in zip(freqs, expected))\n    checks.append({\n        \"name\": \"Standard RoPE(8, 10000)\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(freqs),\n    })\n\n    freqs = build_base_freqs(4, 100.0)\n    expected = [1.0, 0.1]\n    ok = all(abs(a - b) < 1e-9 for a, b in zip(freqs, expected))\n    checks.append({\n        \"name\": \"Alternate base/dim\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(freqs),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def build_base_freqs(dim, base):\n    freqs = []\n    for i in range(0, dim, 2):\n        freqs.append(0.0)\n    return freqs\n",
      "solution_runnable": "def build_base_freqs(dim, base):\n    freqs = []\n    for i in range(0, dim, 2):\n        freqs.append(1.0 / (base ** (i / dim)))\n    return freqs\n",
      "solution_code": "def build_base_freqs(dim, base):\n    freqs = []\n    for i in range(0, dim, 2):\n        freqs.append(1.0 / (base ** (i / dim)))\n    return freqs\n",
      "reference_code": "    freqs = 1.0 / (base ** (torch.arange(0, dim, 2, dtype=torch.float32) / dim))\n",
      "puzzle_path": "tutorial/generated/puzzles/05_s05-yarn-base-freqs.py",
      "solution_path": "tutorial/generated/solutions/05_s05-yarn-base-freqs.py",
      "reference_file_path": "tutorial/generated/references/05_s05-yarn-base-freqs.py",
      "workshop_loc": 5,
      "reference_loc": 1,
      "blank_count": 1,
      "i18n": {
        "zh": {
          "title": "RoPE 基础频率",
          "tagline": "YaRN 拉伸之前,先得有一张标准频率表。",
          "difficulty": "核心",
          "summary": "RoPE 的基石是一张几何递减的频率表:每个索引对 `i`,频率 θ_i = base^(-2i/dim)。这就是原版 RoPE 的公式。",
          "what_you_learn": [
            "为什么频率对维度呈几何递减 —— 低维对应低频(长周期),高维对应高频(短周期)。",
            "`torch.arange(0, dim, 2)` 为什么跳步 —— 每两个维度共用一个旋转角。",
            "频率表为什么可以 `@lru_cache(2)` —— 它只依赖 dim 和 base,不依赖输入。"
          ],
          "workshop_steps": [
            "对每个偶数索引 `i`,写出 `1 / (base ** (i / dim))`。",
            "确认步长是 2,频率表长度为 `dim // 2`。"
          ],
          "pitfalls": [
            "步长是 2,不是 1 —— 频率表长度是 `dim // 2`。",
            "一定要是 FP32,否则 BF16 下分母会溢出。"
          ]
        }
      }
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
      "tags": [
        "rope",
        "yarn",
        "long-context"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 221,
      "line_end": 229,
      "summary": "YaRN interpolates each base frequency toward `freq / factor` via a per-band smoothing curve. When `smooth[i] = 0`, that band is fully stretched; when `smooth[i] = 1`, the original RoPE frequency survives.",
      "paper_anchor": {
        "section": "§2.3.3 Other Details",
        "figure": "Figure 3",
        "summary": "DeepSeek-V4 uses YaRN to push the trained RoPE table out to 1M-token context without retraining. The linear-ramp smooth mask below is the mechanism that selectively protects high-frequency bands."
      },
      "what_you_learn": [
        "Why the interpolation is a convex combination `freq/factor·(1−s) + freq·s`.",
        "Why the smooth mask — not the factor — is the per-band knob.",
        "How the outer product with `t` produces the final angle grid."
      ],
      "workshop_steps": [
        "Write the convex combination for each band.",
        "Scan `t` from 0..seqlen to build the outer product grid."
      ],
      "pitfalls": [
        "`smooth_value = 0` should FULLY stretch (divide by `factor`), not leave alone."
      ],
      "blanks": [
        {
          "id": "yarn_mix",
          "label": "YaRN mix",
          "hint": "Convex combination: `freq / factor * (1 - smooth_value) + freq * smooth_value`.",
          "starter": "freq",
          "solution": "freq / factor * (1 - smooth_value) + freq * smooth_value",
          "i18n": {
            "zh": {
              "label": "YaRN 凸组合",
              "hint": "`freq / factor * (1 - smooth_value) + freq * smooth_value`。"
            }
          }
        },
        {
          "id": "angle_row",
          "label": "Position × frequency row",
          "hint": "For each time step `t`, return `[t * f for f in freqs]`.",
          "starter": "[0.0 for _ in freqs]",
          "solution": "[t * freq for freq in freqs]",
          "i18n": {
            "zh": {
              "label": "位置 × 频率行",
              "hint": "对每个时间步 `t`,返回 `[t * f for f in freqs]`。"
            }
          }
        }
      ],
      "starter_code": "def apply_yarn(freqs, factor, smooth):\n    adjusted = []\n    for freq, smooth_value in zip(freqs, smooth):\n        adjusted.append(__B_yarn_mix__)\n    return adjusted\n\ndef build_angle_grid(seqlen, freqs):\n    grid = []\n    for t in range(seqlen):\n        grid.append(__B_angle_row__)\n    return grid\n",
      "validator_code": "def run_checks(ns):\n    apply_yarn = ns[\"apply_yarn\"]\n    build_angle_grid = ns[\"build_angle_grid\"]\n    checks = []\n\n    adjusted = apply_yarn([1.0, 0.5], 4.0, [0.0, 1.0])\n    checks.append({\n        \"name\": \"smooth=0 stretches, smooth=1 preserves\",\n        \"passed\": abs(adjusted[0] - 0.25) < 1e-9 and abs(adjusted[1] - 0.5) < 1e-9,\n        \"expected\": \"[0.25, 0.5]\",\n        \"actual\": repr(adjusted),\n    })\n\n    grid = build_angle_grid(3, [1.0, 0.5])\n    expected = [[0.0, 0.0], [1.0, 0.5], [2.0, 1.0]]\n    checks.append({\n        \"name\": \"Outer product grid\",\n        \"passed\": grid == expected,\n        \"expected\": repr(expected),\n        \"actual\": repr(grid),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def apply_yarn(freqs, factor, smooth):\n    adjusted = []\n    for freq, smooth_value in zip(freqs, smooth):\n        adjusted.append(freq)\n    return adjusted\n\ndef build_angle_grid(seqlen, freqs):\n    grid = []\n    for t in range(seqlen):\n        grid.append([0.0 for _ in freqs])\n    return grid\n",
      "solution_runnable": "def apply_yarn(freqs, factor, smooth):\n    adjusted = []\n    for freq, smooth_value in zip(freqs, smooth):\n        adjusted.append(freq / factor * (1 - smooth_value) + freq * smooth_value)\n    return adjusted\n\ndef build_angle_grid(seqlen, freqs):\n    grid = []\n    for t in range(seqlen):\n        grid.append([t * freq for freq in freqs])\n    return grid\n",
      "solution_code": "def apply_yarn(freqs, factor, smooth):\n    adjusted = []\n    for freq, smooth_value in zip(freqs, smooth):\n        adjusted.append(freq / factor * (1 - smooth_value) + freq * smooth_value)\n    return adjusted\n\ndef build_angle_grid(seqlen, freqs):\n    grid = []\n    for t in range(seqlen):\n        grid.append([t * freq for freq in freqs])\n    return grid\n",
      "reference_code": "    if original_seq_len > 0:\n        low, high = find_correction_range(beta_fast, beta_slow, dim, base, original_seq_len)\n        smooth = 1 - linear_ramp_factor(low, high, dim // 2)\n        freqs = freqs / factor * (1 - smooth) + freqs * smooth\n\n    t = torch.arange(seqlen)\n    freqs = torch.outer(t, freqs)\n    freqs_cis = torch.polar(torch.ones_like(freqs), freqs)\n    return freqs_cis\n",
      "puzzle_path": "tutorial/generated/puzzles/06_s06-yarn-smooth.py",
      "solution_path": "tutorial/generated/solutions/06_s06-yarn-smooth.py",
      "reference_file_path": "tutorial/generated/references/06_s06-yarn-smooth.py",
      "workshop_loc": 11,
      "reference_loc": 9,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "YaRN 平滑插值",
          "tagline": "低频拉伸 `1/factor`,高频保持原样,中间用线性斜坡。",
          "difficulty": "核心",
          "summary": "要扩展上下文长度时,YaRN 按频率打分:低频维度整体除以 `factor`,高频维度保持,中间区间用 `linear_ramp_factor` 做线性过渡。最后用 `outer(t, freqs)` 乘上时间步,送去 `polar`。",
          "what_you_learn": [
            "为什么只压缩低频 —— 模型已经在原长度上学会了高频,不要扰动。",
            "`smooth` 为什么要 clip 到 `[0, 1]` —— 边界外的频率维度要么完全拉伸、要么完全保留。",
            "`t · freqs` 的外积如何生成每个时间步的角度。"
          ],
          "workshop_steps": [
            "`original_seq_len > 0` 时进入 YaRN 分支。",
            "写出凸组合:`freq / factor * (1 - smooth) + freq * smooth`。",
            "对每个时间步 `t`,返回 `[t * f for f in freqs]`。"
          ],
          "pitfalls": [
            "凸组合括号写错会导致低频和高频颠倒。",
            "`linear_ramp_factor(min, max, dim)` 的顺序,是先算再 clamp。"
          ]
        }
      }
    },
    {
      "id": "gap-DeepSeek_official/model-py-230-231",
      "kind": "gap",
      "stage": "rotary",
      "track": "DeepSeek_official/model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 230,
      "line_end": 231,
      "title": "Spacer",
      "tagline": "Whitespace between segments.",
      "summary": "Blank lines in the reference — preserved so segments reconstruct the file byte-for-byte.",
      "reference_code": "\n",
      "reference_loc": 1
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
      "tags": [
        "rotary",
        "complex"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 232,
      "line_end": 244,
      "summary": "Each rotary step treats the last dimension as an array of (x, y) complex pairs, multiplies by the precomputed `freqs_cis`, and (optionally) takes the conjugate to reverse the rotation — that's exactly what CSA needs after attention.",
      "paper_anchor": {
        "section": "§2.3.1 Compressed Sparse Attention",
        "figure": "Figure 3",
        "summary": "DSA-style attention rotates both Q and K in CSA, then *unrotates* the attention output via the inverse path so that the residual stream stays un-rotated — this conjugate trick replaces a second matrix parameter."
      },
      "what_you_learn": [
        "Why inverse rotation is just the complex conjugate — no separate coefficients.",
        "Why packing (x, y) into a single complex number keeps the math one line."
      ],
      "workshop_steps": [
        "Conjugate each entry of `freqs_cis` in the inverse branch.",
        "Multiply each 2-D pair by the corresponding frequency."
      ],
      "pitfalls": [
        "`complex(x, y)` — the real part comes first.",
        "`freq_row[pair_index // 2]` — one frequency per PAIR, not per element."
      ],
      "blanks": [
        {
          "id": "inverse_conj",
          "label": "Inverse → conjugate",
          "hint": "Inverse rotation uses `conjugate(value)` across every `freqs_cis` entry.",
          "starter": "value",
          "solution": "conjugate(value)",
          "i18n": {
            "zh": {
              "label": "逆旋转共轭",
              "hint": "逆旋转对每个 `freqs_cis` 取 `conjugate(value)`。"
            }
          }
        },
        {
          "id": "complex_mul",
          "label": "Complex multiply",
          "hint": "Rotate one pair: `z * factor`.",
          "starter": "z",
          "solution": "z * factor",
          "i18n": {
            "zh": {
              "label": "复数乘法",
              "hint": "旋转一对:`z * factor`。"
            }
          }
        }
      ],
      "starter_code": "def conjugate(z):\n    return complex(z.real, -z.imag)\n\ndef apply_rotary_emb(vectors, freqs_cis, inverse=False):\n    if inverse:\n        freqs_cis = [[__B_inverse_conj__ for value in row] for row in freqs_cis]\n\n    output = []\n    for vector, freq_row in zip(vectors, freqs_cis):\n        rotated = []\n        for pair_index in range(0, len(vector), 2):\n            z = complex(vector[pair_index], vector[pair_index + 1])\n            factor = freq_row[pair_index // 2]\n            y = __B_complex_mul__\n            rotated.extend([round(y.real, 6), round(y.imag, 6)])\n        output.append(rotated)\n    return output\n",
      "validator_code": "def run_checks(ns):\n    apply_rotary_emb = ns[\"apply_rotary_emb\"]\n    checks = []\n\n    freq = complex(0.0, 1.0)\n    forward = apply_rotary_emb([[1.0, 0.0, 0.0, 1.0]], [[freq, freq]])\n    checks.append({\n        \"name\": \"90° rotation\",\n        \"passed\": forward == [[0.0, 1.0, -1.0, 0.0]],\n        \"expected\": \"[[0.0, 1.0, -1.0, 0.0]]\",\n        \"actual\": repr(forward),\n    })\n\n    inverse = apply_rotary_emb(forward, [[freq, freq]], inverse=True)\n    checks.append({\n        \"name\": \"Inverse via conjugate\",\n        \"passed\": inverse == [[1.0, 0.0, 0.0, 1.0]],\n        \"expected\": \"[[1.0, 0.0, 0.0, 1.0]]\",\n        \"actual\": repr(inverse),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def conjugate(z):\n    return complex(z.real, -z.imag)\n\ndef apply_rotary_emb(vectors, freqs_cis, inverse=False):\n    if inverse:\n        freqs_cis = [[value for value in row] for row in freqs_cis]\n\n    output = []\n    for vector, freq_row in zip(vectors, freqs_cis):\n        rotated = []\n        for pair_index in range(0, len(vector), 2):\n            z = complex(vector[pair_index], vector[pair_index + 1])\n            factor = freq_row[pair_index // 2]\n            y = z\n            rotated.extend([round(y.real, 6), round(y.imag, 6)])\n        output.append(rotated)\n    return output\n",
      "solution_runnable": "def conjugate(z):\n    return complex(z.real, -z.imag)\n\ndef apply_rotary_emb(vectors, freqs_cis, inverse=False):\n    if inverse:\n        freqs_cis = [[conjugate(value) for value in row] for row in freqs_cis]\n\n    output = []\n    for vector, freq_row in zip(vectors, freqs_cis):\n        rotated = []\n        for pair_index in range(0, len(vector), 2):\n            z = complex(vector[pair_index], vector[pair_index + 1])\n            factor = freq_row[pair_index // 2]\n            y = z * factor\n            rotated.extend([round(y.real, 6), round(y.imag, 6)])\n        output.append(rotated)\n    return output\n",
      "solution_code": "def conjugate(z):\n    return complex(z.real, -z.imag)\n\ndef apply_rotary_emb(vectors, freqs_cis, inverse=False):\n    if inverse:\n        freqs_cis = [[conjugate(value) for value in row] for row in freqs_cis]\n\n    output = []\n    for vector, freq_row in zip(vectors, freqs_cis):\n        rotated = []\n        for pair_index in range(0, len(vector), 2):\n            z = complex(vector[pair_index], vector[pair_index + 1])\n            factor = freq_row[pair_index // 2]\n            y = z * factor\n            rotated.extend([round(y.real, 6), round(y.imag, 6)])\n        output.append(rotated)\n    return output\n",
      "reference_code": "def apply_rotary_emb(x: torch.Tensor, freqs_cis: torch.Tensor, inverse: bool = False) -> torch.Tensor:\n    \"\"\"Applies rotary positional embeddings in-place. Uses conjugate for inverse (de-rotation).\"\"\"\n    y = x\n    x = torch.view_as_complex(x.float().unflatten(-1, (-1, 2)))\n    if inverse:\n        freqs_cis = freqs_cis.conj()\n    if x.ndim == 3:\n        freqs_cis = freqs_cis.view(1, x.size(1), x.size(-1))\n    else:\n        freqs_cis = freqs_cis.view(1, x.size(1), 1, x.size(-1))\n    x = torch.view_as_real(x * freqs_cis).flatten(-2)\n    y.copy_(x)\n    return y\n",
      "puzzle_path": "tutorial/generated/puzzles/07_s07-apply-rotary.py",
      "solution_path": "tutorial/generated/solutions/07_s07-apply-rotary.py",
      "reference_file_path": "tutorial/generated/references/07_s07-apply-rotary.py",
      "workshop_loc": 17,
      "reference_loc": 13,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "旋转位置编码的施加",
          "tagline": "相邻两维看作复数,乘上 freqs_cis。",
          "difficulty": "核心",
          "summary": "`apply_rotary_emb` 把 `x` 的最后两维看成复数对,乘上 `freqs_cis`,再拍回实数。`inverse=True` 时取共轭 —— 这是把注意力输出从 RoPE 空间反旋回模型空间的方式。",
          "what_you_learn": [
            "相邻两维如何打包成复数 —— `view_as_complex` + `unflatten`。",
            "为什么 `inverse=True` 只需对 `freqs_cis` 取共轭。",
            "复数乘法 `z * factor` 本质就是旋转 + 缩放。"
          ],
          "workshop_steps": [
            "`inverse=True` 时对每一个 `freqs_cis` 取共轭。",
            "把 x 的相邻两维复数化,和 factor 相乘。"
          ],
          "pitfalls": [
            "必须先转 FP32 再做复数化,否则 BF16 精度不够。",
            "`y.copy_(x)` 是 in-place 写回,共享存储。"
          ]
        }
      }
    },
    {
      "id": "i07-rotate-activation",
      "order": 400,
      "stage": "attention",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 245,
      "line_end": 253,
      "title": "Randomized Hadamard Rotation",
      "tagline": "Spread per-feature amplitude before FP8 quantization.",
      "summary": "Activations that are about to be FP8-quantized get a Hadamard rotation first. By spreading mass across channels, the per-block absmax is less spiky and the per-block scale quantizes the signal much better. It is applied to Q and KV paths inside the lightning indexer.",
      "why_it_matters": [
        "Hadamard transforms preserve norms (orthogonal), so information isn't lost.",
        "The external `fast_hadamard_transform` package is used for speed; the spec is standard."
      ],
      "kind": "interlude",
      "reference_code": "\n\ndef rotate_activation(x: torch.Tensor) -> torch.Tensor:\n    \"\"\"Applies randomized Hadamard rotation to spread information across dims before FP8 quant.\"\"\"\n    assert x.dtype == torch.bfloat16\n    from fast_hadamard_transform import hadamard_transform\n    return hadamard_transform(x, scale=x.size(-1) ** -0.5)\n",
      "reference_loc": 7,
      "i18n": {
        "zh": {
          "title": "随机化 Hadamard 旋转",
          "tagline": "在 FP8 量化之前把逐通道幅值均摊开。",
          "summary": "即将被 FP8 量化的激活先做一次 Hadamard 旋转。旋转保范,但会把能量从个别 spike 通道均摊到所有通道,让每块的 absmax 更平稳,scale 选取更精确。在闪电索引器的 Q / KV 路径上使用。",
          "why_it_matters": [
            "Hadamard 是正交变换,保 L2 范数,不会丢信息。",
            "外部 `fast_hadamard_transform` 库提供 CUDA kernel,算法本身是标准的。"
          ]
        }
      }
    },
    {
      "id": "i08-topk-helpers",
      "order": 401,
      "stage": "attention",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 254,
      "line_end": 277,
      "title": "Window + Compressed Top-k Index Builders",
      "tagline": "Pre-bake the ring-buffer index patterns once and reuse.",
      "summary": "Two `@lru_cache`-memoised helpers compute the causal top-k index matrices used by sparse attention. `get_window_topk_idxs` emits the sliding-window index map, handling the ring-buffer rotation for decode. `get_compress_topk_idxs` emits the index map over the compressed KV cache for the levels that use non-indexed compression (i.e. `compress_ratio != 4`).",
      "why_it_matters": [
        "Both are trained on *positions*, not values — caching them avoids rebuilding every step.",
        "The `-1` sentinel is how we encode 'don't attend' before the kernel sees it."
      ],
      "kind": "interlude",
      "reference_code": "@lru_cache(1)\ndef get_window_topk_idxs(window_size: int, bsz: int, seqlen: int, start_pos: int):\n    if start_pos >= window_size - 1:\n        start_pos %= window_size\n        matrix = torch.cat([torch.arange(start_pos + 1, window_size),  torch.arange(0, start_pos + 1)], dim=0)\n    elif start_pos > 0:\n        matrix = F.pad(torch.arange(start_pos + 1), (0, window_size - start_pos - 1), value=-1)\n    else:\n        base = torch.arange(seqlen).unsqueeze(1)\n        matrix = (base - window_size + 1).clamp(0) + torch.arange(min(seqlen, window_size))\n        matrix = torch.where(matrix > base, -1, matrix)\n    return matrix.unsqueeze(0).expand(bsz, -1, -1)\n\n\n@lru_cache(2)\ndef get_compress_topk_idxs(ratio: int, bsz: int, seqlen: int, start_pos: int, offset: int):\n    if start_pos > 0:\n        matrix = torch.arange(0, (start_pos + 1) // ratio) + offset\n    else:\n        matrix = torch.arange(seqlen // ratio).repeat(seqlen, 1)\n        mask = matrix >= torch.arange(1, seqlen + 1).unsqueeze(1) // ratio\n        matrix = torch.where(mask, -1, matrix + offset)\n    return matrix.unsqueeze(0).expand(bsz, -1, -1)\n",
      "reference_loc": 23,
      "i18n": {
        "zh": {
          "title": "窗口 / 压缩 Top-k 索引构建",
          "tagline": "提前把位置索引构建好,重复利用。",
          "summary": "两个 `@lru_cache` 缓存的工具函数构造稀疏注意力用的 top-k 索引矩阵。`get_window_topk_idxs` 输出滑动窗口的索引映射 (decode 下带 ring-buffer 旋转);`get_compress_topk_idxs` 输出静态压缩的索引映射 (用在 `compress_ratio != 4` 的层)。",
          "why_it_matters": [
            "二者只依赖位置,不依赖激活,所以 lru_cache 能命中。",
            "`-1` 哨兵值表示“不要注意这里”,交给 kernel 去掩掉。"
          ]
        }
      }
    },
    {
      "id": "i09-compressor-init",
      "order": 402,
      "stage": "attention",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 278,
      "line_end": 315,
      "title": "Compressor — State & Overlap Transform",
      "tagline": "Learned gated pooling over `compress_ratio` consecutive tokens.",
      "summary": "`Compressor.__init__` allocates its three learnable matrices (`ape`, `wkv`, `wgate`), the per-head `norm`, and — crucially — two state buffers `kv_state` and `score_state` that carry decode-time partial windows across forward calls. When `compress_ratio == 4` an extra `overlap` flag doubles the buffer so the compressor sees overlapping windows. `overlap_transform` reshapes the raw `[b, s, r, 2d]` gated outputs into a 2r stride pattern suitable for that overlap.",
      "why_it_matters": [
        "The two state buffers make this module stateful across decode steps — watch for aliasing bugs.",
        "`self.kv_cache` is set *from the Attention outside*, not in `__init__`."
      ],
      "kind": "interlude",
      "reference_code": "\nclass Compressor(nn.Module):\n    \"\"\"Compresses KV cache via learned gated pooling over `compress_ratio` consecutive tokens.\n    When overlap=True (ratio==4), uses overlapping windows for smoother compression boundaries.\"\"\"\n\n    def __init__(self, args: ModelArgs, compress_ratio: int = 4, head_dim: int = 512, rotate: bool = False):\n        super().__init__()\n        self.dim = args.dim\n        self.head_dim = head_dim\n        self.rope_head_dim = args.rope_head_dim\n        self.nope_head_dim = head_dim - args.rope_head_dim\n        self.compress_ratio = compress_ratio\n        self.overlap = compress_ratio == 4\n        self.rotate = rotate\n        coff = 1 + self.overlap\n\n        self.ape = nn.Parameter(torch.empty(compress_ratio, coff * self.head_dim, dtype=torch.float32))\n        # wkv and wgate in the checkpoint is stored in bf16, while the parameter here is stored in fp32 for convenient.\n        # When overlap, the first half of dims is for overlapping compression, second half for normal.\n        self.wkv = Linear(self.dim, coff * self.head_dim, dtype=torch.float32)\n        self.wgate = Linear(self.dim, coff * self.head_dim, dtype=torch.float32)\n        self.norm = RMSNorm(self.head_dim, args.norm_eps)\n        self.kv_cache: torch.Tensor = None  # assigned lazily from Attention.kv_cache\n        # State buffers for decode-phase incremental compression.\n        # With overlap: state[:, :ratio] = overlapping window, state[:, ratio:] = current window.\n        self.register_buffer(\"kv_state\", torch.zeros(args.max_batch_size, coff * compress_ratio, coff * self.head_dim, dtype=torch.float32), persistent=False)\n        self.register_buffer(\"score_state\", torch.full((args.max_batch_size, coff * compress_ratio, coff * self.head_dim), float(\"-inf\"), dtype=torch.float32), persistent=False)\n        self.freqs_cis: torch.Tensor = None\n\n    def overlap_transform(self, tensor: torch.Tensor, value=0):\n        # tensor: [b,s,r,2d]\n        b, s, _, _ = tensor.size()\n        ratio, d = self.compress_ratio, self.head_dim\n        new_tensor = tensor.new_full((b, s, 2 * ratio, d), value)\n        new_tensor[:, :, ratio:] = tensor[:, :, :, d:]\n        new_tensor[:, 1:, :ratio] = tensor[:, :-1, :, :d]\n        return new_tensor\n",
      "reference_loc": 37,
      "i18n": {
        "zh": {
          "title": "Compressor —— 状态与 overlap_transform",
          "tagline": "按 `compress_ratio` 做可学习的门控池化。",
          "summary": "`Compressor.__init__` 分配三个可学习矩阵 (`ape`、`wkv`、`wgate`)、逐 head 的 `norm`,以及关键的两个状态缓冲 `kv_state`、`score_state` —— 它们在 decode 阶段跨 forward 调用保留部分窗口。当 `compress_ratio == 4` 时开启 `overlap`,缓冲翻倍以支持重叠窗口。`overlap_transform` 把 `[b, s, r, 2d]` 的门控张量重排成 2r 步长形式。",
          "why_it_matters": [
            "两个状态缓冲让这个模块在 decode 之间携带状态 —— 要小心别名(aliasing)问题。",
            "`self.kv_cache` 是由外层 Attention 写入的,不在 __init__ 中创建。"
          ]
        }
      }
    },
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
      "tags": [
        "csa",
        "compressor"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 316,
      "line_end": 342,
      "summary": "In prefill the Compressor slices the sequence into fixed `ratio`-sized windows, softmaxes the learned score tensor *along the window*, and reduces each window into a single compressed KV entry.",
      "paper_anchor": {
        "section": "§2.3.1 Compressed Sparse Attention — eq. (11) & (12)",
        "figure": "Figure 3",
        "summary": "This is the central equation behind CSA: per-window softmax over `Z`, then a Hadamard-weighted sum of `C` — reducing n tokens into n/m compressed entries."
      },
      "what_you_learn": [
        "Why the softmax goes along the WINDOW axis — it redistributes weight across the m entries, not across features.",
        "Why an incomplete trailing window must be skipped (saved into `kv_state` instead)."
      ],
      "workshop_steps": [
        "Decide `should_compress` — need at least one full window.",
        "Softmax-pool each full window into one compressed KV row."
      ],
      "pitfalls": [
        "Softmax goes along dim=1 (window), not dim=0 (sequence) or dim=-1 (features)."
      ],
      "blanks": [
        {
          "id": "should_compress",
          "label": "Enough tokens?",
          "hint": "`len(kv_rows) >= ratio` — at least one complete window is available.",
          "starter": "False",
          "solution": "len(kv_rows) >= ratio",
          "i18n": {
            "zh": {
              "label": "窗口充足判断",
              "hint": "`len(kv_rows) >= ratio` —— 至少凑出一个完整窗口。"
            }
          }
        },
        {
          "id": "pool_window",
          "label": "Weighted pooling",
          "hint": "Call `weighted_sum(window_kv, weights)` where `weights = softmax(window_scores)`.",
          "starter": "[0.0 for _ in window_kv[0]]",
          "solution": "weighted_sum(window_kv, weights)",
          "i18n": {
            "zh": {
              "label": "窗口加权池化",
              "hint": "`weighted_sum(window_kv, weights)`,`weights = softmax(window_scores)`。"
            }
          }
        }
      ],
      "starter_code": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef weighted_sum(vectors, weights):\n    cols = len(vectors[0])\n    return [sum(vectors[row][col] * weights[row] for row in range(len(vectors))) for col in range(cols)]\n\ndef compress_prefill(kv_rows, score_rows, ratio):\n    if not __B_should_compress__:\n        return None\n    compressed = []\n    for start in range(0, len(kv_rows), ratio):\n        window_kv = kv_rows[start:start + ratio]\n        window_scores = score_rows[start:start + ratio]\n        if len(window_kv) < ratio:\n            break\n        weights = softmax(window_scores)\n        compressed.append(__B_pool_window__)\n    return compressed\n",
      "validator_code": "def run_checks(ns):\n    compress_prefill = ns[\"compress_prefill\"]\n    checks = []\n\n    not_ready = compress_prefill([[1.0, 1.0]], [0.0], 2)\n    checks.append({\n        \"name\": \"Short prefill returns None\",\n        \"passed\": not_ready is None,\n        \"expected\": \"None\",\n        \"actual\": repr(not_ready),\n    })\n\n    kv = [[1.0, 0.0], [3.0, 0.0], [0.0, 2.0], [0.0, 6.0]]\n    scores = [0.0, 1.0, 0.0, 1.0]\n    out = compress_prefill(kv, scores, 2)\n    expected = [[2.4621171572600096, 0.0], [0.0, 4.924234314520019]]\n    ok = out is not None and all(\n        abs(out[i][j] - expected[i][j]) < 1e-6 for i in range(2) for j in range(2)\n    )\n    checks.append({\n        \"name\": \"Softmax-pooled windows\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef weighted_sum(vectors, weights):\n    cols = len(vectors[0])\n    return [sum(vectors[row][col] * weights[row] for row in range(len(vectors))) for col in range(cols)]\n\ndef compress_prefill(kv_rows, score_rows, ratio):\n    if not False:\n        return None\n    compressed = []\n    for start in range(0, len(kv_rows), ratio):\n        window_kv = kv_rows[start:start + ratio]\n        window_scores = score_rows[start:start + ratio]\n        if len(window_kv) < ratio:\n            break\n        weights = softmax(window_scores)\n        compressed.append([0.0 for _ in window_kv[0]])\n    return compressed\n",
      "solution_runnable": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef weighted_sum(vectors, weights):\n    cols = len(vectors[0])\n    return [sum(vectors[row][col] * weights[row] for row in range(len(vectors))) for col in range(cols)]\n\ndef compress_prefill(kv_rows, score_rows, ratio):\n    if not len(kv_rows) >= ratio:\n        return None\n    compressed = []\n    for start in range(0, len(kv_rows), ratio):\n        window_kv = kv_rows[start:start + ratio]\n        window_scores = score_rows[start:start + ratio]\n        if len(window_kv) < ratio:\n            break\n        weights = softmax(window_scores)\n        compressed.append(weighted_sum(window_kv, weights))\n    return compressed\n",
      "solution_code": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef weighted_sum(vectors, weights):\n    cols = len(vectors[0])\n    return [sum(vectors[row][col] * weights[row] for row in range(len(vectors))) for col in range(cols)]\n\ndef compress_prefill(kv_rows, score_rows, ratio):\n    if not len(kv_rows) >= ratio:\n        return None\n    compressed = []\n    for start in range(0, len(kv_rows), ratio):\n        window_kv = kv_rows[start:start + ratio]\n        window_scores = score_rows[start:start + ratio]\n        if len(window_kv) < ratio:\n            break\n        weights = softmax(window_scores)\n        compressed.append(weighted_sum(window_kv, weights))\n    return compressed\n",
      "reference_code": "    def forward(self, x: torch.Tensor, start_pos: int):\n        assert self.kv_cache is not None\n        bsz, seqlen, _ = x.size()\n        ratio, overlap, d, rd = self.compress_ratio, self.overlap, self.head_dim, self.rope_head_dim\n        dtype = x.dtype\n        # compression need fp32\n        x = x.float()\n        kv = self.wkv(x)\n        score = self.wgate(x)\n        if start_pos == 0:\n            should_compress = seqlen >= ratio\n            remainder = seqlen % ratio\n            cutoff = seqlen - remainder\n            offset = ratio if overlap else 0\n            if overlap and cutoff >= ratio:\n                self.kv_state[:bsz, :ratio] = kv[:, cutoff-ratio : cutoff]\n                self.score_state[:bsz, :ratio] = score[:, cutoff-ratio : cutoff] + self.ape\n            if remainder > 0:\n                kv, self.kv_state[:bsz, offset : offset+remainder] = kv.split([cutoff, remainder], dim=1)\n                self.score_state[:bsz, offset : offset+remainder] = score[:, cutoff:] + self.ape[:remainder]\n                score = score[:, :cutoff]\n            kv = kv.unflatten(1, (-1, ratio))\n            score = score.unflatten(1, (-1, ratio)) + self.ape\n            if overlap:\n                kv = self.overlap_transform(kv, 0)\n                score = self.overlap_transform(score, float(\"-inf\"))\n            kv = (kv * score.softmax(dim=2)).sum(dim=2)\n",
      "puzzle_path": "tutorial/generated/puzzles/08_s08-compressor-prefill.py",
      "solution_path": "tutorial/generated/solutions/08_s08-compressor-prefill.py",
      "reference_file_path": "tutorial/generated/references/08_s08-compressor-prefill.py",
      "workshop_loc": 21,
      "reference_loc": 27,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "Compressor Prefill",
          "tagline": "一整段序列一次性压缩,池化出每个窗口的代表。",
          "difficulty": "核心",
          "summary": "Prefill 阶段一次吃掉整段输入,按 `compress_ratio` 做分块池化:先检查剩下的 token 是否至少能凑出一个窗口,再在每个窗口上做 `softmax(score) * kv` 的加权和。",
          "what_you_learn": [
            "为什么要显式判断 `len(kv_rows) >= ratio` —— 避免半个窗口被塌缩成无意义的均值。",
            "块内 softmax 为什么要配着 `weighted_sum` —— 这是最小版本的 attention。",
            "状态缓冲 `kv_state` / `score_state` 是怎么存放 decode 的续作数据的(见下一课 Interlude)。"
          ],
          "workshop_steps": [
            "检查 `len(kv_rows) >= ratio`,判断是否有完整窗口。",
            "对每个窗口做 `weighted_sum(window_kv, softmax(window_scores))`。"
          ],
          "pitfalls": [
            "`softmax` 必须沿 *窗口内* 做,不是跨窗口。",
            "不足一个 ratio 的尾段要留给 decode 缓冲。"
          ]
        }
      }
    },
    {
      "id": "i10-compressor-decode",
      "order": 403,
      "stage": "attention",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 343,
      "line_end": 378,
      "title": "Compressor.forward — Decode Path + Finalize",
      "tagline": "Incremental per-token compression using the state buffers.",
      "summary": "When `start_pos > 0` the compressor is in decode mode: the new token contributes to either the overlap slot or the normal slot, and every `compress_ratio` steps we trigger one compression event that writes a new compressed KV into `self.kv_cache`. The post-compression block applies RMSNorm + rotary to the rope tail, optionally rotates + FP4-quantizes (indexer only), otherwise FP8-quantizes the non-rope part.",
      "why_it_matters": [
        "Decode compression has to emit *exactly one* compressed KV at the correct stride.",
        "Rotate+FP4 is used only for the indexer's Compressor (`rotate=True`)."
      ],
      "kind": "interlude",
      "reference_code": "        else:\n            should_compress = (start_pos + 1) % self.compress_ratio == 0\n            score += self.ape[start_pos % ratio]\n            if overlap:\n                self.kv_state[:bsz, ratio + start_pos % ratio] = kv.squeeze(1)\n                self.score_state[:bsz, ratio + start_pos % ratio] = score.squeeze(1)\n                if should_compress:\n                    kv_state = torch.cat([self.kv_state[:bsz, :ratio, :d], self.kv_state[:bsz, ratio:, d:]], dim=1)\n                    score_state = torch.cat([self.score_state[:bsz, :ratio, :d], self.score_state[:bsz, ratio:, d:]], dim=1)\n                    kv = (kv_state * score_state.softmax(dim=1)).sum(dim=1, keepdim=True)\n                    self.kv_state[:bsz, :ratio] = self.kv_state[:bsz, ratio:]\n                    self.score_state[:bsz, :ratio] = self.score_state[:bsz, ratio:]\n            else:\n                self.kv_state[:bsz, start_pos % ratio] = kv.squeeze(1)\n                self.score_state[:bsz, start_pos % ratio] = score.squeeze(1)\n                if should_compress:\n                    kv = (self.kv_state[:bsz] * self.score_state[:bsz].softmax(dim=1)).sum(dim=1, keepdim=True)\n        if not should_compress:\n            return\n        kv = self.norm(kv.to(dtype))\n        if start_pos == 0:\n            freqs_cis = self.freqs_cis[:cutoff:ratio]\n        else:\n            freqs_cis = self.freqs_cis[start_pos + 1 - self.compress_ratio].unsqueeze(0)\n        apply_rotary_emb(kv[..., -rd:], freqs_cis)\n        if self.rotate:\n            kv = rotate_activation(kv)\n            fp4_act_quant(kv, fp4_block_size, True)\n        else:\n            act_quant(kv[..., :-rd], 64, scale_fmt, scale_dtype, True)\n        if start_pos == 0:\n            self.kv_cache[:bsz, :seqlen // ratio] = kv\n        else:\n            self.kv_cache[:bsz, start_pos // ratio] = kv.squeeze(1)\n        return kv\n",
      "reference_loc": 35,
      "i18n": {
        "zh": {
          "title": "Compressor.forward —— Decode 路径与收尾",
          "tagline": "借助状态缓冲完成逐 token 的增量压缩。",
          "summary": "`start_pos > 0` 时进入 decode:新 token 写入 overlap 槽位或普通槽位,每 `compress_ratio` 步触发一次压缩事件并写进 `self.kv_cache`。收尾阶段:RMSNorm + rotary (仅 rope 子段),索引器版本做 rotate + FP4 模拟,普通版本做 FP8 模拟。",
          "why_it_matters": [
            "Decode 要严格地每 ratio 步产生一次压缩,不多不少。",
            "`rotate=True` 的 FP4 路径只有索引器会触发。"
          ]
        }
      }
    },
    {
      "id": "i11-indexer-init",
      "order": 404,
      "stage": "attention",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 379,
      "line_end": 417,
      "title": "Indexer — Low-Rank Q + Rotated Compressor",
      "tagline": "Builds a FP4-style score to pick top-k compressed KV positions.",
      "summary": "The lightning indexer has its own Compressor (flagged `rotate=True` so it uses Hadamard + FP4). `forward` projects `qr` through `wq_b`, applies rotary to the tail dims, rotates and FP4-quantizes Q. It then calls its Compressor to refresh the indexer KV cache. Up to the point the `weights_proj` is computed, this is the setup for the score we will compute in the next lesson.",
      "why_it_matters": [
        "The indexer uses `n_heads` heads of `head_dim` each (distinct from attention's heads).",
        "FP4 here is a *simulation* during training (quantization-aware), not a real kernel call."
      ],
      "kind": "interlude",
      "reference_code": "\nclass Indexer(torch.nn.Module):\n    \"\"\"Selects top-k compressed KV positions for sparse attention via learned scoring.\n    Has its own Compressor (with Hadamard rotation) to build compressed KV for scoring.\"\"\"\n\n    def __init__(self, args: ModelArgs, compress_ratio: int = 4):\n        super().__init__()\n        self.dim = args.dim\n        self.n_heads = args.index_n_heads\n        self.n_local_heads = args.index_n_heads // world_size\n        self.head_dim = args.index_head_dim\n        self.rope_head_dim = args.rope_head_dim\n        self.index_topk = args.index_topk\n        self.q_lora_rank = args.q_lora_rank\n        self.wq_b = ColumnParallelLinear(self.q_lora_rank, self.n_heads * self.head_dim)\n        self.weights_proj = ColumnParallelLinear(self.dim, self.n_heads, dtype=torch.bfloat16)\n        self.softmax_scale = self.head_dim ** -0.5\n        self.compress_ratio = compress_ratio\n\n        self.compressor = Compressor(args, compress_ratio, self.head_dim, True)\n        self.register_buffer(\"kv_cache\", torch.zeros(args.max_batch_size, args.max_seq_len // compress_ratio, self.head_dim), persistent=False)\n        self.freqs_cis = None\n\n    def forward(self, x: torch.Tensor, qr: torch.Tensor, start_pos: int, offset: int):\n        bsz, seqlen, _ = x.size()\n        freqs_cis = self.freqs_cis[start_pos:start_pos+seqlen]\n        ratio = self.compress_ratio\n        rd = self.rope_head_dim\n        end_pos = start_pos + seqlen\n        if self.compressor.kv_cache is None:\n            self.compressor.kv_cache = self.kv_cache\n            self.compressor.freqs_cis = self.freqs_cis\n        q = self.wq_b(qr)\n        q = q.unflatten(-1, (self.n_local_heads, self.head_dim))\n        apply_rotary_emb(q[..., -rd:], freqs_cis)\n        q = rotate_activation(q)\n        # use fp4 simulation for q and kv in indexer\n        fp4_act_quant(q, fp4_block_size, True)\n        self.compressor(x, start_pos)\n",
      "reference_loc": 39,
      "i18n": {
        "zh": {
          "title": "Indexer —— 低秩 Q + 旋转化的压缩",
          "tagline": "用 FP4 模拟的得分选择压缩 KV 的 top-k。",
          "summary": "索引器自己带了一个 Compressor (`rotate=True`,走 Hadamard + FP4)。`forward` 里先把 `qr` 过 `wq_b`,给 rope 子段加旋转,再整体做 Hadamard + FP4 模拟。接着调用索引器的 Compressor 更新自己的 KV 缓存。直到 `weights_proj` 被计算出来,为下一节的打分做好了准备。",
          "why_it_matters": [
            "索引器的 head 数 (`n_heads`) 与注意力的 head 数是分开的。",
            "这里的 FP4 只是训练期的 *模拟* (QAT),并未实际调用 kernel。"
          ]
        }
      }
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
      "tags": [
        "indexer",
        "top-k"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 418,
      "line_end": 427,
      "summary": "Index scores are: per head, take `ReLU(q @ k)`; weight by a learned per-head scale; sum across heads. The Indexer then runs top-k over this scalar score per query.",
      "paper_anchor": {
        "section": "§2.3.1 Lightning Indexer — eq. (15)/(16)",
        "figure": "Figure 3",
        "summary": "Equations 15–16 in the paper. The ReLU is critical — it zeroes out negative alignments so the top-k survives noisy queries."
      },
      "what_you_learn": [
        "Why ReLU clips negatives — negative alignments shouldn't pull a key into the top-k.",
        "Why the head-weight is multiplied AFTER the ReLU."
      ],
      "workshop_steps": [
        "Compute ReLU of each head's dot product.",
        "Multiply each ReLU'd score by the head weight and accumulate."
      ],
      "pitfalls": [
        "`max(0, ...)` — `abs(...)` would double-count negatives."
      ],
      "blanks": [
        {
          "id": "relu_dot",
          "label": "ReLU(q·k)",
          "hint": "`max(0.0, dot)` of the current head's query and key.",
          "starter": "dot",
          "solution": "max(0.0, dot)",
          "i18n": {
            "zh": {
              "label": "ReLU(q·k)",
              "hint": "对当前 head 的 query 和 key 取 `max(0.0, dot)`。"
            }
          }
        },
        {
          "id": "head_weighted",
          "label": "Weighted sum",
          "hint": "Multiply the ReLU score by `head_weights[h]` before summing.",
          "starter": "relu",
          "solution": "head_weights[h] * relu",
          "i18n": {
            "zh": {
              "label": "head 加权求和",
              "hint": "用 `head_weights[h]` 乘以 ReLU 后的得分。"
            }
          }
        }
      ],
      "starter_code": "def index_score(queries, keys, head_weights):\n    # queries: [h][d], keys: [d], head_weights: [h]\n    total = 0.0\n    for h in range(len(queries)):\n        dot = sum(queries[h][i] * keys[i] for i in range(len(keys)))\n        relu = __B_relu_dot__\n        total += __B_head_weighted__\n    return total\n",
      "validator_code": "def run_checks(ns):\n    index_score = ns[\"index_score\"]\n    checks = []\n\n    score = index_score([[1.0, 0.0], [0.0, -1.0]], [1.0, 1.0], [2.0, 3.0])\n    checks.append({\n        \"name\": \"Negative head zeroed by ReLU\",\n        \"passed\": abs(score - 2.0) < 1e-9,\n        \"expected\": \"2.0\",\n        \"actual\": repr(score),\n    })\n\n    score = index_score([[1.0, 1.0], [2.0, 0.0]], [1.0, 0.0], [1.0, 0.5])\n    checks.append({\n        \"name\": \"Weighted sum across heads\",\n        \"passed\": abs(score - 2.0) < 1e-9,\n        \"expected\": \"2.0\",\n        \"actual\": repr(score),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def index_score(queries, keys, head_weights):\n    # queries: [h][d], keys: [d], head_weights: [h]\n    total = 0.0\n    for h in range(len(queries)):\n        dot = sum(queries[h][i] * keys[i] for i in range(len(keys)))\n        relu = dot\n        total += relu\n    return total\n",
      "solution_runnable": "def index_score(queries, keys, head_weights):\n    # queries: [h][d], keys: [d], head_weights: [h]\n    total = 0.0\n    for h in range(len(queries)):\n        dot = sum(queries[h][i] * keys[i] for i in range(len(keys)))\n        relu = max(0.0, dot)\n        total += head_weights[h] * relu\n    return total\n",
      "solution_code": "def index_score(queries, keys, head_weights):\n    # queries: [h][d], keys: [d], head_weights: [h]\n    total = 0.0\n    for h in range(len(queries)):\n        dot = sum(queries[h][i] * keys[i] for i in range(len(keys)))\n        relu = max(0.0, dot)\n        total += head_weights[h] * relu\n    return total\n",
      "reference_code": "        weights = self.weights_proj(x) * (self.softmax_scale * self.n_heads ** -0.5)\n        # We performed QAT here, kv could also use fp8 format, though current implementation uses bf16\n        index_score = torch.einsum(\"bshd,btd->bsht\", q, self.kv_cache[:bsz, :end_pos // ratio])\n        index_score = (index_score.relu_() * weights.unsqueeze(-1)).sum(dim=2)\n        if world_size > 1:\n            dist.all_reduce(index_score)\n        if start_pos == 0:\n            mask = torch.arange(seqlen // ratio).repeat(seqlen, 1) >= torch.arange(1, seqlen + 1).unsqueeze(1) // ratio\n            index_score += torch.where(mask, float(\"-inf\"), 0)\n        topk_idxs = index_score.topk(min(self.index_topk, end_pos // ratio), dim=-1)[1]\n",
      "puzzle_path": "tutorial/generated/puzzles/11_s11-indexer-score.py",
      "solution_path": "tutorial/generated/solutions/11_s11-indexer-score.py",
      "reference_file_path": "tutorial/generated/references/11_s11-indexer-score.py",
      "workshop_loc": 8,
      "reference_loc": 10,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "闪电索引器打分",
          "tagline": "对每个 (q, k) 计算 ReLU(q·k),按 head 加权求和。",
          "difficulty": "核心",
          "summary": "Indexer 用每个 head 的 q 与压缩 KV 做点积,经 ReLU 抑制负得分,然后按 `head_weights[h]` 对 head 做加权求和,得到每个 query 对每个压缩位置的得分。",
          "what_you_learn": [
            "为什么用 ReLU 而不是 softmax —— 得分本身就用于排序,ReLU 足以剔除负贡献。",
            "head 加权让不同 head 可以学到不同的重要性。",
            "得分是累加的,不是 softmax 归一化的 —— 适合后续的 topk。"
          ],
          "workshop_steps": [
            "对每一个 head,算 `max(0.0, dot)`。",
            "乘上 `head_weights[h]`,沿 head 维求和。"
          ],
          "pitfalls": [
            "head 维的 sum 不要和 feature 维的 dot 混淆。",
            "`head_weights[h]` 必须乘在 ReLU 之后,不是之前。"
          ]
        }
      }
    },
    {
      "id": "i12-indexer-tail",
      "order": 405,
      "stage": "attention",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 428,
      "line_end": 435,
      "title": "Indexer — Top-k + Offset Rewriting",
      "tagline": "Pad invalid positions with -1 so the sparse kernel masks them.",
      "summary": "After scoring, the indexer runs `topk` over the compressed axis, then for the prefill path it masks out positions that would look into the future and rewrites survivors with the `offset` (which is where the compressed cache starts in the shared KV buffer). The `-1` sentinel is what the sparse-attention kernel uses to skip positions without branching.",
      "why_it_matters": [
        "The offset trick lets window positions and compressed positions share one index space.",
        "The future-mask uses integer ratio arithmetic — be careful of off-by-one bugs."
      ],
      "kind": "interlude",
      "reference_code": "        if start_pos == 0:\n            mask = topk_idxs >= torch.arange(1, seqlen + 1).unsqueeze(1) // ratio\n            topk_idxs = torch.where(mask, -1, topk_idxs + offset)\n        else:\n            topk_idxs += offset\n        return topk_idxs\n",
      "reference_loc": 6,
      "i18n": {
        "zh": {
          "title": "Indexer —— Top-k + Offset 改写",
          "tagline": "无效位置用 -1 填,让稀疏 kernel 自动跳过。",
          "summary": "打分完成后做 topk,prefill 路径里把会看未来的位置置为 -1,幸存者加上 `offset` —— 这是压缩 KV 在共享 KV 缓冲中的起点。-1 是稀疏注意力 kernel 约定的哨兵,能让 kernel 无分支地跳过。",
          "why_it_matters": [
            "offset 技巧让窗口位置和压缩位置共享同一索引空间。",
            "未来掩码涉及整数比率运算,容易出 off-by-one bug。"
          ]
        }
      }
    },
    {
      "id": "i13-attention-init",
      "order": 406,
      "stage": "attention",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 436,
      "line_end": 506,
      "title": "Attention — MLA Setup & Q/KV Projection",
      "tagline": "Low-rank Q via `wq_a → q_norm → wq_b`; grouped O via `wo_a → wo_b`.",
      "summary": "`Attention.__init__` builds the Multi-head Latent Attention (MLA) stack: a low-rank Q (`wq_a`/`q_norm`/`wq_b`), a single KV projection, a grouped O (`wo_a` column-parallel into groups, `wo_b` row-parallel back out), the learned `attn_sink` bias, the optional `Compressor`+`Indexer` pair (when `compress_ratio` is non-zero), and the RoPE cache sized for either the YaRN-enabled hybrid attention or the pure sliding-window variant. `forward` then prepares Q (projection + RMS norm along the head dim + rotary on the rope tail) and KV (projection + RMS norm + rotary + FP8 simulation on the non-rope dims).",
      "why_it_matters": [
        "`compress_ratio=0` layers are pure sliding-window — they skip the Compressor entirely.",
        "`compress_ratio=4` enables the Indexer; larger ratios use pure compression."
      ],
      "kind": "interlude",
      "reference_code": "class Attention(nn.Module):\n    \"\"\"Multi-head Latent Attention (MLA) with sliding window + optional KV compression.\n    Uses low-rank Q projection (wq_a -> q_norm -> wq_b) and grouped low-rank O projection.\"\"\"\n    def __init__(self, layer_id: int, args: ModelArgs):\n        super().__init__()\n        self.layer_id = layer_id\n        self.dim = args.dim\n        self.n_heads = args.n_heads\n        self.n_local_heads = args.n_heads // world_size\n        self.q_lora_rank = args.q_lora_rank\n        self.o_lora_rank = args.o_lora_rank\n        self.head_dim = args.head_dim\n        self.rope_head_dim = args.rope_head_dim\n        self.nope_head_dim = args.head_dim - args.rope_head_dim\n        self.n_groups = args.o_groups\n        self.n_local_groups = self.n_groups // world_size\n        self.window_size = args.window_size\n        self.compress_ratio = args.compress_ratios[layer_id]\n        self.eps = args.norm_eps\n\n        self.attn_sink = nn.Parameter(torch.empty(self.n_local_heads, dtype=torch.float32))\n        self.wq_a = Linear(self.dim, self.q_lora_rank)\n        self.q_norm = RMSNorm(self.q_lora_rank, self.eps)\n        self.wq_b = ColumnParallelLinear(self.q_lora_rank, self.n_heads * self.head_dim)\n        self.wkv = Linear(self.dim, self.head_dim)\n        self.kv_norm = RMSNorm(self.head_dim, self.eps)\n        self.wo_a = ColumnParallelLinear(self.n_heads * self.head_dim // self.n_groups, self.n_groups * args.o_lora_rank, dtype=torch.bfloat16)\n        self.wo_b = RowParallelLinear(self.n_groups * args.o_lora_rank, self.dim)\n        self.softmax_scale = self.head_dim ** -0.5\n\n        if self.compress_ratio:\n            self.compressor = Compressor(args, self.compress_ratio, self.head_dim)\n            if self.compress_ratio == 4:\n                self.indexer = Indexer(args, self.compress_ratio)\n            else:\n                self.indexer = None\n\n        kv_cache_size = args.window_size + (args.max_seq_len // self.compress_ratio if self.compress_ratio else 0)\n        self.register_buffer(\"kv_cache\", torch.zeros(args.max_batch_size, kv_cache_size, self.head_dim), persistent=False)\n        if self.compress_ratio:\n            original_seq_len, rope_theta = args.original_seq_len, args.compress_rope_theta\n        else:\n            # disable YaRN and use base rope_theta in pure sliding-window attention\n            original_seq_len, rope_theta = 0, args.rope_theta\n        freqs_cis = precompute_freqs_cis(self.rope_head_dim, args.max_seq_len, original_seq_len,\n                                         rope_theta, args.rope_factor, args.beta_fast, args.beta_slow)\n        self.register_buffer(\"freqs_cis\", freqs_cis, persistent=False)\n\n    def forward(self, x: torch.Tensor, start_pos: int):\n        bsz, seqlen, _ = x.size()\n        freqs_cis = self.freqs_cis[start_pos:start_pos+seqlen]\n        win = self.window_size\n        ratio = self.compress_ratio\n        rd = self.rope_head_dim\n        if self.compress_ratio and self.compressor.kv_cache is None:\n            self.compressor.kv_cache = self.kv_cache[:, win:]\n            self.compressor.freqs_cis = self.freqs_cis\n            if self.indexer is not None:\n                self.indexer.freqs_cis = self.freqs_cis\n        # q\n        qr = q = self.q_norm(self.wq_a(x))\n        q = self.wq_b(q).unflatten(-1, (self.n_local_heads, self.head_dim))\n        q *= torch.rsqrt(q.square().mean(-1, keepdim=True) + self.eps)\n        apply_rotary_emb(q[..., -rd:], freqs_cis)\n\n        # win kv & topk_idxs\n        kv = self.wkv(x)\n        kv = self.kv_norm(kv)\n        apply_rotary_emb(kv[..., -rd:], freqs_cis)\n        # FP8-simulate non-rope dims to match QAT; rope dims stay bf16 for positional precision\n        act_quant(kv[..., :-rd], 64, scale_fmt, scale_dtype, True)\n",
      "reference_loc": 71,
      "i18n": {
        "zh": {
          "title": "Attention —— MLA 构造与 Q/KV 投影",
          "tagline": "低秩 Q 通过 `wq_a → q_norm → wq_b`,分组 O 通过 `wo_a → wo_b`。",
          "summary": "`Attention.__init__` 搭起 MLA 栈:低秩 Q (`wq_a`/`q_norm`/`wq_b`)、单 KV 投影、分组 O (`wo_a` 列并行进组, `wo_b` 行并行出组)、可学习的 `attn_sink` 偏置、可选的 Compressor + Indexer 对 (只有 `compress_ratio` 非零的层才有),以及按层类型(混合注意力走 YaRN,纯滑动窗口不走)预先计算的 RoPE 表。`forward` 的前半段准备 Q (投影 → 按 head 维 RMS → rope 子段旋转) 和 KV (投影 → RMS → 旋转 → rope 之外做 FP8 模拟)。",
          "why_it_matters": [
            "`compress_ratio=0` 的层是纯滑动窗口,完全不走 Compressor。",
            "`compress_ratio=4` 启用 Indexer;其他 ratio 走纯压缩。"
          ]
        }
      }
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
      "tags": [
        "topk",
        "merge"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 507,
      "line_end": 516,
      "summary": "Before sparse attention fires, the `topk_idxs` tensor concatenates the dense window indices with the sparse top-k from the Indexer. Entries equal to `-1` are masked (turn into zero contributions inside the kernel).",
      "paper_anchor": {
        "section": "§2.3.1 CSA — eq. (17)",
        "figure": "Figure 3",
        "summary": "This is the data-plane version of eq. (17): the union of sliding-window KV and top-k compressed KV, which the sparse attention kernel reads in lock-step."
      },
      "what_you_learn": [
        "Why `-1` is kept as an explicit sentinel rather than excised early — the kernel uses it to zero-out contributions.",
        "Why the concat order matters for block-aligned cache reads."
      ],
      "workshop_steps": [
        "Concatenate window indices and compressed indices in that order.",
        "Drop sentinel `-1` values from the return plan."
      ],
      "pitfalls": [
        "The sentinel filter happens AFTER the merge — the concatenation itself may contain -1s."
      ],
      "blanks": [
        {
          "id": "merge_topk",
          "label": "Merge indices",
          "hint": "Append `compress_topk` to `window_topk` when the former is non-empty.",
          "starter": "merged",
          "solution": "merged + list(compress_topk)",
          "i18n": {
            "zh": {
              "label": "Top-k 合并",
              "hint": "如果 `compress_topk` 非空,就追加到 `window_topk` 后面。"
            }
          }
        }
      ],
      "starter_code": "def build_topk_plan(window_topk, compress_topk):\n    merged = list(window_topk)\n    if compress_topk:\n        merged = __B_merge_topk__\n    return [value for value in merged if value != -1]\n",
      "validator_code": "def run_checks(ns):\n    plan = ns[\"build_topk_plan\"]\n    checks = []\n    checks.append({\n        \"name\": \"Concat then drop sentinel\",\n        \"passed\": plan([3, 4, -1], [8, 9]) == [3, 4, 8, 9],\n        \"expected\": \"[3, 4, 8, 9]\",\n        \"actual\": repr(plan([3, 4, -1], [8, 9])),\n    })\n    checks.append({\n        \"name\": \"Empty compressed is fine\",\n        \"passed\": plan([0, -1, 2], []) == [0, 2],\n        \"expected\": \"[0, 2]\",\n        \"actual\": repr(plan([0, -1, 2], [])),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def build_topk_plan(window_topk, compress_topk):\n    merged = list(window_topk)\n    if compress_topk:\n        merged = merged\n    return [value for value in merged if value != -1]\n",
      "solution_runnable": "def build_topk_plan(window_topk, compress_topk):\n    merged = list(window_topk)\n    if compress_topk:\n        merged = merged + list(compress_topk)\n    return [value for value in merged if value != -1]\n",
      "solution_code": "def build_topk_plan(window_topk, compress_topk):\n    merged = list(window_topk)\n    if compress_topk:\n        merged = merged + list(compress_topk)\n    return [value for value in merged if value != -1]\n",
      "reference_code": "        topk_idxs = get_window_topk_idxs(win, bsz, seqlen, start_pos)\n        if self.compress_ratio:\n            offset = kv.size(1) if start_pos == 0 else win\n            if self.indexer is not None:\n                compress_topk_idxs = self.indexer(x, qr, start_pos, offset)\n            else:\n                compress_topk_idxs = get_compress_topk_idxs(ratio, bsz, seqlen, start_pos, offset)\n            topk_idxs = torch.cat([topk_idxs, compress_topk_idxs], dim=-1)\n        topk_idxs = topk_idxs.int()\n",
      "puzzle_path": "tutorial/generated/puzzles/10_s10-topk-merge.py",
      "solution_path": "tutorial/generated/solutions/10_s10-topk-merge.py",
      "reference_file_path": "tutorial/generated/references/10_s10-topk-merge.py",
      "workshop_loc": 5,
      "reference_loc": 9,
      "blank_count": 1,
      "i18n": {
        "zh": {
          "title": "窗口 + 压缩 Top-k 合并",
          "tagline": "先取窗口索引,再拼上压缩索引(若有)。",
          "difficulty": "核心",
          "summary": "稀疏注意力需要一张统一的 topk 索引表。本节把 *窗口索引*(最近的真实位置)和 *压缩索引*(Indexer 或静态公式)沿最后一维拼接起来。只有压缩部分非空时才需要拼;否则原样返回窗口索引。",
          "what_you_learn": [
            "`compress_topk` 什么时候为空 —— `compress_ratio == 0` 的纯滑动窗口层。",
            "为什么索引用 `-1` 表示“跳过” —— kernel 会按此掩码。",
            "统一 topk 索引表让稀疏 attention kernel 无分支地 gather。"
          ],
          "workshop_steps": [
            "把 `compress_topk` 附加到 `window_topk` 后面(若非空)。"
          ],
          "pitfalls": [
            "`compress_topk` 为空时别拼,否则拼出空列表。"
          ]
        }
      }
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
      "tags": [
        "kv-cache",
        "ring"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 517,
      "line_end": 533,
      "summary": "The sliding-window part of Attention stores a fixed-size cache of the most recent KV rows. Prefill writes the last `window_size` entries in order; decode overwrites one slot at `start_pos % window_size`.",
      "paper_anchor": {
        "section": "§2.3.3 Other Details (Sliding Window)",
        "figure": "Figure 3",
        "summary": "CSA augments sparse top-k with a small sliding window to preserve fine-grained local structure. This code is where that window survives across autoregressive steps."
      },
      "what_you_learn": [
        "Why the prefill path falls back to `values[-window_size:]` when the input is longer than the window.",
        "Why `start_pos % window_size` makes the cache *effectively circular* at no extra cost."
      ],
      "workshop_steps": [
        "Keep the LAST `window_size` entries in the long-prefill branch.",
        "Overwrite slot `start_pos % window_size` during decode."
      ],
      "pitfalls": [
        "During decode only a single token is added per step — `values[0]` suffices."
      ],
      "blanks": [
        {
          "id": "prefill_tail",
          "label": "Prefill tail",
          "hint": "Return the last `window_size` entries: `list(values[-window_size:])`.",
          "starter": "list(values[:window_size])",
          "solution": "list(values[-window_size:])",
          "i18n": {
            "zh": {
              "label": "Prefill 尾段",
              "hint": "返回最后 `window_size` 个元素:`list(values[-window_size:])`。"
            }
          }
        },
        {
          "id": "decode_idx",
          "label": "Decode ring index",
          "hint": "`start_pos % window_size` — modulo keeps the buffer circular.",
          "starter": "0",
          "solution": "start_pos % window_size",
          "i18n": {
            "zh": {
              "label": "Decode 环形索引",
              "hint": "`start_pos % window_size` —— 模运算让缓冲成为环形。"
            }
          }
        }
      ],
      "starter_code": "def write_kv_cache(cache, values, start_pos, window_size):\n    cache = list(cache)\n    if start_pos == 0:\n        if len(values) <= window_size:\n            return values + cache[len(values):]\n        return __B_prefill_tail__\n    write_index = __B_decode_idx__\n    cache[write_index] = values[0]\n    return cache\n",
      "validator_code": "def run_checks(ns):\n    write_kv_cache = ns[\"write_kv_cache\"]\n    checks = []\n\n    short = write_kv_cache([\"a\", \"b\", \"c\", \"d\"], [\"x\", \"y\"], 0, 4)\n    checks.append({\n        \"name\": \"Short prefill fills from 0\",\n        \"passed\": short == [\"x\", \"y\", \"c\", \"d\"],\n        \"expected\": \"['x', 'y', 'c', 'd']\",\n        \"actual\": repr(short),\n    })\n\n    long = write_kv_cache([\"a\", \"b\", \"c\", \"d\"], [\"x\", \"y\", \"z\", \"w\", \"u\"], 0, 4)\n    checks.append({\n        \"name\": \"Long prefill keeps tail window\",\n        \"passed\": long == [\"y\", \"z\", \"w\", \"u\"],\n        \"expected\": \"['y', 'z', 'w', 'u']\",\n        \"actual\": repr(long),\n    })\n\n    decode = write_kv_cache([\"a\", \"b\", \"c\", \"d\"], [\"x\"], 6, 4)\n    checks.append({\n        \"name\": \"Decode ring write at 6 % 4 = 2\",\n        \"passed\": decode == [\"a\", \"b\", \"x\", \"d\"],\n        \"expected\": \"['a', 'b', 'x', 'd']\",\n        \"actual\": repr(decode),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def write_kv_cache(cache, values, start_pos, window_size):\n    cache = list(cache)\n    if start_pos == 0:\n        if len(values) <= window_size:\n            return values + cache[len(values):]\n        return list(values[:window_size])\n    write_index = 0\n    cache[write_index] = values[0]\n    return cache\n",
      "solution_runnable": "def write_kv_cache(cache, values, start_pos, window_size):\n    cache = list(cache)\n    if start_pos == 0:\n        if len(values) <= window_size:\n            return values + cache[len(values):]\n        return list(values[-window_size:])\n    write_index = start_pos % window_size\n    cache[write_index] = values[0]\n    return cache\n",
      "solution_code": "def write_kv_cache(cache, values, start_pos, window_size):\n    cache = list(cache)\n    if start_pos == 0:\n        if len(values) <= window_size:\n            return values + cache[len(values):]\n        return list(values[-window_size:])\n    write_index = start_pos % window_size\n    cache[write_index] = values[0]\n    return cache\n",
      "reference_code": "        # compress kv & attn\n        if start_pos == 0:\n            if seqlen <= win:\n                self.kv_cache[:bsz, :seqlen] = kv\n            else:\n                cutoff = seqlen % win\n                self.kv_cache[:bsz, cutoff: win], self.kv_cache[:bsz, :cutoff] = kv[:, -win:].split([win - cutoff, cutoff], dim=1)\n            if self.compress_ratio:\n                if (kv_compress := self.compressor(x, start_pos)) is not None:\n                    kv = torch.cat([kv, kv_compress], dim=1)\n            # We performed QAT here, kv could also use fp8 format, though current implementation uses bf16\n            o = sparse_attn(q, kv, self.attn_sink, topk_idxs, self.softmax_scale)\n        else:\n            self.kv_cache[:bsz, start_pos % win] = kv.squeeze(1)\n            if self.compress_ratio:\n                self.compressor(x, start_pos)\n            o = sparse_attn(q, self.kv_cache[:bsz], self.attn_sink, topk_idxs, self.softmax_scale)\n",
      "puzzle_path": "tutorial/generated/puzzles/09_s09-window-cache.py",
      "solution_path": "tutorial/generated/solutions/09_s09-window-cache.py",
      "reference_file_path": "tutorial/generated/references/09_s09-window-cache.py",
      "workshop_loc": 9,
      "reference_loc": 17,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "滑动窗口 KV 缓存",
          "tagline": "Prefill 保留尾巴,decode 在 `(start_pos mod W)` 覆写。",
          "difficulty": "核心",
          "summary": "只有最近 `window_size` 个 token 会被保留。Prefill 时把序列末尾原样写入;decode 时用 ring-buffer 覆盖最旧的位置 —— 任何时刻都只保存最近一个窗口。",
          "what_you_learn": [
            "为什么 prefill 的尾巴是 `values[-window_size:]`。",
            "`start_pos % window_size` 如何形成 ring-buffer 行为。",
            "为什么用 `%` 而不是 `//`。"
          ],
          "workshop_steps": [
            "Prefill:取最近 `window_size` 个 KV。",
            "Decode:写回 `start_pos % window_size` 这个槽位。"
          ],
          "pitfalls": [
            "`seqlen > win` 时,保留的是 *最后* `win` 个 token,不是前 `win` 个。",
            "Ring-buffer 偏移要用 `%`,不是 `//`。"
          ]
        }
      }
    },
    {
      "id": "i14-attention-output",
      "order": 500,
      "stage": "attention",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 534,
      "line_end": 545,
      "title": "Attention — Inverse Rotary + Grouped O-Projection",
      "tagline": "Un-rotate the rope tail; project out via the low-rank O.",
      "summary": "After the sparse-attention kernel returns, the rope tail of the per-head output is rotated back with `inverse=True`, the heads are folded into groups, and the output is projected through the `[n_groups, o_lora_rank]` `wo_a` tensor and the `wo_b` row-parallel tail.",
      "why_it_matters": [
        "Rotation+inverse-rotation ensures the K·Q dot product is computed in RoPE space but the output lives back in model space.",
        "The comment `BF16 for simplicity` flags a future perf opportunity — `wo_a` could stay in FP8."
      ],
      "kind": "interlude",
      "reference_code": "        apply_rotary_emb(o[..., -rd:], freqs_cis, True)\n\n        # o\n        o = o.view(bsz, seqlen, self.n_local_groups, -1)\n        wo_a = self.wo_a.weight.view(self.n_local_groups, self.o_lora_rank, -1)\n        # NOTE: wo_a is FP8 in checkpoint; could do FP8 einsum here for better perf,\n        # but using BF16 for simplicity.\n        o = torch.einsum(\"bsgd,grd->bsgr\", o, wo_a)\n        x = self.wo_b(o.flatten(2))\n        return x\n",
      "reference_loc": 10,
      "i18n": {
        "zh": {
          "title": "Attention —— 逆旋转与分组 O",
          "tagline": "反向 rotary + 低秩 O 投影。",
          "summary": "稀疏注意力 kernel 返回后,对每 head 输出的 rope 子段做 `inverse=True` 的旋转,把 heads 合并进 group,再通过 `[n_groups, o_lora_rank]` 的 `wo_a` 与行并行的 `wo_b` 输出。",
          "why_it_matters": [
            "旋转 + 逆旋转保证 K·Q 点积在 RoPE 空间,但输出回到模型空间。",
            "注释“BF16 for simplicity”标了一个未来的优化点 —— `wo_a` 其实可以留在 FP8。"
          ]
        }
      }
    },
    {
      "id": "i15-gate-init",
      "order": 501,
      "stage": "routing",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 546,
      "line_end": 563,
      "title": "Gate — Initialization",
      "tagline": "Hash-vs-score routing, plus an optional top-k bias.",
      "summary": "The gate stores the routing matrix `weight: [n_experts, dim]` and, for hash-routed layers, a lookup `tid2eid: [vocab_size, n_activated_experts]`. For score-routed layers (the majority) it owns a per-expert `bias` added before the top-k but NOT before the renormalised routing weights — this is the DeepSeek-V3 top-k bias trick.",
      "why_it_matters": [
        "`layer_id < n_hash_layers` selects hash routing — deterministic per-token experts.",
        "The routing-weights bypass of the bias is subtle; it's what the next lesson exercises."
      ],
      "kind": "interlude",
      "reference_code": "class Gate(nn.Module):\n    \"\"\"MoE gating: computes expert routing scores and selects top-k experts.\n    Supports hash-based routing (first n_hash_layers) where expert indices are\n    predetermined per token ID, and score-based routing (remaining layers).\"\"\"\n    def __init__(self, layer_id: int, args: ModelArgs):\n        super().__init__()\n        self.dim = args.dim\n        self.topk = args.n_activated_experts\n        self.score_func = args.score_func\n        self.route_scale = args.route_scale\n        self.hash = layer_id < args.n_hash_layers\n        self.weight = nn.Parameter(torch.empty(args.n_routed_experts, args.dim))\n        if self.hash:\n            self.tid2eid = nn.Parameter(torch.empty(args.vocab_size, args.n_activated_experts, dtype=torch.int32), requires_grad=False)\n            self.bias = None\n        else:\n            self.bias = nn.Parameter(torch.empty(args.n_routed_experts, dtype=torch.float32))\n",
      "reference_loc": 17,
      "i18n": {
        "zh": {
          "title": "Gate —— 初始化",
          "tagline": "Hash 路由 vs 打分路由,可选 top-k 偏置。",
          "summary": "Gate 存放路由矩阵 `weight: [n_experts, dim]`;hash 路由层额外拥有 `tid2eid: [vocab_size, n_activated]` 的查表。打分路由层拥有逐专家的 `bias`,它只在 top-k 选择里加,不进入最终的 routing 权重 —— 这是 DeepSeek-V3 的 top-k 偏置技巧。",
          "why_it_matters": [
            "`layer_id < n_hash_layers` 的层走 hash 路由 —— 专家完全由 token id 决定。",
            "Routing 权重绕开 bias 的做法很微妙,正是下一课练习的重点。"
          ]
        }
      }
    },
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
      "tags": [
        "gate",
        "moe"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 564,
      "line_end": 584,
      "summary": "DeepSeek-V4's Gate defaults to `sqrt(softplus(scores))`. A learnable bias shifts only the ranking used for top-k; the returned routing weight comes from the original un-biased score.",
      "paper_anchor": {
        "section": "§2.1 Designs Inherited — activation change from sigmoid to sqrtsoftplus",
        "figure": "Figure 2",
        "summary": "Paper change from V3: the affinity function is `sqrt(softplus(·))`, and a bias-assisted top-k keeps load balanced without distorting the routing weights."
      },
      "what_you_learn": [
        "Why the bias term only influences SELECTION, not the final routing weight.",
        "Why the softmax path is the only branch that already sums to 1 and doesn't need renormalization."
      ],
      "workshop_steps": [
        "Shift scores by bias only for the top-k ranking.",
        "Gather the routing weights from the ORIGINAL (unshifted) scores."
      ],
      "pitfalls": [
        "When `bias is None` you still want a copy so the caller can't mutate internal state."
      ],
      "blanks": [
        {
          "id": "shift_with_bias",
          "label": "Selection bias",
          "hint": "`[score + bias[i] for i, score in enumerate(original_scores)]`.",
          "starter": "list(original_scores)",
          "solution": "[score + bias[i] for i, score in enumerate(original_scores)]",
          "i18n": {
            "zh": {
              "label": "加偏置打分",
              "hint": "`[score + bias[i] for i, score in enumerate(original_scores)]`。"
            }
          }
        },
        {
          "id": "gather_weights",
          "label": "Gather weights",
          "hint": "Use the ORIGINAL `original_scores`, not the shifted ones.",
          "starter": "[0.0 for _ in indices]",
          "solution": "gather(original_scores, indices)",
          "i18n": {
            "zh": {
              "label": "原始权重 gather",
              "hint": "要用 *原始* `original_scores`,不是带偏置的 shifted。"
            }
          }
        }
      ],
      "starter_code": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef gather(values, indices):\n    return [values[i] for i in indices]\n\ndef topk_indices(values, k):\n    pairs = sorted(enumerate(values), key=lambda item: item[1], reverse=True)\n    return [index for index, _ in pairs[:k]]\n\ndef gate(scores, topk, bias=None, route_scale=1.0):\n    original_scores = softmax(scores)\n    if bias is not None:\n        shifted = __B_shift_with_bias__\n    else:\n        shifted = list(original_scores)\n    indices = topk_indices(shifted, topk)\n    weights = __B_gather_weights__\n    return [w * route_scale for w in weights], indices\n",
      "validator_code": "def run_checks(ns):\n    gate = ns[\"gate\"]\n    checks = []\n\n    weights, indices = gate([1.0, 2.0, 3.0], topk=2)\n    checks.append({\n        \"name\": \"Top-k without bias\",\n        \"passed\": indices == [2, 1] and weights[0] > weights[1],\n        \"expected\": \"indices=[2, 1], weights sorted desc\",\n        \"actual\": f\"indices={indices!r}, weights={weights!r}\",\n    })\n\n    weights, indices = gate([1.0, 2.0, 3.0], topk=1, bias=[5.0, 0.0, -10.0])\n    checks.append({\n        \"name\": \"Bias reroutes selection, keeps original weights\",\n        \"passed\": indices == [0] and abs(weights[0] - 0.09003057324840764) < 1e-9,\n        \"expected\": \"indices=[0], weight≈0.0900305...\",\n        \"actual\": f\"indices={indices!r}, weights={weights!r}\",\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef gather(values, indices):\n    return [values[i] for i in indices]\n\ndef topk_indices(values, k):\n    pairs = sorted(enumerate(values), key=lambda item: item[1], reverse=True)\n    return [index for index, _ in pairs[:k]]\n\ndef gate(scores, topk, bias=None, route_scale=1.0):\n    original_scores = softmax(scores)\n    if bias is not None:\n        shifted = list(original_scores)\n    else:\n        shifted = list(original_scores)\n    indices = topk_indices(shifted, topk)\n    weights = [0.0 for _ in indices]\n    return [w * route_scale for w in weights], indices\n",
      "solution_runnable": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef gather(values, indices):\n    return [values[i] for i in indices]\n\ndef topk_indices(values, k):\n    pairs = sorted(enumerate(values), key=lambda item: item[1], reverse=True)\n    return [index for index, _ in pairs[:k]]\n\ndef gate(scores, topk, bias=None, route_scale=1.0):\n    original_scores = softmax(scores)\n    if bias is not None:\n        shifted = [score + bias[i] for i, score in enumerate(original_scores)]\n    else:\n        shifted = list(original_scores)\n    indices = topk_indices(shifted, topk)\n    weights = gather(original_scores, indices)\n    return [w * route_scale for w in weights], indices\n",
      "solution_code": "def softmax(values):\n    exps = [2.718281828 ** value for value in values]\n    total = sum(exps)\n    return [value / total for value in exps]\n\ndef gather(values, indices):\n    return [values[i] for i in indices]\n\ndef topk_indices(values, k):\n    pairs = sorted(enumerate(values), key=lambda item: item[1], reverse=True)\n    return [index for index, _ in pairs[:k]]\n\ndef gate(scores, topk, bias=None, route_scale=1.0):\n    original_scores = softmax(scores)\n    if bias is not None:\n        shifted = [score + bias[i] for i, score in enumerate(original_scores)]\n    else:\n        shifted = list(original_scores)\n    indices = topk_indices(shifted, topk)\n    weights = gather(original_scores, indices)\n    return [w * route_scale for w in weights], indices\n",
      "reference_code": "    def forward(self, x: torch.Tensor, input_ids: Optional[torch.Tensor] = None) -> Tuple[torch.Tensor, torch.Tensor]:\n        scores = linear(x.float(), self.weight.float())\n        if self.score_func == \"softmax\":\n            scores = scores.softmax(dim=-1)\n        elif self.score_func == \"sigmoid\":\n            scores = scores.sigmoid()\n        else:\n            scores = F.softplus(scores).sqrt()\n        original_scores = scores\n        # Bias shifts scores for expert selection (topk) but does not affect routing weights.\n        if self.bias is not None:\n            scores = scores + self.bias\n        if self.hash:\n            indices = self.tid2eid[input_ids]\n        else:\n            indices = scores.topk(self.topk, dim=-1)[1]\n        weights = original_scores.gather(1, indices)\n        if self.score_func != \"softmax\":\n            weights /= weights.sum(dim=-1, keepdim=True)\n        weights *= self.route_scale\n        return weights, indices\n",
      "puzzle_path": "tutorial/generated/puzzles/12_s12-gate.py",
      "solution_path": "tutorial/generated/solutions/12_s12-gate.py",
      "reference_file_path": "tutorial/generated/references/12_s12-gate.py",
      "workshop_loc": 21,
      "reference_loc": 21,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "门控(top-k 偏置 + 原始权重)",
          "tagline": "偏置只影响专家选择,不影响最终路由权重。",
          "difficulty": "核心",
          "summary": "Gate 的关键技巧:`bias` 加到打分上只用于 topk 专家选择,但最终路由权重要从 *原始* (不带偏置的) scores 里 gather。这是 DeepSeek-V3 引入的 top-k 偏置 trick。",
          "what_you_learn": [
            "为什么 bias 不能影响 routing 权重 —— 那会引入不公平的幅值偏差。",
            "`gather(1, indices)` 如何按索引从原始分数里拿值。",
            "top-k 选择 vs 权重再归一化的分工。"
          ],
          "workshop_steps": [
            "`scores_shifted = original_scores + bias`,用它做 topk。",
            "最终权重 gather 自 `original_scores`(不是 shifted)。"
          ],
          "pitfalls": [
            "切记 gather 用 `original_scores`,不是 shifted。",
            "hash 路由的 `indices` 由 lookup 给出,不走 topk。"
          ]
        }
      }
    },
    {
      "id": "i16-expert-header",
      "order": 502,
      "stage": "routing",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 585,
      "line_end": 588,
      "title": "Expert — Header",
      "tagline": "A tiny docstring that sets up what Lesson 14 will decode.",
      "summary": "Just the class-level comment: every expert is a SwiGLU FFN with three Linear blocks (`w1`, `w2`, `w3`). Computation is upcast to float32 for stability, and `swiglu_limit` optionally clamps the pre-activation range to avoid FP8 saturation.",
      "why_it_matters": [
        "`swiglu_limit` is only used on routed experts, never on the shared expert."
      ],
      "kind": "interlude",
      "reference_code": "\n\nclass Expert(nn.Module):\n    \"\"\"Single MoE expert: SwiGLU FFN (w1, w2, w3). Computation in float32 for stability.\"\"\"\n",
      "reference_loc": 4,
      "i18n": {
        "zh": {
          "title": "Expert —— 头部注释",
          "tagline": "短短一段注释,说明下一课要拆什么。",
          "summary": "每个专家都是 SwiGLU FFN,包含 `w1`、`w2`、`w3` 三个 Linear。计算在 FP32 里做以保证稳定,`swiglu_limit` 可选地对预激活做 clip,防止 FP8 饱和。",
          "why_it_matters": [
            "`swiglu_limit` 只用在 routed experts,shared expert 不 clip。"
          ]
        }
      }
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
      "tags": [
        "swiglu",
        "expert"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 589,
      "line_end": 606,
      "summary": "Each Expert is a classic SwiGLU FFN: two parallel projections `gate = w1(x)` and `up = w3(x)`, combined as `silu(gate) * up`, then a down-projection `w2`.",
      "paper_anchor": {
        "section": "§2.1 DeepSeekMoE Experts",
        "figure": "—",
        "summary": "Standard SwiGLU FFN reused from V3; DeepSeek-V4 additionally supports FP4 routed-expert weights via the Linear dispatch you built in s01."
      },
      "what_you_learn": [
        "Why SwiGLU multiplies SiLU(gate) elementwise with a separate `up` projection.",
        "Why optional clipping on `gate` / `up` stabilises FP4 training."
      ],
      "workshop_steps": [
        "Compute `silu(gate) * up` elementwise.",
        "Apply `route_weight` if provided (MoE context)."
      ],
      "pitfalls": [
        "`silu(x) = x / (1 + exp(-x))` — don't mix it up with GELU."
      ],
      "blanks": [
        {
          "id": "silu_mul",
          "label": "SwiGLU combine",
          "hint": "Elementwise `silu(gate[i]) * up[i]`.",
          "starter": "[0.0 for _ in gate]",
          "solution": "[silu(gate[i]) * up[i] for i in range(len(gate))]",
          "i18n": {
            "zh": {
              "label": "SwiGLU 乘",
              "hint": "逐元素 `silu(gate[i]) * up[i]`。"
            }
          }
        }
      ],
      "starter_code": "import math\n\ndef silu(x):\n    return x / (1.0 + math.exp(-x))\n\ndef expert(gate, up, route_weight=None):\n    hidden = __B_silu_mul__\n    if route_weight is not None:\n        hidden = [route_weight * value for value in hidden]\n    return hidden\n",
      "validator_code": "import math\n\ndef run_checks(ns):\n    expert = ns[\"expert\"]\n    silu = ns[\"silu\"]\n    checks = []\n\n    out = expert([0.0, 2.0], [3.0, 5.0])\n    expected = [silu(0.0) * 3.0, silu(2.0) * 5.0]\n    ok = all(abs(a - b) < 1e-9 for a, b in zip(out, expected))\n    checks.append({\n        \"name\": \"Elementwise SwiGLU\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    })\n\n    out = expert([1.0], [1.0], route_weight=0.5)\n    expected = [0.5 * silu(1.0)]\n    ok = all(abs(a - b) < 1e-9 for a, b in zip(out, expected))\n    checks.append({\n        \"name\": \"Routing weight applied\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    })\n    return checks\n",
      "kind": "lesson",
      "starter_runnable": "import math\n\ndef silu(x):\n    return x / (1.0 + math.exp(-x))\n\ndef expert(gate, up, route_weight=None):\n    hidden = [0.0 for _ in gate]\n    if route_weight is not None:\n        hidden = [route_weight * value for value in hidden]\n    return hidden\n",
      "solution_runnable": "import math\n\ndef silu(x):\n    return x / (1.0 + math.exp(-x))\n\ndef expert(gate, up, route_weight=None):\n    hidden = [silu(gate[i]) * up[i] for i in range(len(gate))]\n    if route_weight is not None:\n        hidden = [route_weight * value for value in hidden]\n    return hidden\n",
      "solution_code": "import math\n\ndef silu(x):\n    return x / (1.0 + math.exp(-x))\n\ndef expert(gate, up, route_weight=None):\n    hidden = [silu(gate[i]) * up[i] for i in range(len(gate))]\n    if route_weight is not None:\n        hidden = [route_weight * value for value in hidden]\n    return hidden\n",
      "reference_code": "    def __init__(self, dim: int, inter_dim: int, dtype=None, swiglu_limit=0):\n        super().__init__()\n        self.w1 = Linear(dim, inter_dim, dtype=dtype)\n        self.w2 = Linear(inter_dim, dim, dtype=dtype)\n        self.w3 = Linear(dim, inter_dim, dtype=dtype)\n        self.swiglu_limit = swiglu_limit\n\n    def forward(self, x: torch.Tensor, weights: Optional[torch.Tensor] = None) -> torch.Tensor:\n        dtype = x.dtype\n        gate = self.w1(x).float()\n        up = self.w3(x).float()\n        if self.swiglu_limit > 0:\n            up = torch.clamp(up, min=-self.swiglu_limit, max=self.swiglu_limit)\n            gate = torch.clamp(gate, max=self.swiglu_limit)\n        x = F.silu(gate) * up\n        if weights is not None:\n            x = weights * x\n        return self.w2(x.to(dtype))\n",
      "puzzle_path": "tutorial/generated/puzzles/14_s14-expert-swiglu.py",
      "solution_path": "tutorial/generated/solutions/14_s14-expert-swiglu.py",
      "reference_file_path": "tutorial/generated/references/14_s14-expert-swiglu.py",
      "workshop_loc": 10,
      "reference_loc": 18,
      "blank_count": 1,
      "i18n": {
        "zh": {
          "title": "SwiGLU 专家",
          "tagline": "`SiLU(gate) * up`,再过 w2。",
          "difficulty": "核心",
          "summary": "SwiGLU 的核心是把 FFN 的激活拆成两路:`w1(x)` 作为门 gate,`w3(x)` 作为 up;最终激活是 `SiLU(gate) * up`,再过一次 `w2` 投回来。",
          "what_you_learn": [
            "SwiGLU 相比 ReLU/GELU 的优势 —— 可学习的门控。",
            "`SiLU(x) = x * sigmoid(x)` 的逐元素实现。",
            "为什么 up 和 gate 维度要一致。"
          ],
          "workshop_steps": [
            "对每个位置 `i`,计算 `silu(gate[i]) * up[i]`。"
          ],
          "pitfalls": [
            "`silu(gate) * up`,不是 `silu(gate * up)` —— 乘法在 silu 之外。"
          ]
        }
      }
    },
    {
      "id": "i17-moe-init",
      "order": 503,
      "stage": "routing",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 607,
      "line_end": 634,
      "title": "MoE — Sharding & Gate Pre-Call",
      "tagline": "Routed experts live on one rank each; the shared expert is everywhere.",
      "summary": "`MoE.__init__` splits `n_routed_experts` across ranks — rank `r` owns experts `[r·n_local, (r+1)·n_local)`. Slots outside the rank's range hold `None`. The shared expert is built on every rank (there is always exactly one). `forward` flattens `x`, runs the gate to get `(weights, indices)`, and allocates the accumulation buffer `y` in FP32 before dispatching tokens.",
      "why_it_matters": [
        "The None-valued experts in `self.experts` are NOT bugs — they mark off-rank slots.",
        "`bincount(indices)` counts tokens per expert so we can skip unused experts cheaply."
      ],
      "kind": "interlude",
      "reference_code": "\n\nclass MoE(nn.Module):\n    \"\"\"Mixture-of-Experts: gate routes each token to top-k routed experts + 1 shared expert.\n    Experts are sharded across TP ranks; each rank handles n_routed_experts // world_size experts.\"\"\"\n    def __init__(self, layer_id: int, args: ModelArgs):\n        super().__init__()\n        self.layer_id = layer_id\n        self.dim = args.dim\n        assert args.n_routed_experts % world_size == 0, f\"Number of experts must be divisible by world size (world_size={world_size})\"\n        self.n_routed_experts = args.n_routed_experts\n        self.n_local_experts = args.n_routed_experts // world_size\n        self.n_activated_experts = args.n_activated_experts\n        self.experts_start_idx = rank * self.n_local_experts\n        self.experts_end_idx = self.experts_start_idx + self.n_local_experts\n        self.gate = Gate(layer_id, args)\n        expert_dtype = torch.float4_e2m1fn_x2 if args.expert_dtype == \"fp4\" else None\n        self.experts = nn.ModuleList([Expert(args.dim, args.moe_inter_dim, dtype=expert_dtype, swiglu_limit=args.swiglu_limit) if self.experts_start_idx <= i < self.experts_end_idx else None\n                                       for i in range(self.n_routed_experts)])\n        assert args.n_shared_experts == 1\n        # no swiglu_limit\n        self.shared_experts = Expert(args.dim, args.moe_inter_dim)\n\n    def forward(self, x: torch.Tensor, input_ids: torch.Tensor) -> torch.Tensor:\n        shape = x.size()\n        x = x.view(-1, self.dim)\n        weights, indices = self.gate(x, input_ids.flatten())\n        y = torch.zeros_like(x, dtype=torch.float32)\n",
      "reference_loc": 28,
      "i18n": {
        "zh": {
          "title": "MoE —— 专家分片与门控预调用",
          "tagline": "路由专家按 rank 切分,共享专家人手一份。",
          "summary": "`MoE.__init__` 把 `n_routed_experts` 按 rank 切分:rank `r` 拥有 `[r·n_local, (r+1)·n_local)`,其他 rank 的专家位填 `None`。共享专家人手一份(每个 rank 都持有)。`forward` 把 `x` flatten 后调 gate,拿到 `(weights, indices)`,FP32 分配累加缓冲 `y` 准备分发。",
          "why_it_matters": [
            "`self.experts` 里 None 值不是 bug —— 它们标记当前 rank 不拥有这些专家。",
            "`bincount(indices)` 统计每个专家的 token 数,方便跳过空专家。"
          ]
        }
      }
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
      "tags": [
        "moe",
        "dispatch"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 635,
      "line_end": 645,
      "summary": "`MoE.forward` skips experts that received no tokens, then gathers `(idx, top)` pairs per expert and accumulates their contribution with the routing weight. A shared expert runs unconditionally on every token.",
      "paper_anchor": {
        "section": "§2.1 DeepSeekMoE",
        "figure": "Figure 2",
        "summary": "Fine-grained experts + shared expert is the DeepSeekMoE recipe; the sparse execution below avoids launching inactive experts entirely."
      },
      "what_you_learn": [
        "Why `bincount` is a cheap way to avoid launching inactive experts.",
        "Why `(token_idx, top_slot)` must BOTH be preserved — `top_slot` is the index into the routing-weight tensor."
      ],
      "workshop_steps": [
        "Compute the positions where this expert id appears in `routed`.",
        "Accumulate `expert(x) * weight` into the output."
      ],
      "pitfalls": [
        "The shared expert is always invoked — don't gate it on routing counts."
      ],
      "blanks": [
        {
          "id": "expert_positions",
          "label": "Find positions",
          "hint": "Nested loop: for each token, find every `top_slot` where `routed[token][top_slot] == expert_id`.",
          "starter": "[]",
          "solution": "[(t, k) for t, row in enumerate(routed) for k, e in enumerate(row) if e == expert_id]",
          "i18n": {
            "zh": {
              "label": "查找专家位置",
              "hint": "双层循环:对每个 token,枚举每个 `top_slot`,判断 `routed[token][top_slot] == expert_id`。"
            }
          }
        },
        {
          "id": "expert_contrib",
          "label": "Expert contribution",
          "hint": "`expert_fn(inputs[t]) * weights[t][k]` — weight lives at the top slot, not the expert id.",
          "starter": "0.0",
          "solution": "expert_fn(inputs[t]) * weights[t][k]",
          "i18n": {
            "zh": {
              "label": "专家贡献",
              "hint": "`expert_fn(inputs[t]) * weights[t][k]` —— 权重在 top_slot 位置。"
            }
          }
        }
      ],
      "starter_code": "def count_indices(routed):\n    counts = {}\n    for row in routed:\n        for expert_id in row:\n            counts[expert_id] = counts.get(expert_id, 0) + 1\n    return counts\n\ndef moe_forward(inputs, routed, weights, experts, shared_expert):\n    outputs = [0.0 for _ in inputs]\n    counts = count_indices(routed)\n\n    for expert_id, expert_fn in experts.items():\n        if counts.get(expert_id, 0) == 0:\n            continue\n        positions = __B_expert_positions__\n        for t, k in positions:\n            outputs[t] += __B_expert_contrib__\n\n    for t, value in enumerate(inputs):\n        outputs[t] += shared_expert(value)\n    return outputs\n",
      "validator_code": "def run_checks(ns):\n    moe_forward = ns[\"moe_forward\"]\n    experts = {0: lambda x: x + 1, 1: lambda x: x * 10}\n    shared = lambda x: x * 100\n    out = moe_forward(\n        inputs=[1.0, 2.0],\n        routed=[[1], [0, 1]],\n        weights=[[0.5], [0.2, 0.3]],\n        experts=experts,\n        shared_expert=shared,\n    )\n    expected = [105.0, 206.6]\n    ok = all(abs(a - b) < 1e-9 for a, b in zip(out, expected))\n    return [{\n        \"name\": \"Sparse routing + shared expert\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    }]\n",
      "kind": "lesson",
      "starter_runnable": "def count_indices(routed):\n    counts = {}\n    for row in routed:\n        for expert_id in row:\n            counts[expert_id] = counts.get(expert_id, 0) + 1\n    return counts\n\ndef moe_forward(inputs, routed, weights, experts, shared_expert):\n    outputs = [0.0 for _ in inputs]\n    counts = count_indices(routed)\n\n    for expert_id, expert_fn in experts.items():\n        if counts.get(expert_id, 0) == 0:\n            continue\n        positions = []\n        for t, k in positions:\n            outputs[t] += 0.0\n\n    for t, value in enumerate(inputs):\n        outputs[t] += shared_expert(value)\n    return outputs\n",
      "solution_runnable": "def count_indices(routed):\n    counts = {}\n    for row in routed:\n        for expert_id in row:\n            counts[expert_id] = counts.get(expert_id, 0) + 1\n    return counts\n\ndef moe_forward(inputs, routed, weights, experts, shared_expert):\n    outputs = [0.0 for _ in inputs]\n    counts = count_indices(routed)\n\n    for expert_id, expert_fn in experts.items():\n        if counts.get(expert_id, 0) == 0:\n            continue\n        positions = [(t, k) for t, row in enumerate(routed) for k, e in enumerate(row) if e == expert_id]\n        for t, k in positions:\n            outputs[t] += expert_fn(inputs[t]) * weights[t][k]\n\n    for t, value in enumerate(inputs):\n        outputs[t] += shared_expert(value)\n    return outputs\n",
      "solution_code": "def count_indices(routed):\n    counts = {}\n    for row in routed:\n        for expert_id in row:\n            counts[expert_id] = counts.get(expert_id, 0) + 1\n    return counts\n\ndef moe_forward(inputs, routed, weights, experts, shared_expert):\n    outputs = [0.0 for _ in inputs]\n    counts = count_indices(routed)\n\n    for expert_id, expert_fn in experts.items():\n        if counts.get(expert_id, 0) == 0:\n            continue\n        positions = [(t, k) for t, row in enumerate(routed) for k, e in enumerate(row) if e == expert_id]\n        for t, k in positions:\n            outputs[t] += expert_fn(inputs[t]) * weights[t][k]\n\n    for t, value in enumerate(inputs):\n        outputs[t] += shared_expert(value)\n    return outputs\n",
      "reference_code": "        counts = torch.bincount(indices.flatten(), minlength=self.n_routed_experts).tolist()\n        for i in range(self.experts_start_idx, self.experts_end_idx):\n            if counts[i] == 0:\n                continue\n            expert = self.experts[i]\n            idx, top = torch.where(indices == i)\n            y[idx] += expert(x[idx], weights[idx, top, None])\n        if world_size > 1:\n            dist.all_reduce(y)\n        y += self.shared_experts(x)\n        return y.type_as(x).view(shape)\n",
      "puzzle_path": "tutorial/generated/puzzles/13_s13-moe-dispatch.py",
      "solution_path": "tutorial/generated/solutions/13_s13-moe-dispatch.py",
      "reference_file_path": "tutorial/generated/references/13_s13-moe-dispatch.py",
      "workshop_loc": 21,
      "reference_loc": 11,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "稀疏 MoE 分发",
          "tagline": "按专家分桶,每个 token 按权重累加。",
          "difficulty": "核心",
          "summary": "对每个专家 `i`,找出所有路由到它的 (token, top_slot) 对,送入专家网络,再按 `weights[token][top_slot]` 累加到输出。",
          "what_you_learn": [
            "`expert_positions` 如何枚举 (token, top_slot) 对。",
            "为什么权重要取 `weights[t][k]` —— top_slot 位置而不是专家 id。",
            "稀疏分发避免了 all-to-all 的显存爆炸。"
          ],
          "workshop_steps": [
            "对每个 token 的每个 top_slot,判断是否等于当前 expert_id。",
            "把 `expert_fn(inputs[t]) * weights[t][k]` 加到输出。"
          ],
          "pitfalls": [
            "权重在 `weights[t][k]` (top 维度),不在 expert 维度。",
            "同一个 token 可能路由到多个专家,都要累加。"
          ]
        }
      }
    },
    {
      "id": "i18-block-init",
      "order": 600,
      "stage": "routing",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 646,
      "line_end": 673,
      "title": "Block — HC Parameter Cube",
      "tagline": "Per-block mix/base/scale tensors for the Sinkhorn mixing matrix.",
      "summary": "Each transformer block owns two HC parameter bundles (one for attention, one for FFN). `hc_attn_fn` and `hc_ffn_fn` are `[mix_hc, hc_dim]` mixing tensors. The base + scale vectors tune the Sinkhorn inputs (pre-softmax, post-sigmoid, combine-matrix). All HC parameters are allocated in FP32 via `set_dtype`.",
      "why_it_matters": [
        "`mix_hc = (2 + hc_mult) * hc_mult` spans pre + post + combination rows.",
        "`hc_dim = hc_mult * dim` so each HC copy is a full-width hidden."
      ],
      "kind": "interlude",
      "reference_code": "\n\nclass Block(nn.Module):\n    \"\"\"Transformer block with Hyper-Connections (HC) mixing.\n    Instead of a simple residual, HC maintains `hc_mult` copies of the hidden state.\n    hc_pre: reduces hc copies -> 1 via learned weighted sum (pre-weights from Sinkhorn).\n    hc_post: expands 1 -> hc copies via learned post-weights + combination matrix.\"\"\"\n    def __init__(self, layer_id: int, args: ModelArgs):\n        super().__init__()\n        self.layer_id = layer_id\n        self.norm_eps = args.norm_eps\n        self.attn = Attention(layer_id, args)\n        self.ffn = MoE(layer_id, args)\n        self.attn_norm = RMSNorm(args.dim, self.norm_eps)\n        self.ffn_norm = RMSNorm(args.dim, self.norm_eps)\n        self.hc_mult = hc_mult = args.hc_mult\n        self.hc_sinkhorn_iters = args.hc_sinkhorn_iters\n        self.hc_eps = args.hc_eps\n        mix_hc = (2 + hc_mult) * hc_mult\n        hc_dim = hc_mult * args.dim\n        with set_dtype(torch.float32):\n            self.hc_attn_fn = nn.Parameter(torch.empty(mix_hc, hc_dim))\n            self.hc_ffn_fn = nn.Parameter(torch.empty(mix_hc, hc_dim))\n            self.hc_attn_base = nn.Parameter(torch.empty(mix_hc))\n            self.hc_ffn_base = nn.Parameter(torch.empty(mix_hc))\n            self.hc_attn_scale = nn.Parameter(torch.empty(3))\n            self.hc_ffn_scale = nn.Parameter(torch.empty(3))\n",
      "reference_loc": 27,
      "i18n": {
        "zh": {
          "title": "Block —— HC 参数方阵",
          "tagline": "每个 block 为 attention 和 FFN 各备一份 mix/base/scale。",
          "summary": "每个 transformer block 拥有两套 HC 参数(一套 attention、一套 FFN)。`hc_attn_fn`、`hc_ffn_fn` 是 `[mix_hc, hc_dim]` 的 mix 张量。base 与 scale 向量调节 Sinkhorn 的输入(pre 前 softmax、post 后 sigmoid、comb 组合矩阵)。所有 HC 参数借 `set_dtype` 在 FP32 下分配。",
          "why_it_matters": [
            "`mix_hc = (2 + hc_mult) * hc_mult` 对应 pre + post + 组合行。",
            "`hc_dim = hc_mult * dim`,每份 HC 拷贝都是完整宽度的 hidden。"
          ]
        }
      }
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
      "tags": [
        "mhc",
        "hyper-connections"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 674,
      "line_end": 682,
      "summary": "`hc_pre()` RMS-normalises the flat residual, scales the `pre` logits, and then reduces `hc_mult` lanes into a single d-dim vector that the Attention / MoE see.",
      "paper_anchor": {
        "section": "§2.2 Manifold-Constrained Hyper-Connections — eq. (3)",
        "figure": "Figure 2 (Residual/Pre-Block/Post-Block Mixing)",
        "summary": "eq. (3) writes the input mapping Â_l · X_l; the code below is the fused RMS-norm + mixing step that materialises it at each block boundary."
      },
      "what_you_learn": [
        "Why mixing weights come from the CURRENT token, not a fixed residual coefficient.",
        "Why the RMS scale has to use the FLATTENED residual — not per-lane statistics."
      ],
      "workshop_steps": [
        "Scale the `pre` logits by the inverse-RMS factor.",
        "Normalize the scaled logits to a weight distribution.",
        "Collapse lanes with a weighted sum."
      ],
      "pitfalls": [
        "`sum(scaled_logits)` is your denominator only because logits are non-negative here — upstream the paper uses `sigmoid(·) + eps`."
      ],
      "blanks": [
        {
          "id": "scale_logit",
          "label": "Scale logit",
          "hint": "Multiply each logit by the inverse-RMS `scale`.",
          "starter": "value",
          "solution": "value * scale",
          "i18n": {
            "zh": {
              "label": "缩放 logit",
              "hint": "每个 logit 乘上逆 RMS `scale`。"
            }
          }
        },
        {
          "id": "collapse",
          "label": "Collapse lanes",
          "hint": "For each column, weighted-sum across lanes using `weights`.",
          "starter": "[0.0 for _ in token_states[0]]",
          "solution": "[sum(weights[lane] * token_states[lane][col] for lane in range(len(token_states))) for col in range(len(token_states[0]))]",
          "i18n": {
            "zh": {
              "label": "Lane 塌缩",
              "hint": "对每列,按 `weights` 加权求和。"
            }
          }
        }
      ],
      "starter_code": "def rms_scale(values, eps):\n    mean_square = sum(v * v for v in values) / len(values)\n    return 1.0 / ((mean_square + eps) ** 0.5)\n\ndef hc_pre(states, logits, eps=1e-6):\n    outputs = []\n    for token_states, token_logits in zip(states, logits):\n        flat = [v for lane in token_states for v in lane]\n        scale = rms_scale(flat, eps)\n        scaled_logits = [__B_scale_logit__ for value in token_logits]\n        total = sum(scaled_logits)\n        weights = [v / total for v in scaled_logits]\n        outputs.append(__B_collapse__)\n    return outputs\n",
      "validator_code": "def run_checks(ns):\n    hc_pre = ns[\"hc_pre\"]\n    out = hc_pre(\n        states=[[[1.0, 0.0], [0.0, 3.0]]],\n        logits=[[1.0, 3.0]],\n        eps=0.0,\n    )\n    expected = [[0.25, 2.25]]\n    ok = all(abs(out[0][i] - expected[0][i]) < 1e-9 for i in range(2))\n    return [{\n        \"name\": \"Weighted collapse across HC lanes\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    }]\n",
      "kind": "lesson",
      "starter_runnable": "def rms_scale(values, eps):\n    mean_square = sum(v * v for v in values) / len(values)\n    return 1.0 / ((mean_square + eps) ** 0.5)\n\ndef hc_pre(states, logits, eps=1e-6):\n    outputs = []\n    for token_states, token_logits in zip(states, logits):\n        flat = [v for lane in token_states for v in lane]\n        scale = rms_scale(flat, eps)\n        scaled_logits = [value for value in token_logits]\n        total = sum(scaled_logits)\n        weights = [v / total for v in scaled_logits]\n        outputs.append([0.0 for _ in token_states[0]])\n    return outputs\n",
      "solution_runnable": "def rms_scale(values, eps):\n    mean_square = sum(v * v for v in values) / len(values)\n    return 1.0 / ((mean_square + eps) ** 0.5)\n\ndef hc_pre(states, logits, eps=1e-6):\n    outputs = []\n    for token_states, token_logits in zip(states, logits):\n        flat = [v for lane in token_states for v in lane]\n        scale = rms_scale(flat, eps)\n        scaled_logits = [value * scale for value in token_logits]\n        total = sum(scaled_logits)\n        weights = [v / total for v in scaled_logits]\n        outputs.append([sum(weights[lane] * token_states[lane][col] for lane in range(len(token_states))) for col in range(len(token_states[0]))])\n    return outputs\n",
      "solution_code": "def rms_scale(values, eps):\n    mean_square = sum(v * v for v in values) / len(values)\n    return 1.0 / ((mean_square + eps) ** 0.5)\n\ndef hc_pre(states, logits, eps=1e-6):\n    outputs = []\n    for token_states, token_logits in zip(states, logits):\n        flat = [v for lane in token_states for v in lane]\n        scale = rms_scale(flat, eps)\n        scaled_logits = [value * scale for value in token_logits]\n        total = sum(scaled_logits)\n        weights = [v / total for v in scaled_logits]\n        outputs.append([sum(weights[lane] * token_states[lane][col] for lane in range(len(token_states))) for col in range(len(token_states[0]))])\n    return outputs\n",
      "reference_code": "    def hc_pre(self, x: torch.Tensor, hc_fn: torch.Tensor, hc_scale: torch.Tensor, hc_base: torch.Tensor):\n        # x: [b,s,hc,d], hc_fn: [mix_hc,hc*d], hc_scale: [3], hc_base: [mix_hc], y: [b,s,hc,d]\n        shape, dtype = x.size(), x.dtype\n        x = x.flatten(2).float()\n        rsqrt = torch.rsqrt(x.square().mean(-1, keepdim=True) + self.norm_eps)\n        mixes = F.linear(x, hc_fn) * rsqrt\n        pre, post, comb = hc_split_sinkhorn(mixes, hc_scale, hc_base, self.hc_mult, self.hc_sinkhorn_iters, self.hc_eps)\n        y = torch.sum(pre.unsqueeze(-1) * x.view(shape), dim=2)\n        return y.to(dtype), post, comb\n",
      "puzzle_path": "tutorial/generated/puzzles/15_s15-hc-pre.py",
      "solution_path": "tutorial/generated/solutions/15_s15-hc-pre.py",
      "reference_file_path": "tutorial/generated/references/15_s15-hc-pre.py",
      "workshop_loc": 14,
      "reference_loc": 9,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "mHC 预混合",
          "tagline": "用逆 RMS 缩放 logit,按 lane 权重收拢。",
          "difficulty": "进阶",
          "summary": "HC 预混合先用 `rsqrt` 归一化每行的幅值,得到 logits;再按每个 lane 的权重,把 `hc_mult` 份拷贝塌缩为一份送入子层。",
          "what_you_learn": [
            "`rsqrt(mean_square + eps)` 为什么作为逐行 scale。",
            "`weights[lane]` 如何把多份 lane 加权合并。",
            "这一步是 `hc_pre` —— 后续子层只看到单份 hidden。"
          ],
          "workshop_steps": [
            "对每个 logit 乘上逆 RMS scale。",
            "对每列,沿 lanes 做 `weights[lane] * value[lane]` 求和。"
          ],
          "pitfalls": [
            "scale 要广播到每个 logit,不要忘了对齐维度。",
            "加权求和的 weights 是每 lane 一个,不是每列一个。"
          ]
        }
      }
    },
    {
      "id": "gap-DeepSeek_official/model-py-683-683",
      "kind": "gap",
      "stage": "routing",
      "track": "DeepSeek_official/model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 683,
      "line_end": 683,
      "title": "Spacer",
      "tagline": "Whitespace between segments.",
      "summary": "Blank lines in the reference — preserved so segments reconstruct the file byte-for-byte.",
      "reference_code": "\n",
      "reference_loc": 1
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
      "tags": [
        "mhc",
        "residual"
      ],
      "source_path": "DeepSeek_official/model.py",
      "line_start": 684,
      "line_end": 687,
      "summary": "`hc_post()` replaces the usual `x + residual` with a learned blend. `post` weights broadcast the fresh output across lanes; `comb` mixes the old residual lanes.",
      "paper_anchor": {
        "section": "§2.2 Manifold-Constrained Hyper-Connections — eq. (5), (7)",
        "figure": "Figure 2",
        "summary": "eq. (5) + eq. (7) spell out the output mapping C_l and the residual mixing B_l; together they give us this closed-form post-mix."
      },
      "what_you_learn": [
        "Why the new output is BROADCAST into every lane via `post`.",
        "Why `comb` has to be doubly-stochastic (Sinkhorn upstream) to avoid blowing up."
      ],
      "workshop_steps": [
        "Compute `post[lane] * x[col]` for each (lane, col).",
        "Add `sum_src(comb[lane][src] * residual[src][col])` as the mixed history."
      ],
      "pitfalls": [
        "Indexing: `comb[lane][src]` reads row `lane`, column `src` — not the other way."
      ],
      "blanks": [
        {
          "id": "fresh_branch",
          "label": "Fresh branch",
          "hint": "Broadcast the fresh output: `post[lane] * x[col]`.",
          "starter": "0.0",
          "solution": "post[lane] * x[col]",
          "i18n": {
            "zh": {
              "label": "Fresh 分支",
              "hint": "广播 fresh 输出:`post[lane] * x[col]`。"
            }
          }
        },
        {
          "id": "residual_mix",
          "label": "Residual mix",
          "hint": "Sum over source lanes: `comb[lane][src] * residual[src][col]`.",
          "starter": "0.0",
          "solution": "sum(comb[lane][src] * residual[src][col] for src in range(len(residual)))",
          "i18n": {
            "zh": {
              "label": "残差混合",
              "hint": "沿 src lane 求和:`comb[lane][src] * residual[src][col]`。"
            }
          }
        }
      ],
      "starter_code": "def hc_post(x, residual, post, comb):\n    width = len(x)\n    out = []\n    for lane in range(len(post)):\n        lane_row = []\n        for col in range(width):\n            fresh = __B_fresh_branch__\n            history = __B_residual_mix__\n            lane_row.append(fresh + history)\n        out.append(lane_row)\n    return out\n",
      "validator_code": "def run_checks(ns):\n    hc_post = ns[\"hc_post\"]\n    out = hc_post(\n        x=[10.0, 20.0],\n        residual=[[1.0, 2.0], [3.0, 4.0]],\n        post=[0.1, 0.2],\n        comb=[[0.5, 0.5], [0.25, 0.75]],\n    )\n    expected = [[3.0, 5.0], [4.5, 7.5]]\n    ok = all(abs(out[i][j] - expected[i][j]) < 1e-9 for i in range(2) for j in range(2))\n    return [{\n        \"name\": \"post broadcast + comb mix\",\n        \"passed\": ok,\n        \"expected\": repr(expected),\n        \"actual\": repr(out),\n    }]\n",
      "kind": "lesson",
      "starter_runnable": "def hc_post(x, residual, post, comb):\n    width = len(x)\n    out = []\n    for lane in range(len(post)):\n        lane_row = []\n        for col in range(width):\n            fresh = 0.0\n            history = 0.0\n            lane_row.append(fresh + history)\n        out.append(lane_row)\n    return out\n",
      "solution_runnable": "def hc_post(x, residual, post, comb):\n    width = len(x)\n    out = []\n    for lane in range(len(post)):\n        lane_row = []\n        for col in range(width):\n            fresh = post[lane] * x[col]\n            history = sum(comb[lane][src] * residual[src][col] for src in range(len(residual)))\n            lane_row.append(fresh + history)\n        out.append(lane_row)\n    return out\n",
      "solution_code": "def hc_post(x, residual, post, comb):\n    width = len(x)\n    out = []\n    for lane in range(len(post)):\n        lane_row = []\n        for col in range(width):\n            fresh = post[lane] * x[col]\n            history = sum(comb[lane][src] * residual[src][col] for src in range(len(residual)))\n            lane_row.append(fresh + history)\n        out.append(lane_row)\n    return out\n",
      "reference_code": "    def hc_post(self, x: torch.Tensor, residual: torch.Tensor, post: torch.Tensor, comb: torch.Tensor):\n        # x: [b,s,d], residual: [b,s,hc,d], post: [b,s,hc], comb: [b,s,hc,hc], y: [b,s,hc,d]\n        y = post.unsqueeze(-1) * x.unsqueeze(-2) + torch.sum(comb.unsqueeze(-1) * residual.unsqueeze(-2), dim=2)\n        return y.type_as(x)\n",
      "puzzle_path": "tutorial/generated/puzzles/16_s16-hc-post.py",
      "solution_path": "tutorial/generated/solutions/16_s16-hc-post.py",
      "reference_file_path": "tutorial/generated/references/16_s16-hc-post.py",
      "workshop_loc": 11,
      "reference_loc": 4,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "mHC 后混合",
          "tagline": "fresh 分支 + 残差重组,恢复 hc_mult 份。",
          "difficulty": "进阶",
          "summary": "HC 后混合把单份输出(`x`)乘到每个 lane(fresh 分支),再把残差的各 lane 按 `comb[lane][src]` 加权求和(residual_mix),两部分相加得到新的 hc_mult 份。",
          "what_you_learn": [
            "fresh 分支 `post[lane] * x[col]` 的广播含义。",
            "`comb` 是 hc×hc 的方阵,把 src lane 映射到 dst lane。",
            "两条路的相加构成新的 lane 矩阵。"
          ],
          "workshop_steps": [
            "fresh:`post[lane] * x[col]`。",
            "residual:对 src lane 做 `comb[lane][src] * residual[src][col]` 求和。"
          ],
          "pitfalls": [
            "`comb[lane][src]` 的 lane 与 src 不要颠倒,否则矩阵方向会反。",
            "fresh 与 residual 两路的形状要一致。"
          ]
        }
      }
    },
    {
      "id": "i19-block-forward",
      "order": 601,
      "stage": "routing",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 688,
      "line_end": 702,
      "title": "Block.forward — HC Pre/Attn/Post × Pre/FFN/Post",
      "tagline": "Two HC sandwiches, one per sub-layer.",
      "summary": "The block runs two HC-wrapped sub-layers. Each is a symmetric `hc_pre → sublayer_norm → sublayer → hc_post` pipeline. The attention sub-layer uses `hc_attn_fn/scale/base` and `attn_norm`; the FFN sub-layer uses `hc_ffn_fn/scale/base` and `ffn_norm`. The residual is the *pre-mix* `x`, not the post-mix output.",
      "why_it_matters": [
        "The residual fed to `hc_post` is the input to `hc_pre`, not its output — classic mHC pattern.",
        "`hc_pre`/`hc_post` are responsible for keeping the 4 HC copies coherent."
      ],
      "kind": "interlude",
      "reference_code": "\n    def forward(self, x: torch.Tensor, start_pos: int, input_ids: Optional[torch.Tensor]) -> torch.Tensor:\n        residual = x\n        x, post, comb = self.hc_pre(x, self.hc_attn_fn, self.hc_attn_scale, self.hc_attn_base)\n        x = self.attn_norm(x)\n        x = self.attn(x, start_pos)\n        x = self.hc_post(x, residual, post, comb)\n\n        residual = x\n        x, post, comb = self.hc_pre(x, self.hc_ffn_fn, self.hc_ffn_scale, self.hc_ffn_base)\n        x = self.ffn_norm(x)\n        x = self.ffn(x, input_ids)\n        x = self.hc_post(x, residual, post, comb)\n        return x\n",
      "reference_loc": 14,
      "i18n": {
        "zh": {
          "title": "Block.forward —— HC Pre/Attn/Post × Pre/FFN/Post",
          "tagline": "两个 HC 三明治,每个子层一个。",
          "summary": "block 前向跑两个 HC 包裹的子层。每个子层都是对称的 `hc_pre → sublayer_norm → sublayer → hc_post` 流水。attention 子层用 `hc_attn_fn/scale/base` 与 `attn_norm`;FFN 子层用 `hc_ffn_fn/scale/base` 与 `ffn_norm`。残差是 *pre-mix* 的 `x`,而不是 pre-mix 之后的输出。",
          "why_it_matters": [
            "送给 `hc_post` 的残差是 `hc_pre` 的输入,不是输出 —— 这是典型的 mHC 样式。",
            "`hc_pre`/`hc_post` 负责维持 HC 副本之间的一致性。"
          ]
        }
      }
    },
    {
      "id": "i20-parallel-head",
      "order": 602,
      "stage": "routing",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 703,
      "line_end": 737,
      "title": "ParallelHead — Logits & Static HC Collapse",
      "tagline": "Final RMS norm → vocab-sharded linear → all-gather.",
      "summary": "The LM head is vocab-sharded (same as the embedding). It carries its own lightweight `hc_head` — a single sigmoid-gated reduction that collapses the HC copies into one feature map before the final norm + linear. Under TP the logits are all-gathered across ranks so every rank sees the full vocab.",
      "why_it_matters": [
        "`get_logits` only operates on the last position — the rest of the hidden is dropped for the forward pass.",
        "The `hc_head` here has no Sinkhorn — it is a direct sigmoid-mix (faster, once per step)."
      ],
      "kind": "interlude",
      "reference_code": "\nclass ParallelHead(nn.Module):\n\n    def __init__(self, vocab_size: int, dim: int, norm_eps: float = 1e-6, hc_eps: float = 1e-6):\n        super().__init__()\n        self.vocab_size = vocab_size\n        self.dim = dim\n        self.norm_eps = norm_eps\n        self.hc_eps = hc_eps\n        self.part_vocab_size = (vocab_size // world_size)\n        # lm_head in the checkpoint is stored in bf16, while the parameter here is stored in fp32 for easier computation of logits later.\n        self.weight = nn.Parameter(torch.empty(self.part_vocab_size, self.dim, dtype=torch.float32))\n\n    def get_logits(self, x):\n        return F.linear(x[:, -1].float(), self.weight)\n\n    def forward(self, x: torch.Tensor, hc_fn: torch.Tensor, hc_scale: torch.Tensor, hc_base: torch.Tensor, norm: RMSNorm):\n        # x: [b,s,hc,d]\n        x = self.hc_head(x, hc_fn, hc_scale, hc_base)\n        logits = self.get_logits(norm(x))\n        if world_size > 1:\n            all_logits = [torch.empty_like(logits) for _ in range(world_size)]\n            dist.all_gather(all_logits, logits)\n            logits = torch.cat(all_logits, dim=-1)\n        return logits\n\n    def hc_head(self, x: torch.Tensor, hc_fn: torch.Tensor, hc_scale: torch.Tensor, hc_base: torch.Tensor):\n        shape, dtype = x.size(), x.dtype\n        x = x.flatten(2).float()\n        rsqrt = torch.rsqrt(x.square().mean(-1, keepdim=True) + self.norm_eps)\n        mixes = F.linear(x, hc_fn) * rsqrt\n        pre = torch.sigmoid(mixes * hc_scale + hc_base) + self.hc_eps\n        y = torch.sum(pre.unsqueeze(-1) * x.view(shape), dim=2)\n        return y.to(dtype)\n",
      "reference_loc": 34,
      "i18n": {
        "zh": {
          "title": "ParallelHead —— Logits 与静态 HC 收拢",
          "tagline": "最终 RMS → 词表切分的线性 → all-gather。",
          "summary": "LM head 同样按词表切分。它自带一个轻量化的 `hc_head`(单 sigmoid 加权融合),在最后的 norm + linear 前把 HC 份副本合并。TP 模式下 logits 用 all-gather 拼起来,让每个 rank 都看到完整词表。",
          "why_it_matters": [
            "`get_logits` 只处理最后一个位置,其余隐藏在前向传播中被丢弃。",
            "`hc_head` 没有 Sinkhorn —— 只是 sigmoid 直混(更快,每步一次)。"
          ]
        }
      }
    },
    {
      "id": "i21-mtp-block",
      "order": 603,
      "stage": "routing",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 738,
      "line_end": 767,
      "title": "MTPBlock — Multi-Token Prediction",
      "tagline": "Reuse `Block` on a projected embedding + hidden mix.",
      "summary": "`MTPBlock` subclasses `Block` to add Multi-Token Prediction: given the main hidden and a shifted input embedding, it merges them via `e_proj`/`h_proj`, runs one transformer block, and produces speculative logits through the shared ParallelHead. During training this provides the auxiliary MTP loss; during inference it can drive speculative decoding.",
      "why_it_matters": [
        "`self.embed` and `self.head` are wired by Transformer — not owned here.",
        "The class-level `hc_head_fn`/`hc_head_scale`/`hc_head_base` are separate FP32 params for MTP's head."
      ],
      "kind": "interlude",
      "reference_code": "\nclass MTPBlock(Block):\n\n    def __init__(self, layer_id: int, args: ModelArgs):\n        super().__init__(layer_id, args)\n        self.e_proj = Linear(args.dim, args.dim)\n        self.h_proj = Linear(args.dim, args.dim)\n        self.enorm = RMSNorm(args.dim, args.norm_eps)\n        self.hnorm = RMSNorm(args.dim, args.norm_eps)\n        self.norm = RMSNorm(args.dim, args.norm_eps)\n        self.hc_mult = hc_mult = args.hc_mult\n        hc_dim = hc_mult * args.dim\n        with set_dtype(torch.float32):\n            self.hc_head_fn = nn.Parameter(torch.empty(hc_mult, hc_dim))\n            self.hc_head_base = nn.Parameter(torch.empty(hc_mult))\n            self.hc_head_scale = nn.Parameter(torch.empty(1))\n        self.embed: ParallelEmbedding = None\n        self.head: ParallelHead = None\n\n    @torch.inference_mode()\n    def forward(self, x: torch.Tensor, start_pos: int, input_ids: torch.Tensor) -> torch.Tensor:\n        # x: [b,s,hc,d]\n        assert self.embed is not None and self.head is not None\n        e = self.embed(input_ids)\n        e = self.enorm(e)\n        x = self.hnorm(x)\n        x = self.e_proj(e).unsqueeze(2) + self.h_proj(x)\n        x = super().forward(x, start_pos, input_ids)\n        logits = self.head(x, self.hc_head_fn, self.hc_head_scale, self.hc_head_base, self.norm)\n        return logits\n",
      "reference_loc": 30,
      "i18n": {
        "zh": {
          "title": "MTPBlock —— Multi-Token Prediction",
          "tagline": "复用 `Block`,输入是投影后的 embedding + hidden 融合。",
          "summary": "`MTPBlock` 继承自 `Block`,加入 Multi-Token Prediction:给定主路径隐藏和错位的输入 embedding,用 `e_proj`/`h_proj` 融合后,再过一层 Block,然后用共享的 ParallelHead 输出推测性 logits。训练期提供 MTP 辅助损失;推理期可驱动 speculative decoding。",
          "why_it_matters": [
            "`self.embed` 与 `self.head` 由 Transformer 在构造时注入 —— 这里没有自己持有。",
            "类级的 `hc_head_fn`/`hc_head_scale`/`hc_head_base` 是 MTP 头专属的 FP32 参数。"
          ]
        }
      }
    },
    {
      "id": "i22-transformer",
      "order": 604,
      "stage": "routing",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 768,
      "line_end": 810,
      "title": "Transformer — Global State & Assembly",
      "tagline": "Wire the whole model, including global precision settings.",
      "summary": "`Transformer.__init__` is where the global TP state is set (`world_size`, `rank`, `default_dtype`, `scale_fmt`, `scale_dtype`). It then builds the embedding, `n_layers` blocks, the final RMS norm, the shared `ParallelHead`, `n_mtp_layers` MTP blocks (wired to the shared embed/head), and its own head-level HC parameters. `forward` embeds the input, expands to `hc_mult` copies, runs each block, then finalizes through the head.",
      "why_it_matters": [
        "Setting globals inside `__init__` is unusual — without it, `Linear.__init__` would default to BF16.",
        "The `h.unsqueeze(2).repeat(1, 1, hc_mult, 1)` is how HC starts — identical copies."
      ],
      "kind": "interlude",
      "reference_code": "\n\nclass Transformer(nn.Module):\n    \"\"\"Full DeepSeek-V4 model: embed -> HC-expand -> N blocks -> HC-head -> logits.\n    Sets global state (world_size, rank, default_dtype, scale_fmt, scale_dtype) in __init__.\"\"\"\n    def __init__(self, args: ModelArgs):\n        global world_size, rank, default_dtype, scale_fmt, scale_dtype\n        world_size = dist.get_world_size() if dist.is_initialized() else 1\n        rank = dist.get_rank() if dist.is_initialized() else 0\n        default_dtype = torch.float8_e4m3fn if args.dtype == \"fp8\" else torch.bfloat16\n        scale_fmt = \"ue8m0\" if args.scale_dtype == \"fp8\" else args.scale_fmt\n        scale_dtype = torch.float8_e8m0fnu if args.scale_dtype == \"fp8\" else torch.float32\n        super().__init__()\n        self.max_seq_len = args.max_seq_len\n        self.norm_eps = args.norm_eps\n        self.hc_eps = args.hc_eps\n        self.embed = ParallelEmbedding(args.vocab_size, args.dim)\n        self.layers = torch.nn.ModuleList()\n        for layer_id in range(args.n_layers):\n            self.layers.append(Block(layer_id, args))\n        self.norm = RMSNorm(args.dim, self.norm_eps)\n        self.head = ParallelHead(args.vocab_size, args.dim, self.norm_eps, self.hc_eps)\n        self.mtp = torch.nn.ModuleList()\n        for layer_id in range(args.n_mtp_layers):\n            self.mtp.append(MTPBlock(args.n_layers + layer_id, args))\n            self.mtp[-1].embed = self.embed\n            self.mtp[-1].head = self.head\n        self.hc_mult = hc_mult = args.hc_mult\n        hc_dim = hc_mult * args.dim\n        with set_dtype(torch.float32):\n            self.hc_head_fn = nn.Parameter(torch.empty(hc_mult, hc_dim))\n            self.hc_head_base = nn.Parameter(torch.empty(hc_mult))\n            self.hc_head_scale = nn.Parameter(torch.empty(1))\n\n    @torch.inference_mode()\n    def forward(self, input_ids: torch.Tensor, start_pos: int = 0):\n        h = self.embed(input_ids)\n        # Expand to hc_mult copies for Hyper-Connections\n        h = h.unsqueeze(2).repeat(1, 1, self.hc_mult, 1)\n        for layer in self.layers:\n            h = layer(h, start_pos, input_ids)\n        logits = self.head(h, self.hc_head_fn, self.hc_head_scale, self.hc_head_base, self.norm)\n        return logits\n",
      "reference_loc": 43,
      "i18n": {
        "zh": {
          "title": "Transformer —— 全局状态与组装",
          "tagline": "装配整个模型,同时设置全局精度。",
          "summary": "`Transformer.__init__` 负责设置全局 TP 状态 (`world_size`、`rank`、`default_dtype`、`scale_fmt`、`scale_dtype`)。然后构建 embedding、`n_layers` 个 block、最终 RMS norm、共享的 ParallelHead、`n_mtp_layers` 个 MTP block(内部引用共享的 embed/head),以及自身的 head 级 HC 参数。`forward` 先 embed,扩展为 `hc_mult` 份,过每个 block,最后通过 head 收尾。",
          "why_it_matters": [
            "在 `__init__` 里设置全局变量不常见 —— 但不这样做,`Linear.__init__` 会默认 BF16。",
            "`h.unsqueeze(2).repeat(1, 1, hc_mult, 1)` 就是 HC 初始化 —— 所有拷贝起点相同。"
          ]
        }
      }
    },
    {
      "id": "i23-main",
      "order": 605,
      "stage": "routing",
      "track": "model.py",
      "source_path": "DeepSeek_official/model.py",
      "line_start": 811,
      "line_end": 828,
      "title": "`__main__` — Smoke Test Harness",
      "tagline": "How the reference is actually exercised.",
      "summary": "The bottom-of-file harness builds a small-sized `Transformer`, runs one prefill `(2, 128)` batch, then 22 decode steps, and finally exercises the MTP block on a hand-built hidden tensor. This is the invocation shape every lesson was extracted from — if you rebuild the model from scratch, this is the smoke test to pass.",
      "why_it_matters": [
        "`torch.manual_seed(0)` plus CUDA is what lets output shapes be deterministic.",
        "`ModelArgs(n_hash_layers=0)` bypasses the hash-routing path for the test."
      ],
      "kind": "interlude",
      "reference_code": "\n\nif __name__ == \"__main__\":\n    torch.set_default_dtype(torch.bfloat16)\n    torch.set_default_device(\"cuda\")\n    torch.manual_seed(0)\n    args = ModelArgs(n_hash_layers=0)\n    x = torch.randint(0, args.vocab_size, (2, 128))\n    model = Transformer(args)\n\n    print(model(x).size())\n    for i in range(128, 150):\n        print(i, model(x[:, 0:1], i).size())\n\n    h = torch.randn(2, 128, args.hc_mult, args.dim)\n    mtp = model.mtp[0]\n    print(mtp(h, 0, x).size())\n    print(mtp(h[:, 0:1], 1, x[:, 0:1]).size())\n",
      "reference_loc": 18,
      "i18n": {
        "zh": {
          "title": "`__main__` —— 冒烟测试",
          "tagline": "参考实现实际被这样跑起来。",
          "summary": "文件末尾的 harness 构造一个 mini `Transformer`,跑一次 `(2, 128)` 的 prefill,随后 22 步 decode,最后在手工构造的 hidden 上测 MTP block。每节课的代码都源于这种调用形态 —— 如果你从零重新实现,一律以这个 harness 作为冒烟测试。",
          "why_it_matters": [
            "`torch.manual_seed(0)` + CUDA 让输出形状确定。",
            "`ModelArgs(n_hash_layers=0)` 跳过 hash 路由分支。"
          ]
        }
      }
    },
    {
      "id": "i24-kernel-imports",
      "order": 700,
      "stage": "kernels",
      "track": "kernel.py",
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 1,
      "line_end": 39,
      "title": "TileLang Imports & IEEE 754 Fast Math",
      "tagline": "`fast_log2_ceil`, `fast_pow2`, `fast_round_scale` via bit tricks.",
      "summary": "The file imports `tilelang` + `tilelang.language as T`, declares pass configs (disable warp-specialization + TMA lowering for portability), and defines the dtype string aliases used throughout. The three `fast_*` helpers compute ceil(log2(x)) and 2^x via IEEE 754 bit manipulation — avoiding the slow `log`/`ceil` intrinsics and giving the compiler integer math to fold.",
      "why_it_matters": [
        "`fast_round_scale` is how MXFP power-of-two scales are derived in one cycle.",
        "The same bit trick is reused in the FP4 quantization kernel (Lesson 17)."
      ],
      "kind": "interlude",
      "reference_code": "import torch\nimport tilelang\nimport tilelang.language as T\nfrom typing import Tuple, Optional\n\n\ntilelang.set_log_level(\"WARNING\")\n\npass_configs = {\n    tilelang.PassConfigKey.TL_DISABLE_WARP_SPECIALIZED: True,\n    tilelang.PassConfigKey.TL_DISABLE_TMA_LOWER: True,\n}\n\nFP8 = \"float8_e4m3\"\nFP4 = \"float4_e2m1fn\"\nFE8M0 = \"float8_e8m0fnu\"\nBF16 = \"bfloat16\"\nFP32 = \"float32\"\nINT32 = \"int32\"\n\n\ndef fast_log2_ceil(x):\n    \"\"\"Compute ceil(log2(x)) via IEEE 754 bit manipulation. Avoids slow log/ceil intrinsics.\"\"\"\n    bits_x = T.reinterpret(\"uint32\", x)\n    exp_x = (bits_x >> 23) & 0xFF\n    man_bits = bits_x & ((1 << 23) - 1)\n    return T.Cast(\"int32\", exp_x - 127 + T.if_then_else(man_bits != 0, 1, 0))\n\n\ndef fast_pow2(x):\n    \"\"\"Compute 2^x for integer x via IEEE 754 bit manipulation.\"\"\"\n    bits_x = (x + 127) << 23\n    return T.reinterpret(\"float32\", bits_x)\n\n\ndef fast_round_scale(amax, fp8_max_inv):\n    return fast_pow2(fast_log2_ceil(amax * fp8_max_inv))\n",
      "reference_loc": 37,
      "i18n": {
        "zh": {
          "title": "TileLang 导入与 IEEE 754 快速数学",
          "tagline": "`fast_log2_ceil`、`fast_pow2`、`fast_round_scale` 都走位运算。",
          "summary": "文件一开始引入 `tilelang` 与 `tilelang.language as T`,声明 pass config (关闭 warp 特化与 TMA lowering 提高兼容性),并把全部 dtype 字符串别名集中。三个 `fast_*` 函数用 IEEE 754 位操作算 `ceil(log2(x))` 与 `2^x`,避免调用慢的 `log`/`ceil` intrinsic,也让编译器更容易折叠整数运算。",
          "why_it_matters": [
            "`fast_round_scale` 让 MXFP 的 2 的幂 scale 一个周期搞定。",
            "同一套位 trick 在 FP4 量化 kernel 里再次出现(见课程 17)。"
          ]
        }
      }
    },
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
      "tags": [
        "kernel",
        "fp8",
        "quantization"
      ],
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 40,
      "line_end": 102,
      "summary": "`act_quant_kernel` reduces per-block absmax, derives a scale `max(absmax, 1e-4) / FP8_MAX`, divides each value by that scale, and clamps into the FP8 range. The scale tensor is kept separately for the GEMM to multiply back.",
      "paper_anchor": {
        "section": "§3.4 FP4 QAT + §3.2 TileLang kernels",
        "figure": "Figure 2 (mixed-precision path)",
        "summary": "This is the FP8 activation quant kernel referenced by §3.2; `scale_fmt='ue8m0'` additionally rounds the scale to a power-of-two, matching MXFP8 semantics."
      },
      "what_you_learn": [
        "Why the floor `max(absmax, 1e-4)` keeps extremely cold blocks from producing zero scales.",
        "Why the clamp happens AFTER the divide — the kernel never stores FP8 values outside [-448, 448]."
      ],
      "workshop_steps": [
        "Derive the per-block scale from `absmax`.",
        "Divide each value by the scale and clamp into FP8 range."
      ],
      "pitfalls": [
        "`max(amax, 1e-4)` — a cold block could otherwise return scale = 0 and crash the divide."
      ],
      "blanks": [
        {
          "id": "scale_formula",
          "label": "Derive scale",
          "hint": "`max(amax, 1e-4) / FP8_MAX` — the paper's power-of-2 rounding lives elsewhere.",
          "starter": "1.0",
          "solution": "max(amax, 1e-4) / FP8_MAX",
          "i18n": {
            "zh": {
              "label": "scale 公式",
              "hint": "`max(amax, 1e-4) / FP8_MAX` —— MXFP 的 2 的幂取整放在别处。"
            }
          }
        },
        {
          "id": "quant_val",
          "label": "Quantized value",
          "hint": "`clamp(value / scale, -FP8_MAX, FP8_MAX)`.",
          "starter": "0.0",
          "solution": "clamp(value / scale, -FP8_MAX, FP8_MAX)",
          "i18n": {
            "zh": {
              "label": "量化值",
              "hint": "`clamp(value / scale, -FP8_MAX, FP8_MAX)`。"
            }
          }
        }
      ],
      "starter_code": "FP8_MAX = 448.0\n\ndef clamp(value, low, high):\n    return max(low, min(high, value))\n\ndef quantize_row(row, block_size):\n    quantized = []\n    scales = []\n    for start in range(0, len(row), block_size):\n        block = row[start:start + block_size]\n        amax = max(abs(v) for v in block)\n        scale = __B_scale_formula__\n        scales.append(scale)\n        for value in block:\n            quantized.append(__B_quant_val__)\n    return quantized, scales\n",
      "validator_code": "def run_checks(ns):\n    quantize_row = ns[\"quantize_row\"]\n    out, scales = quantize_row([224.0, -448.0, 1.0, -2.0], 2)\n    expected_scales = [1.0, 2.0 / 448.0]\n    scale_ok = all(abs(a - b) < 1e-12 for a, b in zip(scales, expected_scales))\n    out_ok = abs(out[0] - 224.0) < 1e-9 and abs(out[1] + 448.0) < 1e-9 and abs(out[3] + 448.0) < 1e-9\n    return [\n        {\n            \"name\": \"Per-block scale from absmax\",\n            \"passed\": scale_ok,\n            \"expected\": repr(expected_scales),\n            \"actual\": repr(scales),\n        },\n        {\n            \"name\": \"Divide + clamp quantization\",\n            \"passed\": out_ok,\n            \"expected\": \"[224.0, -448.0, ?, -448.0]\",\n            \"actual\": repr(out),\n        },\n    ]\n",
      "kind": "lesson",
      "starter_runnable": "FP8_MAX = 448.0\n\ndef clamp(value, low, high):\n    return max(low, min(high, value))\n\ndef quantize_row(row, block_size):\n    quantized = []\n    scales = []\n    for start in range(0, len(row), block_size):\n        block = row[start:start + block_size]\n        amax = max(abs(v) for v in block)\n        scale = 1.0\n        scales.append(scale)\n        for value in block:\n            quantized.append(0.0)\n    return quantized, scales\n",
      "solution_runnable": "FP8_MAX = 448.0\n\ndef clamp(value, low, high):\n    return max(low, min(high, value))\n\ndef quantize_row(row, block_size):\n    quantized = []\n    scales = []\n    for start in range(0, len(row), block_size):\n        block = row[start:start + block_size]\n        amax = max(abs(v) for v in block)\n        scale = max(amax, 1e-4) / FP8_MAX\n        scales.append(scale)\n        for value in block:\n            quantized.append(clamp(value / scale, -FP8_MAX, FP8_MAX))\n    return quantized, scales\n",
      "solution_code": "FP8_MAX = 448.0\n\ndef clamp(value, low, high):\n    return max(low, min(high, value))\n\ndef quantize_row(row, block_size):\n    quantized = []\n    scales = []\n    for start in range(0, len(row), block_size):\n        block = row[start:start + block_size]\n        amax = max(abs(v) for v in block)\n        scale = max(amax, 1e-4) / FP8_MAX\n        scales.append(scale)\n        for value in block:\n            quantized.append(clamp(value / scale, -FP8_MAX, FP8_MAX))\n    return quantized, scales\n",
      "reference_code": "@tilelang.jit(pass_configs=pass_configs)\ndef act_quant_kernel(\n    N, block_size=128, in_dtype=BF16, out_dtype=FP8, scale_dtype=FP32,\n    round_scale=False, inplace=False\n):\n    \"\"\"Block-wise FP8 quantization. inplace=True does fused quant+dequant back to BF16.\"\"\"\n    M = T.symbolic(\"M\")\n    fp8_min = -448.0\n    fp8_max = 448.0\n    fp8_max_inv = 1 / fp8_max\n    num_stages = 0 if round_scale or inplace else 2\n    blk_m = 32\n    group_size = block_size\n    # Internal computation in FP32; scale_dtype controls output storage format.\n    compute_dtype = FP32\n    out_dtype = in_dtype if inplace else out_dtype\n\n    @T.prim_func\n    def act_quant_kernel_(\n        X: T.Tensor[(M, N), in_dtype],\n        Y: T.Tensor[(M, N), out_dtype],\n        S: T.Tensor[(M, T.ceildiv(N, group_size)), scale_dtype],\n    ):\n        with T.Kernel(T.ceildiv(M, blk_m), T.ceildiv(N, group_size), threads=128) as (\n            pid_m,\n            pid_n,\n        ):\n            x_shared = T.alloc_shared((blk_m, group_size), in_dtype)\n            x_local = T.alloc_fragment((blk_m, group_size), in_dtype)\n            amax_local = T.alloc_fragment((blk_m,), compute_dtype)\n            s_local = T.alloc_fragment((blk_m,), compute_dtype)\n            y_local = T.alloc_fragment((blk_m, group_size), out_dtype)\n            y_shared = T.alloc_shared((blk_m, group_size), out_dtype)\n\n            for _ in T.Pipelined(1, num_stages=num_stages):\n                T.copy(X[pid_m * blk_m, pid_n * group_size], x_shared)\n                T.copy(x_shared, x_local)\n                T.reduce_absmax(x_local, amax_local, dim=1)\n                for i in T.Parallel(blk_m):\n                    amax_local[i] = T.max(amax_local[i], 1e-4)\n                    if round_scale:\n                        s_local[i] = fast_round_scale(amax_local[i], fp8_max_inv)\n                    else:\n                        s_local[i] = amax_local[i] * fp8_max_inv\n                if inplace:\n                    for i, j in T.Parallel(blk_m, group_size):\n                        y_local[i, j] = T.Cast(\n                            out_dtype,\n                            T.Cast(compute_dtype, T.Cast(out_dtype, T.clamp(\n                                x_local[i, j] / s_local[i], fp8_min, fp8_max\n                            ))) * s_local[i],\n                        )\n                else:\n                    for i, j in T.Parallel(blk_m, group_size):\n                        y_local[i, j] = T.clamp(\n                            x_local[i, j] / s_local[i], fp8_min, fp8_max\n                        )\n                for i in T.Parallel(blk_m):\n                    S[pid_m * blk_m + i, pid_n] = T.Cast(scale_dtype, s_local[i])\n                T.copy(y_local, y_shared)\n                T.copy(y_shared, Y[pid_m * blk_m, pid_n * group_size])\n\n    return act_quant_kernel_\n",
      "puzzle_path": "tutorial/generated/puzzles/17_s17-act-quant.py",
      "solution_path": "tutorial/generated/solutions/17_s17-act-quant.py",
      "reference_file_path": "tutorial/generated/references/17_s17-act-quant.py",
      "workshop_loc": 16,
      "reference_loc": 63,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "块级 FP8 激活量化",
          "tagline": "absmax → scale → divide + clamp。",
          "difficulty": "核心",
          "summary": "kernel 在每个 `[blk_m, group_size]` 块里 `reduce_absmax`,然后用 `max(amax, 1e-4) / FP8_MAX` 得到 scale。`inplace=True` 时先除 scale → cast FP8 → 乘 scale(QAT 模拟);否则直接 clamp 到 FP8 范围后输出。",
          "what_you_learn": [
            "为什么需要 `max(amax, 1e-4)` —— 防止全零块产生除零。",
            "`round_scale` 和 `scale_fmt` 的关系 —— MXFP 需要 2 的幂次 scale。",
            "inplace 的 QAT 模拟如何保持 BF16 输出但已经等效 FP8 精度。"
          ],
          "workshop_steps": [
            "写出 scale = `max(amax, 1e-4) / FP8_MAX`。",
            "对每个值 `value / scale` 再 clamp 到 `[-FP8_MAX, FP8_MAX]`。"
          ],
          "pitfalls": [
            "`scale = amax / FP8_MAX`,不是 `FP8_MAX / amax`。",
            "clamp 是对称的 `[-FP8_MAX, FP8_MAX]`。"
          ]
        }
      }
    },
    {
      "id": "i25-act-quant-wrapper",
      "order": 701,
      "stage": "kernels",
      "track": "kernel.py",
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 103,
      "line_end": 127,
      "title": "`act_quant` — Tensor-Level Wrapper",
      "tagline": "Allocate outputs, JIT the kernel, run it.",
      "summary": "The wrapper reshapes the activation into `[M, N]`, allocates `y` (same dtype if `inplace`, else FP8), allocates the per-block scale tensor `s`, JITs the kernel for the current config, and invokes it. When `inplace=True`, the quant+dequant result is copied back into the input tensor and no scale tensor is returned.",
      "why_it_matters": [
        "The `assert N % block_size == 0` is what makes block-wise quant tractable.",
        "`round_scale` is automatically turned on when `scale_fmt` is set (MXFP semantics)."
      ],
      "kind": "interlude",
      "reference_code": "\n\ndef act_quant(\n    x: torch.Tensor, block_size: int = 128, scale_fmt: Optional[str] = None,\n    scale_dtype: torch.dtype = torch.float32, inplace: bool = False,\n) -> torch.Tensor:\n    \"\"\"Block-wise FP8 quantization. inplace=True does fused quant+dequant back to BF16.\n    When scale_fmt is set, scales are rounded to power-of-2 (MXFP).\"\"\"\n    N = x.size(-1)\n    assert N % block_size == 0\n    tl_dtype = FE8M0 if scale_dtype == torch.float8_e8m0fnu else FP32\n    z = x.contiguous()\n    y = torch.empty_like(z) if inplace else torch.empty_like(z, dtype=torch.float8_e4m3fn)\n    s = z.new_empty(*z.size()[:-1], N // block_size, dtype=scale_dtype)\n    kernel = act_quant_kernel(\n        N, block_size, scale_dtype=tl_dtype,\n        round_scale=scale_fmt is not None, inplace=inplace,\n    )\n    kernel(z.view(-1, N), y.view(-1, N), s.view(-1, N // block_size))\n    if inplace:\n        x.copy_(y)\n        return x\n    return y, s\n",
      "reference_loc": 23,
      "i18n": {
        "zh": {
          "title": "`act_quant` —— 张量级包装",
          "tagline": "准备输入输出、JIT、调用 kernel。",
          "summary": "包装函数把激活重排成 `[M, N]`,根据 `inplace` 决定输出张量的 dtype (inplace 时与输入同,否则 FP8),分配 per-block scale 张量 `s`,按当前配置 JIT 出 kernel 并执行。`inplace=True` 时把 quant+dequant 的结果拷贝回输入,不返回 scale。",
          "why_it_matters": [
            "`assert N % block_size == 0` 是分块量化的前提。",
            "设置 `scale_fmt` 会自动开启 `round_scale` —— 走 MXFP 语义。"
          ]
        }
      }
    },
    {
      "id": "i26-fp4-quant",
      "order": 702,
      "stage": "kernels",
      "track": "kernel.py",
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 128,
      "line_end": 201,
      "title": "`fp4_quant_kernel` + `fp4_act_quant`",
      "tagline": "FP4's tiny dynamic range makes every bit precious.",
      "summary": "Block-wise FP4 quantization uses the same overall shape as the FP8 kernel but with block 32, `fp4_max = 6.0`, and a power-of-two scale via `fast_round_scale`. A subnormal-safe floor (`6 * 2**-126`) keeps absmax from underflowing. The wrapper allocates the packed FP4 storage (`N // 2` bytes along the last axis).",
      "why_it_matters": [
        "FP4 quantization here is the output side of the same kernel that `fp4_gemm` consumes.",
        "Without the floor, absmax=0 blocks would produce NaN scales."
      ],
      "kind": "interlude",
      "reference_code": "@tilelang.jit(pass_configs=pass_configs)\ndef fp4_quant_kernel(\n    N, block_size=32, in_dtype=BF16, scale_dtype=FE8M0, inplace=False\n):\n    \"\"\"Block-wise FP4 quantization. Power-of-2 scale via bit ops. inplace=True does fused quant+dequant.\"\"\"\n    M = T.symbolic(\"M\")\n    fp4_max = 6.0\n    fp4_max_inv = 1.0 / fp4_max\n    blk_m = 32\n    group_size = block_size\n    compute_dtype = FP32\n    out_dtype = in_dtype if inplace else FP4\n\n    @T.prim_func\n    def fp4_quant_kernel_(\n        X: T.Tensor[(M, N), in_dtype],\n        Y: T.Tensor[(M, N), out_dtype],\n        S: T.Tensor[(M, T.ceildiv(N, group_size)), scale_dtype],\n    ):\n        with T.Kernel(T.ceildiv(M, blk_m), T.ceildiv(N, group_size), threads=128) as (\n            pid_m,\n            pid_n,\n        ):\n            x_shared = T.alloc_shared((blk_m, group_size), in_dtype)\n            x_local = T.alloc_fragment((blk_m, group_size), in_dtype)\n            amax_local = T.alloc_fragment((blk_m,), compute_dtype)\n            s_local = T.alloc_fragment((blk_m,), compute_dtype)\n            y_local = T.alloc_fragment((blk_m, group_size), out_dtype)\n            y_shared = T.alloc_shared((blk_m, group_size), out_dtype)\n\n            for _ in T.Pipelined(1, num_stages=2):\n                T.copy(X[pid_m * blk_m, pid_n * group_size], x_shared)\n                T.copy(x_shared, x_local)\n                T.reduce_absmax(x_local, amax_local, dim=1)\n                for i in T.Parallel(blk_m):\n                    amax_local[i] = T.max(amax_local[i], 6 * (2**-126))\n                    s_local[i] = fast_round_scale(amax_local[i], fp4_max_inv)\n                if inplace:\n                    for i, j in T.Parallel(blk_m, group_size):\n                        y_local[i, j] = T.Cast(\n                            out_dtype,\n                            T.Cast(compute_dtype, T.Cast(FP4, T.clamp(\n                                x_local[i, j] / s_local[i], -fp4_max, fp4_max\n                            ))) * s_local[i],\n                        )\n                else:\n                    for i, j in T.Parallel(blk_m, group_size):\n                        y_local[i, j] = T.clamp(\n                            x_local[i, j] / s_local[i], -fp4_max, fp4_max\n                        )\n                for i in T.Parallel(blk_m):\n                    S[pid_m * blk_m + i, pid_n] = T.Cast(scale_dtype, s_local[i])\n                T.copy(y_local, y_shared)\n                T.copy(y_shared, Y[pid_m * blk_m, pid_n * group_size])\n\n    return fp4_quant_kernel_\n\n\ndef fp4_act_quant(\n    x: torch.Tensor, block_size: int = 32, inplace: bool = False,\n) -> torch.Tensor:\n    \"\"\"Block-wise FP4 quantization. inplace=True does fused quant+dequant back to BF16.\"\"\"\n    N = x.size(-1)\n    assert N % block_size == 0\n    z = x.contiguous()\n    y = torch.empty_like(z) if inplace else z.new_empty(*z.shape[:-1], N // 2, dtype=torch.float4_e2m1fn_x2)\n    s = z.new_empty(*z.size()[:-1], N // block_size, dtype=torch.float8_e8m0fnu)\n    kernel = fp4_quant_kernel(N, block_size, inplace=inplace)\n    kernel(z.view(-1, N), y.view(-1, y.size(-1)), s.view(-1, N // block_size))\n    if inplace:\n        x.copy_(y)\n        return x\n    return y, s\n",
      "reference_loc": 73,
      "i18n": {
        "zh": {
          "title": "`fp4_quant_kernel` 与 `fp4_act_quant`",
          "tagline": "FP4 的动态范围极小,每一位都要争。",
          "summary": "分块 FP4 量化与 FP8 kernel 同形,但块大小是 32,`fp4_max = 6.0`,scale 用 `fast_round_scale` 取 2 的幂。`max(absmax, 6 * 2**-126)` 做次正规保护,避免绝零块产生 NaN scale。包装函数负责分配打包 FP4 存储 (最后一维是 `N // 2` 字节)。",
          "why_it_matters": [
            "这里 FP4 量化的输出就是 `fp4_gemm` 的权重输入端。",
            "没有那条下界保护,`absmax = 0` 的块会 NaN。"
          ]
        }
      }
    },
    {
      "id": "i27-fp8-gemm",
      "order": 703,
      "stage": "kernels",
      "track": "kernel.py",
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 202,
      "line_end": 275,
      "title": "`fp8_gemm_kernel` + Wrapper",
      "tagline": "C[M,N] = A[M,K] @ B[N,K]ᵀ with per-128 FP8 scales on both operands.",
      "summary": "The FP8 GEMM is a classic tiled GEMM with `block_M=32`, `block_N=block_K=128`, 4-stage pipelined K loop, and per-block scale correction applied in FP32 via a second accumulator (`C_local_accum`). Scales_B has one value per block_N group; scales_A has one per row per K block. The wrapper contracts input shapes into `(M, K)` and allocates the output in the current default dtype.",
      "why_it_matters": [
        "Two accumulators (`C_local` in-tile, `C_local_accum` scale-corrected) give 2× accumulation precision.",
        "`T.use_swizzle(panel_size=10)` reorders tiles for L2 locality."
      ],
      "kind": "interlude",
      "reference_code": "\n@tilelang.jit(pass_configs=pass_configs)\ndef fp8_gemm_kernel(N, K, out_dtype=BF16, accum_dtype=FP32, scale_dtype=FP32):\n    assert out_dtype in [BF16, FP32]\n\n    M = T.symbolic(\"M\")\n    group_size = 128\n    block_M = 32\n    block_N = 128\n    block_K = 128\n\n    @T.prim_func\n    def fp8_gemm_kernel_(\n        A: T.Tensor[(M, K), FP8],\n        B: T.Tensor[(N, K), FP8],\n        C: T.Tensor[(M, N), out_dtype],\n        scales_a: T.Tensor[(M, T.ceildiv(K, group_size)), scale_dtype],\n        scales_b: T.Tensor[(T.ceildiv(N, group_size), T.ceildiv(K, group_size)), scale_dtype],\n    ):\n        with T.Kernel(T.ceildiv(N, block_N), T.ceildiv(M, block_M), threads=128) as (\n            bx,\n            by,\n        ):\n            A_shared = T.alloc_shared((block_M, block_K), FP8)\n            B_shared = T.alloc_shared((block_N, block_K), FP8)\n            C_shared = T.alloc_shared((block_M, block_N), out_dtype)\n            Scale_C_shared = T.alloc_shared((block_M), FP32)\n            C_local = T.alloc_fragment((block_M, block_N), accum_dtype)\n            C_local_accum = T.alloc_fragment((block_M, block_N), accum_dtype)\n\n            # Improve L2 Cache\n            T.use_swizzle(panel_size=10)\n            T.clear(C_local)\n            T.clear(C_local_accum)\n\n            K_iters = T.ceildiv(K, block_K)\n            for k in T.Pipelined(K_iters, num_stages=4):\n                T.copy(A[by * block_M, k * block_K], A_shared)\n                T.copy(B[bx * block_N, k * block_K], B_shared)\n                # Cast scales to FP32 for computation; scales_b has one value per block_N group\n                Scale_B = T.Cast(FP32, scales_b[bx * block_N // group_size, k])\n                for i in T.Parallel(block_M):\n                    Scale_C_shared[i] = T.Cast(FP32, scales_a[by * block_M + i, k]) * Scale_B\n\n                T.gemm(A_shared, B_shared, C_local, transpose_B=True)\n                # Separate accumulator for scale-corrected results (2x accumulation precision)\n                for i, j in T.Parallel(block_M, block_N):\n                    C_local_accum[i, j] += C_local[i, j] * Scale_C_shared[i]\n                T.clear(C_local)\n            T.copy(C_local_accum, C_shared)\n            T.copy(C_shared, C[by * block_M, bx * block_N])\n\n    return fp8_gemm_kernel_\n\n\ndef fp8_gemm(\n    a: torch.Tensor, a_s: torch.Tensor, b: torch.Tensor, b_s: torch.Tensor,\n    scale_dtype: torch.dtype = torch.float32,\n) -> torch.Tensor:\n    \"\"\"C[M,N] = A[M,K] @ B[N,K]^T with per-128 block FP8 scaling on both A and B.\"\"\"\n    assert a.is_contiguous() and b.is_contiguous(), \"Input tensors must be contiguous\"\n    assert a_s.is_contiguous() and b_s.is_contiguous(), (\n        \"Scaling factor tensors must be contiguous\"\n    )\n    tl_dtype = FE8M0 if scale_dtype == torch.float8_e8m0fnu else FP32\n    K = a.size(-1)\n    M = a.numel() // K\n    N = b.size(0)\n    c = a.new_empty(*a.size()[:-1], N, dtype=torch.get_default_dtype())\n    kernel = fp8_gemm_kernel(N, K, scale_dtype=tl_dtype)\n    kernel(a.view(M, K), b, c.view(M, N), a_s.view(M, -1), b_s)\n    return c\n",
      "reference_loc": 72,
      "i18n": {
        "zh": {
          "title": "`fp8_gemm_kernel` 与包装",
          "tagline": "C[M,N] = A[M,K] @ B[N,K]ᵀ,双侧每 128 一个 FP8 scale。",
          "summary": "FP8 GEMM 是经典的 tiled GEMM:`block_M=32`、`block_N=block_K=128`、K 循环 4 级流水,scale 校正通过第二个累加器 `C_local_accum` 在 FP32 下完成。`scales_B` 每 block_N 组一个,`scales_A` 每行每 K 块一个。包装函数把输入 reshape 成 `(M, K)`,输出使用当前默认 dtype。",
          "why_it_matters": [
            "双累加器(tile 内 `C_local`,scale 校正 `C_local_accum`)提供 2× 累加精度。",
            "`T.use_swizzle(panel_size=10)` 重新排 tile 顺序以命中 L2。"
          ]
        }
      }
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
      "tags": [
        "kernel",
        "sparse-attention",
        "flashattention"
      ],
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 276,
      "line_end": 352,
      "summary": "The sparse attention kernel sweeps the top-k indices in blocks, maintains a running max, and rescales the accumulator each time the max changes — classic FlashAttention online softmax. `attn_sink` is folded into the denominator at the very end.",
      "paper_anchor": {
        "section": "§2.3.1 CSA — eq. (18)-(19)",
        "figure": "Figure 3",
        "summary": "Sparse attention with top-k KV entries; the online softmax below is the kernel recipe inside `sparse_attn_kernel`."
      },
      "what_you_learn": [
        "Why the max update must rescale BOTH the numerator AND the denominator.",
        "Why `attn_sink` only enters the denominator once — it doesn't accumulate values."
      ],
      "workshop_steps": [
        "Update the running max when a new score arrives.",
        "Rescale the running numerator and denominator with `exp(prev_max - new_max)`.",
        "Add the `attn_sink` term to the denominator at the end."
      ],
      "pitfalls": [
        "`rescale = exp(prev_max - running_max)` — `running_max` appears SECOND, giving a value ≤ 1."
      ],
      "blanks": [
        {
          "id": "update_max",
          "label": "Update running max",
          "hint": "`max(running_max, score)`.",
          "starter": "score",
          "solution": "max(running_max, score)",
          "i18n": {
            "zh": {
              "label": "更新 running max",
              "hint": "`max(running_max, score)`。"
            }
          }
        },
        {
          "id": "update_num",
          "label": "Update numerator",
          "hint": "`weighted_sum * rescale + exp_score * kv[idx]`.",
          "starter": "exp_score * kv[idx]",
          "solution": "weighted_sum * rescale + exp_score * kv[idx]",
          "i18n": {
            "zh": {
              "label": "更新分子",
              "hint": "`weighted_sum * rescale + exp_score * kv[idx]`。"
            }
          }
        },
        {
          "id": "update_den",
          "label": "Update denominator",
          "hint": "`running_sum * rescale + exp_score`.",
          "starter": "exp_score",
          "solution": "running_sum * rescale + exp_score",
          "i18n": {
            "zh": {
              "label": "更新分母",
              "hint": "`running_sum * rescale + exp_score`。"
            }
          }
        },
        {
          "id": "final_den",
          "label": "Final denominator",
          "hint": "`running_sum + sink` — add the sink bias AFTER the loop.",
          "starter": "running_sum",
          "solution": "running_sum + sink",
          "i18n": {
            "zh": {
              "label": "最终分母",
              "hint": "`running_sum + sink` —— 循环结束后加 sink bias。"
            }
          }
        }
      ],
      "starter_code": "import math\n\ndef sparse_attn_scalar(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):\n    running_max = float(\"-inf\")\n    running_sum = 0.0\n    weighted_sum = 0.0\n\n    for idx in topk_idxs:\n        if idx == -1:\n            continue\n        score = q * kv[idx] * scale\n        prev_max = running_max\n        running_max = __B_update_max__\n        rescale = 0.0 if prev_max == float(\"-inf\") else math.exp(prev_max - running_max)\n        exp_score = math.exp(score - running_max)\n        weighted_sum = __B_update_num__\n        running_sum = __B_update_den__\n\n    sink = math.exp(attn_sink - running_max)\n    return weighted_sum / (__B_final_den__)\n",
      "validator_code": "import math\n\ndef dense_reference(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):\n    selected = [kv[i] for i in topk_idxs if i != -1]\n    scores = [q * v * scale for v in selected]\n    scores.append(attn_sink)\n    mmax = max(scores)\n    exps = [math.exp(s - mmax) for s in scores]\n    return sum(exps[i] * selected[i] for i in range(len(selected))) / sum(exps)\n\ndef run_checks(ns):\n    sparse_attn_scalar = ns[\"sparse_attn_scalar\"]\n    q, kv, idxs = 2.0, [1.0, 3.0, 5.0], [2, 0, -1]\n    got = sparse_attn_scalar(q, kv, idxs, scale=0.5, attn_sink=-1.0)\n    want = dense_reference(q, kv, idxs, scale=0.5, attn_sink=-1.0)\n    return [{\n        \"name\": \"Matches dense reference\",\n        \"passed\": abs(got - want) < 1e-9,\n        \"expected\": repr(want),\n        \"actual\": repr(got),\n    }]\n",
      "kind": "lesson",
      "starter_runnable": "import math\n\ndef sparse_attn_scalar(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):\n    running_max = float(\"-inf\")\n    running_sum = 0.0\n    weighted_sum = 0.0\n\n    for idx in topk_idxs:\n        if idx == -1:\n            continue\n        score = q * kv[idx] * scale\n        prev_max = running_max\n        running_max = score\n        rescale = 0.0 if prev_max == float(\"-inf\") else math.exp(prev_max - running_max)\n        exp_score = math.exp(score - running_max)\n        weighted_sum = exp_score * kv[idx]\n        running_sum = exp_score\n\n    sink = math.exp(attn_sink - running_max)\n    return weighted_sum / (running_sum)\n",
      "solution_runnable": "import math\n\ndef sparse_attn_scalar(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):\n    running_max = float(\"-inf\")\n    running_sum = 0.0\n    weighted_sum = 0.0\n\n    for idx in topk_idxs:\n        if idx == -1:\n            continue\n        score = q * kv[idx] * scale\n        prev_max = running_max\n        running_max = max(running_max, score)\n        rescale = 0.0 if prev_max == float(\"-inf\") else math.exp(prev_max - running_max)\n        exp_score = math.exp(score - running_max)\n        weighted_sum = weighted_sum * rescale + exp_score * kv[idx]\n        running_sum = running_sum * rescale + exp_score\n\n    sink = math.exp(attn_sink - running_max)\n    return weighted_sum / (running_sum + sink)\n",
      "solution_code": "import math\n\ndef sparse_attn_scalar(q, kv, topk_idxs, scale=1.0, attn_sink=0.0):\n    running_max = float(\"-inf\")\n    running_sum = 0.0\n    weighted_sum = 0.0\n\n    for idx in topk_idxs:\n        if idx == -1:\n            continue\n        score = q * kv[idx] * scale\n        prev_max = running_max\n        running_max = max(running_max, score)\n        rescale = 0.0 if prev_max == float(\"-inf\") else math.exp(prev_max - running_max)\n        exp_score = math.exp(score - running_max)\n        weighted_sum = weighted_sum * rescale + exp_score * kv[idx]\n        running_sum = running_sum * rescale + exp_score\n\n    sink = math.exp(attn_sink - running_max)\n    return weighted_sum / (running_sum + sink)\n",
      "reference_code": "@tilelang.jit(pass_configs=pass_configs)\ndef sparse_attn_kernel(h: int, d: int, scale=None):\n    \"\"\"Sparse multi-head attention via index gathering + online softmax (FlashAttention-style).\n    For each (batch, seq_pos), gathers top-k KV positions by index, computes attention\n    with numerically stable running max/sum, and includes a learnable attn_sink bias.\"\"\"\n    b = T.symbolic(\"b\")\n    m = T.symbolic(\"m\")\n    n = T.symbolic(\"n\")\n    topk = T.symbolic(\"topk\")\n    if scale is None:\n        scale = (1.0 / d) ** 0.5\n\n    num_stages = 2\n    threads = 256\n    block = 64\n    num_blocks = tilelang.cdiv(topk, block)\n\n    @T.prim_func\n    def sparse_attn_kernel_(\n        q: T.Tensor[(b, m, h, d), BF16],\n        kv: T.Tensor[(b, n, d), BF16],\n        o: T.Tensor[(b, m, h, d), BF16],\n        attn_sink: T.Tensor[(h,), FP32],\n        topk_idxs: T.Tensor[(b, m, topk), INT32],\n    ):\n        with T.Kernel(m, b, threads=threads) as (bx, by):\n            q_shared = T.alloc_shared((h, d), BF16)\n            kv_shared = T.alloc_shared((block, d), BF16)\n            o_shared = T.alloc_shared((h, d), BF16)\n            acc_s_cast = T.alloc_shared((h, block), BF16)\n\n            idxs = T.alloc_fragment(block, INT32)\n            acc_s = T.alloc_fragment((h, block), FP32)\n            acc_o = T.alloc_fragment((h, d), FP32)\n            scores_max = T.alloc_fragment(h, FP32)\n            scores_max_prev = T.alloc_fragment(h, FP32)\n            scores_scale = T.alloc_fragment(h, FP32)\n            scores_sum = T.alloc_fragment(h, FP32)\n            sum_exp = T.alloc_fragment(h, FP32)\n\n            T.clear(acc_o)\n            T.clear(sum_exp)\n            T.fill(scores_max, -T.infinity(FP32))\n            T.copy(q[by, bx, :, :], q_shared)\n\n            for t in T.Pipelined(num_blocks, num_stages=num_stages):\n                for i in T.Parallel(block):\n                    idxs[i] = T.if_then_else(t * block + i < topk, topk_idxs[by, bx, t * block + i], -1)\n                for i, j in T.Parallel(block, d):\n                    kv_shared[i, j] = T.if_then_else(idxs[i] != -1, kv[by, idxs[i], j], 0)\n                for i, j in T.Parallel(h, block):\n                    acc_s[i, j] = T.if_then_else(idxs[j] != -1, 0, -T.infinity(FP32))\n                T.gemm(q_shared, kv_shared, acc_s, transpose_B=True, policy=T.GemmWarpPolicy.FullRow)\n                for i, j in T.Parallel(h, block):\n                    acc_s[i, j] *= scale\n                T.copy(scores_max, scores_max_prev)\n                T.reduce_max(acc_s, scores_max, dim=1, clear=False)\n                for i in T.Parallel(h):\n                    scores_scale[i] = T.exp(scores_max_prev[i] - scores_max[i])\n                for i, j in T.Parallel(h, block):\n                    acc_s[i, j] = T.exp(acc_s[i, j] - scores_max[i])\n                T.reduce_sum(acc_s, scores_sum, dim=1)\n                for i in T.Parallel(h):\n                    sum_exp[i] = sum_exp[i] * scores_scale[i] + scores_sum[i]\n                T.copy(acc_s, acc_s_cast)\n                for i, j in T.Parallel(h, d):\n                    acc_o[i, j] *= scores_scale[i]\n                T.gemm(acc_s_cast, kv_shared, acc_o, policy=T.GemmWarpPolicy.FullRow)\n\n            for i in T.Parallel(h):\n                sum_exp[i] += T.exp(attn_sink[i] - scores_max[i])\n            for i, j in T.Parallel(h, d):\n                acc_o[i, j] /= sum_exp[i]\n            T.copy(acc_o, o_shared)\n            T.copy(o_shared, o[by, bx, :, :])\n\n    return sparse_attn_kernel_\n",
      "puzzle_path": "tutorial/generated/puzzles/19_s19-sparse-attn.py",
      "solution_path": "tutorial/generated/solutions/19_s19-sparse-attn.py",
      "reference_file_path": "tutorial/generated/references/19_s19-sparse-attn.py",
      "workshop_loc": 20,
      "reference_loc": 77,
      "blank_count": 4,
      "i18n": {
        "zh": {
          "title": "稀疏注意力在线 Softmax",
          "tagline": "running max + running sum,再加 attn_sink。",
          "difficulty": "进阶",
          "summary": "稀疏注意力逐块更新 running max 和 running sum:先 `exp(score - running_max)` 累加分子/分母,然后把 `attn_sink` 作为一个虚拟的 logit 加到最终分母上。",
          "what_you_learn": [
            "在线 softmax 如何用增量 max 保持数值稳定。",
            "为什么分母要再加一个 sink 项 —— 给模型一个“不聚焦”的选项。",
            "增量更新的 rescale = `exp(prev_max - running_max)`。"
          ],
          "workshop_steps": [
            "`running_max = max(running_max, score)`。",
            "`numerator = weighted_sum * rescale + exp_score * kv[idx]`。",
            "`denominator = running_sum * rescale + exp_score`。",
            "循环结束后把 `running_sum + sink` 作为最终分母。"
          ],
          "pitfalls": [
            "`running_max` 不能初始化为 `float('-inf')` 的同时又用 exp —— 会 underflow/NaN。",
            "sink 要在循环 *之后* 加,不是每步加。"
          ]
        }
      }
    },
    {
      "id": "i28-sparse-attn-wrapper",
      "order": 704,
      "stage": "kernels",
      "track": "kernel.py",
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 353,
      "line_end": 370,
      "title": "`sparse_attn` — Head Padding Wrapper",
      "tagline": "Pad to `h=16` for kernel efficiency, narrow back afterwards.",
      "summary": "Before invoking the sparse-attention kernel, the wrapper pads the head dimension to 16 (concatenating zeros if `h<16`) so the per-head fragments hit the warp-tile optimum. After the kernel returns, the extra heads are sliced off via `narrow`. `attn_sink` is padded to match.",
      "why_it_matters": [
        "Index-head count in V4 (`index_n_heads=64`, `n_heads=64`) doesn't need padding at runtime, but the kernel is defensive.",
        "`.contiguous()` after `narrow` is needed so downstream GEMMs see a clean layout."
      ],
      "kind": "interlude",
      "reference_code": "\n\ndef sparse_attn(\n    q: torch.Tensor, kv: torch.Tensor, attn_sink: torch.Tensor, topk_idxs: torch.Tensor, softmax_scale: float\n) -> torch.Tensor:\n    b, s, h, d = q.size()\n    # Pad heads to 16 for kernel efficiency (stripped after)\n    if h < 16:\n        q = torch.cat([q, q.new_zeros(b, s, 16 - h, d)], dim=2)\n        attn_sink = torch.cat([attn_sink, attn_sink.new_zeros(16 - h)])\n    o = torch.empty_like(q)\n    kernel = sparse_attn_kernel(q.size(2), d, softmax_scale)\n    kernel(q, kv, o, attn_sink, topk_idxs)\n    if h < 16:\n        o = o.narrow(2, 0, h).contiguous()\n    return o\n",
      "reference_loc": 16,
      "i18n": {
        "zh": {
          "title": "`sparse_attn` —— head 补齐包装",
          "tagline": "head 数补到 16 再下发 kernel,返回后切回来。",
          "summary": "调用稀疏注意力 kernel 前,包装函数把 head 维补齐到 16 (不够时拼 0),让每 head 的 fragment 大小刚好落在 warp tile 最佳区间。kernel 返回后再用 `narrow` 裁回原 head 数,`attn_sink` 也做相应补齐。",
          "why_it_matters": [
            "V4 里 (`index_n_heads=64`、`n_heads=64`) 实际并不需要补齐,但 kernel 防御性地保留了这条路径。",
            "`narrow` 之后一定要 `.contiguous()`,下游 GEMM 才能读到干净布局。"
          ]
        }
      }
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
      "tags": [
        "sinkhorn",
        "mhc"
      ],
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 371,
      "line_end": 438,
      "summary": "mHC projects its `comb` matrix onto the Birkhoff polytope with the Sinkhorn-Knopp algorithm: start from a softmax-normalised matrix, then alternate row and column normalisation until the matrix is approximately doubly stochastic.",
      "paper_anchor": {
        "section": "§2.2 mHC — eq. (8)",
        "figure": "Figure 2 (Residual Mixing)",
        "summary": "eq. (8) is the Sinkhorn-Knopp iteration; the manifold constraint caps the spectral norm of `B_l` at 1 and stabilises the deep HC stack."
      },
      "what_you_learn": [
        "Why a row-normalised matrix isn't doubly stochastic — you need columns too.",
        "Why a handful of iterations is enough in practice (the paper uses 20)."
      ],
      "workshop_steps": [
        "Divide each column by its sum.",
        "Alternate row and column normalisation inside the loop."
      ],
      "pitfalls": [
        "Add `eps` to denominators — zero-sum columns are uncommon but legal at init."
      ],
      "blanks": [
        {
          "id": "col_normalize",
          "label": "Column normalise",
          "hint": "Divide every element by its column sum (plus eps).",
          "starter": "matrix",
          "solution": "[[matrix[row][col] / (col_sums[col] + eps) for col in range(len(matrix[0]))] for row in range(len(matrix))]",
          "i18n": {
            "zh": {
              "label": "列归一化",
              "hint": "每个元素除以对应列的和(加上 eps)。"
            }
          }
        },
        {
          "id": "row_loop",
          "label": "Loop row normalise",
          "hint": "Call `normalize_rows(matrix, eps)` on each iteration.",
          "starter": "matrix",
          "solution": "normalize_rows(matrix, eps)",
          "i18n": {
            "zh": {
              "label": "循环行归一化",
              "hint": "每一轮调 `normalize_rows(matrix, eps)`。"
            }
          }
        },
        {
          "id": "col_loop",
          "label": "Loop col normalise",
          "hint": "Call `normalize_cols(matrix, eps)` on each iteration.",
          "starter": "matrix",
          "solution": "normalize_cols(matrix, eps)",
          "i18n": {
            "zh": {
              "label": "循环列归一化",
              "hint": "每一轮调 `normalize_cols(matrix, eps)`。"
            }
          }
        }
      ],
      "starter_code": "import math\n\ndef softmax_rows(matrix):\n    out = []\n    for row in matrix:\n        m = max(row)\n        exps = [math.exp(v - m) for v in row]\n        total = sum(exps)\n        out.append([v / total for v in exps])\n    return out\n\ndef normalize_rows(matrix, eps):\n    out = []\n    for row in matrix:\n        total = sum(row)\n        out.append([v / (total + eps) for v in row])\n    return out\n\ndef normalize_cols(matrix, eps):\n    col_sums = [sum(matrix[r][c] for r in range(len(matrix))) for c in range(len(matrix[0]))]\n    return __B_col_normalize__\n\ndef sinkhorn(matrix, iters, eps=1e-6):\n    matrix = softmax_rows(matrix)\n    matrix = normalize_cols(matrix, eps)\n    for _ in range(iters - 1):\n        matrix = __B_row_loop__\n        matrix = __B_col_loop__\n    return matrix\n",
      "validator_code": "def run_checks(ns):\n    sinkhorn = ns[\"sinkhorn\"]\n    out = sinkhorn([[2.0, 1.0], [1.0, 3.0]], iters=8, eps=1e-9)\n    row_sums = [sum(row) for row in out]\n    col_sums = [out[0][0] + out[1][0], out[0][1] + out[1][1]]\n    return [\n        {\n            \"name\": \"Rows converge to 1\",\n            \"passed\": all(abs(s - 1.0) < 5e-4 for s in row_sums),\n            \"expected\": \"~[1.0, 1.0]\",\n            \"actual\": repr(row_sums),\n        },\n        {\n            \"name\": \"Columns converge to 1\",\n            \"passed\": all(abs(s - 1.0) < 5e-4 for s in col_sums),\n            \"expected\": \"~[1.0, 1.0]\",\n            \"actual\": repr(col_sums),\n        },\n    ]\n",
      "kind": "lesson",
      "starter_runnable": "import math\n\ndef softmax_rows(matrix):\n    out = []\n    for row in matrix:\n        m = max(row)\n        exps = [math.exp(v - m) for v in row]\n        total = sum(exps)\n        out.append([v / total for v in exps])\n    return out\n\ndef normalize_rows(matrix, eps):\n    out = []\n    for row in matrix:\n        total = sum(row)\n        out.append([v / (total + eps) for v in row])\n    return out\n\ndef normalize_cols(matrix, eps):\n    col_sums = [sum(matrix[r][c] for r in range(len(matrix))) for c in range(len(matrix[0]))]\n    return matrix\n\ndef sinkhorn(matrix, iters, eps=1e-6):\n    matrix = softmax_rows(matrix)\n    matrix = normalize_cols(matrix, eps)\n    for _ in range(iters - 1):\n        matrix = matrix\n        matrix = matrix\n    return matrix\n",
      "solution_runnable": "import math\n\ndef softmax_rows(matrix):\n    out = []\n    for row in matrix:\n        m = max(row)\n        exps = [math.exp(v - m) for v in row]\n        total = sum(exps)\n        out.append([v / total for v in exps])\n    return out\n\ndef normalize_rows(matrix, eps):\n    out = []\n    for row in matrix:\n        total = sum(row)\n        out.append([v / (total + eps) for v in row])\n    return out\n\ndef normalize_cols(matrix, eps):\n    col_sums = [sum(matrix[r][c] for r in range(len(matrix))) for c in range(len(matrix[0]))]\n    return [[matrix[row][col] / (col_sums[col] + eps) for col in range(len(matrix[0]))] for row in range(len(matrix))]\n\ndef sinkhorn(matrix, iters, eps=1e-6):\n    matrix = softmax_rows(matrix)\n    matrix = normalize_cols(matrix, eps)\n    for _ in range(iters - 1):\n        matrix = normalize_rows(matrix, eps)\n        matrix = normalize_cols(matrix, eps)\n    return matrix\n",
      "solution_code": "import math\n\ndef softmax_rows(matrix):\n    out = []\n    for row in matrix:\n        m = max(row)\n        exps = [math.exp(v - m) for v in row]\n        total = sum(exps)\n        out.append([v / total for v in exps])\n    return out\n\ndef normalize_rows(matrix, eps):\n    out = []\n    for row in matrix:\n        total = sum(row)\n        out.append([v / (total + eps) for v in row])\n    return out\n\ndef normalize_cols(matrix, eps):\n    col_sums = [sum(matrix[r][c] for r in range(len(matrix))) for c in range(len(matrix[0]))]\n    return [[matrix[row][col] / (col_sums[col] + eps) for col in range(len(matrix[0]))] for row in range(len(matrix))]\n\ndef sinkhorn(matrix, iters, eps=1e-6):\n    matrix = softmax_rows(matrix)\n    matrix = normalize_cols(matrix, eps)\n    for _ in range(iters - 1):\n        matrix = normalize_rows(matrix, eps)\n        matrix = normalize_cols(matrix, eps)\n    return matrix\n",
      "reference_code": "@tilelang.jit(pass_configs=pass_configs)\ndef hc_split_sinkhorn_kernel(hc: int, sinkhorn_iters: int, eps: float):\n    n = T.symbolic(\"n\")\n    mix_hc = (2 + hc) * hc\n    threads = 64\n\n    @T.prim_func\n    def hc_split_sinkhorn_kernel_(\n        mixes: T.Tensor[(n, mix_hc), FP32],\n        hc_scale: T.Tensor[(3,), FP32],\n        hc_base: T.Tensor[(mix_hc,), FP32],\n        pre: T.Tensor[(n, hc), FP32],\n        post: T.Tensor[(n, hc), FP32],\n        comb: T.Tensor[(n, hc, hc), FP32],\n    ):\n        with T.Kernel(n, threads=threads) as i:\n            mixes_shared = T.alloc_shared(mix_hc, FP32)\n            comb_frag = T.alloc_fragment((hc, hc), FP32)\n            T.copy(mixes[i, :], mixes_shared)\n\n            for j in T.Parallel(hc):\n                pre[i, j] = T.sigmoid(mixes_shared[j] * hc_scale[0] + hc_base[j]) + eps\n            for j in T.Parallel(hc):\n                post[i, j] = 2 * T.sigmoid(mixes_shared[j + hc] * hc_scale[1] + hc_base[j + hc])\n            for j, k in T.Parallel(hc, hc):\n                comb_frag[j, k] = mixes_shared[j * hc + k + hc * 2] * hc_scale[2] + hc_base[j * hc + k + hc * 2]\n\n            row_sum = T.alloc_fragment(hc, FP32)\n            col_sum = T.alloc_fragment(hc, FP32)\n\n            # comb = comb.softmax(-1) + eps\n            row_max = T.alloc_fragment(hc, FP32)\n            T.reduce_max(comb_frag, row_max, dim=1)\n            for j, k in T.Parallel(hc, hc):\n                comb_frag[j, k] = T.exp(comb_frag[j, k] - row_max[j])\n            T.reduce_sum(comb_frag, row_sum, dim=1)\n            for j, k in T.Parallel(hc, hc):\n                comb_frag[j, k] = comb_frag[j, k] / row_sum[j] + eps\n\n            # comb = comb / (comb.sum(-2) + eps)\n            T.reduce_sum(comb_frag, col_sum, dim=0)\n            for j, k in T.Parallel(hc, hc):\n                comb_frag[j, k] = comb_frag[j, k] / (col_sum[k] + eps)\n\n            for _ in T.serial(sinkhorn_iters - 1):\n                # comb = comb / (comb.sum(-1) + eps)\n                T.reduce_sum(comb_frag, row_sum, dim=1)\n                for j, k in T.Parallel(hc, hc):\n                    comb_frag[j, k] = comb_frag[j, k] / (row_sum[j] + eps)\n                # comb = comb / (comb.sum(-2) + eps)\n                T.reduce_sum(comb_frag, col_sum, dim=0)\n                for j, k in T.Parallel(hc, hc):\n                    comb_frag[j, k] = comb_frag[j, k] / (col_sum[k] + eps)\n\n            T.copy(comb_frag, comb[i, :, :])\n\n    return hc_split_sinkhorn_kernel_\n\n\ndef hc_split_sinkhorn(mixes: torch.Tensor, hc_scale: torch.Tensor, hc_base: torch.Tensor, hc_mult: int = 4, sinkhorn_iters: int = 20, eps: float = 1e-6):\n    b, s, _ = mixes.size()\n    pre = mixes.new_empty(b, s, hc_mult)\n    post = mixes.new_empty(b, s, hc_mult)\n    comb = mixes.new_empty(b, s, hc_mult, hc_mult)\n    kernel = hc_split_sinkhorn_kernel(hc_mult, sinkhorn_iters, eps)\n    kernel(mixes.view(-1, (2 + hc_mult) * hc_mult), hc_scale, hc_base,\n           pre.view(-1, hc_mult), post.view(-1, hc_mult), comb.view(-1, hc_mult, hc_mult))\n    return pre, post, comb\n",
      "puzzle_path": "tutorial/generated/puzzles/20_s20-sinkhorn.py",
      "solution_path": "tutorial/generated/solutions/20_s20-sinkhorn.py",
      "reference_file_path": "tutorial/generated/references/20_s20-sinkhorn.py",
      "workshop_loc": 29,
      "reference_loc": 68,
      "blank_count": 3,
      "i18n": {
        "zh": {
          "title": "mHC 的 Sinkhorn 迭代",
          "tagline": "交替归一化行与列,收敛到双随机矩阵。",
          "difficulty": "进阶",
          "summary": "Sinkhorn 迭代把任意非负矩阵逼近到双随机:每轮先归一化行,再归一化列。epsilon 防止零行/零列导致除零。",
          "what_you_learn": [
            "Sinkhorn / RAS 的收敛性 —— 多轮 row/col 归一化即可逼近双随机。",
            "`+ eps` 为什么必须出现在分母 —— 避免除零。",
            "mHC 的 comb 为什么要双随机 —— 保证 lane 变换不改变总质量。"
          ],
          "workshop_steps": [
            "每一轮:先对行归一化,再对列归一化。",
            "行归一化调 `normalize_rows(matrix, eps)`。",
            "列归一化调 `normalize_cols(matrix, eps)`。"
          ],
          "pitfalls": [
            "col 归一化的初始化一定要在第一轮 row-softmax 之后立刻做。",
            "eps 要一直加 —— 否则零行会炸。"
          ]
        }
      }
    },
    {
      "id": "gap-DeepSeek_official/kernel-py-439-440",
      "kind": "gap",
      "stage": "kernels",
      "track": "DeepSeek_official/kernel.py",
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 439,
      "line_end": 440,
      "title": "Spacer",
      "tagline": "Whitespace between segments.",
      "summary": "Blank lines in the reference — preserved so segments reconstruct the file byte-for-byte.",
      "reference_code": "\n",
      "reference_loc": 1
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
      "tags": [
        "fp4",
        "gemm",
        "scales"
      ],
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 441,
      "line_end": 515,
      "summary": "FP4 GEMM stores activation scales per 128-wide group and weight scales per 32-wide group. For each K index, the act scale group is `kk // 128` and the weight scale group is `kk // 32` — four weight groups share one act scale.",
      "paper_anchor": {
        "section": "§3.4 FP4 Quantization-Aware Training",
        "figure": "§3.4 Table (scale shapes)",
        "summary": "The asymmetric scale grids (act 1×128 vs weight 1×32) are a direct consequence of how FP4 QAT stabilises routed-expert weights in DeepSeek-V4."
      },
      "what_you_learn": [
        "Why four 32-wide weight sub-blocks share ONE activation scale.",
        "Why the accumulator multiplies BOTH scales into every partial sum."
      ],
      "workshop_steps": [
        "Derive the activation scale index from `kk`.",
        "Derive the weight scale index from `kk`."
      ],
      "pitfalls": [
        "`act_group = kk // (block_k * n_sub)` — don't forget the extra factor of `n_sub`."
      ],
      "blanks": [
        {
          "id": "act_group",
          "label": "Act scale group",
          "hint": "`kk // (block_k * n_sub)` — one act scale per 128-wide group.",
          "starter": "0",
          "solution": "kk // (block_k * n_sub)",
          "i18n": {
            "zh": {
              "label": "激活 scale 分组",
              "hint": "`kk // (block_k * n_sub)` —— 激活每 128 一个 scale。"
            }
          }
        },
        {
          "id": "weight_group",
          "label": "Weight scale group",
          "hint": "`kk // block_k` — one weight scale per 32-wide group.",
          "starter": "0",
          "solution": "kk // block_k",
          "i18n": {
            "zh": {
              "label": "权重 scale 分组",
              "hint": "`kk // block_k` —— 权重每 32 一个 scale。"
            }
          }
        }
      ],
      "starter_code": "def fp4_gemm(a, scales_a, b, scales_b, block_k=32, act_group_size=128):\n    rows = len(a)\n    cols = len(b)\n    k = len(a[0])\n    out = [[0.0 for _ in range(cols)] for _ in range(rows)]\n    n_sub = act_group_size // block_k\n\n    for row in range(rows):\n        for col in range(cols):\n            acc = 0.0\n            for kk in range(k):\n                act_group = __B_act_group__\n                weight_group = __B_weight_group__\n                acc += a[row][kk] * b[col][kk] * scales_a[row][act_group] * scales_b[col][weight_group]\n            out[row][col] = acc\n    return out\n",
      "validator_code": "def run_checks(ns):\n    fp4_gemm = ns[\"fp4_gemm\"]\n    a = [[1.0] * 128]\n    b = [[1.0] * 128]\n    scales_a = [[2.0]]\n    scales_b = [[1.0, 2.0, 3.0, 4.0]]\n    out = fp4_gemm(a, scales_a, b, scales_b)\n    expected = 2.0 * 32.0 * (1.0 + 2.0 + 3.0 + 4.0)\n    return [{\n        \"name\": \"Act (1×128) + Weight (1×32) scale alignment\",\n        \"passed\": abs(out[0][0] - expected) < 1e-9,\n        \"expected\": repr(expected),\n        \"actual\": repr(out[0][0]),\n    }]\n",
      "kind": "lesson",
      "starter_runnable": "def fp4_gemm(a, scales_a, b, scales_b, block_k=32, act_group_size=128):\n    rows = len(a)\n    cols = len(b)\n    k = len(a[0])\n    out = [[0.0 for _ in range(cols)] for _ in range(rows)]\n    n_sub = act_group_size // block_k\n\n    for row in range(rows):\n        for col in range(cols):\n            acc = 0.0\n            for kk in range(k):\n                act_group = 0\n                weight_group = 0\n                acc += a[row][kk] * b[col][kk] * scales_a[row][act_group] * scales_b[col][weight_group]\n            out[row][col] = acc\n    return out\n",
      "solution_runnable": "def fp4_gemm(a, scales_a, b, scales_b, block_k=32, act_group_size=128):\n    rows = len(a)\n    cols = len(b)\n    k = len(a[0])\n    out = [[0.0 for _ in range(cols)] for _ in range(rows)]\n    n_sub = act_group_size // block_k\n\n    for row in range(rows):\n        for col in range(cols):\n            acc = 0.0\n            for kk in range(k):\n                act_group = kk // (block_k * n_sub)\n                weight_group = kk // block_k\n                acc += a[row][kk] * b[col][kk] * scales_a[row][act_group] * scales_b[col][weight_group]\n            out[row][col] = acc\n    return out\n",
      "solution_code": "def fp4_gemm(a, scales_a, b, scales_b, block_k=32, act_group_size=128):\n    rows = len(a)\n    cols = len(b)\n    k = len(a[0])\n    out = [[0.0 for _ in range(cols)] for _ in range(rows)]\n    n_sub = act_group_size // block_k\n\n    for row in range(rows):\n        for col in range(cols):\n            acc = 0.0\n            for kk in range(k):\n                act_group = kk // (block_k * n_sub)\n                weight_group = kk // block_k\n                acc += a[row][kk] * b[col][kk] * scales_a[row][act_group] * scales_b[col][weight_group]\n            out[row][col] = acc\n    return out\n",
      "reference_code": "@tilelang.jit(pass_configs=pass_configs)\ndef fp4_gemm_kernel(N, K, out_dtype=BF16, accum_dtype=FP32, scale_dtype=FP32):\n    \"\"\"FP8 act x FP4 weight GEMM kernel.\n\n    C[M, N] = A_fp8[M, K] @ B_fp4[N, K]^T\n\n    Act: 1x128 quant on K (reduce dim), FP8 with configurable scale dtype\n    Weight: 1x32 quant on K (reduce dim), FP4 with E8M0 scale\n\n    B is stored as [N, K//2] in float4_e2m1fn_x2, logical [N, K] in fp4.\n    The FP4 values are packed along the K (last) dimension.\n\n    Strategy: load FP4 sub-blocks of size [block_N, sub_K] (sub_K=32),\n    cast FP4 to FP8 via float, then do FP8xFP8 GEMM.\n    Apply act scale (per 128 on K) and weight scale (per 32 on K) to the accumulator.\n    \"\"\"\n    M = T.symbolic(\"M\")\n    act_group_size = 128\n    weight_group_size = 32\n    block_M = 32\n    block_N = 128\n    block_K = 32   # matches weight_group_size for simple scale handling\n    n_sub = act_group_size // block_K  # 4 sub-blocks per act scale group\n\n    @T.prim_func\n    def fp4_gemm_kernel_(\n        A: T.Tensor[(M, K), FP8],\n        B: T.Tensor[(N, K), FP4],\n        C: T.Tensor[(M, N), out_dtype],\n        scales_a: T.Tensor[(M, T.ceildiv(K, act_group_size)), scale_dtype],\n        scales_b: T.Tensor[(N, T.ceildiv(K, weight_group_size)), scale_dtype],\n    ):\n        with T.Kernel(T.ceildiv(N, block_N), T.ceildiv(M, block_M), threads=128) as (\n            bx,\n            by,\n        ):\n            A_shared = T.alloc_shared((block_M, block_K), FP8)\n            B_fp4_shared = T.alloc_shared((block_N, block_K), FP4)\n            B_shared = T.alloc_shared((block_N, block_K), FP8)\n            C_shared = T.alloc_shared((block_M, block_N), out_dtype)\n            C_local = T.alloc_fragment((block_M, block_N), accum_dtype)\n            C_local_accum = T.alloc_fragment((block_M, block_N), accum_dtype)\n            scale_a_frag = T.alloc_fragment((block_M,), FP32)\n            scale_b_frag = T.alloc_fragment((block_N,), FP32)\n\n            T.use_swizzle(panel_size=10)\n            T.clear(C_local)\n            T.clear(C_local_accum)\n\n            K_iters = T.ceildiv(K, block_K)\n            for k in T.Pipelined(K_iters, num_stages=2):\n                T.copy(A[by * block_M, k * block_K], A_shared)\n                T.copy(B[bx * block_N, k * block_K], B_fp4_shared)\n                # FP4->FP8 cast must go through FP32 to avoid ambiguous C++ overload\n                for i, j in T.Parallel(block_N, block_K):\n                    B_shared[i, j] = T.Cast(FP8, T.Cast(FP32, B_fp4_shared[i, j]))\n\n                # Weight scale: per 32 on K, indexed by k (each k is one block_K=32)\n                for i in T.Parallel(block_N):\n                    scale_b_frag[i] = T.Cast(FP32, scales_b[bx * block_N + i, k])\n\n                # Act scale: per 128 on K, indexed by k // 4\n                for i in T.Parallel(block_M):\n                    scale_a_frag[i] = T.Cast(FP32, scales_a[by * block_M + i, k // n_sub])\n\n                T.gemm(A_shared, B_shared, C_local, transpose_B=True)\n\n                for i, j in T.Parallel(block_M, block_N):\n                    C_local_accum[i, j] += C_local[i, j] * scale_a_frag[i] * scale_b_frag[j]\n                T.clear(C_local)\n\n            T.copy(C_local_accum, C_shared)\n            T.copy(C_shared, C[by * block_M, bx * block_N])\n\n    return fp4_gemm_kernel_\n",
      "puzzle_path": "tutorial/generated/puzzles/18_s18-fp4-gemm.py",
      "solution_path": "tutorial/generated/solutions/18_s18-fp4-gemm.py",
      "reference_file_path": "tutorial/generated/references/18_s18-fp4-gemm.py",
      "workshop_loc": 16,
      "reference_loc": 75,
      "blank_count": 2,
      "i18n": {
        "zh": {
          "title": "FP4 GEMM 的 scale 对齐",
          "tagline": "激活 scale 每 128、权重 scale 每 32,K 方向对齐。",
          "difficulty": "进阶",
          "summary": "FP4 GEMM 的关键:激活 scale 粒度为 128 (沿 K),权重 scale 粒度为 32 (沿 K);kernel 在 K 循环里用不同的粒度索引:权重按 `kk // block_k`,激活按 `kk // (block_k * n_sub)`。",
          "what_you_learn": [
            "`n_sub = act_group_size // block_K = 4` —— 激活的一个 scale 覆盖 4 个权重块。",
            "为什么 FP4 → FP8 的 cast 要经过 FP32 —— C++ 重载消歧。",
            "scale 校正在第二个累加器里做。"
          ],
          "workshop_steps": [
            "激活 scale 索引:`kk // (block_k * n_sub)`。",
            "权重 scale 索引:`kk // block_k`。"
          ],
          "pitfalls": [
            "激活 scale 不要错用 `k // block_k` —— 那是权重 scale。",
            "打包 FP4 存储是 `[N, K//2]` 字节,逻辑上是 `[N, K]` 元素。"
          ]
        }
      }
    },
    {
      "id": "i29-fp4-gemm-wrapper",
      "order": 800,
      "stage": "kernels",
      "track": "kernel.py",
      "source_path": "DeepSeek_official/kernel.py",
      "line_start": 516,
      "line_end": 536,
      "title": "`fp4_gemm` — Tensor-Level Wrapper",
      "tagline": "Contract shapes, call the JIT'd kernel, return C.",
      "summary": "Mirroring the FP8 wrapper, `fp4_gemm` asserts contiguity, extracts `M/N/K`, allocates `C` in the current default dtype, JITs the kernel with the right scale dtype, and invokes it. There is no reshape of the packed FP4 weight — it stays `[N, K//2]` with packed values on the K axis.",
      "why_it_matters": [
        "The kernel expects `B` to be packed along K; `fp4_quant_kernel` guarantees this."
      ],
      "kind": "interlude",
      "reference_code": "\n\ndef fp4_gemm(\n    a: torch.Tensor, a_s: torch.Tensor, b: torch.Tensor, b_s: torch.Tensor,\n    scale_dtype: torch.dtype = torch.float32,\n) -> torch.Tensor:\n    \"\"\"C[M,N] = A_fp8[M,K] @ B_fp4[N,K]^T.\n    A has per-128 act scale; B has per-32 E8M0 weight scale.\n    B is stored as [N, K//2] in float4_e2m1fn_x2 (2 FP4 values per byte, packed along K).\"\"\"\n    assert a.is_contiguous() and b.is_contiguous(), \"Input tensors must be contiguous\"\n    assert a_s.is_contiguous() and b_s.is_contiguous(), (\n        \"Scaling factor tensors must be contiguous\"\n    )\n    tl_dtype = FE8M0 if scale_dtype == torch.float8_e8m0fnu else FP32\n    K = a.size(-1)\n    M = a.numel() // K\n    N = b.size(0)\n    c = a.new_empty(*a.size()[:-1], N, dtype=torch.get_default_dtype())\n    kernel = fp4_gemm_kernel(N, K, scale_dtype=tl_dtype)\n    kernel(a.view(M, K), b, c.view(M, N), a_s.view(M, -1), b_s)\n    return c\n",
      "reference_loc": 21,
      "i18n": {
        "zh": {
          "title": "`fp4_gemm` —— 张量级包装",
          "tagline": "形状合同、JIT、下发。",
          "summary": "与 FP8 包装镜像:`fp4_gemm` 检查连续性,取 `M/N/K`,按默认 dtype 分配 `C`,JIT 出带正确 scale dtype 的 kernel 并执行。打包 FP4 权重 `B` 保持 `[N, K//2]`,值沿 K 轴紧排。",
          "why_it_matters": [
            "kernel 要求 `B` 沿 K 打包 —— 这是 `fp4_quant_kernel` 的承诺。"
          ]
        }
      }
    }
  ]
};
