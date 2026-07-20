import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Statistic } from "@/components/sections/Statistic";
import { AboutTeam } from "@/components/sections/AboutTeam";
import { Trust } from "@/components/sections/Trust";
import { AboutCTA } from "@/components/sections/AboutCTA";
import { getAboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: "About Us — Farrayeh Law",
  description:
    "Learn about Farrayeh — our story, our team, and why clients trust us for clear legal counsel and lasting advocacy.",
};

export default async function AboutPage() {
  const content = await getAboutContent();

  return (
    <>
      <Navbar content={content.nav} />
      <main>
        <Hero content={content.hero} accentEyebrow />
        <Statistic content={content.story} accentLabel />
        <AboutTeam content={content.team} />
        <Trust content={content.why} accentLabel />
        <AboutCTA content={content.cta} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
