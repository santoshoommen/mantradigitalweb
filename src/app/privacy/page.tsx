import { LegalPage } from "@/components/ui/LegalPage";
import { legal } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "How Mantra Digital Magic Ltd uses enquiry details, occasional notes and analytics.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage copy={legal.privacy} path="/privacy" />;
}
