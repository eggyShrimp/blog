import { ReactNode } from "react";

export type CalloutProps = {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
};

export default function Callout({ children, title, icon }: CalloutProps) {
  return (
    <section className="border-l-4 p-5 my-5" style={{ borderLeftColor: 'var(--color-accent)', backgroundColor: 'var(--color-surface-hover)' }}>
      {icon && (
        <div className="flex items-baseline gap-2.5 mb-2.5">
          <span className="text-lg leading-none">{icon}</span>
          {title && (
            <h3 className="font-courier text-base font-bold leading-none" style={{ margin: 0, color: 'var(--color-ink)' }}>
              {title}
            </h3>
          )}
        </div>
      )}
      {!icon && title && (
        <h3 className="font-courier text-base font-bold leading-none" style={{ marginTop: 0, marginBottom: '0.625rem', color: 'var(--color-ink)' }}>
          {title}
        </h3>
      )}
      <div className="text-sm leading-relaxed [&>:first-child]:mt-0 [&>:last-child]:mb-0" style={{ color: 'var(--color-ink)' }}>
        {children}
      </div>
    </section>
  );
}
