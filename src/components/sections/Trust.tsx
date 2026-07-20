import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { Reveal } from "@/components/animations/Reveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { cn } from "@/lib/cn";
import type { TrustContent } from "@/content/types";

interface TrustProps {
  content: TrustContent;
  /** Soft brand accent on the section label — used on About */
  accentLabel?: boolean;
}

export function Trust({ content, accentLabel = false }: TrustProps) {
  return (
    <section
      id="trust"
      className="bg-[#FBFBF9] py-12 md:py-16 lg:py-16"
      aria-labelledby="trust-heading"
    >
      <Container>
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div className="relative">
            <ParallaxImage
              asset={content.image}
              className="h-[760px] w-full rounded-none"
              speed={12}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-between gap-10 py-1 lg:gap-0">
            <div>
              <Reveal>
                <SectionLabel
                  className={cn(
                    "mb-5 md:mb-6",
                    accentLabel && "text-accent",
                  )}
                >
                  {content.label}
                </SectionLabel>
                <h2
                  id="trust-heading"
                  className="font-display text-4xl leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl lg:text-[3.35rem]"
                >
                  {content.title}
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-muted md:mt-6 md:text-base md:leading-[1.75]">
                  {content.description}
                </p>
              </Reveal>
            </div>

            <ul className="space-y-8 md:space-y-10">
              {content.features.map((feature, i) => (
                <Reveal
                  key={feature.id}
                  delay={0.1 + i * 0.1}
                  as="li"
                  variant="left"
                  y={28}
                >
                  <div className="flex gap-4">
                    <CheckIcon className="mt-0.5" />
                    <div>
                      <h3 className="text-base font-semibold text-ink md:text-lg">
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted md:text-[15px]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
