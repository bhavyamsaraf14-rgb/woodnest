import { Button } from "@/components/ui/button";
import { formatPrice, type Product } from "@/data/products";

type Props = {
  product: Product;
  onViewDetails: (product: Product) => void;
};

export function ProductCard({ product, onViewDetails }: Props) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-card transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-beige">
        <img
          src={product.image}
          alt={product.name}
          width={1024}
          height={1024}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {product.category}
        </span>
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-lg font-semibold text-primary">{formatPrice(product.price)}</p>
        <Button className="mt-4 w-full" variant="soft" onClick={() => onViewDetails(product)}>
          View Details
        </Button>
      </div>
    </article>
  );
}
