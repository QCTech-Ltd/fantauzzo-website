"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteContent } from "@/lib/content";

const areaRiservataClassName =
  "inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90";

export default function Header() {
  const pathname = usePathname();
  const { header, studio } = siteContent;
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
          <span className="text-accent-tint">Studio</span>{" "}
          <span className="text-white">Fantauzzo</span>
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
                className={`text-base font-medium transition-colors hover:text-accent-tint ${
                  isActive ? "text-accent-tint" : "text-white/90"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={studio.portaleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={areaRiservataClassName}
          >
            {header.ctaAreaRiservata}
          </a>
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
                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-white/10 text-accent-tint"
                        : "text-white/90 hover:bg-white/5 hover:text-accent-tint"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={studio.portaleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${areaRiservataClassName} w-full`}
              >
                {header.ctaAreaRiservata}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
