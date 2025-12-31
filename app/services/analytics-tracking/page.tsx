import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Analytics & Tracking",
        subtitle:
          "Events, funnels, and tracking that tells you what’s working — and what isn’t.",
        image: "/service-analytics.png",
        primaryCtaText: "Set up tracking",
        primaryCtaHref: "/contact",
        sections: {
          what: [
            { title: "Analytics setup", desc: "Basic analytics done correctly." },
            { title: "Event tracking", desc: "Clicks, forms, CTA taps, conversions." },
            { title: "Funnels", desc: "See where users drop off." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Analytics installed + verified",
              "Key events tracked",
              "Simple funnel view",
              "Short handoff notes",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Best fit if",
            items: [
              "You’re running ads",
              "You want to measure conversions properly",
              "You want to fix drop-offs with real data",
            ],
          },
          howItGoes: [
            { n: "01", title: "Goals", desc: "We pick what to track (what matters)." },
            { n: "02", title: "Setup", desc: "We install + configure." },
            { n: "03", title: "Verify", desc: "We test events end-to-end." },
            { n: "04", title: "Handoff", desc: "You get a clean tracking summary." },
          ],
        },
      }}
    />
  );
}
