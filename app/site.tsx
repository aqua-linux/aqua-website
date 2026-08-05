import type { ReactNode } from "react";
import { ReleaseCountdown } from "./countdown";
import { PrimaryNav, navItems } from "./nav";

const featureCards = [
  {
    title: "Friendly desktop",
    body: "A clean desktop direction with simple defaults, soft color, and no visual noise.",
  },
  {
    title: "Lightweight core",
    body: "A small Buildroot-based foundation focused on quick boot and predictable behavior.",
  },
  {
    title: "Aqua app style",
    body: "Glossy 2D controls, clear panels, and Frutiger Aero color without heavy imagery.",
  },
  {
    title: "Open project",
    body: "Designed to stay understandable for contributors, tinkerers, and first-time users.",
  },
];

const editions = [
  ["Aqua Desktop", "The default personal desktop experience."],
  ["Aqua Recovery", "A minimal rescue environment for system work."],
  ["Aqua Tools", "Small utilities for builds, checks, and development."],
];

const appCards = [
  ["Files", "Clear folders, simple sidebars, and quick places for daily work."],
  ["Terminal", "A fast shell surface for builds, checks, and project utilities."],
  ["Settings", "Readable controls with fewer nested decisions."],
];

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <main className="site-shell">
      <Header />
      {children}
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="appbar">
      <div className="appbar-inner">
        <a className="brand" href="/" aria-label="Aqua Linux home">
          <img src="/aqua-wordmark-glass.png" alt="Aqua Linux" />
        </a>
        <PrimaryNav />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Aqua Linux</p>
      <nav aria-label="Footer navigation">
        {navItems.map(([item, href]) => (
          <a href={href} key={item}>
            {item}
          </a>
        ))}
      </nav>
    </footer>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <p className="kicker">Thoughtful, capable, and open computing</p>
      <h1>Aqua Linux</h1>
      <p className="hero-copy">
        A lightweight Linux project with a polished Aqua-inspired desktop
        direction: simple enough to understand, refined enough to enjoy.
      </p>

      <div className="device-stage" aria-hidden="true">
        <div className="device">
          <div className="screen">
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
            <div className="desktop-dock">
              <span className="dock-icon files" />
              <span className="dock-icon terminal" />
              <span className="dock-icon browser" />
              <span className="dock-icon settings" />
              <span className="dock-icon download" />
            </div>
          </div>
          <div className="stand" />
        </div>
      </div>

      <div className="download-row">
        <a className="download-button" href="/download">Download</a>
      </div>
    </section>
  );
}

export function WhatsNew() {
  return (
    <section className="whats-new">
      <img className="aqua-orb-img" src="/aqua-mark-glass.png" alt="" />
      <p className="section-kicker">What Aqua is becoming</p>
      <h2>A calm desktop that feels clear from the first boot.</h2>
      <p>
        Inspired by the approachable structure of desktop Linux sites and the
        careful spacing of classic product pages, Aqua keeps the message short:
        fast base, friendly desktop, open development.
      </p>
    </section>
  );
}

export function FeatureSection() {
  return (
    <section className="feature-section">
      <div className="section-heading">
        <p className="section-kicker">Features</p>
        <h2>Small surface. Useful details.</h2>
      </div>
      <div className="feature-grid">
        {featureCards.map((item) => (
          <article className="feature-card" key={item.title}>
            <span className="card-icon" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AeroBand() {
  return (
    <section className="aero-band">
      <h2>Built in the open, tuned for everyday use.</h2>
      <p>
        Aqua Linux starts small: bootable images, clear recovery tools, and a
        desktop language that can grow without becoming complicated.
      </p>
    </section>
  );
}

export function AppShowcase() {
  return (
    <section className="app-showcase">
      <div className="section-heading">
        <p className="section-kicker">Aqua apps</p>
        <h2>Simple tools with a soft desktop language.</h2>
      </div>
      <div className="app-grid">
        {appCards.map(([title, body]) => (
          <article className="app-card" key={title}>
            <span />
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Editions() {
  return (
    <section className="editions">
      <div className="section-heading">
        <p className="section-kicker">Editions</p>
        <h2>Choose the shape you need.</h2>
      </div>
      <div className="edition-list">
        {editions.map(([title, body]) => (
          <article className="edition-item" key={title}>
            <span />
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DownloadPanel() {
  return (
    <section className="final-download">
      <img className="aqua-orb-img" src="/aqua-mark-glass.png" alt="" />
      <h2>Download Aqua Linux</h2>
      <p>Simple page. Clear project. Cool Aqua energy.</p>
      <div className="download-actions">
        <a className="download-button" href="/download">Download</a>
      </div>
    </section>
  );
}

export function PageHero({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="subpage-hero">
      <p className="kicker">{kicker}</p>
      <h1>{title}</h1>
      <p>{copy}</p>
    </section>
  );
}
