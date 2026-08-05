import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("defines the Aqua Linux product site content", async () => {
  const [page, layout, css, site, nav, countdown, desktop, apps, community, download] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/site.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/nav.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/countdown.tsx", import.meta.url), "utf8"),
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
  assert.match(site, /ReleaseCountdown/);
  assert.match(site, /desktop-dock/);
  assert.match(countdown, /First release in/);
  assert.match(countdown, /2027-09-01/);
  assert.match(countdown, /seconds/);
  assert.match(countdown, /minutes/);
  assert.doesNotMatch(countdown, /dk|sn/);
  assert.doesNotMatch(site, /href="\/download">Download Aqua|ISO|QEMU|Get Aqua|First preview builds/);
  assert.match(desktop, /Aqua Desktop/);
  assert.match(apps, /Aqua Apps/);
  assert.match(community, /Open by default/);
  assert.match(download, /Preview builds/);
  assert.match(css, /\.appbar/);
  assert.match(css, /\.appbar-inner/);
  assert.match(css, /\.subpage-hero/);
  assert.match(css, /\.community-panel/);
  assert.match(css, /\.release-countdown/);
  assert.match(css, /\.desktop-dock/);
  assert.match(css, /appbar-top-strip\.png/);
  assert.match(css, /background-repeat: repeat-x/);
  assert.match(css, /background-size: auto 100%/);
  assert.match(css, /color: #bbb/);
  assert.match(css, /text-shadow: 0 -1px 1px rgba\(0, 0, 0, 0\.75\)/);
  assert.match(nav, /aria-current/);
  assert.match(css, /border-top: 1px solid rgba\(255, 255, 255, 0\.26\)/);
  assert.match(nav, /"Desktop", "\/desktop"/);
  assert.match(nav, /"Apps", "\/apps"/);
  assert.match(nav, /"Community", "\/community"/);
  assert.match(nav, /"Download", "\/download"/);
  assert.doesNotMatch(page, /WaitlistForm|AquariumCard|RealClock/);
  assert.doesNotMatch(page, /Skeuomorphic|Saf\. Şeffaf\. Güvenli|Aqua Linux, sadelik|Email address/);
  assert.doesNotMatch(page, /Estetiğimiz şeffaflıktan/);
  assert.doesNotMatch(page, /identity-panel|glass-card|landing-shell|glass-panel|aquarium/);
  assert.doesNotMatch(page, /boot-splash-full-logo\.png/);
  assert.doesNotMatch(page, /Roadmap|Downloads will follow|Simple public stages|Platform|Not a theme pack|Buildroot based/);
  assert.doesNotMatch(css, /reef-background|aquarium-stage|glass-panel|Orbitron/);
  assert.doesNotMatch(page + layout, /Your site is taking shape|Building your site|codex-preview/i);
});
