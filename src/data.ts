export const CONTACT = {
  name: "Ravi Chalke",
  role: "Real Estate Consultant",
  phoneDisplay: "86526 62297",
  phoneRaw: "8652662297",
  phoneTel: "+918652662297",
  whatsapp: "918652662297",
  email: "ravichalke97@gmail.com",
  addressLines: [
    "Shop No. 6, Datta Ganesh CHS,",
    "Plot No. 101, Sector - 1, Sanpada (E),",
    "Palm Beach Road,",
    "Navi Mumbai - 400705",
  ],
  addressShort: "Sanpada (E), Palm Beach Road, Navi Mumbai",
  hours: "Mon – Sun · 9:30 AM – 8:30 PM",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shop+No.6+Datta+Ganesh+CHS+Plot+No.101+Sector+1+Sanpada+East+Palm+Beach+Road+Navi+Mumbai+400705",
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WA_DEFAULT = waLink(
  `Hello Ravi, I found your website and I'd like help with a property in Navi Mumbai. Could we talk?`
);

export const CALL_LINK = `tel:${CONTACT.phoneTel}`;

export type ServiceKey = "buy" | "sell" | "rent" | "invest";

export type Service = {
  key: ServiceKey;
  title: string;
  short: string;
  description: string;
  points: string[];
  message: string;
};

export const SERVICES: Service[] = [
  {
    key: "buy",
    title: "Buy a home",
    short: "Buy",
    description:
      "From your first site visit to the day you get the keys — a calm, transparent purchase with options that actually fit your budget.",
    points: ["Curated shortlists", "Site visits & comparisons", "Price negotiation", "Loan & registration support"],
    message:
      "Hello Ravi, I'm looking to BUY a home in Navi Mumbai. My budget is around ______ and I'm interested in ______ locality. Please share suitable options.",
  },
  {
    key: "sell",
    title: "Sell your property",
    short: "Sell",
    description:
      "Get a realistic valuation, the right buyer audience and a well-managed closure — without dropping your price to make a quick sale.",
    points: ["Free, honest valuation", "Listing & buyer reach", "Screened buyer visits", "Documentation to handover"],
    message:
      "Hello Ravi, I'd like to SELL my property in Navi Mumbai. Property details: ______. Please advise on valuation and the next steps.",
  },
  {
    key: "rent",
    title: "Rent with confidence",
    short: "Rent",
    description:
      "Verified homes, vetted tenants and clean paperwork. Whether you are moving in or renting out, the process stays simple and secure.",
    points: ["Verified rental homes", "Tenant background checks", "Leave & licence agreements", "Move-in assistance"],
    message:
      "Hello Ravi, I'm looking for a RENTAL home in Navi Mumbai. Preferred locality: ______. Budget: ______ per month. Please share options.",
  },
  {
    key: "invest",
    title: "Investment properties",
    short: "Invest",
    description:
      "Buy where the infrastructure is heading, not just where the brochures point. Practical advice on yield, appreciation and exit.",
    points: ["High-growth micro-markets", "New launch access", "Rental yield analysis", "Portfolio & exit review"],
    message:
      "Hello Ravi, I'm interested in an INVESTMENT property in Navi Mumbai. Budget: ______. I'd prefer a 3–5 year horizon. What do you recommend?",
  },
];

export type PropertyType = "Buy" | "Rent" | "Investment";

export type Property = {
  id: string;
  title: string;
  locality: string;
  type: PropertyType;
  category: string;
  price: string;
  priceNote: string;
  beds: string;
  baths: string;
  area: string;
  image: string;
  tag?: string;
  features: string[];
};

const px = (id: number, h = 900, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=${h}&w=${w}`;

export const PROPERTIES: Property[] = [
  {
    id: "palm-beach-3bhk",
    title: "Sea-facing 3 BHK residence",
    locality: "Palm Beach Road, Sanpada",
    type: "Buy",
    category: "Apartment",
    price: "₹2.85 Cr",
    priceNote: "all-inclusive guide price",
    beds: "3 Beds",
    baths: "3 Baths",
    area: "1,450 sq.ft.",
    image: px(8135492),
    tag: "Handpicked",
    features: ["Podium + sea view", "2 covered parking", "Possession ready"],
  },
  {
    id: "vashi-2bhk",
    title: "Elegant 2 BHK with balcony",
    locality: "Sector 17, Vashi",
    type: "Buy",
    category: "Apartment",
    price: "₹1.62 Cr",
    priceNote: "negotiable, semi-furnished",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "985 sq.ft.",
    image: px(36708054).replace(".jpeg", ".png"),
    tag: "Ready to move",
    features: ["Walk to Vashi station", "Semi-furnished", "Gated society"],
  },
  {
    id: "kharghar-rowhouse",
    title: "4 BHK row house with terrace",
    locality: "Kharghar, Navi Mumbai",
    type: "Buy",
    category: "Row house",
    price: "₹3.40 Cr",
    priceNote: "exclusive of stamp duty",
    beds: "4 Beds",
    baths: "4 Baths",
    area: "2,100 sq.ft.",
    image: px(4933643),
    features: ["Private terrace", "Corner plot", "Near metro line"],
  },
  {
    id: "nerul-1bhk-rent",
    title: "Furnished 1 BHK, walk to station",
    locality: "Nerul (W), Navi Mumbai",
    type: "Rent",
    category: "Apartment",
    price: "₹32,000",
    priceNote: "per month · 2 months deposit",
    beds: "1 Bed",
    baths: "1 Bath",
    area: "620 sq.ft.",
    image: px(6920439),
    tag: "Ready to move",
    features: ["Fully furnished", "Society parking", "Family preferred"],
  },
  {
    id: "belapur-office-rent",
    title: "Compact office suite, CBD",
    locality: "CBD Belapur, Navi Mumbai",
    type: "Rent",
    category: "Commercial",
    price: "₹68,000",
    priceNote: "per month · plug & play",
    beds: "Workstations",
    baths: "Pantry",
    area: "1,200 sq.ft.",
    image: px(13219418),
    tag: "Commercial",
    features: ["Plug & play fit-out", "24×7 access", "Near Belapur station"],
  },
  {
    id: "ulwe-2bhk-invest",
    title: "2 BHK near metro, high rental yield",
    locality: "Ulwe, Navi Mumbai",
    type: "Investment",
    category: "Under-construction",
    price: "₹74 L",
    priceNote: "onwards · 30:40:30 plan",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "780 sq.ft.",
    image: px(11631278),
    tag: "High yield",
    features: ["Metro + airport belt", "~4.2% gross yield", "Launch pricing"],
  },
];

export const STATS = [
  { value: "12+", label: "Years in Navi Mumbai real estate" },
  { value: "500+", label: "Families & investors advised" },
  { value: "900+", label: "Properties transacted" },
  { value: "4.9", label: "Average client rating" },
];

export const AREAS = [
  "Sanpada",
  "Vashi",
  "Nerul",
  "Juinagar",
  "Turbhe",
  "Kopar Khairane",
  "Ghansoli",
  "Airoli",
  "CBD Belapur",
  "Kharghar",
  "Kamothe",
  "Ulwe",
  "Panvel",
  "Taloja",
];

export const PROCESS = [
  {
    step: "01",
    title: "Share your brief",
    body: "Call or WhatsApp with your budget, preferred sectors and timeline. A five-minute conversation saves weeks of searching.",
  },
  {
    step: "02",
    title: "Get a curated shortlist",
    body: "Only options that match your brief — with real pricing, approvals and locality context explained upfront.",
  },
  {
    step: "03",
    title: "Visit & compare",
    body: "We plan the site visits together, point out the trade-offs, and negotiate the price on your behalf.",
  },
  {
    step: "04",
    title: "Close with confidence",
    body: "Agreement, loan coordination, registration and handover — documented, explained and completed without surprises.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Amit & Sneha Kulkarni",
    role: "Bought a 3 BHK · Sanpada",
    quote:
      "We had been searching for over a year with other brokers. Ravi sir showed us four flats, and the very second one was our home. No pressure, no inflated prices — just honest guidance.",
    initials: "AK",
  },
  {
    name: "Prashant Naik",
    role: "Sold a 2 BHK · Vashi",
    quote:
      "He gave us a realistic valuation when everyone else was making big promises. The buyer was genuine, the paperwork was clean and we closed in under seven weeks.",
    initials: "PN",
  },
  {
    name: "Farhan Shaikh",
    role: "Investor · Ulwe & Kharghar",
    quote:
      "I invest from Dubai, so trust matters more than anything. Regular site videos, clarity on approvals, and honest advice to walk away from two deals. That's why I keep coming back.",
    initials: "FS",
  },
];

export const FAQS = [
  {
    q: "Do you charge for the first consultation?",
    a: "No. The initial conversation, including locality advice and a first shortlist, is free. Brokerage applies only when a transaction is completed, and it is discussed and agreed in writing before we begin.",
  },
  {
    q: "Which areas of Navi Mumbai do you cover?",
    a: "Most of the city — Sanpada, Vashi, Nerul, Juinagar, Turbhe, Kopar Khairane, Ghansoli, Airoli, CBD Belapur, Kharghar, Kamothe, Ulwe, Panvel and surrounding Thane–Raigad belts. If your requirement is outside these, I am happy to point you to someone reliable.",
  },
  {
    q: "Can you help with home loans and registration?",
    a: "Yes. I coordinate with bank and NBFC representatives to compare sanction options, and assist with the agreement, stamp duty, registration and handover checklist. You always deal directly with the lender and the sub-registrar office.",
  },
  {
    q: "How do I verify a listing before paying a token amount?",
    a: "We share available property documents — index, title chain, society NOC and approved plans where applicable — and encourage legal review before any payment. Token amounts should always move through a traceable channel against a written receipt.",
  },
  {
    q: "What checks should a tenant do before renting?",
    a: "Review the leave-and-licence draft, confirm the owner's ownership documents, check society rules and maintenance dues, and document the inventory and meter readings. I provide a standard checklist and help both sides complete it.",
  },
  {
    q: "Can NRIs buy, sell or invest through you?",
    a: "Absolutely. Many of my clients are based overseas. Site videos, video walkthroughs, valuation opinion, tenant management and solicitation of legal and banking support can all be arranged remotely, with powers-of-attorney handled by your advocate.",
  },
];

export const NAV_LINKS = [
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "About Ravi", href: "#about" },
  { label: "Areas", href: "#areas" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];
