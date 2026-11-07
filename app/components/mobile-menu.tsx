"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./icons";

type Item = { href: string; label: string };

export function MobileMenu({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand/40 hover:text-brand"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <Icon className="size-5" name={open ? "close" : "menu"} />
      </button>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-76px)] overflow-y-auto border-b border-line bg-white px-5 pb-6 pt-2 shadow-[0_24px_40px_-24px_rgba(23,50,71,0.35)] sm:px-8"
          id="mobile-navigation"
        >
          <ul className="divide-y divide-line">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  className="flex min-h-14 items-center justify-between text-base font-medium text-ink"
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <Icon className="size-4 text-muted" name="arrow-right" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand text-base font-semibold text-white transition-colors hover:bg-brand-dark"
            href="#book"
            onClick={() => setOpen(false)}
          >
            <Icon className="size-5" name="calendar" />
            Book a Service
          </Link>
        </nav>
      )}
    </div>
  );
}
