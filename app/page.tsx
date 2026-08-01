import {
  ArrowRight,
  Blocks,
  BookOpen,
  Cpu,
  Download,
  Eye,
  GitFork,
  HardDrive,
  Monitor,
  PanelTop,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  UsersRound,
} from "lucide-react";
import { WaitlistForm } from "./waitlist-form";

const distroSignals = [
  {
    icon: Blocks,
    title: "Independent base",
    body: "Aqua Linux is built on Buildroot with its own rootfs, init path, boot checks, and recovery environment.",
  },
  {
    icon: Monitor,
    title: "Aqua Shell direction",
    body: "The desktop target is a custom Wayland compositor with a Frutiger Aero and liquid-glass visual system.",
  },
  {
    icon: ShieldCheck,
    title: "Small, inspectable core",
    body: "The early system favors clear boot markers, predictable images, and a recovery shell before graphics start.",
  },
  {
    icon: UsersRound,
    title: "Open development",
    body: "The project is shaped in public milestones, docs, contracts, scripts, and reproducible QEMU validation.",
  },
];

const editions = [
  {
    label: "Current",
    title: "Milestone image",
    body: "Bootable QEMU x86_64 image with Buildroot, serial markers, text recovery, and packaged Aqua runtime assets.",
    meta: "For developers",
  },
  {
    label: "Next",
    title: "Graphics foundation",
    body: "DRM/KMS discovery, renderer output, safer graphics probes, and a shell scene moving from plan to pixels.",
    meta: "In progress",
  },
  {
    label: "Future",
    title: "Aqua Desktop Preview",
    body: "A first compositor-hosted desktop preview with wallpaper, dock, launcher, panels, and glass materials.",
    meta: "Not released",
  },
];

const roadmap = [
  ["Now", "Buildroot image, QEMU boot, rootfs contract, renderer command plan"],
  ["Next", "DRM/KMS probe, framebuffer safety, first real renderer output"],
  ["Preview", "Minimal Wayland loop, input path, glass shell surfaces"],
  ["v1", "Feature freeze, installer/image flow, hardware validation, polished Aqua Shell"],
];

