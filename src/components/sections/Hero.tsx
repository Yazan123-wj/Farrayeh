import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { HeroAmbient } from "@/components/three/HeroAmbient";
import { HeroParallaxMedia } from "@/components/sections/HeroParallaxMedia";
import { cn } from "@/lib/cn";
import type { HeroContent } from "@/content/types";

interface HeroProps {
  content: HeroContent;
  /** Soft brand accent on the eyebrow — used on About */
  accentEyebrow?: boolean;
}

export function Hero({ content, accentEyebrow = false }: HeroProps) {
  return (
    <section className="relative overflow-x-clip bg-[#FBFBF9] pt-14 md:pt-[4.5rem] lg:pt-20">
      <HeroAmbient />

      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.25fr_0.85fr] lg:gap-16 xl:gap-20">
          <Reveal>
            <p
              className={cn(
                "mb-5 text-[16px] font-medium uppercase tracking-[0.22em] md:mb-6",
                accentEyebrow ? "text-accent" : "text-black",
              )}
            >
              {content.eyebrow}
            </p>
            <h1 className="font-display max-w-[15ch] whitespace-pre-line text-[2.75rem] leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4.35rem] lg:leading-[1.05]">
              {content.headline}
            </h1>
          </Reveal>

          <div className="max-w-md lg:ml-auto lg:pt-10 xl:pt-14">
            <Reveal delay={0.1}>
              <p className="text-[15px] leading-[1.7] text-muted md:text-base md:leading-[1.75]">
                {content.description}
              </p>
            </Reveal>
            <div className="mt-7" id="quote">
              <Button
                href={content.cta.href}
                variant="dark"
                size="md"
                className="px-7 py-3.5 text-[14px]"
              >
                {content.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Full-bleed hero image — edge to edge, no side margins */}
      <div
        className="relative mt-12 w-screen max-w-[100vw] md:mt-16 lg:mt-[4.5rem]"
        style={{ marginLeft: "calc(50% - 50vw)" }}
        title={content.image.label}
      >
        <HeroParallaxMedia asset={content.image} />
      </div>
    </section>
  );
}
