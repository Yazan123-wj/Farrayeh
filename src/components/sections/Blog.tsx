import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal, StaggerReveal } from "@/components/animations/Reveal";
import type { BlogContent } from "@/content/types";

interface BlogProps {
  content: BlogContent;
}

export function Blog({ content }: BlogProps) {
  return (
    <section
      id="blog"
      className="relative z-10 -mb-[100svh] bg-[#FBFBF9] py-16 md:py-20 lg:py-24"
      aria-labelledby="blog-heading"
    >
      <Container>
        <div className="mb-12 md:mb-16 lg:mb-20">
          <Reveal variant="up">
            <SectionLabel>{content.label}</SectionLabel>
            <h2
              id="blog-heading"
              className="font-display text-3xl leading-[1.15] tracking-[-0.02em] text-ink md:text-4xl lg:text-[2.85rem]"
            >
              {content.title}
            </h2>
          </Reveal>
          <div className="mt-7 md:mt-8">
            <Button
              href={content.viewAll.href}
              variant="dark"
              size="md"
              className="px-7 py-3 text-[14px]"
            >
              {content.viewAll.label}
            </Button>
          </div>
        </div>

        <StaggerReveal
          className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-7"
          stagger={0.12}
          variant="clip"
          y={48}
        >
          {content.posts.map((post) => (
            <article
              key={post.id}
              className="group flex h-full flex-col"
            >
              <div className="relative mb-5 aspect-square overflow-hidden rounded-none">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mb-3 flex flex-wrap gap-2">
                {post.categories.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[4px] bg-card-alt px-2.5 py-1 text-[11px] font-medium text-ink/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-xl tracking-tight text-ink md:text-[1.35rem]">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-[15px]">
                {post.excerpt}
              </p>
              <TextLink
                href={post.href}
                className="mt-8 text-[18px] font-semibold uppercase tracking-[0.14em]"
              >
                Learn more
              </TextLink>
            </article>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
