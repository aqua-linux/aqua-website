import { ReleaseCountdown } from "./release-countdown";

export default function Home() {
  return (
    <main className="release-shell">
      <section className="release-center" aria-label="Aqua Linux first release">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="release-logo"
          src="/aqua-full-logo-glow.png"
          alt="Aqua Linux"
        />

        <h1>
          <span>Modern Linux,</span>
          <strong>beautifully reimagined.</strong>
        </h1>

        <p className="release-copy">
          Frutiger Aero aesthetics meet
          <br />
          modern Linux engineering.
        </p>

        <ReleaseCountdown />
      </section>
    </main>
  );
}
