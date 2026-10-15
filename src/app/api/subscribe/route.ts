import { NextResponse } from "next/server";
import { sendSubscription } from "@/lib/mail";
import { clientIp, isAllowedOrigin, rateLimit } from "@/lib/security";
import { fieldErrors, isHoneypotTripped, subscribeSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isAllowedOrigin(request.headers.get("origin"), request.headers.get("host"))) {
    return NextResponse.json({ ok: false, message: "This form could not be sent from that page." }, { status: 403 });
  }

  const limit = rateLimit(`subscribe:${clientIp(request)}`, 5, 10 * 60 * 1000);
  if (!limit.ok) {
    return NextResponse.json(
      { ok: false, message: "Please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "We could not read that submission." }, { status: 400 });
  }

  const parsed = subscribeSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: "Please check your email and confirmation.", errors: fieldErrors(parsed.error) },
      { status: 400 },
    );
  }

  if (isHoneypotTripped(parsed.data.companyWebsiteConfirm)) {
    return NextResponse.json({ ok: true, delivery: "ignored" });
  }

  const result = await sendSubscription(parsed.data);
  if (!result.delivered && result.reason === "not_configured" && process.env.NODE_ENV !== "production") {
    console.info("Newsletter interest validated in development. Email delivery is not configured.");
    return NextResponse.json({ ok: true, delivery: "logged" });
  }
  if (!result.delivered) {
    console.error("Newsletter email was not delivered.");
    return NextResponse.json(
      { ok: false, message: "We could not save that just now. Please try again shortly." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true, delivery: "sent" });
}
