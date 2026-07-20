"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import type { AttorneyPageContent } from "@/content/types";

interface AttorneyHeroProps {
  content: AttorneyPageContent["hero"];
}

export function AttorneyHero({ content }: AttorneyHeroProps) {
  return (
    <section
      className="overflow-x-clip bg-[#FBFBF9] pt-10 md:pt-12 lg:pt-14"
      aria-labelledby="attorney-heading"
    >
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          <div className="pb-2">
            <Reveal>
              <p className="mb-5 text-[16px] font-medium uppercase tracking-[0.22em] text-accent md:mb-6">
                {content.role}
              </p>
              <h1
                id="attorney-heading"
                className="font-display text-[2.75rem] leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4.35rem] lg:leading-[1.05]"
              >
                {content.name}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="mt-8 max-w-md border-l-2 border-accent pl-5 md:mt-10">
                <p className="font-display text-xl leading-snug tracking-tight text-ink md:text-2xl lg:text-[1.75rem]">
                  “{content.quote}”
                </p>
              </blockquote>
            </Reveal>

            <div className="mt-8 md:mt-10" id="quote">
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

          <Reveal delay={0.12} variant="clip" y={48}>
            <div
              className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2px] lg:ml-auto lg:max-w-none"
              title={content.image.label}
            >
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover object-top grayscale"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
