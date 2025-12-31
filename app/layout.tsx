
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


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
  description:
    "We design, build, and deploy modern websites, from planning to launch.",

  metadataBase: new URL("https://threatnest.com"),

  openGraph: {
    title: "ThreatNest — Modern Web Development",
    description:
      "We design, build, and deploy modern websites, from planning to launch.",
    url: "https://threatnest.com",
    siteName: "ThreatNest",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ThreatNest",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ThreatNest — Modern Web Development",
    description:
      "We design, build, and deploy modern websites, from planning to launch.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}