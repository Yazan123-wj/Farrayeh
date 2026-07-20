import type {
  BlogArticle,
  BlogArticlePageContent,
  BlogPageContent,
  BlogPost,
  CtaContent,
  FooterContent,
  SiteNav,
} from "./types";

const nav: SiteNav = {
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
};

const footer: FooterContent = {
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
};

const cta: CtaContent = {
  title: "Get in Touch",
  description:
    "You can also reach out directly through our website — we’re ready to help with your next step.",
  cta: { label: "Contact Us", href: "/contact" },
  image: {
    label: "Blog CTA — Farrayeh Law rooftop",
    src: "/images/rooftop.png",
    alt: "Rooftop patio overlooking the city",
    width: 1800,
    height: 1000,
  },
};

const listingPosts: BlogPost[] = [
  {
    id: "contracts",
    date: "Aug 12, 2024",
    categories: ["Contracts"],
    title: "Tips for reviewing contracts carefully",
    excerpt:
      "What to look for before you sign — and when to ask for a second opinion.",
    href: "/blog/contracts",
    image: {
      label: "Blog — statue of a person reading",
      src: "/images/statue-reader.png",
      alt: "Bronze statue of a person reading a book",
      width: 900,
      height: 900,
    },
  },
  {
    id: "rights",
    date: "Jul 30, 2024",
    categories: ["Rights"],
    title: "Your rights explained in plain language",
    excerpt:
      "Clear answers to common questions about representation and next steps.",
    href: "/blog/rights",
    image: {
      label: "Blog — justice scales",
      src: "/images/scales.png",
      alt: "Justice scales on a shelf at Farrayeh Law",
      width: 900,
      height: 900,
    },
  },
  {
    id: "family",
    date: "Jul 18, 2024",
    categories: ["Family"],
    title: "Family matters: what to prepare first",
    excerpt:
      "Documents and decisions that help your consultation start on solid ground.",
    href: "/blog/family",
    image: {
      label: "Blog — lounge at Farrayeh Law",
      src: "/images/lounge.png",
      alt: "Modern lounge seating inside the Farrayeh Law office",
      width: 900,
      height: 900,
    },
  },
  {
    id: "claims",
    date: "Jul 02, 2024",
    categories: ["Process"],
    title: "Navigating disputes with confidence",
    excerpt:
      "How a structured approach keeps your matter moving without unnecessary stress.",
    href: "/blog/claims",
    image: {
      label: "Blog — security room",
      src: "/images/security-room.png",
      alt: "Office room with artwork and security monitors",
      width: 900,
      height: 900,
    },
  },
  {
    id: "property",
    date: "Jun 21, 2024",
    categories: ["Real Estate"],
    title: "Understanding property agreements",
    excerpt:
      "Key clauses that protect you in leases, sales, and related transactions.",
    href: "/blog/property",
    image: {
      label: "Blog — calligraphy wall art",
      src: "/images/calligraphy.png",
      alt: "Wall art with Arabic calligraphy and scales of justice",
      width: 900,
      height: 900,
    },
  },
];

const featuredPost: BlogPost = {
  id: "understanding-legal-needs",
  date: "May 15, 2024",
  categories: ["General"],
  title: "Understanding your legal needs",
  excerpt:
    "A clear starting point for choosing the right counsel and knowing what to expect in your first consultation.",
  href: "/blog/understanding-legal-needs",
  image: {
    label: "Featured — Farrayeh Law entrance",
    src: "/images/entrance.png",
    alt: "Entrance to the Farrayeh Law office",
    width: 1600,
    height: 1000,
  },
};

function articleFromPost(
  post: BlogPost,
  extras: {
    author: string;
    intro: string;
    sections: BlogArticle["sections"];
    closing: string;
  },
): BlogArticle {
  return {
    slug: post.id,
    label: "Blog and Articles",
    title: post.title,
    date: post.date ?? "",
    author: extras.author,
    image: post.image,
    intro: extras.intro,
    sections: extras.sections,
    closing: extras.closing,
    excerpt: post.excerpt,
    categories: post.categories,
  };
}

