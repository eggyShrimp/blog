"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Heading } from "@/lib/core";

export default function TOCSidebar({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = headings
      .map((h) => document.getElementById(h.slug))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-10% 0px -80% 0px" }
    );

    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, [headings]);

  const handleClick = useCallback(
    (slug: string) => {
      const el = document.getElementById(slug);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  if (headings.length === 0) return null;

  return (
    <nav>
      <div
        className="font-courier text-xs mb-3"
        style={{ color: "var(--color-muted)" }}
      >
        On this page
      </div>
      <ul className="list-none p-0 m-0 space-y-0.5">
        {headings.map((h) => (
          <li
            key={h.slug}
            style={{ paddingLeft: h.level === 3 ? "0.75rem" : "0" }}
          >
            <button
              onClick={() => handleClick(h.slug)}
              className="text-left w-full text-sm leading-relaxed py-0.5 border-none bg-transparent cursor-pointer transition-colors duration-200"
              style={{
                color:
                  activeId === h.slug
                    ? "var(--color-accent)"
                    : "var(--color-muted)",
                fontFamily:
                  'var(--font-fira), "PingFang SC", "Microsoft YaHei", sans-serif',
              }}
            >
              {h.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
