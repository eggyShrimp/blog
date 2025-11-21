import { ReactNode } from "react";

export type CalloutProps = {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
};

export default function Callout({ children, title, icon }: CalloutProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-white p-6 shadow-sm">
      {icon && (
        <div className="absolute left-6 top-6 flex h-[24px] w-[24px] text-base items-center justify-center rounded-xl bg-slate-900/5 text-slate-700">
          {icon}
        </div>
      )}

      <div className={`flex flex-col gap-3 ${icon ? "pl-12" : ""}`}>
        {title && (
          <h3 className="text-base font-semibold text-slate-900 tracking-tight mt-0 mb-0">
            {title}
          </h3>
        )}
        <div className="text-sm leading-relaxed text-slate-600">
          {children}
        </div>
      </div>
    </section>
  );
}
