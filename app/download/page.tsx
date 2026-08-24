import { ReleaseCountdown } from "../countdown";
import { PageHero, PageShell } from "../site";

export default function DownloadPage() {
  return (
    <PageShell>
      <section className="download-countdown-screen">
        <PageHero
          kicker="Download"
          title="Aqua Linux is on the way."
          copy="The first public download will open when the one-year countdown reaches zero."
        />
        <ReleaseCountdown
          targetDate="2027-08-24T00:00:00Z"
          title="Download opens in"
        />
      </section>
    </PageShell>
  );
}
