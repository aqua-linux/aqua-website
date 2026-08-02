import { RealClock } from "./real-clock";
import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <main className="waitlist-shell">
      <video
        className="background-video"
        src="/website-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <h1 className="sr-only">Aqua Linux</h1>
      <section className="brand-editorial" aria-label="Aqua Linux introduction">
        <div className="brand-lockup">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-mark"
            src="/aqua-mark-glass.png"
            alt=""
            aria-hidden="true"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-wordmark"
            src="/aqua-wordmark-glass.png"
            alt="Aqua Linux"
          />
        </div>
        <p className="editorial-kicker">Independent Buildroot distro</p>
        <p className="editorial-title">
          Frutiger Aero ve skeuomorfizm estetiğini Linux gücü ile birleştirdik.
          <span>Saf. Şeffaf. Güvenli.</span>
        </p>
      </section>
      <RealClock />
      <section className="waitlist-hero" id="home" aria-label="Aqua Linux waitlist">
        <aside className="waitlist-panel" aria-label="Aqua Linux waitlist">
          <WaitlistForm />
        </aside>
      </section>
    </main>
  );
}
