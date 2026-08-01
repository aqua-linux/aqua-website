import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <main className="waitlist-shell">
      <video
        className="background-video"
        src="/aqua-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <header className="minimal-topbar" aria-label="Aqua Linux">
        <a className="brand" href="#home" aria-label="Aqua Linux home">
          <img src="/aqua-full-logo-glow.png" alt="Aqua Linux" />
        </a>
      </header>

      <section className="waitlist-hero" id="home" aria-labelledby="hero-title">
        <aside className="waitlist-panel glass-card" aria-label="Aqua Linux waitlist">
          <div className="panel-head">
            <img src="/aqua-full-logo-glow.png" alt="Aqua Linux" />
          </div>
          <h1 id="hero-title">Aqua Linux</h1>
          <WaitlistForm />
        </aside>
      </section>
    </main>
  );
}
