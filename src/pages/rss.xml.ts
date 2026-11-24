import type { APIRoute } from "astro";
import { I18n } from "@/i18n/utils";
import { getCanonicalSiteUrl } from "@/utils/jsonLd";
import { buildRssXml } from "@/utils/rss";

export const GET: APIRoute = async ({ site }) => {
  const xml = await buildRssXml(I18n.defaultLocale, getCanonicalSiteUrl(site));
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
