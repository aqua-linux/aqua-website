"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { ReleaseCountdown } from "./countdown";

const wallpapers = [
  { name: "Night coast", src: "/hero-night.jpg" },
  { name: "Aero globe", src: "/hero-aero-globe.jpg" },
  { name: "Blue lagoon", src: "/hero-lagoon.jpg" },
  { name: "Summer meadow", src: "/hero-meadow.jpg" },
];

export function InteractiveHero() {
  const [activeWallpaper, setActiveWallpaper] = useState(wallpapers[1]);
  const heroStyle = {
    "--hero-wallpaper": `url("${activeWallpaper.src}")`,
  } as CSSProperties;

  return (
    <section className="hero hero-wallpaper" style={heroStyle}>
      <p className="kicker">Thoughtful, capable, and open computing</p>
      <h1>Aqua Linux</h1>
      <p className="hero-copy">
        A lightweight Linux project with a polished Aqua-inspired desktop
        direction: simple enough to understand, refined enough to enjoy.
      </p>

      <div className="device-stage">
        <div className="device">
          <div className="screen" style={heroStyle}>
            <div className="window">
              <div className="traffic">
                <span />
                <span />
                <span />
              </div>
              <div className="window-body">
                <ReleaseCountdown />
              </div>
            </div>
            <div className="desktop-dock" aria-label="Wallpaper choices">
              {wallpapers.map((wallpaper) => {
                const isActive = activeWallpaper.src === wallpaper.src;

                return (
                  <button
                    aria-label={`Use ${wallpaper.name} wallpaper`}
                    aria-pressed={isActive}
                    className="dock-icon"
                    key={wallpaper.src}
                    onClick={() => setActiveWallpaper(wallpaper)}
                    type="button"
                  >
                    <img src={wallpaper.src} alt="" />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="stand" />
        </div>
      </div>

    </section>
  );
}
