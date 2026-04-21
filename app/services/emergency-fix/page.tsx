import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export default function EmergencyFixPage() {
  return (
    <ServiceDetailPage
      cfg={{
        title: "Emergency Fix",
        subtitle: "Fast help for broken pages, layout issues, or one urgent bug.",
        image: "/service-qa.png",
        primaryCtaText: "Request a fix",
        primaryCtaHref: "/contact?service=emergency",
        price: "$150",
        sections: {
          what: [
            { title: "Bug fix", desc: "We identify the issue and resolve the specific problem." },
            { title: "Layout repair", desc: "We fix broken mobile layouts, styling issues, and frontend errors." },
            { title: "Recovery help", desc: "We can also help with smaller breakages or bad config changes." },
          ],
          includes: {
            label: "INCLUDED",
            title: "What you get",
            items: [
              "Single issue investigation",
              "Fix implementation",
              "Verification testing",
              "Short summary of the fix",
            ],
          },
          goodFor: {
            label: "GOOD FOR",
            title: "Good fit",
            items: [
              "A broken contact form",
              "A layout problem on mobile",
              "One bug that needs a fast fix",
            ],
          },
          howItGoes: [
            { n: "01", title: "Send it", desc: "You describe the issue and send access if needed." },
            { n: "02", title: "Verify it", desc: "We confirm the problem and the safest fix." },
            { n: "03", title: "Fix it", desc: "We apply the change and test it." },
            { n: "04", title: "Close it", desc: "You get the fix and a short explanation." },
          ],
        },
      }}
    />
  );
}
