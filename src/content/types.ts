/** CMS-ready content contracts for the Farrayeh marketing site. */

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  title: string;
  links: NavLink[];
}

export interface SiteNav {
  logo: {
    primary: string;
    secondary: string;
  };
  menuLabel: string;
  cta: NavLink;
  groups: NavGroup[];
  /** Featured image in the curtain menu (right column) */
  featuredImage: MediaAsset;
}

export interface MediaAsset {
  /** Human-readable swap label for designers / CMS authors */
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  description: string;
  cta: CtaLink;
  image: MediaAsset;
}

export interface StatMetric {
  id: string;
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
}

export type ServiceIconName =
  | "life"
  | "health"
  | "home"
  | "travel"
  | "scale"
  | "brief"
  | "users"
  | "doc";

export interface StatisticContent {
  label: string;
  title: string;
  description: string;
  metrics: StatMetric[];
  image: MediaAsset;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: ServiceIconName;
}

export interface ServicesContent {
  label: string;
  title: string;
  description: string;
  viewAll: CtaLink;
  items: ServiceItem[];
  images: [MediaAsset, MediaAsset];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: MediaAsset;
}

export interface TestimonialsContent {
  label: string;
  title: string;
  description: string;
  cta: CtaLink;
  items: Testimonial[];
}

export interface TrustFeature {
  id: string;
  title: string;
  description: string;
}

export interface TrustContent {
  label: string;
  title: string;
  description: string;
  features: TrustFeature[];
  image: MediaAsset;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
}

export interface SolutionsContent {
  label: string;
  title: string;
  cta: CtaLink;
  footer: string;
  items: SolutionItem[];
  image: MediaAsset;
}

export interface BlogPost {
  id: string;
  categories: string[];
  title: string;
  excerpt: string;
  href: string;
  image: MediaAsset;
  date?: string;
}

export interface BlogArticleSection {
  id: string;
  title: string;
  body: string;
  bullets?: string[];
}

export interface BlogArticle {
  slug: string;
  label: string;
  title: string;
  date: string;
  author: string;
  image: MediaAsset;
  intro: string;
  sections: BlogArticleSection[];
  closing: string;
  excerpt: string;
  categories: string[];
}

export interface BlogRelatedContent {
  label: string;
  title: string;
  viewAll: CtaLink;
  posts: BlogPost[];
}

export interface BlogArticlePageContent {
  nav: SiteNav;
  article: BlogArticle;
  related: BlogRelatedContent;
  cta: CtaContent;
  footer: FooterContent;
}

export interface BlogContent {
  label: string;
  title: string;
  viewAll: CtaLink;
  posts: BlogPost[];
}

export interface BlogPageHeroContent {
  label: string;
  title: string;
  description: string;
}

export interface BlogPageContent {
  nav: SiteNav;
  hero: BlogPageHeroContent;
  featured: BlogPost;
  posts: BlogPost[];
  benefits: ServicesBenefitsContent;
  cta: CtaContent;
  footer: FooterContent;
}

export interface CtaContent {
  title: string;
  description: string;
  cta: CtaLink;
  image: MediaAsset;
}

export interface FooterContent {
  logo: {
    primary: string;
    secondary: string;
  };
  tagline: string;
  copyright: string;
  wordmark: string;
  columns: NavGroup[];
}

export interface HomePageContent {
  nav: SiteNav;
  hero: HeroContent;
  statistic: StatisticContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  trust: TrustContent;
  solutions: SolutionsContent;
  blog: BlogContent;
  cta: CtaContent;
  footer: FooterContent;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  href: string;
  image: MediaAsset;
}

export interface TeamContent {
  label: string;
  title: string;
  description: string;
  members: TeamMember[];
}

export interface AboutPageContent {
  nav: SiteNav;
  hero: HeroContent;
  story: StatisticContent;
  team: TeamContent;
  why: TrustContent;
  cta: CtaContent;
  footer: FooterContent;
}

export interface ServicePageItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: ServiceIconName;
}

export interface ServicesHeroContent {
  eyebrow: string;
  headline: string;
  description: string;
  cta: CtaLink;
  image: MediaAsset;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconName;
}

export interface ServicesBenefitsContent {
  label: string;
  title: string;
  description: string;
  cta: CtaLink;
  items: BenefitItem[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServicesFaqContent {
  label: string;
  title: string;
  description: string;
  contactTitle: string;
  contactDescription: string;
  contactCta: CtaLink;
  items: FaqItem[];
}

export interface ServicesPageContent {
  nav: SiteNav;
  hero: ServicesHeroContent;
  grid: {
    items: ServicePageItem[];
  };
  benefits: ServicesBenefitsContent;
  faq: ServicesFaqContent;
  cta: CtaContent;
  footer: FooterContent;
}

export interface AttorneyCredential {
  id: string;
  label: string;
  value: string;
}

export interface AttorneyFocusItem {
  id: string;
  title: string;
}

export interface AttorneyPageContent {
  nav: SiteNav;
  hero: {
    role: string;
    name: string;
    quote: string;
    cta: CtaLink;
    image: MediaAsset;
  };
  perspective: {
    number: string;
    label: string;
    paragraphs: string[];
  };
  credentials: {
    number: string;
    label: string;
    title: string;
    items: AttorneyCredential[];
  };
  focus: {
    number: string;
    label: string;
    title: string;
    items: AttorneyFocusItem[];
  };
  cta: CtaContent;
  footer: FooterContent;
}

export interface ContactFormFieldCopy {
  label: string;
  placeholder: string;
}

export interface ContactPageContent {
  nav: SiteNav;
  hero: {
    label: string;
    title: string;
    description: string;
  };
  form: {
    submitLabel: string;
    fields: {
      firstName: ContactFormFieldCopy;
      lastName: ContactFormFieldCopy;
      phone: ContactFormFieldCopy;
      email: ContactFormFieldCopy;
      message: ContactFormFieldCopy;
    };
  };
  location: {
    label: string;
    title: string;
    address: string;
    mapEmbedUrl: string;
  };
  footer: FooterContent;
}
