import { AREAS, CONTACT, WA_DEFAULT, waLink } from "../data";
import { MEDIA } from "../media";
import { ArrowUpRightIcon, ClockIcon, PinIcon, WhatsAppIcon } from "./Icons";

export default function Areas() {
  return (
    <section id="areas" className="bg-cream-50 py-16 sm:py-20 lg:py-24">
      <div className="shell grid items-start gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
        <div>
          <p className="eyebrow eyebrow-line mb-4">Where I work</p>
          <h2 className="display text-[clamp(2rem,4.6vw,3.1rem)] text-ink-900">
            All of Navi Mumbai,
            <br className="hidden sm:block" /> one honest opinion.
          </h2>
          <p className="mt-4 max-w-[29rem] text-[13.5px] leading-[1.8] text-ink-700/70">
            From the established streets of Sanpada and Vashi to the new growth corridors
            of Ulwe and Kharghar — tell me the area, and I&apos;ll tell you what your budget
            really gets you there.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {AREAS.map((area) => {
              const office = area === "Sanpada";
              return (
                <a
                  key={area}
                  href={waLink(`Hello Ravi, I'd like to know more about properties in ${area}, Navi Mumbai.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-[11.5px] font-medium transition-all duration-200 ${
                    office
                      ? "border-gold-500/60 bg-gold-500/12 text-gold-700 hover:bg-gold-500/20"
                      : "border-cream-300 bg-white text-ink-800/80 hover:border-gold-500/50 hover:text-ink-900"
                  }`}
                >
                  {office && <PinIcon className="h-3.5 w-3.5" />}
                  {area}
                  <ArrowUpRightIcon className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
                </a>
              );
            })}
          </div>

          <p className="mt-5 text-[11px] text-ink-700/45">
            Also advising on Panvel, Taloja, Dronagiri and select Thane–Raigad corridors.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-cream-300/80 bg-ink-950">
          <img
            src={MEDIA.skyline}
            alt="Navi Mumbai skyline across the water at sunset"
            loading="lazy"
            className="h-[260px] w-full object-cover opacity-90 sm:h-[300px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-ink-950/15" aria-hidden />

          <div className="relative -mt-16 p-5 sm:p-6">
            <p className="text-[9.5px] font-semibold tracking-[0.22em] text-gold-400 uppercase">
              The office
            </p>
            <p className="mt-2 font-display text-[24px] leading-tight text-cream-50">
              Sanpada (E) · Palm Beach Road
            </p>
            <div className="mt-4 space-y-2 border-t border-white/12 pt-4 text-[11.5px] leading-relaxed text-cream-200/70">
              {CONTACT.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[11px] text-cream-200/55">
              <ClockIcon className="h-3.5 w-3.5 text-gold-400" />
              {CONTACT.hours}
            </div>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn flex-1 border border-white/20 bg-white/5 px-4 py-2.5 text-[11.5px] text-cream-50 hover:border-gold-400/60 hover:bg-white/10"
              >
                <PinIcon className="h-4 w-4 text-gold-400" />
                Get directions
              </a>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn flex-1 bg-wa-600 px-4 py-2.5 text-[11.5px] text-white hover:bg-wa-700"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Message the office
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
