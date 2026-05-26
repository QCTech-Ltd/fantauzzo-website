import FaqItem from "@/components/faq/FaqItem";
import { siteContent } from "@/lib/content";
import { faqMetadata } from "@/lib/metadata";

export const metadata = faqMetadata;

export default function FaqPage() {
  const { faq } = siteContent;

  return (
    <>
      <section className="bg-dark py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            {faq.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
            {faq.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-bg py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white px-6 shadow-sm sm:px-8">
            {faq.items.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
