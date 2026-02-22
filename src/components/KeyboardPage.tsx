import {
  IconBook2,
  IconBooks,
  IconBrandAndroid,
  IconBrandApple,
  IconBrandChrome,
  IconBrandFirefox,
  IconBrandGooglePlay,
  IconDownload,
  IconKeyboard,
  IconWorld,
} from "@tabler/icons-react";
import type React from "react";

const DownloadButton: React.FC<{
  href: string;
  icon: React.ElementType;
  text: string;
  variant?:
    | "googleplay"
    | "android"
    | "apple"
    | "web"
    | "typeduck"
    | "firefox"
    | "chrome";
}> = ({ href, icon: Icon, text, variant = "web" }) => {
  const baseClasses =
    "inline-flex items-center px-6 py-3 border text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150 ease-in-out group";

  let variantClasses = "";
  switch (variant) {
    case "googleplay":
      variantClasses =
        "border border-[#01875f] text-[#01875f] bg-transparent hover:bg-[#01875f] hover:text-white";
      break;
    case "android":
      variantClasses =
        "border border-[#34a853] text-[#34a853] bg-transparent hover:bg-[#34a853] hover:text-white";
      break;
    case "apple":
      variantClasses =
        "border border-black text-black bg-transparent hover:bg-black hover:text-white";
      break;
    case "web":
      variantClasses =
        "border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white";
      break;
    case "typeduck":
      variantClasses =
        "border border-amber-500 text-amber-500 bg-transparent hover:bg-amber-500 hover:text-white";
      break;
    case "chrome":
      variantClasses =
        "border border-[#1967d2] text-[#1967d2] bg-transparent hover:bg-[#1967d2] hover:text-[#e8f0fe]";
      break;
    case "firefox":
      variantClasses =
        "border-purple-500 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent hover:bg-clip-padding";
      break;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
    >
      <Icon
        className={`mr-2 h-5 w-5 ${
          variant === "firefox"
            ? "text-purple-500 group-hover:text-white"
            : ""
        }`}
      />
      {text}
    </a>
  );
};

interface KeyboardPageTranslation {
  introLinks: React.ReactNode;
  sogouTitle: string;
  sogouAppStoreButton: string;
  sogouAppStoreNote: string;
  sogouApkButton: string;
  sogouApkNote: string;
  sogouInstructions: string;
  typeduckTitle: string;
  typeduckWeb: string;
  typeduckDownload: string;
  appJyutpingTitle: string;
  appJyutpingAppStoreButton: string;
  appJyutpingGooglePlayButton: string;
  appJyutpingWebsiteDownload: string;
  gboardTitle: string;
  gboardAppStoreButton: string;
  gboardGooglePlayButton: string;
  cantoboardTitle: string;
  cantoboardAppStoreButton: string;
  toolsTitle?: string;
  resourceTitle: string;
  googleTranslate: string;
  converter: string;
}

