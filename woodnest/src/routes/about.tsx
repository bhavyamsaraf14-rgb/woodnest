import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import workshopImage from "@/assets/about-workshop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WoodNest" },
      {
        name: "description",
        content: "Learn about WoodNest and our collection of handcrafted wooden furniture.",
      },
      { property: "og:title", content: "About — WoodNest" },
      {
        property: "og:description",
        content: "Learn about WoodNest and our collection of handcrafted wooden furniture.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "10+", label: "Years of craft" },
  { value: "25k", label: "Happy homes" },
  { value: "100%", label: "Solid wood" },
];

function AboutPage() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2">
      <div className="overflow-hidden rounded-3xl shadow-warm">
        <img
          src={workshopImage}
          alt="Craftsman sanding a wooden chair in the WoodNest workshop"
          width={1024}
          height={1280}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About us</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Crafted with care, made for living</h1>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          WoodNest began with a simple idea: beautiful furniture should be within everyone's reach.
          We work with skilled Indian craftsmen to create modern pieces from solid teak, oak,
          walnut and sheesham wood.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Our collection includes comfortable sofas, elegant chairs, sturdy dining and coffee
          tables, and calm, restful beds — each designed to look good and last for years.
        </p>

        <dl className="mt-8 grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-beige p-4 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-2xl font-semibold text-primary">{stat.value}</dd>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </dl>

        <Button asChild size="xl" className="mt-8">
          <Link to="/products">See our collection</Link>
        </Button>
      </div>
    </section>
  );
}
