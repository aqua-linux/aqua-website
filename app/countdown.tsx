"use client";

import { useEffect, useState } from "react";

const defaultTargetDate = "2027-09-01T00:00:00Z";

function getRemaining(target: number) {
  const delta = Math.max(0, target - Date.now());
  const days = Math.floor(delta / 86_400_000);
  const hours = Math.floor((delta / 3_600_000) % 24);
  const minutes = Math.floor((delta / 60_000) % 60);
  const seconds = Math.floor((delta / 1_000) % 60);

  return { days, hours, minutes, seconds };
}

export function ReleaseCountdown({
  targetDate = defaultTargetDate,
  title = "The wave begins in",
}: {
  targetDate?: string;
  title?: string;
}) {
  const target = new Date(targetDate).getTime();
  const [remaining, setRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateRemaining = () => setRemaining(getRemaining(target));
    const initial = window.setTimeout(updateRemaining, 0);
    const timer = window.setInterval(updateRemaining, 1_000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(timer);
    };
  }, [target]);

  return (
    <div className="release-countdown">
      <p className="countdown-title">{title}</p>
      <div className="countdown-grid">
        <span className="countdown-tile">
          <strong>{remaining.days}</strong>
          <small>days</small>
        </span>
        <span className="countdown-tile">
          <strong>{remaining.hours.toString().padStart(2, "0")}</strong>
          <small>hours</small>
        </span>
        <span className="countdown-tile">
          <strong>{remaining.minutes.toString().padStart(2, "0")}</strong>
          <small>minutes</small>
        </span>
        <span className="countdown-tile">
          <strong>{remaining.seconds.toString().padStart(2, "0")}</strong>
          <small>seconds</small>
        </span>
      </div>
    </div>
  );
}
