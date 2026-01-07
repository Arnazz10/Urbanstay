import { HTMLAttributes } from "react";
import clsx from "clsx";

export function Dialog({
  open,
  children,
  className
}: {
  open: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4">
      <div
        className={clsx(
          "w-full max-w-lg rounded-2xl bg-white shadow-2xl",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div className="px-6 py-4 text-lg font-semibold">{children}</div>;
}

export function DialogContent({ children }: { children: React.ReactNode }) {
  return <div className="px-6 pb-6 text-sm text-slate-700">{children}</div>;
}

