import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ScrollRevealObserver from "./components/ScrollRevealObserver";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import ThemeToggle from "./components/ThemeToggle";

const siteUrl = "https://threatnest.com";
const siteTitle = "ThreatNest | Healthcare Application Security Audits";
const siteDescription =
  "Fixed scope application security audits for healthcare clinics, dental practices, and medical centers. Manual testing, PHI tracking exposure review, clear fixes, and one retest.";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ThreatNest",
  url: siteUrl,
  logo: `${siteUrl}/icon1.png`,
  sameAs: [
    "https://www.instagram.com/threatnest/",
    "https://tr.linkedin.com/company/threatnest/",
  ],
  description: siteDescription,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ThreatNest",
  url: siteUrl,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | ThreatNest",
  },
  description: siteDescription,
  applicationName: "ThreatNest",
  keywords: [
    "healthcare application security audit",
    "healthcare penetration testing",
    "medical website security audit",
    "dental website security audit",
    "PHI tracking exposure review",
    "security header assessment",
    "application penetration test",
  ],
  authors: [{ name: "ThreatNest" }],
  creator: "ThreatNest",
  publisher: "ThreatNest",
  category: "Cybersecurity",
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    title: "ThreatNest",
    capable: true,
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "ThreatNest",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ThreatNest healthcare application security audits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem("theme");
                  var root = document.documentElement;
                  var isDark = saved !== "light";
                  root.classList.toggle("dark", isDark);
                  root.classList.toggle("light", !isDark);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
          <ScrollToTopOnRouteChange />
        </Suspense>
        <ScrollRevealObserver />
        <Navbar />
        {children}
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
