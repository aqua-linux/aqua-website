import {
  ApplicationsSection,
  FeatureSection,
  Hero,
  PageShell,
  SectionDivider,
  WaitlistPanel,
  WhatsNew,
} from "./site";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <SectionDivider id="features" eyebrow="What we offer?" title="Simple, stable tools for everyday computing." />
      <FeatureSection />
      <SectionDivider id="applications" eyebrow="Applications" title="Everything you need, already included." />
      <ApplicationsSection />
      <SectionDivider id="support" eyebrow="Support" title="We are here to help." />
      <WaitlistPanel />
      <SectionDivider id="news" eyebrow="News" title="Latest updates from Aqua Linux." />
      <WhatsNew />
    </PageShell>
  );
}
