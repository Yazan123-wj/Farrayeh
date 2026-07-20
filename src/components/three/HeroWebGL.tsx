"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useLowPowerDevice, useReducedMotion } from "@/lib/motion";

/** Deterministic 0–1 pseudo-random (avoids impure Math.random in render). */
function hash01(n: number): number {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function AmbientField() {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const count = 140;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorA = new THREE.Color("#0096FF");
    const colorB = new THREE.Color("#7ec8e8");

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (hash01(i * 3 + 1) - 0.5) * 8;
      positions[i * 3 + 1] = (hash01(i * 3 + 2) - 0.5) * 4;
      positions[i * 3 + 2] = (hash01(i * 3 + 3) - 0.5) * 3;

      const mixed = colorA.clone().lerp(colorB, hash01(i * 3 + 4));
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.03;
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.12) * 0.05;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.4}>
      <points ref={points} geometry={geometry}>
        <pointsMaterial
          size={0.045}
          vertexColors
          transparent
          opacity={0.55}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </Float>
  );
}

export function HeroWebGL() {
  const reducedMotion = useReducedMotion();
  const lowPower = useLowPowerDevice();

  if (reducedMotion || lowPower) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 opacity-70"
      aria-hidden
    >
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        style={{ width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} />
        <AmbientField />
      </Canvas>
    </div>
  );
}
