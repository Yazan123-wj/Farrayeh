"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/Reveal";
import { cn } from "@/lib/cn";
import type { ContactPageContent } from "@/content/types";

interface ContactFormProps {
  content: ContactPageContent["form"];
}

function UnderlineField({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block" htmlFor={id}>
      <span className="text-[15px] font-semibold text-ink md:text-base">
        {label}
      </span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "mt-3 w-full border-0 border-b border-ink/15 bg-transparent pb-3 text-[15px] text-ink outline-none transition-colors",
          "placeholder:text-muted/70 focus:border-accent",
        )}
      />
    </label>
  );
}

export function ContactForm({ content }: ContactFormProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Reveal delay={0.12}>
      <form
        onSubmit={onSubmit}
        className="mx-auto mt-12 w-full max-w-3xl md:mt-14 lg:mt-16"
        noValidate={false}
      >
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12">
          <UnderlineField
            id="firstName"
            label={content.fields.firstName.label}
            placeholder={content.fields.firstName.placeholder}
            value={firstName}
            onChange={setFirstName}
          />
          <UnderlineField
            id="lastName"
            label={content.fields.lastName.label}
            placeholder={content.fields.lastName.placeholder}
            value={lastName}
            onChange={setLastName}
          />
          <UnderlineField
            id="phone"
            label={content.fields.phone.label}
            placeholder={content.fields.phone.placeholder}
            type="tel"
            value={phone}
            onChange={setPhone}
          />
          <UnderlineField
            id="email"
            label={content.fields.email.label}
            placeholder={content.fields.email.placeholder}
            type="email"
            required
            value={email}
            onChange={setEmail}
          />
        </div>

        <label className="mt-10 block md:mt-12" htmlFor="message">
          <span className="text-[15px] font-semibold text-ink md:text-base">
            {content.fields.message.label}
          </span>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder={content.fields.message.placeholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={cn(
              "mt-3 w-full resize-y border-0 border-b border-ink/15 bg-transparent pb-3 text-[15px] text-ink outline-none transition-colors",
              "placeholder:text-muted/70 focus:border-accent",
            )}
          />
        </label>

        <button
          type="submit"
          className="btn-shine mt-10 w-full rounded-[6px] bg-ink px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-accent md:mt-12 md:py-[1.15rem]"
        >
          {content.submitLabel}
        </button>

        {submitted ? (
          <p className="mt-5 text-center text-sm text-muted" role="status">
            Thank you — we’ll get back to you shortly.
          </p>
        ) : null}
      </form>
    </Reveal>
  );
}

export function ContactHero({
  content,
}: {
  content: ContactPageContent["hero"];
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <p className="mb-5 text-[16px] font-medium uppercase tracking-[0.22em] text-muted md:mb-6">
          {content.label}
        </p>
        <h1 className="font-display text-[2.75rem] leading-[1.08] tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl lg:text-[4.35rem] lg:leading-[1.05]">
          {content.title}
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.7] text-muted md:mt-7 md:text-base md:leading-[1.75]">
          {content.description}
        </p>
      </Reveal>
    </div>
  );
}

export function ContactMap({
  content,
}: {
  content: ContactPageContent["location"];
}) {
  return (
    <section
      className="bg-[#FBFBF9] pb-16 pt-16 md:pb-24 md:pt-20 lg:pb-28 lg:pt-24"
      aria-labelledby="location-heading"
    >
      <Container>
        <Reveal>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="mb-4 text-[16px] font-medium uppercase tracking-[0.22em] text-accent md:mb-5">
              {content.label}
            </p>
            <h2
              id="location-heading"
              className="font-display text-3xl tracking-tight text-ink md:text-4xl lg:text-[2.75rem]"
            >
              {content.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted md:text-base">
              {content.address}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} variant="clip" y={40}>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-[#e5e5e5] md:aspect-[2.2/1]">
            <iframe
              title={`Map — ${content.address}`}
              src={content.mapEmbedUrl}
              className="absolute inset-0 h-full w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
