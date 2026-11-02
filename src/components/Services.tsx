import { SERVICES, WA_DEFAULT, waLink } from "../data";
import {
  ArrowUpRightIcon,
  CheckIcon,
  HomeIcon,
  KeyIcon,
  TrendingIcon,
  WhatsAppIcon,
} from "./Icons";

const ICONS = {
  buy: HomeIcon,
  sell: KeyIcon,
  rent: ArrowUpRightIcon,
  invest: TrendingIcon,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-cream-100 py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <div className="flex flex-col gap-6 border-b border-cream-300 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow eyebrow-line mb-4">What I do</p>
            <h2 className="display text-[clamp(2rem,4.6vw,3.1rem)] text-ink-900">
              Every property decision,
              <br className="hidden sm:block" /> handled end to end.
            </h2>
          </div>
          <div className="max-w-sm lg:text-right">
            <p className="text-[13.5px] leading-relaxed text-ink-700/70">
              You get one point of contact for the entire journey — from the first
              shortlist to the final signature. No handoffs, no runaround.
            </p>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-4"
            >
              <WhatsAppIcon className="h-4 w-4 text-wa-600" />
              Ask me anything first
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.key];
            return (
              <article
                key={service.key}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-cream-300/80 bg-cream-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:bg-white hover:shadow-[0_24px_50px_-30px_rgba(5,18,29,0.45)] sm:p-6"
              >
                <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-gold-600 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/25 bg-gold-500/10 text-gold-600 transition-colors group-hover:bg-gold-500 group-hover:text-ink-950">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-[13px] tracking-wider text-ink-700/25">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[23px] leading-tight font-semibold text-ink-900">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-[12.5px] leading-[1.7] text-ink-700/65">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-cream-300/80 pt-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[11.5px] text-ink-800/80">
                      <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-600" />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[11.5px] font-semibold tracking-wide text-ink-900 uppercase transition-colors hover:text-gold-600"
                >
                  Start here
                  <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
