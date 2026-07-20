"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { useReducedMotion } from "@/lib/motion";
import type { ServicesHeroContent } from "@/content/types";

gsap.registerPlugin(ScrollTrigger);

interface ServicesHeroProps {
  content: ServicesHeroContent;
}

/**
 * Services hero — title locked to the top, subtitle + CTA to the bottom,
 * shorter image height matching the Coverly reference spacing.
 */
export function ServicesHero({ content }: ServicesHeroProps) {
  const wrapRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { yPercent: -4 },
        {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, wrap);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={wrapRef}
      className="relative min-h-[72svh] overflow-hidden md:min-h-[78svh] lg:min-h-[84svh]"
      aria-labelledby="services-hero-heading"
    >
      <div
        ref={imgRef}
        className="absolute inset-0 scale-110 will-change-transform"
        title={content.image.label}
      >
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/40 to-ink/15"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/20"
        aria-hidden
      />

      <Container className="relative z-10 flex min-h-[72svh] flex-col justify-between py-12 md:min-h-[78svh] md:py-14 lg:min-h-[84svh] lg:py-16">
        {/* Top — eyebrow + title */}
        <Reveal>
          <div className="max-w-xl text-white lg:max-w-[34rem]">
            <p className="mb-4 text-[16px] font-medium uppercase tracking-[0.22em] text-white/90 md:mb-5">
              {content.eyebrow}
            </p>
            <h1
              id="services-hero-heading"
              className="font-display max-w-[12ch] whitespace-pre-line text-[2.75rem] leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[4.35rem] lg:leading-[1.05]"
            >
              {content.headline}
            </h1>
          </div>
        </Reveal>

        {/* Bottom — subtitle + CTA */}
        <Reveal delay={0.1}>
          <div className="max-w-md text-white">
            <p className="text-[15px] leading-[1.7] text-white/85 md:text-base md:leading-[1.75]">
              {content.description}
            </p>
            <div className="mt-7 md:mt-8" id="quote">
              <Button
                href={content.cta.href}
                variant="onAccent"
                size="md"
                className="rounded-[6px] bg-white px-7 py-3.5 text-[14px] text-ink hover:bg-ink hover:text-white"
              >
                {content.cta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
