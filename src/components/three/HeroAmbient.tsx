"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useLowPowerDevice, useReducedMotion } from "@/lib/motion";

const HeroWebGL = dynamic(
  () => import("./HeroWebGL").then((m) => m.HeroWebGL),
  {
    ssr: false,
    loading: () => null,
  },
);

/** Defer Three.js until after first paint so the page feels fast. */
export function HeroAmbient() {
  const reducedMotion = useReducedMotion();
  const lowPower = useLowPowerDevice();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reducedMotion || lowPower) return;

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    const start = () => setReady(true);

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(start, { timeout: 1800 });
    } else {
      timeoutId = window.setTimeout(start, 900);
    }

    return () => {
      if (idleId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [reducedMotion, lowPower]);

  if (!ready || reducedMotion || lowPower) return null;

  return <HeroWebGL />;
}
