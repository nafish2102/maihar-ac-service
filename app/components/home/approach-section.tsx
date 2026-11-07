import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "../icons";

const values: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "wrench",
    title: "Multi-brand appliance repair",
    description: "One local team for your AC, fridge, washing machine and more.",
  },
  {
    icon: "headset",
    title: "Professional customer support",
    description: "Call or WhatsApp us and talk through the problem with a real person.",
  },
  {
    icon: "file-text",
    title: "Transparent service information",
    description: "Clear explanations to help you understand the next step.",
  },
  {
    icon: "calendar",
    title: "Convenient booking",
    description: "Book by phone, WhatsApp, or the simple form on this page.",
  },
  {
    icon: "building",
    title: "Residential and commercial",
    description: "Care for appliances in homes, shops and offices alike.",
  },
];

export function ApproachSection() {
  return (
    <section
      className="scroll-mt-24 overflow-hidden bg-ink text-white"
      id="why-us"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[640px]">
          <Image
            alt="Technician inspecting an outdoor air conditioning unit"
            className="origin-top scale-[1.35] object-cover object-top"
            fill
            quality={75}
            sizes="(min-width: 1024px) 50vw, 100vw"
            src="/images/why-technician-inspection.jpg"
          />
        </div>

        <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24 xl:pr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <p className="text-xs font-bold uppercase tracking-[0.19em] text-[#9bd2c8]">
            Why choose us
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
            Good service should feel as comfortable as the air.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
            Appliance problems can be stressful. We keep the service the easy
            part: clear communication, practical advice and respect for your
            time and space.
          </p>

          <ul className="mt-9 divide-y divide-white/10 border-y border-white/10">
            {values.map((value) => (
              <li className="flex gap-4 py-4" key={value.title}>
                <Icon className="mt-0.5 size-5 shrink-0 text-[#9bd2c8]" name={value.icon} />
                <div>
                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    {value.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#a8dfd5] transition-colors hover:text-white"
            href="#contact"
          >
            Serving Maihar and nearby homes
            <Icon className="size-4" name="arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
