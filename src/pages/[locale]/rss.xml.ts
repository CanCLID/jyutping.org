import type { APIRoute } from "astro";
import { getNonDefaultLocaleStaticPaths } from "@/i18n/utils";
import { isSupportedLocale } from "@/utils/content";
import { getCanonicalSiteUrl } from "@/utils/jsonLd";
import { buildRssXml } from "@/utils/rss";

export function getStaticPaths() {
  return getNonDefaultLocaleStaticPaths();
}

export const GET: APIRoute = async ({ params, site }) => {
  const { locale } = params;
  if (!locale || !isSupportedLocale(locale)) {
    throw new Error(`Invalid locale parameter for RSS feed: ${locale ?? "undefined"}.`);
  }

  const xml = await buildRssXml(locale, getCanonicalSiteUrl(site));
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
