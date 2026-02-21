import type React from "react";
import { useState, useEffect } from "react";

interface LanguageSwitcherProps {
  locales: readonly string[];
  defaultLocale: string;
  currentPathname: string; // Passed from Astro component
}

const languageNames: Record<string, string> = {
  yue: "粵語",
  yue_hans: "粤语简体",
  en: "English",
  vi: "Tiếng Việt",
  cmn: "普通话/國語",
  nan: "臺灣閩南語",
  wuu: "吳語",
  ja: "日本語",
};

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  locales,
  defaultLocale,
  currentPathname,
}) => {
  // State to hold the determined current locale
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

    // Construct the target path
    let targetPath = "";
    if (newLocale === defaultLocale) {
      // Target is the default locale, path should have no prefix
      targetPath = basePath;
    } else {
      // Target is a non-default locale, path should have the prefix
      targetPath = `/${newLocale}${basePath}`;
      // Handle edge case: avoid double slash if basePath is "/"
      if (targetPath.endsWith("//")) {
        targetPath = targetPath.slice(0, -1);
      }
      // Handle case where target is just /en
      if (targetPath === `/${newLocale}/` && basePath === "/") {
        targetPath = `/${newLocale}`;
      }
    }

    // Set the cookie (optional, but kept from original)
    const date = new Date();
    date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); // 1 year
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; expires=${date.toUTCString()}; SameSite=Lax`;

    // Navigate using window.location
    window.location.href = targetPath;
  };

  // Render null or a placeholder if the locale hasn't been determined yet
  // This prevents rendering with the default before the effect runs
  if (!effectiveCurrentLocale) {
    return null; // Or a loading indicator
  }

  return (
    <div className="relative inline-block text-left">
      <select
        onChange={(e) => handleLocaleChange(e.target.value)}
        value={effectiveCurrentLocale}
        className="px-2 py-1 border border-white rounded-sm bg-transparent text-white"
        aria-label="Select language"
      >
        {/* Add styles for options if needed, e.g., text color for dark mode */}
        {locales.map((locale: string) => (
          <option key={locale} value={locale} className="text-black bg-white">
            {" "}
            {/* Basic option styling */}
            {languageNames[locale] || locale}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
