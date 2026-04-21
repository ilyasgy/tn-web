import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function DesignMaintenanceProPage() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Design & Maintenance Pro",
        subtitle: "Monthly design and site updates for teams that are still shipping.",
        image: "/service-performance.png",
        primaryCtaText: "Ask about Pro",
        primaryCtaHref: "/contact?service=design-maintenance-pro",
        price: "$599 / mo",
        sections: {
          what: [
            { title: "Design updates", desc: "Fresh sections, visual updates, and cleaner pages." },
            { title: "New work", desc: "New pages, landing sections, and ongoing frontend changes." },
            { title: "Technical upkeep", desc: "Regular support work stays covered while the site grows." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Design reviews and visual improvements",
              "Priority support requests",
              "Ongoing frontend changes",
              "Regular check-ins",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Good fit",
            items: [
              "Teams running regular campaigns",
              "Sites that need fresh design work every month",
              "Businesses that want one partner staying close to the site",
            ],
          },
          howItGoes: [
            { n: "01", title: "Plan", desc: "We review the monthly goals and the work list." },
            { n: "02", title: "Design", desc: "We ship the visual and frontend changes." },
            { n: "03", title: "Check", desc: "We review the changes and tighten the details." },
            { n: "04", title: "Repeat", desc: "The next batch of work starts from there." },
          ],
        },
      }}
    />
  );
}
