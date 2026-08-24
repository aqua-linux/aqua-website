"use client";

import { usePathname } from "next/navigation";
import { navItems } from "./nav-items";

const primaryNavItems = navItems;

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav className="nav-links" aria-label="Primary navigation">
      {primaryNavItems.map(([item, href]) => {
        const isActive = href === "/" ? pathname === "/" : pathname === href;

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
