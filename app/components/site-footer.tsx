import Link from "next/link";
import { brands, business, mapsLink, services } from "../lib/site-data";
import { Icon } from "./icons";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#brands", label: "Brands" },
  { href: "#why-us", label: "Why choose us" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const heading = "text-xs font-semibold uppercase tracking-[0.16em] text-[#9bd2c8]";
const linkClass =
  "inline-flex min-h-9 items-center text-[15px] text-white/75 transition-colors hover:text-white";

export function SiteFooter() {
  return (
    <footer className="bg-[#102939] pb-24 text-white md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_1fr_0.8fr_1.1fr] lg:gap-14 lg:py-16">
        <div>
          <Link className="inline-flex items-center gap-3" href="#home">
            <span className="flex size-10 items-center justify-center rounded-lg bg-white/10 text-[#a2d8ce]">
              <Icon className="size-5" name="snowflake" />
            </span>
            <span className="text-base font-bold tracking-tight">
              {business.name}
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-[15px] leading-7 text-white/70">
            Independent multi-brand home appliance repair for homes and
            businesses in Maihar.
          </p>
          <address className="mt-6 space-y-4 text-[15px] not-italic leading-7 text-white/80">
            <p className="flex gap-3">
              <Icon className="mt-1 size-4 shrink-0 text-[#9bd2c8]" name="map-pin" />
              <span>
                {business.address}.{" "}
                <a
                  className="font-medium text-[#a8dfd5] hover:text-white"
                  href={mapsLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open in Google Maps
                </a>
              </span>
            </p>
            <p className="flex gap-3">
              <Icon className="mt-1 size-4 shrink-0 text-[#9bd2c8]" name="phone" />
              <span className="font-semibold">
                {business.phones.map((phone, index) => (
                  <span key={phone.tel}>
                    {index > 0 && " / "}
                    <a className="hover:text-white" href={`tel:${phone.tel}`}>
                      {phone.display}
                    </a>
                  </span>
                ))}
              </span>
            </p>
            <p className="flex gap-3">
              <Icon className="mt-1 size-4 shrink-0 text-[#9bd2c8]" name="clock" />
              <span>{business.hours ?? "Call to confirm availability"}</span>
            </p>
          </address>
        </div>

        <nav aria-label="Services">
          <p className={heading}>Our services</p>
          <ul className="mt-4">
            {services.map((service) => (
              <li key={service.title}>
                <Link className={linkClass} href="#services">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer">
          <p className={heading}>Quick links</p>
          <ul className="mt-4">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link className={linkClass} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={heading}>Brands we repair</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {brands.map((brand) => (
              <li
                className="rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/80"
                key={brand}
              >
                {brand}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-6 text-white/55">
            Independent repair service. Not an authorised service center of any
            listed brand.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-white/55 sm:px-8 md:flex-row md:items-center md:justify-between">
          <span>{business.name}, Maihar, Madhya Pradesh</span>
          <span>Photographs are representative stock images (Pexels).</span>
        </div>
      </div>
    </footer>
  );
}
