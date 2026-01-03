import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Performance & Optimization",
        subtitle: "Speed work that actually shows up in real usage — not just screenshots.",
        image: "/service-performance.png",
        primaryCtaText: "Improve speed",
        primaryCtaHref: "/contact",
        price: "$750 / one-time", 
        sections: {
          what: [
            { title: "Core Web Vitals", desc: "Make the site feel fast, not heavy." },
            { title: "Asset cleanup", desc: "Images, scripts, and loading priorities." },
            { title: "UX tightening", desc: "Small changes that reduce friction." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Speed + loading improvements",
              "Image optimization",
              "Code + bundle cleanup (where possible)",
              "Before/after notes",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Best fit if",
            items: [
              "Your site feels slow on mobile",
              "You’re running ads and want better conversions",
              "You want better Lighthouse/Vitals without breaking design",
            ],
          },
          howItGoes: [
            { n: "01", title: "Baseline", desc: "We measure what’s slow and why." },
            { n: "02", title: "Fix", desc: "We optimize the biggest bottlenecks first." },
            { n: "03", title: "Verify", desc: "We re-check after changes." },
            { n: "04", title: "Ship", desc: "We deploy and confirm." },
          ],
        },
      }}
    />
  );
}