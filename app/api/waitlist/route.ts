import { eq } from "drizzle-orm";
import { getDb } from "../../../db";
import { waitlist } from "../../../db/schema";

function normalizeEmail(value: unknown) {
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

function normalizeInterest(value: unknown) {
  return typeof value === "string" && value.trim()
    ? value.trim().slice(0, 80)
    : "desktop-preview";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function routeError(error: unknown) {
  const message = error instanceof Error ? error.message : "Unexpected waitlist error";
  if (message.includes("no such table") || message.includes("waitlist")) {
    return "Waitlist storage is not ready yet. Generate and apply the D1 migration before accepting signups.";
  }

  return message;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      email?: string;
      interest?: string;
    };
    const email = normalizeEmail(payload.email);
    const interest = normalizeInterest(payload.interest);

    if (!isEmail(email)) {
      return Response.json({ error: "Enter a valid email address." }, { status: 400 });
    }

    const db = getDb();
    const [existing] = await db
      .select()
      .from(waitlist)
      .where(eq(waitlist.email, email))
      .limit(1);

    if (existing) {
      return Response.json({ status: "already-joined" });
    }

    await db.insert(waitlist).values({ email, interest });
    return Response.json({ status: "joined" }, { status: 201 });
  } catch (error) {
    return Response.json({ error: routeError(error) }, { status: 500 });
  }
}
