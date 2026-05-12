import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const variantClasses = {
  primary:
    "bg-accent text-[#101820] shadow-crisp hover:shadow-soft focus-visible:outline-accent",
  secondary:
    "bg-transparent text-ink ring-1 ring-accent shadow-crisp hover:bg-accent-soft focus-visible:outline-accent",
  ghost:
    "bg-transparent text-ink hover:bg-surface focus-visible:outline-ink"
} as const;

type ButtonVariant = keyof typeof variantClasses;

export function buttonVariants({
  variant = "primary",
  className
}: {
  variant?: ButtonVariant;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    className
  );
}

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
  }
>;

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, className })} {...props}>
      {children}
    </button>
  );
}
