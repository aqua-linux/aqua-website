import { ReleaseCountdown } from "../countdown";
import { PageHero, PageShell } from "../site";

export default function DownloadPage() {
  return (
    <PageShell>
      <section className="download-countdown-screen">
        <PageHero
          kicker="Download"
          title="Aqua Linux is on the way."
          copy="We are continuing development toward the Aqua Linux Alpha release, and we expect to publish the first version on August 24, 2027."
        />
        <ReleaseCountdown
          targetDate="2027-08-24T00:00:00Z"
          title="Download opens in"
        />
        <p className="download-follow-up">
          Follow the process or support the project on{" "}
          <a href="https://github.com/aqua-linux">GitHub</a>.
        </p>
      </section>
    </PageShell>
  );
}
