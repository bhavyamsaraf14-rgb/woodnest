import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Hammer, Leaf, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/site/product-grid";
import { SectionHeading } from "@/components/site/section-heading";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-living-room.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WoodNest — Make Your Home Beautiful" },
      {
        name: "description",
        content: "Shop modern, affordable wooden sofas, chairs, tables and beds at WoodNest.",
      },
      { property: "og:title", content: "WoodNest — Make Your Home Beautiful" },
      {
        property: "og:description",
        content: "Shop modern, affordable wooden sofas, chairs, tables and beds at WoodNest.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Hammer, title: "Handcrafted", text: "Solid wood pieces made by skilled craftsmen." },
  { icon: Leaf, title: "Sustainable", text: "Responsibly sourced timber and natural finishes." },
  { icon: Truck, title: "Free Delivery", text: "Free delivery and assembly across major cities." },
];

function HomePage() {
  return (
    <>
      {/* Banner */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Bright living room with a beige sofa and walnut coffee table"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="mx-auto flex min-h-[560px] lg:min-h-[680px] max-w-6xl items-center px-4 py-24 sm:px-6">
          <div className="max-w-xl text-walnut-foreground">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] opacity-90">
              New Collection 2026
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
              Make Your Home Beautiful
            </h1>
            <p className="mt-5 text-lg opacity-90">
              Discover modern, affordable furniture crafted from quality wood — designed to bring
              comfort and warmth to every room.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/products">
                Explore Furniture <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-beige">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-3 sm:px-6">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Bestsellers"
          title="Loved by our customers"
          description="A few favourites from our collection of sofas, chairs, tables and beds."
        />
        <div className="mt-12">
          <ProductGrid items={products.slice(0, 3)} />
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="xl">
            <Link to="/products">View all products</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
