import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
    const variants = {
      primary:
        "bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-md hover:opacity-90 focus-visible:outline-brand-blue",
      secondary:
        "bg-white text-slate-900 border border-slate-200 hover:border-slate-300 focus-visible:outline-brand-blue",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:outline-brand-blue"
    };
    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-sm",
      lg: "px-5 py-3 text-base"
    };

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;

