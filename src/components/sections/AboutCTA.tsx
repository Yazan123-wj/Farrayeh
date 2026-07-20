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

interface AboutCTAProps {
  content: CtaContent;
}

/**
 * Standalone About CTA — same visual language as the homepage CTA panel,
 * without the blog curtain / 200svh under-layer coupling.
 */
export function AboutCTA({ content }: AboutCTAProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const img = imgRef.current;
    if (!section || !panel || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panel,
        { y: 80, opacity: 0.85 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "top 20%",
            scrub: 0.6,
          },
        },
      );

      if (img) {
        gsap.fromTo(
          img,
          { yPercent: -4 },
          {
            yPercent: 4,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-[85svh] overflow-hidden md:min-h-svh"
      aria-labelledby="about-cta-heading"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div ref={imgRef} className="absolute inset-[-8%] will-change-transform">
          <Image
            src={content.image.src}
            alt={content.image.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-ink/25" aria-hidden />

      <Container className="relative z-10 flex min-h-[85svh] items-end py-16 md:min-h-svh md:items-center md:py-0">
        <div
          ref={panelRef}
          className="w-full max-w-md bg-[#0057b8] p-8 text-white will-change-transform sm:p-10 md:p-12"
        >
          <LogoMark onDark className="mb-8 h-9 w-auto" />
          <h2
            id="about-cta-heading"
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
    </section>
  );
}
