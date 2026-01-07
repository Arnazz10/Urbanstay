import { SelectHTMLAttributes } from "react";
import clsx from "clsx";

export default function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={clsx(
        "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:ring-brand-blue/40",
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
}

