"use client";

import { useEffect, useRef, useState } from "react";
import { COLORS } from "@/lib/colors";

let mermaidInit = false;

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    import("mermaid").then((mod) => {
      if (cancelled) return;
      const m = mod.default;
      if (!mermaidInit) {
        m.initialize({
          startOnLoad: false,
          theme: "base",
          themeVariables: {
            primaryColor: COLORS.paper,
            primaryTextColor: COLORS.ink,
            primaryBorderColor: COLORS.line,
            lineColor: COLORS.muted,
            secondaryColor: COLORS.surfaceHover,
            tertiaryColor: COLORS.paper,
            fontFamily: '"Courier Prime", "PingFang SC", monospace',
          },
        });
        mermaidInit = true;
      }
      const id = `mermaid-${Math.random().toString(36).slice(2, 10)}`;
      m.render(id, chart)
        .then((r) => {
          if (!cancelled) setSvg(r.svg);
        })
        .catch((err) => {
          if (!cancelled) {
            const msg = err instanceof Error ? err.message : String(err);
            setError(msg);
          }
        });
    });

    return () => {
      cancelled = true;
    };
  }, [chart]);

  if (error) {
    const clean = parseMermaidError(error);
    return (
      <details
        className="my-6 border rounded"
        style={{ borderColor: "var(--color-line)" }}
        open
      >
        <summary
          className="font-courier text-sm cursor-pointer px-4 py-3 select-none"
          style={{ color: "var(--color-muted)" }}
        >
          Mermaid 渲染错误 — 点击展开详情
        </summary>
        <pre
          className="font-mono text-xs m-0 px-4 pb-4 overflow-x-auto"
          style={{ color: "var(--color-muted)" }}
        >
          <code>{clean || error}</code>
        </pre>
      </details>
    );
  }

  if (!svg) {
    return <div ref={ref} className="mermaid-diagram" />;
  }

  return (
    <div
      ref={ref}
      className="mermaid-diagram"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

function parseMermaidError(msg: string): string {
  // mermaid v11 的错误格式：Parse error on line N:\n...\nExpecting ...
  const lines = msg.split("\n");
  const cleaned = lines
    .filter((l) => !l.startsWith("Parse error on line"))
    .map((l) => l.trim())
    .filter(Boolean);
  return cleaned.join("\n");
}
