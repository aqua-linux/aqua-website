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
      <RealClock />
      <section className="waitlist-hero" id="home" aria-label="Aqua Linux waitlist">
        <aside className="waitlist-panel" aria-label="Aqua Linux waitlist">
          <WaitlistForm />
        </aside>
      </section>
    </main>
  );
}
