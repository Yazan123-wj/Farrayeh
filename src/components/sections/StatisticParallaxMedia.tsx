"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/motion";
import type { MediaAsset } from "@/content/types";

gsap.registerPlugin(ScrollTrigger);

interface StatisticParallaxMediaProps {
  asset: MediaAsset;
}

/** Statistic split media — curtain wipe + gentle parallax, both scroll directions. */
export function StatisticParallaxMedia({ asset }: StatisticParallaxMediaProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const curtain = curtainRef.current;
    const img = imgRef.current;
    if (!wrap || !curtain || !img || reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.set(curtain, {
        clipPath: "inset(100% 0% 0% 0%)",
        WebkitClipPath: "inset(100% 0% 0% 0%)",
      });

      gsap.to(curtain, {
        clipPath: "inset(0% 0% 0% 0%)",
        WebkitClipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top 90%",
          end: "top 40%",
          scrub: 0.65,
        },
      });

      gsap.fromTo(
        img,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, wrap);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden">
      <div
        ref={curtainRef}
        className="absolute inset-0 overflow-hidden will-change-[clip-path]"
      >
        <div ref={imgRef} className="absolute inset-0 scale-110">
          <Image
            src={asset.src}
            alt={asset.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
