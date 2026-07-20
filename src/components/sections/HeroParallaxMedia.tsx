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
  /** Optional still frame shown before the video loads / for reduced motion */
  poster?: string;
}

function isVideoSrc(src: string) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(src);
}

/**
 * Full-bleed hero media with a scrubbed curtain wipe (works both scroll
 * directions) plus gentle parallax on the media itself.
 */
export function HeroParallaxMedia({ asset, poster }: HeroParallaxMediaProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();
  const isVideo = isVideoSrc(asset.src);

  useEffect(() => {
    const wrap = wrapRef.current;
    const curtain = curtainRef.current;
    const media = mediaRef.current;
    if (!wrap || !curtain || !media || reducedMotion) return;

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
        media,
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideo) return;

    if (reducedMotion) {
      video.pause();
      return;
    }

    const play = () => {
      void video.play().catch(() => {
        /* Autoplay can be blocked; muted + playsInline usually works */
      });
    };

    play();
    video.addEventListener("loadeddata", play);
    return () => video.removeEventListener("loadeddata", play);
  }, [isVideo, reducedMotion, asset.src]);

  return (
    <div
      ref={wrapRef}
      className="relative aspect-[16/10] w-full md:aspect-[2.15/1]"
    >
      <div
        ref={curtainRef}
        className="absolute inset-0 overflow-hidden will-change-[clip-path]"
      >
        <div ref={mediaRef} className="absolute inset-0 scale-110">
          {isVideo && !reducedMotion ? (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={asset.src}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label={asset.alt}
            />
          ) : (
            <Image
              src={poster && isVideo ? poster : asset.src}
              alt={asset.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
