import type React from "react";
import { useState, useEffect } from "react";

interface LanguageSwitcherProps {
  locales: readonly string[];
  defaultLocale: string;
  currentPathname: string; // Passed from Astro component
}

const languageNames: Record<string, string> = {
  cmn: "普通话/國語",
  en: "English",
  ja: "日本語",
  nan: "臺灣閩南語",
  vi: "Tiếng Việt",
  wuu: "吳語",
  yue: "粵語",
  yue_hans: "粤语简体",
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  locales,
  defaultLocale,
  currentPathname,
}) => {
  const [effectiveCurrentLocale, setEffectiveCurrentLocale] =
    useState(defaultLocale);

  useEffect(() => {
    // Determine the current locale based on the pathname prop
    const detectedLocale = locales.find(
      (locale) =>
        currentPathname.startsWith(`/${locale}/`) ||
        currentPathname === `/${locale}`
    );
    setEffectiveCurrentLocale(detectedLocale || defaultLocale);
  }, [currentPathname, locales, defaultLocale]);

  const handleLocaleChange = (newLocale: string) => {
    if (!currentPathname) return;

    // Determine the current locale prefix (if any) based on the pathname prop
    const currentLocalePrefix = locales.find(
      (locale) =>
        currentPathname.startsWith(`/${locale}/`) ||
        currentPathname === `/${locale}`
    );

    // Determine the base path (without any locale prefix)
    let basePath = currentPathname;
    if (currentLocalePrefix) {
      basePath = currentPathname.replace(`/${currentLocalePrefix}`, "");
      if (!basePath.startsWith("/")) basePath = `/${basePath}`;
      if (basePath === "") basePath = "/"; // Handle case like /en -> /
    }
    // If no prefix, currentPathname is already the base path

    // Construct the target path: only non-default locales should have the prefix
    let targetPath = "";
    if (newLocale === defaultLocale) {
      targetPath = basePath;
    } else {
      targetPath = `/${newLocale}${basePath}`;
      // Handle edge case: avoid double slash if basePath is "/"
      if (targetPath.endsWith("//")) {
        targetPath = targetPath.slice(0, -1);
      }
      // Handle case where target is just "/" plus the locale
      if (targetPath === `/${newLocale}/` && basePath === "/") {
        targetPath = `/${newLocale}`;
      }
    }

    // Set cookie
    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); // 1 year
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; expires=${date.toUTCString()}; SameSite=Lax`;

    // Navigate to the new page
    window.location.href = targetPath;
  };

  // Prevents rendering before locale determination
  if (!effectiveCurrentLocale) {
    return null;
  }

  return (
    <div className="relative inline-block text-left">
      <select
        onChange={(e) => handleLocaleChange(e.target.value)}
        value={effectiveCurrentLocale}
        className="px-2 py-1 border border-white rounded-sm bg-transparent text-white"
        aria-label="Select language"
      >
        {locales.map((locale: string) => (
          <option key={locale} value={locale} className="text-black bg-white">
            {" "}
            {languageNames[locale] || locale}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
