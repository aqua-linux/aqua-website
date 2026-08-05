import { ArrowRight, Download, GitFork, ShieldCheck } from "lucide-react";

const menuItems = ["Home", "Features", "Download", "Community", "Docs"];
const cards = [
  ["Fast", "Lightweight Buildroot base for quick boot and smooth daily use."],
  ["Transparent", "A liquid-glass visual direction inspired by clear water and light."],
  ["Open", "A small Linux project built to stay understandable and hackable."],
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Aqua Linux home">
          <img src="/aqua-mark-glass.png" alt="" />
          <span>
            <strong>Aqua</strong>
            <small>Linux</small>
          </span>
        </a>

        <div className="nav-links">
          {menuItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </div>

        <a className="nav-button" href="#download">
          <Download aria-hidden="true" size={18} />
          Download
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Pure. Modern. Transparent.</p>
          <h1>
            Aqua <span>Linux</span>
          </h1>
          <p className="lead">
            A clean, lightweight Linux experience with a calm liquid-glass
            interface direction.
          </p>

          <div className="actions">
            <a className="primary-action" href="#download">
              <Download aria-hidden="true" size={19} />
              Download Now
            </a>
            <a className="secondary-action" href="#features">
              Explore
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>

          <p className="trust">
            <ShieldCheck aria-hidden="true" size={18} />
            Secure - Stable - Open Source
          </p>
        </div>

        <div className="hero-logo" aria-hidden="true">
          <img src="/aqua-symbol-primary.png" alt="" />
        </div>
      </section>

      <section
        className="glass-strip"
        id="features"
        aria-label="Aqua Linux features"
      >
        {cards.map(([title, body]) => (
          <article className="glass-card" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <footer className="footer" id="community">
        <a href="#docs">Docs</a>
        <p>© 2026 Aqua Linux Project</p>
        <a href="https://github.com/" rel="noreferrer">
          <GitFork aria-hidden="true" size={18} />
          GitHub
        </a>
      </footer>
      <span id="docs" className="anchor" aria-hidden="true" />
    </main>
  );
}
