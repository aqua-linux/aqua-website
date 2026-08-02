"use client";

import { useEffect, useState } from "react";

const targetDate = new Date("2027-01-01T00:00:00+03:00").getTime();

function readRemaining() {
  const diff = Math.max(0, targetDate - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);

  return [days, hours, minutes, seconds].map((value) => String(value).padStart(2, "0"));
}

export function ReleaseCountdown() {
  const [parts, setParts] = useState(["--", "--", "--", "--"]);

  useEffect(() => {
    const update = () => setParts(readRemaining());
    const initial = window.setTimeout(update, 0);
    const timer = window.setInterval(update, 1000);

    return () => {
      window.clearTimeout(initial);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="countdown-panel glass-panel" aria-label="İlk sürüm geri sayımı">
      <p className="panel-label">İlk sürüm geri sayımı</p>
      <div className="countdown-row" suppressHydrationWarning>
        {parts.map((part, index) => (
          <span className="countdown-unit" key={index}>
            <span className="countdown-number">{part}</span>
            <span className="countdown-caption">{["Gün", "Saat", "Dakika", "Saniye"][index]}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
