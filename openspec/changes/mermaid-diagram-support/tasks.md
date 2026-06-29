# Tasks

- [ ] 1. 安装依赖：`mermaid` + `jsdom`
- [ ] 2. 新增 `lib/mermaid.ts` — JSDOM 初始化 + Mermaid 主题配置 + `renderMermaidDiagram()`
- [ ] 3. 新增 `lib/rehype-mermaid.ts` — rehype 插件，拦截 mermaid 代码块并替换为 SVG
- [ ] 4. 修改 `app/posts/[slug]/page.tsx` — 在 `rehypePrismPlus` 前注册 `rehypeMermaid`
- [ ] 5. 修改 `app/globals.css` — 添加 `.mermaid-diagram` 响应式容器样式
- [ ] 6. 修改 `next.config.mjs` — 将 `mermaid`、`jsdom` 加入 `serverExternalPackages`
- [ ] 7. 验证：创建测试 MDX 文章含 mermaid 图表，确保构建通过且 SVG 正常渲染
