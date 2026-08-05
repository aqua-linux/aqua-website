import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("defines the Aqua Linux product site content", async () => {
  const [page, layout, css, site, desktop, apps, community, download] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/site.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/desktop/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/apps/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/community/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/download/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /Aqua Linux - Buildroot Based Independent Distro/);
  assert.match(page, /Hero/);
  assert.match(site, /aqua-wordmark-glass\.png/);
  assert.match(site, /aqua-mark-glass\.png/);
  assert.match(site, /Thoughtful, capable, and open computing/);
  assert.match(site, /A lightweight Linux project/);
  assert.match(site, /Friendly desktop/);
  assert.match(site, />Download</);
  assert.doesNotMatch(site, /href="\/download">Download Aqua|ISO|QEMU|Get Aqua|First preview builds/);
  assert.match(desktop, /Aqua Desktop/);
  assert.match(apps, /Aqua Apps/);
  assert.match(community, /Open by default/);
  assert.match(download, /Preview builds/);
  assert.match(css, /\.appbar/);
  assert.match(css, /\.appbar-inner/);
  assert.match(css, /\.subpage-hero/);
  assert.match(css, /\.community-panel/);
  assert.match(css, /#34363b/);
  assert.match(css, /#17191f/);
  assert.match(site, /"Desktop", "\/desktop"/);
  assert.match(site, /"Apps", "\/apps"/);
  assert.match(site, /"Community", "\/community"/);
  assert.match(site, /"Download", "\/download"/);
  assert.doesNotMatch(page, /WaitlistForm|AquariumCard|RealClock/);
  assert.doesNotMatch(page, /Skeuomorphic|Saf\. Şeffaf\. Güvenli|Aqua Linux, sadelik|Email address/);
  assert.doesNotMatch(page, /Estetiğimiz şeffaflıktan/);
  assert.doesNotMatch(page, /identity-panel|glass-card|landing-shell|glass-panel|aquarium/);
  assert.doesNotMatch(page, /boot-splash-full-logo\.png/);
  assert.doesNotMatch(page, /Roadmap|Downloads will follow|Simple public stages|Platform|Not a theme pack|Buildroot based/);
  assert.doesNotMatch(css, /reef-background|aquarium-stage|glass-panel|Orbitron/);
  assert.doesNotMatch(page + layout, /Your site is taking shape|Building your site|codex-preview/i);
});
