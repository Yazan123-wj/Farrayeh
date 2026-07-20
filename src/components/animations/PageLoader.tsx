"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useReducedMotion } from "@/lib/motion";

/**
 * Full-page loader: scales of justice appear instantly, tick to balance,
 * then a curtain splits open. Runs on every enter / refresh (~3.5s).
 */
export function PageLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;

    const root = rootRef.current;
    if (!root) return;

    document.documentElement.classList.add("loader-active");
    document.body.style.overflow = "hidden";

    const beam = root.querySelector<SVGGElement>("[data-beam]");
    const curtainTop = root.querySelector<HTMLElement>("[data-curtain-top]");
    const curtainBot = root.querySelector<HTMLElement>("[data-curtain-bot]");
    const stage = root.querySelector<HTMLElement>("[data-stage]");

    const finish = () => {
      document.documentElement.classList.remove("loader-active");
      document.body.style.overflow = "";
      setDone(true);
    };

    if (reducedMotion) {
      const t = setTimeout(finish, 350);
      return () => {
        clearTimeout(t);
        document.documentElement.classList.remove("loader-active");
        document.body.style.overflow = "";
      };
    }

    gsap.set(beam, { transformOrigin: "50% 22%", rotate: 0 });
    gsap.set([curtainTop, curtainBot], { yPercent: 0 });
    gsap.set(stage, { opacity: 1, scale: 1 });

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: finish,
    });

    // Tick left → right → settle (scales already fully visible)
    tl.to(beam, { rotate: -9, duration: 0.42 });
    tl.to(beam, { rotate: 8, duration: 0.5 });
    tl.to(beam, { rotate: -2.5, duration: 0.28 });
    tl.to(beam, { rotate: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });

    tl.to({}, { duration: 0.25 });

    // Curtain split
    tl.to(stage, {
      opacity: 0,
      scale: 0.94,
      duration: 0.35,
      ease: "power2.in",
    });
    tl.to(
      curtainTop,
      { yPercent: -102, duration: 0.85, ease: "power4.inOut" },
      "-=0.12",
    );
    tl.to(
      curtainBot,
      { yPercent: 102, duration: 0.85, ease: "power4.inOut" },
      "<",
    );

    return () => {
      tl.kill();
      document.documentElement.classList.remove("loader-active");
      document.body.style.overflow = "";
    };
  }, [done, reducedMotion]);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <div
        data-curtain-top
        className="absolute inset-x-0 top-0 z-[1] h-[50.5%] bg-[#FBFBF9]"
        aria-hidden
      />
      <div
        data-curtain-bot
        className="absolute inset-x-0 bottom-0 z-[1] h-[50.5%] bg-[#FBFBF9]"
        aria-hidden
      />

      <div
        data-stage
        className="relative z-[2] flex items-center justify-center will-change-transform"
      >
        <ScalesOfJustice className="h-[148px] w-[148px] text-ink md:h-[176px] md:w-[176px]" />
      </div>

      <span className="sr-only">Loading</span>
    </div>
  );
}

function ScalesOfJustice({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <g data-beam>
        <path
          d="M22 48 C40 30, 55 30, 80 42 C105 30, 120 30, 138 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 50 L18 78 M28 50 L38 78"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M132 50 L122 78 M132 50 L142 78"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M16 78 C16 78 28 96 40 78 Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M120 78 C120 78 132 96 144 78 Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M80 36 L88 48 L80 54 L72 48 Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </g>

      <path
        d="M80 54 V112"
        fill="none"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <path
        d="M62 112 H98"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M50 124 H110"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M38 136 H122"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
