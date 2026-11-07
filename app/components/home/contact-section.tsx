import {
  business,
  callLink,
  mapsEmbed,
  mapsLink,
  whatsappDefault,
} from "../../lib/site-data";
import { Icon, type IconName } from "../icons";
import { BookingForm } from "./booking-form";

const label = "text-xs font-semibold uppercase tracking-[0.14em] text-white/65";

function Row({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#a8dfd5]">
        <Icon className="size-5" name={icon} />
      </span>
      <div>
        <dt className={label}>{title}</dt>
        <dd className="mt-1.5">{children}</dd>
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="scroll-mt-24 bg-white py-16 sm:py-24" id="contact">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.19em] text-brand">
            Contact and booking
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
            Talk to us about your appliance.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-xl bg-brand px-6 py-9 text-white sm:px-10 sm:py-11">
            <p className="text-lg font-semibold">{business.name}</p>

            <dl className="mt-8 space-y-6">
              <Row icon="phone" title="Phone">
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  {business.phones.map((phone) => (
                    <a
                      className="inline-flex min-h-11 items-center text-2xl font-semibold tracking-tight hover:underline sm:text-[1.7rem]"
                      href={`tel:${phone.tel}`}
                      key={phone.tel}
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </Row>
              <Row icon="map-pin" title="Address">
                <address className="text-base not-italic leading-7">
                  {business.address}.
                </address>
              </Row>
              <Row icon="clock" title="Working hours">
                <p className="text-base leading-7">
                  {business.hours ?? "Call or WhatsApp us to confirm availability."}
                </p>
              </Row>
            </dl>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              <a
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white text-base font-semibold text-brand-dark transition-colors hover:bg-[#eaf5f2]"
                href={callLink}
              >
                <Icon className="size-5" name="phone" />
                Call Now
              </a>
              <a
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink text-base font-semibold text-white transition-colors hover:bg-ink-soft"
                href={whatsappDefault}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="size-5" name="whatsapp" />
                WhatsApp
              </a>
              <a
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-white/50 text-base font-semibold text-white transition-colors hover:bg-white/10"
                href={mapsLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="size-5" name="map-pin" />
                Directions
              </a>
            </div>
          </div>

          <div
            className="scroll-mt-28 rounded-xl border border-line bg-surface p-6 sm:p-10"
            id="book"
          >
            <p className="text-xs font-bold uppercase tracking-[0.19em] text-brand">
              Book a service
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink">
              Tell us what needs repairing.
            </h3>
            <div className="mt-6">
              <BookingForm />
            </div>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-line">
          <iframe
            className="block h-[320px] w-full sm:h-[380px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapsEmbed}
            title="Map showing Maihar AC Service Center, Housing Board Colony, near Simran School, Maihar"
          />
        </div>
      </div>
    </section>
  );
}
