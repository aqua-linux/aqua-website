import { AppShowcase, FeatureSection, PageHero, PageShell } from "../site";

export default function AppsPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Apps"
        title="Aqua Apps"
        copy="Small system tools, recovery utilities, and desktop surfaces shaped around clarity instead of excess."
      />
      <AppShowcase />
      <FeatureSection />
    </PageShell>
  );
}
