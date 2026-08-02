"use client";

import { useEffect, useRef } from "react";

type FishesModule = {
  fishesBackground: (options: Record<string, unknown>) => { destroy?: () => void; dispose?: () => void };
};

export function AquariumCard() {
  const aquariumRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = aquariumRef.current;
    let cancelled = false;
    let cleanup: undefined | (() => void);

    async function init() {
      if (!el) return;

      const moduleUrl = "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";
      const { fishesBackground } = (await import(/* @vite-ignore */ moduleUrl)) as FishesModule;

      if (cancelled) return;

      const bg = fishesBackground({
        el,
        eventsEl: el,
        gpgpuSize: 4,
        background: 0x0878a8,
        fogDensity: 0.008,
        texture: "/fishes.png",
        textureCount: 8,
        material: "phong",
        materialParams: {
          transparent: true,
          alphaTest: 0.5,
        },
        fishScale: [7, 7, 7],
        fishWidthSegments: 8,
        fishSpeed: 1.35,
        noiseCoordScale: 0.01,
        noiseTimeCoef: 0.0005,
        noiseIntensity: 0.0005,
        attractionRadius1: 50,
        attractionRadius2: 150,
        maxVelocity: 0.1,
      });

      cleanup = () => {
        bg.destroy?.();
        bg.dispose?.();
      };
    }

    init().catch(() => undefined);

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <section className="aquarium-panel glass-panel" aria-label="Akvaryum">
      <p className="panel-label">Akvaryum</p>
      <div className="aquarium-stage" ref={aquariumRef} />
    </section>
  );
}
