"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/Logo";
import { useReducedMotion } from "@/lib/motion";
import type { CtaContent } from "@/content/types";

gsap.registerPlugin(ScrollTrigger);

interface CTAProps {
  content: CtaContent;
}

/**
 * Under-layer for the blog curtain:
 * Blog sits on top (higher z-index + negative margin) and lifts away on scroll,
 * revealing this sticky full-bleed image. The blue panel drifts upward with scroll.
 */
export function CTA({ content }: CTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    if (!section || !panel || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panel,
        { y: 160 },
        {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative z-0 h-[200svh]"
      aria-labelledby="cta-heading"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="absolute inset-0 bg-ink/20" aria-hidden />

        <Container className="relative z-10 flex h-full items-end pb-16 md:items-center md:pb-0">
          <div
            ref={panelRef}
            className="w-full max-w-md bg-[#0057b8] p-8 text-white will-change-transform sm:p-10 md:p-12"
          >
            <LogoMark onDark className="mb-8 h-9 w-auto" />
            <h2
              id="cta-heading"
              className="font-display text-3xl tracking-tight text-white md:text-4xl lg:text-[2.75rem]"
            >
              {content.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white md:text-base">
              {content.description}
            </p>
            <div className="mt-8">
              <Button
                href={content.cta.href}
                variant="onAccent"
                size="md"
                reveal={false}
                className="bg-white text-ink hover:bg-ink hover:text-white"
              >
                {content.cta.label}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
