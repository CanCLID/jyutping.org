import { makeResource } from "@/i18n/utils";

type PageMeta = {
  siteName: string;
  ogLocale: string;
  ogImageAlt: string;
  rssTitle: string;
  descriptions: {
    index: string;
    jyutping: string;
    keyboard: string;
    blog: string;
    about: string;
  };
};

export const getPageMeta = makeResource<PageMeta>({
  cmn: {
    siteName: "粵拼 Jyutping",
    ogLocale: "zh_TW",
    ogImageAlt: "粵拼 Jyutping — 香港語言學學會粵語拼音方案",
    rssTitle: "粵拼 Jyutping 文章訂閱",
    descriptions: {
      index: "香港語言學學會粵語拼音方案（粵拼 Jyutping）官方介紹網站，提供完整聲韻調表、真人發音示範、入門教學與粵語輸入法資源。",
      jyutping: "完整香港語言學學會粵拼（Jyutping）方案規範，收錄十九聲母、五十六韻母、六聲調表、國際音標對照及語音示範。",
      keyboard: "精選粵拼輸入法、粵語詞典、漢字轉粵拼工具及線上學習資源，支援 macOS、Windows、iOS、Android 與網頁版。",
      blog: "關於粵拼設計原理、粵語教學、常見拼寫問題與簡化字粵語標音的專題文章。",
      about: "認識 jyutping.org 與 CanCLID 粵語計算語言學團隊，以及聯絡與開源貢獻方式。",
    },
  },
  en: {
    siteName: "Jyutping",
    ogLocale: "en_US",
    ogImageAlt: "Jyutping — The LSHK Cantonese Romanization Scheme",
    rssTitle: "Jyutping Blog RSS Feed",
    descriptions: {
      index: "Official guide to Jyutping, the Linguistic Society of Hong Kong (LSHK) Cantonese Romanization Scheme, with audio examples, charts, and keyboards.",
      jyutping: "Complete specification of the LSHK Jyutping Cantonese romanization scheme: 19 onsets, 56+ finals, 6 tones, IPA transcriptions, and native audio.",
      keyboard: "Download Jyutping Cantonese keyboards, input methods, online dictionaries, and interactive learning tools for desktop, mobile, and the web.",
      blog: "Articles and essays on Jyutping design, Cantonese pedagogy, common spelling pitfalls, and Simplified Chinese Jyutping.",
      about: "About jyutping.org, maintained by CanCLID (Cantonese Computational Linguistics Infrastructure Development), and how to contact or contribute.",
    },
  },
  ja: {
    siteName: "粤拼 Jyutping",
    ogLocale: "ja_JP",
    ogImageAlt: "粤拼 Jyutping — 香港言語学会広東語ローマ字表記法",
    rssTitle: "粤拼 Jyutping ブログ RSS",
    descriptions: {
      index: "香港言語学会広東語ローマ字表記法「粤拼（Jyutping）」公式サイト。発音音声・音韻表・学習ガイド・広東語入力ツールを掲載。",
      jyutping: "香港言語学会（LSHK）による粤拼（Jyutping）の完全仕様：声母・韻母・声調の一覧表、国際音声記号（IPA）対照、音声サンプル。",
      keyboard: "広東語粤拼入力メソッド（IME）、オンライン辞書、漢字・粤拼変換ツール、各種学習リソースまとめ。",
      blog: "粤拼の仕組み、広東語学習、よくある表記ミスなどに関する解説記事一覧。",
      about: "jyutping.org の運営元である CanCLID と、お問い合わせ・オープンソースへの貢献方法について。",
    },
  },
  nan: {
    siteName: "粵拼 Jyutping",
    ogLocale: "nan_TW",
    ogImageAlt: "粵拼 Jyutping — 香港語言學學會粵語拼音方案",
    rssTitle: "粵拼 Jyutping 文章訂閱",
    descriptions: {
      index: "香港語言學學會粵語拼音方案（粵拼 Jyutping）官方紹介網站，提供完整聲韻調表、真人發音示範、入門教學佮粵語輸入法資源。",
      jyutping: "完整香港語言學學會粵拼（Jyutping）方案規範，收錄十九聲母、五十六韻母、六聲調表、國際音標對照佮語音示範。",
      keyboard: "精選粵拼輸入法、粵語詞典、漢字轉粵拼工具佮線上學習資源，支援各平臺與網頁版。",
      blog: "有關粵拼設計原理、粵語教學與常見拼寫問題的文章輯覽。",
      about: "認識 jyutping.org 佮 CanCLID 團隊，以及聯絡與開源貢獻方式。",
    },
  },
  vi: {
    siteName: "Việt bính Jyutping",
    ogLocale: "vi_VN",
    ogImageAlt: "Việt bính Jyutping — Hệ thống phiên âm tiếng Quảng Đông LSHK",
    rssTitle: "Nguồn cấp RSS Tập văn Việt bính Jyutping",
    descriptions: {
      index: "Hướng dẫn chính thức về Việt bính (Jyutping), hệ thống phiên âm tiếng Quảng Đông của LSHK, kèm bảng âm thanh, giáo trình và bộ gõ.",
      jyutping: "Quy chuẩn đầy đủ của hệ thống Việt bính LSHK: bảng thanh mẫu, vận mẫu, 6 thanh điệu, ký hiệu IPA và phát âm mẫu.",
      keyboard: "Tổng hợp bộ gõ Việt bính, từ điển tiếng Quảng Đông, công cụ chuyển đổi chữ Hán và tài liệu tự học đa nền tảng.",
      blog: "Các bài viết chuyên sâu về nguyên lý thiết kế Việt bính, phương pháp học tiếng Quảng Đông và lỗi chính tả thường gặp.",
      about: "Giới thiệu về jyutping.org, nhóm phát triển CanCLID cùng thông tin liên hệ và đóng góp mã nguồn mở.",
    },
  },
  wuu: {
    siteName: "粵拼 Jyutping",
    ogLocale: "wuu_CN",
    ogImageAlt: "粵拼 Jyutping — 香港語言學學會粵語拼音方案",
    rssTitle: "粵拼 Jyutping 文章訂閱",
    descriptions: {
      index: "香港語言學學會粵語拼音方案（粵拼 Jyutping）官方網站，提供完整聲韻調表、真人發音示範、入門教程搭粵語輸入法資源。",
      jyutping: "完整香港語言學學會粵拼（Jyutping）方案規範，收錄聲母表、韻母表、六聲調表、國際音標對照搭發音示範。",
      keyboard: "精選粵拼輸入法、粵語詞典、漢字轉粵拼工具搭學習資源，支援電腦、手機搭網頁平臺。",
      blog: "關於粵拼設計原理、粵語教學搭常見拼寫問題的文章列表。",
      about: "了解 jyutping.org 搭 CanCLID 團隊，以及聯繫搭開源貢獻方式。",
    },
  },
  yue: {
    siteName: "粵拼 Jyutping",
    ogLocale: "yue_HK",
    ogImageAlt: "粵拼 Jyutping — 香港語言學學會粵語拼音方案",
    rssTitle: "粵拼 Jyutping 文章訂閱",
    descriptions: {
      index: "香港語言學學會粵語拼音方案（粵拼 Jyutping）官方介紹網站，提供完整聲韻調表、發音示範、學習指南同粵語輸入法資源。",
      jyutping: "完整香港語言學學會粵拼（Jyutping）方案一覽表，收錄十九聲母、五十六韻母、六個聲調、國際音標對照及真人讀音示範。",
      keyboard: "精選粵拼輸入法、粵語詞典、漢字轉粵拼工具同埋學習資源，支援手機、電腦及網頁版。",
      blog: "介紹粵拼設計理念、粵語讀音教學、常見錯別音同相關專題文章。",
      about: "認識 jyutping.org 同背後嘅 CanCLID 團隊，了解聯絡方式同參與開源貢獻。",
    },
  },
  yue_hans: {
    siteName: "粤拼 Jyutping",
    ogLocale: "yue_CN",
    ogImageAlt: "粤拼 Jyutping — 香港语言学学会粤语拼音方案",
    rssTitle: "粤拼 Jyutping 文章订阅",
    descriptions: {
      index: "香港语言学学会粤语拼音方案（粤拼 Jyutping）官方介绍网站，提供完整声韵调表、发音示范、学习指南同粤语输入法资源。",
      jyutping: "完整香港语言学学会粤语拼音（Jyutping）方案一览表，收录十九声母、五十六韵母、六个声调、国际音标对照及真人读音示范。",
      keyboard: "精选粤拼输入法、粤语词典、汉字转粤拼工具同埋学习资源，支援手机、电脑及网页版。",
      blog: "介绍粤拼设计理念、粤语读音教学、常见错别音同相关专题文章。",
      about: "认识 jyutping.org 同背后嘅 CanCLID 团队，了解联络方式同参与开源贡献。",
    },
  },
});
