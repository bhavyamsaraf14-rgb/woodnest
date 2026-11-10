export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
}: {
  as?: "h1" | "h2";
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <Tag className="mt-3 text-3xl font-semibold sm:text-4xl">{title}</Tag>
      {description && <p className="mt-4 text-muted-foreground">{description}</p>}
    </div>
  );
}
