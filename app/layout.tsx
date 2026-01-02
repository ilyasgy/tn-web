import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "ThreatNest — Modern Web Development",
    template: "%s — ThreatNest",
  },
  description: "We design, build, and deploy modern websites, from planning to launch.",

  metadataBase: new URL("https://threatnest.com"),

  // Optional: nice for PWA installs + iOS home screen naming
  applicationName: "ThreatNest",
  appleWebApp: {
    title: "ThreatNest",
    capable: true,
  },
  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    url: "https://threatnest.com/",
    title: "ThreatNest — Modern Web Development",
    description: "We design, build, and deploy modern websites, from planning to launch.",
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
    title: "ThreatNest — Modern Web Development",
    description: "We design, build, and deploy modern websites, from planning to launch.",
    images: ["/og.png"],
  },

  // If you used RealFaviconGenerator + placed files in app/ (or src/app/),
  // Next can auto-detect. Keeping this is fine too.
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
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
    // Default to dark mode on server-side to prevent flash
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <ThemeToggle /> {/* Add the button here */}
      </body>
    </html>
  );
}