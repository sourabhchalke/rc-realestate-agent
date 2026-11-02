import { useState, type FormEvent, type SVGProps } from "react";
import { CALL_LINK, CONTACT, WA_DEFAULT, waLink } from "../data";
import { cn } from "../utils/cn";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckCircleIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  WhatsAppIcon,
} from "./Icons";

type FormState = {
  name: string;
  phone: string;
  intent: string;
  propertyType: string;
  locality: string;
  budget: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  phone: "",
  intent: "Buy a home",
  propertyType: "Apartment",
  locality: "",
  budget: "₹1 Cr – ₹2 Cr",
  message: "",
};

const BUDGETS = [
  "Under ₹50 L",
  "₹50 L – ₹1 Cr",
  "₹1 Cr – ₹2 Cr",
  "₹2 Cr – ₹3 Cr",
  "₹3 Cr +",
  "Rental / Not sure",
];

const INTENTS = ["Buy a home", "Sell a property", "Rent a home / tenant", "Investment advice"];

const PROPERTY_TYPES = ["Apartment", "Row house / Villa", "Commercial", "Plot / Land", "Not sure yet"];

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  "Datta Ganesh CHS, Plot 101, Sector 1, Sanpada East, Palm Beach Road, Navi Mumbai 400705"
)}&output=embed`;

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [resultLink, setResultLink] = useState<string | null>(null);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    const digits = form.phone.replace(/\D/g, "");

    if (form.name.trim().length < 2) nextErrors.name = "Please enter your name.";
    if (!/^(91)?[6-9]\d{9}$/.test(digits)) {
      nextErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const text = [
      `Hello Ravi, I'd like some help with a property.`,
      ``,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Looking to: ${form.intent}`,
      `Property type: ${form.propertyType}`,
      `Preferred area: ${form.locality.trim() || "Open to suggestions"}`,
      `Budget: ${form.budget}`,
      form.message.trim() ? `Notes: ${form.message.trim()}` : "",
      ``,
      `(Sent from your website enquiry form)`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = waLink(text);
    setResultLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass = (hasError?: string) =>
    cn("field", hasError && "border-red-400/70 bg-red-50/40 focus:border-red-400");

  const contactRows: {
    icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
    label: string;
    value: string;
    href?: string;
  }[] = [
    {
      icon: MailIcon,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}?subject=Property%20enquiry%20from%20website`,
    },
    {
      icon: PinIcon,
      label: "Office",
      value: CONTACT.addressLines.join(" "),
      href: CONTACT.mapsUrl,
    },
    { icon: ClockIcon, label: "Hours", value: CONTACT.hours },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-line mb-4">Let&apos;s talk</p>
          <h2 className="display text-[clamp(2rem,4.6vw,3.1rem)] text-ink-900">
            Tell me what you&apos;re
            <br className="hidden sm:block" /> looking for.
          </h2>
          <p className="mt-4 max-w-[32rem] text-[13.5px] leading-[1.8] text-ink-700/70">
            One short conversation is usually enough to know whether we&apos;re a fit.
            Share a few details and I&apos;ll reply personally — usually within a few hours.
          </p>
        </div>

        <div className="mt-9 grid items-start gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
          {/* Contact panel */}
          <div className="relative overflow-hidden rounded-2xl bg-ink-950 p-6 text-cream-50 sm:p-7">
            <div className="pointer-events-none absolute inset-0 grid-lines" aria-hidden />
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-52 w-52 rounded-full bg-gold-500/15 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <p className="text-[9.5px] font-semibold tracking-[0.24em] text-gold-400 uppercase">
                Ravi Chalke · Direct line
              </p>
              <p className="mt-3 font-display text-[26px] leading-tight text-cream-50">
                Speak to the consultant, not a reception desk.
              </p>

              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row lg:flex-col">
                <a href={CALL_LINK} className="btn-call flex-1 px-4 py-3 text-[12.5px]">
                  <PhoneIcon className="h-4 w-4" />
                  Call {CONTACT.phoneDisplay}
                </a>
                <a
                  href={WA_DEFAULT}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa flex-1 px-4 py-3 text-[12.5px]"
                >
                  <WhatsAppIcon className="h-4 w-4 text-wa-500" />
                  WhatsApp now
                </a>
              </div>

              <div className="mt-6 space-y-4 border-t border-white/12 pt-5">
                {contactRows.map((row) => {
                  const content = (
                    <>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400">
                        <row.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[9px] font-semibold tracking-[0.18em] text-cream-200/40 uppercase">
                          {row.label}
                        </span>
                        <span className="mt-1 block text-[11.5px] leading-relaxed break-words text-cream-100/80">
                          {row.value}
                        </span>
                      </span>
                    </>
                  );
                  return row.href ? (
                    <a
                      key={row.label}
                      href={row.href}
                      target={row.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 transition-opacity hover:opacity-80"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={row.label} className="flex items-start gap-3">
                      {content}
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 flex items-start gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-3 text-[10.5px] leading-relaxed text-cream-200/55">
                <ShieldIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-400" />
                Your details stay with me and are used only to respond to this enquiry.
                No spam, no shared databases.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="relative rounded-2xl border border-cream-300/80 bg-cream-50 p-5 sm:p-7">
            <span className="absolute inset-x-6 top-0 h-[2px] rounded-full bg-gradient-to-r from-gold-600 via-gold-300 to-transparent" aria-hidden />
            {resultLink ? (
              <div
                role="status"
                aria-live="polite"
                className="flex min-h-[420px] flex-col items-center justify-center py-8 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-wa-500/12 text-wa-600">
                  <CheckCircleIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-[26px] text-ink-900">Your enquiry is ready</h3>
                <p className="mt-2 max-w-xs text-[12.5px] leading-relaxed text-ink-700/65">
                  WhatsApp should have opened in a new tab with your details filled in. Press
                  send there and Ravi will reply personally.
                </p>
                <div className="mt-6 flex w-full max-w-xs flex-col gap-2.5">
                  <a
                    href={resultLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-wa-600 px-5 py-3 text-[12.5px] text-white hover:bg-wa-700"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Open WhatsApp again
                  </a>
                  <a href={CALL_LINK} className="btn border border-ink-900/15 bg-white px-5 py-3 text-[12.5px] text-ink-900">
                    <PhoneIcon className="h-4 w-4 text-gold-600" />
                    Or call {CONTACT.phoneDisplay}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(EMPTY);
                      setResultLink(null);
                    }}
                    className="mt-1 text-[11px] font-medium text-ink-700/55 underline underline-offset-4 hover:text-ink-900"
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-[22px] leading-none text-ink-900">Request a callback</h3>
                  <span className="hidden items-center gap-1.5 text-[9.5px] tracking-wide text-ink-700/50 uppercase sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-wa-500" />
                    Replies in minutes
                  </span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="field-label">
                      Your name <span className="text-gold-600">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Priya Sharma"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass(errors.name)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1.5 text-[10.5px] text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="field-label">
                      Mobile number <span className="text-gold-600">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="e.g. 98XXXXXX21"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass(errors.phone)}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" role="alert" className="mt-1.5 text-[10.5px] text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="intent" className="field-label">
                      I want to
                    </label>
                    <select
                      id="intent"
                      name="intent"
                      value={form.intent}
                      onChange={(e) => update("intent", e.target.value)}
                      className="field appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-9"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230a1c2c' stroke-width='1.7'%3E%3Cpath d='m6 9.5 6 6 6-6'/%3E%3C/svg%3E\")",
                      }}
                    >
                      {INTENTS.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="field-label">
                      Property type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={form.propertyType}
                      onChange={(e) => update("propertyType", e.target.value)}
                      className="field appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-9"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230a1c2c' stroke-width='1.7'%3E%3Cpath d='m6 9.5 6 6 6-6'/%3E%3C/svg%3E\")",
                      }}
                    >
                      {PROPERTY_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="locality" className="field-label">
                      Preferred area
                    </label>
                    <input
                      id="locality"
                      name="locality"
                      type="text"
                      placeholder="Sanpada, Vashi, Kharghar…"
                      value={form.locality}
                      onChange={(e) => update("locality", e.target.value)}
                      className="field"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="field-label">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={(e) => update("budget", e.target.value)}
                      className="field appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-9"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230a1c2c' stroke-width='1.7'%3E%3Cpath d='m6 9.5 6 6 6-6'/%3E%3C/svg%3E\")",
                      }}
                    >
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="field-label">
                    Anything else? <span className="font-normal tracking-normal text-ink-700/40 normal-case">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="BHK, floor preference, possession timeline, or a listing you've already seen…"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="field resize-none"
                  />
                </div>

                <button type="submit" className="btn mt-5 w-full bg-ink-900 py-3.5 text-cream-50 hover:bg-ink-800">
                  <WhatsAppIcon className="h-4 w-4 text-wa-500" />
                  Send enquiry on WhatsApp
                  <ArrowRightIcon className="h-4 w-4 text-gold-400" />
                </button>
                <p className="mt-2.5 text-center text-[10px] leading-relaxed text-ink-700/45">
                  This opens WhatsApp with your details pre-filled. Nothing is posted or
                  stored on this website.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-cream-300/80 bg-cream-100">
          <div className="relative">
            <iframe
              title="Ravi Chalke Real Estate Consultant office location in Sanpada East, Navi Mumbai"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[280px] w-full grayscale-[0.25] contrast-[1.02]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-950/25 to-transparent" aria-hidden />
          </div>
          <div className="flex flex-col gap-4 border-t border-cream-300/80 bg-cream-50 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 text-gold-400">
                <PinIcon className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-[12px] font-semibold text-ink-900">Ravi Chalke · Real Estate Consultant</p>
                <p className="mt-1 max-w-xl text-[11px] leading-relaxed text-ink-700/60">
                  {CONTACT.addressLines.join(" ")}
                </p>
              </div>
            </div>
            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn shrink-0 border border-ink-900/15 bg-white px-4 py-2.5 text-[11.5px] text-ink-900 hover:border-gold-500/60"
            >
              Open in Google Maps
              <ArrowUpRightIcon className="h-3.5 w-3.5 text-gold-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
