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

  return (
    <nav aria-label="Language switcher" className="flex items-center gap-1 flex-wrap">
      <img src="/globe.svg" alt="" aria-hidden="true" className="w-4 h-4 opacity-60 shrink-0" />
      {I18n.locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span aria-hidden="true" className="mr-1 opacity-60 select-none">|</span>}
          <a
            href={getLocalePath(currentPathname, locale)}
            lang={locale.replace("_", "-")}
            aria-current={locale === currentLocale ? "page" : undefined}
            className={`text-white text-sm ${locale === currentLocale ? "font-semibold" : "opacity-70 hover:opacity-100"}`}
          >
            {languageNames[locale] ?? locale}
          </a>
        </span>
      ))}
    </nav>
  );
};

export default LanguageSwitcher;
