"use client";

import { useEffect, useState } from "react";

function readClock() {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).formatToParts(now);

  return {
    time: `${parts.find((part) => part.type === "hour")?.value ?? "00"}:${
      parts.find((part) => part.type === "minute")?.value ?? "00"
    }:${parts.find((part) => part.type === "second")?.value ?? "00"}`,
    period: parts.find((part) => part.type === "dayPeriod")?.value ?? "",
  };
}

export function RealClock() {
  const [clock, setClock] = useState({ time: "--:--:--", period: "" });

  useEffect(() => {
    const update = () => setClock(readClock());
    const initial = window.setTimeout(update, 0);
    const timer = window.setInterval(update, 1000);

    return () => {
      window.clearTimeout(initial);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="clock-overlay"
      aria-label={`Current time ${clock.time} ${clock.period}`}
      suppressHydrationWarning
    >
      <span className="clock-time">{clock.time}</span>
      <span className="clock-period">{clock.period}</span>
    </div>
  );
}
