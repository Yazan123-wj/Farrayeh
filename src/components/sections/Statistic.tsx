import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { StatCounter } from "@/components/animations/StatCounter";
import { StatisticParallaxMedia } from "@/components/sections/StatisticParallaxMedia";
import { cn } from "@/lib/cn";
import type { StatisticContent } from "@/content/types";

interface StatisticProps {
  content: StatisticContent;
  /** Soft brand accent on the section label — used on About */
  accentLabel?: boolean;
}

/**
 * Statistic split matching reference layout:
 * - Spaced below the hero
 * - Image right edge sits on the page margin (not screen edge)
 * - Image has 0 padding around it, sharp corners
 * - Full viewport height
 */
export function Statistic({ content, accentLabel = false }: StatisticProps) {
  return (
    <section
      className="bg-[#FBFBF9] pt-16 md:pt-24 lg:pt-28"
      aria-labelledby="statistic-heading"
    >
      {/* Same horizontal gutters as nav / hero text */}
      <div className="px-12 sm:px-16 md:px-20 lg:px-28">
        <div className="grid min-h-[calc(100svh-4.75rem)] items-stretch gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left — copy */}
          <div className="flex flex-col justify-between py-2 lg:py-6">
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
                  id="statistic-heading"
                  className="font-display max-w-xl text-3xl leading-[1.12] tracking-[-0.02em] text-ink md:text-4xl lg:text-[2.85rem] xl:text-[3.15rem]"
                >
                  {content.title}
                </h2>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-muted md:mt-6 md:max-w-lg md:text-base md:leading-[1.75]">
                  {content.description}
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-2 gap-8 md:mt-16 md:gap-12 lg:mt-10">
              {content.metrics.map((metric, i) => (
                <Reveal key={metric.id} delay={0.12 + i * 0.08}>
                  <p className="text-sm text-muted md:text-[15px]">
                    {metric.label}
                  </p>
                  <p className="font-display mt-2 text-4xl leading-none tracking-tight text-ink md:text-5xl lg:text-[3.5rem]">
                    <StatCounter
                      value={metric.value}
                      suffix={metric.suffix}
                      decimals={metric.decimals}
                      suffixGap
                      suffixClassName="text-[0.55em] font-normal"
                    />
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — image fills cell, right edge = page margin, 0 space around */}
          <div
            className="relative min-h-[420px] w-full lg:min-h-full"
            title={content.image.label}
          >
            <StatisticParallaxMedia asset={content.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
