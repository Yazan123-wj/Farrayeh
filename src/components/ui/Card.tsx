"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  /** Scroll entrance — clip + soft scale */
  reveal?: boolean;
  delay?: number;
  /** Lift + shadow on hover — off for static grids like Services */
  hoverable?: boolean;
}

export function Card({
  children,
  className,
  as: Tag = "div",
  reveal = true,
  delay = 0,
  hoverable = true,
}: CardProps) {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !reveal || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 36,
          scale: 0.96,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.05,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [reveal, delay, reducedMotion]);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "rounded-[10px] bg-card p-6 md:p-7",
        hoverable &&
          "will-change-transform transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_22px_44px_-24px_rgba(10,10,10,0.28)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
