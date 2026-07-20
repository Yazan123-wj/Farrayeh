"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

/** Detects prefers-reduced-motion. */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onStoreChange);
      return () => mq.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

function readLowPower(): boolean {
  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean; effectiveType?: string };
  };
  const cores = navigator.hardwareConcurrency ?? 8;
  const memory = nav.deviceMemory ?? 8;
  const saveData = nav.connection?.saveData === true;
  const slowNet =
    nav.connection?.effectiveType === "2g" ||
    nav.connection?.effectiveType === "slow-2g";

  return cores <= 4 || memory <= 4 || saveData || slowNet;
}

/** Conservative low-power / low-end device heuristic for WebGL gating. */
export function useLowPowerDevice(): boolean {
  return useSyncExternalStore(
    () => () => {},
    readLowPower,
    () => false,
  );
}

/** Convenience helper for one-shot client-only flags after mount. */
export function useHasMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);
  return mounted;
}
