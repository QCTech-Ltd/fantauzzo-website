import Link from "next/link";
import { siteContent } from "@/lib/content";

export default function CtaBanner() {
  const { ctaBanner } = siteContent.home;

  return (
    <section className="bg-dark py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          {ctaBanner.title}
        </h2>
        <p className="mt-3 text-lg text-white/80">{ctaBanner.subtitle}</p>
        <Link
          href={ctaBanner.buttonHref}
          className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          {ctaBanner.button}
        </Link>
      </div>
    </section>
  );
}
