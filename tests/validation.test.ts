import { describe, expect, it } from "vitest";
import { resetRateLimit, rateLimit, isAllowedOrigin } from "@/lib/security";
import { enquirySchema, fieldErrors, isHoneypotTripped, subscribeSchema } from "@/lib/validation";

const validEnquiry = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  organisation: "Analytical Engines",
  website: "https://example.com",
  interest: "managed-website",
  plan: "grow",
  budget: "Monthly subscription",
  timeline: "Within three months",
  message: "We need a managed website for a clinic.",
  consent: true,
  companyWebsiteConfirm: "",
};

describe("enquiry schema", () => {
  it("accepts a complete enquiry", () => {
    expect(enquirySchema.safeParse(validEnquiry).success).toBe(true);
  });

  it("rejects a missing email, a short message and missing consent", () => {
    const parsed = enquirySchema.safeParse({
      ...validEnquiry,
      email: "not-an-email",
      message: "Too short",
      consent: false,
    });
    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      const errors = fieldErrors(parsed.error);
      expect(errors.email).toBeTruthy();
      expect(errors.message).toBeTruthy();
      expect(errors.consent).toBeTruthy();
    }
  });

  it("rejects a website without a protocol", () => {
    const parsed = enquirySchema.safeParse({ ...validEnquiry, website: "example.com" });
    expect(parsed.success).toBe(false);
  });

  it("detects the honeypot", () => {
    expect(isHoneypotTripped("")).toBe(false);
    expect(isHoneypotTripped("https://spam.example")).toBe(true);
  });
});

describe("subscribe schema", () => {
  it("requires a real email and consent", () => {
    expect(subscribeSchema.safeParse({ email: "ada@example.com", consent: true }).success).toBe(true);
    expect(subscribeSchema.safeParse({ email: "ada@example.com", consent: false }).success).toBe(false);
  });
});

describe("abuse controls", () => {
  it("rate limits after the allowed number of attempts", () => {
    resetRateLimit();
    expect(rateLimit("test", 2, 10_000, 1_000).ok).toBe(true);
    expect(rateLimit("test", 2, 10_000, 1_100).ok).toBe(true);
    const blocked = rateLimit("test", 2, 10_000, 1_200);
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) expect(blocked.retryAfter).toBeGreaterThan(0);
  });

  it("allows the same host and rejects a foreign origin", () => {
    expect(isAllowedOrigin(null, "localhost:3000")).toBe(true);
    expect(isAllowedOrigin("http://localhost:3000", "localhost:3000")).toBe(true);
    expect(isAllowedOrigin("https://evil.example", "localhost:3000")).toBe(false);
  });
});
