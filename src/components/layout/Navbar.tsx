"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/motion";
import type { SiteNav } from "@/content/types";

interface NavbarProps {
  content: SiteNav;
}

export function Navbar({ content }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const reducedMotion = useReducedMotion();

  const panelRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLButtonElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const readyRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    const curtain = curtainRef.current;
    const inner = contentRef.current;
    const backdrop = backdropRef.current;
    if (!panel || !curtain || !inner) return;

    if (!readyRef.current) {
      readyRef.current = true;
      gsap.set(panel, { autoAlpha: 0, pointerEvents: "none" });
      gsap.set(curtain, { yPercent: -101 });
      gsap.set(inner, { opacity: 0, y: 18 });
      if (backdrop) gsap.set(backdrop, { autoAlpha: 0 });
      return;
    }

    tlRef.current?.kill();

    if (reducedMotion) {
      gsap.set(panel, {
        autoAlpha: open ? 1 : 0,
        pointerEvents: open ? "auto" : "none",
      });
      gsap.set(curtain, { yPercent: 0 });
      gsap.set(inner, { opacity: open ? 1 : 0, y: 0 });
      if (backdrop) gsap.set(backdrop, { autoAlpha: open ? 1 : 0 });
      return;
    }

    if (open) {
      gsap.set(panel, { autoAlpha: 1, pointerEvents: "auto" });
      gsap.set(curtain, { yPercent: -101 });
      gsap.set(inner, { opacity: 0, y: 18 });
      if (backdrop) gsap.set(backdrop, { autoAlpha: 0 });

      const groups = inner.querySelectorAll<HTMLElement>("[data-menu-group]");

      const tl = gsap.timeline();
      tlRef.current = tl;

      if (backdrop) {
        tl.to(backdrop, { autoAlpha: 1, duration: 0.4, ease: "power2.out" }, 0);
      }
      tl.to(curtain, { yPercent: 0, duration: 0.7, ease: "power4.out" }, 0);
      tl.to(
        inner,
        { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" },
        "-=0.28",
      );
      tl.fromTo(
        groups,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.28",
      );
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(panel, { autoAlpha: 0, pointerEvents: "none" });
        },
      });
      tlRef.current = tl;

      tl.to(inner, {
        opacity: 0,
        y: -10,
        duration: 0.22,
        ease: "power2.in",
      });
      tl.to(
        curtain,
        { yPercent: -101, duration: 0.55, ease: "power4.inOut" },
        "-=0.06",
      );
      if (backdrop) {
        tl.to(
          backdrop,
          { autoAlpha: 0, duration: 0.3, ease: "power2.in" },
          "-=0.35",
        );
      }
    }

    return () => {
      tlRef.current?.kill();
    };
  }, [open, reducedMotion]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <Container className="relative z-50 grid h-[4.25rem] grid-cols-[1fr_auto_1fr] items-center md:h-[4.75rem]">
        <div className="justify-self-start">
          <button
            type="button"
            className={cn(
              "inline-flex items-center gap-2 text-[14px] font-medium text-ink",
              "transition-opacity hover:opacity-70",
            )}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span>{content.menuLabel}</span>
            <BentoIcon />
          </button>
        </div>

        <div className="justify-self-center">
          <Logo
            primary={content.logo.primary}
            secondary={content.logo.secondary}
          />
        </div>

        <div className="justify-self-end">
          <Button
            href={content.cta.href}
            variant="dark"
            size="sm"
            reveal={false}
            className="hidden px-6 py-3 text-[14px] sm:inline-flex"
          >
            {content.cta.label}
          </Button>
          <Button
            href={content.cta.href}
            variant="dark"
            size="sm"
            reveal={false}
            className="inline-flex px-4 py-2.5 text-[13px] sm:hidden"
            ariaLabel={content.cta.label}
          >
            Contact
          </Button>
        </div>
      </Container>

      {/* Heavy blur backdrop — page content frosts behind the curtain */}
      <button
        ref={backdropRef}
        type="button"
        className="fixed inset-0 z-40 bg-white/25 backdrop-blur-[18px] md:backdrop-blur-[22px]"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={() => setOpen(false)}
      />

      <div
        ref={panelRef}
        id={menuId}
        className="absolute inset-x-0 top-full z-[45] overflow-hidden"
        aria-hidden={!open}
      >
        <div
          ref={curtainRef}
          className="bg-white will-change-transform"
        >
          <Container className="py-7 md:py-8 lg:py-9">
            <div
              ref={contentRef}
              className="grid items-center gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-12 xl:gap-14"
            >
              {/* Link columns */}
              <div className="grid grid-cols-2 gap-8 sm:gap-12">
                {content.groups.map((group) => (
                  <div key={group.title} data-menu-group>
                    <p className="mb-4 text-[15px] font-semibold text-ink md:text-base">
                      {group.title}
                    </p>
                    <ul className="space-y-2.5">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="link-underline text-[14px] text-[#8a8a8a] transition-colors hover:text-ink md:text-[15px]"
                            tabIndex={open ? 0 : -1}
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Featured image — compact, sharp corners */}
              <div
                data-menu-group
                className="relative mx-auto aspect-[16/10] w-full max-w-md overflow-hidden rounded-none lg:mx-0 lg:max-w-none lg:h-[180px] lg:w-full lg:aspect-auto xl:h-[200px]"
              >
                <Image
                  src={content.featuredImage.src}
                  alt={content.featuredImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
}

function BentoIcon() {
  return (
    <svg
      viewBox="0 0 14 14"
      className="h-3.5 w-3.5"
      fill="currentColor"
      aria-hidden
    >
      <circle cx="3" cy="3" r="1.35" />
      <circle cx="11" cy="3" r="1.35" />
      <circle cx="3" cy="11" r="1.35" />
      <circle cx="11" cy="11" r="1.35" />
    </svg>
  );
}
