"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/cn";
import type { ServicesFaqContent } from "@/content/types";

interface ServicesFAQProps {
  content: ServicesFaqContent;
}

export function ServicesFAQ({ content }: ServicesFAQProps) {
  const [openId, setOpenId] = useState(content.items[0]?.id ?? "");

  return (
    <section
      id="faq"
      className="bg-[#FBFBF9] py-16 md:py-24 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <Container>
        <div className="grid items-stretch gap-12 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-14 xl:gap-16">
          {/* Left — label, title, intro, contact strip */}
          <div className="flex flex-col">
            <Reveal>
              <p className="mb-5 text-[16px] font-medium uppercase tracking-[0.22em] text-black md:mb-6">
                {content.label}
              </p>
              <h2
                id="faq-heading"
                className="font-display text-4xl leading-[1.12] tracking-[-0.02em] text-ink md:text-5xl lg:text-[3.15rem]"
              >
                {content.title}
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-[1.7] text-muted md:mt-6 md:text-base md:leading-[1.75]">
                {content.description}
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 lg:mt-auto lg:pt-12">
              {/* Reference layout: text left · button right, light fill, 2px radius */}
              <div className="flex flex-col gap-6 rounded-[2px] bg-[#efefef] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-7 md:p-8">
                <div className="min-w-0">
                  <h3 className="font-display text-xl tracking-tight text-ink md:text-2xl">
                    {content.contactTitle}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {content.contactDescription}
                  </p>
                </div>
                <Button
                  href={content.contactCta.href}
                  variant="dark"
                  size="md"
                  className="shrink-0 rounded-[6px] px-7 py-3 text-[14px]"
                >
                  {content.contactCta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right — accordion */}
          <Reveal delay={0.08}>
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {content.items.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      className="group flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenId((current) =>
                          current === item.id ? "" : item.id,
                        )
                      }
                    >
                      <span className="font-display text-lg tracking-tight text-ink md:text-xl lg:text-[1.35rem]">
                        {item.question}
                      </span>
                      <span
                        className={cn(
                          "mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border transition-colors",
                          isOpen
                            ? "border-accent bg-accent text-white"
                            : "border-[#e5e5e5] bg-white text-ink/50 group-hover:border-ink/30 group-hover:text-ink",
                        )}
                        aria-hidden
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          className="h-3.5 w-3.5"
                        >
                          <path
                            d="M3 8h10"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                          <path
                            d="M8 3v10"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            className={cn(
                              "origin-center transition-transform duration-300",
                              isOpen && "scale-y-0",
                            )}
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 text-[15px] leading-[1.7] text-muted md:pb-7 md:text-base md:leading-[1.75]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
