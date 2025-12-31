import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function clampStr(v: unknown, max: number) {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    const email = clampStr(body.email, 200);
    const message = clampStr(body.message, 2000);
    const pageUrl = clampStr(body.pageUrl || "—", 500);
    const relatedTopic = clampStr(body.relatedTopic || "—", 150);
    const relatedCategory = clampStr(body.relatedCategory || "—", 150);

    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }
    if (!message) {
      return NextResponse.json({ ok: false, error: "Message is required." }, { status: 400 });
    }

    const SUPPORT_INBOX = process.env.SUPPORT_INBOX || "";
    const SUPPORT_FROM = process.env.SUPPORT_FROM || "";

    if (!resend || !SUPPORT_INBOX || !SUPPORT_FROM) {
      return NextResponse.json(
        { ok: false, error: "Email is not configured on the server." },
        { status: 500 }
      );
    }

    // Email to you
    await resend.emails.send({
      from: SUPPORT_FROM,
      to: [SUPPORT_INBOX],
      replyTo: email,
      subject: `New Support Ticket (${relatedCategory})`,
      text: `From: ${email}\nTopic: ${relatedTopic}\nCategory: ${relatedCategory}\nPage: ${pageUrl}\n\nMessage:\n${message}`,
    });

    // Auto reply to user (optional)
    await resend.emails.send({
      from: SUPPORT_FROM,
      to: [email],
      subject: `We got your message`,
      text: `Thanks — we received your message and we’ll reply by email.\n\nYour message:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("support ticket error:", err);
    return NextResponse.json({ ok: false, error: "Failed to send email." }, { status: 500 });
  }
}
