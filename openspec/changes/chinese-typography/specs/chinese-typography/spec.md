## 中文排版核心参数

### 行宽

- 文章正文行宽从 `65ch` 改为 `42em`（约 42 个汉字/行）
- 桌面端容器 max-width 保持 864px，行宽通过 prose 的 maxWidth 控制
- 移动端不受影响（已有 95vw 约束）

### 正文对齐

- `.prose` 容器添加 `text-align: justify`
- 标题不受影响（h1-h6 保持默认对齐）
- 代码块和行内代码不受影响（`pre, code` 有独立对齐）

### 行高与段落间距

- 正文行高：`1.65` → `1.6`
- 段落间距：`1em` → `0.8em`
- H2 上间距：`1.6em` → `1.3em`
- H3 上间距：`1.4em` → `1.2em`

### 字体栈

- `sans` 栈中，中文字体（PingFang SC, Hiragino Sans GB, Microsoft YaHei）移至 `var(--font-fira)` 之前
- `serif` 和 `courier` 栈不变
- `mono` 栈不变

### 标点禁则

- `.prose` 容器添加 `line-break: strict`

### 中西文间距（渐进增强）

- `.prose` 容器添加 `text-spacing: trim-start trim-end trim-adjacent`
- 不支持 `text-spacing` 的浏览器退化为无额外间距

### 实现位置

- `app/globals.css`：行高、间距、对齐、禁则、text-spacing
- `tailwind.config.js`：maxWidth、字体栈重排
- `DESIGN.md`：同步更新排版参数表

### 不影响

- 非 `.prose` 容器内的排版
- 代码块样式
- 首页、标签页、关于页
- 头部、导航、作者卡片
