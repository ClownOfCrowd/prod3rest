export default function DishCard({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) {
  return (
    <article className="glass-card rounded-2xl p-5">
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="font-display text-xl text-[var(--foreground)]">{name}</h3>
        <p className="text-sm font-semibold tracking-wide text-[var(--accent)]">
          {price}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-[var(--muted)]">{description}</p>
    </article>
  );
}
