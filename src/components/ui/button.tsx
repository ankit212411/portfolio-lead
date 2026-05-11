import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const variantClasses = {
  primary:
    "bg-ink text-white hover:bg-[#0f1514] focus-visible:outline-ink",
  secondary:
    "bg-white text-ink ring-1 ring-black/10 hover:bg-sand/40 focus-visible:outline-ink",
  ghost:
    "bg-transparent text-ink hover:bg-white/70 focus-visible:outline-ink"
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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
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
