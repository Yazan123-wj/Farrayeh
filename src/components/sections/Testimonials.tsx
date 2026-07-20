"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { useReducedMotion } from "@/lib/motion";
import type { Testimonial, TestimonialsContent } from "@/content/types";

interface TestimonialsProps {
  content: TestimonialsContent;
}

export function Testimonials({ content }: TestimonialsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const loopItems = [...content.items, ...content.items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || reducedMotion) return;

    let tween: gsap.core.Tween | null = null;

    const setup = () => {
      gsap.set(track, { x: 0 });
      const totalWidth = track.scrollWidth / 2;
      if (!totalWidth) return;

      tween?.kill();
      tween = gsap.to(track, {
        x: -totalWidth,
        duration: 32,
        ease: "none",
        repeat: -1,
      });
    };

    setup();

    const onResize = () => setup();
    window.addEventListener("resize", onResize);

    return () => {
      tween?.kill();
      window.removeEventListener("resize", onResize);
    };
  }, [reducedMotion, content.items.length]);

  return (
    <section
      id="team"
      className="overflow-hidden bg-[#FBFBF9] py-16 md:py-24 lg:py-28"
      aria-labelledby="team-heading"
    >
      <Container>
        <div className="mb-12 grid gap-8 md:mb-16 lg:mb-20 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] lg:gap-16">
          <Reveal>
            <SectionLabel className="mb-0">{content.label}</SectionLabel>
          </Reveal>

          <div>
            <Reveal>
              <h2
                id="team-heading"
                className="font-display text-4xl leading-[1.12] tracking-[-0.02em] text-ink md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem]"
              >
                {content.title}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-xl text-base leading-[1.7] text-muted md:mt-6 md:text-lg md:leading-[1.75]">
                {content.description}
              </p>
            </Reveal>
            <div className="mt-8 md:mt-10">
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
      </Container>

      <div
        className="relative w-full overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="Team members"
      >
        <div
          ref={trackRef}
          className="flex w-max gap-4 will-change-transform md:gap-5"
        >
          {loopItems.map((item, i) => (
            <TestimonialSlide
              key={`${item.id}-${i}`}
              item={item}
              ariaHidden={i >= content.items.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSlide({
  item,
  ariaHidden,
}: {
  item: Testimonial;
  ariaHidden?: boolean;
}) {
  return (
    <article
      className="group relative aspect-[3/4] w-[78vw] shrink-0 overflow-hidden rounded-none sm:w-[48vw] md:w-[32vw] lg:w-[24vw]"
      aria-label={`${item.name}, ${item.role}`}
      aria-hidden={ariaHidden}
      tabIndex={ariaHidden ? -1 : 0}
    >
      <Image
        src={item.image.src}
        alt={ariaHidden ? "" : item.image.alt}
        fill
        sizes="(max-width: 768px) 78vw, 24vw"
        className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-focus-within:scale-105"
        draggable={false}
      />

      {/* Name + role always on the photo */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent p-5 pt-16 md:p-6">
        <p className="font-display text-xl text-white md:text-2xl">{item.name}</p>
        <p className="mt-1 text-sm text-white/75">{item.role}</p>
      </div>

      {/* Blue curtain — quote only, slides in from the left */}
      <div
        className="absolute inset-0 z-20 flex translate-x-[-101%] flex-col justify-center bg-accent p-5 pb-24 text-white transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus-within:translate-x-0 md:p-6 md:pb-28 lg:p-7"
        aria-hidden
      >
        <QuoteIcon className="absolute left-5 top-5 md:left-6 md:top-6" />
        <p className="text-[15px] leading-relaxed text-white/95 md:text-base md:leading-relaxed">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>
    </article>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 28"
      className={`h-5 w-6 text-white ${className ?? ""}`}
      fill="currentColor"
      aria-hidden
    >
      <path d="M0 28V16.2C0 7.4 4.6 2.1 13.2 0l1.4 3.1C9.2 5 6.6 8.3 6.4 13.2H13V28H0Zm19 0V16.2C19 7.4 23.6 2.1 32.2 0L33.6 3.1C28.2 5 25.6 8.3 25.4 13.2H32V28H19Z" />
    </svg>
  );
}
