import { STATS } from "../data";

export default function Stats() {
  return (
    <section className="border-b border-cream-300/70 bg-cream-50">
      <div className="shell grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={[
              "relative py-8 lg:py-11",
              i < 2 ? "border-b border-cream-300/80 lg:border-b-0" : "",
              i % 2 === 1 ? "border-l border-cream-300/80 pl-5 sm:pl-8" : "",
              "lg:border-l lg:border-cream-300/80 lg:pl-8",
              i === 0 ? "lg:border-l-0 lg:pl-0" : "",
              i === 3 ? "lg:pr-2" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <p className="flex items-baseline gap-1 font-display text-[34px] leading-none font-semibold text-ink-900 sm:text-[42px]">
              {stat.value}
              {stat.value === "4.9" && (
                <span className="font-sans text-[15px] font-normal text-ink-700/45">/5</span>
              )}
            </p>
            <div className="mt-3 h-px w-7 bg-gold-500" aria-hidden />
            <p className="mt-3 max-w-[190px] text-[11.5px] leading-relaxed text-ink-700/65">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
