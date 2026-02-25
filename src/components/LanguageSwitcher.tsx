import { useState, useEffect, useRef } from "react";
import { IconChevronDown, IconWorld } from "@tabler/icons-react";
import { I18n, getLocalePath } from "@/i18n/utils";
import { languageNames } from "@/i18n/languageNames";

interface LanguageSwitcherProps {
  currentPathname: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentPathname }) => {
  const currentLocale =
    I18n.locales.find(
      (locale) =>
        currentPathname.startsWith(`/${locale}/`) ||
        currentPathname === `/${locale}`
    ) ?? I18n.defaultLocale;

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex">
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex items-center gap-1.5 text-white opacity-80 hover:opacity-100"
      >
        <IconWorld size={16} aria-hidden="true" />
        <span lang={currentLocale.replaceAll("_", "-")} className="text-sm">
          {languageNames[currentLocale] ?? currentLocale}
        </span>
        <IconChevronDown size={14} aria-hidden="true" />
      </button>
      {isOpen && (
        <ul
          role="listbox"
          aria-label="Select language"
          className="absolute right-0 mt-1 bg-white text-gray-800 rounded shadow-lg py-1 z-50 min-w-max"
        >
          {I18n.locales.map((locale) => (
            <li key={locale} role="option" aria-selected={locale === currentLocale}>
              <a
                href={getLocalePath(currentPathname, locale)}
                lang={locale.replaceAll("_", "-")}
                aria-current={locale === currentLocale ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-1.5 text-sm hover:bg-gray-100 ${locale === currentLocale ? "font-semibold" : ""}`}
              >
                {languageNames[locale] ?? locale}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default LanguageSwitcher;
