## Why

当前博客文章排版基于 Tailwind Typography 的 `prose`，其默认值完全按西文标注设计。博客内容以中文为主、中英文重度混排，导致以下体验问题：

- 行宽 `65ch` 对中文过长（英文 65 字符舒适，但中文 65 字已超理想值 35-42 字）
- 正文左对齐，中文不像西文有自然参差之美，无两端对齐导致右侧犬牙交错
- 中文字体在 font stack 中排在 Fira Sans 之后，系统每次都要 fallback 到中文字体
- 标题间距沿用西文节奏，中文标题与正文距离偏大
- 无标点禁则（`line-break: strict`），行首可能出现逗号句号
- 无中西文自动间距处理

参考 [sparanoid/chinese-copywriting-guidelines](https://github.com/sparanoid/chinese-copywriting-guidelines)。

## What Changes

- 收紧文章行宽：`65ch` → `42em`（约中文字 42/行）
- 正文两端对齐：`.prose` 添加 `text-align: justify`
- 字体栈重排：中文字体优先于 Fira Sans
- 标题间距进一步收紧：`h2: 1.6em → 1.3em`，`h3: 1.4em → 1.2em`
- 行高调整：`1.65 → 1.6`
- 段落间距收紧：`1em → 0.8em`
- 标点禁则：`.prose` 添加 `line-break: strict`
- 构建时集成 `autocorrect`：在 MDX 编译前自动修正中西文间距、标点等（可选 task）

## Capabilities

### Modified Capabilities

- `tighter-typography`：在已有收紧基础上进一步按中文标准重校所有排版参数

### New Capabilities

- `chinese-typesetting`：中西文自动间距、标点禁则、两端对齐等中文特化排版规则

## Impact

- **修改文件**: `app/globals.css`, `tailwind.config.js`, `DESIGN.md`
- **可选依赖**: `autocorrect-node`（构建时中西文间距修正）
- **无需修改**: 布局结构、MDX 源文件、组件文件
