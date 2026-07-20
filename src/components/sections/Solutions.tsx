"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/animations/Reveal";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { cn } from "@/lib/cn";
import type { SolutionsContent } from "@/content/types";

interface SolutionsProps {
  content: SolutionsContent;
}

export function Solutions({ content }: SolutionsProps) {
  const [openId, setOpenId] = useState(content.items[0]?.id ?? "");

  return (
    <section
      id="solutions"
      className="relative z-10 bg-[#FBFBF9] py-16 md:py-20 lg:py-24"
      aria-labelledby="solutions-heading"
    >
      <Container>
        {/* Header: label left, title + CTA right */}
        <div className="mb-12 grid gap-6 md:mb-16 lg:mb-20 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] lg:gap-12">
          <Reveal>
            <SectionLabel className="mb-0">{content.label}</SectionLabel>
          </Reveal>

          <div>
            <Reveal delay={0.08}>
              <h2
                id="solutions-heading"
                className="font-display max-w-2xl text-3xl leading-[1.15] tracking-[-0.02em] text-ink md:text-4xl lg:text-[2.75rem]"
              >
                {content.title}
              </h2>
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

        {/* Accordion panel + matching-height image */}
        <div className="grid items-stretch gap-4 lg:grid-cols-[0.65fr_1.35fr] lg:gap-5">
          <Reveal className="h-full" variant="scale" y={48}>
            <div className="flex h-full min-h-[420px] flex-col justify-between bg-card p-7 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_22px_44px_-24px_rgba(10,10,10,0.22)] md:min-h-[480px] md:p-9 lg:p-10">
              <ul className="space-y-1">
                {content.items.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="flex w-full items-start gap-4 py-4 text-left md:gap-5 md:py-5"
                        aria-expanded={isOpen}
                        onClick={() => setOpenId(item.id)}
                      >
                        <span
                          className={cn(
                            "mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors",
                            isOpen
                              ? "border-accent"
                              : "border-ink/25",
                          )}
                          aria-hidden
                        >
                          <span
                            className={cn(
                              "h-2 w-2 rounded-full transition-colors",
                              isOpen ? "bg-accent" : "bg-transparent",
                            )}
                          />
                        </span>

                        <span className="flex-1">
                          <span
                            className={cn(
                              "font-display block text-lg tracking-tight md:text-xl",
                              isOpen ? "text-ink" : "text-muted",
                            )}
                          >
                            {item.title}
                          </span>
                          <span
                            className={cn(
                              "grid transition-all duration-300 ease-out",
                              isOpen
                                ? "mt-3 grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0",
                            )}
                          >
                            <span className="overflow-hidden">
                              <span className="block text-sm leading-relaxed text-muted md:text-[15px]">
                                {item.description}
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-10 text-sm text-muted md:mt-12">
                {content.footer}
              </p>
            </div>
          </Reveal>

          <div className="min-h-[320px] lg:min-h-full">
            <ParallaxImage
              asset={content.image}
              className="h-full min-h-[320px] w-full rounded-none lg:min-h-full"
              speed={10}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
