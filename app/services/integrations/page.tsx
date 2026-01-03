import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Integrations",
        subtitle: "Payments, CRMs, automations — the stuff that connects your site to real business.",
        image: "/service-integrations.png",
        primaryCtaText: "Request integration",
        primaryCtaHref: "/contact",
        price: "From $600",
        sections: {
          what: [
            { title: "Payments", desc: "Stripe/checkout flows and basic purchase setup." },
            { title: "CRMs", desc: "Send leads to your CRM cleanly." },
            { title: "Automations", desc: "Emails, notifications, form routing." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Integration setup + testing",
              "Clean handoff notes",
              "Fail-safe handling (where possible)",
              "Optional admin guidance",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Best fit if",
            items: [
              "You want leads to go somewhere automatically",
              "You want checkout/payment connected",
              "You want less manual work",
            ],
          },
          howItGoes: [
            { n: "01", title: "Pick tools", desc: "We confirm what you use (or suggest)." },
            { n: "02", title: "Connect", desc: "We implement the integration." },
            { n: "03", title: "Test", desc: "We test real flows end-to-end." },
            { n: "04", title: "Ship", desc: "We deploy and confirm." },
          ],
        },
      }}
    />
  );
}