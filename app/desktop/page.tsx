import { Editions, PageHero, PageShell, WhatsNew } from "../site";

export default function DesktopPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Desktop"
        title="Aqua Desktop"
        copy="A calm, readable desktop direction with glossy 2D controls, practical defaults, and a lightweight base."
      />
      <WhatsNew />
      <Editions />
    </PageShell>
  );
}
