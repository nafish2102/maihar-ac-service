import { faqs } from "../../lib/site-data";
import { Icon } from "../icons";

export function FaqSection() {
  return (
    <section className="scroll-mt-24 bg-surface py-16 sm:py-24" id="faq">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.19em] text-brand">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
            Questions about appliance repair in Maihar.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted sm:text-base">
            Can’t find your answer? Call or WhatsApp us and we will be happy
            to help.
          </p>
        </div>

        <div className="divide-y divide-line rounded-xl border border-line bg-white">
          {faqs.map((faq) => (
            <details className="group px-5 sm:px-6" key={faq.q}>
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-[15px] font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.q}
                <Icon
                  className="size-5 shrink-0 text-brand transition-transform group-open:rotate-180"
                  name="chevron-down"
                />
              </summary>
              <p className="pb-5 pr-8 text-sm leading-6 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
