import type { AboutPageContent } from "./types";

/**
 * Typed About page content module.
 * Swap this implementation for a CMS fetch later without touching UI components.
 */
export async function getAboutContent(): Promise<AboutPageContent> {
  return aboutContent;
}

const aboutContent: AboutPageContent = {
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
    eyebrow: "About Us",
    headline: "Your long-term legal partner, every step of the way.",
    description:
      "Farrayeh is built on clarity, care, and results. We guide individuals and businesses through complex matters with trusted advocacy.",
    cta: { label: "Get In Touch", href: "/contact" },
    image: {
      label: "About hero — Farrayeh Law entrance",
      src: "/images/entrance.png",
      alt: "Entrance to the Farrayeh Law office",
      width: 1800,
      height: 1000,
    },
  },

  story: {
    label: "About Us",
    title: "Trusted since day one",
    description:
      "From our first consultation to every matter that follows, we stay focused on clear advice, strong representation, and lasting client relationships.",
    metrics: [
      {
        id: "awards",
        label: "Industry awards",
        value: 23,
        suffix: "+",
      },
      {
        id: "satisfaction",
        label: "Client satisfaction",
        value: 95,
        suffix: "%",
      },
      {
        id: "experts",
        label: "Dedicated experts",
        value: 50,
        suffix: "+",
      },
      {
        id: "renewals",
        label: "Returning clients",
        value: 98,
        suffix: "%",
      },
    ],
    image: {
      label: "About story — Farrayeh Law lounge",
      src: "/images/lounge.png",
      alt: "Modern lounge seating inside the Farrayeh Law office",
      width: 1200,
      height: 1400,
    },
  },

  team: {
    label: "Team",
    title: "Our Team",
    description:
      "Meet the lawyers and consultants who bring experience, precision, and care to every case.",
    members: [
      {
        id: "laura",
        name: "Laura Méndez",
        role: "Managing Partner",
        href: "#",
        image: {
          label: "Team — Laura Méndez",
          src: "/images/testimonials/laura.png",
          alt: "Portrait of Laura Méndez",
          width: 900,
          height: 1200,
        },
      },
      {
        id: "camila",
        name: "Camila Rojas",
        role: "Legal Consultant",
        href: "#",
        image: {
          label: "Team — Camila Rojas",
          src: "/images/testimonials/camila.png",
          alt: "Portrait of Camila Rojas",
          width: 900,
          height: 1200,
        },
      },
      {
        id: "james",
        name: "James Thore",
        role: "Senior Counsel",
        href: "#",
        image: {
          label: "Team — James Thore",
          src: "/images/testimonials/james.png",
          alt: "Portrait of James Thore",
          width: 900,
          height: 1200,
        },
      },
      {
        id: "daniela",
        name: "Daniela Pérez",
        role: "Associate Attorney",
        href: "#",
        image: {
          label: "Team — Daniela Pérez",
          src: "/images/testimonials/daniela.png",
          alt: "Portrait of Daniela Pérez",
          width: 900,
          height: 1200,
        },
      },
    ],
  },

  why: {
    label: "Why Us",
    title: "Why choose us?",
    description:
      "We combine deep legal expertise with a client-first approach — so you always know where you stand and what comes next.",
    features: [
      {
        id: "advice",
        title: "Expert Advice & Guidance",
        description:
          "Clear counsel from experienced lawyers who understand both the law and your goals.",
      },
      {
        id: "strategy",
        title: "Personalized Strategy",
        description:
          "Every matter is different. We build a tailored plan that fits your situation and timeline.",
      },
    ],
    image: {
      label: "Why choose us — Farrayeh Law office art",
      src: "/images/calligraphy.png",
      alt: "Wall art with Arabic calligraphy and scales of justice at Farrayeh Law",
      width: 1000,
      height: 1400,
    },
  },

  cta: {
    title: "Get in Touch",
    description:
      "Ready to talk? Reach out and we’ll help you take the next step with confidence.",
    cta: { label: "Contact Us", href: "/contact" },
    image: {
      label: "About CTA — Farrayeh Law reception",
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
