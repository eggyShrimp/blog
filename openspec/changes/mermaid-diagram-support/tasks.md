# Tasks

- [x] 1. 重写 `lib/remark-mermaid.ts` — 同步插件，输出 `mdxJsxFlowElement`
- [x] 2. 新增 `components/mermaid/index.tsx` — `"use client"` 组件，动态加载 mermaid 并渲染 SVG
- [x] 3. 修改 `components/index.tsx` — 注册 `Mermaid` 到 MDX 组件映射
- [x] 4. 修改 `app/globals.css` — 添加 `.mermaid-diagram` 样式（含 `min-height`、`overflow-x`、降级 `code` 样式）
- [x] 5. 删除 `lib/mermaid.ts`（JSDOM 方案废弃）
- [x] 6. 卸载 `jsdom`（不再需要）
- [x] 7. 修改 `next.config.mjs` — 移除 `mermaid`、`jsdom` 的 `serverExternalPackages`
- [x] 8. 验证：构建通过，mermaid 代码块在编译后 HTML 中不存在 `language-mermaid` class
