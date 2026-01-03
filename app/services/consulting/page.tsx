import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function Page() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Consulting",
        subtitle: "Architecture, direction, and decisions — when you want clarity before building.",
        image: "/service-consulting.png",
        primaryCtaText: "Book a consult",
        primaryCtaHref: "/contact",
        price: "$150 / hour",
        sections: {
          what: [
            { title: "Direction", desc: "What to build first, what to skip, what matters." },
            { title: "Tech decisions", desc: "Stack, hosting, CMS, integrations — without overkill." },
            { title: "Plan", desc: "A simple roadmap you can execute." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Clear recommendations",
              "A simple action plan",
              "Tradeoffs explained in plain language",
              "Optional follow-up",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Best fit if",
            items: [
              "You’re stuck deciding what to build",
              "You’re rebuilding and don’t want mistakes again",
              "You want a real plan before paying for a build",
            ],
          },
          howItGoes: [
            { n: "01", title: "Context", desc: "You explain the goal and constraints." },
            { n: "02", title: "Questions", desc: "We identify what matters fast." },
            { n: "03", title: "Plan", desc: "We give a clear direction + next steps." },
            { n: "04", title: "Optional", desc: "We can build it, or you can take the plan." },
          ],
        },
      }}
    />
  );
}