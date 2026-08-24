import {
  ApplicationsSection,
  FeatureSection,
  Hero,
  PageShell,
  WaitlistPanel,
  WhatsNew,
} from "./site";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <FeatureSection />
      <ApplicationsSection />
      <WaitlistPanel />
      <WhatsNew />
    </PageShell>
  );
}
