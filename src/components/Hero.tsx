import { CALL_LINK, CONTACT, WA_DEFAULT } from "../data";
import { MEDIA } from "../media";
import { ArrowRightIcon, CheckIcon, PhoneIcon, PinIcon, StarIcon, WhatsAppIcon } from "./Icons";

const HIGHLIGHTS = ["Buy", "Sell", "Rent", "Investment Properties"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950 text-cream-50">
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-gold-500/12 blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-96 rounded-full bg-ink-600/30 blur-[100px]"
        aria-hidden
      />

      <div className="shell relative grid items-center gap-12 pt-12 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-20 lg:pb-20">
        {/* Copy */}
        <div className="animate-rise">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/25 bg-white/[0.04] px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] text-gold-300 uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-400" />
            </span>
            Navi Mumbai · Since 2012
          </div>

          <h1 className="display mt-6 text-[clamp(2.6rem,7.4vw,4.6rem)] text-cream-50">
            Find the address
            <br />
            that <em className="gold-text italic">feels like yours.</em>
          </h1>

          <p className="mt-6 max-w-[30rem] text-[14.5px] leading-[1.75] text-cream-200/70 sm:text-[15px]">
            Honest property advice in Navi Mumbai — for buying, selling, renting and
            investing. Curated options, transparent pricing and one person who stays
            accountable from the first visit to the final handover.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={CALL_LINK} className="btn-call w-full sm:w-auto">
              <PhoneIcon className="h-4.5 w-4.5" />
              Call {CONTACT.phoneDisplay}
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-4.5 w-4.5 text-wa-500" />
              WhatsApp Ravi
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5 text-gold-400">
                {[0, 1, 2, 3, 4].map((s) => (
                  <StarIcon key={s} className="h-3.5 w-3.5" />
                ))}
              </div>
              <span className="text-[12px] text-cream-200/70">
                <strong className="font-semibold text-cream-50">4.9</strong> · 500+ families advised
              </span>
            </div>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <div className="flex items-center gap-1.5 text-[12px] text-cream-200/70">
              <CheckIcon className="h-3.5 w-3.5 text-gold-400" />
              Zero-pressure consultations
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-6">
            {HIGHLIGHTS.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && <span className="h-3 w-px bg-gold-500/40" aria-hidden />}
                <span className="text-[11px] font-medium tracking-[0.13em] text-cream-200/65 uppercase">
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-[460px] animate-fade lg:max-w-none">
          <div
            className="absolute -inset-x-3 -top-3 bottom-8 rounded-[28px] border border-gold-500/25"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-ink-900 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
            <img
              src={MEDIA.houseDusk}
              alt="A warmly lit modern home at dusk, representing the properties Ravi Chalke advises on"
              className="h-[340px] w-full object-cover object-center sm:h-[420px] lg:h-[500px]"
              loading="eager"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[9.5px] font-semibold tracking-[0.22em] text-gold-400 uppercase">
                    Now available
                  </p>
                  <p className="mt-1.5 font-display text-[21px] leading-tight text-cream-50 sm:text-[23px]">
                    Sea-facing homes on
                    <br />
                    Palm Beach Road
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-[11.5px] text-cream-200/65">
                    <PinIcon className="h-3.5 w-3.5 text-gold-400" />
                    Sanpada (E) · Navi Mumbai
                  </p>
                </div>
                <a
                  href="#properties"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950 transition-transform hover:scale-105"
                  aria-label="View featured properties"
                >
                  <ArrowRightIcon className="h-4.5 w-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Floating consultant card */}
          <div className="absolute -bottom-7 -left-2 w-[248px] rounded-xl border border-cream-300/80 bg-cream-50 p-3.5 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.65)] sm:-left-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-[15px] font-semibold text-gold-300">
                RC
              </div>
              <div className="min-w-0">
                <p className="text-[12.5px] font-semibold text-ink-900">Ravi Chalke</p>
                <p className="text-[10px] text-ink-700/60">Real Estate Consultant</p>
              </div>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wa-600 text-white transition-transform hover:scale-105"
                aria-label="Message Ravi Chalke on WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-cream-300/70 pt-2.5">
              <span className="text-[9.5px] font-semibold tracking-[0.14em] text-gold-600 uppercase">
                Available now
              </span>
              <span className="flex items-center gap-1 text-[10.5px] text-ink-700/60">
                <span className="h-1.5 w-1.5 rounded-full bg-wa-500" />
                Replies in minutes
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Location marquee */}
      <div className="relative border-t border-white/10 bg-ink-950/60 py-3.5">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {[...MEDIA.marquee, ...MEDIA.marquee].map((area, i) => (
            <span
              key={`${area}-${i}`}
              className="flex items-center gap-8 text-[10.5px] font-medium tracking-[0.22em] text-cream-200/45 uppercase"
            >
              {area}
              <span className="h-1 w-1 rotate-45 bg-gold-500/60" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
