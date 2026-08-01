import { Cpu, Droplets, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { WaitlistForm } from "./waitlist-form";

const statusItems = [
  {
    icon: Layers3,
    label: "Buildroot base",
    value: "Independent distro",
  },
  {
    icon: Droplets,
    label: "Aqua Shell",
    value: "Liquid glass direction",
  },
  {
    icon: Cpu,
    label: "First target",
    value: "QEMU x86_64",
  },
];

export default function Home() {
  return (
    <main className="waitlist-shell">
      <header className="minimal-topbar" aria-label="Aqua Linux">
        <a className="brand" href="#home" aria-label="Aqua Linux home">
          <img src="/aqua-mark-glass.png" alt="" />
        </a>
        <span className="build-pill">
          <ShieldCheck aria-hidden="true" size={15} />
          Not a theme pack
        </span>
      </header>

      <section className="waitlist-hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Buildroot based Linux in progress</p>
          <h1 id="hero-title">Aqua Linux</h1>
          <p className="lead">
            A real independent Linux distribution moving toward a custom
            Wayland compositor and a frosted liquid-glass desktop.
          </p>
          <div className="status-row" aria-label="Project status">
            {statusItems.map((item) => {
              const Icon = item.icon;
              return (
                <div className="status-chip" key={item.label}>
                  <Icon aria-hidden="true" size={18} />
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="waitlist-panel glass-card" aria-label="Aqua Linux waitlist">
          <div className="panel-head">
            <img src="/aqua-mark-glass.png" alt="" />
            <div>
              <span>Early access</span>
              <strong>Join the Aqua waitlist</strong>
            </div>
            <Sparkles aria-hidden="true" size={21} />
          </div>
          <p>
            Get milestone notes when the first boot, splash, compositor, and
            desktop previews are ready to test.
          </p>
          <WaitlistForm />
        </aside>
      </section>
    </main>
  );
}