const translations: Record<string, KeyboardPageTranslation> = {
  cmn: {
    introLinks: "粵拼輸入法",
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "App Store 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後去設置界面的「語言設置」，選「中文-粵語」選擇九宮格或全鍵盤，即可用粵拼打字。",
    typeduckTitle: "TypeDuck 打得粵拼輸入法",
    typeduckWeb: "網頁版無需安裝直接打字",
    typeduckDownload: "全平臺下載",
    appJyutpingTitle: "粵拼輸入法 App",
    appJyutpingAppStoreButton: "App Store 下載",
    appJyutpingGooglePlayButton: "Google Play 下載",
    appJyutpingWebsiteDownload: "官網下載",
    gboardTitle: "Gboard 粵拼",
    gboardAppStoreButton: "App Store 下載",
    gboardGooglePlayButton: "Google Play 下載",
    cantoboardTitle: "Cantoboard",
    cantoboardAppStoreButton: "App Store 下載",
    toolsTitle: "辭典工具",
    resourceTitle: "學習資源",
    googleTranslate: "谷歌翻譯粵語",
    converter: "粵拼轉換器",
  },
  en: {
    introLinks: "Jyutping Keyboards",
    sogouTitle: "Sogou IME",
    sogouAppStoreButton: "App Store",
    sogouAppStoreNote: "Versions above v10.11 support Jyutping",
    sogouApkButton: "Download APK",
    sogouApkNote: "Versions above v10.10 support Jyutping",
    sogouInstructions:
      'After downloading, go to "Language Settings", select "Chinese - Cantonese", choose T9 or Full Keyboard, then you can type with Jyutping.',
    typeduckTitle: "TypeDuck IME",
    typeduckWeb: "Type in browser now",
    typeduckDownload: "All platforms download",
    appJyutpingTitle: "Jyutping App",
    appJyutpingAppStoreButton: "App Store",
    appJyutpingGooglePlayButton: "Google Play",
    appJyutpingWebsiteDownload: "jyutping.app",
    gboardTitle: "Gboard Jyutping",
    gboardAppStoreButton: "App Store",
    gboardGooglePlayButton: "Google Play",
    cantoboardTitle: "Cantoboard",
    cantoboardAppStoreButton: "App Store",
    toolsTitle: "Dictionaries and Tools",
    resourceTitle: "Learning Resources",
    googleTranslate: "Google Translate Cantonese",
    converter: "Jyutping Converter",
  },
  ja: {
    introLinks: "粤拼入力方法",
    sogouTitle: "Sogou IME",
    sogouAppStoreButton: "App Storeでダウンロード",
    sogouAppStoreNote: "v10.11以降のバージョンは粤拼をサポートしています",
    sogouApkButton: "公式サイトからAPKをダウンロード",
    sogouApkNote: "v10.10以降のバージョンは粤拼をサポートしています",
    sogouInstructions:
      "ダウンロード後、「言語設定」で「中国語-広東語」を選択し、T9またはフルキーボードを選択すると、粤拼で入力できます。",
    typeduckTitle: "TypeDuck IME",
    typeduckWeb: "ブラウザで今すぐ入力",
    typeduckDownload: "全プラットフォームダウンロード",
    appJyutpingTitle: "粤拼アプリ",
    appJyutpingAppStoreButton: "App Store",
    appJyutpingGooglePlayButton: "Google Play",
    appJyutpingWebsiteDownload: "jyutping.app",
    gboardTitle: "Gboard 粤拼",
    gboardAppStoreButton: "App Store",
    gboardGooglePlayButton: "Google Play",
    cantoboardTitle: "Cantoboard",
    cantoboardAppStoreButton: "App Store",
    toolsTitle: "辞書とツール",
    resourceTitle: "学習リソース",
    googleTranslate: "Google翻訳 広東語",
    converter: "粤拼変換ツール",
  },
  nan: {
    introLinks: "粵拼輸入法",
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "App Store 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後入設置界面嘅「語言設置」，揀「中文-粵語」選擇九宮格或者全鍵盤，就可以用粵拼打字。",
    typeduckTitle: "TypeDuck 打得粵拼輸入法",
    typeduckWeb: "網頁版無需安裝直接打字",
    typeduckDownload: "全平台下載",
    appJyutpingTitle: "粵拼輸入法 App",
    appJyutpingAppStoreButton: "App Store 下載",
    appJyutpingGooglePlayButton: "Google Play 下載",
    appJyutpingWebsiteDownload: "官網下載",
    gboardTitle: "Gboard 粵拼",
    gboardAppStoreButton: "App Store 下載",
    gboardGooglePlayButton: "Google Play 下載",
    cantoboardTitle: "Cantoboard",
    cantoboardAppStoreButton: "App Store 下載",
    toolsTitle: "辭典工具",
    resourceTitle: "學習資源",
    googleTranslate: "Google 翻譯粵語",
    converter: "粵拼轉換器",
  },
  vi: {
    introLinks: "Bàn phím Việt bính",
    sogouTitle: "Bàn phím Sogou",
    sogouAppStoreButton: "Tải trên App Store",
    sogouAppStoreNote: "Các phiên bản trên v10.11 đều hỗ trợ Việt bính",
    sogouApkButton: "Tải APK trên web chính thức",
    sogouApkNote: "Các phiên bản trên v10.10 đều hỗ trợ Việt bính",
    sogouInstructions:
      'Vào phần "Language Settings" trong cài đặt, chọn "Chinese-Cantonese" để gõ bằng Việt bính.',
    typeduckTitle: "Bàn phím TypeDuck",
    typeduckWeb: "Gõ ngay trên trình duyệt",
    typeduckDownload: "Tải cho tất cả các nền tảng",
    appJyutpingTitle: "Ứng dụng Jyutping",
    appJyutpingAppStoreButton: "Tải trên App Store",
    appJyutpingGooglePlayButton: "Tải trên Google Play",
    appJyutpingWebsiteDownload: "jyutping.app",
    gboardTitle: "Gboard Việt bính",
    gboardAppStoreButton: "Tải trên App Store",
    gboardGooglePlayButton: "Tải trên Google Play",
    cantoboardTitle: "Cantoboard",
    cantoboardAppStoreButton: "Tải trên App Store",
    toolsTitle: "Công cụ từ điển",
    resourceTitle: "Tài liệu học tập",
    googleTranslate: "Google Dịch tiếng Quảng Đông",
    converter: "Bộ chuyển đổi Việt bính",
  },
  wuu: {
    introLinks: "粵拼輸入法",
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "App Store 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後入設置界面嘅「語言設置」，揀「中文-粵語」選擇九宮格或者全鍵盤，就可以用粵拼打字。",
    typeduckTitle: "TypeDuck 打得粵拼輸入法",
    typeduckWeb: "網頁版無需安裝直接打字",
    typeduckDownload: "全平台下載",
    appJyutpingTitle: "粵拼輸入法 App",
    appJyutpingAppStoreButton: "App Store 下載",
    appJyutpingGooglePlayButton: "Google Play 下載",
    appJyutpingWebsiteDownload: "官網下載",
    gboardTitle: "Gboard 粵拼",
    gboardAppStoreButton: "App Store 下載",
    gboardGooglePlayButton: "Google Play 下載",
    cantoboardTitle: "Cantoboard",
    cantoboardAppStoreButton: "App Store 下載",
    toolsTitle: "辭典工具",
    resourceTitle: "學習資源",
    googleTranslate: "谷歌翻譯粵語",
    converter: "粵拼轉換器",
  },
  yue: {
    introLinks: "粵拼輸入法",
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "App Store 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後入設置界面嘅「語言設置」，揀「中文-粵語」選擇九宮格或者全鍵盤，就可以用粵拼打字。",
    typeduckTitle: "TypeDuck 打得粵拼輸入法",
    typeduckWeb: "網頁版無需安裝直接打字",
    typeduckDownload: "全平台下載",
    appJyutpingTitle: "粵拼輸入法 App",
    appJyutpingAppStoreButton: "App Store 下載",
    appJyutpingGooglePlayButton: "Google Play 下載",
    appJyutpingWebsiteDownload: "官網下載",
    gboardTitle: "Gboard 粵拼",
    gboardAppStoreButton: "App Store 下載",
    gboardGooglePlayButton: "Google Play 下載",
    cantoboardTitle: "Cantoboard",
    cantoboardAppStoreButton: "App Store 下載",
    toolsTitle: "辭典工具",
    resourceTitle: "學習資源",
    googleTranslate: "Google 翻譯粵語",
    converter: "粵拼轉換器",
  },
  yue_hans: {
    introLinks: "粤拼输入法",
    sogouTitle: "搜狗输入法",
    sogouAppStoreButton: "App Store 下载",
    sogouAppStoreNote: "v10.11 以上版本皆支持粤拼",
    sogouApkButton: "官网下载 APK",
    sogouApkNote: "v10.10 以上版本皆支持粤拼",
    sogouInstructions:
      "下载后入设置界面嘅「语言设置」，拣「中文-粤语」选择九宫格或者全键盘，就可以用粤拼打字。",
    typeduckTitle: "TypeDuck 打得粤拼输入法",
    typeduckWeb: "网页版无需安装直接打字",
    typeduckDownload: "全平台下载",
    appJyutpingTitle: "粤拼输入法 App",
    appJyutpingAppStoreButton: "App Store 下载",
    appJyutpingGooglePlayButton: "Google Play 下载",
    appJyutpingWebsiteDownload: "官网下载",
    gboardTitle: "Gboard 粤拼",
    gboardAppStoreButton: "App Store 下载",
    gboardGooglePlayButton: "Google Play 下载",
    cantoboardTitle: "Cantoboard",
    cantoboardAppStoreButton: "App Store 下载",
    toolsTitle: "辞典工具",
    resourceTitle: "学习资源",
    googleTranslate: "Google 翻译粤语",
    converter: "粤拼转换器",
  },
};

