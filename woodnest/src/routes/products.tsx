import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/site/product-grid";
import { SectionHeading } from "@/components/site/section-heading";
import { products } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — WoodNest Furniture" },
      {
        name: "description",
        content: "Browse WoodNest sofas, chairs, tables and beds with prices in Indian Rupees.",
      },
      { property: "og:title", content: "Products — WoodNest Furniture" },
      {
        property: "og:description",
        content: "Browse WoodNest sofas, chairs, tables and beds with prices in Indian Rupees.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Our Collection"
        title="Furniture for every room"
        description="Thoughtfully designed sofas, chairs, tables and beds — built to last and priced fairly."
      />
      <div className="mt-12">
        <ProductGrid items={products} />
      </div>
    </section>
  );
}
