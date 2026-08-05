import { AeroBand, PageHero, PageShell } from "../site";

export default function CommunityPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Community"
        title="Open by default"
        copy="Aqua is built as a small, understandable Linux project where design, system work, and tooling can evolve in public."
      />
      <AeroBand />
      <section className="community-panel">
        <article>
          <h2>Contribute</h2>
          <p>Help shape the desktop language, test boot images, or improve the Buildroot foundation.</p>
        </article>
        <article>
          <h2>Follow progress</h2>
          <p>Track milestones, previews, recovery tools, and compositor experiments as the project grows.</p>
        </article>
      </section>
    </PageShell>
  );
}
