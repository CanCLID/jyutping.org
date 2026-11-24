import { getPageMeta } from "@/i18n/pageMeta";
import { getTitle } from "@/i18n/pageHeadings";
import { formatBcp47Locale, getLocalePath, type Locale } from "@/i18n/utils";
import {
  getLocalizedCollectionEntries,
  getLocalizedContentPath,
  getRssPath,
  toCanonicalUrl,
} from "@/utils/content";

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function buildRssXml(locale: Locale, site: URL): Promise<string> {
  const meta = getPageMeta(locale);
  const blogUrl = toCanonicalUrl(getLocalePath("/blog", locale), site);
  const selfUrl = toCanonicalUrl(getRssPath(locale), site);
  const posts = (await getLocalizedCollectionEntries("blog", locale)).toSorted(
    (a, b) => (a.data.weight || 0) - (b.data.weight || 0),
  );

  const itemsXml = posts
    .map((post) => {
      const link = toCanonicalUrl(getLocalizedContentPath("blog", post.id), site);
      const description = post.data.description ?? post.data.title;
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(description)}</description>
    </item>`;
    })
    .join("\n");

  const channelTitle = `${getTitle("blog", locale)} – ${meta.siteName}`;

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <link>${escapeXml(blogUrl)}</link>
    <description>${escapeXml(meta.descriptions.blog)}</description>
    <language>${escapeXml(formatBcp47Locale(locale))}</language>
    <atom:link href="${escapeXml(selfUrl)}" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>
`;
}
