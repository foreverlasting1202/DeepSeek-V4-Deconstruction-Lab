"""Chinese (zh-CN) translations for every lesson, interlude, and UI string.

The build step merges this dictionary into the payload under each segment's
``i18n.zh`` key. Missing fields silently fall back to the authoritative English
value, so partial translations are safe.
"""

from __future__ import annotations


# UI chrome strings (sidebar, buttons, inspector headings, etc.)
UI_ZH = {
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
    "inspector.show_diff": "展开差异",
}


# Site-level meta strings
SITE_META_ZH = {
    "title": "DeepSeek-V4 拆解实验室",
    "subtitle": (
        "一个以填空式练习为主线，逐行剖析 DeepSeek-V4 官方参考实现 "
        "`model.py` 与 `kernel.py` 的交互式教程。"
    ),
    "lead": (
        "DeepSeek-V4 融合了压缩稀疏注意力 (CSA)、重度压缩注意力 (HCA)、流形约束超连接 (mHC) "
        "以及 FP4 量化感知训练 (QAT)。本实验室把参考代码拆成一个个可运行的 Python 拼图，让你亲手把每一块重新拼回来。"
    ),
    "hero_note": (
        "每个练习都是可独立运行的 Python。填好高亮的空格，点击运行测试，Web 校验器会把你的输出和论文里"
        "的参考语义逐项对比（见 `DeepSeek_V4.pdf` 图 2–6）。"
    ),
    "tagline": "填空练习 · 论文对照 · 本地测试",
    "stages": {
        "foundations": {
            "title": "一、基础设施",
            "description": "混合精度调度、权重布局、RMSNorm —— 每一层都要用到的砖瓦。",
        },
        "rotary": {
            "title": "二、RoPE 与 YaRN",
            "description": "RoPE 的基础频率表、YaRN 的插值方案，以及复数对的旋转。",
        },
        "attention": {
            "title": "三、压缩稀疏注意力",
            "description": "CSA 压缩器池化、KV 环形缓存、Top-k 合并以及闪电索引器 (Lightning Indexer)。",
        },
        "routing": {
            "title": "四、DeepSeekMoE 与超连接",
            "description": "DeepSeekMoE 的门控、稀疏专家调度，以及流形约束超连接 (mHC)。",
        },
        "kernels": {
            "title": "五、底层 Kernel",
            "description": "块级激活量化、稀疏注意力在线 Softmax、FP4 GEMM 的 scale 对齐、Sinkhorn 迭代。",
        },
    },
    "tracks": {
        "model.py": {
            "title": "model.py",
            "description": "混合精度分发、RoPE/YaRN、压缩稀疏注意力、超连接 (mHC)、DeepSeekMoE 的组装。",
        },
        "kernel.py": {
            "title": "kernel.py",
            "description": "TileLang 编写的算子：激活量化、稀疏注意力在线 Softmax、FP4 GEMM 的 scale 对齐与 mHC 的 Sinkhorn 迭代。",
        },
    },
}


