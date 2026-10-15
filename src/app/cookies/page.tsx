import { LegalPage } from "@/components/ui/LegalPage";
import { legal } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookies",
  description: "How this website uses analytics cookies and stores your consent choice.",
  path: "/cookies",
});

export default function CookiesPage() {
  return <LegalPage copy={legal.cookies} path="/cookies" />;
}
