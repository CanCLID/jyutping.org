import { makeResource } from "./utils";

export const getBlogLabels = makeResource<{ readMore: string, noPosts: string }>({
  cmn: { readMore: "閲讀全文", noPosts: "暂無文章。" },
  en: { readMore: "Read more", noPosts: "No posts found yet." },
  ja: { readMore: "もっと読む", noPosts: "記事がまだありません。" },
  nan: { readMore: "讀全文", noPosts: "猶未有文。" },
  vi: { readMore: "Đọc thêm", noPosts: "Chưa có bài viết nào." },
  wuu: { readMore: "阅读全文", noPosts: "暂无博文。" },
  yue: { readMore: "閱讀全文", noPosts: "暂無文章。" },
  yue_hans: { readMore: "阅读全文", noPosts: "暂无文章。" },
});
