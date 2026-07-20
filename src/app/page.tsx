import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Statistic } from "@/components/sections/Statistic";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Trust } from "@/components/sections/Trust";
import { Solutions } from "@/components/sections/Solutions";
import { Blog } from "@/components/sections/Blog";
import { CTA } from "@/components/sections/CTA";
import { getHomeContent } from "@/content/home";

export default async function HomePage() {
  const content = await getHomeContent();

  return (
    <>
      <Navbar content={content.nav} />
      <main>
        <Hero content={content.hero} />
        <Statistic content={content.statistic} />
        <Services content={content.services} />
        <Testimonials content={content.testimonials} />
        <Trust content={content.trust} />
        <Solutions content={content.solutions} />
        <Blog content={content.blog} />
        <CTA content={content.cta} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
