const navTranslations: Record<string, Record<string, string>> = {
  learn: {
    cmn: "學粵拼",
    en: "Learn Jyutping",
    ja: "粤拼を学ぶ",
    nan: "學粵拼",
    vi: "Học Việt bính",
    wuu: "學粵拼",
    yue: "學粵拼",
    yue_hans: "学粤拼",
  },
  jyutping: {
    cmn: "粵拼方案",
    en: "Jyutping Scheme",
    ja: "粤拼便覧",
    nan: "粵拼方案",
    vi: "Việt bính",
    wuu: "粵拼方案",
    yue: "粵拼方案",
    yue_hans: "粤拼方案",
  },
  blog: {
    cmn: "文章",
    en: "Blog",
    ja: "ブログ",
    nan: "文章",
    vi: "Tập văn",
    wuu: "文章",
    yue: "文章",
    yue_hans: "文章",
  },
  keyboard: {
    cmn: "資源",
    en: "Resources",
    ja: "リソース",
    nan: "資源",
    vi: "Tài liệu",
    wuu: "資源",
    yue: "資源",
    yue_hans: "资源",
  },
  about: {
    cmn: "關於",
    en: "About",
    ja: "当サイトについて",
    nan: "關於",
    vi: "Liên lạc",
    wuu: "關於",
    yue: "關於",
    yue_hans: "关于",
  },
};

export function getNavTranslation(page: string, locale: string) {
  return navTranslations[page][locale] || navTranslations[page].en;
}

const pageHeadings: Record<string, Record<string, string>> = {
  ...navTranslations,
  index: {
    cmn: "粵語拼音方案",
    en: "Cantonese Romanization Scheme",
    ja: "広東語ローマ字表記法",
    nan: "粵語拼音方案",
    vi: "Phiên âm tiếng Quảng Đông",
    wuu: "粵語拼音方案",
    yue: "粵語拼音方案",
    yue_hans: "粤语拼音方案",
  },
  keyboard: {
    cmn: "輸入法及工具",
    en: "Keyboards & Tools",
    ja: "キーボードとツール",
    nan: "輸入法佮工具",
    vi: "Bàn phím và công cụ",
    wuu: "輸入法搭工具",
    yue: "輸入法及工具",
    yue_hans: "输入法及工具",
  }
};

export function getTitle(page: string, locale: string) {
  return pageHeadings[page][locale] || pageHeadings[page].en;
}

const pageTitleTemplate: Record<string, string> = {
  cmn: "粵拼 Jyutping",
  en: "Jyutping",
  ja: "粤拼 Jyutping",
  nan: "粵拼 Jyutping",
  vi: "Việt bính Jyutping",
  wuu: "粵拼 Jyutping",
  yue: "粵拼 Jyutping",
  yue_hans: "粤拼 Jyutping",
};

export function makeTitle(originalTitle: string, locale: string, flipped = false) {
  const template = pageTitleTemplate[locale] || pageTitleTemplate.en;
  if (!originalTitle) return template;
  const title = [originalTitle, " – ", template];
  if (flipped) {
    // For index page, "粵拼 Jyutping" should come before "粵語拼音方案"
    title.reverse();
  }
  return title.join("")
}
