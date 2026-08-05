import {
  AeroBand,
  AppShowcase,
  FeatureSection,
  Hero,
  PageShell,
  WhatsNew,
} from "./site";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <WhatsNew />
      <FeatureSection />
      <AeroBand />
      <AppShowcase />
    </PageShell>
  );
}
