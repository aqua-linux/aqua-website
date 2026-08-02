import { WaitlistForm } from "./waitlist-form";

export default function Home() {
  return (
    <main className="boot-shell">
      <section className="boot-center" aria-label="Aqua Linux waitlist">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="boot-logo"
          src="/boot-splash-full-logo.png"
          alt="Aqua Linux"
        />
        <div className="waitlist-panel" aria-label="Aqua Linux waitlist">
          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
