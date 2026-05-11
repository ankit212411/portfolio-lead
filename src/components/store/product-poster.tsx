import type { Product } from "@/types";

type ProductPosterProps = {
  product: Product;
  className?: string;
};

export function ProductPoster({ product, className }: ProductPosterProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-line ${className ?? ""}`}
      style={{
        background: `linear-gradient(135deg, ${product.accent.from}, ${product.accent.to})`
      }}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[length:28px_28px]" />
      </div>
      <div className="relative flex h-full flex-col justify-between p-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: product.accent.ink }}>
            {product.category}
          </p>
          <h3 className="max-w-[12rem] font-display text-3xl tracking-tight" style={{ color: product.accent.ink }}>
            {product.name}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {product.highlights.slice(0, 2).map((highlight) => (
            <div
              key={highlight}
              className="rounded-md border border-onInk-line bg-onInk-surface px-3 py-2 text-xs uppercase tracking-[0.15em]"
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
