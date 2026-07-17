import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { AboutStella } from "@/components/sections/AboutStella";
import { Authority } from "@/components/sections/Authority";
import { CallToAction } from "@/components/sections/CallToAction";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicesCarousel } from "@/components/sections/ServicesCarousel"

export const metadata: Metadata = buildMetadata({
  alternates: { canonical: "/" },
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutStella />
      <ServicesCarousel /> 
      <Authority />
      <CallToAction />
    </>
  );
}