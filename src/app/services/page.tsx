import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ServicesBenefits } from "@/components/sections/ServicesBenefits";
import { ServicesFAQ } from "@/components/sections/ServicesFAQ";
import { AboutCTA } from "@/components/sections/AboutCTA";
import { getServicesContent } from "@/content/services";

export const metadata: Metadata = {
  title: "Services — Farrayeh Law",
  description:
    "Explore Farrayeh legal services — corporate, litigation, family, contracts, real estate, and consultations.",
};

export default async function ServicesPage() {
  const content = await getServicesContent();

  return (
    <>
      <Navbar content={content.nav} />
      <main>
        <ServicesHero content={content.hero} />
        <ServicesGrid items={content.grid.items} />
        <ServicesBenefits content={content.benefits} />
        <ServicesFAQ content={content.faq} />
        <AboutCTA content={content.cta} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
