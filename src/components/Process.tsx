import { CALL_LINK, CONTACT, PROCESS, WA_DEFAULT } from "../data";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-16 text-cream-50 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden />
      <div
        className="pointer-events-none absolute top-1/2 -left-24 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gold-500/10 blur-[110px]"
        aria-hidden
      />

      <div className="shell relative">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow eyebrow-line mb-4 text-gold-400">How it works</p>
            <h2 className="display text-[clamp(2rem,4.6vw,3.1rem)] text-cream-50">
              Four steps. Zero
              <br className="hidden sm:block" /> guesswork.
            </h2>
          </div>
          <p className="max-w-[21rem] text-[13px] leading-relaxed text-cream-200/60">
            The same clear process for a ₹40 lakh rental or a ₹4 crore purchase — because
            every decision deserves the same care.
          </p>
        </div>

        <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          <div
            className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-gold-500/50 via-gold-500/25 to-transparent lg:block"
            aria-hidden
          />
          {PROCESS.map((step) => (
            <div key={step.step} className="relative">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-ink-950 font-display text-[17px] font-semibold text-gold-300">
                {step.step}
              </div>
              <h3 className="mt-5 font-display text-[21px] font-semibold text-cream-50">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[15rem] text-[12px] leading-[1.75] text-cream-200/55">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/12 bg-white/[0.045] p-5 backdrop-blur-sm sm:p-6 lg:flex-row lg:items-center">
          <div>
            <p className="font-display text-[22px] text-cream-50 sm:text-[25px]">
              Have a property in mind already?
            </p>
            <p className="mt-1 text-[12px] text-cream-200/60">
              Send the location or the listing link. I&apos;ll check it and call you back with an honest view.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2.5 sm:w-auto sm:flex-row">
            <a href={CALL_LINK} className="btn-call w-full px-5 py-3 sm:w-auto">
              <PhoneIcon className="h-4 w-4" />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa w-full px-5 py-3 sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4 text-wa-500" />
              Send on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
