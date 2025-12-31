import { NextResponse } from "next/server";

const SUPPORT_OPTIONS = [
  {
    id: "basics",
    title: "Getting started",
    items: [
      { id: "scope", title: "What do you check?", answer: "We review common exposure, headers, auth/session hygiene, access control basics, file upload checks, and re-test key fixes." },
      { id: "turnaround", title: "How long does it take?", answer: "Standard delivery is 48 hours after payment + authorization is confirmed." },
    ],
  },
  {
    id: "billing",
    title: "Pricing & billing",
    items: [
      { id: "pricing", title: "Pricing & plans", answer: "Pricing depends on scope and size. Send your URL + platform and we’ll confirm the right plan." },
    ],
  },
];

export async function GET() {
  return NextResponse.json({ ok: true, options: SUPPORT_OPTIONS });
}
