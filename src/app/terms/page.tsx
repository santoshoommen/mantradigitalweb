import { LegalPage } from "@/components/ui/LegalPage";
import { legal } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms",
  description: "Terms for using this website, and how managed-website plans and bespoke projects are agreed.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage copy={legal.terms} path="/terms" />;
}
