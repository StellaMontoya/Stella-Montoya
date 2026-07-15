import type { Metadata } from "next";
import { siteConfig } from "@/config/nav";

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  alternates?: Metadata["alternates"];
};

export function buildMetadata(options: BuildMetadataOptions = {}): Metadata {
  const title = options.title
    ? `${options.title} · ${siteConfig.name}`
    : `${siteConfig.name} · Asesoría Inmobiliaria`;
  const description = options.description ?? siteConfig.description;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: options.alternates,
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
