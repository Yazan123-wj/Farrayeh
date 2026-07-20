import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import type { BlogArticle } from "@/content/types";

interface BlogArticleSectionProps {
  article: BlogArticle;
}

export function BlogArticleSection({ article }: BlogArticleSectionProps) {
  return (
    <article
      className="bg-[#FBFBF9] pt-14 md:pt-[4.5rem] lg:pt-20"
      aria-labelledby="article-heading"
    >
      <Container>
        <Reveal>
          <p className="mb-5 text-[16px] font-medium uppercase tracking-[0.22em] text-muted md:mb-6">
            {article.label}
          </p>
          <h1
            id="article-heading"
            className="font-display max-w-[18ch] text-[2.5rem] leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[3.75rem] lg:leading-[1.05]"
          >
            {article.title}
          </h1>
        </Reveal>

        <div className="mt-10 border-t border-ink/10 pt-10 md:mt-12 md:pt-12 lg:mt-14 lg:pt-14">
          <Reveal variant="clip" y={48}>
            <ParallaxImage
              asset={article.image}
              className="aspect-[16/10] w-full rounded-[2px] md:aspect-[2.1/1]"
              speed={10}
              priority
              sizes="100vw"
            />
          </Reveal>
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-[minmax(0,0.28fr)_minmax(0,0.72fr)] md:gap-12 md:py-16 lg:gap-16 lg:py-20">
          <Reveal>
            <aside className="space-y-2 text-sm uppercase tracking-[0.14em] text-muted md:sticky md:top-28">
              <p>{article.date}</p>
              <p>{article.author}</p>
            </aside>
          </Reveal>

          <div className="max-w-2xl">
            <Reveal delay={0.08}>
              <p className="text-[17px] leading-[1.75] text-ink md:text-lg md:leading-[1.8]">
                {article.intro}
              </p>
            </Reveal>

            {article.sections.map((section, i) => (
              <Reveal key={section.id} delay={0.1 + i * 0.06}>
                <section className="mt-12 md:mt-14">
                  <h2 className="font-display text-2xl tracking-tight text-ink md:text-[1.75rem]">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-[1.75] text-muted md:text-base md:leading-[1.8]">
                    {section.body}
                  </p>
                  {section.bullets?.length ? (
                    <ul className="mt-5 space-y-2.5 text-[15px] leading-relaxed text-muted md:text-base">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                            aria-hidden
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <p className="mt-12 text-[15px] leading-[1.75] text-muted md:mt-14 md:text-base md:leading-[1.8]">
                {article.closing}
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </article>
  );
}
