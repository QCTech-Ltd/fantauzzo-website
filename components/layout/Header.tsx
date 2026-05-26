"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteContent } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const { header } = siteContent;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-dark text-white transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-white sm:text-xl"
        >
          {header.logo}
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Navigazione principale"
        >
          {header.nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent-light ${
                  isActive ? "text-accent-light" : "text-white/90"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <div className="group relative">
            <button
              type="button"
              aria-disabled="true"
              aria-describedby="area-riservata-tooltip"
              className="cursor-not-allowed rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white/70"
            >
              {header.ctaAreaRiservata}
            </button>
            <span
              id="area-riservata-tooltip"
              role="tooltip"
              className="pointer-events-none absolute right-0 top-full z-10 mt-2 whitespace-nowrap rounded-md bg-dark px-3 py-1.5 text-xs text-white opacity-0 shadow-lg ring-1 ring-accent-light transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
            >
              {header.ctaAreaRiservataTooltip}
            </span>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-4 py-4 md:hidden"
          aria-label="Navigazione mobile"
        >
          <ul className="flex flex-col gap-1">
            {header.nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-accent-light"
                        : "text-white/90 hover:bg-white/5 hover:text-accent-light"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <div className="group relative">
                <button
                  type="button"
                  aria-disabled="true"
                  aria-describedby="area-riservata-tooltip-mobile"
                  className="w-full cursor-not-allowed rounded-md border border-white/30 bg-white/10 px-3 py-2 text-left text-sm font-medium text-white/70"
                >
                  {header.ctaAreaRiservata}
                </button>
                <span
                  id="area-riservata-tooltip-mobile"
                  role="tooltip"
                  className="mt-1 block text-xs text-muted"
                >
                  {header.ctaAreaRiservataTooltip}
                </span>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
