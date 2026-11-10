import { useState } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "./product-card";
import { ProductDetailsDialog } from "./product-details-dialog";

export function ProductGrid({ items }: { items: Product[] }) {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} onViewDetails={setSelected} />
        ))}
      </div>
      <ProductDetailsDialog product={selected} onClose={() => setSelected(null)} />
    </>
  );
}
