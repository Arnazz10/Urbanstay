import { forwardRef, InputHTMLAttributes } from "react";
import clsx from "clsx";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-2 ring-transparent transition focus:ring-brand-blue/40",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;

