import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://studiofantauzzo.it";

export const siteConfig = {
  name: "Studio Fantauzzo",
  url: siteUrl,
  locale: "it_IT",
} as const;

const ogImage = {
  url: "/images/og.webp",
  width: 1200,
  height: 630,
  alt: "Studio Fantauzzo — Consulenza del Lavoro e Fiscale a Palermo",
  type: "image/webp",
};

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

const pages: Record<string, PageMetadata> = {
  home: {
    title: "Studio Fantauzzo - Consulenza del Lavoro e Fiscale | Palermo",
    description:
      "Consulente del lavoro e fiscale a Palermo. Buste paga, dichiarazioni redditi, apertura P.IVA, contenzioso. Contattaci.",
    path: "/",
  },
  chiSiamo: {
    title: "Chi Siamo | Studio Fantauzzo Palermo",
    description:
      "Lo studio del Rag. Fantauzzo Francesco offre consulenza del lavoro e fiscale a Palermo con professionalità e trasparenza.",
    path: "/chi-siamo",
  },
  servizi: {
    title: "Servizi di Consulenza del Lavoro e Fiscale | Studio Fantauzzo",
    description:
      "Buste paga, contratti, dichiarazioni, P.IVA, contenzioso. Tutti i servizi dello Studio Fantauzzo a Palermo.",
    path: "/servizi",
  },
  faq: {
    title: "Domande Frequenti | Studio Fantauzzo Palermo",
    description:
      "Risposte alle domande più frequenti su fisco, lavoro, P.IVA e adempimenti fiscali.",
    path: "/faq",
  },
  contatti: {
    title: "Contatti | Studio Fantauzzo Palermo",
    description:
      "Contatta lo Studio Fantauzzo a Palermo. Via Ercole Bernabei 19. Tel. 091 6823872.",
    path: "/contatti",
  },
};

function buildMetadata(page: PageMetadata): Metadata {
  const url = `${siteConfig.url}${page.path}`;

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [ogImage.url],
    },
    alternates: {
      canonical: url,
    },
  };
}

export const homeMetadata = buildMetadata(pages.home);
export const chiSiamoMetadata = buildMetadata(pages.chiSiamo);
export const serviziMetadata = buildMetadata(pages.servizi);
export const faqMetadata = buildMetadata(pages.faq);
export const contattiMetadata = buildMetadata(pages.contatti);

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: pages.home.description,
  openGraph: {
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    title: pages.home.title,
    description: pages.home.description,
    url: siteConfig.url,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pages.home.title,
    description: pages.home.description,
    images: [ogImage.url],
  },
};
