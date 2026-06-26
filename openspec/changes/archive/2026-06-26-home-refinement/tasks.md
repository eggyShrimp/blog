## 1. Home Page Redesign

- [ ] 1.1 重写 `app/components/home/index.tsx`：作者名 + 日期-标题-标签列表
- [ ] 1.2 移除 author bio paragraph 和 social links
- [ ] 1.3 移除 `$ ls posts/` prompt marker 及其 hr

## 2. PostPreviewCard Simplification

- [ ] 2.1 移除摘要行（summary paragraph）
- [ ] 2.2 日期 + 标题在一行：`{date} — {title}`
- [ ] 2.3 标签换行，text-xs，Courier Prime
- [ ] 2.4 py-3 → py-1.5，mb-2 → mb-0.5

## 3. Font Consistency

- [ ] 3.1 `tailwind.config.js`：prose h1-h6 fontFamily: courier → sans
- [ ] 3.2 `tailwind.config.js`：fontFamily.courier CJK fallback: PingFang SC → Songti SC
- [ ] 3.3 `app/globals.css`：article h1-h6 font-family: Courier → Fira Sans

## 4. Verify

- [ ] 4.1 `npm run lint` 无错误
- [ ] 4.2 `npm run build` 通过
