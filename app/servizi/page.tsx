import ServiceCard from "@/components/servizi/ServiceCard";
import { siteContent } from "@/lib/content";
import { serviziMetadata } from "@/lib/metadata";

export const metadata = serviziMetadata;

export default function ServiziPage() {
  const { servizi } = siteContent;
  const { labor, fiscal } = servizi;

  return (
    <>
      <section className="bg-dark py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            {servizi.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
            {servizi.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-bg py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
          <ServiceCard
            title={labor.title}
            description={labor.description}
            items={labor.items}
          />
          <ServiceCard
            title={fiscal.title}
            description={fiscal.description}
            items={fiscal.items}
          />
        </div>
      </section>
    </>
  );
}
