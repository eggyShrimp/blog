# Proposal: Mermaid Diagram Support

## Why

博客目前不支持流程图/时序图等图示。Mermaid 是最广泛使用的文本驱动图示语言，在 MDX 中以 fenced code block (` ```mermaid`) 书写，与博客的纯文本写作理念契合。

## What Changes

- 新增 `mermaid` + `jsdom` 依赖
- 新增 `lib/mermaid.ts` — JSDOM 初始化 + Mermaid 渲染函数
- 新增 `lib/rehype-mermaid.ts` — rehype 插件，在构建时将 mermaid 代码块转换为静态 SVG
- 修改 `app/posts/[slug]/page.tsx` — 注册 rehype 插件
- 修改 `app/globals.css` — 添加 mermaid 容器样式
- 修改 `next.config.mjs` — 添加 `serverExternalPackages`

## Capabilities

- **mermaid-rendering** — 构建时将 MDX 中的 mermaid 代码块预渲染为内联 SVG

## Impact

- 新增依赖：`mermaid` (~2MB)、`jsdom` (~20MB)，仅限构建时使用，不进入客户端 bundle
- 影响文件：`lib/`（新增 2 个文件）、`app/posts/[slug]/page.tsx`、`app/globals.css`、`next.config.mjs`、`package.json`
- 不影响现有 MDX 内容，不影响已发布的文章
