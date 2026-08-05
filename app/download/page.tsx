import { DownloadPanel, Editions, PageHero, PageShell } from "../site";

export default function DownloadPage() {
  return (
    <PageShell>
      <PageHero
        kicker="Download"
        title="Preview builds"
        copy="Start with the desktop preview, test in QEMU, or keep the recovery image nearby for system work."
      />
      <Editions />
      <DownloadPanel />
    </PageShell>
  );
}
