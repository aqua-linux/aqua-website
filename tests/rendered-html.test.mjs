import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("defines the Aqua Linux waitlist page content", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /Aqua Linux - Buildroot Based Independent Distro/);
  assert.match(page, /website-background\.mp4/);
  assert.match(page, /RealClock/);
  assert.match(page, /waitlist-panel/);
  assert.doesNotMatch(page, /Estetiğimiz şeffaflıktan/);
  assert.doesNotMatch(page, /identity-panel|glass-card/);
  assert.doesNotMatch(page, /aqua-full-logo-glow\.png/);
  assert.doesNotMatch(page, /Roadmap|Downloads will follow|Simple public stages|Platform|Not a theme pack|Buildroot based/);
  assert.match(css, /\.clock-overlay/);
  assert.match(css, /\.background-video/);
  assert.doesNotMatch(page + layout, /Your site is taking shape|Building your site|codex-preview/i);
});

test("includes waitlist persistence wiring", async () => {
  const [schema, hosting, route, migration] = await Promise.all([
    readFile(new URL("../db/schema.ts", import.meta.url), "utf8"),
    readFile(new URL("../.openai/hosting.json", import.meta.url), "utf8"),
    readFile(new URL("../app/api/waitlist/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../drizzle/0000_melted_the_spike.sql", import.meta.url), "utf8"),
  ]);

  assert.match(schema, /sqliteTable\(\s*"waitlist"/);
  assert.match(schema, /uniqueIndex\("idx_waitlist_email"\)/);
  assert.match(hosting, /"d1":\s*"DB"/);
  assert.match(route, /export async function POST/);
  assert.match(route, /already-joined|joined/);
  assert.match(migration, /CREATE TABLE `waitlist`/);
});
