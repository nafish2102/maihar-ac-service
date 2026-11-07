import Image from "next/image";
import { connection } from "next/server";
import { Suspense } from "react";
import { readGallery } from "../../lib/gallery-store";

// Stock photography (Pexels licence). Not photos of our completed jobs, and
// kept visually and textually separate from genuine business photos, which are
// managed from /admin and shown in "From our workshop" below.
const stock = [
  { file: "gallery-ac-servicing", position: "50% 30%", alt: "Hands working on an outdoor air conditioner unit", label: "AC servicing" },
  { file: "gallery-freezer-repair", position: "50% 35%", alt: "Two technicians repairing a freezer", label: "Refrigeration repair" },
  { file: "gallery-laundry", position: "50% 55%", alt: "Two washing machines in a bright laundry room", label: "Washing machines" },
  { file: "gallery-microwave-repair", position: "50% 35%", alt: "Technician repairing a red microwave oven", label: "Microwave oven repair" },
  { file: "gallery-ac-electronics", position: "50% 50%", alt: "Testing an air conditioner control board with a multimeter", label: "Electronics testing" },
  { file: "gallery-technician-tools", position: "50% 28%", alt: "Technician opening an appliance panel with tools", label: "Technician at work" },
];

const sizes = "(min-width: 1280px) 400px, (min-width: 640px) 45vw, 100vw";

export function GallerySection() {
  return (
    <section className="scroll-mt-24 bg-surface py-16 sm:py-24" id="gallery">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.19em] text-brand">
            Repair gallery
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-4xl">
            The appliances we work on every day.
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted">
            Illustrative stock photography. These images are not photos of our
            completed jobs.
          </p>
        </div>

        <ul className="mt-10 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {stock.map((item, index) => (
            <li key={item.file}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                  <Image
                    alt={item.alt}
                    className="object-cover"
                    fill
                    loading={index < 3 ? undefined : "lazy"}
                    sizes={sizes}
                    src={`/images/${item.file}.jpg`}
                    style={{ objectPosition: item.position }}
                  />
                </div>
                <figcaption className="mt-3 text-base font-semibold tracking-tight text-ink">
                  {item.label}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <Suspense fallback={null}>
          <WorkshopPhotos />
        </Suspense>
      </div>
    </section>
  );
}

async function WorkshopPhotos() {
  await connection(); // read the latest uploads on every request
  const photos = await readGallery();
  if (photos.length === 0) return null;

  return (
    <div className="mt-16 border-t border-line pt-12">
      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-ink">
        From our workshop
      </h3>
      <p className="mt-2 text-sm text-muted">
        Photos of our own work in and around Maihar.
      </p>
      <ul className="mt-8 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <li key={photo.id}>
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                <Image
                  alt={photo.caption || "Our repair work in Maihar"}
                  className="object-cover"
                  fill
                  loading="lazy"
                  sizes={sizes}
                  src={`/uploads/${photo.file}`}
                />
              </div>
              {photo.caption && (
                <figcaption className="mt-3 text-base font-semibold tracking-tight text-ink">
                  {photo.caption}
                </figcaption>
              )}
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
