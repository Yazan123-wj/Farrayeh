import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Reveal } from "@/components/animations/Reveal";
import type { ServicesBenefitsContent } from "@/content/types";

interface ServicesBenefitsProps {
  content: ServicesBenefitsContent;
  /**
   * Homepage-style curtain peel — negative bottom margin so the next CTA
   * sticks underneath and reveals on scroll. Used on the Blog page.
   */
  curtain?: boolean;
}

export function ServicesBenefits({
  content,
  curtain = false,
}: ServicesBenefitsProps) {
  return (
    <section
      id="benefits"
      className={
        curtain
          ? "relative z-10 -mb-[100svh] bg-[#FBFBF9] py-16 md:py-24 lg:py-28"
          : "bg-[#FBFBF9] py-16 md:py-24 lg:py-28"
      }
      aria-labelledby="benefits-heading"
    >
      <Container>
        {/* Header: label left · title + copy + CTA right — matches Coverly reference */}
        <div className="mb-12 grid gap-6 md:mb-16 lg:mb-20 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-12">
          <Reveal>
            <SectionLabel className="mb-0 text-accent">
              {content.label}
            </SectionLabel>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <h2
                id="benefits-heading"
                className="font-display max-w-xl text-4xl leading-[1.12] tracking-[-0.02em] text-ink md:text-5xl lg:text-[3.25rem]"
              >
                {content.title}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-lg text-[15px] leading-[1.7] text-muted md:mt-6 md:text-base md:leading-[1.75]">
                {content.description}
              </p>
            </Reveal>
            <div className="mt-7 md:mt-8">
              <Button
                href={content.cta.href}
                variant="dark"
                size="md"
                className="px-7 py-3 text-[14px]"
              >
                {content.cta.label}
              </Button>
            </div>
          </div>
        </div>

        {/* Four tall benefit cards — same bg as page, full stroke like reference */}
        <Reveal variant="up" y={40}>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
            {content.items.map((item, i) => (
              <li
                key={item.id}
                className={[
                  i > 0 ? "-mt-px sm:mt-0" : "",
                  i % 2 === 1 ? "sm:-ml-px" : "",
                  i >= 2 ? "sm:-mt-px" : "",
                  i > 0 ? "lg:mt-0 lg:-ml-px" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <article className="flex h-full min-h-[340px] flex-col rounded-[2px] border border-[#e5e5e5] bg-[#FBFBF9] p-6 md:min-h-[400px] md:p-7 lg:min-h-[440px] lg:p-8">
                  <div>
                    <ServiceIcon
                      name={item.icon}
                      size="sm"
                      className="rounded-[2px]"
                    />
                    <h3 className="font-display mt-5 text-xl leading-snug tracking-tight text-ink md:mt-6 md:text-[1.35rem] lg:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-auto pt-10 text-[15px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
