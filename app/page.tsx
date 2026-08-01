import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <main className="waitlist-shell">
      <video
        className="background-video"
        src="/aqua-live-wallpaper.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <section className="waitlist-hero" id="home" aria-labelledby="hero-title">
        <div className="identity-panel glass-card">
          <h1 id="hero-title">Aqua Linux</h1>
          <p>
            Estetiğimiz şeffaflıktan, sakinlikten ve kimseyi takip etmemekten geliyor.
          </p>
        </div>

        <aside className="waitlist-panel glass-card" aria-label="Aqua Linux waitlist">
          <WaitlistForm />
        </aside>
      </section>
    </main>
  );
}
