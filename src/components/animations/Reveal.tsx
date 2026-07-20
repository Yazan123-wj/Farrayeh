"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

export type RevealVariant = "up" | "scale" | "clip" | "fade" | "left";

/** Play on enter · reverse when scrolling back past the element */
export const SCROLL_TOGGLE = "play none none reverse" as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Animation style — defaults to refined fade-up */
  variant?: RevealVariant;
  duration?: number;
  as?: "div" | "article" | "li" | "span" | "header";
}

const EASE = "power3.out";

function fromVars(variant: RevealVariant, y: number) {
  switch (variant) {
    case "scale":
      return { opacity: 0, y: y * 0.55, scale: 0.94, filter: "blur(6px)" };
    case "clip":
      return {
        opacity: 1,
        y: 0,
        clipPath: "inset(110% 0 0 0)",
        WebkitClipPath: "inset(110% 0 0 0)",
      };
    case "fade":
      return { opacity: 0, y: 0 };
    case "left":
      return { opacity: 0, x: -36, filter: "blur(4px)" };
    case "up":
    default:
      return { opacity: 0, y, filter: "blur(5px)" };
  }
}

function toVars(variant: RevealVariant) {
  switch (variant) {
    case "scale":
      return { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" };
    case "clip":
      return {
        opacity: 1,
        clipPath: "inset(0% 0 0 0)",
        WebkitClipPath: "inset(0% 0 0 0)",
      };
    case "fade":
      return { opacity: 1 };
    case "left":
      return { opacity: 1, x: 0, filter: "blur(0px)" };
    case "up":
    default:
      return { opacity: 1, y: 0, filter: "blur(0px)" };
  }
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  variant = "up",
  duration = 1.05,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(el, { clearProps: "all", opacity: 1, y: 0, x: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(el, fromVars(variant, y), {
        ...toVars(variant),
        duration,
        delay,
        ease: EASE,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: SCROLL_TOGGLE,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, y, variant, duration, reducedMotion]);

  return (
    <Tag
      ref={ref as never}
      className={cn("will-change-transform", className)}
    >
      {children}
    </Tag>
  );
}

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger between direct children (seconds) */
  stagger?: number;
  delay?: number;
  variant?: RevealVariant;
  y?: number;
  as?: "div" | "ul" | "ol";
}

/** Animates direct children in a polished staggered cascade on scroll. */
export function StaggerReveal({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  variant = "scale",
  y = 36,
  as: Tag = "div",
}: StaggerRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = Array.from(el.children) as HTMLElement[];
    if (!items.length) return;

    if (reducedMotion) {
      gsap.set(items, { clearProps: "all", opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(items, fromVars(variant, y), {
        ...toVars(variant),
        duration: 1.05,
        delay,
        stagger,
        ease: EASE,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: SCROLL_TOGGLE,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, delay, variant, y, reducedMotion]);

  return (
    <Tag ref={ref as never} className={cn("will-change-transform", className)}>
      {children}
    </Tag>
  );
}
