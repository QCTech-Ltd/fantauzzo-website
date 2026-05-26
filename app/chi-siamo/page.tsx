import { MapPin, User } from "lucide-react";
import { siteContent } from "@/lib/content";
import { chiSiamoMetadata } from "@/lib/metadata";

export const metadata = chiSiamoMetadata;

export default function ChiSiamoPage() {
  const { chiSiamo } = siteContent;
  const { profile, values } = chiSiamo;

  return (
    <>
      <section className="bg-dark py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            {chiSiamo.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
            {chiSiamo.intro}
          </p>
        </div>
      </section>

      <section className="bg-bg py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-text sm:text-4xl">
            {values.title}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.items.map((item) => (
              <article
                key={item.title}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-3xl rounded-lg border border-accent-light/40 bg-bg p-8 sm:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User size={32} aria-hidden="true" />
            </div>
            <h2 className="mt-6 font-serif text-2xl font-bold text-text sm:text-3xl">
              {profile.name}
            </h2>
            <p className="mt-2 font-medium text-primary">{profile.role}</p>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
              <MapPin size={16} aria-hidden="true" />
              {profile.location}
            </p>
            <p className="mt-6 leading-relaxed text-text">{profile.description}</p>
          </article>
        </div>
      </section>
    </>
  );
}
