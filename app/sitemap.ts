import type { MetadataRoute } from "next";

const siteUrl = "https://threatnest.com";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/authorized-testing",
  "/contact",
  "/data-handling",
  "/privacy",
  "/services",
  "/services/design-maintenance-pro",
  "/services/emergency-fix",
  "/services/site-care",
  "/services/web-development",
  "/services/website-security",
  "/start",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}
