import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AttorneyHero } from "@/components/sections/AttorneyHero";
import { AttorneyPerspective } from "@/components/sections/AttorneyPerspective";
import { AttorneyCredentials } from "@/components/sections/AttorneyCredentials";
import { AttorneyFocus } from "@/components/sections/AttorneyFocus";
import { CTA } from "@/components/sections/CTA";
import { getAttorneyContent } from "@/content/attorney";

export const metadata: Metadata = {
  title: "Qassim Farrayeh — Lead Counsel | Farrayeh Law",
  description:
    "Meet Qassim Farrayeh, Lead Counsel and Founding Partner of Farrayeh Law — precision advocacy across corporate, litigation, and more.",
};

export default async function AttorneyPage() {
  const content = await getAttorneyContent();

  return (
    <>
      <Navbar content={content.nav} />
      <main>
        <AttorneyHero content={content.hero} />
        <AttorneyPerspective content={content.perspective} />
        <AttorneyCredentials content={content.credentials} />
        <AttorneyFocus content={content.focus} />
        <CTA content={content.cta} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
