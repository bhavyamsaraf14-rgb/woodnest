import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — WoodNest" },
      {
        name: "description",
        content: "Have a question about our furniture? Send the WoodNest team a message.",
      },
      { property: "og:title", content: "Contact — WoodNest" },
      {
        property: "og:description",
        content: "Have a question about our furniture? Send the WoodNest team a message.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: MapPin, label: "Bengaluru, India" },
  { icon: Phone, label: "+91 98765 43210" },
  { icon: Mail, label: "hello@woodnest.in" },
];

function ContactPage() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-5">
      <div className="md:col-span-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">We'd love to hear from you</h1>
        <p className="mt-5 text-muted-foreground">
          Questions about a product, delivery or custom sizes? Send us a message and we'll reply
          within one working day.
        </p>
        <ul className="mt-8 grid gap-4">
          {details.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-beige text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:col-span-3">
        <ContactForm />
      </div>
    </section>
  );
}
