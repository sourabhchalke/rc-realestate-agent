import { CALL_LINK, CONTACT, WA_DEFAULT } from "../data";
import { MEDIA } from "../media";
import {
  CheckCircleIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  StarIcon,
  WhatsAppIcon,
} from "./Icons";

const CREDENTIALS = [
  "Resident of Navi Mumbai, dealing here since 2012",
  "Direct owner & builder network across the city",
  "Support with loans, registration and handover",
  "Transparent brokerage, agreed in writing upfront",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="shell grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        {/* Images */}
        <div className="relative mx-auto w-full max-w-[480px] lg:mx-0">
          <div className="absolute -top-4 -left-4 h-28 w-28 border-t border-l border-gold-500/40" aria-hidden />
          <div className="absolute -right-4 -bottom-4 h-28 w-28 border-r border-b border-gold-500/40" aria-hidden />

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={MEDIA.keys}
              alt="A property consultant handing over a set of house keys to a happy client"
              loading="lazy"
              className="h-[380px] w-full object-cover sm:h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" aria-hidden />
            <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/15 bg-ink-950/55 p-3.5 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <PinIcon className="h-4 w-4 shrink-0 text-gold-400" />
                <p className="text-[11px] leading-snug text-cream-100/85">
                  Shop No. 6, Datta Ganesh CHS,
                  <br />
                  Sector 1, Sanpada (E) — Palm Beach Road
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -top-5 right-4 rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 shadow-[0_18px_40px_-24px_rgba(5,18,29,0.5)] sm:-right-6">
            <div className="flex items-center gap-1 text-gold-500">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} className="h-3 w-3" />
              ))}
            </div>
            <p className="mt-1.5 font-display text-[22px] leading-none font-semibold text-ink-900">
              4.9 <span className="text-[11px] font-sans font-normal text-ink-700/55">/ 5</span>
            </p>
            <p className="mt-1 text-[9.5px] tracking-[0.1em] text-ink-700/55 uppercase">Client rating</p>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="eyebrow eyebrow-line mb-4">Meet your consultant</p>
          <h2 className="display text-[clamp(2rem,4.4vw,3rem)] text-ink-900">
            Local knowledge.
            <br />
            A very <em className="gold-text italic">personal</em> approach.
          </h2>

          <p className="mt-5 text-[13.5px] leading-[1.8] text-ink-700/75">
            Navi Mumbai is not one market — it is a collection of neighbourhoods, each
            with its own price logic, building quality and paperwork quirks. After more
            than a decade here, I know the difference between a good flat and a good buy.
          </p>
          <p className="mt-3 text-[13.5px] leading-[1.8] text-ink-700/75">
            Most of my work comes from people who were referred by a past client. That is
            the standard I work to: clear advice, realistic numbers and only the options
            that genuinely suit you.
          </p>

          <blockquote className="mt-6 border-l-2 border-gold-500 pl-4">
            <p className="font-display text-[20px] leading-snug text-ink-900 sm:text-[22px]">
              &ldquo;A property is a family decision. It deserves honesty, not a sales pitch.&rdquo;
            </p>
            <footer className="mt-2 text-[10px] font-semibold tracking-[0.2em] text-gold-600 uppercase">
              Ravi Chalke
            </footer>
          </blockquote>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {CREDENTIALS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[11.5px] leading-relaxed text-ink-800/80">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3 border-t border-cream-200 pt-6 sm:flex-row">
            <a href={CALL_LINK} className="btn bg-ink-900 px-5 py-3 text-[12.5px] text-cream-50 hover:bg-ink-800">
              <PhoneIcon className="h-4 w-4 text-gold-400" />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-wa-600/30 px-5 py-3 text-[12.5px] text-ink-900 hover:border-wa-600/60 hover:bg-wa-500/5"
            >
              <WhatsAppIcon className="h-4 w-4 text-wa-600" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Value bar */}
      <div className="shell mt-14">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-cream-200 bg-cream-200 sm:grid-cols-3">
          {[
            {
              icon: ShieldIcon,
              title: "Verified paperwork",
              body: "Title, approvals and society documents reviewed before money moves.",
            },
            {
              icon: StarIcon,
              title: "Realistic valuations",
              body: "Market-backed pricing — no inflated numbers to win a listing.",
            },
            {
              icon: PinIcon,
              title: "Street-level network",
              body: "Builders, societies and owners across Navi Mumbai, not just portals.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-cream-50 p-5">
              <div className="flex items-center gap-2.5">
                <item.icon className="h-4.5 w-4.5 text-gold-600" />
                <h3 className="text-[12.5px] font-semibold tracking-wide text-ink-900">{item.title}</h3>
              </div>
              <p className="mt-2 text-[11.5px] leading-relaxed text-ink-700/60">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
