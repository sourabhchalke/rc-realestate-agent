import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6.5 3h-2A1.5 1.5 0 0 0 3 4.6C3 13.1 10.9 21 19.4 21A1.5 1.5 0 0 0 21 19.5v-2a1.5 1.5 0 0 0-1.2-1.5l-2.7-.6a1.5 1.5 0 0 0-1.5.6l-1 1.3a14.6 14.6 0 0 1-6.4-6.4l1.3-1a1.5 1.5 0 0 0 .6-1.5l-.6-2.7A1.5 1.5 0 0 0 8 5.5" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    <path
      fillRule="evenodd"
      d="M12.04 2C6.58 2 2.13 6.44 2.13 11.89c0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.39a9.9 9.9 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.44 9.9-9.89A9.83 9.83 0 0 0 19.04 4.8 9.85 9.85 0 0 0 12.04 2Zm0 18.1h-.01a8.24 8.24 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.35c0-4.53 3.7-8.22 8.25-8.22 2.2 0 4.27.86 5.82 2.41a8.17 8.17 0 0 1 2.41 5.82c0 4.53-3.7 8.21-8.23 8.21Z"
      clipRule="evenodd"
    />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3.5 7 7.05 5.1a2.5 2.5 0 0 0 2.9 0L20.5 7" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M20 10.5c0 5.2-6.3 10.4-8 10.4S4 15.7 4 10.5a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10.3" r="2.8" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const CheckCircleIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12.3 2.6 2.6L16 9.5" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const HomeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3.5 10.5 12 3.5l8.5 7" />
    <path d="M5.5 9.5V20h13V9.5" />
    <path d="M9.8 20v-5.4h4.4V20" />
  </svg>
);

export const KeyIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="4.5" />
    <path d="m11.2 11.2 8.3 8.3M16.5 16.5l2-2M13.5 13.5l2-2" />
  </svg>
);

export const TrendingIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3.5 16.5 9 11l4 4 7.5-7.5" />
    <path d="M15.5 7.5h5v5" />
  </svg>
);

export const BuildingIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 21V6.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1V21" />
    <path d="M12 10h6.5a1 1 0 0 1 1 1v10" />
    <path d="M2.5 21h19M7 9h2M7 12.5h2M7 16h2M15 14h2M15 17.5h2" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 2.8 4.8 5.6v5.5c0 4.4 3 8.2 7.2 10.1 4.2-1.9 7.2-5.7 7.2-10.1V5.6L12 2.8Z" />
    <path d="m8.8 11.8 2.3 2.3 4.3-4.6" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.44 6.19 20.5 7.3 14.03 2.6 9.45l6.5-.95L12 2.6Z" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.3V12l3.2 2" />
  </svg>
);

export const BedIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 18.5v-13M3 15h18v3.5M21 15v-3a2.5 2.5 0 0 0-2.5-2.5H10V15" />
    <circle cx="6.8" cy="11" r="1.6" />
  </svg>
);

export const BathIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2ZM6 12V6.2A2.2 2.2 0 0 1 10.2 5M7 19.5 6 21.5M17 19.5l1 2" />
  </svg>
);

export const AreaIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
    <path d="M9.5 9.5h5v5h-5z" />
  </svg>
);

export const QuoteIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M9.5 5.5C6 7 4 10 4 13.2c0 3.1 1.8 5.3 4.4 5.3 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8 0-1.1.2.4-1.7 1.6-3.1 3.4-4.1l-1.6-2.1ZM19.4 5.5C15.9 7 13.9 10 13.9 13.2c0 3.1 1.8 5.3 4.4 5.3 2.1 0 3.7-1.5 3.7-3.6 0-2-1.4-3.4-3.3-3.4-.4 0-.8 0-1.1.2.4-1.7 1.6-3.1 3.4-4.1l-1.6-2.1Z" />
  </svg>
);

export const SparkIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 2c.6 4.9 2.4 7.4 7 8-4.6.6-6.4 3.1-7 8-.6-4.9-2.4-7.4-7-8 4.6-.6 6.4-3.1 7-8Z" />
  </svg>
);

export function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 58" className={className} aria-hidden fill="none">
      <defs>
        <linearGradient id="logo-gold" x1="4" y1="4" x2="58" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EAD29B" />
          <stop offset="0.5" stopColor="#D9B56A" />
          <stop offset="1" stopColor="#A9822F" />
        </linearGradient>
      </defs>
      <g stroke="url(#logo-gold)" strokeWidth="1.9" strokeLinejoin="round" strokeLinecap="round">
        <path d="M9 8h11v20H9zM20 3h10v25H20z" />
        <path d="M16 8h.01M16 12h.01M16 16h.01M25 3l5-1v26h-5" />
        <path d="M36 24 47 14l11 10" />
        <path d="M40 21v11h14V21" />
        <path d="M44.5 32v-6h5v6" />
        <path d="M4 38c10-5 18-1 27-3 10-2 13-6 21-7 5-.6 7 .3 8 1" />
        <path d="M10 44c9-4 16-1 24-3 9-2 11-5 18-6" />
      </g>
    </svg>
  );
}
