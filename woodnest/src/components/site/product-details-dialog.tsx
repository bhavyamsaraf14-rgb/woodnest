import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/products";

type Props = {
  product: Product | null;
  onClose: () => void;
};

export function ProductDetailsDialog({ product, onClose }: Props) {
  return (
    <Dialog open={product !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto p-0 sm:rounded-2xl">
        {product && (
          <div className="grid md:grid-cols-2">
            <div className="bg-beige">
              <img
                src={product.image}
                alt={product.name}
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {product.category}
              </span>
              <DialogTitle className="font-display text-2xl font-semibold">{product.name}</DialogTitle>
              <p className="text-2xl font-semibold text-primary">{formatPrice(product.price)}</p>
              <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                {product.description}
              </DialogDescription>
              <dl className="grid gap-3 rounded-xl bg-muted p-4 text-sm">
                <div>
                  <dt className="font-semibold">Material</dt>
                  <dd className="text-muted-foreground">{product.material}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Dimensions</dt>
                  <dd className="text-muted-foreground">{product.dimensions}</dd>
                </div>
              </dl>
              <Button asChild size="lg" className="mt-auto">
                <Link to="/contact" onClick={onClose}>
                  Ask about this product
                </Link>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