# Lesson translations. Keys mirror LESSON_SPECS entries; missing fields fall back.
LESSONS_ZH: dict[str, dict] = {
    "s01-linear-dispatch": {
        "title": "线性层分发",
        "tagline": "一个入口,三条精度路径。",
        "difficulty": "入门",
        "summary": (
            "`linear()` 是 DeepSeek-V4 里所有 `nn.Linear` 的统一出口。它根据权重的 dtype 把请求路由到 FP4、FP8 或原生 BF16 的 GEMM。"
        ),
        "what_you_learn": [
            "为什么量化权重必须先做一次激活量化。",
            "为什么 BF16 最简单 —— 不需要额外的 scale 张量跟着权重走。",
            "单一 Python 分发器如何让 `model.py` 的其余部分与精度解耦。",
        ],
        "workshop_steps": [
            "写出 FP4 分支的 dtype 判断。",
            "用量化后的激活与两个 scale 张量调用 `fp4_gemm`。",
            "让 else 分支回落到未量化的 BF16 线性层。",
        ],
        "pitfalls": [
            "`act_quant` 要作用在 *激活* 上,不是权重。",
            "scale 张量挂在权重对象上,通过 `weight.scale` 访问。",
        ],
        "blanks": {
            "fp4_guard": {"label": "FP4 dtype 判别", "hint": "用 `weight.dtype` 和 `torch.float4_e2m1fn_x2` 比较。"},
            "fp4_call": {"label": "FP4 GEMM 调用", "hint": "把量化后的 `x`、scale `s`、权重、`weight.scale`、`scale_dtype` 依次传入。"},
            "bf16_fallback": {"label": "BF16 回退分支", "hint": "调用未量化的 `dense_linear(x, weight)`。"},
        },
    },
    "s02-linear-layout": {
        "title": "权重与 Scale 的物理布局",
        "tagline": "精度在前向开始之前就决定了张量形状。",
        "difficulty": "入门",
        "summary": (
            "`Linear.__init__` 根据 dtype 决定权重的物理形状和 scale 张量的大小。FP4 在一个字节里打包两个值,FP8 则是每 128×128 一个 scale。"
        ),
        "what_you_learn": [
            "为什么 FP4 要把两个值塞进一个字节,需要 `in_features // 2` 的存储。",
            "为什么 FP8 每 128×128 一块 scale (两个轴都要 `ceildiv`)。",
            "为什么 BF16 根本不需要 scale 张量。",
        ],
        "workshop_steps": [
            "补上 FP4 的 scale 列数 —— `in_features // fp4_block_size`。",
            "补上 FP8 的 scale 网格 —— 两个轴都 `ceildiv`。",
            "BF16 保持没有 scale。",
        ],
        "pitfalls": [
            "FP4 的块大小是 32 (`fp4_block_size`),和 FP8 的 128 不同。",
            "`ceildiv` 要向上取整,最后一块可能是不完整的。",
        ],
        "blanks": {
            "fp4_scale_cols": {"label": "FP4 scale 列数", "hint": "每 32 个 FP4 值共享一个 scale,`in_features // fp4_block_size`。"},
            "fp8_scale_rows": {"label": "FP8 scale 行数", "hint": "每 128 行一个 scale,`ceildiv(out_features, block_size)`。"},
            "fp8_scale_cols": {"label": "FP8 scale 列数", "hint": "每 128 列一个 scale,`ceildiv(in_features, block_size)`。"},
        },
    },
    "s03-tp-shard": {
        "title": "行 / 列并行切分",
        "tagline": "在 forward 之前就决定切哪根轴。",
        "difficulty": "入门",
        "summary": (
            "`ColumnParallelLinear` 切 `out_features`,`RowParallelLinear` 切 `in_features`。"
            "切分发生在构造器里 —— `forward()` 拿到的已经是本地形状。"
        ),
        "what_you_learn": [
            "列并行:`out_features //= world_size`,每个 rank 存一段输出。",
            "行并行:`in_features //= world_size`,每个 rank 存一段输入,再 all-reduce。",
            "两条路都只切一根轴,另一根轴保持原样。",
        ],
        "workshop_steps": [
            "列并行分支切 `out_features`。",
            "行并行分支切 `in_features`。",
            "确认普通分支两根轴都不变。",
        ],
        "pitfalls": [
            "必须用整除 `//`,否则 all-reduce 时会对不齐。",
            "`features % world_size == 0` 的断言在 `__init__` 之前就检查过,不必重复。",
        ],
        "blanks": {
            "col_out": {"label": "列并行 out_features", "hint": "列并行切输出 —— `out_features // world_size`。"},
            "row_in": {"label": "行并行 in_features", "hint": "行并行切输入 —— `in_features // world_size`。"},
        },
    },
    "s04-rmsnorm": {
        "title": "Float32 RMSNorm",
        "tagline": "方差 → rsqrt → 逐维缩放,先升到 FP32。",
        "difficulty": "入门",
        "summary": (
            "DeepSeek-V4 虽然 checkpoint 里 RMSNorm 权重是 BF16,但参数在内存里是 FP32。"
            "计算流程是:x 升到 FP32 → 算均方 → rsqrt → 乘上 learned scale → 再转回原 dtype。"
        ),
        "what_you_learn": [
            "为什么 mean-square 就够了 —— RMSNorm 直接丢掉均值。",
            "为什么 `rsqrt(var + eps)` 能无分支避免除零。",
            "为什么 scale 是逐维的,并不是一次矩阵乘。",
        ],
        "workshop_steps": [
            "算每一行的均方。",
            "用 `rsqrt(var + eps)` 得到逆 RMS。",
            "乘上 learned 的逐维 `weight`。",
        ],
        "pitfalls": [
            "是 `rsqrt(var + eps)`,不是 `sqrt(var) + eps` —— epsilon 要在 sqrt 里面。",
        ],
        "blanks": {
            "mean_square": {"label": "均方", "hint": "整行 `value * value` 的平均。"},
            "inv_rms": {"label": "逆 RMS", "hint": "`1 / sqrt(var + eps)`,epsilon 在 sqrt 里面。"},
        },
    },
    "s05-yarn-base-freqs": {
        "title": "RoPE 基础频率",
        "tagline": "YaRN 拉伸之前,先得有一张标准频率表。",
        "difficulty": "核心",
        "summary": (
            "RoPE 的基石是一张几何递减的频率表:每个索引对 `i`,频率 θ_i = base^(-2i/dim)。这就是原版 RoPE 的公式。"
        ),
        "what_you_learn": [
            "为什么频率对维度呈几何递减 —— 低维对应低频(长周期),高维对应高频(短周期)。",
            "`torch.arange(0, dim, 2)` 为什么跳步 —— 每两个维度共用一个旋转角。",
            "频率表为什么可以 `@lru_cache(2)` —— 它只依赖 dim 和 base,不依赖输入。",
        ],
        "workshop_steps": [
            "对每个偶数索引 `i`,写出 `1 / (base ** (i / dim))`。",
            "确认步长是 2,频率表长度为 `dim // 2`。",
        ],
        "pitfalls": [
            "步长是 2,不是 1 —— 频率表长度是 `dim // 2`。",
            "一定要是 FP32,否则 BF16 下分母会溢出。",
        ],
        "blanks": {
            "freq_formula": {"label": "基础频率公式", "hint": "对当前偶数索引 `i`,计算 `1 / (base ** (i / dim))`。"},
        },
    },
    "s06-yarn-smooth": {
        "title": "YaRN 平滑插值",
        "tagline": "低频拉伸 `1/factor`,高频保持原样,中间用线性斜坡。",
        "difficulty": "核心",
        "summary": (
            "要扩展上下文长度时,YaRN 按频率打分:低频维度整体除以 `factor`,高频维度保持,中间区间用 `linear_ramp_factor` 做线性过渡。"
            "最后用 `outer(t, freqs)` 乘上时间步,送去 `polar`。"
        ),
        "what_you_learn": [
            "为什么只压缩低频 —— 模型已经在原长度上学会了高频,不要扰动。",
            "`smooth` 为什么要 clip 到 `[0, 1]` —— 边界外的频率维度要么完全拉伸、要么完全保留。",
            "`t · freqs` 的外积如何生成每个时间步的角度。",
        ],
        "workshop_steps": [
            "`original_seq_len > 0` 时进入 YaRN 分支。",
            "写出凸组合:`freq / factor * (1 - smooth) + freq * smooth`。",
            "对每个时间步 `t`,返回 `[t * f for f in freqs]`。",
        ],
        "pitfalls": [
            "凸组合括号写错会导致低频和高频颠倒。",
            "`linear_ramp_factor(min, max, dim)` 的顺序,是先算再 clamp。",
        ],
        "blanks": {
            "yarn_mix": {"label": "YaRN 凸组合", "hint": "`freq / factor * (1 - smooth_value) + freq * smooth_value`。"},
            "angle_row": {"label": "位置 × 频率行", "hint": "对每个时间步 `t`,返回 `[t * f for f in freqs]`。"},
        },
    },
    "s07-apply-rotary": {
        "title": "旋转位置编码的施加",
        "tagline": "相邻两维看作复数,乘上 freqs_cis。",
        "difficulty": "核心",
        "summary": (
            "`apply_rotary_emb` 把 `x` 的最后两维看成复数对,乘上 `freqs_cis`,再拍回实数。"
            "`inverse=True` 时取共轭 —— 这是把注意力输出从 RoPE 空间反旋回模型空间的方式。"
        ),
        "what_you_learn": [
            "相邻两维如何打包成复数 —— `view_as_complex` + `unflatten`。",
            "为什么 `inverse=True` 只需对 `freqs_cis` 取共轭。",
            "复数乘法 `z * factor` 本质就是旋转 + 缩放。",
        ],
        "workshop_steps": [
            "`inverse=True` 时对每一个 `freqs_cis` 取共轭。",
            "把 x 的相邻两维复数化,和 factor 相乘。",
        ],
        "pitfalls": [
            "必须先转 FP32 再做复数化,否则 BF16 精度不够。",
            "`y.copy_(x)` 是 in-place 写回,共享存储。",
        ],
        "blanks": {
            "inverse_conj": {"label": "逆旋转共轭", "hint": "逆旋转对每个 `freqs_cis` 取 `conjugate(value)`。"},
            "complex_mul": {"label": "复数乘法", "hint": "旋转一对:`z * factor`。"},
        },
    },
    "s08-compressor-prefill": {
        "title": "Compressor Prefill",
        "tagline": "一整段序列一次性压缩,池化出每个窗口的代表。",
        "difficulty": "核心",
        "summary": (
            "Prefill 阶段一次吃掉整段输入,按 `compress_ratio` 做分块池化:先检查剩下的 token 是否至少能凑出一个窗口,再在每个窗口上做 `softmax(score) * kv` 的加权和。"
        ),
        "what_you_learn": [
            "为什么要显式判断 `len(kv_rows) >= ratio` —— 避免半个窗口被塌缩成无意义的均值。",
            "块内 softmax 为什么要配着 `weighted_sum` —— 这是最小版本的 attention。",
            "状态缓冲 `kv_state` / `score_state` 是怎么存放 decode 的续作数据的(见下一课 Interlude)。",
        ],
        "workshop_steps": [
            "检查 `len(kv_rows) >= ratio`,判断是否有完整窗口。",
            "对每个窗口做 `weighted_sum(window_kv, softmax(window_scores))`。",
        ],
        "pitfalls": [
            "`softmax` 必须沿 *窗口内* 做,不是跨窗口。",
            "不足一个 ratio 的尾段要留给 decode 缓冲。",
        ],
        "blanks": {
            "should_compress": {"label": "窗口充足判断", "hint": "`len(kv_rows) >= ratio` —— 至少凑出一个完整窗口。"},
            "pool_window": {"label": "窗口加权池化", "hint": "`weighted_sum(window_kv, weights)`,`weights = softmax(window_scores)`。"},
        },
    },
    "s09-window-cache": {
        "title": "滑动窗口 KV 缓存",
        "tagline": "Prefill 保留尾巴,decode 在 `(start_pos mod W)` 覆写。",
        "difficulty": "核心",
        "summary": (
            "只有最近 `window_size` 个 token 会被保留。Prefill 时把序列末尾原样写入;decode 时用 ring-buffer 覆盖最旧的位置 —— 任何时刻都只保存最近一个窗口。"
        ),
        "what_you_learn": [
            "为什么 prefill 的尾巴是 `values[-window_size:]`。",
            "`start_pos % window_size` 如何形成 ring-buffer 行为。",
            "为什么用 `%` 而不是 `//`。",
        ],
        "workshop_steps": [
            "Prefill:取最近 `window_size` 个 KV。",
            "Decode:写回 `start_pos % window_size` 这个槽位。",
        ],
        "pitfalls": [
            "`seqlen > win` 时,保留的是 *最后* `win` 个 token,不是前 `win` 个。",
            "Ring-buffer 偏移要用 `%`,不是 `//`。",
        ],
        "blanks": {
            "prefill_tail": {"label": "Prefill 尾段", "hint": "返回最后 `window_size` 个元素:`list(values[-window_size:])`。"},
            "decode_idx": {"label": "Decode 环形索引", "hint": "`start_pos % window_size` —— 模运算让缓冲成为环形。"},
        },
    },
    "s10-topk-merge": {
        "title": "窗口 + 压缩 Top-k 合并",
        "tagline": "先取窗口索引,再拼上压缩索引(若有)。",
        "difficulty": "核心",
        "summary": (
            "稀疏注意力需要一张统一的 topk 索引表。本节把 *窗口索引*(最近的真实位置)和 *压缩索引*(Indexer 或静态公式)沿最后一维拼接起来。"
            "只有压缩部分非空时才需要拼;否则原样返回窗口索引。"
        ),
        "what_you_learn": [
            "`compress_topk` 什么时候为空 —— `compress_ratio == 0` 的纯滑动窗口层。",
            "为什么索引用 `-1` 表示“跳过” —— kernel 会按此掩码。",
            "统一 topk 索引表让稀疏 attention kernel 无分支地 gather。",
        ],
        "workshop_steps": [
            "把 `compress_topk` 附加到 `window_topk` 后面(若非空)。",
        ],
        "pitfalls": [
            "`compress_topk` 为空时别拼,否则拼出空列表。",
        ],
        "blanks": {
            "merge_topk": {"label": "Top-k 合并", "hint": "如果 `compress_topk` 非空,就追加到 `window_topk` 后面。"},
        },
    },
    "s11-indexer-score": {
        "title": "闪电索引器打分",
        "tagline": "对每个 (q, k) 计算 ReLU(q·k),按 head 加权求和。",
        "difficulty": "核心",
        "summary": (
            "Indexer 用每个 head 的 q 与压缩 KV 做点积,经 ReLU 抑制负得分,然后按 `head_weights[h]` 对 head 做加权求和,得到每个 query 对每个压缩位置的得分。"
        ),
        "what_you_learn": [
            "为什么用 ReLU 而不是 softmax —— 得分本身就用于排序,ReLU 足以剔除负贡献。",
            "head 加权让不同 head 可以学到不同的重要性。",
            "得分是累加的,不是 softmax 归一化的 —— 适合后续的 topk。",
        ],
        "workshop_steps": [
            "对每一个 head,算 `max(0.0, dot)`。",
            "乘上 `head_weights[h]`,沿 head 维求和。",
        ],
        "pitfalls": [
            "head 维的 sum 不要和 feature 维的 dot 混淆。",
            "`head_weights[h]` 必须乘在 ReLU 之后,不是之前。",
        ],
        "blanks": {
            "relu_dot": {"label": "ReLU(q·k)", "hint": "对当前 head 的 query 和 key 取 `max(0.0, dot)`。"},
            "head_weighted": {"label": "head 加权求和", "hint": "用 `head_weights[h]` 乘以 ReLU 后的得分。"},
        },
    },
    "s12-gate": {
        "title": "门控(top-k 偏置 + 原始权重)",
        "tagline": "偏置只影响专家选择,不影响最终路由权重。",
        "difficulty": "核心",
        "summary": (
            "Gate 的关键技巧:`bias` 加到打分上只用于 topk 专家选择,但最终路由权重要从 *原始* (不带偏置的) scores 里 gather。"
            "这是 DeepSeek-V3 引入的 top-k 偏置 trick。"
        ),
        "what_you_learn": [
            "为什么 bias 不能影响 routing 权重 —— 那会引入不公平的幅值偏差。",
            "`gather(1, indices)` 如何按索引从原始分数里拿值。",
            "top-k 选择 vs 权重再归一化的分工。",
        ],
        "workshop_steps": [
            "`scores_shifted = original_scores + bias`,用它做 topk。",
            "最终权重 gather 自 `original_scores`(不是 shifted)。",
        ],
        "pitfalls": [
            "切记 gather 用 `original_scores`,不是 shifted。",
            "hash 路由的 `indices` 由 lookup 给出,不走 topk。",
        ],
        "blanks": {
            "shift_with_bias": {"label": "加偏置打分", "hint": "`[score + bias[i] for i, score in enumerate(original_scores)]`。"},
            "gather_weights": {"label": "原始权重 gather", "hint": "要用 *原始* `original_scores`,不是带偏置的 shifted。"},
        },
    },
    "s13-moe-dispatch": {
        "title": "稀疏 MoE 分发",
        "tagline": "按专家分桶,每个 token 按权重累加。",
        "difficulty": "核心",
        "summary": (
            "对每个专家 `i`,找出所有路由到它的 (token, top_slot) 对,送入专家网络,再按 `weights[token][top_slot]` 累加到输出。"
        ),
        "what_you_learn": [
            "`expert_positions` 如何枚举 (token, top_slot) 对。",
            "为什么权重要取 `weights[t][k]` —— top_slot 位置而不是专家 id。",
            "稀疏分发避免了 all-to-all 的显存爆炸。",
        ],
        "workshop_steps": [
            "对每个 token 的每个 top_slot,判断是否等于当前 expert_id。",
            "把 `expert_fn(inputs[t]) * weights[t][k]` 加到输出。",
        ],
        "pitfalls": [
            "权重在 `weights[t][k]` (top 维度),不在 expert 维度。",
            "同一个 token 可能路由到多个专家,都要累加。",
        ],
        "blanks": {
            "expert_positions": {"label": "查找专家位置", "hint": "双层循环:对每个 token,枚举每个 `top_slot`,判断 `routed[token][top_slot] == expert_id`。"},
            "expert_contrib": {"label": "专家贡献", "hint": "`expert_fn(inputs[t]) * weights[t][k]` —— 权重在 top_slot 位置。"},
        },
    },
    "s14-expert-swiglu": {
        "title": "SwiGLU 专家",
        "tagline": "`SiLU(gate) * up`,再过 w2。",
        "difficulty": "核心",
        "summary": (
            "SwiGLU 的核心是把 FFN 的激活拆成两路:`w1(x)` 作为门 gate,`w3(x)` 作为 up;最终激活是 `SiLU(gate) * up`,再过一次 `w2` 投回来。"
        ),
        "what_you_learn": [
            "SwiGLU 相比 ReLU/GELU 的优势 —— 可学习的门控。",
            "`SiLU(x) = x * sigmoid(x)` 的逐元素实现。",
            "为什么 up 和 gate 维度要一致。",
        ],
        "workshop_steps": [
            "对每个位置 `i`,计算 `silu(gate[i]) * up[i]`。",
        ],
        "pitfalls": [
            "`silu(gate) * up`,不是 `silu(gate * up)` —— 乘法在 silu 之外。",
        ],
        "blanks": {
            "silu_mul": {"label": "SwiGLU 乘", "hint": "逐元素 `silu(gate[i]) * up[i]`。"},
        },
    },
    "s15-hc-pre": {
        "title": "mHC 预混合",
        "tagline": "用逆 RMS 缩放 logit,按 lane 权重收拢。",
        "difficulty": "进阶",
        "summary": (
            "HC 预混合先用 `rsqrt` 归一化每行的幅值,得到 logits;再按每个 lane 的权重,把 `hc_mult` 份拷贝塌缩为一份送入子层。"
        ),
        "what_you_learn": [
            "`rsqrt(mean_square + eps)` 为什么作为逐行 scale。",
            "`weights[lane]` 如何把多份 lane 加权合并。",
            "这一步是 `hc_pre` —— 后续子层只看到单份 hidden。",
        ],
        "workshop_steps": [
            "对每个 logit 乘上逆 RMS scale。",
            "对每列,沿 lanes 做 `weights[lane] * value[lane]` 求和。",
        ],
        "pitfalls": [
            "scale 要广播到每个 logit,不要忘了对齐维度。",
            "加权求和的 weights 是每 lane 一个,不是每列一个。",
        ],
        "blanks": {
            "scale_logit": {"label": "缩放 logit", "hint": "每个 logit 乘上逆 RMS `scale`。"},
            "collapse": {"label": "Lane 塌缩", "hint": "对每列,按 `weights` 加权求和。"},
        },
    },
    "s16-hc-post": {
        "title": "mHC 后混合",
        "tagline": "fresh 分支 + 残差重组,恢复 hc_mult 份。",
        "difficulty": "进阶",
        "summary": (
            "HC 后混合把单份输出(`x`)乘到每个 lane(fresh 分支),再把残差的各 lane 按 `comb[lane][src]` 加权求和(residual_mix),两部分相加得到新的 hc_mult 份。"
        ),
        "what_you_learn": [
            "fresh 分支 `post[lane] * x[col]` 的广播含义。",
            "`comb` 是 hc×hc 的方阵,把 src lane 映射到 dst lane。",
            "两条路的相加构成新的 lane 矩阵。",
        ],
        "workshop_steps": [
            "fresh:`post[lane] * x[col]`。",
            "residual:对 src lane 做 `comb[lane][src] * residual[src][col]` 求和。",
        ],
        "pitfalls": [
            "`comb[lane][src]` 的 lane 与 src 不要颠倒,否则矩阵方向会反。",
            "fresh 与 residual 两路的形状要一致。",
        ],
        "blanks": {
            "fresh_branch": {"label": "Fresh 分支", "hint": "广播 fresh 输出:`post[lane] * x[col]`。"},
            "residual_mix": {"label": "残差混合", "hint": "沿 src lane 求和:`comb[lane][src] * residual[src][col]`。"},
        },
    },
    "s17-act-quant": {
        "title": "块级 FP8 激活量化",
        "tagline": "absmax → scale → divide + clamp。",
        "difficulty": "核心",
        "summary": (
            "kernel 在每个 `[blk_m, group_size]` 块里 `reduce_absmax`,然后用 `max(amax, 1e-4) / FP8_MAX` 得到 scale。"
            "`inplace=True` 时先除 scale → cast FP8 → 乘 scale(QAT 模拟);否则直接 clamp 到 FP8 范围后输出。"
        ),
        "what_you_learn": [
            "为什么需要 `max(amax, 1e-4)` —— 防止全零块产生除零。",
            "`round_scale` 和 `scale_fmt` 的关系 —— MXFP 需要 2 的幂次 scale。",
            "inplace 的 QAT 模拟如何保持 BF16 输出但已经等效 FP8 精度。",
        ],
        "workshop_steps": [
            "写出 scale = `max(amax, 1e-4) / FP8_MAX`。",
            "对每个值 `value / scale` 再 clamp 到 `[-FP8_MAX, FP8_MAX]`。",
        ],
        "pitfalls": [
            "`scale = amax / FP8_MAX`,不是 `FP8_MAX / amax`。",
            "clamp 是对称的 `[-FP8_MAX, FP8_MAX]`。",
        ],
        "blanks": {
            "scale_formula": {"label": "scale 公式", "hint": "`max(amax, 1e-4) / FP8_MAX` —— MXFP 的 2 的幂取整放在别处。"},
            "quant_val": {"label": "量化值", "hint": "`clamp(value / scale, -FP8_MAX, FP8_MAX)`。"},
        },
    },
    "s18-fp4-gemm": {
        "title": "FP4 GEMM 的 scale 对齐",
        "tagline": "激活 scale 每 128、权重 scale 每 32,K 方向对齐。",
        "difficulty": "进阶",
        "summary": (
            "FP4 GEMM 的关键:激活 scale 粒度为 128 (沿 K),权重 scale 粒度为 32 (沿 K);kernel 在 K 循环里用不同的粒度索引:权重按 `kk // block_k`,激活按 `kk // (block_k * n_sub)`。"
        ),
        "what_you_learn": [
            "`n_sub = act_group_size // block_K = 4` —— 激活的一个 scale 覆盖 4 个权重块。",
            "为什么 FP4 → FP8 的 cast 要经过 FP32 —— C++ 重载消歧。",
            "scale 校正在第二个累加器里做。",
        ],
        "workshop_steps": [
            "激活 scale 索引:`kk // (block_k * n_sub)`。",
            "权重 scale 索引:`kk // block_k`。",
        ],
        "pitfalls": [
            "激活 scale 不要错用 `k // block_k` —— 那是权重 scale。",
            "打包 FP4 存储是 `[N, K//2]` 字节,逻辑上是 `[N, K]` 元素。",
        ],
        "blanks": {
            "act_group": {"label": "激活 scale 分组", "hint": "`kk // (block_k * n_sub)` —— 激活每 128 一个 scale。"},
            "weight_group": {"label": "权重 scale 分组", "hint": "`kk // block_k` —— 权重每 32 一个 scale。"},
        },
    },
    "s19-sparse-attn": {
        "title": "稀疏注意力在线 Softmax",
        "tagline": "running max + running sum,再加 attn_sink。",
        "difficulty": "进阶",
        "summary": (
            "稀疏注意力逐块更新 running max 和 running sum:先 `exp(score - running_max)` 累加分子/分母,然后把 `attn_sink` 作为一个虚拟的 logit 加到最终分母上。"
        ),
        "what_you_learn": [
            "在线 softmax 如何用增量 max 保持数值稳定。",
            "为什么分母要再加一个 sink 项 —— 给模型一个“不聚焦”的选项。",
            "增量更新的 rescale = `exp(prev_max - running_max)`。",
        ],
        "workshop_steps": [
            "`running_max = max(running_max, score)`。",
            "`numerator = weighted_sum * rescale + exp_score * kv[idx]`。",
            "`denominator = running_sum * rescale + exp_score`。",
            "循环结束后把 `running_sum + sink` 作为最终分母。",
        ],
        "pitfalls": [
            "`running_max` 不能初始化为 `float('-inf')` 的同时又用 exp —— 会 underflow/NaN。",
            "sink 要在循环 *之后* 加,不是每步加。",
        ],
        "blanks": {
            "update_max": {"label": "更新 running max", "hint": "`max(running_max, score)`。"},
            "update_num": {"label": "更新分子", "hint": "`weighted_sum * rescale + exp_score * kv[idx]`。"},
            "update_den": {"label": "更新分母", "hint": "`running_sum * rescale + exp_score`。"},
            "final_den": {"label": "最终分母", "hint": "`running_sum + sink` —— 循环结束后加 sink bias。"},
        },
    },
    "s20-sinkhorn": {
        "title": "mHC 的 Sinkhorn 迭代",
        "tagline": "交替归一化行与列,收敛到双随机矩阵。",
        "difficulty": "进阶",
        "summary": (
            "Sinkhorn 迭代把任意非负矩阵逼近到双随机:每轮先归一化行,再归一化列。epsilon 防止零行/零列导致除零。"
        ),
        "what_you_learn": [
            "Sinkhorn / RAS 的收敛性 —— 多轮 row/col 归一化即可逼近双随机。",
            "`+ eps` 为什么必须出现在分母 —— 避免除零。",
            "mHC 的 comb 为什么要双随机 —— 保证 lane 变换不改变总质量。",
        ],
        "workshop_steps": [
            "每一轮:先对行归一化,再对列归一化。",
            "行归一化调 `normalize_rows(matrix, eps)`。",
            "列归一化调 `normalize_cols(matrix, eps)`。",
        ],
        "pitfalls": [
            "col 归一化的初始化一定要在第一轮 row-softmax 之后立刻做。",
            "eps 要一直加 —— 否则零行会炸。",
        ],
        "blanks": {
            "col_normalize": {"label": "列归一化", "hint": "每个元素除以对应列的和(加上 eps)。"},
            "row_loop": {"label": "循环行归一化", "hint": "每一轮调 `normalize_rows(matrix, eps)`。"},
            "col_loop": {"label": "循环列归一化", "hint": "每一轮调 `normalize_cols(matrix, eps)`。"},
        },
    },
}


