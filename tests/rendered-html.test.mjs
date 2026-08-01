import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("defines the Aqua Linux distro page content", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /Aqua Linux - Buildroot Based Independent Distro/);
  assert.match(page, /Buildroot based independent Linux distro/);
  assert.match(page, /Not Ubuntu based/);
  assert.match(page, /Not a theme pack/);
  assert.match(page, /Join the waitlist/);
  assert.match(page, /Aqua Shell direction/);
  assert.match(css, /\.glass-card/);
  assert.match(css, /backdrop-filter:\s*blur/);
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
