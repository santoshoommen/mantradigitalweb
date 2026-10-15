import type { EnquiryInput, SubscribeInput } from "@/lib/validation";

type SendResult =
  | { delivered: true }
  | { delivered: false; reason: "not_configured" | "provider_error" };

function requiredMailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !to || !from) return null;
  return { apiKey, to, from };
}

function enquiryText(input: EnquiryInput) {
  const lines = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Organisation: ${input.organisation || "—"}`,
    `Website: ${input.website || "—"}`,
    `Interest: ${input.interest}`,
    `Plan: ${input.plan || "—"}`,
    `Budget: ${input.budget || "—"}`,
    `Timeline: ${input.timeline || "—"}`,
    `Landing path: ${input.landingPath || "—"}`,
    `UTM source: ${input.utmSource || "—"}`,
    `UTM medium: ${input.utmMedium || "—"}`,
    `UTM campaign: ${input.utmCampaign || "—"}`,
    `UTM term: ${input.utmTerm || "—"}`,
    `UTM content: ${input.utmContent || "—"}`,
    "",
    input.message,
  ];
  return lines.join("\n");
}

export async function sendEnquiry(input: EnquiryInput): Promise<SendResult> {
  const config = requiredMailConfig();
  if (!config) return { delivered: false, reason: "not_configured" };

  const { Resend } = await import("resend");
  const resend = new Resend(config.apiKey);
  const { error } = await resend.emails.send({
    from: config.from,
    to: config.to,
    replyTo: input.email,
    subject: `Website enquiry from ${input.name}`,
    text: enquiryText(input),
  });
  if (error) return { delivered: false, reason: "provider_error" };

  if (process.env.CONTACT_SEND_ACKNOWLEDGEMENT === "true") {
    await resend.emails.send({
      from: config.from,
      to: input.email,
      subject: "We have received your enquiry — Mantra Digital Magic",
      text: `Hello ${input.name},\n\nThank you for writing to Mantra Digital Magic. We have received your message and will reply by email.\n\nThis note confirms that we received the form. It is not a booking confirmation.\n`,
    });
  }

  return { delivered: true };
}

export async function sendSubscription(input: SubscribeInput): Promise<SendResult> {
  const config = requiredMailConfig();
  if (!config) return { delivered: false, reason: "not_configured" };

  const { Resend } = await import("resend");
  const resend = new Resend(config.apiKey);
  const { error } = await resend.emails.send({
    from: config.from,
    to: config.to,
    replyTo: input.email,
    subject: "Newsletter interest from the website",
    text: `Email: ${input.email}\nAsked to receive occasional notes from the website footer.`,
  });
  if (error) return { delivered: false, reason: "provider_error" };
  return { delivered: true };
}