interface KeyboardPageProps {
  locale: string;
}

const KeyboardPage: React.FC<KeyboardPageProps> = ({ locale }) => {
  const t = translations[locale] || translations.en; // Fallback to English

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="border border-gray-300 border-dashed rounded-md mx-auto p-8 mb-8">
        <h1 className="text-center text-4xl mx-auto">
          <span className="inline-flex items-center font-semibold">
            <IconKeyboard className="mr-2" /> {t.introLinks}
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sogou */}
          <div className="p-4">
            <h2 className="text-2xl font-semibold my-4">{t.sogouTitle}</h2>
            <h3 className="font-semibold my-2">iOS</h3>
            <div className="mb-4">
              <DownloadButton
                href="https://apps.apple.com/app/id917670924"
                icon={IconBrandApple}
                text={t.sogouAppStoreButton}
                variant="apple"
              />
              <p className="text-sm text-gray-600 mt-1">
                {t.sogouAppStoreNote}
              </p>
            </div>
            <h3 className="font-semibold my-2">Android</h3>
            <div className="mb-4">
              <DownloadButton
                href="https://shouji.sogou.com/interface/multilingual.php?language=3"
                icon={IconBrandAndroid}
                text={t.sogouApkButton}
                variant="android"
              />
              <p className="text-sm text-gray-600 mt-1">{t.sogouApkNote}</p>
            </div>
            <p className="text-sm text-gray-700">{t.sogouInstructions}</p>
          </div>
          {/* TypeDuck */}
          <div className="p-4 ">
            <h2 className="text-2xl font-semibold my-4">{t.typeduckTitle}</h2>
            <h3 className="font-semibold my-2">Web</h3>
            <div className="my-4">
              <DownloadButton
                href="https://www.typeduck.hk/web/"
                icon={IconWorld}
                text={t.typeduckWeb}
                variant="web"
              />
            </div>
            <h3 className="font-semibold my-2">Windows, macOS, iOS, Android</h3>
            <div className="my-4">
              <DownloadButton
                href="https://www.typeduck.hk/"
                icon={IconDownload}
                text={t.typeduckDownload}
                variant="typeduck"
              />
            </div>
          </div>
          {/* YuetYam Jyutping App */}
          <div className="p-4 ">
            <h2 className="text-2xl font-semibold my-4">
              {t.appJyutpingTitle}
            </h2>
            <h3 className="font-semibold my-2">iOS</h3>
            <div className="mb-4">
              <DownloadButton
                href="https://apps.apple.com/app/id1509367629"
                icon={IconBrandApple}
                text={t.appJyutpingAppStoreButton || ""}
                variant="apple"
              />
            </div>
            <h3 className="font-semibold my-2">Android</h3>
            <div className="mb-4">
              <DownloadButton
                href="https://play.google.com/store/apps/details?id=org.jyutping.jyutping&hl=zh-HK&gl=HK"
                icon={IconBrandGooglePlay}
                text={t.appJyutpingGooglePlayButton || ""}
                variant="googleplay"
              />
            </div>
            <h3 className="font-semibold my-2">macOS, Android</h3>
            <div className="mb-4">
              <DownloadButton
                href="https://jyutping.app"
                icon={IconDownload}
                text={t.appJyutpingWebsiteDownload || ""}
                variant="web"
              />
            </div>
          </div>
          {/* Rime */}
          <div className="p-4 ">
            <h2 className="text-2xl font-semibold my-4">rime-cantonese</h2>
            <h3 className="font-semibold my-2">
              Windows, macOS, Linux, iOS, Android
            </h3>
            <div className="mb-4">
              <DownloadButton
                href="https://jyutping.net/"
                icon={IconDownload}
                text="jyutping.net"
                variant="web"
              />
            </div>
          </div>
          {/* Gboard */}
          <div className="p-4 ">
            <h2 className="text-2xl font-semibold my-4">{t.gboardTitle}</h2>
            <h3 className="font-semibold my-2">iOS</h3>
            <div className="mb-4">
              <DownloadButton
                href="https://apps.apple.com/app/id1091700242"
                icon={IconBrandApple}
                text={t.gboardAppStoreButton || ""}
                variant="apple"
              />
            </div>
            <h3 className="font-semibold my-2">Android</h3>
            <div className="mb-4">
              <DownloadButton
                href="https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_US"
                icon={IconBrandGooglePlay}
                text={t.gboardGooglePlayButton || ""}
                variant="googleplay"
              />
            </div>
          </div>
          {/* Cantoboard */}
          <div className="p-4">
            <h2 className="text-2xl font-semibold my-4">{t.cantoboardTitle}</h2>
            <h3 className="font-semibold my-2">iOS</h3>
            <div className="mb-4">
              <DownloadButton
                href="https://apps.apple.com/app/id6752963850"
                icon={IconBrandApple}
                text={t.cantoboardAppStoreButton || ""}
                variant="apple"
              />
            </div>
          </div>
          {/* LearnDuck */}
          <div className="flex flex-col items-center p-4">
            <h3 className="my-4 text-2xl font-semibold">
              LearnDuck 粵拼打字入門
            </h3>
            <a
              href="https://chaaklau.github.io/LearnDuck/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/learnduck.png"
                alt="LearnDuck 粵拼打字入門"
                width={320}
                height={320}
                className="rounded-lg shadow-sm max-w-full h-auto hover:shadow-md mx-auto"
                loading="lazy"
              />
            </a>
          </div>
          {/* Jyutping.io */}
          <div className="flex flex-col items-center p-4">
            <h3 className="my-4 text-2xl font-semibold">粵拼打字練習工具</h3>
            <a
              href="https://jyutping.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/jyutping-io-logo-with-bar.svg"
                alt="粵拼打字練習工具"
                width={320}
                height={320}
                className="rounded-lg max-w-full h-auto hover:shadow-md mx-auto p-8"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
      {/* Dictionaries and Tools */}
      <div className="my-8 p-8 border border-gray-300 border-dashed rounded-md mx-auto">
        <h2 className="my-4 text-4xl font-semibold mx-auto text-center">
          <span className="inline-flex items-center font-semibold">
            <IconBook2 className="mr-2" /> {t.toolsTitle}
          </span>
        </h2>
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Jyut.net */}
          <div className="flex flex-col items-center p-4 ">
            <h3 className="my-4 text-2xl font-semibold">
              粵音資料集叢 jyut.net
            </h3>
            <a
              href="https://jyut.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/jyut.jpg"
                alt="粵音資料集叢"
                width={1920}
                height={1080}
                className="rounded-lg shadow-sm hover:shadow-md max-w-full h-auto mx-auto"
                loading="lazy"
              />
            </a>
          </div>
          {/* Words.hk */}
          <div className="flex flex-col items-center p-4 ">
            <h3 className="my-4 text-2xl font-semibold">
              粵語辭叢
            </h3>
            <a
              href="https://jyutjyu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/jyutjyu.svg"
                alt="粵語辭叢 jyutjyu.com"
                width={512}
                height={512}
                className="rounded-lg shadow-sm hover:shadow-md max-w-full h-auto mx-auto"
                loading="lazy"
              />
            </a>
          </div>
          <div className="flex flex-col items-center p-4 ">
            <h3 className="my-4 text-2xl font-semibold">粵典 words.hk</h3>
            <a
              href="https://words.hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/wordshk.png"
                alt="粵典"
                width={1920}
                height={1080}
                className="rounded-lg shadow-sm hover:shadow-md max-w-full h-auto mx-auto"
                loading="lazy"
              />
            </a>
          </div>
          {/* 羊羊粵語.hk */}
          <div className="flex flex-col items-center p-4 ">
            <h3 className="my-4 text-2xl font-semibold">羊羊粵語 shyyp.net</h3>
            <a
              href="https://shyyp.net/hant"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/shyyp.svg"
                alt="羊羊粵語"
                width={256}
                height={256}
                className="rounded-lg shadow-sm hover:shadow-md max-w-full h-auto mx-auto"
                loading="lazy"
              />
            </a>
          </div>
          {/* Google Translate */}
          <div className="flex flex-col items-center p-4 ">
            <h3 className="text-2xl my-4 font-semibold">{t.googleTranslate}</h3>
            <a
              href="https://translate.google.com/?hl=yue&sl=auto&tl=en&op=translate"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/translate.png"
                alt="Google Translate Cantonese"
                width={1920}
                height={1080}
                className="rounded-lg shadow-sm hover:shadow-md max-w-full h-auto mx-auto"
                loading="lazy"
              />
            </a>
          </div>
          {/* Converter */}
          <div className="flex flex-col items-center p-4 ">
            <h3 className="text-2xl my-4 font-semibold">{t.converter}</h3>
            <a
              href="https://jyutping.net/converter/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/converter.png"
                alt="Jyutping Converter"
                width={960}
                height={640}
                className="rounded-lg shadow-sm hover:shadow-md max-w-full h-auto mx-auto"
                loading="lazy"
              />
            </a>
          </div>
          {/* Inject Jyutping */}
          <div className="p-4 ">
            <h3 className="text-2xl my-4 text-center font-semibold">
              注入粵拼 inject-jyutping
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a
                href="https://github.com/CanCLID/inject-jyutping"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
              >
                <img
                  src="/img/inject.png"
                  alt="Inject Jyutping Logo"
                  width={64}
                  height={64}
                  className="max-w-full h-auto mx-auto"
                  loading="lazy"
                />
              </a>
              <div className="flex flex-col gap-4 my-4">
                <DownloadButton
                  href="https://chromewebstore.google.com/detail/inject-jyutping/lfgpgjkjglogbndlkikjgbbfoiofbdjp"
                  icon={IconBrandChrome}
                  text="Chrome Web Store"
                  variant="chrome"
                />
                <DownloadButton
                  href="https://addons.mozilla.org/en-US/firefox/addon/inject-jyutping/"
                  icon={IconBrandFirefox}
                  text="Firefox Add-ons"
                  variant="firefox"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Learning resources section */}
      <div className="my-8 p-8 border border-gray-300 border-dashed rounded-md mx-auto">
        <h2 className="my-4 text-center text-4xl mx-auto">
          <span className="inline-flex items-center font-semibold">
            <IconBooks className="mr-2" /> {t.resourceTitle}
          </span>
        </h2>
        <h3 className="my-4 text-2xl font-semibold text-center">
          52 分鐘學識粵拼
        </h3>
        <div className="relative h-0 pb-[56.25%] mx-auto max-w-3xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
            src="https://www.youtube.com/embed/MOsf0BcLzlc"
            title="YouTube video player: 52 分鐘學識粵拼"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hambaanglaang */}
          <div className="flex flex-col items-center p-4 ">
            <h3 className="my-4 text-2xl font-semibold">
              冚唪唥粵文 hambaanglaang.hk
            </h3>
            <a
              href="https://hambaanglaang.hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/hambaanglaang.png"
                alt="冚唪唥粵文 Hambaanglaang"
                width={1800}
                height={945}
                className="rounded-lg shadow-sm hover:shadow-md max-w-full h-auto"
                loading="lazy"
              />
            </a>
          </div>
          {/* 翻轉粵語教室 */}
          <div className="flex flex-col items-center p-4">
            <h3 className="my-4 text-2xl font-semibold">
              香港理工大学 翻轉粵語教室
            </h3>
            <a
              href="https://www.polyu.edu.hk/clc/cantonese/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/flipped.png"
                alt="翻轉粵語教室 Flipped Classroom"
                width={640}
                height={640}
                className="rounded-lg shadow-sm max-w-full h-auto hover:shadow-md"
                loading="lazy"
              />
            </a>
          </div>
          <div className="flex flex-col items-center p-4">
            <h3 className="my-4 text-2xl font-semibold">
              粵拼字體 visual-fonts.com
            </h3>
            <a
              href="https://visual-fonts.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/visualfont.svg"
                alt="Visual Fonts Jyutping"
                width={1920}
                height={1080}
                className="rounded-lg shadow-sm max-w-full h-auto hover:shadow-md"
                loading="lazy"
              />
            </a>
          </div>

          <div className="flex flex-col items-center p-4">
            <h3 className="my-4 text-2xl font-semibold">Wing Font</h3>
            <a
              href="https://wing-fonts.chunlaw.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              <img
                src="/img/wing.png"
                alt="Wing Font"
                width={1920}
                height={1080}
                className="rounded-lg shadow-sm max-w-full h-auto hover:shadow-md"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardPage;
