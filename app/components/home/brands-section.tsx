import { brands } from "../../lib/site-data";
import { Icon } from "../icons";

export function BrandsSection() {
  return (
    <section className="scroll-mt-24 bg-surface py-16 sm:py-20" id="brands">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.19em] text-brand">
            Brands we repair
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
            Independent repair for the brands you already own.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
            We are an independent multi-brand repair provider. Bring us your
            appliance, whichever brand it is.
          </p>
          <p className="mt-6 flex items-start gap-2.5 border-l-2 border-brand pl-4 text-xs leading-5 text-muted">
            <Icon className="mt-0.5 size-4 shrink-0 text-brand" name="shield-check" />
            <span>
              Not an authorised service center of any brand listed. Brand names
              belong to their respective owners.
            </span>
          </p>
        </div>

        {/* Text wordmarks keep every brand identical in size and avoid logo-usage issues. */}
        <div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {brands.map((brand) => (
              <li
                className="flex h-16 items-center justify-center rounded-lg border border-line bg-white px-3 text-center text-base font-semibold tracking-tight text-ink-soft"
                key={brand}
              >
                {brand}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">
            Have a different brand? Call or WhatsApp us and we will let you
            know if we can help.
          </p>
        </div>
      </div>
    </section>
  );
}
