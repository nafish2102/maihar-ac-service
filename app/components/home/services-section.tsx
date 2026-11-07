import Image from "next/image";
import { Icon } from "../icons";
import { services, whatsappLink } from "../../lib/site-data";

export function ServicesSection() {
  return (
    <section className="scroll-mt-24 bg-white py-16 sm:py-24" id="services">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.19em] text-brand">
              What we can help with
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
              Repair care for every appliance at home.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted sm:text-base">
            From the AC to the geyser, find the right kind of repair support
            for your home or business.
          </p>
        </div>

        <div className="mt-11 grid gap-x-5 gap-y-8 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article className="group flex flex-col" key={service.title}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-surface">
                <Image
                  alt={service.alt}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  fill
                  loading={index < 4 ? undefined : "lazy"}
                  sizes="(min-width: 1280px) 290px, (min-width: 640px) 45vw, 100vw"
                  src={service.image}
                  style={{ objectPosition: service.position }}
                />
                <span className="absolute left-3 top-3 flex size-9 items-center justify-center rounded-lg bg-white text-brand shadow-sm">
                  <Icon className="size-[18px]" name={service.icon} />
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                {service.description}
              </p>
              <a
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                href={whatsappLink(
                  `Hello, I would like to know more about ${service.title}.`,
                )}
                rel="noopener noreferrer"
                target="_blank"
              >
                Learn more
                <Icon
                  className="size-4 transition-transform group-hover:translate-x-1"
                  name="arrow-right"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
