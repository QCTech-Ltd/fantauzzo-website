import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  items: readonly string[];
}

export default function ServiceCard({
  title,
  description,
  items,
}: ServiceCardProps) {
  return (
    <article className="rounded-lg bg-white p-8 shadow-sm">
      <h2 className="font-serif text-2xl font-bold text-text sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-text">
            <Check
              size={18}
              className="mt-0.5 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
