import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("defines the Aqua Linux product site content", async () => {
  const [page, layout, css, site, hero, nav, navItems, countdown, desktop, apps, community, download] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/site.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/hero.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/nav.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/nav-items.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/countdown.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/desktop/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/apps/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/community/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/download/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /Aqua Linux - Light\. Fast\. Fluid\./);
  assert.match(layout, /site\.webmanifest/);
  assert.match(layout, /favicon\.ico/);
  assert.match(layout, /favicon-16x16\.png/);
  assert.match(layout, /favicon-32x32\.png/);
  assert.match(layout, /apple-touch-icon\.png/);
  assert.match(page, /Hero/);
  assert.match(site, /aqua-icon-black\.png/);
  assert.match(site, /aqua-mark-glass\.png/);
  assert.doesNotMatch(hero, /Simple\. Stable\. Secure\./);
  assert.match(hero, /A modern Linux for everyone\./);
  assert.match(hero, /aqua-hero-laptop-dock\.png/);
  assert.doesNotMatch(site, /<h2>Everything you need, already included\.<\/h2>/);
  assert.match(css, /aqua-app-icons-sprite\.png/);
  assert.match(css, /\.app-icon-terminal/);
  assert.match(css, /\.app-icon-camera/);
  assert.match(site, /title: "Calendar"/);
  assert.doesNotMatch(site, /<h2>We are here to help<\/h2>/);
  assert.match(site, /Latest updates/);
  assert.match(site, /Fast & Efficient/);
  assert.match(css, /features-sprite\.png/);
  assert.match(css, /\.fast/);
  assert.match(css, /background-position: -288px 0/);
  assert.match(site, /feature-icon/);
  assert.match(site, /appbar-download/);
  assert.match(site, />Download</);
  assert.doesNotMatch(hero, /ReleaseCountdown/);
  assert.doesNotMatch(hero, /bluewave-hero-laptop-front\.png|bluewave-hero-laptop\.png/);
  assert.doesNotMatch(hero, /hero-aero-globe\.jpg|hero-night\.jpg|hero-lagoon\.jpg|hero-meadow\.jpg/);
  assert.doesNotMatch(css, /bluewave-lower-hero\.png/);
  assert.doesNotMatch(hero, /download-row/);
  assert.match(countdown, /The wave begins in/);
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
  assert.match(css, /\.hero-device/);
  assert.doesNotMatch(css, /\.laptop-render|\.device/);
  assert.match(css, /\.support-panel/);
  assert.match(css, /\.applications-section/);
  assert.match(css, /\.news-section/);
  assert.doesNotMatch(css, /\.hero::before|\.hero::after/);
  assert.doesNotMatch(css, /--hero-wallpaper/);
  assert.match(css, /background: var\(--dark\);/);
  assert.match(css, /\.appbar \{[\s\S]*background: transparent;/);
  assert.match(css, /\.appbar-download/);
  assert.match(css, /\.appbar-actions/);
  assert.match(nav, /aria-current/);
  assert.match(nav, /primaryNavItems/);
  assert.match(navItems, /"Home", "\/"/);
  assert.match(navItems, /"What we offer\?", "\/#features"/);
  assert.match(navItems, /"Applications", "\/#applications"/);
  assert.match(navItems, /"Support", "\/#support"/);
  assert.match(navItems, /"News", "\/#news"/);
  assert.doesNotMatch(page, /WaitlistForm|AquariumCard|RealClock/);
  assert.doesNotMatch(page, /Skeuomorphic|Saf\. Şeffaf\. Güvenli|Aqua Linux, sadelik|Email address/);
  assert.doesNotMatch(page, /Estetiğimiz şeffaflıktan/);
  assert.doesNotMatch(page, /identity-panel|glass-card|landing-shell|glass-panel|aquarium/);
  assert.doesNotMatch(page, /boot-splash-full-logo\.png/);
  assert.doesNotMatch(page, /Roadmap|Downloads will follow|Simple public stages|Platform|Not a theme pack|Buildroot based/);
  assert.doesNotMatch(css, /reef-background|aquarium-stage|glass-panel|Orbitron/);
  assert.doesNotMatch(page + layout, /Your site is taking shape|Building your site|codex-preview/i);
});
