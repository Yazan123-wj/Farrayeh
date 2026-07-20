import type { ContactPageContent } from "./types";

/**
 * Typed Contact page content — form + location map.
 */
export async function getContactContent(): Promise<ContactPageContent> {
  return contactContent;
}

const contactContent: ContactPageContent = {
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
    label: "Contact Us",
    title: "We're here to help",
    description:
      "Reach out to our dedicated support team for any assistance you may need.",
  },

  form: {
    submitLabel: "Contact Us",
    fields: {
      firstName: {
        label: "First name",
        placeholder: "Your first name",
      },
      lastName: {
        label: "Last name",
        placeholder: "Your last name",
      },
      phone: {
        label: "Phone number",
        placeholder: "Your phone number",
      },
      email: {
        label: "Email address (required)",
        placeholder: "Your email address",
      },
      message: {
        label: "Enter your messages",
        placeholder: "Type your messages",
      },
    },
  },

  location: {
    label: "Location",
    title: "Visit our office",
    address: "Farrayeh Law — Al Qassim, Saudi Arabia",
    /** Google Maps embed — Al Qassim region */
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Al%20Qassim%2C%20Saudi%20Arabia&z=12&output=embed",
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
