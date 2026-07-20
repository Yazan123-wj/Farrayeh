import type { HomePageContent } from "./types";

/**
 * Typed homepage content module.
 * Swap this implementation for a CMS fetch later without touching UI components.
 */
export async function getHomeContent(): Promise<HomePageContent> {
  return homeContent;
}

const homeContent: HomePageContent = {
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
          { label: "Home", href: "#" },
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
    headline: "Your perfect policy,\nfast & affordable",
    description:
      "Get a free quote in under 2 minutes. Experience peace of mind with our reliable insurance options.",
    cta: { label: "Book a consultation", href: "/contact" },
    image: {
      label: "Hero — Farrayeh Law office entrance",
      src: "/images/entrance.png",
      alt: "Glass entrance to Farrayeh Law office with logo on the door",
      width: 1800,
      height: 1000,
    },
  },

  statistic: {
    label: "Statistic",
    title: "Proven results, trusted coverage",
    description:
      "We don't just promise reliability — we deliver it. Thousands of individuals, families, and businesses trust us to protect what matters most. Our data tells the story",
    metrics: [
      {
        id: "families",
        label: "Families protected",
        value: 23,
        suffix: "k",
      },
      {
        id: "renewal",
        label: "Policy renewal rate",
        value: 95,
        suffix: "%",
      },
    ],
    image: {
      label: "Statistic — justice scales in the office",
      src: "/images/scales.png",
      alt: "Brass justice scales on a shelf at Farrayeh Law",
      width: 1200,
      height: 1600,
    },
  },

  services: {
    label: "Our Services",
    title: "Your Partner in Smart,\nReliable Insurance Protection",
    description:
      "We make it easy to protect what matters most. From health and life insurance to vehicle and property coverage, we offer smart, flexible plans designed to fit your needs and budget.",
    viewAll: { label: "View All", href: "#services" },
    items: [
      {
        id: "life",
        title: "Secure Life coverage",
        description:
          "Life insurance that safeguards your family's future—simple, affordable, and reliable",
        href: "#services",
        icon: "life",
      },
      {
        id: "health",
        title: "Vital Health assurance",
        description:
          "Health plans designed for your wellness and wallet, with transparent pricing",
        href: "#services",
        icon: "health",
      },
      {
        id: "home",
        title: "Total Home security",
        description:
          "Complete home protection against the unexpected, from leaks to natural disasters",
        href: "#services",
        icon: "home",
      },
      {
        id: "travel",
        title: "Travel insurance",
        description:
          "Travel protection that covers medical care, delays, and cancellations.",
        href: "#services",
        icon: "travel",
      },
    ],
    images: [
      {
        label: "Services — statue of a person reading",
        src: "/images/statue-reader.png",
        alt: "Statue of a person reading in the Farrayeh Law office",
        width: 1200,
        height: 1600,
      },
      {
        label: "Services — scales and Arabic calligraphy wall art",
        src: "/images/calligraphy.png",
        alt: "Wall art with justice scales and Arabic calligraphy at Farrayeh Law",
        width: 1200,
        height: 1600,
      },
    ],
  },

  testimonials: {
    label: "Team Members",
    title: "Meet the people behind Farrayeh.",
    description:
      "Our lawyers and consultants bring clarity, care, and experience to every matter. Get to know the team dedicated to protecting your rights and guiding you forward.",
    cta: { label: "Contact Us", href: "/contact" },
    items: [
      {
        id: "laura",
        name: "Laura Méndez",
        role: "Freelance designer",
        quote:
          "The support team was incredibly fast. I submitted my request at night and got help first thing in the morning. Super professional and clear.",
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
        role: "Legal consultant",
        quote:
          "I've dealt with delays in the past, but not this time. Everything was approved in hours. No forms, no stress, just results. Loved that.",
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
        role: "Small business owner",
        quote:
          "When a storm damaged our roof, TotalHome Security had an adjuster onsite within hours. We got our full claim approved in 3 days—no fights, no delays. THIS is how insurance should work.",
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
        role: "E-commerce founder",
        quote:
          "Quickest process I've ever seen. From quote to approval it felt seamless. It's rare to find a team that delivers exactly what they promise.",
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

  trust: {
    label: "Trust",
    title: "Why choose us?",
    description:
      "We prioritize your peace of mind with reliable coverage options. Our dedicated team is here to support you every step of the way.",
    features: [
      {
        id: "speed",
        title: "Speed You Can Rely On",
        description:
          "From instant quotes to 48-hour claims processing, we save you time (and stress).",
      },
      {
        id: "personalized",
        title: "Personalized Coverage",
        description:
          "No two policies are alike—we tailor plans to fit your budget and needs, not the other way around.",
      },
    ],
    image: {
      label: "Trust — modern lounge at Farrayeh Law",
      src: "/images/lounge.png",
      alt: "Modern lounge seating inside the Farrayeh Law office",
      width: 1200,
      height: 1600,
    },
  },

  solutions: {
    label: "Solutions",
    title: "Experience Insurance Solutions Designed to Fit Your Unique Needs",
    cta: { label: "Contact Us", href: "/contact" },
    footer: "Explore our diverse range of insurance products today.",
    items: [
      {
        id: "at-home",
        title: "At-Home Care Plans",
        description:
          "From personal protection to family coverage, we help you find the right plan with clarity and confidence.",
      },
      {
        id: "video",
        title: "Free Video Consultations",
        description:
          "Speak with a licensed advisor from anywhere. Get answers, compare options, and move forward without the waiting room.",
      },
      {
        id: "journey",
        title: "Get Started with Your Insurance Journey Today",
        description:
          "Start with a free quote, choose a plan that fits, and activate coverage that protects what matters most.",
      },
    ],
    image: {
      label: "Solutions — rooftop patio city view",
      src: "/images/rooftop.png",
      alt: "Rooftop patio overlooking the city at Farrayeh Law",
      width: 1800,
      height: 1000,
    },
  },

  blog: {
    label: "Blog",
    title: "Insurance insights and tips",
    viewAll: { label: "View All", href: "/blog" },
    posts: [
      {
        id: "needs",
        categories: ["Insurance"],
        title: "Understanding your insurance needs",
        excerpt: "Explore how to choose the right coverage for you.",
        href: "#blog",
        image: {
          label: "Blog — statue of a person reading",
          src: "/images/statue-reader.png",
          alt: "Statue of a person reading in the Farrayeh Law office",
          width: 1200,
          height: 1600,
        },
      },
      {
        id: "homeowners",
        categories: ["Tips"],
        title: "Tips for homeowners insurance",
        excerpt: "Essential tips to ensure your home is properly covered.",
        href: "#blog",
        image: {
          label: "Blog — justice scales at Farrayeh Law",
          src: "/images/scales.png",
          alt: "Brass justice scales on a shelf at Farrayeh Law",
          width: 1200,
          height: 1600,
        },
      },
      {
        id: "life-basics",
        categories: ["Corporate", "Finance", "Tax"],
        title: "Life Insurance basics explained",
        excerpt: "Explore how to choose the right coverage for you.",
        href: "#blog",
        image: {
          label: "Blog — security room at Farrayeh Law",
          src: "/images/security-room.png",
          alt: "Office room with artwork and security monitors at Farrayeh Law",
          width: 1200,
          height: 1600,
        },
      },
    ],
  },

  cta: {
    title: "Get in Touch",
    description:
      "You can also use the feedback form below to reach out to us directly through our website.",
    cta: { label: "Contact Us", href: "/contact" },
    image: {
      label: "CTA — Farrayeh Law reception desk",
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
          { label: "Home", href: "#" },
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
