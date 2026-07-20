import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import { PageLoader } from "@/components/animations/PageLoader";
import "./globals.css";

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Farrayeh — Law & Legal Consultations",
  description:
    "Farrayeh provides professional legal counsel and consultations. Trusted advocacy, clear guidance, and results-driven representation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-[#FBFBF9] font-sans text-ink antialiased"
        suppressHydrationWarning
      >
        <PageLoader />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
