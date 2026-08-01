"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function WaitlistForm() {
  const [state, setState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, interest }),
      });
      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Could not join the waitlist.");
      }

      form.reset();
      setState("success");
      setMessage("You are on the Aqua Linux waitlist.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Could not join the waitlist.");
    }
  }

  return (
    <form className="waitlist-form glass-card" onSubmit={submit}>
      <label htmlFor="email">Email address</label>
      <div className="input-row">
        <Mail aria-hidden="true" size={20} />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
        />
      </div>

      <label htmlFor="interest">What should we send you?</label>
      <select id="interest" name="interest" defaultValue="desktop-preview">
        <option value="desktop-preview">Desktop preview updates</option>
        <option value="builds">Milestone build notes</option>
        <option value="hardware">Hardware validation notes</option>
        <option value="contributor">Contributor updates</option>
      </select>

      <button type="submit" disabled={state === "submitting"}>
        <Send aria-hidden="true" size={18} />
        {state === "submitting" ? "Joining..." : "Join waitlist"}
      </button>

      <p className={`form-message ${state === "error" ? "is-error" : ""}`} role="status">
        {message || "Stored for Aqua Linux milestone communication only."}
      </p>
    </form>
  );
}
