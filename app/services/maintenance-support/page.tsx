import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Maintenance & Support",
        subtitle: "Updates, fixes, and small changes — so your site stays stable after launch.",
        image: "/service-maintenance.png",
        primaryCtaText: "Request support",
        primaryCtaHref: "/contact",
        price: "$299 / month",
        sections: {
          what: [
            { title: "Small changes", desc: "Text edits, sections, new pages, quick tweaks." },
            { title: "Fixes", desc: "We handle bugs and broken UI when things go weird." },
            { title: "Monitoring", desc: "Basic checks so problems get noticed early." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Fixes and small updates",
              "Performance touch-ups when needed",
              "Content edits (text/images)",
              "Optional monthly check-in",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Best fit if",
            items: [
              "You want someone reliable for changes",
              "You don’t want to touch code",
              "You want the site kept clean over time",
            ],
          },
          howItGoes: [
            { n: "01", title: "Request", desc: "Send what you need changed." },
            { n: "02", title: "Estimate", desc: "We reply with the plan + timeline." },
            { n: "03", title: "Update", desc: "We implement and test." },
            { n: "04", title: "Ship", desc: "We push it live and confirm." },
          ],
        },
      }}
    />
  );
}