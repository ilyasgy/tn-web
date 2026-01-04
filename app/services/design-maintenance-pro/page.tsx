import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function DesignMaintenanceProPage() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Design & Maintenance Pro",
        subtitle: "A dedicated webmaster for businesses that need constant growth and visual evolution.",
        image: "/service-performance.png",
        primaryCtaText: "Join Pro Plan",
        primaryCtaHref: "/contact?service=design-maintenance-pro",
        price: "$599 / mo",
        sections: {
          what: [
            { title: "Design Refresh", desc: "Monthly UI improvements and landing page tweaks." },
            { title: "New Sections", desc: "Building new blocks, pages, or features as you scale." },
            { title: "Full Care", desc: "All features of the Site Care plan are included." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Proactive design audits",
              "Priority support requests",
              "Unlimited small design tweaks",
              "Bi-weekly check-ins",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Best fit if",
            items: [
              "You are constantly launching new marketing campaigns",
              "Your site needs regular visual updates to stay fresh",
              "You want a technical partner involved in your growth",
            ],
          },
          howItGoes: [
            { n: "01", title: "Strategy", desc: "We discuss your monthly goals." },
            { n: "02", title: "Design", desc: "We propose and implement visual updates." },
            { n: "03", title: "Optimize", desc: "Regular performance and conversion tuning." },
            { n: "04", title: "Scale", desc: "Continuous improvements as your business grows." },
          ],
        },
      }}
    />
  );
}