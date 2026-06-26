import { ReactNode } from "react";

export type CalloutProps = {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
};

export default function Callout({ children, title, icon }: CalloutProps) {
  return (
    <section className="border-dashed border p-6 my-6" style={{ borderColor: 'var(--color-line)', backgroundColor: 'var(--color-surface-hover)' }}>
      {icon && (
        <div className="flex items-center gap-3 mb-3">
          <span className="text-lg">{icon}</span>
          {title && (
            <h3 className="font-courier text-base font-bold m-0" style={{ color: 'var(--color-ink)' }}>
              {title}
            </h3>
          )}
        </div>
      )}
      {!icon && title && (
        <h3 className="font-courier text-base font-bold mt-0 mb-3" style={{ color: 'var(--color-ink)' }}>
          {title}
        </h3>
      )}
      <div className="text-sm leading-relaxed" style={{ color: 'var(--color-ink)' }}>
        {children}
      </div>
    </section>
  );
}
