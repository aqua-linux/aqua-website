import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  GitBranch,
  Headphones,
  MessageCircle,
  PlaySquare,
  ShoppingBag,
  Users,
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

const newsCards = [
  ["May 20, 2024", "Aqua Linux 1.2 “Calm” Released", "Better performance, new features, and bug fixes. Aqua Linux 1.2 is here!", "1.2"],
  ["May 5, 2024", "New Software Center", "Discover and install your favorite apps easier than ever.", "bag"],
  ["April 18, 2024", "The Community Keeps Growing", "Aqua Linux is growing every day. Thanks to everyone who supports us!", "users"],
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
          <a href="https://github.com/aqua-linux" aria-label="Source"><GitBranch size={20} /></a>
          <a href="/community" aria-label="Community"><MessageCircle size={20} /></a>
          <a href="/community" aria-label="Videos"><PlaySquare size={20} /></a>
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
        <a href="/community">Forums</a>
        <a href="/community">Contribute</a>
        <a href="/community">Blog</a>
      </nav>
      <nav aria-label="Support navigation">
        <h2>Support</h2>
        <a href="/download">Installation Guide</a>
        <a href="/community">FAQ</a>
        <a href="/community">Contact</a>
      </nav>
      <p className="footer-copy">© 2025 Aqua Linux. All rights reserved.</p>
    </footer>
  );
}

export function Hero() {
  return <InteractiveHero />;
}

export function WhatsNew() {
  return (
    <section className="news-section">
      <div className="section-heading split-heading">
        <div>
          <h2>Latest updates</h2>
        </div>
        <a className="light-button" href="/community">
          View all news
          <ArrowRight size={16} />
        </a>
      </div>
      <div className="news-grid">
        {newsCards.map(([date, title, body, badge]) => (
          <article className="news-card" key={title}>
            <p>{date}</p>
            <h3>{title}</h3>
            <span>{body}</span>
            <a href="/community">Read more <ArrowRight size={14} /></a>
            <div className="news-badge" aria-hidden="true">
              {badge === "bag" ? <ShoppingBag size={30} /> : badge === "users" ? <Users size={30} /> : badge}
            </div>
          </article>
        ))}
      </div>
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
        <h2>We are here to help</h2>
        <p>
          Get help, find answers, and connect with the Aqua Linux community.
        </p>
      </div>
      <nav className="support-links" aria-label="Support links">
        <a href="/download">Installation Guide <ArrowRight size={15} /></a>
        <a href="/community">FAQs <ArrowRight size={15} /></a>
        <a href="/community">Community Forums <ArrowRight size={15} /></a>
        <a href="/community">Contact Us <ArrowRight size={15} /></a>
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
