import Image from "next/image";
import Link from "next/link";
import { callLink, whatsappDefault } from "../../lib/site-data";
import { Icon } from "../icons";

const facts = [
  "Multi-brand repair",
  "Homes and businesses",
  "Call, WhatsApp or book online",
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* Mirrored so the technician sits on the right, away from the text. */}
      <Image
        alt="Technician servicing an outdoor air conditioner with a manifold gauge"
        className="-z-20 -scale-x-100 object-cover object-[30%_40%]"
        fill
        priority
        quality={80}
        sizes="100vw"
        src="/images/hero-ac-technician.jpg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(16,41,57,0.92)_0%,rgba(16,41,57,0.8)_55%,rgba(16,41,57,0.62)_100%)] lg:bg-[linear-gradient(90deg,rgba(16,41,57,0.96)_0%,rgba(16,41,57,0.84)_45%,rgba(16,41,57,0.1)_100%)]"
      />

      <div className="mx-auto flex min-h-[600px] max-w-7xl flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[680px] lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.19em] text-[#9bd2c8] sm:text-sm">
            Home appliance repair in Maihar
          </p>
          <h1 className="mt-5 text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.5rem]">
            Expert Repair Services for{" "}
            <span className="text-[#7fd0c3]">All Your Home Appliances</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
            Reliable multi-brand repair and maintenance services for AC,
            refrigerators, washing machines, microwave ovens and more in
            Maihar.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-base font-semibold text-ink shadow-lg shadow-black/20 transition-colors hover:bg-[#eaf5f2]"
              href={callLink}
            >
              <Icon className="size-5 text-brand" name="phone" />
              Call Now
            </a>
            <a
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-[#1a8f84] px-8 text-base font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#16776e]"
              href={whatsappDefault}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon className="size-5" name="whatsapp" />
              WhatsApp Us
            </a>
            <Link
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border-2 border-white/60 px-8 text-base font-semibold text-white transition-colors hover:bg-white/10"
              href="#book"
            >
              <Icon className="size-5" name="calendar" />
              Book a Service
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-6">
            {facts.map((fact) => (
              <li
                className="flex items-center gap-2 text-sm font-medium text-white/90"
                key={fact}
              >
                <Icon className="size-4 text-[#7fd0c3]" name="check" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
