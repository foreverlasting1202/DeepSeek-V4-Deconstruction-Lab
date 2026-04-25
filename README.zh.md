# DeepSeek-V4 拆解实验室

**注意：这个仓库完全由 Agent 生成。如有任何问题，欢迎联系我们。**

> [English README](./README.md)

一份以「填空拼图」为主线的 DeepSeek-V4 官方参考实现（`model.py` 与
`kernel.py`）交互式教程。本仓库包含：

- **20 节课程**（`tutorial/lesson_specs.py`）：把参考代码切成一块块可
  独立测试的小段，每一块都严格对齐到真实源文件的某一段行号。
- **29 段导读**（`tutorial/interludes.py`）：用于衔接课程之间的
  narrative 段落，它们与课程拼接起来可以**逐字节重建** `model.py` 与
  `kernel.py`。
- **浏览器 IDE**（`site/`）：带语法高亮的课程视图、可点击的
  「填空胶囊」、自由编辑器、参考答案视图，以及带单项通过 / 失败 diff 的
  本地测试运行器。
- **代码生成器**（`tools/build_tutorial.py`）：从唯一的真源（lesson
  specs + interlude specs + 中文 i18n 词典）生成可运行的练习文件、参考答案
  文件、原文切片、`lessons.json` 以及站点 bootstrap。
- **校验器**（`tools/check_lesson.py`）：在受限命名空间内对用户提交
  （填空映射或整段代码）逐项验证，并返回结构化结果。
- **完整的中文本地化**：站点右上角一键切换语言，课程标题、小贴士、
  工作坊步骤、填空提示、UI 文案全部覆盖。

UI 与教学结构的灵感来自 `skyzh/tiny-llm` 与
`shareAI-lab/learn-claude-code`；技术内容基于本仓库中的 `model.py`、
`kernel.py` 与 `DeepSeek_V4.pdf`。

---

## 快速开始

前置：Python 3.10+ 与 Node.js 18+。

```bash
npm install          # 无运行时依赖，只是记录 Node 引擎
npm run dev          # 重新生成课程，然后在 :3000 启动本地讲师
```

