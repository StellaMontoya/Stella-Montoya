import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Authority } from "@/components/sections/Authority";
import { CallToAction } from "@/components/sections/CallToAction";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  alternates: { canonical: "/" },
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Authority />
      <CallToAction />
    </>
  );
}
