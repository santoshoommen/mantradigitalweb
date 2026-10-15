import { NextResponse } from "next/server";
import { sendEnquiry } from "@/lib/mail";
import { clientIp, isAllowedOrigin, rateLimit } from "@/lib/security";
import { enquirySchema, fieldErrors, isHoneypotTripped } from "@/lib/validation";

export const runtime = "nodejs";

async function turnstileOk(token: string | undefined) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  if (!secret || !siteKey) return true;
  if (!token) return false;
  const body = new URLSearchParams({ secret, response: token });
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  const data = (await response.json()) as { success?: boolean };
  return Boolean(data.success);
}

export async function POST(request: Request) {
  const host = request.headers.get("host");
  if (!isAllowedOrigin(request.headers.get("origin"), host)) {
    return NextResponse.json({ ok: false, message: "This form could not be sent from that page." }, { status: 403 });
  }

  const limit = rateLimit(`contact:${clientIp(request)}`, 5, 10 * 60 * 1000);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, message: "Too many enquiries from this connection. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  const raw = await request.text();
  if (raw.length > 20_000) {
    return NextResponse.json({ ok: false, message: "That message is too long." }, { status: 413 });
  }

  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, message: "We could not read that submission." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check the form and try again.", errors: fieldErrors(parsed.error) },
      { status: 400 },
    );
  }

  if (isHoneypotTripped(parsed.data.companyWebsiteConfirm)) {
    return NextResponse.json({ ok: true, delivery: "ignored" });
  }

  if (!(await turnstileOk(parsed.data.turnstileToken))) {
    return NextResponse.json({ ok: false, message: "Please complete the spam check and try again." }, { status: 400 });
  }

  const result = await sendEnquiry(parsed.data);
  if (!result.delivered && result.reason === "not_configured" && process.env.NODE_ENV !== "production") {
    console.info(`Enquiry validated in development. Interest: ${parsed.data.interest}. Plan: ${parsed.data.plan || "none"}.`);
    return NextResponse.json({ ok: true, delivery: "logged" });
  }
  if (!result.delivered) {
    console.error("Enquiry email was not delivered.");
    return NextResponse.json(
      { ok: false, message: "We could not send your message just now. Please try again shortly." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, delivery: "sent" });
}
