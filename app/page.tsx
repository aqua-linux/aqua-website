import { AquariumCard } from "./aquarium-card";
import { ReleaseCountdown } from "./release-countdown";
import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <main className="landing-shell">
      <h1 className="sr-only">Aqua Linux</h1>

      <section className="landing-grid" id="home" aria-label="Aqua Linux">
        <div className="hero-copy">
          <div className="brand-lockup">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-mark" src="/aqua-mark-glass.png" alt="" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="brand-wordmark" src="/aqua-wordmark-glass.png" alt="Aqua Linux" />
          </div>

          <p className="editorial-title">Frutiger Aero & Skeuomorphic Linux</p>
          <p className="editorial-proof">Saf. Şeffaf. Güvenli.</p>
          <p className="editorial-body">
            Aqua Linux, sadelik ve estetiği bir araya getirir. Şeffaf arayüzü,
            güvenli yapısı ve güçlü altyapısıyla yeni nesil bir Linux deneyimi sunar.
          </p>

          <div className="feature-strip" aria-label="Aqua Linux qualities">
            <span>Güvenli</span>
            <span>Hafif</span>
            <span>Estetik</span>
          </div>

          <div className="waitlist-panel glass-panel" aria-label="Aqua Linux waitlist">
            <WaitlistForm />
          </div>
        </div>

        <aside className="right-stack" aria-label="Aqua Linux status">
          <ReleaseCountdown />
          <AquariumCard />
        </aside>
      </section>
    </main>
  );
}
