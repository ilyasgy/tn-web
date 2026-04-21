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

const siteTitle = "ThreatNest \u2014 Web Development & Website Security Reviews";
const siteDescription =
  "We build clean, modern websites, then review the live site for real security issues after launch.";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://threatnest.com"),
  applicationName: "ThreatNest",
  appleWebApp: {
    title: "ThreatNest",
    capable: true,
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://threatnest.com/",
    title: siteTitle,
    description: siteDescription,
    siteName: "ThreatNest",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ThreatNest",
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
  },
  robots: {
    index: true,
    follow: true,
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
