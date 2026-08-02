import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("defines the Aqua Linux first release page content", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);
  const countdown = await readFile(new URL("../app/release-countdown.tsx", import.meta.url), "utf8");

  assert.match(layout, /Aqua Linux - Buildroot Based Independent Distro/);
  assert.match(page, /release-shell/);
  assert.match(page, /aqua-full-logo-glow\.png/);
  assert.match(page, /Modern Linux,/);
  assert.match(page, /beautifully reimagined\./);
  assert.match(page, /Frutiger Aero aesthetics meet/);
  assert.match(page, /modern Linux engineering\./);
  assert.match(page, /ReleaseCountdown/);
  assert.match(countdown, /First release in/);
  assert.match(countdown, /2027-01-01/);
  assert.doesNotMatch(page, /WaitlistForm|AquariumCard|RealClock/);
  assert.doesNotMatch(page, /aqua-mark-glass\.png|aqua-wordmark-glass\.png/);
  assert.doesNotMatch(page, /Skeuomorphic|Saf\. Şeffaf\. Güvenli|Aqua Linux, sadelik|Email address/);
  assert.doesNotMatch(page, /Estetiğimiz şeffaflıktan/);
  assert.doesNotMatch(page, /identity-panel|glass-card|landing-shell|glass-panel|aquarium/);
  assert.doesNotMatch(page, /boot-splash-full-logo\.png/);
  assert.doesNotMatch(page, /Roadmap|Downloads will follow|Simple public stages|Platform|Not a theme pack|Buildroot based/);
  assert.match(css, /\.release-shell/);
  assert.match(css, /\.release-logo/);
  assert.match(css, /\.release-countdown/);
  assert.doesNotMatch(css, /reef-background|aquarium-stage|glass-panel|Orbitron/);
  assert.doesNotMatch(page + layout, /Your site is taking shape|Building your site|codex-preview/i);
});
