import type { ServicesPageContent } from "./types";

/**
 * Typed Services page content module.
 */
export async function getServicesContent(): Promise<ServicesPageContent> {
  return servicesContent;
}

const servicesContent: ServicesPageContent = {
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
    eyebrow: "Farrayeh Law",
    headline: "Reliable Legal\nProtection",
    description:
      "From consultations to representation, Farrayeh delivers clear counsel and dependable advocacy for every stage of your matter.",
    cta: { label: "Contact Us", href: "/contact" },
    image: {
      label: "Services hero — Farrayeh Law entrance",
      src: "/images/entrance.png",
      alt: "Entrance to the Farrayeh Law office",
      width: 1800,
      height: 1100,
    },
  },

  grid: {
    items: [
      {
        id: "corporate",
        title: "Corporate Law",
        description:
          "Guidance for companies on contracts, compliance, and growth — with clarity at every step.",
        href: "#faq",
        icon: "brief",
      },
      {
        id: "litigation",
        title: "Litigation & Disputes",
        description:
          "Strong representation when conflicts arise, focused on practical outcomes and your best interest.",
        href: "#faq",
        icon: "scale",
      },
      {
        id: "family",
        title: "Family Matters",
        description:
          "Sensitive, steady counsel for family law issues that require care as much as expertise.",
        href: "#faq",
        icon: "users",
      },
      {
        id: "contracts",
        title: "Contracts & Drafting",
        description:
          "Precise agreements written to protect your position and prevent costly misunderstandings.",
        href: "#faq",
        icon: "doc",
      },
      {
        id: "real-estate",
        title: "Real Estate",
        description:
          "Support for property transactions, leases, and disputes with thorough due diligence.",
        href: "#faq",
        icon: "home",
      },
      {
        id: "consultations",
        title: "Legal Consultations",
        description:
          "Clear answers when you need them — so you can decide with confidence and move forward.",
        href: "#faq",
        icon: "health",
      },
    ],
  },

  benefits: {
    label: "Benefits",
    title: "Discover our benefits",
    description:
      "Secure counsel with clear timelines and tailored options. Enjoy the flexibility of guidance shaped around your needs.",
    cta: { label: "Contact Us", href: "/contact" },
    items: [
      {
        id: "clarity",
        title: "Speed You Can Rely On",
        description:
          "From first consultation to clear next steps, we move quickly without cutting corners.",
        icon: "doc",
      },
      {
        id: "strategy",
        title: "Personalized Coverage",
        description:
          "Every matter gets a plan built around your goals, timeline, and risk tolerance.",
        icon: "scale",
      },
      {
        id: "access",
        title: "Always in Your Corner",
        description:
          "Stay connected with your counsel — updates and answers without the runaround.",
        icon: "users",
      },
      {
        id: "results",
        title: "24/7 Client Support",
        description:
          "A dedicated team ready to help when questions arise, so you’re never left waiting.",
        icon: "brief",
      },
    ],
  },

  faq: {
    label: "FAQs",
    title: "Frequently asked questions",
    description:
      "Find answers to your questions about our legal services and how we work with clients.",
    contactTitle: "Still have questions?",
    contactDescription: "We're here to help you!",
    contactCta: { label: "Contact Us", href: "/contact" },
    items: [
      {
        id: "first",
        question: "How do I get started with Farrayeh?",
        answer:
          "Book a consultation through our contact form or call us directly. We’ll review your situation, outline options, and recommend the clearest path forward.",
      },
      {
        id: "timeline",
        question: "How long does a typical matter take?",
        answer:
          "Timelines vary by complexity. During your first meeting we share a realistic schedule and keep you updated as milestones approach.",
      },
      {
        id: "fees",
        question: "How are legal fees structured?",
        answer:
          "We discuss fees upfront — whether fixed, hourly, or staged — so there are no surprises. You’ll receive a clear engagement summary before we begin.",
      },
      {
        id: "remote",
        question: "Can you help if I’m outside the city?",
        answer:
          "Yes. Many consultations and updates can be handled remotely. When in-person meetings or filings are needed, we’ll coordinate the details with you.",
      },
      {
        id: "languages",
        question: "Do you offer support in Arabic and English?",
        answer:
          "Yes. Our team works in both Arabic and English so you can communicate in the language you’re most comfortable with.",
      },
    ],
  },

  cta: {
    title: "Get in Touch",
    description:
      "Tell us about your matter. We’ll respond with clear next steps and how we can help.",
    cta: { label: "Contact Us", href: "/contact" },
    image: {
      label: "Services CTA — Farrayeh Law reception",
      src: "/images/reception.png",
      alt: "Farrayeh Law office reception desk and lobby",
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
    wordmark: "Farrayeh",
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
