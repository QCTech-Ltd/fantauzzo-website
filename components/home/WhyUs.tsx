import { CheckCircle2 } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function WhyUs() {
  const { whyUs } = siteContent.home;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-text sm:text-4xl">
          {whyUs.title}
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.items.map((item) => (
            <article key={item.title} className="text-center sm:text-left">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary sm:mx-0">
                <CheckCircle2 size={20} aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
