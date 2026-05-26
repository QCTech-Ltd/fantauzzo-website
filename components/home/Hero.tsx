import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/images/hero.webp";
import { siteContent } from "@/lib/content";

export default function Hero() {
  const { hero } = siteContent.home;

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden md:min-h-[80vh]">
      <Image
        src={heroImage}
        alt={hero.imageAlt}
        width={heroImage.width}
        height={heroImage.height}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
        placeholder="blur"
        quality={85}
      />
      <div className="absolute inset-0 bg-dark/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={hero.ctaPrimaryHref}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href={hero.ctaSecondaryHref}
              className="inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
