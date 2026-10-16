import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { defaultDescription, pageMetadata, siteName } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `Website design for UK businesses`,
    description: defaultDescription,
    path: "/",
  }),
  title: {
    absolute: `Website design for UK businesses · ${siteName}`,
  },
};

export default function Page() {
  return <HomePage />;
}
