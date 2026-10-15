import { z } from "zod";
import { budgets, interests, timelines } from "@/lib/content";

const interestValues = interests.map((item) => item.value) as [
  (typeof interests)[number]["value"],
  ...(typeof interests)[number]["value"][],
];

const budgetValues = budgets as unknown as [string, ...string[]];
const timelineValues = timelines as unknown as [string, ...string[]];

const optionalText = z.string().trim().max(200).optional().or(z.literal(""));

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please tell us your name.").max(100),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(200),
  organisation: optionalText,
  website: z
    .string()
    .trim()
    .max(300)
    .refine(
      (value) => value === "" || /^https?:\/\/.+\..+/.test(value),
      "Enter a full website address, including https://",
    )
    .optional()
    .or(z.literal("")),
  interest: z.enum(interestValues, "Please choose the kind of help you need."),
  plan: z.enum(["essential", "grow", "pro"]).optional().or(z.literal("")),
  budget: z.enum(budgetValues).optional().or(z.literal("")),
  timeline: z.enum(timelineValues).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please tell us a little about the project.")
    .max(5000),
  consent: z
    .boolean()
    .refine((value) => value, "Please confirm you have read how we use your details."),
  companyWebsiteConfirm: z.string().max(200).optional().or(z.literal("")),
  turnstileToken: z.string().max(4000).optional().or(z.literal("")),
  utmSource: optionalText,
  utmMedium: optionalText,
  utmCampaign: optionalText,
  utmTerm: optionalText,
  utmContent: optionalText,
  landingPath: optionalText,
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const subscribeSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  consent: z.boolean().refine((value) => value, "Please confirm you are happy to hear from us."),
  companyWebsiteConfirm: z.string().max(200).optional().or(z.literal("")),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;

export function fieldErrors(error: z.ZodError) {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !errors[key]) {
      errors[key] = issue.message;
    }
  }
  return errors;
}

export function isHoneypotTripped(value: string | undefined) {
  return Boolean(value && value.trim().length > 0);
}
