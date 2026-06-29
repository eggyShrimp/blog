# Design: Mermaid Diagram Support

## Context

当前 MDX 渲染链路：

```
MDX raw → remark (GFM, removeToc) → rehype (headingIds, prism-plus) → JSX
```

`rehype-prism-plus` 对所有 fenced code block 做语法高亮。Mermaid 代码块以 ` ```mermaid` 书写，会被转换为 `<pre><code class="language-mermaid">`。

## Goals / Non-Goals

**Goals:**
- 支持在 MDX 中写 ` ```mermaid` 代码块并渲染为 SVG
- 构建时（build time）预渲染，零客户端 JS，零 FOUC
- 配色与博客 warm paper 主题一致
- 失败时降级为展示原始代码块

**Non-Goals:**
- 不支持客户端交互式编辑或缩放 Mermaid 图
- 不支持 Mermaid 以外的图示语言（如 PlantUML、Graphviz）
- 不支持增量更新/热更新 Mermaid 图（dev 模式下每次刷新会重新渲染）

## Decisions

### 1. 构建时预渲染（方案 B）

选择用 `jsdom` + `mermaid.render()` 在构建时将 mermaid 代码块转为静态 SVG。

**理由**：博客是纯静态站点（`dynamicParams = false`），编译在构建时完成。预渲染 SVG 完全消除客户端 FOUC 和 JS 依赖。

**替代方案**：客户端组件渲染。被拒绝——会引入布局跳动，与博客「零动画」和「即时呈现」的设计原则冲突。

### 2. rehype 插件而非 remark 插件

Mermaid 代码块在 HAST 层表现为 `<pre><code class="language-mermaid">`，直接替换为 `<div class="mermaid-diagram"><svg>` 更自然。remark 插件需要构造 `mdxJsxFlowElement` 节点再传入 SVG 字符串，增加复杂度且无实质收益。

### 3. 插件执行顺序

`rehype-mermaid` 必须排在 `rehype-prism-plus` 之前。Mermaid 块被转为 SVG 容器后，Prism 不再处理它——避免 Prism 对 mermaid 语法做无意义高亮。

### 4. JSDOM 全局注入

`mermaid.render()` 依赖 `document`、`DOMParser` 等浏览器 API。使用 `JSDOM` 在 Node.js 中模拟这些 API：

```typescript
const jsdom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
globalThis.document = jsdom.window.document as Document;
// ... 其他 API 赋值
```

仅在 `lib/mermaid.ts` 的首个 import 时初始化一次（模块级副作用），避免重复创建 JSDOM 实例。

### 5. Mermaid 主题配置

使用 Mermaid 的 `base` 主题 + 自定义 `themeVariables` 映射到 warm paper 色板：

| Mermaid Variable | Token | Value |
|---|---|---|
| `primaryColor` | paper | `#f9f6f0` |
| `primaryTextColor` | ink | `#2c241b` |
| `primaryBorderColor` | line | `#e5dfd3` |
| `lineColor` | muted | `#8b7e6b` |
| `secondaryColor` | surface-hover | `#f3efe8` |
| `fontFamily` | — | `Courier Prime, ...` |

### 6. 响应式处理

`.mermaid-diagram` 容器设 `overflow-x: auto`，内部 SVG 设 `max-width: 100%; height: auto`。复杂流程图在窄屏上可横向滚动，不破坏页面布局。

### 7. 错误降级

若 `mermaid.render()` 抛出异常（语法错误等），rehype 插件保留原始 `<pre><code>` 块不变——用户看到原始 mermaid 文本，可据此修复。

### 8. serverExternalPackages

`mermaid` 和 `jsdom` 同时包含 CJS/ESM 导出且有浏览器专用条件导出。加入 `serverExternalPackages` 禁止 Next.js 打包它们，让 Node.js 以原生模块方式加载。

## Risks / Trade-offs

- **Risk**: `jsdom` 约 20MB，增加 `node_modules` 体积。 → **Mitigation**: 仅开发/构建时使用，生产环境不部署此包。
- **Risk**: Mermaid 版本升级后 `render()` API 变化 → **Mitigation**: `mermaid` 锁定主版本号，`render()` 是稳定 API。
- **Risk**: 复杂图表（如 gantt、gitGraph）渲染慢 → **Mitigation**: 构建时仅执行一次，不影响用户请求。
