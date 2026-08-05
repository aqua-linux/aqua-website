"use client";

import { usePathname } from "next/navigation";

const navItems = [
  ["Overview", "/"],
  ["Desktop", "/desktop"],
  ["Apps", "/apps"],
  ["Community", "/community"],
  ["Download", "/download"],
];

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav className="nav-links" aria-label="Primary navigation">
      {navItems.map(([item, href]) => {
        const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);

        return (
          <a
            className={isActive ? "active" : undefined}
            href={href}
            key={item}
            aria-current={isActive ? "page" : undefined}
          >
            {item}
          </a>
        );
      })}
    </nav>
  );
}

export { navItems };
