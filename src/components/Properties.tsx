import { useMemo, useState } from "react";
import { CONTACT, PROPERTIES, type PropertyType, waLink } from "../data";
import { cn } from "../utils/cn";
import {
  AreaIcon,
  ArrowRightIcon,
  BathIcon,
  BedIcon,
  BuildingIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "./Icons";

const FILTERS = ["All", "Buy", "Rent", "Investment"] as const;
type Filter = (typeof FILTERS)[number];

const typeStyles: Record<PropertyType, string> = {
  Buy: "bg-gold-500 text-ink-950",
  Rent: "bg-cream-50 text-ink-900",
  Investment: "bg-ink-900 text-gold-300",
};

export default function Properties() {
  const [filter, setFilter] = useState<Filter>("All");

  const list = useMemo(
    () => (filter === "All" ? PROPERTIES : PROPERTIES.filter((p) => p.type === filter)),
    [filter]
  );

  const count = (f: Filter) =>
    f === "All" ? PROPERTIES.length : PROPERTIES.filter((p) => p.type === f).length;

  return (
    <section id="properties" className="bg-cream-50 py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow eyebrow-line mb-4">A look at the market</p>
            <h2 className="display text-[clamp(2rem,4.6vw,3.1rem)] text-ink-900">
              Handpicked properties,
              <br className="hidden sm:block" /> not just listings.
            </h2>
          </div>
          <p className="max-w-[19rem] text-[13px] leading-relaxed text-ink-700/65">
            A small, deliberately curated set — each one visited and verified before
            it reaches this page.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-cream-300/80 py-4">
          <div className="no-scrollbar -mx-1 flex max-w-full items-center gap-1.5 overflow-x-auto px-1">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-[12.5px] font-medium transition-all duration-200",
                  filter === f
                    ? "bg-ink-900 text-cream-50 shadow-sm"
                    : "text-ink-800/70 hover:bg-cream-100 hover:text-ink-900"
                )}
              >
                {f}
                <span
                  className={cn(
                    "flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9.5px] font-semibold",
                    filter === f ? "bg-gold-500 text-ink-950" : "bg-cream-200 text-ink-700/70"
                  )}
                >
                  {count(f)}
                </span>
              </button>
            ))}
          </div>
          <a
            href={waLink(
              "Hello Ravi, I couldn't find exactly what I need on your website. Can you send me a custom shortlist for Navi Mumbai?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            Request a custom shortlist
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Grid */}
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((property) => {
            const BedsIcon = property.category === "Commercial" ? BuildingIcon : BedIcon;
            const message = `Hello Ravi, I'm interested in "${property.title}" in ${property.locality} (${property.type}, ${property.price}). Is it still available? Could you share full details and site-visit options?`;
            return (
              <article
                key={property.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-cream-300/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-[0_28px_55px_-32px_rgba(5,18,29,0.42)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                  <img
                    src={property.image}
                    alt={`${property.title} in ${property.locality}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent"
                    aria-hidden
                  />
                  <span
                    className={cn(
                      "absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-[9.5px] font-semibold tracking-[0.14em] uppercase shadow-sm",
                      typeStyles[property.type]
                    )}
                  >
                    For {property.type === "Buy" ? "Sale" : property.type}
                  </span>
                  {property.tag && (
                    <span className="absolute top-3.5 right-3.5 rounded-full border border-white/30 bg-ink-950/55 px-2.5 py-1 text-[9.5px] font-medium tracking-wide text-cream-50 backdrop-blur-sm">
                      {property.tag}
                    </span>
                  )}
                  <p className="absolute bottom-3.5 left-4 flex items-center gap-1.5 text-[11px] font-medium text-cream-50/90">
                    <PinIcon className="h-3.5 w-3.5 text-gold-300" />
                    {property.locality}
                  </p>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-[26px] leading-none font-semibold text-ink-900">
                        {property.price}
                      </p>
                      <p className="mt-1.5 text-[10px] tracking-wide text-ink-700/50">{property.priceNote}</p>
                    </div>
                    <span className="mt-1 shrink-0 rounded-full bg-cream-100 px-2.5 py-1 text-[9.5px] font-medium tracking-wide text-ink-700/70 uppercase">
                      {property.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-[15px] leading-snug font-semibold text-ink-900">
                    {property.title}
                  </h3>

                  <div className="mt-3.5 grid grid-cols-3 gap-1 border-t border-cream-200 pt-3.5">
                    <span className="flex items-center gap-1.5 text-[10.5px] text-ink-700/70">
                      <BedsIcon className="h-3.5 w-3.5 text-gold-600" />
                      {property.beds}
                    </span>
                    <span className="flex items-center gap-1.5 border-x border-cream-200 px-2 text-[10.5px] text-ink-700/70">
                      <BathIcon className="h-3.5 w-3.5 shrink-0 text-gold-600" />
                      {property.baths}
                    </span>
                    <span className="flex items-center gap-1.5 pl-1.5 text-[10.5px] text-ink-700/70">
                      <AreaIcon className="h-3.5 w-3.5 text-gold-600" />
                      {property.area}
                    </span>
                  </div>

                  <div className="mt-auto flex items-center gap-2 pt-4">
                    <a
                      href={waLink(message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn flex-1 bg-wa-600 px-3 py-2.5 text-[11.5px] text-white hover:bg-wa-700"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      Enquire on WhatsApp
                    </a>
                    <a
                      href={`tel:${CONTACT.phoneTel}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition-colors hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-700"
                      aria-label={`Call about ${property.title}`}
                    >
                      <PhoneIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 flex items-start gap-2 text-[10.5px] leading-relaxed text-ink-700/45">
          <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
          Prices, availability and specifications are indicative and subject to change.
          A complete document set is shared during due diligence for every transaction.
        </p>
      </div>
    </section>
  );
}
