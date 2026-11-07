import { callLink, whatsappDefault } from "../lib/site-data";
import { Icon } from "./icons";

export function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_-18px_rgba(23,50,71,0.35)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand text-base font-semibold text-white active:bg-brand-dark"
          href={callLink}
        >
          <Icon className="size-5" name="phone" />
          Call Now
        </a>
        <a
          className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink text-base font-semibold text-white active:bg-ink-soft"
          href={whatsappDefault}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon className="size-5" name="whatsapp" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
