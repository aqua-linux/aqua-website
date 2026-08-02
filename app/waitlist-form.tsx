"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

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
    const interest = "waitlist";

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
      setMessage("Joined.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Could not join the waitlist.");
    }
  }

  return (
    <form className="waitlist-form" onSubmit={submit}>
      <p className="waitlist-title">Bekleme listesine katılın</p>
      <div className="input-row">
        <Mail aria-hidden="true" size={20} />
        <input
          id="email"
          name="email"
          type="email"
          aria-label="Email address"
          placeholder="E-posta adresinizi girin"
          required
          autoComplete="email"
        />
        <button type="submit" disabled={state === "submitting"} aria-label="Join waitlist">
          <ArrowRight aria-hidden="true" size={18} />
        </button>
      </div>

      <p className={`form-message ${state === "error" ? "is-error" : ""}`} role="status">
        {state === "submitting"
          ? "Kaydediliyor..."
          : message || "Kişisel bilgileriniz güvende. Spam gönderilmez."}
      </p>
    </form>
  );
}
