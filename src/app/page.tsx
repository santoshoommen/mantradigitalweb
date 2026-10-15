import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { defaultDescription, pageMetadata, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${siteName} — Beautiful websites and digital solutions`,
    description: defaultDescription,
    path: "/",
  }),
  title: {
    absolute: `${siteName} — Beautiful websites and digital solutions`,
  },
};

export default function Page() {
  return <HomePage />;
}
