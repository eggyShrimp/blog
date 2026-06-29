## Context

当前项目已有一轮排版收紧（`tighter-typography-toc-sidebar`），将行高从 `1.75` 降至 `1.65`、段落间距从 `1.25em` 降至 `1em`。但该轮变更未触及中文排版核心问题：字体栈顺序、对齐方式、行宽、标点禁则、中西文间距。

博客内容特点：中文为主体，夹杂大量英文术语、代码片段、链接。属于典型的"技术博客中英文混排"场景，既需要中文排版规则（ju​justify、禁则），也需要处理好中英混排的间距问题。

参考：
- [sparanoid/chinese-copywriting-guidelines](https://github.com/sparanoid/chinese-copywriting-guidelines)：中西文间距、标点规范、名词大小写
- [W3C CLReq](https://w3c.github.io/clreq/)：中文排版需求官方规范
- [autocorrect](https://github.com/huacnlee/autocorrect)：Rust 编写的中英文自动间距修正工具

## Goals / Non-Goals

**Goals:**
- 行宽从中文字阅读舒适度出发，调至 ~42 字/行
- 正文两端对齐，形成整齐的中文块面
- 字体栈让中文字体优先匹配
- 标题间距进一步收紧，贴合中文节奏
- 标点禁则，避免行首出现逗号句号
- 行高 + 段落间距小幅收紧

**Non-Goals:**
- 不改变色彩、主题体系
- 不改变布局结构（仍为单栏/双栏）
- 不修改 MDX 源文件
- 不引入字体文件（仍用系统字体）
- 不处理"直角引号 vs 弯引号"等写作习惯问题（留待内容层面）

## Decisions

### 1. 行宽：`65ch` → `42em`

**理由**: `ch` 单位基于 `0` 字符宽度，西文约 65 字符/行舒适。中文方块字宽度约为西文 2 倍，35-42 字/行为理想阅读宽度。`42em` 在正文 `font-size: 1rem` 时约对应 42 个汉字。

**替代方案**: 继续用 `ch` 但设为 `35ch`。但 `ch` 对中文不准确，`em` 更可靠。

### 2. 对齐：`text-align: justify`

**理由**: 中文排版传统和 W3C CLReq 均推荐两端对齐。与西文左对齐的自然参差不同，中文方块字左对齐时右侧会形成明显的不规则锯齿，两端对齐后形成干净的文字块面。

注意：`justify` 只影响多行段落，单行（如标题）不受影响。移动端窄屏下 `justify` 可能导致字间距过大，需配合 `hyphens: none` 并测试。

### 3. 字体栈重排：中文 → Fira Sans → fallback

**当前**:
```
"var(--font-fira)", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", ...
```
**改为**:
```
"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "var(--font-fira)", ...
```

**理由**: 博客以中文为主要内容。当前 Fira Sans 排在前面，浏览器渲染中文时先尝试 Fira（不包含中文），再 fallback 到 PingFang SC。这导致每一帧渲染都经过 fallback 路径，且 Fira Sans 中的标点符号可能优先级高于中文标点。

### 4. 标题间距：进一步收紧

从 `tighter-typography` 的值再减：
- `h2 margin-top`: `1.6em` → `1.3em`
- `h3 margin-top`: `1.4em` → `1.2em`

**理由**: 中文字高占满 em-box，标题与正文的视觉距离天然比西文近。西文标题的 `1.5-2em` 间距对中文显得过松。

### 5. 标点禁则：`line-break: strict`

添加 `.prose { line-break: strict; }`，浏览器将遵循 CJK 标点断行规则：
- 逗号（，）、句号（。）不能出现在行首
- 左引号（"）不能出现在行尾

### 6. 中西文间距：CSS 优先，autocorrect 为辅

**CSS 方案**（立即生效）:
```css
.prose { text-spacing: trim-start trim-end trim-adjacent; }
```
`text-spacing` (CSS Text Level 4) 控制中西文之间自动留出 1/4em 间距。当前 Chromium 已支持。

**autocorrect 方案**（构建时处理，可选 task）:
MDX 编译前通过 autocorrect-node CLI 修正源文件中的空格问题，作为编译流程的一环。优点是不依赖浏览器支持，且可修正标点等更多规则。

### 7. 行高：`1.65` → `1.6`

**理由**: 中文方块字在 em-box 内占满高度，`1.6` 的行高即可提供舒适的行间距。TeX 中文排版默认行高约 `1.56`（基于 `\baselineskip` 与字号比例）。

## Risks / Trade-offs

- **Risk**: `42em` 行宽在 864px 容器中会偏窄 → **Mitigation**: 现有 `max-width` 限制保证不会过宽，窄行宽可提升可读性。若感觉过窄可回调至 `46em`。
- **Risk**: `text-align: justify` 在某些浏览器/窄屏下产生过大字间距 → **Mitigation**: 测试移动端效果。若字间距过大，可添加 `text-justify: inter-character` 或仅桌面端启用 justify。
- **Risk**: `line-break: strict` 可能影响英文长单词的断行 → **Mitigation**: strict 仅影响 CJK 字符，英文单词断行由 `word-break` / `overflow-wrap` 控制，不受影响。
- **Risk**: `text-spacing` 浏览器支持不完整（Safari 不支持）→ **Mitigation**: 作为渐进增强，不支持时退化为无额外间距。autocorrect 方案可作为补强。
