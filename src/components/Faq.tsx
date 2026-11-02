import { useState } from "react";
import { CALL_LINK, FAQS, WA_DEFAULT } from "../data";
import { cn } from "../utils/cn";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-cream-100 py-16 sm:py-20 lg:py-24">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-[132px] lg:self-start">
          <p className="eyebrow eyebrow-line mb-4">Good to know</p>
          <h2 className="display text-[clamp(2rem,4.6vw,3rem)] text-ink-900">
            The questions
            <br /> I hear most.
          </h2>
          <p className="mt-4 max-w-[22rem] text-[13px] leading-[1.8] text-ink-700/70">
            If your question isn&apos;t here, just ask. There is no such thing as a silly
            question when it comes to property.
          </p>

          <div className="mt-6 rounded-2xl border border-cream-300/80 bg-cream-50 p-5">
            <p className="font-display text-[20px] leading-tight text-ink-900">
              Prefer to just talk it through?
            </p>
            <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink-700/60">
              Call or message directly — you&apos;ll speak to Ravi, not a call centre.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a href={CALL_LINK} className="btn bg-ink-900 px-4 py-2.5 text-[11.5px] text-cream-50 hover:bg-ink-800">
                <PhoneIcon className="h-4 w-4 text-gold-400" />
                Call directly
              </a>
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-wa-600/25 bg-white px-4 py-2.5 text-[11.5px] text-ink-900 hover:border-wa-600/50"
              >
                <WhatsAppIcon className="h-4 w-4 text-wa-600" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="divide-y divide-cream-300/80 border-y border-cream-300/80">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-start justify-between gap-5 py-5 text-left transition-colors hover:text-gold-700"
                  >
                    <span className="flex items-start gap-3">
                      <span className="mt-0.5 font-display text-[11px] font-semibold text-gold-600">
                        0{i + 1}
                      </span>
                      <span className="text-[13.5px] leading-snug font-medium text-ink-900">{faq.q}</span>
                    </span>
                    <span
                      className={cn(
                        "relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "rotate-180 border-gold-500 bg-gold-500 text-ink-950"
                          : "border-ink-900/15 text-ink-900"
                      )}
                      aria-hidden
                    >
                      <span className="absolute h-[1.5px] w-2.5 bg-current" />
                      <span
                        className={cn(
                          "absolute h-2.5 w-[1.5px] bg-current transition-opacity duration-300",
                          isOpen ? "opacity-0" : "opacity-100"
                        )}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!isOpen}
                  className="pb-5"
                >
                  <p className="max-w-[36rem] pr-8 pl-7 text-[12px] leading-[1.85] text-ink-700/70">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
