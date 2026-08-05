"use client";

import { useEffect, useState } from "react";

const target = new Date("2027-09-01T00:00:00Z").getTime();

function getRemaining() {
  const delta = Math.max(0, target - Date.now());
  const days = Math.floor(delta / 86_400_000);
  const hours = Math.floor((delta / 3_600_000) % 24);
  const minutes = Math.floor((delta / 60_000) % 60);

  return { days, hours, minutes };
}

export function ReleaseCountdown() {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="release-countdown">
      <p>First release in</p>
      <div className="countdown-grid">
        <span>
          <strong>{remaining.days}</strong>
          <small>days</small>
        </span>
        <span>
          <strong>{remaining.hours.toString().padStart(2, "0")}</strong>
          <small>hours</small>
        </span>
        <span>
          <strong>{remaining.minutes.toString().padStart(2, "0")}</strong>
          <small>min</small>
        </span>
      </div>
    </div>
  );
}
