import {
  ArrowRight,
  Box,
  Download,
  Feather,
  GitFork,
  LockKeyhole,
  Monitor,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  UsersRound,
} from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Fast",
    body: "Optimized for quick boot, smooth motion, and responsive desktop work.",
  },
  {
    icon: ShieldCheck,
    title: "Secure",
    body: "Built with a minimal base, clear recovery paths, and privacy in mind.",
  },
  {
    icon: Feather,
    title: "Lightweight",
    body: "A lean Buildroot foundation focused on efficiency and clarity.",
  },
  {
    icon: UsersRound,
    title: "Community",
    body: "Designed for developers, makers, and transparent open collaboration.",
  },
];

const featureCards = [
  {
    icon: Monitor,
    title: "Aqua Desktop",
    body: "A calm liquid-glass desktop language shaped around depth, light, and focus.",
  },
  {
    icon: Terminal,
    title: "Aqua Terminal",
    body: "Developer-friendly recovery tools and a fast foundation for system work.",
  },
  {
    icon: Box,
    title: "Aqua Software",
    body: "A future package experience built around simple, deliberate workflows.",
  },
  {
    icon: LockKeyhole,
    title: "Privacy First",
    body: "Your system stays understandable, inspectable, and under your control.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Aqua Linux home">
          <img src="/aqua-mark-glass.png" alt="" />
          <span>
            <strong>Aqua</strong>
            <small>Linux</small>
          </span>
        </a>
        <div className="navlinks">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#download">Download</a>
          <a href="#community">Community</a>
          <a href="#news">News</a>
          <a href="#support">Support</a>
        </div>
        <a className="download-pill" href="#download">
          <Download aria-hidden="true" size={18} />
          Download Aqua
        </a>
      </nav>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Pure. Modern. Transparent.</p>
          <h1 id="hero-title">
            Aqua <span>Linux</span>
          </h1>
          <p className="lead">
            A clean, transparent and beautiful Linux experience designed to be
            fast, lightweight, and visually stunning.
          </p>
          <div className="actions">
            <a className="primary-action" href="#download">
              <Download aria-hidden="true" size={19} />
              Download Now
            </a>
            <a className="secondary-action" href="#features">
              Explore Features
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
          <p className="trust">
            <ShieldCheck aria-hidden="true" size={18} />
            Secure - Stable - Open Source
          </p>
        </div>

        <div className="hero-mark" aria-hidden="true">
          <img src="/aqua-symbol-primary.png" alt="" />
        </div>
      </section>

      <section className="highlight-strip" aria-label="Aqua Linux highlights">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <article className="highlight" key={item.title}>
              <Icon aria-hidden="true" size={48} strokeWidth={1.8} />
              <div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="feature-section" id="features">
        <p className="section-kicker">Designed for everyone</p>
        <h2>
          Beautiful by design. <span>Powerful by nature.</span>
        </h2>
        <p className="section-copy">
          Aqua Linux combines elegance with performance to bring you an
          operating system that feels simple, open, and ready to shape.
        </p>
        <div className="feature-grid">
          {featureCards.map((item) => {
            const Icon = item.icon;
            return (
              <article className="feature-card" key={item.title}>
                <div className="icon-well">
                  <Icon aria-hidden="true" size={31} strokeWidth={1.9} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <a href="#download">
                    Learn more
                    <ArrowRight aria-hidden="true" size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="download-section" id="download">
        <div>
          <p className="section-kicker">Milestone builds</p>
          <h2>Buildroot core today. Liquid-glass desktop next.</h2>
          <p>
            The project is currently focused on the bootable recovery image,
            QEMU checks, and the foundation for the Aqua visual system.
          </p>
        </div>
        <a className="primary-action" href="https://github.com/" rel="noreferrer">
          <GitFork aria-hidden="true" size={19} />
          View Project
        </a>
      </section>

      <footer className="footer" id="community">
        <div className="socials" aria-label="Community links">
          <a href="https://github.com/" aria-label="GitHub">
            <GitFork aria-hidden="true" size={20} />
          </a>
          <a href="#support" aria-label="Support">
            <Sparkles aria-hidden="true" size={20} />
          </a>
          <a href="#news" aria-label="News">
            <UsersRound aria-hidden="true" size={20} />
          </a>
        </div>
        <p>© 2026 Aqua Linux Project. All rights reserved.</p>
        <div className="footer-links" id="support">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}
