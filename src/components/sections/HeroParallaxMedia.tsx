"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/motion";
import type { MediaAsset } from "@/content/types";

gsap.registerPlugin(ScrollTrigger);

interface HeroParallaxMediaProps {
  asset: MediaAsset;
}

/**
 * Full-bleed hero media with a scrubbed curtain wipe (works both scroll
 * directions) plus gentle parallax on the photo itself.
 */
export function HeroParallaxMedia({ asset }: HeroParallaxMediaProps) {
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

      // Curtain lift — scrubbed so scrolling back closes it again
      gsap.to(curtain, {
        clipPath: "inset(0% 0% 0% 0%)",
        WebkitClipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top 88%",
          end: "top 38%",
          scrub: 0.7,
        },
      });

      gsap.fromTo(
        img,
        { yPercent: -6 },
        {
          yPercent: 6,
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
    <div
      ref={wrapRef}
      className="relative aspect-[16/10] w-full md:aspect-[2.15/1]"
    >
      <div
        ref={curtainRef}
        className="absolute inset-0 overflow-hidden will-change-[clip-path]"
      >
        <div ref={imgRef} className="absolute inset-0 scale-110">
          <Image
            src={asset.src}
            alt={asset.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
