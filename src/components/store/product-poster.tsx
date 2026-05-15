import Image from "next/image";

import { cn } from "@/lib/utils";
import type { Product } from "@/types";

type ProductPosterProps = {
  product: Product;
  className?: string;
};

export function ProductPoster({ product, className }: ProductPosterProps) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-lg border border-line bg-sand", className)}
      style={{
        background: `linear-gradient(135deg, ${product.accent.from}, ${product.accent.to})`
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.44),transparent_46%)]" />
      <div className="absolute inset-4 rounded-lg bg-[rgba(255,255,255,0.9)] shadow-crisp" />
      <div className="absolute inset-6">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain drop-shadow-[0_18px_28px_rgba(8,19,26,0.18)]"
          style={{ objectPosition: product.image.position ?? "center" }}
        />
      </div>
      <div className="relative flex h-full flex-col justify-between p-5">
        <div>
          <p
            className="inline-flex rounded-full bg-[rgba(8,19,26,0.72)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{ color: product.accent.ink }}
          >
            {product.category}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 opacity-95">
          {product.highlights.slice(0, 2).map((highlight) => (
            <div
              key={highlight}
              className="rounded-md border border-onInk-line bg-[rgba(8,19,26,0.68)] px-3 py-2 text-xs uppercase tracking-[0.13em]"
              style={{ color: product.accent.ink }}
            >
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
