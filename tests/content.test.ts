import { describe, expect, it } from "vitest";
import {
  articles,
  caseStudies,
  commercialNotes,
  comparisonRows,
  legal,
  marketingPaths,
  onlyPublished,
  planEnquiryHref,
  plans,
} from "@/lib/content";

describe("pricing", () => {
  it("shows the three monthly prices", () => {
    expect(plans.map((plan) => plan.price)).toEqual([99, 199, 399]);
    expect(plans.map((plan) => plan.id)).toEqual(["essential", "grow", "pro"]);
  });

  it("marks only Grow as recommended", () => {
    expect(plans.filter((plan) => plan.recommended).map((plan) => plan.id)).toEqual(["grow"]);
  });

  it("keeps Essential without a client CMS and Grow with foundational AI search", () => {
    const essential = plans.find((plan) => plan.id === "essential");
    const grow = comparisonRows.find((row) => row.label === "AI search optimisation");
    const cms = comparisonRows.find((row) => row.label === "CMS editing");
    expect(essential?.homepageFeatures.join(" ")).not.toMatch(/client-facing CMS/i);
    expect(cms?.essential).toMatch(/No client-facing CMS/);
    expect(cms?.grow).toMatch(/CMS/);
    expect(grow?.grow).toMatch(/No placement guarantee/);
    expect(grow?.pro).toMatch(/No placement guarantee/);
  });

  it("links each plan enquiry to the matching contact query", () => {
    expect(planEnquiryHref("essential")).toBe("/contact?plan=essential");
    expect(planEnquiryHref("grow")).toBe("/contact?plan=grow");
    expect(planEnquiryHref("pro")).toBe("/contact?plan=pro");
  });

  it("discloses the term, the fee and the limit of AI search", () => {
    const text = `${commercialNotes.commitment} ${commercialNotes.upfront} ${commercialNotes.aiSearch} ${commercialNotes.vat}`;
    expect(text).toMatch(/12-month initial commitment/);
    expect(text).toMatch(/no separate upfront website development fee/i);
    expect(text).toMatch(/does not guarantee/);
    expect(text).toMatch(/exclude VAT/i);
    expect(text).not.toMatch(/will be confirmed/i);
    expect(text).not.toMatch(/VAT-inclusive/i);
    expect(text).not.toMatch(/prices include VAT/i);
    expect(text).not.toMatch(/guaranteed ranking/i);
  });
});

describe("publication", () => {
  it("hides drafts from the public case studies and articles", () => {
    expect(onlyPublished(caseStudies).map((item) => item.slug)).toEqual([
      "chiltern-wellbeing",
      "cook-local",
      "onlineartz",
    ]);
    expect(onlyPublished(caseStudies).some((item) => item.slug === "legends-plus")).toBe(false);
    expect(onlyPublished(articles)).toEqual([]);
  });
});

describe("routes and legal copy", () => {
  it("includes the required marketing routes", () => {
    for (const path of [
      "/",
      "/managed-websites",
      "/services",
      "/services/web-design-development",
      "/services/branding-design",
      "/services/digital-solutions",
      "/work",
      "/about",
      "/process",
      "/contact",
      "/faq",
      "/privacy",
      "/cookies",
      "/terms",
    ]) {
      expect(marketingPaths).toContain(path);
    }
  });

  it("states the published commercial terms without inventing a company number", () => {
    const text = JSON.stringify(legal);
    expect(text).toMatch(/Nothing on this website is an offer capable of acceptance/);
    expect(text).toMatch(/exclude VAT/);
    expect(text).toMatch(/12-month initial commitment/);
    expect(text).not.toMatch(/company number/i);
    expect(text).not.toMatch(/ICO registration/i);
    expect(text).not.toMatch(/solicitor-approved/);
  });
});
