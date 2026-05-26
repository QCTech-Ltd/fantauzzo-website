import Link from "next/link";
import { siteContent } from "@/lib/content";

export default function Footer() {
  const { studio, header, footer } = siteContent;
  const year = new Date().getFullYear();
  const copyright = footer.copyright.replace("{year}", String(year));

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-serif text-lg font-semibold">{studio.name}</h2>
            <p className="mt-2 text-sm text-white/70">{footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-light">
              {footer.columns.pages}
            </h3>
            <ul className="mt-4 space-y-2">
              {header.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-accent-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-light">
              {footer.columns.contacts}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>{studio.address.full}</li>
              <li>
                <a
                  href={studio.phoneHref}
                  className="transition-colors hover:text-accent-light"
                >
                  {studio.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${studio.email}`}
                  className="transition-colors hover:text-accent-light"
                >
                  {studio.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent-light">
              {footer.columns.legal}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>{footer.legal.piva}</li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-accent-light"
                >
                  {footer.legal.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie"
                  className="transition-colors hover:text-accent-light"
                >
                  {footer.legal.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/50">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
