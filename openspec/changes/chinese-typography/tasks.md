## 1. CSS 排版参数

- [x] 1.1 `app/globals.css` — 更新 `.prose` 行高 `1.65 → 1.6`，段落间距 `1em → 0.8em`
- [x] 1.2 `app/globals.css` — 更新 `.prose h2` 上间距 `1.6em → 1.3em`，`.prose h3` 上间距 `1.4em → 1.2em`
- [x] 1.3 `app/globals.css` — 新增 `.prose { text-align: justify; line-break: strict; text-spacing: trim-start trim-end trim-adjacent; }`
- [x] 1.4 `tailwind.config.js` — 修改 `maxWidth: "65ch"` → `maxWidth: "42em"`
- [x] 1.5 `tailwind.config.js` — 重排 `sans` 字体栈，中文字体移至 `var(--font-fira)` 之前

## 2. 构建时中西文间距修正

- [x] 2.1 安装 `autocorrect-node` 作为 devDependency
- [x] 2.2 在 `lib/core.ts` 的 MDX 内容加载流程中集成 autocorrect（`format()` 处理 raw 内容）
- [x] 2.3 配置 `next.config.mjs` 将 `autocorrect-node` 加入 `serverExternalPackages`
- [x] 2.4 验证：autocorrect 正确修正了 `char-encode.mdx` 和 `design-pattern.mdx` 中的中西文间距、多余空格等

## 3. 文档更新

- [x] 3.1 更新 `DESIGN.md` Typography 表格的排版参数（行高、行宽、对齐方式、中西文间距说明）
- [x] 3.2 更新 `DESIGN.md` Layout 部分

## 4. 验证

- [x] 4.1 `npm run build` 构建通过
- [x] 4.2 TypeScript 编译无错误
