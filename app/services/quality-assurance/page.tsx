import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Quality Assurance & Reviews",
        subtitle:
          "Bug hunts + pre-launch checks so you don’t launch with avoidable issues.",
        image: "/service-qa.png",
        primaryCtaText: "Request QA review",
        primaryCtaHref: "/contact",
        sections: {
          what: [
            { title: "Bug hunt", desc: "We click everything like a real user would." },
            { title: "Responsive review", desc: "Phone + tablet + desktop checks." },
            { title: "Pre-launch sanity", desc: "Pages, links, forms, edge cases." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Issue list with screenshots",
              "Priority notes (fix first / later)",
              "Quick UX notes (if something is confusing)",
              "Optional re-check after fixes",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Best fit if",
            items: [
              "You’re about to launch",
              "Your site was built fast and needs a second look",
              "You want issues caught before users do",
            ],
          },
          howItGoes: [
            { n: "01", title: "Access", desc: "You send the URL + any staging link." },
            { n: "02", title: "Review", desc: "We test flows and pages." },
            { n: "03", title: "Report", desc: "We send issues + priority order." },
            { n: "04", title: "Re-check", desc: "Optional verification after fixes." },
          ],
        },
      }}
    />
  );
}
