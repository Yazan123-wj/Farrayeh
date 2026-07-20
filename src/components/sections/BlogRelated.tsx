import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TextLink } from "@/components/ui/TextLink";
import { Reveal, StaggerReveal } from "@/components/animations/Reveal";
import type { BlogRelatedContent } from "@/content/types";

interface BlogRelatedProps {
  content: BlogRelatedContent;
  /** Enable homepage-style curtain peel into the CTA below */
  curtain?: boolean;
}

export function BlogRelated({ content, curtain = false }: BlogRelatedProps) {
  return (
    <section
      className={
        curtain
          ? "relative z-10 -mb-[100svh] bg-[#FBFBF9] py-16 md:py-20 lg:py-24"
          : "bg-[#FBFBF9] py-16 md:py-20 lg:py-24"
      }
      aria-labelledby="related-heading"
    >
      <Container>
        <div className="mb-12 grid gap-6 md:mb-16 lg:mb-20 lg:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] lg:gap-12">
          <Reveal>
            <SectionLabel className="mb-0 text-accent">
              {content.label}
            </SectionLabel>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <h2
                id="related-heading"
                className="font-display max-w-xl text-3xl leading-[1.15] tracking-[-0.02em] text-ink md:text-4xl lg:text-[2.85rem]"
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
        </div>

        <StaggerReveal
          className="grid gap-10 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-7"
          stagger={0.1}
          variant="up"
          y={36}
        >
          {content.posts.map((post) => (
            <article key={post.id} className="group flex h-full flex-col">
              <div className="relative mb-5 aspect-square overflow-hidden rounded-[2px]">
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
                    className="rounded-[4px] bg-card-alt px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-ink/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-xl tracking-tight text-ink md:text-[1.35rem]">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <TextLink
                href={post.href}
                className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] md:mt-8 md:text-[15px]"
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
