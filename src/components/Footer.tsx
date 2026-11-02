import { AREAS, CALL_LINK, CONTACT, NAV_LINKS, SERVICES, WA_DEFAULT } from "../data";
import { ArrowRightIcon, Logo, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-cream-100">
      {/* Closing CTA */}
      <div className="shell pt-14 pb-10 sm:pt-16">
        <div className="relative overflow-hidden rounded-2xl border border-gold-500/25 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div
            className="pointer-events-none absolute -top-24 -right-12 h-64 w-64 rounded-full bg-gold-500/15 blur-[70px]"
            aria-hidden
          />
          <div className="relative">
            <p className="text-[9.5px] font-semibold tracking-[0.24em] text-gold-400 uppercase">
              Ready when you are
            </p>
            <h2 className="display mt-3 text-[clamp(1.8rem,4.2vw,2.7rem)] text-cream-50">
              Your next address is
              <br className="hidden sm:block" /> one call away.
            </h2>
            <p className="mt-2.5 max-w-md text-[12px] leading-relaxed text-cream-200/60">
              No obligation, no pressure. Just a straightforward conversation about what
              you need and what is genuinely available.
            </p>
          </div>
          <div className="relative mt-6 flex shrink-0 flex-col gap-2.5 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
            <a href={CALL_LINK} className="btn-call px-6 py-3.5">
              <PhoneIcon className="h-4.5 w-4.5" />
              Call {CONTACT.phoneDisplay}
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-wa-500/40 bg-wa-500/12 px-6 py-3.5 text-white hover:bg-wa-500/20"
            >
              <WhatsAppIcon className="h-4.5 w-4.5 text-wa-500" />
              WhatsApp Ravi
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Ravi Chalke — back to top">
              <Logo className="h-11 w-12" />
              <span>
                <span className="block font-display text-[24px] leading-none font-semibold tracking-wide text-cream-50">
                  RAVI CHALKE
                </span>
                <span className="mt-1.5 block text-[8px] font-semibold tracking-[0.26em] text-gold-400 uppercase">
                  Real Estate Consultant
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[11.5px] leading-relaxed text-cream-200/55">
              Independent property consultant in Navi Mumbai, helping families and
              investors buy, sell, rent and invest with clarity since 2012.
            </p>
            <p className="mt-4 text-[10px] font-semibold tracking-[0.18em] text-gold-400/80 uppercase">
              Buy · Sell · Rent · Investment
            </p>
            <div className="mt-5 flex gap-2">
              <a href={CALL_LINK} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream-100 transition-colors hover:border-gold-400 hover:text-gold-300" aria-label="Call Ravi Chalke">
                <PhoneIcon className="h-4 w-4" />
              </a>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream-100 transition-colors hover:border-wa-500 hover:text-wa-500"
                aria-label="WhatsApp Ravi Chalke"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream-100 transition-colors hover:border-gold-400 hover:text-gold-300"
                aria-label="Email Ravi Chalke"
              >
                <MailIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] text-cream-200/45 uppercase">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[11.5px] text-cream-200/70 transition-colors hover:text-gold-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] text-cream-200/45 uppercase">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.key}>
                  <a href="#services" className="group flex items-center gap-1 text-[11.5px] text-cream-200/70 transition-colors hover:text-gold-300">
                    {service.short}
                    <ArrowRightIcon className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-70" />
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-[10px] font-semibold tracking-[0.2em] text-cream-200/45 uppercase">Hours</h3>
            <p className="mt-3 text-[11.5px] leading-relaxed text-cream-200/70">{CONTACT.hours}</p>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] text-cream-200/45 uppercase">Get in touch</h3>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a href={CALL_LINK} className="flex items-start gap-2.5 text-[11.5px] text-cream-200/75 transition-colors hover:text-gold-300">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-2.5 text-[11.5px] break-all text-cream-200/75 transition-colors hover:text-gold-300">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-[11.5px] leading-relaxed text-cream-200/75 transition-colors hover:text-gold-300"
                >
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span>
                    {CONTACT.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell pt-6 pb-24 md:pb-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10.5px] text-cream-200/45">
              © {year} Ravi Chalke · Real Estate Consultant · Navi Mumbai. All rights reserved.
            </p>
            <p className="text-[10px] text-cream-200/35">
              Areas served: {AREAS.slice(0, 6).join(", ")} &amp; more
            </p>
          </div>
          <p className="mt-3 max-w-4xl text-[9.5px] leading-relaxed text-cream-200/35">
            Disclaimer: Property prices, availability, dimensions and images shown on this
            website are indicative and for general information only. They do not constitute
            an offer or guarantee. Buyers and tenants are advised to independently verify
            title, approvals and all documents before making any payment. Brokerage and
            terms are agreed in writing before a transaction.
          </p>
        </div>
      </div>
    </footer>
  );
}
