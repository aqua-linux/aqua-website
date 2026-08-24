"use client";

import { ArrowRight, Download } from "lucide-react";

export function InteractiveHero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy-block">
          <h1>A modern Linux for everyone.</h1>
          <p className="hero-copy">
            Aqua Linux is a fast, secure and beautiful Linux distribution
            designed to make your everyday computing experience simple,
            efficient and enjoyable.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="/download">
              <Download size={16} />
              Download Aqua Linux
            </a>
            <a className="secondary-cta" href="#features">
              Learn More
              <ArrowRight size={15} />
            </a>
          </div>
          <p className="hero-note">
            <span className="hero-heart" aria-hidden="true">💙</span>
            Open source. Community driven. Made for you.
          </p>
        </div>
        <div className="hero-device">
          <img src="/aqua-hero-laptop-dock.png" alt="Aqua Linux desktop on a laptop" />
        </div>
      </div>
    </section>
  );
}
