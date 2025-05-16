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
import type React from "react"; // Import type React for FC

// Reusable Button Component (using <a> tag)
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
  // Changed default variant to "web"
  // Base classes common to all variants
  const baseClasses =
    "inline-flex items-center px-6 py-3 border text-base font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150 ease-in-out group"; // Added transition and group for potential icon styling

  // Styles for other variants
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
        "border-purple-500 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white hover:border-transparent hover:bg-clip-padding"; // Added firefox variant styles
      break;
  }

  // Default structure for other variants
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
            ? "text-purple-500 group-hover:text-white" // Use a base gradient color, keep hover white
            : ""
        }`}
      />
      {text}
    </a>
  );
};

// Define an interface for the translation structure
interface KeyboardPageTranslation {
  introLinks: React.ReactNode;
  sogouTitle: string;
  sogouAppStoreButton: string;
  sogouAppStoreNote: string;
  sogouApkButton: string;
  sogouApkNote: string;
  sogouInstructions: string;
  typeduckWeb: string;
  typeduckDownload: string;
  yuetyamTitle: string;
  yuetyamiOSButton: string;
  yuetyamMacOSButton: string;
  yuetyamAndroidButton: string;
  gboardTitle: string;
  toolsTitle?: string;
  resourceTitle: string;
  googleTranslate: string;
  converter: string;
}

// Define translations (copied from original)
const translations: Record<string, KeyboardPageTranslation> = {
  en: {
    introLinks: "Jyutping Keyboards",
    sogouTitle: "Sogou IME",
    sogouAppStoreButton: "AppStore Download",
    sogouAppStoreNote: "Versions above v10.11 support Jyutping",
    sogouApkButton: "Download APK",
    sogouApkNote: "Versions above v10.10 support Jyutping",
    sogouInstructions:
      'After downloading, go to "Language Settings", select "Chinese - Cantonese", choose T9 or Full Keyboard, then you can type with Jyutping.',
    typeduckWeb: "Type in browser now",
    typeduckDownload: "All platforms download",
    yuetyamTitle: "Jyutping - Cantonese Keyboard",
    yuetyamiOSButton: "AppStore Download",
    yuetyamMacOSButton: "Download .pkg",
    yuetyamAndroidButton: "Download .apk",
    gboardTitle: "Gboard Jyutping",
    toolsTitle: "Dictionaries and Tools",
    resourceTitle: "Learning Resources",
    googleTranslate: "Google Translate Cantonese",
    converter: "Jyutping Converter",
  },
  yue: {
    introLinks: "粵拼輸入法",
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "AppStore 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後入設置界面嘅「語言設置」，揀「中文-粵語」選擇九宮格或者全鍵盤，就可以用粵拼打字。",
    typeduckWeb: "網頁版無需安裝直接打字",
    typeduckDownload: "全平台下載",
    yuetyamTitle: "YuetYam 粵拼輸入法",
    yuetyamiOSButton: "AppStore 下載",
    yuetyamMacOSButton: "下載 .pkg",
    yuetyamAndroidButton: "下載 .apk",
    gboardTitle: "Gboard 粵拼",
    toolsTitle: "辭典工具",
    resourceTitle: "學習資源",
    googleTranslate: "Google 翻譯粵語",
    converter: "粵拼轉換器",
  },
  cmn: {
    introLinks: "粵拼輸入法",
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "AppStore 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後去設置界面的「語言設置」，選「中文-粵語」選擇九宮格或全鍵盤，即可用粵拼打字。",
    typeduckWeb: "網頁版無需安裝直接打字",
    typeduckDownload: "全平臺下載",
    yuetyamTitle: "YuetYam 粵拼輸入法",
    yuetyamiOSButton: "AppStore 下載",
    yuetyamMacOSButton: "下載 .pkg",
    yuetyamAndroidButton: "下載 .apk",
    gboardTitle: "Gboard 粵拼",
    toolsTitle: "辭典工具",
    resourceTitle: "學習資源",
    googleTranslate: "谷歌翻譯粵語",
    converter: "粵拼轉換器",
  },
  nan: {
    introLinks: "粵拼輸入法",
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "AppStore 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後入設置界面嘅「語言設置」，揀「中文-粵語」選擇九宮格或者全鍵盤，就可以用粵拼打字。",
    typeduckWeb: "網頁版無需安裝直接打字",
    typeduckDownload: "全平台下載",
    yuetyamTitle: "YuetYam 粵拼輸入法",
    yuetyamiOSButton: "AppStore 下載",
    yuetyamMacOSButton: "下載 .pkg",
    yuetyamAndroidButton: "下載 .apk",
    gboardTitle: "Gboard 粵拼",
    toolsTitle: "辭典工具",
    resourceTitle: "學習資源",
    googleTranslate: "Google 翻譯粵語",
    converter: "粵拼轉換器",
  },
  vi: {
    introLinks: "Việt bính bàn phím",
    sogouTitle: "Bàn phím Sogou",
    sogouAppStoreButton: "Tải trên AppStore",
    sogouAppStoreNote: "Các phiên bản trên v10.11 đều hỗ trợ Việt bính",
    sogouApkButton: "Tải APK trên web chính thức",
    sogouApkNote: "Các phiên bản trên v10.10 đều hỗ trợ Việt bính",
    sogouInstructions:
      'Vào phần "Language Settings" trong cài đặt, chọn "Chinese-Cantonese" để gõ bằng Việt bính.',
    typeduckWeb: "Gõ ngay trên trình duyệt",
    typeduckDownload: "Tải cho tất cả các nền tảng",
    yuetyamTitle: "YuetYam 粵拼輸入法",
    yuetyamiOSButton: "Tải trên AppStore",
    yuetyamMacOSButton: "Tải .pkg",
    yuetyamAndroidButton: "Tải .apk",
    gboardTitle: "Gboard Việt bính",
    toolsTitle: "Công cụ từ điển",
    resourceTitle: "Tài nguyên học tập",
    googleTranslate: "Google Dịch tiếng Quảng Đông",
    converter: "Bộ chuyển đổi Việt bính",
  },
  wuu: {
    introLinks: "粵拼輸入法",
    sogouTitle: "搜狗輸入法",
    sogouAppStoreButton: "AppStore 下載",
    sogouAppStoreNote: "v10.11 以上版本皆支持粵拼",
    sogouApkButton: "官網下載 APK",
    sogouApkNote: "v10.10 以上版本皆支持粵拼",
    sogouInstructions:
      "下載後入設置界面嘅「語言設置」，揀「中文-粵語」選擇九宮格或者全鍵盤，就可以用粵拼打字。",
    typeduckWeb: "網頁版無需安裝直接打字",
    typeduckDownload: "全平台下載",
    yuetyamTitle: "YuetYam 粵拼輸入法",
    yuetyamiOSButton: "AppStore 下載",
    yuetyamMacOSButton: "下載 .pkg",
    yuetyamAndroidButton: "下載 .apk",
    gboardTitle: "Gboard 粵拼",
    toolsTitle: "辭典工具",
    resourceTitle: "學習資源",
    googleTranslate: "谷歌翻譯粵語",
    converter: "粵拼轉換器",
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
        {/* Responsive grid: 1 column on small screens, 3 columns on medium+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Increased gap */}
          {/* Sogou */}
          <div className="p-4 ">
            <h2 className="text-2xl font-semibold my-4">{t.sogouTitle}</h2>
            <h3 className="font-semibold my-2">iOS</h3>
            <div className="mb-4">
              {/* Added margin */}
              <DownloadButton
                href="https://apps.apple.com/cn/app/%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95-%E8%AF%AD%E9%9F%B3%E5%8F%98%E5%A3%B0%E6%96%97%E5%9B%BE%E8%A1%A8%E6%83%85/id917670924"
                icon={IconBrandApple}
                text={t.sogouAppStoreButton}
                variant="apple"
              />
              <p className="text-sm text-gray-600 mt-1">
                {/* Added margin */}
                {t.sogouAppStoreNote}
              </p>
            </div>
            <h3 className="font-semibold my-2">Android</h3>
            <div className="mb-4">
              {/* Added margin */}
              <DownloadButton
                href="https://shouji.sogou.com/interface/multilingual.php?language=3"
                icon={IconBrandAndroid}
                text={t.sogouApkButton}
                variant="android"
              />
              <p className="text-sm text-gray-600 mt-1">
                {/* Added margin */}
                {t.sogouApkNote}
              </p>
            </div>
            <p className="text-sm text-gray-700">{t.sogouInstructions}</p>
          </div>
          {/* TypeDuck */}
          <div className="p-4 ">
            <h2 className="text-2xl font-semibold my-4">
              TypeDuck 打得粵拼輸入法
            </h2>
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
          {/* YuetYam */}
          <div className="p-4 ">
            <h2 className="text-2xl font-semibold my-4">{t.yuetyamTitle}</h2>
            <p className="text-sm text-gray-700 mb-4">
              {/* Added margin */}
              <a
                href="https://jyutping.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                jyutping.app
              </a>
            </p>
            <div className="mb-4">
              <h3 className="font-semibold my-2">iOS</h3>
              <DownloadButton
                href="https://apps.apple.com/app/id1509367629"
                icon={IconBrandApple}
                text={t.yuetyamiOSButton || ""}
                variant="apple"
              />
            </div>
            <div className="mb-4">
              {/* Added margin */}
              <h3 className="font-semibold my-2">macOS</h3>
              <DownloadButton
                href="https://jyutping.app/mac/"
                icon={IconBrandApple}
                text={t.yuetyamMacOSButton || ""}
                variant="apple"
              />
            </div>
            <div>
              <h3 className="font-semibold my-2">Android</h3>
              <DownloadButton
                href="https://jyutping.app/android/"
                icon={IconBrandAndroid}
                text={t.yuetyamAndroidButton || ""}
                variant="android"
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
            <div className="my-4">
              <DownloadButton
                href="https://apps.apple.com/app/id1091700242"
                icon={IconBrandApple}
                text="AppStore"
                variant="apple"
              />
            </div>
            <h3 className="font-semibold my-2">Android</h3>
            <div className="my-4">
              <DownloadButton
                href="https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_US"
                icon={IconBrandGooglePlay}
                text="Google Play"
                variant="googleplay"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Dictionary tools section */}
      <div className="my-8 p-8 border border-gray-300 border-dashed rounded-md mx-auto">
        <h2 className="my-4 text-4xl font-semibold mx-auto text-center">
          <span className="inline-flex items-center font-semibold">
            <IconBook2 className="mr-2" /> {t.toolsTitle}
          </span>
        </h2>
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Increased gap */}
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
              {/* Use standard img tag */}
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
            <h3 className="my-4 text-2xl font-semibold">粵典 words.hk</h3>
            <a
              href="https://words.hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="block max-w-md w-full hover:opacity-80 transition-opacity duration-200"
            >
              {/* Use standard img tag */}
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
              {/* Use standard img tag */}
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
              {/* Use standard img tag */}
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
              {/* Use standard img tag */}
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
              {/* Adjusted layout */}
              <a
                href="https://github.com/CanCLID/inject-jyutping"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200 flex-shrink-0" // Added flex-shrink-0
              >
                {/* Use standard img tag */}
                <img
                  src="/img/inject.png"
                  alt="Inject Jyutping Logo"
                  width={64}
                  height={64}
                  className="max-w-full h-auto mx-auto"
                  loading="lazy" // Add lazy loading
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
        {/* Centered */}
        {/* Responsive iframe container */}
        <div className="relative h-0 pb-[56.25%] mx-auto max-w-3xl">
          {/* Added max-width */}
          {/* 16:9 Aspect Ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md" // Fill container, added styles
            src="https://www.youtube.com/embed/MOsf0BcLzlc"
            title="YouTube video player: 52 分鐘學識粵拼" // Improved title
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy" // Add lazy loading
          />
          {/* Made iframe self-closing */}
        </div>
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Changed to 3 columns, increased gap */}
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
              {/* Use standard img tag */}
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
          {/* Visual Fonts */}
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
              {/* Use standard img tag */}
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
              {/* Use standard img tag */}
              <img
                src="/img/learnduck.png"
                alt="LearnDuck 粵拼打字入門"
                width={640}
                height={640}
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
              {/* Use standard img tag */}
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
