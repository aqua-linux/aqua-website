"use client";

import { useEffect, useMemo, useState } from "react";

const RELEASE_DATE = new Date("2027-01-01T00:00:00+03:00").getTime();
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function calculateParts(now = Date.now()) {
  const remaining = Math.max(0, RELEASE_DATE - now);

  return {
    days: Math.floor(remaining / DAY),
    hours: Math.floor((remaining % DAY) / HOUR),
    minutes: Math.floor((remaining % HOUR) / MINUTE),
    seconds: Math.floor((remaining % MINUTE) / SECOND),
  };
}

function twoDigits(value: number) {
  return String(value).padStart(2, "0");
}

export function ReleaseCountdown() {
  const [parts, setParts] = useState(() => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }));
  const items = useMemo(
    () => [
      ["days", twoDigits(parts.days)],
      ["hours", twoDigits(parts.hours)],
      ["minutes", twoDigits(parts.minutes)],
      ["seconds", twoDigits(parts.seconds)],
    ],
    [parts],
  );

  useEffect(() => {
    const initial = window.setTimeout(() => setParts(calculateParts()), 0);
    const id = window.setInterval(() => setParts(calculateParts()), 1000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(id);
    };
  }, []);

  return (
    <section className="release-countdown" aria-label="First release countdown">
      <div className="countdown-kicker">
        <span />
        <p>First release in</p>
        <span />
      </div>

      <div className="countdown-row">
        {items.map(([label, value], index) => (
          <div className="countdown-group" key={label}>
            <div className="countdown-value">
              <span>{value}</span>
              {index < items.length - 1 ? <b aria-hidden="true">:</b> : null}
            </div>
            <p>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