# Interlude translations
INTERLUDES_ZH: dict[str, dict] = {
    "i01-model-imports": {
        "title": "导入与精度默认",
        "tagline": "后面每一个 block 都要用到的基础设施。",
        "summary": (
            "文件开头拉入标准库、`kernel` 里的融合算子 (`act_quant`、`fp4_gemm`、`sparse_attn`、`hc_split_sinkhorn`),"
            "并设置分布式拓扑 (`world_size`、`rank`) 与数值默认 (`block_size`、`fp4_block_size`、`default_dtype`、`scale_fmt`、`scale_dtype`) —— "
            "这些全局量会在 `Transformer.__init__` 里被 `ModelArgs` 覆盖。"
        ),
        "why_it_matters": [
            "`block_size = 128` 是 FP8 的分块大小;`fp4_block_size = 32` 是 FP4 的分块大小。",
            "当 `ModelArgs.dtype=\"fp8\"` 时,`default_dtype` 会被翻成 `torch.float8_e4m3fn`。",
            "kernel 的 import 声明了 GPU 侧的契约,剩下的 `model.py` 都假定这些存在。",
        ],
    },
    "i02-set-dtype": {
        "title": "`set_dtype` 上下文管理器",
        "tagline": "临时覆盖 `torch.get_default_dtype()` 且保证异常安全。",
        "summary": (
            "`set_dtype` 是一个 contextmanager:入 with 时替换 PyTorch 全局默认 dtype,出 with 时恢复,即便函数体抛异常也能恢复。"
            "`Block.__init__` 与 `Transformer.__init__` 借此在构造 HC 参数时强制使用 FP32。"
        ),
        "why_it_matters": [
            "HC 参数存 FP32,是为了避免 Sinkhorn 里的精度崩溃。",
            "try/finally 是关键 —— 没有它,with 内部抛异常后进程会卡在 FP8。",
        ],
    },
    "i03-model-args": {
        "title": "ModelArgs —— 全部配置",
        "tagline": "论文里能调的每一个参数都在这。",
        "summary": (
            "`ModelArgs` 枚举了所有超参:形状 (`dim`、`n_heads`)、精度 (`dtype`、`scale_fmt`、`expert_dtype`、`scale_dtype`)、"
            "MoE (`n_routed_experts`、`n_activated_experts`、`score_func`、`route_scale`)、"
            "MLA/MQA (`q_lora_rank`、`head_dim`、`rope_head_dim`、`o_groups`、`o_lora_rank`)、"
            "滑动窗口 + 压缩 (`window_size`、`compress_ratios`)、"
            "YaRN (`original_seq_len`、`rope_theta`、`rope_factor`、`beta_fast`、`beta_slow`)、"
            "闪电索引器 (`index_n_heads`、`index_head_dim`、`index_topk`) 以及超连接 (`hc_mult`、`hc_sinkhorn_iters`、`hc_eps`)。"
        ),
        "why_it_matters": [
            "`compress_ratios = (0, 0, 4, 128, 4, 128, 4, 0)` 编码了跨层的混合注意力排程。",
            "`score_func=\"sqrtsoftplus\"` 是新引入的门控 —— 见课程 12。",
            "`hc_mult=4` 表示每条残差实际上携带 4 份 hidden state 副本。",
        ],
    },
    "i04-parallel-embedding": {
        "title": "ParallelEmbedding —— 词表切分的查表层",
        "tagline": "每个 rank 只持有词表的一片,先掩码再 all-reduce。",
        "summary": (
            "Embedding 按词表维度切分,每个 rank 只存 `vocab_size // world_size` 行。"
            "越界的 token id 在 `F.embedding` 之前被掩码为 0,最终通过 `dist.all_reduce` 汇总。"
            "单机 (`world_size==1`) 则走快路径,跳过掩码和 all-reduce。"
        ),
        "why_it_matters": [
            "把 embedding 切分下来能省大量显存 —— V4 词表有 12 万余条。",
            "用掩码替代分支是常用的并行 trick,免去 per-rank 的 if。",
        ],
    },
    "i05-linear-forward": {
        "title": "Linear.forward —— 与分发器对接",
        "tagline": "两行代码,却把 `Linear` 绑在了精度路由上。",
        "summary": (
            "`Linear.forward` 直接调用 `linear(x, self.weight, self.bias)`。"
            "因为 `ColumnParallelLinear` / `RowParallelLinear` 都继承自 `Linear`,整个模型的每一次线性变换都走同一个 `linear()` 分发器。"
        ),
        "why_it_matters": [
            "这是关键接缝:Linear → linear() → {fp4, fp8, BF16} GEMM,别无旁路。",
        ],
    },
    "i06-precompute-helpers": {
        "title": "YaRN —— 修正区间辅助函数",
        "tagline": "`find_correction_range` 与 `linear_ramp_factor`。",
        "summary": (
            "`precompute_freqs_cis` 在计算基础 RoPE 表之前定义了三个嵌套工具。"
            "`find_correction_dim` 反解 RoPE 的周期方程,回答“哪一维频率在 `max_seq_len` 内正好完成 N 次旋转”;"
            "`find_correction_range` 把答案 clip 到 `[0, dim-1]`;"
            "`linear_ramp_factor` 在上下界之间画一条线性斜坡,用来做低频 / 高频之间的软过渡。"
        ),
        "why_it_matters": [
            "这三个函数基本逐字实现了 YaRN 论文的第 3 节。",
            "没有这条线性斜坡,缩放后的频率在边界会出现肉眼可见的折角。",
        ],
    },
    "i07-rotate-activation": {
        "title": "随机化 Hadamard 旋转",
        "tagline": "在 FP8 量化之前把逐通道幅值均摊开。",
        "summary": (
            "即将被 FP8 量化的激活先做一次 Hadamard 旋转。旋转保范,但会把能量从个别 spike 通道均摊到所有通道,让每块的 absmax 更平稳,scale 选取更精确。"
            "在闪电索引器的 Q / KV 路径上使用。"
        ),
        "why_it_matters": [
            "Hadamard 是正交变换,保 L2 范数,不会丢信息。",
            "外部 `fast_hadamard_transform` 库提供 CUDA kernel,算法本身是标准的。",
        ],
    },
    "i08-topk-helpers": {
        "title": "窗口 / 压缩 Top-k 索引构建",
        "tagline": "提前把位置索引构建好,重复利用。",
        "summary": (
            "两个 `@lru_cache` 缓存的工具函数构造稀疏注意力用的 top-k 索引矩阵。"
            "`get_window_topk_idxs` 输出滑动窗口的索引映射 (decode 下带 ring-buffer 旋转);"
            "`get_compress_topk_idxs` 输出静态压缩的索引映射 (用在 `compress_ratio != 4` 的层)。"
        ),
        "why_it_matters": [
            "二者只依赖位置,不依赖激活,所以 lru_cache 能命中。",
            "`-1` 哨兵值表示“不要注意这里”,交给 kernel 去掩掉。",
        ],
    },
    "i09-compressor-init": {
        "title": "Compressor —— 状态与 overlap_transform",
        "tagline": "按 `compress_ratio` 做可学习的门控池化。",
        "summary": (
            "`Compressor.__init__` 分配三个可学习矩阵 (`ape`、`wkv`、`wgate`)、逐 head 的 `norm`,"
            "以及关键的两个状态缓冲 `kv_state`、`score_state` —— 它们在 decode 阶段跨 forward 调用保留部分窗口。"
            "当 `compress_ratio == 4` 时开启 `overlap`,缓冲翻倍以支持重叠窗口。"
            "`overlap_transform` 把 `[b, s, r, 2d]` 的门控张量重排成 2r 步长形式。"
        ),
        "why_it_matters": [
            "两个状态缓冲让这个模块在 decode 之间携带状态 —— 要小心别名(aliasing)问题。",
            "`self.kv_cache` 是由外层 Attention 写入的,不在 __init__ 中创建。",
        ],
    },
    "i10-compressor-decode": {
        "title": "Compressor.forward —— Decode 路径与收尾",
        "tagline": "借助状态缓冲完成逐 token 的增量压缩。",
        "summary": (
            "`start_pos > 0` 时进入 decode:新 token 写入 overlap 槽位或普通槽位,"
            "每 `compress_ratio` 步触发一次压缩事件并写进 `self.kv_cache`。"
            "收尾阶段:RMSNorm + rotary (仅 rope 子段),索引器版本做 rotate + FP4 模拟,普通版本做 FP8 模拟。"
        ),
        "why_it_matters": [
            "Decode 要严格地每 ratio 步产生一次压缩,不多不少。",
            "`rotate=True` 的 FP4 路径只有索引器会触发。",
        ],
    },
    "i11-indexer-init": {
        "title": "Indexer —— 低秩 Q + 旋转化的压缩",
        "tagline": "用 FP4 模拟的得分选择压缩 KV 的 top-k。",
        "summary": (
            "索引器自己带了一个 Compressor (`rotate=True`,走 Hadamard + FP4)。"
            "`forward` 里先把 `qr` 过 `wq_b`,给 rope 子段加旋转,再整体做 Hadamard + FP4 模拟。"
            "接着调用索引器的 Compressor 更新自己的 KV 缓存。直到 `weights_proj` 被计算出来,为下一节的打分做好了准备。"
        ),
        "why_it_matters": [
            "索引器的 head 数 (`n_heads`) 与注意力的 head 数是分开的。",
            "这里的 FP4 只是训练期的 *模拟* (QAT),并未实际调用 kernel。",
        ],
    },
    "i12-indexer-tail": {
        "title": "Indexer —— Top-k + Offset 改写",
        "tagline": "无效位置用 -1 填,让稀疏 kernel 自动跳过。",
        "summary": (
            "打分完成后做 topk,prefill 路径里把会看未来的位置置为 -1,"
            "幸存者加上 `offset` —— 这是压缩 KV 在共享 KV 缓冲中的起点。"
            "-1 是稀疏注意力 kernel 约定的哨兵,能让 kernel 无分支地跳过。"
        ),
        "why_it_matters": [
            "offset 技巧让窗口位置和压缩位置共享同一索引空间。",
            "未来掩码涉及整数比率运算,容易出 off-by-one bug。",
        ],
    },
    "i13-attention-init": {
        "title": "Attention —— MLA 构造与 Q/KV 投影",
        "tagline": "低秩 Q 通过 `wq_a → q_norm → wq_b`,分组 O 通过 `wo_a → wo_b`。",
        "summary": (
            "`Attention.__init__` 搭起 MLA 栈:低秩 Q (`wq_a`/`q_norm`/`wq_b`)、单 KV 投影、分组 O (`wo_a` 列并行进组, `wo_b` 行并行出组)、"
            "可学习的 `attn_sink` 偏置、可选的 Compressor + Indexer 对 (只有 `compress_ratio` 非零的层才有),"
            "以及按层类型(混合注意力走 YaRN,纯滑动窗口不走)预先计算的 RoPE 表。"
            "`forward` 的前半段准备 Q (投影 → 按 head 维 RMS → rope 子段旋转) 和 KV (投影 → RMS → 旋转 → rope 之外做 FP8 模拟)。"
        ),
        "why_it_matters": [
            "`compress_ratio=0` 的层是纯滑动窗口,完全不走 Compressor。",
            "`compress_ratio=4` 启用 Indexer;其他 ratio 走纯压缩。",
        ],
    },
    "i14-attention-output": {
        "title": "Attention —— 逆旋转与分组 O",
        "tagline": "反向 rotary + 低秩 O 投影。",
        "summary": (
            "稀疏注意力 kernel 返回后,对每 head 输出的 rope 子段做 `inverse=True` 的旋转,把 heads 合并进 group,再通过 `[n_groups, o_lora_rank]` 的 `wo_a` 与行并行的 `wo_b` 输出。"
        ),
        "why_it_matters": [
            "旋转 + 逆旋转保证 K·Q 点积在 RoPE 空间,但输出回到模型空间。",
            "注释“BF16 for simplicity”标了一个未来的优化点 —— `wo_a` 其实可以留在 FP8。",
        ],
    },
    "i15-gate-init": {
        "title": "Gate —— 初始化",
        "tagline": "Hash 路由 vs 打分路由,可选 top-k 偏置。",
        "summary": (
            "Gate 存放路由矩阵 `weight: [n_experts, dim]`;hash 路由层额外拥有 `tid2eid: [vocab_size, n_activated]` 的查表。"
            "打分路由层拥有逐专家的 `bias`,它只在 top-k 选择里加,不进入最终的 routing 权重 —— 这是 DeepSeek-V3 的 top-k 偏置技巧。"
        ),
        "why_it_matters": [
            "`layer_id < n_hash_layers` 的层走 hash 路由 —— 专家完全由 token id 决定。",
            "Routing 权重绕开 bias 的做法很微妙,正是下一课练习的重点。",
        ],
    },
    "i16-expert-header": {
        "title": "Expert —— 头部注释",
        "tagline": "短短一段注释,说明下一课要拆什么。",
        "summary": (
            "每个专家都是 SwiGLU FFN,包含 `w1`、`w2`、`w3` 三个 Linear。计算在 FP32 里做以保证稳定,"
            "`swiglu_limit` 可选地对预激活做 clip,防止 FP8 饱和。"
        ),
        "why_it_matters": [
            "`swiglu_limit` 只用在 routed experts,shared expert 不 clip。",
        ],
    },
    "i17-moe-init": {
        "title": "MoE —— 专家分片与门控预调用",
        "tagline": "路由专家按 rank 切分,共享专家人手一份。",
        "summary": (
            "`MoE.__init__` 把 `n_routed_experts` 按 rank 切分:rank `r` 拥有 `[r·n_local, (r+1)·n_local)`,"
            "其他 rank 的专家位填 `None`。共享专家人手一份(每个 rank 都持有)。"
            "`forward` 把 `x` flatten 后调 gate,拿到 `(weights, indices)`,FP32 分配累加缓冲 `y` 准备分发。"
        ),
        "why_it_matters": [
            "`self.experts` 里 None 值不是 bug —— 它们标记当前 rank 不拥有这些专家。",
            "`bincount(indices)` 统计每个专家的 token 数,方便跳过空专家。",
        ],
    },
    "i18-block-init": {
        "title": "Block —— HC 参数方阵",
        "tagline": "每个 block 为 attention 和 FFN 各备一份 mix/base/scale。",
        "summary": (
            "每个 transformer block 拥有两套 HC 参数(一套 attention、一套 FFN)。"
            "`hc_attn_fn`、`hc_ffn_fn` 是 `[mix_hc, hc_dim]` 的 mix 张量。base 与 scale 向量调节 Sinkhorn 的输入(pre 前 softmax、post 后 sigmoid、comb 组合矩阵)。"
            "所有 HC 参数借 `set_dtype` 在 FP32 下分配。"
        ),
        "why_it_matters": [
            "`mix_hc = (2 + hc_mult) * hc_mult` 对应 pre + post + 组合行。",
            "`hc_dim = hc_mult * dim`,每份 HC 拷贝都是完整宽度的 hidden。",
        ],
    },
    "i19-block-forward": {
        "title": "Block.forward —— HC Pre/Attn/Post × Pre/FFN/Post",
        "tagline": "两个 HC 三明治,每个子层一个。",
        "summary": (
            "block 前向跑两个 HC 包裹的子层。每个子层都是对称的 `hc_pre → sublayer_norm → sublayer → hc_post` 流水。"
            "attention 子层用 `hc_attn_fn/scale/base` 与 `attn_norm`;FFN 子层用 `hc_ffn_fn/scale/base` 与 `ffn_norm`。"
            "残差是 *pre-mix* 的 `x`,而不是 pre-mix 之后的输出。"
        ),
        "why_it_matters": [
            "送给 `hc_post` 的残差是 `hc_pre` 的输入,不是输出 —— 这是典型的 mHC 样式。",
            "`hc_pre`/`hc_post` 负责维持 HC 副本之间的一致性。",
        ],
    },
    "i20-parallel-head": {
        "title": "ParallelHead —— Logits 与静态 HC 收拢",
        "tagline": "最终 RMS → 词表切分的线性 → all-gather。",
        "summary": (
            "LM head 同样按词表切分。它自带一个轻量化的 `hc_head`(单 sigmoid 加权融合),在最后的 norm + linear 前把 HC 份副本合并。"
            "TP 模式下 logits 用 all-gather 拼起来,让每个 rank 都看到完整词表。"
        ),
        "why_it_matters": [
            "`get_logits` 只处理最后一个位置,其余隐藏在前向传播中被丢弃。",
            "`hc_head` 没有 Sinkhorn —— 只是 sigmoid 直混(更快,每步一次)。",
        ],
    },
    "i21-mtp-block": {
        "title": "MTPBlock —— Multi-Token Prediction",
        "tagline": "复用 `Block`,输入是投影后的 embedding + hidden 融合。",
        "summary": (
            "`MTPBlock` 继承自 `Block`,加入 Multi-Token Prediction:给定主路径隐藏和错位的输入 embedding,用 `e_proj`/`h_proj` 融合后,再过一层 Block,然后用共享的 ParallelHead 输出推测性 logits。"
            "训练期提供 MTP 辅助损失;推理期可驱动 speculative decoding。"
        ),
        "why_it_matters": [
            "`self.embed` 与 `self.head` 由 Transformer 在构造时注入 —— 这里没有自己持有。",
            "类级的 `hc_head_fn`/`hc_head_scale`/`hc_head_base` 是 MTP 头专属的 FP32 参数。",
        ],
    },
    "i22-transformer": {
        "title": "Transformer —— 全局状态与组装",
        "tagline": "装配整个模型,同时设置全局精度。",
        "summary": (
            "`Transformer.__init__` 负责设置全局 TP 状态 (`world_size`、`rank`、`default_dtype`、`scale_fmt`、`scale_dtype`)。"
            "然后构建 embedding、`n_layers` 个 block、最终 RMS norm、共享的 ParallelHead、`n_mtp_layers` 个 MTP block(内部引用共享的 embed/head),以及自身的 head 级 HC 参数。"
            "`forward` 先 embed,扩展为 `hc_mult` 份,过每个 block,最后通过 head 收尾。"
        ),
        "why_it_matters": [
            "在 `__init__` 里设置全局变量不常见 —— 但不这样做,`Linear.__init__` 会默认 BF16。",
            "`h.unsqueeze(2).repeat(1, 1, hc_mult, 1)` 就是 HC 初始化 —— 所有拷贝起点相同。",
        ],
    },
    "i23-main": {
        "title": "`__main__` —— 冒烟测试",
        "tagline": "参考实现实际被这样跑起来。",
        "summary": (
            "文件末尾的 harness 构造一个 mini `Transformer`,跑一次 `(2, 128)` 的 prefill,随后 22 步 decode,最后在手工构造的 hidden 上测 MTP block。"
            "每节课的代码都源于这种调用形态 —— 如果你从零重新实现,一律以这个 harness 作为冒烟测试。"
        ),
        "why_it_matters": [
            "`torch.manual_seed(0)` + CUDA 让输出形状确定。",
            "`ModelArgs(n_hash_layers=0)` 跳过 hash 路由分支。",
        ],
    },
    "i24-kernel-imports": {
        "title": "TileLang 导入与 IEEE 754 快速数学",
        "tagline": "`fast_log2_ceil`、`fast_pow2`、`fast_round_scale` 都走位运算。",
        "summary": (
            "文件一开始引入 `tilelang` 与 `tilelang.language as T`,声明 pass config (关闭 warp 特化与 TMA lowering 提高兼容性),并把全部 dtype 字符串别名集中。"
            "三个 `fast_*` 函数用 IEEE 754 位操作算 `ceil(log2(x))` 与 `2^x`,避免调用慢的 `log`/`ceil` intrinsic,也让编译器更容易折叠整数运算。"
        ),
        "why_it_matters": [
            "`fast_round_scale` 让 MXFP 的 2 的幂 scale 一个周期搞定。",
            "同一套位 trick 在 FP4 量化 kernel 里再次出现(见课程 17)。",
        ],
    },
    "i25-act-quant-wrapper": {
        "title": "`act_quant` —— 张量级包装",
        "tagline": "准备输入输出、JIT、调用 kernel。",
        "summary": (
            "包装函数把激活重排成 `[M, N]`,根据 `inplace` 决定输出张量的 dtype (inplace 时与输入同,否则 FP8),"
            "分配 per-block scale 张量 `s`,按当前配置 JIT 出 kernel 并执行。`inplace=True` 时把 quant+dequant 的结果拷贝回输入,不返回 scale。"
        ),
        "why_it_matters": [
            "`assert N % block_size == 0` 是分块量化的前提。",
            "设置 `scale_fmt` 会自动开启 `round_scale` —— 走 MXFP 语义。",
        ],
    },
    "i26-fp4-quant": {
        "title": "`fp4_quant_kernel` 与 `fp4_act_quant`",
        "tagline": "FP4 的动态范围极小,每一位都要争。",
        "summary": (
            "分块 FP4 量化与 FP8 kernel 同形,但块大小是 32,`fp4_max = 6.0`,scale 用 `fast_round_scale` 取 2 的幂。"
            "`max(absmax, 6 * 2**-126)` 做次正规保护,避免绝零块产生 NaN scale。"
            "包装函数负责分配打包 FP4 存储 (最后一维是 `N // 2` 字节)。"
        ),
        "why_it_matters": [
            "这里 FP4 量化的输出就是 `fp4_gemm` 的权重输入端。",
            "没有那条下界保护,`absmax = 0` 的块会 NaN。",
        ],
    },
    "i27-fp8-gemm": {
        "title": "`fp8_gemm_kernel` 与包装",
        "tagline": "C[M,N] = A[M,K] @ B[N,K]ᵀ,双侧每 128 一个 FP8 scale。",
        "summary": (
            "FP8 GEMM 是经典的 tiled GEMM:`block_M=32`、`block_N=block_K=128`、K 循环 4 级流水,"
            "scale 校正通过第二个累加器 `C_local_accum` 在 FP32 下完成。"
            "`scales_B` 每 block_N 组一个,`scales_A` 每行每 K 块一个。"
            "包装函数把输入 reshape 成 `(M, K)`,输出使用当前默认 dtype。"
        ),
        "why_it_matters": [
            "双累加器(tile 内 `C_local`,scale 校正 `C_local_accum`)提供 2× 累加精度。",
            "`T.use_swizzle(panel_size=10)` 重新排 tile 顺序以命中 L2。",
        ],
    },
    "i28-sparse-attn-wrapper": {
        "title": "`sparse_attn` —— head 补齐包装",
        "tagline": "head 数补到 16 再下发 kernel,返回后切回来。",
        "summary": (
            "调用稀疏注意力 kernel 前,包装函数把 head 维补齐到 16 (不够时拼 0),让每 head 的 fragment 大小刚好落在 warp tile 最佳区间。"
            "kernel 返回后再用 `narrow` 裁回原 head 数,`attn_sink` 也做相应补齐。"
        ),
        "why_it_matters": [
            "V4 里 (`index_n_heads=64`、`n_heads=64`) 实际并不需要补齐,但 kernel 防御性地保留了这条路径。",
            "`narrow` 之后一定要 `.contiguous()`,下游 GEMM 才能读到干净布局。",
        ],
    },
    "i29-fp4-gemm-wrapper": {
        "title": "`fp4_gemm` —— 张量级包装",
        "tagline": "形状合同、JIT、下发。",
        "summary": (
            "与 FP8 包装镜像:`fp4_gemm` 检查连续性,取 `M/N/K`,按默认 dtype 分配 `C`,JIT 出带正确 scale dtype 的 kernel 并执行。"
            "打包 FP4 权重 `B` 保持 `[N, K//2]`,值沿 K 轴紧排。"
        ),
        "why_it_matters": [
            "kernel 要求 `B` 沿 K 打包 —— 这是 `fp4_quant_kernel` 的承诺。",
        ],
    },
}


__all__ = ["UI_ZH", "SITE_META_ZH", "LESSONS_ZH", "INTERLUDES_ZH"]
