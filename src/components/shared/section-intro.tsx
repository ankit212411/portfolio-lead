import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionIntroProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-strong">{eyebrow}</p>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-base leading-7 text-muted">{description}</p>
      </div>
    </div>
  );
}
