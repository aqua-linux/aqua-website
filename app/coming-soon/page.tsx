import { ArrowRight } from "lucide-react";
import { GithubMark, PageHero, PageShell } from "../site";

export default function ComingSoonPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Coming soon"
        title="This part is still taking shape."
        copy="Forums, documentation, contribution guides, and detailed news pages are being prepared alongside the Aqua Linux Alpha work."
      />
      <section className="coming-soon-panel">
        <div>
          <h2>Follow progress on GitHub</h2>
          <p>
            We are keeping the public work centered around the Aqua Linux
            organization while the first release is prepared.
          </p>
        </div>
        <a className="primary-cta" href="https://github.com/aqua-linux">
          <GithubMark />
          Open GitHub
          <ArrowRight size={15} />
        </a>
      </section>
    </PageShell>
  );
}