const articles: Record<string, BlogArticle> = {
  "understanding-legal-needs": articleFromPost(featuredPost, {
    author: "By Farrayeh",
    intro:
      "Knowing where to begin is often the hardest part of a legal matter. This guide outlines how to clarify your goals, gather the right information, and choose counsel that fits your situation.",
    sections: [
      {
        id: "components",
        title: "1. Essential steps before your consultation",
        body: "A short preparation checklist helps your first meeting stay focused and productive.",
        bullets: [
          "Write down your timeline and desired outcome in plain language.",
          "Collect contracts, notices, and any written communication related to the matter.",
          "Note key dates, deadlines, and parties involved.",
          "List questions you want answered in the first meeting.",
          "Be ready to discuss budget expectations and decision-makers.",
        ],
      },
      {
        id: "safeguard",
        title: "2. Proactive steps to protect your position",
        body: "Early clarity reduces risk and keeps options open while you decide on a path forward.",
        bullets: [
          "Avoid informal agreements until counsel has reviewed the terms.",
          "Preserve documents and messages — do not delete relevant records.",
          "Limit discussion of the matter to people who need to know.",
          "Ask for next steps in writing after every important conversation.",
        ],
      },
    ],
    closing:
      "When you are ready, Farrayeh can help you turn this preparation into a clear plan — with counsel that stays practical, transparent, and aligned to your goals.",
  }),
  contracts: articleFromPost(listingPosts[0], {
    author: "By Farrayeh",
    intro:
      "Contracts shape risk long before a dispute appears. Here is how to read the clauses that matter most before you sign.",
    sections: [
      {
        id: "review",
        title: "1. What to review first",
        body: "Start with the sections that define obligations, exits, and remedies.",
        bullets: [
          "Payment terms, late fees, and milestones",
          "Termination rights and notice periods",
          "Liability caps and indemnities",
          "Dispute resolution and governing law",
          "Confidentiality and data handling",
        ],
      },
      {
        id: "when",
        title: "2. When to get a second opinion",
        body: "Some agreements deserve specialist review before ink hits paper.",
        bullets: [
          "Long-term exclusivity or non-compete language",
          "Personal guarantees or unlimited liability",
          "Ambiguous deliverables or success criteria",
          "One-sided amendment or assignment rights",
        ],
      },
    ],
    closing:
      "If a clause feels unclear, pause. A short consultation can prevent years of costly cleanup.",
  }),
  rights: articleFromPost(listingPosts[1], {
    author: "By Farrayeh",
    intro:
      "Legal rights are easier to protect when you understand them early. This overview keeps the language simple and actionable.",
    sections: [
      {
        id: "basics",
        title: "1. Know what you can ask for",
        body: "Clarity on process and representation helps you advocate for yourself.",
        bullets: [
          "The right to clear fee information before engagement",
          "The right to updates on material developments",
          "The right to ask questions until you understand the plan",
          "The right to seek a second opinion",
        ],
      },
      {
        id: "next",
        title: "2. Practical next steps",
        body: "Turn understanding into action with a few disciplined habits.",
        bullets: [
          "Keep a dated log of events and communications",
          "Confirm important advice in writing",
          "Ask for options, not only recommendations",
          "Review engagement letters carefully before signing",
        ],
      },
    ],
    closing:
      "Rights matter most when they guide decisions. We are here to help you use them with confidence.",
  }),
  family: articleFromPost(listingPosts[2], {
    author: "By Farrayeh",
    intro:
      "Family matters require care and structure. Preparing the right documents early makes the first consultation calmer and clearer.",
    sections: [
      {
        id: "prepare",
        title: "1. What to prepare first",
        body: "Bring the facts that define the relationship, finances, and timeline.",
        bullets: [
          "Identity and family status documents",
          "Financial summaries and shared asset lists",
          "Prior agreements or court orders, if any",
          "A brief chronology of key events",
        ],
      },
      {
        id: "focus",
        title: "2. How we keep the process focused",
        body: "A steady plan reduces conflict and protects what matters most.",
        bullets: [
          "Prioritize children’s welfare and stability",
          "Separate urgent issues from longer-term negotiations",
          "Document agreements clearly as they form",
          "Communicate through counsel when tensions rise",
        ],
      },
    ],
    closing:
      "You do not have to navigate this alone. Farrayeh offers discreet, steady guidance every step of the way.",
  }),
  claims: articleFromPost(listingPosts[3], {
    author: "By Farrayeh",
    intro:
      "Disputes move faster when the process is organized. Here is how to stay in control without adding unnecessary friction.",
    sections: [
      {
        id: "structure",
        title: "1. Structure the matter early",
        body: "A clear file and timeline make strategy discussions sharper.",
        bullets: [
          "Map parties, claims, and desired outcomes",
          "Identify evidence you already hold",
          "Flag deadlines and limitation risks",
          "Agree on communication cadence with counsel",
        ],
      },
      {
        id: "momentum",
        title: "2. Keep momentum without escalation",
        body: "Progress does not always require confrontation.",
        bullets: [
          "Explore negotiation windows before hard filings",
          "Use written proposals to reduce miscommunication",
          "Reassess risk as new facts appear",
          "Measure success by durable outcomes, not noise",
        ],
      },
    ],
    closing:
      "A disciplined process protects both your rights and your time. We can help you build that process from day one.",
  }),
  property: articleFromPost(listingPosts[4], {
    author: "By Farrayeh",
    intro:
      "Property agreements look routine until a single clause shifts the risk. Learn which terms deserve a careful read.",
    sections: [
      {
        id: "clauses",
        title: "1. Clauses that protect you",
        body: "Focus on the language that defines ownership, access, and exit.",
        bullets: [
          "Title, deposit, and condition precedents",
          "Repair, maintenance, and handover standards",
          "Default, penalty, and cure periods",
          "Assignment, subletting, and transfer rights",
        ],
      },
      {
        id: "diligence",
        title: "2. Diligence before you commit",
        body: "Verification now is cheaper than litigation later.",
        bullets: [
          "Confirm parties’ authority to sign",
          "Review surveys, permits, and encumbrances",
          "Align payment schedules with delivery milestones",
          "Document every side agreement in writing",
        ],
      },
    ],
    closing:
      "Whether you are leasing or buying, precise drafting is the best protection. Farrayeh can review or draft with that standard in mind.",
  }),
};

/**
 * Typed Blog listing page content.
 */
export async function getBlogContent(): Promise<BlogPageContent> {
  return {
    nav,
    hero: {
      label: "Blog and Articles",
      title: "Latest insights and tips",
      description:
        "Practical guidance on legal matters, client rights, and how to move forward with clarity.",
    },
    featured: featuredPost,
    posts: listingPosts,
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
    cta,
    footer,
  };
}

export function getBlogSlugs(): string[] {
  return Object.keys(articles);
}

export async function getBlogArticle(
  slug: string,
): Promise<BlogArticlePageContent | null> {
  const article = articles[slug];
  if (!article) return null;

  const relatedPool = [featuredPost, ...listingPosts].filter(
    (p) => p.id !== slug,
  );

  return {
    nav,
    article,
    related: {
      label: "Blog",
      title: "Legal insights and tips",
      viewAll: { label: "View All", href: "/blog" },
      posts: relatedPool.slice(0, 3),
    },
    cta,
    footer,
  };
}
