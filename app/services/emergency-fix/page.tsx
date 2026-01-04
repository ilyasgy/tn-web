import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function EmergencyFixPage() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Emergency Fix",
        subtitle: "Fast turnaround for critical website issues, broken layouts, or plugin conflicts.",
        image: "/service-qa.png",
        primaryCtaText: "Request a fix",
        primaryCtaHref: "/contact?service=emergency",
        price: "$150",
        sections: {
          what: [
            { title: "Bug Fixes", desc: "Resolving functional errors and broken features." },
            { title: "UI Repairs", desc: "Fixing messy layouts, CSS glitches, and mobile responsiveness." },
            { title: "Security Restoration", desc: "Recovering sites from minor breaches or configuration errors." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Single issue resolution",
              "Pre-fix diagnostics",
              "Verification testing",
              "Brief explanation of the fix",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Best fit if",
            items: [
              "Your contact form stopped working",
              "The site looks 'broken' on mobile",
              "You have a single annoying bug you can't solve",
            ],
          },
          howItGoes: [
            { n: "01", title: "Report", desc: "Describe the issue and provide access." },
            { n: "02", title: "Verify", desc: "We confirm the bug and plan the fix." },
            { n: "03", title: "Resolve", desc: "We implement the solution safely." },
            { n: "04", title: "Handoff", desc: "Issue fixed and verified by you." },
          ],
        },
      }}
    />
  );
}