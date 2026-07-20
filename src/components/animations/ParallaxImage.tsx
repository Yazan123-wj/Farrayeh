"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/cn";
import type { MediaAsset } from "@/content/types";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  asset: MediaAsset;
  className?: string;
  imageClassName?: string;
  speed?: number;
  priority?: boolean;
  sizes?: string;
  /** Scrubbed curtain wipe — ideal for large editorial photos */
  curtain?: boolean;
}

export function ParallaxImage({
  asset,
  className,
  imageClassName,
  speed = 20,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  curtain = true,
}: ParallaxImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    const curtainEl = curtainRef.current;
    const img = imgRef.current;
    if (!wrap || !curtainEl || !img || reducedMotion) return;

    const ctx = gsap.context(() => {
      if (curtain) {
        gsap.set(curtainEl, {
          clipPath: "inset(100% 0% 0% 0%)",
          WebkitClipPath: "inset(100% 0% 0% 0%)",
        });

        gsap.to(curtainEl, {
          clipPath: "inset(0% 0% 0% 0%)",
          WebkitClipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top 90%",
            end: "top 45%",
            scrub: 0.65,
          },
        });
      }

      gsap.fromTo(
        img,
        { yPercent: -speed / 2 },
        {
          yPercent: speed / 2,
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
  }, [speed, curtain, reducedMotion]);

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden", className)}>
      <div
        ref={curtainRef}
        className="absolute inset-0 overflow-hidden will-change-[clip-path]"
      >
        <div ref={imgRef} className="absolute inset-0 scale-110">
          <Image
            src={asset.src}
            alt={asset.alt}
            fill
            priority={priority}
            sizes={sizes}
            className={cn("object-cover", imageClassName)}
          />
        </div>
      </div>
    </div>
  );
}
