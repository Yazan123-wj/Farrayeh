import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BlogArticleSection } from "@/components/sections/BlogArticleSection";
import { BlogRelated } from "@/components/sections/BlogRelated";
import { CTA } from "@/components/sections/CTA";
import { getBlogArticle, getBlogSlugs } from "@/content/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = await getBlogArticle(slug);
  if (!content) return { title: "Article — Farrayeh Law" };

  return {
    title: `${content.article.title} — Farrayeh Law`,
    description: content.article.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const content = await getBlogArticle(slug);
  if (!content) notFound();

  return (
    <>
      <Navbar content={content.nav} />
      <main>
        <BlogArticleSection article={content.article} />
        <BlogRelated content={content.related} curtain />
        <CTA content={content.cta} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
