"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/cn";

gsap.registerPlugin(ScrollTrigger);

interface StatCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  className?: string;
  /** Space between number and suffix (reference style: "23 k") */
  suffixGap?: boolean;
  suffixClassName?: string;
}

export function StatCounter({
  value,
  suffix = "",
  decimals = 0,
  className,
  suffixGap = false,
  suffixClassName,
}: StatCounterProps) {
  const numRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    if (reducedMotion) {
      el.textContent = value.toFixed(decimals);
      return;
    }

    const counter = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.fromTo(
        counter,
        { val: 0 },
        {
          val: value,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            el.textContent = counter.val.toFixed(decimals);
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [value, decimals, reducedMotion]);

  return (
    <span className={cn("inline-flex items-baseline tabular-nums", className)}>
      <span ref={numRef}>0</span>
      {suffix ? (
        <span className={cn(suffixGap && "ml-[0.2em]", suffixClassName)}>
          {suffix}
        </span>
      ) : null}
    </span>
  );
}