const projectLinks = [
  {
    icon: BookOpen,
    title: "Documentation",
    body: "Product plan, milestones, visual references, and liquid-glass notes stay close to the code.",
  },
  {
    icon: TerminalSquare,
    title: "Recovery first",
    body: "The terminal exists as a recovery and developer tool, not as the final product experience.",
  },
  {
    icon: Cpu,
    title: "QEMU target",
    body: "The first development target is x86_64 QEMU. MSI Sword 17 hardware checks come later.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Aqua Linux home">
          <img src="/aqua-mark-glass.png" alt="" />
          <span>
            <strong>Aqua</strong>
            <small>Linux</small>
          </span>
        </a>
        <div className="navlinks">
          <a href="#platform">Platform</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#download">Builds</a>
          <a href="#waitlist">Waitlist</a>
        </div>
        <a className="download-pill" href="#waitlist">
          <Sparkles aria-hidden="true" size={18} />
          Join waitlist
        </a>
      </nav>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Buildroot based independent Linux distro</p>
          <h1 id="hero-title">Aqua Linux</h1>
          <p className="lead">
            A clean Linux distribution in progress, built toward a custom
            Wayland compositor and a skeuomorphic liquid-glass desktop.
          </p>
          <div className="actions">
            <a className="primary-action" href="#waitlist">
              Join the waitlist
              <ArrowRight aria-hidden="true" size={19} />
            </a>
            <a className="secondary-action" href="#download">
              View current build state
              <Download aria-hidden="true" size={18} />
            </a>
          </div>
          <div className="truth-strip" aria-label="Project boundaries">
            <span>Not Ubuntu based</span>
            <span>Not a theme pack</span>
            <span>QEMU x86_64 first</span>
          </div>
        </div>

        <div className="hero-console glass-card" aria-label="Current system status">
          <div className="preview-header">
            <span>Live foundation preview</span>
            <strong>Milestone 1+</strong>
          </div>
          <div className="desktop-preview">
            <img src="/reference-desktop.png" alt="Aqua Linux desktop visual reference" />
          </div>
          <div className="status-grid">
            <div>
              <span>base</span>
              <strong>Buildroot</strong>
            </div>
            <div>
              <span>graphics</span>
              <strong>Plan only</strong>
            </div>
            <div>
              <span>boot</span>
              <strong>QEMU ready</strong>
            </div>
            <div>
              <span>shell</span>
              <strong>Recovery text</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="signal-strip" id="platform" aria-label="Aqua platform pillars">
        {distroSignals.map((item) => {
          const Icon = item.icon;
          return (
            <article className="signal glass-card" key={item.title}>
              <Icon aria-hidden="true" size={30} strokeWidth={1.8} />
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          );
        })}
      </section>

      <section className="split-section">
        <div className="section-copy-block">
          <p className="section-kicker">Open source operating system work</p>
          <h2>Closer to Debian&apos;s independence than a desktop remix.</h2>
          <p>
            Aqua is not trying to dress another distribution with a theme. The
            early work is the operating system foundation: image builds, boot
            contracts, runtime assets, renderer planning, and later the Aqua
            compositor itself.
          </p>
        </div>
        <div className="principle-list glass-card">
          <div>
            <HardDrive aria-hidden="true" size={22} />
            <span>Own root filesystem and image flow</span>
          </div>
          <div>
            <PanelTop aria-hidden="true" size={22} />
            <span>Custom shell and visual system direction</span>
          </div>
          <div>
            <Eye aria-hidden="true" size={22} />
            <span>Readable boot status before polish</span>
          </div>
        </div>
      </section>

      <section className="edition-section" id="download">
        <div className="section-heading">
          <p className="section-kicker">Builds</p>
          <h2>Downloads will follow the engineering milestones.</h2>
          <p>
            The website mirrors the project status clearly: current builds are
            for validation, not a polished desktop release.
          </p>
        </div>
        <div className="edition-grid">
          {editions.map((edition) => (
            <article className="edition-card glass-card" key={edition.title}>
              <span>{edition.label}</span>
              <h3>{edition.title}</h3>
              <p>{edition.body}</p>
              <small>{edition.meta}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="section-heading">
          <p className="section-kicker">Roadmap</p>
          <h2>Simple public stages, no fake release button.</h2>
        </div>
        <div className="roadmap glass-card">
          {roadmap.map(([phase, body]) => (
            <div className="roadmap-row" key={phase}>
              <strong>{phase}</strong>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="waitlist-section" id="waitlist">
        <div className="waitlist-copy">
          <p className="section-kicker">Waitlist</p>
          <h2>Follow the first real Aqua desktop builds.</h2>
          <p>
            Join for milestone notes, preview availability, and hardware
            validation updates. No launch spam, no account requirement.
          </p>
        </div>
        <WaitlistForm />
      </section>

      <section className="project-section">
        {projectLinks.map((item) => {
          const Icon = item.icon;
          return (
            <article className="project-card" key={item.title}>
              <Icon aria-hidden="true" size={24} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          );
        })}
      </section>

      <footer className="footer">
        <a className="footer-brand brand-lockup" href="#home" aria-label="Aqua Linux home">
          <img src="/aqua-mark-glass.png" alt="" />
          <span>
            <strong>Aqua Linux</strong>
            <small>Independent OS project</small>
          </span>
        </a>
        <p>Open source Linux distribution work in progress.</p>
        <div className="footer-links">
          <a href="#platform">Platform</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#waitlist">Waitlist</a>
          <a href="https://github.com/" rel="noreferrer">
            <GitFork aria-hidden="true" size={18} />
            Source
          </a>
        </div>
      </footer>
    </main>
  );
}
