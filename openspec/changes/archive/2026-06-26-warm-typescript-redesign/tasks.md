## 1. Color Palette & Global Tokens

- [ ] 1.1 在 `app/globals.css` 的 `:root` 中定义暖色 CSS 自定义属性（paper, ink, muted, accent, accent-hover, line, surface-hover）
- [ ] 1.2 `*, *::before, *::after { border-radius: 0 !important; }` 全局去圆角
- [ ] 1.3 `body` 背景设为 `--color-paper`
- [ ] 1.4 移除 `tailwind.config.js` 中的 `backdropFilter` 和 `boxShadow` 残留引用

## 2. Typography Stack

- [ ] 2.1 在 `app/layout.tsx` 中加载 Courier Prime（`next/font/google`, weight: 400/700, variable: `--font-courier`）
- [ ] 2.2 更新 `tailwind.config.js` 字体栈：`fontCourier`（Courier Prime + CJK fallback），`fontSans`（Fira Sans + CJK fallback）
- [ ] 2.3 prose 配置更新：h1-h3 `fontCourier`，正文 `fontSans`，链接色 `accent`
- [ ] 2.4 更新 `app/globals.css` 中 `article h1` 的 font-family 为 Courier Prime

## 3. PostPreviewCard → Typographic Entry

- [ ] 3.1 重写 `app/components/post-preview/index.tsx`：去 card → 块级 `<Link>` + 日期行 + 标题行 + 摘要行 + 标签行 + 下划线分隔
- [ ] 3.2 日期使用 Courier Prime + `--color-muted`
- [ ] 3.3 标题使用 `--color-accent`，hover → `--color-accent-hover` + underline
- [ ] 3.4 摘要使用 Fira Sans + `--color-muted`
- [ ] 3.5 标签使用 Courier Prime + `#` 前缀 + `--color-muted`
- [ ] 3.6 条目间用 `<hr>` （`--color-line`）分隔

## 4. Home Page Redesign

- [ ] 4.1 删除 `app/components/home/index.module.scss`
- [ ] 4.2 重写 `app/components/home/index.tsx`：作者 intro 区（name + bio + social links）+ prompt 标记 + 文章列表
- [ ] 4.3 `$ ls posts/` prompt 标记：Courier Prime + `--color-accent` + 下方 `<hr>`
- [ ] 4.4 作者 intro 区使用 `--color-ink` + Courier Prime 标题
- [ ] 4.5 删除 `app/components/post-preview/index.module.scss`（空文件）

## 5. Post Page Chrome

- [ ] 5.1 更新 `app/posts/[slug]/layout.tsx`：PostMetaInfo 日期行用 Courier Prime
- [ ] 5.2 文章与 AuthorCard 之间的 `<hr>` 用 `--color-line`
- [ ] 5.3 AuthorCard 去 box/shadow/gradient，改为纯文本或 `--color-surface-hover` 细线分隔
- [ ] 5.4 标签 `<Link>` 用 Courier Prime + `--color-muted`

## 6. Callout Component

- [ ] 6.1 重写 `components/callout/index.tsx`：去 `rounded-2xl` → `border-dashed border`，去 `shadow-sm`，去 `bg-gradient-to-br` → `bg` warm
- [ ] 6.2 验证所有现有 MDX 文章中的 `<Callout>` 渲染正常

## 7. Tag Page

- [ ] 7.1 更新 `app/tags/[tag]/page.tsx`：标题用 prompt 风格 `$ tags / <tag>`
- [ ] 7.2 确保空白状态渲染一致

## 8. Interaction & Detail

- [ ] 8.1 全局移除 `transition-colors duration-200`（所有组件）
- [ ] 8.2 Link focus-visible 从 ring → `outline-dashed`
- [ ] 8.3 验证 hover 反馈：链接 → underline，列表项 → `--color-surface-hover` background

## 9. Verify

- [ ] 9.1 `npm run lint` 无错误
- [ ] 9.2 `npm run build` 通过，所有页面正常生成
- [ ] 9.3 逐页检查：首页、文章页、标签页、404 页

## 10. Token Enforcement

- [ ] 10.1 创建 `lib/tokens.ts`（TOKENS 常量，as const 类型）
- [ ] 10.2 `tailwind.config.js`：删除默认色板（slate/gray等），只保留 token 映射色
- [ ] 10.3 `eslint.config.mjs`：添加 `tailwindcss/no-arbitrary-value: error`
- [ ] 10.4 迁移所有组件中 `text-slate-*`/`bg-slate-*` 等默认色为 token 色
- [ ] 10.5 `.impeccable/config.json`：添加 `no-hardcoded-colors` 自定义规则
- [ ] 10.6 验证 `npm run lint` 和 `npm run build` 通过
