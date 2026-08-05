const menuItems = ["Home", "Features", "Download", "Community", "Docs"];
const cards = [
  ["Fast", "Lightweight base, quick boot, smooth desktop feel."],
  ["Aqua UI", "Glossy colors, soft depth, clear Frutiger Aero energy."],
  ["Open", "Small, understandable, and built in the open."],
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Aqua Linux home">
          <span className="brand-mark" aria-hidden="true">A</span>
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
          Download
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Aqua colored Linux</p>
          <h1>
            Aqua <span>Linux</span>
          </h1>
          <p className="lead">
            A simple Linux project page with glossy colors, clean menus, and a
            cool late-2000s Aqua mood.
          </p>

          <div className="actions">
            <a className="primary-action" href="#download">
              Download Now
            </a>
            <a className="secondary-action" href="#features">
              Explore -&gt;
            </a>
          </div>

          <p className="trust">
            Secure - Stable - Open Source
          </p>
        </div>

        <div className="aqua-badge" aria-hidden="true">
          <span>A</span>
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
          GitHub
        </a>
      </footer>
      <span id="docs" className="anchor" aria-hidden="true" />
    </main>
  );
}
