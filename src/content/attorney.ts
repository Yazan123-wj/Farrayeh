import type { AttorneyPageContent } from "./types";

/**
 * Typed Attorney page content — Qassim Farrayeh, Lead Counsel & Founding Partner.
 */
export async function getAttorneyContent(): Promise<AttorneyPageContent> {
  return attorneyContent;
}

const attorneyContent: AttorneyPageContent = {
  nav: {
    logo: {
      primary: "Farrayeh",
      secondary: "Law",
    },
    menuLabel: "Menu",
    cta: { label: "Get In Touch", href: "/contact" },
    groups: [
      {
        title: "Explore",
        links: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "About", href: "/about" },
          { label: "Attorney", href: "/attorney" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Book a consultation", href: "/contact" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    featuredImage: {
      label: "Menu — Farrayeh Law reception desk",
      src: "/images/reception.png",
      alt: "Farrayeh Law office reception desk and lobby",
      width: 1800,
      height: 1000,
    },
  },

  hero: {
    role: "Lead Counsel · Founding Partner",
    name: "Qassim Farrayeh",
    quote: "Precision is the currency of trust.",
    cta: { label: "Book a consultation", href: "/contact" },
    image: {
      label: "Attorney — Qassim Farrayeh",
      src: "/images/testimonials/james.png",
      alt: "Portrait of Qassim Farrayeh, Lead Counsel and Founding Partner",
      width: 900,
      height: 1200,
    },
  },

  perspective: {
    number: "01",
    label: "Perspective",
    paragraphs: [
      "Qassim has over 15 years of experience handling complex legal cases with a strong track record of success.",
      "He has represented Fortune 500 companies, public officials, and private clients in matters spanning corporate disputes, regulatory investigations, and high-stakes litigation across three jurisdictions.",
      "Beyond the firm, Qassim serves on the bar association’s ethics committee and lectures at Columbia Law on advanced trial advocacy. He lives in Manhattan with his family.",
    ],
  },

  credentials: {
    number: "02",
    label: "Credentials",
    title: "Credentials & recognition.",
    items: [
      {
        id: "education",
        label: "Education",
        value: "Harvard Law School, J.D. (2008)",
      },
      {
        id: "undergraduate",
        label: "Undergraduate",
        value: "Princeton University, A.B. summa cum laude",
      },
      {
        id: "bar",
        label: "Bar Admission",
        value: "New York · California · Texas",
      },
      {
        id: "recognition",
        label: "Recognition",
        value: "Super Lawyers® 2018–2025",
      },
      {
        id: "memberships",
        label: "Memberships",
        value: "ABA · NYSBA · Federal Bar Council",
      },
      {
        id: "languages",
        label: "Languages",
        value: "English · French · Mandarin",
      },
    ],
  },

  focus: {
    number: "03",
    label: "Focus",
    title: "Where Qassim practices.",
    items: [
      { id: "corporate", title: "Corporate Law" },
      { id: "ma", title: "Mergers & Acquisitions" },
      { id: "criminal", title: "Criminal Defense" },
      { id: "white-collar", title: "White-Collar Investigations" },
      { id: "family", title: "Family Law" },
      { id: "real-estate", title: "Real Estate" },
    ],
  },

  cta: {
    title: "Get in Touch",
    description:
      "Ready to discuss your matter with Lead Counsel? Book a consultation and we’ll respond with clear next steps.",
    cta: { label: "Book a consultation", href: "/contact" },
    image: {
      label: "Attorney CTA — Farrayeh Law scales",
      src: "/images/scales.png",
      alt: "Justice scales at Farrayeh Law",
      width: 1800,
      height: 1000,
    },
  },

  footer: {
    logo: {
      primary: "Farrayeh",
      secondary: "Law",
    },
    tagline:
      "Innovative strategies paired with outstanding service. Our expertise and talent are tailored to meet your evolving needs.",
    copyright: "Copyright © 2025",
    wordmark: "Farrayeh law firm",
    columns: [
      {
        title: "Explore",
        links: [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "About", href: "/about" },
          { label: "Attorney", href: "/attorney" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", href: "/blog" },
          { label: "Book a consultation", href: "/contact" },
        ],
      },
      {
        title: "Contact",
        links: [{ label: "Contact", href: "/contact" }],
      },
    ],
  },
};
