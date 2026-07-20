import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import {
  ContactHero,
  ContactForm,
  ContactMap,
} from "@/components/sections/ContactPage";
import { getContactContent } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact — Farrayeh Law",
  description:
    "Book a consultation or contact Farrayeh Law. Reach our team for clear guidance and next steps.",
};

export default async function ContactPageRoute() {
  const content = await getContactContent();

  return (
    <>
      <Navbar content={content.nav} />
      <main id="contact">
        <section className="bg-[#FBFBF9] pt-10 md:pt-12 lg:pt-14">
          <Container>
            <ContactHero content={content.hero} />
            <ContactForm content={content.form} />
          </Container>
        </section>
        <ContactMap content={content.location} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
