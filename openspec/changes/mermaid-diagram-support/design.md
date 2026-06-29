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
- 配色与博客 warm paper 主题一致
- 失败时降级为展示原始代码块

**Non-Goals:**
- 不支持客户端交互式编辑或缩放 Mermaid 图
- 不支持 Mermaid 以外的图示语言（如 PlantUML、Graphviz）
- 不支持服务端预渲染（尝试过 JSDOM 方案，`getBBox` 等 SVG 布局 API 无法可靠 polyfill）

## Decisions

### 1. 客户端渲染（`"use client"` 组件）

JSDOM 在 Node.js 中缺乏 SVG 布局 API（`getBBox`、`getComputedStyle` 等），polyfill 返回虚拟尺寸不可靠。改为浏览器端渲染——利用真实 DOM 保证所有图表类型正确绘制。

**理由**：Mermaid 是为浏览器设计的库，严重依赖浏览器 API。客户端渲染零 hack、零兼容风险。

**FOUC 对策**：remark 插件在编译时将 code block 替换为 `<Mermaid>` 组件，HTML 中不存在原始 mermaid 代码。页面加载时图区显示 ~100px 空占位（`min-height`），动态 `import("mermaid")` 加载后注入 SVG。用户滚动到图区时 SVG 通常已完成渲染。

### 2. remark 插件输出 `mdxJsxFlowElement`

MDAST 中 fenced code block：

```json
{ "type": "code", "lang": "mermaid", "value": "graph TD\n  A --> B" }
```

转换为 MDX JSX element：

```json
{
  "type": "mdxJsxFlowElement",
  "name": "Mermaid",
  "attributes": [{ "type": "mdxJsxAttribute", "name": "chart", "value": "graph TD\n..." }],
  "children": []
}
```

`mdxJsxFlowElement` 是 MDX v3 原生支持的 AST 类型，编译后输出 `<Mermaid chart="..." />`。

**对比 rehype**：remark 插件在 AST 的更高层操作，天然在所有 rehype 插件之前执行，无需处理与 `rehype-prism-plus` 的顺序问题。

### 3. 插件同步执行

remark 插件不做 `mermaid.render()`，仅做 AST 转换——编译速度不受图表数量和复杂度影响。

### 4. Mermaid 按需加载

`"use client"` 组件使用 `import("mermaid")` 动态加载 mermaid 库（~2MB），仅在有图的页面触发，不影响无图页面的首屏 bundle。

### 5. Mermaid 主题配置

使用 `base` 主题 + 自定义 `themeVariables` 映射到 warm paper 色板：

| Mermaid Variable | Token | Value |
|---|---|---|
| `primaryColor` | paper | `#f9f6f0` |
| `primaryTextColor` | ink | `#2c241b` |
| `primaryBorderColor` | line | `#e5dfd3` |
| `lineColor` | muted | `#8b7e6b` |
| `secondaryColor` | surface-hover | `#f3efe8` |
| `fontFamily` | — | `Courier Prime, ...` |

在客户端组件中通过 `mermaid.initialize()` 一次性配置。

### 6. 响应式处理

`.mermaid-diagram` 容器设 `overflow-x: auto` + `min-height: 100px`，内部 SVG 设 `max-width: 100%; height: auto`。复杂流程图在窄屏上可横向滚动，占位阶段无布局跳动。

### 7. 错误降级

若 `mermaid.render()` 抛出异常（语法错误等），组件 `<useState>` 切换到错误态，渲染 `<pre><code>{chart}</code></pre>`。

## Risks / Trade-offs

- **Risk**: 浏览器禁用 JS 时图区显示空占位 → **Mitigation**: 可接受——博客文章以文本为主体，图示为辅助。占位不影响阅读正文。
- **Risk**: `mermaid` 库 ~2MB，影响页面加载 → **Mitigation**: 动态 `import()` 按需加载，不在首屏 bundle 中。仅影响包含 mermaid 图的页面。
- **Risk**: 客户端渲染引入短暂空白 → **Mitigation**: `min-height: 100px` 占位维持页面布局稳定；mermaid SVG 渲染耗时 < 100ms。
