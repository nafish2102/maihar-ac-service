import Link from "next/link";
import { callLink } from "../lib/site-data";
import { Icon } from "./icons";
import { MobileMenu } from "./mobile-menu";

const navigation = [
  { href: "#services", label: "Services" },
  { href: "#brands", label: "Brands" },
  { href: "#why-us", label: "Why choose us" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <>
      <div className="bg-ink text-white">
        <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center gap-2 px-5 text-center text-xs font-medium tracking-wide sm:px-8">
          <Icon className="size-3.5 shrink-0 text-[#9bd2c8]" name="map-pin" />
          <span>Multi-brand home appliance repair in Maihar</span>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b border-line/80 bg-white/95 backdrop-blur-md">
        <div className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
          <Link
            aria-label="Maihar AC Service Center home"
            className="group flex items-center gap-3"
            href="#home"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-white shadow-sm transition-transform group-hover:-rotate-6">
              <Icon className="size-6" name="snowflake" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[15px] font-bold tracking-[-0.04em] text-ink sm:text-base">
                Maihar AC
              </span>
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Service Center
              </span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 xl:gap-8 lg:flex"
          >
            {navigation.map((item) => (
              <Link
                className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              className="hidden h-11 items-center rounded-full border border-line px-5 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand lg:inline-flex"
              href="#book"
            >
              Book a Service
            </Link>
            <a
              className="inline-flex h-11 items-center gap-2 rounded-full bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark sm:px-5"
              href={callLink}
            >
              <Icon className="size-4" name="phone" />
              Call Now
            </a>
            <MobileMenu items={navigation} />
          </div>
        </div>
      </header>
    </>
  );
}
