import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Headphones,
  MessageCircle,
} from "lucide-react";
import { InteractiveHero } from "./hero";
import { navItems } from "./nav-items";
import { PrimaryNav } from "./nav";

const featureCards = [
  {
    title: "Fast & Efficient",
    body: "Optimized for performance so you can get more done.",
    icon: "fast",
  },
  {
    title: "Secure by Default",
    body: "Built-in security features keep you safe and private.",
    icon: "secure",
  },
  {
    title: "Clean & Minimal",
    body: "A modern look with the simplicity you need.",
    icon: "clean",
  },
  {
    title: "Open & Free",
    body: "100% open source and built with the community.",
    icon: "open",
  },
];

const appCards = [
  { title: "Terminal", icon: "terminal" },
  { title: "Files", icon: "files" },
  { title: "Web", icon: "web" },
  { title: "Mail", icon: "mail" },
  { title: "Calendar", icon: "calendar" },
  { title: "Photos", icon: "photos" },
  { title: "Videos", icon: "videos" },
  { title: "Music", icon: "music" },
  { title: "Camera", icon: "camera" },
];

const editions = [
  ["Aqua Desktop", "The default personal desktop experience."],
  ["Aqua Recovery", "A minimal rescue environment for system work."],
  ["Aqua Tools", "Small utilities for builds, checks, and development."],
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
        <Link className="brand" href="/" aria-label="Aqua Linux home">
          <span className="brand-icon"><img src="/aqua-icon-black.png" alt="" /></span>
          <span className="brand-name">Aqua Linux</span>
        </Link>
        <div className="appbar-actions">
          <PrimaryNav />
          <a className="appbar-download" href="/download">
            <Download size={15} strokeWidth={2.2} />
            Download
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-brand">
        <div className="footer-lockup" aria-label="Aqua Linux">
          <span className="brand-icon"><img src="/aqua-icon-black.png" alt="" /></span>
          <strong>Aqua Linux</strong>
        </div>
        <p>A modern, fast and secure Linux distribution.</p>
        <div className="social-links" aria-label="Social links">
          <a href="https://github.com/aqua-linux" aria-label="Aqua Linux on GitHub"><GithubMark /></a>
        </div>
      </div>
      <nav aria-label="Product navigation">
        <h2>Product</h2>
        {navItems.slice(1).map(([item, href]) => (
          <a href={href} key={item}>
            {item}
          </a>
        ))}
        <a href="/download">Download</a>
      </nav>
      <nav aria-label="Community navigation">
        <h2>Community</h2>
        <a href="/coming-soon">Forums</a>
        <a href="/coming-soon">Contribute</a>
        <a href="/coming-soon">Blog</a>
      </nav>
      <nav aria-label="Support navigation">
        <h2>Support</h2>
        <a href="/coming-soon">Installation Guide</a>
        <a href="/coming-soon">FAQ</a>
        <a href="/coming-soon">Contact</a>
      </nav>
      <p className="footer-copy">© 2025 Aqua Linux. All rights reserved.</p>
    </footer>
  );
}

export function GithubMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.12 10.12 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
      />
    </svg>
  );
}

export function Hero() {
  return <InteractiveHero />;
}

export function WhatsNew() {
  return (
    <section className="news-section">
      <div className="section-heading">
        <h2>Latest updates</h2>
      </div>
      <p className="news-placeholder">
        New updates will be available here very soon.
      </p>
    </section>
  );
}

export function WaitlistPanel() {
  return (
    <section className="support-panel">
      <div className="waitlist-icon" aria-hidden="true">
        <Headphones size={42} />
      </div>
      <div className="waitlist-copy">
        <p>
          Get help, find answers, and connect with the Aqua Linux community.
        </p>
      </div>
      <nav className="support-links" aria-label="Support links">
        <a href="/coming-soon">Installation Guide <ArrowRight size={15} /></a>
        <a href="/coming-soon">FAQs <ArrowRight size={15} /></a>
        <a href="/coming-soon">Community Forums <ArrowRight size={15} /></a>
        <a href="/coming-soon">Contact Us <ArrowRight size={15} /></a>
      </nav>
      <div className="support-bubbles" aria-hidden="true">
        <MessageCircle size={86} />
        <MessageCircle size={112} />
      </div>
    </section>
  );
}

export function LegacyWhatsNew() {
  return (
    <section className="legacy-whats-new">
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
      <div className="feature-grid">
        {featureCards.map((item) => (
          <article className="feature-card" key={item.title}>
            <span className={`feature-icon ${item.icon}`} aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ApplicationsSection() {
  return (
    <section className="applications-section">
      <div className="applications-copy">
        <p>Aqua Linux comes with essential applications and the ability to install thousands more.</p>
      </div>
      <div className="app-grid">
        {appCards.map((app) => (
          <article className="app-card" key={app.title}>
            <span className={`app-icon app-icon-${app.icon}`} aria-hidden="true" />
            <h3>{app.title}</h3>
          </article>
        ))}
      </div>
      <a className="light-button applications-button" href="/apps">
        Explore all apps
        <ArrowRight size={16} />
      </a>
    </section>
  );
}

export function AppShowcase() {
  return <ApplicationsSection />;
}

export function SectionDivider({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <section className="section-divider" id={id} aria-labelledby={`${id}-heading`}>
      <div className="section-divider-inner">
        <p>{eyebrow}</p>
        <h2 id={`${id}-heading`}>{title}</h2>
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
