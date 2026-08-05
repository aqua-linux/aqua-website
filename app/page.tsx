const navItems = ["Overview", "Desktop", "Apps", "Community", "Download"];

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

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="global-nav" aria-label="Primary navigation">
        <a className="brand" href="#overview" aria-label="Aqua Linux home">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-text">Aqua Linux</span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section className="hero" id="overview">
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
                  <div className="dock">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
            <div className="stand" />
          </div>
        </div>

        <div className="download-row" id="download">
          <span>First preview builds</span>
          <a className="price-chip" href="#download">ISO</a>
          <a className="price-chip" href="#download">QEMU</a>
          <a className="download-button" href="#download">Download Aqua</a>
        </div>
      </section>

      <section className="whats-new" id="desktop">
        <span className="aqua-orb" aria-hidden="true">A</span>
        <p className="section-kicker">What Aqua is becoming</p>
        <h2>A calm desktop that feels clear from the first boot.</h2>
        <p>
          Inspired by the approachable structure of desktop Linux sites and the
          careful spacing of classic product pages, Aqua keeps the message short:
          fast base, friendly desktop, open development.
        </p>
      </section>

      <section className="feature-section" id="apps">
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

      <section className="aero-band" id="community">
        <h2>Built in the open, tuned for everyday use.</h2>
        <p>
          Aqua Linux starts small: bootable images, clear recovery tools, and a
          desktop language that can grow without becoming complicated.
        </p>
      </section>

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

      <section className="final-download">
        <span className="aqua-orb" aria-hidden="true">A</span>
        <h2>Download Aqua Linux</h2>
        <p>Simple page. Clear project. Cool Aqua energy.</p>
        <a className="download-button" href="#download">Get Aqua</a>
      </section>

      <footer className="footer">
        <p>Aqua Linux</p>
        <nav aria-label="Footer navigation">
          <a href="#overview">Overview</a>
          <a href="#desktop">Desktop</a>
          <a href="#community">Community</a>
          <a href="#download">Download</a>
        </nav>
      </footer>
    </main>
  );
}
