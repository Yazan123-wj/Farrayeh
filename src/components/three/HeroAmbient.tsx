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

    const timeoutId = globalThis.setTimeout(() => setReady(true), 900);
    return () => {
      globalThis.clearTimeout(timeoutId);
    };
  }, [reducedMotion, lowPower]);

  if (!ready || reducedMotion || lowPower) return null;

  return <HeroWebGL />;
}
