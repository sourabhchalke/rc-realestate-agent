import { useEffect, useState } from "react";
import { CALL_LINK, CONTACT, NAV_LINKS, WA_DEFAULT } from "../data";
import { cn } from "../utils/cn";
import { CloseIcon, Logo, MailIcon, MenuIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-ink-950 text-cream-200/80 md:block">
        <div className="shell flex h-9 items-center justify-between text-[11px] tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <PinIcon className="h-3.5 w-3.5 text-gold-400" />
              {CONTACT.addressShort}
            </span>
            <span className="hidden items-center gap-1.5 lg:flex">
              <span className="h-1 w-1 rounded-full bg-gold-400" />
              Serving all of Navi Mumbai
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden items-center gap-1.5 sm:flex">{CONTACT.hours}</span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold-300"
            >
              <MailIcon className="h-3.5 w-3.5 text-gold-400" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b bg-cream-50/95 backdrop-blur-md transition-shadow duration-300",
          scrolled ? "border-cream-300 shadow-[0_10px_30px_-22px_rgba(5,18,29,0.5)]" : "border-cream-300/60"
        )}
      >
        <div className="shell flex h-[70px] items-center justify-between gap-4 lg:h-[78px]">
          <a href="#top" className="group flex shrink-0 items-center gap-3" aria-label="Ravi Chalke — home">
            <Logo className="h-9 w-10 transition-transform duration-300 group-hover:-translate-y-0.5 lg:h-11" />
            <span className="leading-none">
              <span className="block font-display text-[19px] font-semibold tracking-[0.02em] text-ink-900 sm:text-[22px] lg:text-[25px]">
                RAVI CHALKE
              </span>
              <span className="mt-1 block text-[7.5px] font-semibold uppercase tracking-[0.22em] text-gold-600 sm:text-[8.5px] lg:text-[9.5px]">
                Real Estate Consultant
              </span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[12.5px] font-medium transition-colors",
                  active === link.href
                    ? "text-ink-900"
                    : "text-ink-800/70 hover:bg-cream-100 hover:text-ink-900"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gold-500 transition-all duration-300",
                    active === link.href ? "w-4" : "w-0"
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn h-10 w-10 border border-wa-600/25 bg-white text-wa-700 transition-colors hover:border-wa-600/60 hover:bg-wa-500/10 sm:h-auto sm:w-auto sm:px-4 sm:py-2.5 sm:text-[12.5px]"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href={CALL_LINK}
              className="btn h-10 w-10 bg-ink-900 px-0 text-cream-50 transition-colors hover:bg-ink-800 sm:h-auto sm:w-auto sm:px-4 sm:py-2.5"
              aria-label={`Call Ravi Chalke on ${CONTACT.phoneDisplay}`}
            >
              <PhoneIcon className="h-4 w-4 text-gold-400" />
              <span className="hidden text-[12.5px] sm:inline">{CONTACT.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink-950/60 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto bg-ink-950 px-6 pt-5 pb-7 transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-10" />
              <span className="font-display text-xl text-cream-50">Ravi Chalke</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-cream-100"
              aria-label="Close menu"
            >
              <CloseIcon className="h-4.5 w-4.5" />
            </button>
          </div>

          <nav className="mt-4 flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/8 py-4 text-[15px] text-cream-100/90 transition-colors hover:text-gold-300"
              >
                {link.label}
                <span className="font-display text-sm text-gold-500/70">0{i + 1}</span>
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-3 pt-8">
            <a href={CALL_LINK} className="btn w-full bg-gold-500 py-3.5 text-ink-950">
              <PhoneIcon className="h-4 w-4" />
              Call {CONTACT.phoneDisplay}
            </a>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full bg-wa-600 py-3.5 text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Message on WhatsApp
            </a>
            <p className="pt-1 text-center text-[11px] leading-relaxed text-cream-200/50">
              {CONTACT.hours}
              <br />
              {CONTACT.addressShort}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
