import type { MetadataRoute } from "next";
import { COMPANY } from "@/app/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: COMPANY.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
