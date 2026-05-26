import { Briefcase, Calculator, Users, type LucideIcon } from "lucide-react";
import { siteContent } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  briefcase: Briefcase,
  calculator: Calculator,
  users: Users,
};

export default function ServicesPreview() {
  const { servicesPreview } = siteContent.home;

  return (
    <section className="bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-text sm:text-4xl">
            {servicesPreview.title}
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            {servicesPreview.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesPreview.items.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article
                key={item.title}
                className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-light/30 text-primary">
                  {Icon && <Icon size={24} aria-hidden="true" />}
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
