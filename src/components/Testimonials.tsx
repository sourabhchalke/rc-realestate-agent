import { TESTIMONIALS } from "../data";
import { QuoteIcon, StarIcon } from "./Icons";

export default function Testimonials() {
  return (
    <section className="border-y border-cream-200 bg-white py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow eyebrow-line mb-4">Client stories</p>
            <h2 className="display text-[clamp(2rem,4.6vw,3.1rem)] text-ink-900">
              Trusted by families,
              <br className="hidden sm:block" /> not just clients.
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-cream-200 bg-cream-50 px-4 py-3">
            <p className="font-display text-[34px] leading-none font-semibold text-ink-900">4.9</p>
            <div>
              <div className="flex gap-0.5 text-gold-500">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <p className="mt-1 text-[10.5px] text-ink-700/60">Based on client feedback</p>
            </div>
          </div>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="group flex flex-col rounded-2xl border border-cream-300/80 bg-cream-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:bg-white hover:shadow-[0_24px_50px_-32px_rgba(5,18,29,0.35)] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <QuoteIcon className="h-6 w-6 text-gold-500/50" />
                <div className="flex gap-0.5 text-gold-500">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="h-3 w-3" />
                  ))}
                </div>
              </div>
              <blockquote className="mt-4 flex-1">
                <p className="text-[12.5px] leading-[1.85] text-ink-800/80">&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-cream-300/70 pt-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-[12px] font-semibold text-gold-300">
                  {t.initials}
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-ink-900">{t.name}</p>
                  <p className="mt-0.5 text-[10px] text-ink-700/55">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
