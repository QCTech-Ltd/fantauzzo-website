import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contatti/ContactForm";
import { siteContent } from "@/lib/content";
import { contattiMetadata } from "@/lib/metadata";

export const metadata = contattiMetadata;

export default function ContattiPage() {
  const { contatti, studio } = siteContent;
  const { sidebar, map } = contatti;

  return (
    <>
      <section className="bg-dark py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl">
            {contatti.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
            {contatti.subtitle}
          </p>
        </div>
      </section>

      <section className="bg-bg py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <aside className="lg:col-span-2">
              <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
                <h2 className="font-serif text-xl font-bold text-text sm:text-2xl">
                  {sidebar.title}
                </h2>

                <ul className="mt-6 space-y-6">
                  <li className="flex gap-3">
                    <MapPin
                      size={20}
                      className="mt-0.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-medium text-text">
                        {sidebar.addressLabel}
                      </p>
                      <p className="mt-1 text-sm text-muted">
                        {studio.address.full}
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <Phone
                      size={20}
                      className="mt-0.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-medium text-text">
                        {sidebar.phoneLabel}
                      </p>
                      <a
                        href={studio.phoneHref}
                        className="mt-1 inline-block text-sm text-primary transition-colors hover:text-primary/80"
                      >
                        {studio.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex gap-3">
                    <Mail
                      size={20}
                      className="mt-0.5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-medium text-text">
                        {sidebar.emailLabel}
                      </p>
                      <a
                        href={`mailto:${studio.email}`}
                        className="mt-1 inline-block text-sm text-primary transition-colors hover:text-primary/80"
                      >
                        {studio.email}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-text sm:text-3xl">
            {map.title}
          </h2>
          <div className="mt-6 overflow-hidden rounded-lg shadow-sm">
            <iframe
              title={map.title}
              src={map.embedUrl}
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
