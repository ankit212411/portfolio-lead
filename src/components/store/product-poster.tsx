import type { Product } from "@/types";

type ProductPosterProps = {
  product: Product;
  className?: string;
};

export function ProductPoster({ product, className }: ProductPosterProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-white/20 ${className ?? ""}`}
      style={{
        background: `linear-gradient(145deg, ${product.accent.from}, ${product.accent.to})`
      }}
    >
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-black/10 blur-2xl" />
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
              className="rounded-2xl border border-white/20 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.15em]"
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