随后访问 [http://localhost:3000](http://localhost:3000)：在侧栏选一节课，
点击代码里高亮的胶囊填入答案，然后点 **Run tests / 运行测试**。想对照
官方答案时，点 **Run solution / 运行参考答案**。

右上角的 **中文 / English** 按钮可以随时切换语言，偏好会记录在
`localStorage` 里，下次打开仍然是你上次选择的语言。

### npm 命令速查

| 命令 | 作用 |
| --- | --- |
| `npm install` | 安装空的运行时 manifest（项目是纯静态 + Python）。 |
| `npm run build` | 从 `lesson_specs.py` + `interludes.py` + `i18n_zh.py` 重新生成 `tutorial/generated/**` 与 `site/assets/lessons-data.js`。 |
| `npm run dev` | 先 `build` 再启动 dev server（`http://localhost:3000`），每次刷新自动装载最新课程。 |
| `npm start` | 只启 dev server，不重新构建。 |
| `npm test` | 构建 + 跑 `tests/test_tutorial_build.py`：包括源码逐字节重建、填空完整性、以及中英文 i18n 平衡检查。 |
| `npm run check:all` | 对每节课分别跑一次 *solution blanks* 与 *starter blanks*，确保两边都不会崩。 |

**无需 CUDA** —— 所有课程用小巧的纯 Python 桩函数去模仿 `torch` /
`tilelang` 的关键行为，跑起来毫秒级。

---

## 课程结构

20 节课分布在 5 个阶段，一共 42 个填空（平均每节 2 个）；再加 29 段
导读（interlude）把剩余的代码片段全部覆盖。

### 一、基础设施 *(Warm-up)*
- `s01` 线性层分发 — `model.py:108-120`
- `s02` 权重与 Scale 的物理布局 — `model.py:123-150`
- `s03` 行 / 列并行切分 — `model.py:155-180`
- `s04` Float32 RMSNorm — `model.py:183-196`

### 二、RoPE 与 YaRN *(Warm-up → Core)*
- `s05` RoPE 基础频率 — `model.py:220-220`
- `s06` YaRN 平滑插值 — `model.py:221-229`
- `s07` 旋转位置嵌入的应用 — `model.py:232-244`

### 三、压缩 / 稀疏注意力 *(Core)*
- `s08` Compressor 预热 — `model.py:316-342`
- `s09` 滑动窗口 KV 缓存 — `model.py:517-533`
- `s10` 窗口 + 压缩的 Top-k 合并 — `model.py:507-516`
- `s11` Lightning Indexer 评分 — `model.py:418-427`

### 四、DeepSeekMoE 与 mHC 路由 *(Core → Advanced)*
- `s12` Gate (sqrt-softplus + bias) — `model.py:564-584`
- `s13` 稀疏 MoE 分发 — `model.py:635-645`
- `s14` SwiGLU Expert — `model.py:589-606`
- `s15` mHC Pre-Mix — `model.py:674-682`
- `s16` mHC Post-Mix — `model.py:684-687`

### 五、融合算子 *(Advanced)*
- `s17` 分块 FP8 激活量化 — `kernel.py:40-102`
- `s18` FP4 GEMM 的 Scale 对齐 — `kernel.py:441-515`
- `s19` 稀疏注意力的在线 Softmax — `kernel.py:276-352`
- `s20` mHC 的 Sinkhorn 迭代 — `kernel.py:371-438`

每个 lesson entry（位于 `lesson_specs.py`）都包含：tagline、难度、标签、
论文锚点（paper anchor）、「What you learn」、分步骤的 workshop、常见
陷阱、可直接运行的 starter 代码、blanks 表以及校验器。生成器是**唯一**
把 spec 变成文件与站点数据的入口。

---

## 源码覆盖保证

本仓库一个重要的不变式是：

> **把 20 节课 + 29 段导读 + 构建时自动补全的纯空白段落拼起来，得到的
> 字节流与原始 `model.py` / `kernel.py` 完全一致。**

这条约束由两层机制保证：

1. **构建时断言**：`tools/build_tutorial.py` 里的 `_assert_coverage` 会
   对每个源文件检查所有显式段（lesson / interlude）是否满足
   「不重叠、按行号单调递增」，对每一个空隙去读真实代码，如果发现
   **不是纯空行** 就直接抛错；只有纯空白的空隙会被自动转成 `gap` 段。
   所有段拼回来还会逐字节比对原文，哪怕多一个空格都会失败。
2. **运行时测试**：`tests/test_tutorial_build.py::
   test_segments_cover_both_sources_byte_for_byte` 在每一次 `npm test`
   中再跑一遍完整重建，保证上面的约束在 CI 中始终生效。

所以——

- 改动 `lesson_specs.py` 或 `interludes.py` 的行号后，构建 / 测试会立即
  告诉你哪里漏了 / 重了 / 越界了；
- 任何人都可以用 `tutorial/generated/references/` 里的文件 **拼回一份
  和原仓库完全等价的 `model.py` / `kernel.py`**，差一字节都不行。

## 中英文国际化

中文化覆盖了：

- UI 文案：导航、按钮、标签、tooltip、测试结果徽章 …… 全部在
  `tutorial/i18n_zh.py` 的 `UI_ZH` 字典里。构建时会与
  `tools/build_tutorial.py` 里的 `_default_ui_en()` 做 key-to-key 对齐
  检查，漏掉一个 key 就会直接构建失败。
- 站点元信息：首页 hero、tagline、stage 标题、stats 名称。
- 课程内容：标题、tagline、summary、what_you_learn、workshop_steps、
  pitfalls、每个 blank 的 `label` / `hint`。
- 导读内容：标题、tagline、summary、why_it_matters。

前端通过一个 `localized(obj, field)` 小 helper 在英文 / 中文之间切换；
未翻译的字段会自动 fallback 到英文。所以即便还没来得及翻译新加的 lesson，
中文界面也能平稳降级。

CJK 排版细节：

- 字体栈在中文模式下切换到 `Noto Sans SC` + 衬线 `Noto Serif SC`（标题），
  并以 `PingFang SC` / `Microsoft YaHei` / `Source Han Sans SC` 作为系统
  回退。
- 中文模式下 `letter-spacing` 与 `line-height` 被调松一档，阅读节奏更
  接近一般中文长文。
- 所有全大写 + 大字距的英文标签（chip / eyebrow / tab）在中文模式下恢复
  成普通大小写，避免中文被强行 `uppercase` 出现的视觉错位。

---

## 一节课在背后是怎么渲染的

1. `lesson_specs.py` 里写好 spec。`starter_code` 本身就是**可以直接
   `python` 运行的 Python 模块**；每个填空位用 `__B_<id>__` 占位，而不是
   丑陋的 `BLANK` 字符串。
2. `npm run build` 会：
   - 用 `starter` 值替换 `__B_<id>__` 得到
     `tutorial/generated/puzzles/NN_<id>.py`；
   - 用 `solution` 值替换得到 `tutorial/generated/solutions/NN_<id>.py`；
   - 这两个文件都**单独可以 `python` 执行**，没有特殊的 harness。
3. 站点在加载时拿 starter 代码，把每一个 `__B_<id>__` 替换成可点击的
   「puzzle pill」，并挂上 hint 与 expected 值。
4. 点击 **Run tests / 运行测试**：浏览器把 `{ lessonId, blanks }` POST
   到 `/api/check`；dev server 再 shell out 到
   `tools/check_lesson.py`，后者在受限命名空间里跑生成后的模块，再跑
   lesson 的 validator，最后返回结构化的 checks
   （`name`、`passed`、`expected`、`actual`）。
5. 前端根据这些 check 画出绿 / 红徽章与 expected / actual 的 diff，并附带
   `stdout` 与 Python traceback。
6. **Run solution / 运行参考答案** 走同样的流程，但使用已发布的解答值。
   方便你对照行为、或在改了 spec 之后快速确认参考答案仍然通过自己的
   校验器。

---

## 仓库布局

```
.
├── model.py                    DeepSeek-V4 参考模型
├── kernel.py                   DeepSeek-V4 参考算子（TileLang）
├── DeepSeek_V4.pdf             论文（被 lesson 的 paper_anchor 引用）
├── tutorial/
│   ├── lesson_specs.py         20 节课的唯一真源
│   ├── interludes.py           29 段导读的唯一真源
│   ├── i18n_zh.py              中文翻译（UI / 站点 / 课程 / 导读）
│   └── generated/              构建产物（请勿手动编辑）
│       ├── puzzles/NN_<id>.py
│       ├── solutions/NN_<id>.py
│       ├── references/NN_<id>.py
│       └── lessons.json
├── tools/
│   ├── build_tutorial.py       specs + i18n -> generated + 站点 bootstrap
│   ├── check_lesson.py         /api/check 后端（跑用户代码 + validator）
│   └── check_all_lessons.py    npm run check:all 的入口
├── site/
│   ├── index.html              暗色主题 shell，附语言切换按钮
│   ├── styles.css              响应式 grid + puzzle-pill + CJK 排版
│   ├── app.js                  客户端渲染器 + 测试运行器 + i18n
│   ├── dev-server.mjs          静态服务 + /api/check endpoint
│   └── assets/lessons-data.js  已构建的课程包（支持纯静态托管）
└── tests/test_tutorial_build.py
```

---

## 新增一节课

1. 在 `model.py` / `kernel.py` 里挑一段。保持单一主题；一般课程
   15-80 行代码即可。
2. 往 `tutorial/lesson_specs.py` 的 `LESSON_SPECS` 里加一条 dict：
   - `id`、`order`、`session`、`stage`、`track`、`title`、`tagline`；
   - `source_path` + `line_start` + `line_end`（用于 Reference 标签页与
     构建期 sanity check）；
   - `summary`、`what_you_learn`、`workshop_steps`、`pitfalls`、
     `paper_anchor`；
   - `blanks`：每条有 `id`、`label`、`hint`、可直接运行的 `starter`、
     以及参考 `solution`；
   - `starter_code`：自包含的 Python 模块，每个填空位写 `__B_<id>__`。
     代码必须**在所有空格都保持 starter 值时也能运行**（`check:all`
     会做这个检查）；
   - `validator_code`：一个定义 `def validate(ns)` 的模块体，返回
     `{name, passed, expected, actual}` 的 list。
3. 往 `tutorial/i18n_zh.py` 的 `LESSONS_ZH` 里加这节课的中文翻译
   （至少 `title`、`summary`、每个 blank 的 `label`、`hint`）——
   不加会被 `test_every_lesson_has_chinese_translation` 抓出来。
4. 如果这节课改动了源文件的覆盖范围，同步调整 `interludes.py` 的
   interlude 段，确保源码仍然被完整覆盖。
5. 运行 `npm test` 一键重建 + 校验（包括「每个 starter 必须能跑」与
   「每个 solution 必须通过」两条断言）。
6. `npm run dev` 在浏览器里走一遍。

小贴士：
- 不要在 `starter_code` 里 `import torch` —— 用本地的小桩函数代替即可，
  课程应当秒级启动、不依赖 GPU。
- 如果 solution 依赖运算优先级（例如 `a / (b + c)`），在
  `starter_code` 里把 `__B_<id>__` 包上括号，starter 值就不会因为
  默认替换而被解析错。
- 如果某个 starter 值可能除零 / 溢出，请选一个不会病态化的默认值
  （比如用 `"score"` 而不是 `"running_max"`）。

---

## 疑难解答

**「Some checks failed: …」并给出 expected vs actual。** 好消息：你的
代码跑起来了，只是 validator 认为结果不对。点开失败的 check 看
expected / actual diff 就知道差哪。

**Inspector 区出现 Traceback 卡片。** 说明代码在 validator 运行前就崩
了。Traceback 里的文件路径会指向一个虚拟路径
`lesson://<id>`，修掉这个崩溃后重跑即可。

**`npm run dev` 报 `EADDRINUSE 3000`。** 3000 端口被占了；要么关掉那个
进程，要么 `PORT=4000 npm run dev`。

**看不到填空胶囊。** 检查 `starter_code` 里有没有对应的 `__B_<id>__`
标记。站点只会为 starter 里真正出现的 token 渲染胶囊；`npm test` 会
为所有声明过的 blank 加这条断言。

**切到中文后某些字段还是英文。** `localized()` 会自动 fallback 到英文，
通常是因为 `i18n_zh.py` 里对应的条目还没写；构建测试会在缺失关键字段
（title / summary / blank labels）时直接失败，但可选字段（例如
`paper_anchor.summary`）允许英文兜底。欢迎 PR 补齐。

---

## License

与参考实现保持一致，详情见上游 DeepSeek-V4 发布页。

---

## 参考资料

- [DeepSeek-V4-Pro](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro)

---

## 联系

如果您有任何问题，请随时通过 [Foreverlasting1202@outlook.com](Foreverlasting1202@outlook.com) 联系我们。