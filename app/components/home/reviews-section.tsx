import { reviews } from "../../lib/site-data";

// Hidden until genuine reviews are added to `reviews` in lib/site-data.ts.
export function ReviewsSection() {
  if (reviews.length === 0) return null;

  return (
    <section className="scroll-mt-24 bg-white py-16 sm:py-24" id="reviews">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.19em] text-brand">
            Customer reviews
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
            What our customers say.
          </h2>
        </div>
        <ul className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li
              className="rounded-xl border border-line bg-white p-6"
              key={`${review.name}-${review.text}`}
            >
              <p className="text-sm leading-7 text-ink-soft">“{review.text}”</p>
              <p className="mt-5 text-sm font-semibold text-ink">{review.name}</p>
              <p className="mt-0.5 text-xs text-muted">{review.source}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
