"use client";

import { useState } from "react";

export type Ingredient = {
  name: string;
  amount: string;
};

export type Recipe = {
  name: string;
  ingredients: Ingredient[];
  principle: string;
  details: string[];
  properties: string;
};

export type DoughGalleryProps = {
  recipes: Recipe[];
};

export default function DoughGallery({ recipes }: DoughGalleryProps) {
  const [selected, setSelected] = useState(0);
  const recipe = recipes[selected];

  return (
    <div className="my-8">
      {/* carousel */}
      <div
        className="flex overflow-x-auto pl-2 gap-0"
        style={{
          height: "220px",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          marginBottom: "0.5rem",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
        }}
      >
        {recipes.map((r, i) => {
          const isSelected = i === selected;
          return (
            <button
              key={r.name}
              onClick={() => setSelected(i)}
              className="flex-shrink-0 cursor-pointer p-4 flex flex-col text-left relative border-0 bg-none"
              style={{
                width: "200px",
                marginLeft: i === 0 ? 0 : "-80px",
                scrollSnapAlign: "start",
                background: "var(--color-paper)",
                boxShadow: isSelected
                  ? "-0.5rem 0 1.5rem -0.5rem rgba(139, 94, 60, 0.12), 0 2px 8px rgba(139, 94, 60, 0.06)"
                  : "none",
                zIndex: isSelected ? 10 : i,
                transform: isSelected
                  ? "translateY(-0.5rem) rotate(2deg)"
                  : "translateY(0) rotate(0deg)",
                border: "1px solid var(--color-line)",
                transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: isSelected ? 1 : 0.65,
              }}
            >
                <h4
                  className="text-lg font-bold mb-2 tracking-wide"
                  style={{
                    fontFamily: "var(--font-libre), serif",
                    color: isSelected ? "#5c3d2e" : "var(--color-muted)",
                    transition: "color 0.25s ease",
                  }}
                >
                  {r.name}
                </h4>

                <div
                  className="font-courier text-[11px] tracking-wider mb-1.5"
                  style={{
                    color: isSelected ? "#8b5e3c" : "var(--color-muted)",
                    transition: "color 0.25s ease",
                  }}
                >
                  {r.ingredients.map(i => i.name).join(" · ")}
                </div>

                <p
                  className="font-courier text-[11px] leading-relaxed mt-auto line-clamp-3"
                  style={{
                    color: isSelected ? "var(--color-ink)" : "var(--color-muted)",
                    transition: "color 0.25s ease",
                    opacity: isSelected ? 0.9 : 0.7,
                  }}
                >
                  {r.properties || r.principle}
                </p>
              </button>
            );
          })}
        </div>

      {/* detail panel */}
      <div
        className="p-6 relative transition-all duration-300"
        style={{
          background: "var(--color-paper)",
          border: "1px solid var(--color-line)",
        }}
      >
        <h3
          className="font-bold text-xl tracking-wide mt-2 mb-5"
          style={{ fontFamily: "var(--font-libre), serif", color: "#5c3d2e" }}
        >
          {recipe.name}
        </h3>

        {/* ingredients table */}
        <table
          className="w-full mb-5 border-collapse"
          style={{ borderColor: "var(--color-line)" }}
        >
          <thead>
            <tr style={{ borderBottom: "1px solid var(--color-line)" }}>
              <th
                className="py-1.5 pr-4 font-courier text-xs tracking-wider text-left"
                style={{ color: "var(--color-muted)", fontWeight: 400 }}
              >
                材料
              </th>
              <th
                className="py-1.5 font-courier text-xs tracking-wider text-left"
                style={{ color: "var(--color-muted)", fontWeight: 400 }}
              >
                分量
              </th>
            </tr>
          </thead>
          <tbody>
            {recipe.ingredients.map((ing) => (
              <tr
                key={ing.name}
                style={{ borderBottom: "1px solid rgba(229, 223, 211, 0.5)" }}
              >
                <td
                  className="py-1.5 pr-4 font-courier text-sm"
                  style={{ color: "var(--color-ink)" }}
                >
                  {ing.name}
                </td>
                <td
                  className="py-1.5 font-courier text-sm"
                  style={{ color: "var(--color-muted)" }}
                >
                  {ing.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* principle */}
        {recipe.principle && (
          <div className="mb-3.5">
            <span
              className="font-courier text-xs tracking-wider mr-2"
              style={{ color: "#8b5e3c" }}
            >
              原理
            </span>
            <span className="text-sm leading-relaxed" style={{ color: "var(--color-ink)" }}>
              {recipe.principle}
            </span>
          </div>
        )}

        {/* details */}
        {recipe.details.length > 0 && (
          <div className="mb-3.5">
            <span
              className="font-courier text-xs tracking-wider mr-2"
              style={{ color: "#8b5e3c" }}
            >
              细节
            </span>
            <ol
              className="mt-1.5 pl-5 text-sm leading-relaxed"
              style={{ color: "var(--color-ink)" }}
            >
              {recipe.details.map((d, idx) => (
                <li key={idx} className="mb-1">{d}</li>
              ))}
            </ol>
          </div>
        )}

        {/* properties */}
        {recipe.properties && (
          <div>
            <span
              className="font-courier text-xs tracking-wider mr-2"
              style={{ color: "#8b5e3c" }}
            >
              性状
            </span>
            <span className="text-sm leading-relaxed" style={{ color: "var(--color-ink)" }}>
              {recipe.properties}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
