"use client";
import clsx from "clsx";
import { useState } from "react";

export function Tabs({
  tabs,
  defaultTab
}: {
  tabs: { key: string; label: string; content: React.ReactNode }[];
  defaultTab?: string;
}) {
  const [active, setActive] = useState(defaultTab || tabs[0]?.key);
  return (
    <div>
      <div className="flex gap-2 rounded-xl bg-slate-100 p-1">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={clsx(
              "flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition",
              active === tab.key
                ? "bg-white shadow-sm text-slate-900"
                : "text-slate-500 hover:text-slate-800"
            )}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map(
          tab =>
            tab.key === active && (
              <div key={tab.key} className="rounded-2xl border border-slate-100 bg-white p-4">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}

