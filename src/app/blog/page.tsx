import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogPageHero } from "@/components/sections/BlogPageHero";
import { BlogFeed } from "@/components/sections/BlogFeed";
import { ServicesBenefits } from "@/components/sections/ServicesBenefits";
import { CTA } from "@/components/sections/CTA";
import { getBlogContent } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog — Farrayeh Law",
  description:
    "Latest insights and tips from Farrayeh Law on legal needs, contracts, rights, and more.",
};

export default async function BlogPage() {
  const content = await getBlogContent();

  return (
    <>
      <Navbar content={content.nav} />
      <main>
        <BlogPageHero content={content.hero} />
        <BlogFeed featured={content.featured} posts={content.posts} />
        <ServicesBenefits content={content.benefits} curtain />
        <CTA content={content.cta} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
