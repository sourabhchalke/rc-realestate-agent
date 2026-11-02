import { CALL_LINK, CONTACT, WA_DEFAULT } from "../data";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function FloatingActions() {
  return (
    <>
      {/* Desktop / tablet floating actions */}
      <div className="fixed right-5 bottom-6 z-40 hidden flex-col items-end gap-2.5 md:flex">
        <a
          href={CALL_LINK}
          className="group flex items-center gap-2 rounded-full border border-cream-300 bg-white py-2 pr-4 pl-2 text-ink-900 shadow-[0_14px_30px_-16px_rgba(5,18,29,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/60"
          aria-label={`Call Ravi Chalke on ${CONTACT.phoneDisplay}`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-900 text-gold-400">
            <PhoneIcon className="h-4 w-4" />
          </span>
          <span className="text-[11px] font-semibold">{CONTACT.phoneDisplay}</span>
        </a>
        <a
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-wa-600 text-white shadow-[0_16px_34px_-14px_rgba(18,140,126,0.85)] transition-transform duration-300 hover:scale-105"
          aria-label="Chat with Ravi Chalke on WhatsApp"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-wa-500/35" aria-hidden />
          <WhatsAppIcon className="relative h-7 w-7" />
          <span className="pointer-events-none absolute right-full mr-3 hidden rounded-lg bg-ink-950 px-3 py-1.5 text-[10.5px] whitespace-nowrap text-cream-50 opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cream-300 bg-cream-50/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <div className="flex gap-2">
          <a
            href={CALL_LINK}
            className="btn flex-1 border border-ink-900/15 bg-white py-3 text-[12.5px] text-ink-900"
          >
            <PhoneIcon className="h-4 w-4 text-gold-600" />
            Call now
          </a>
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex-1 bg-wa-600 py-3 text-[12.5px] text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
