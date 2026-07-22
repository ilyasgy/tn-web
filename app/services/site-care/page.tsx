import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function SiteCarePage() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Site Care & Support",
        subtitle: "Monthly upkeep for sites that need regular updates, checks, and small changes.",
        image: "/service-maintenance.png",
        primaryCtaText: "Start care plan",
        primaryCtaHref: "/contact?service=site-care",
        price: "$299 / mo",
        sections: {
          what: [
            { title: "Core updates", desc: "Regular maintenance for the site and the parts behind it." },
            { title: "Monitoring", desc: "Ongoing checks for uptime and obvious technical issues." },
            { title: "Small changes", desc: "Monthly text, image, and simple content updates." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Technical maintenance",
              "Uptime monitoring",
              "Backup checks",
              "Time for small content updates",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Good fit",
            items: [
              "Businesses without internal technical support",
              "Sites that need regular upkeep",
              "Teams that want small changes handled quickly",
            ],
          },
          howItGoes: [
            { n: "01", title: "Onboard", desc: "We connect the site and review the current setup." },
            { n: "02", title: "Fix backlog", desc: "We handle the obvious issues first." },
            { n: "03", title: "Maintain", desc: "Ongoing checks and routine updates continue monthly." },
            { n: "04", title: "Report", desc: "You get a short update on the work done." },
          ],
        },
      }}
    />
  );
}
