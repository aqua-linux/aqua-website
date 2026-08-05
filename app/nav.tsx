"use client";

import { usePathname } from "next/navigation";
import { navItems } from "./nav-items";

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
