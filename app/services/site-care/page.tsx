import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function SiteCarePage() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Site Care & Support",
        subtitle: "Monthly maintenance to keep your site updated, secure, and running smoothly.",
        image: "/service-maintenance.png",
        primaryCtaText: "Start care plan",
        primaryCtaHref: "/contact?service=site-care",
        price: "$299 / mo",
        sections: {
          what: [
            { title: "Updates", desc: "Regular maintenance of plugins, themes, and core files." },
            { title: "Monitoring", desc: "24/7 uptime checks and security scanning." },
            { title: "Small Tasks", desc: "Up to 2 small text or image swaps included per month." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Technical maintenance",
              "Uptime monitoring",
              "Monthly backup verification",
              "Content update credits",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Best fit if",
            items: [
              "You want peace of mind regarding security",
              "You don't have time to manage technical updates",
              "You need a reliable partner for small monthly tweaks",
            ],
          },
          howItGoes: [
            { n: "01", title: "Onboard", desc: "We connect your site to our tools." },
            { n: "02", title: "Audit", desc: "Initial check to fix existing backlog issues." },
            { n: "03", title: "Maintain", desc: "Continuous monitoring and monthly updates." },
            { n: "04", title: "Report", desc: "Monthly summary of site health and updates." },
          ],
        },
      }}
    />
  );
}