import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import type { BlogPageHeroContent } from "@/content/types";

interface BlogPageHeroProps {
  content: BlogPageHeroContent;
}

export function BlogPageHero({ content }: BlogPageHeroProps) {
  return (
    <section
      className="bg-[#FBFBF9] pt-8 md:pt-10 lg:pt-12"
      aria-labelledby="blog-page-heading"
    >
      <Container>
        <div className="mx-auto max-w-3xl pb-8 text-center md:pb-10 lg:pb-12">
          <Reveal>
            <p className="mb-5 text-[16px] font-medium uppercase tracking-[0.22em] text-muted md:mb-6">
              {content.label}
            </p>
            <h1
              id="blog-page-heading"
              className="font-display text-[2.75rem] leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4.35rem] lg:leading-[1.05]"
            >
              {content.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.7] text-muted md:mt-7 md:text-base md:leading-[1.75]">
              {content.description}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
