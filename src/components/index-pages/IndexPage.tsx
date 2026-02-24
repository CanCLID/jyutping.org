import {
  IconEar,
  IconLanguage,
  IconKeyboard,
  IconVocabulary,
  IconTable,
  IconBulb,
  IconArrowDown,
} from "@tabler/icons-react";
import type { Locale } from "@/i18n/utils";
import { I18n } from "@/i18n/utils";
import { getTranslations } from "@/i18n/pages/index";

const localeLinks: ReadonlyArray<{ locale: Exclude<Locale, "yue_hans">; href: string; label: string }> = [
  { locale: "yue", href: "/", label: "返去粵語版" },
  { locale: "cmn", href: "/cmn", label: "切到普通話 / 國語版" },
  { locale: "nan", href: "/nan", label: "換到台灣閩南語版" },
  { locale: "wuu", href: "/wuu", label: "換到吳語版" },
  { locale: "vi", href: "/vi", label: "Chuyển sang tiếng Việt" },
  { locale: "en", href: "/en", label: "Switch to English" },
  { locale: "ja", href: "/ja", label: "日本語版に切り替える" },
];

interface Props {
  locale: Locale;
}

const IndexPage: React.FC<Props> = ({ locale }) => {
  const t = getTranslations(locale);
  const prefix = locale === I18n.defaultLocale ? "" : `/${locale}`;
  const useJyutpingFont = (["cmn", "nan", "wuu", "yue"] as string[]).includes(locale);

  return (
    <div className="mx-auto px-4 py-8 bg-[#1678d3] text-white">
      <h1 className="font-jyutping text-8xl my-16 mx-auto text-center">
        粵拼
      </h1>
      {t.subheading.map((line, i) => {
        const isLast = i === t.subheading.length - 1;
        const classes = [
          "leading-relaxed text-4xl mx-auto text-center",
          useJyutpingFont && "font-jyutping",
          t.subheading.length === 1 ? "my-8" : isLast ? "mb-16" : "",
        ].filter(Boolean).join(" ");
        return (
          <p key={i} className={classes}>
            {line}
          </p>
        );
      })}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 items-center p-6 max-w-5xl mx-auto">
        <p className="text-center text-3xl md:text-right font-semibold">
          {t.whyLearnHeading}
        </p>
        <ul className="text-lg mx-auto md:col-span-2 space-y-3">
          <li className="flex items-start">
            <IconEar className="mr-3 mt-1 flex-shrink-0" />
            <span>{t.reasonEar}</span>
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-3 mt-1 flex-shrink-0" />
            <span>{t.reasonLanguage}</span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-3 mt-1 flex-shrink-0" />
            <span>{t.reasonKeyboard}</span>
          </li>
        </ul>
      </div>
      <div className="mx-auto text-center text-3xl my-12 block">
        <span className="inline-flex items-center font-semibold">
          <IconBulb className="mr-2" />
          <span>{t.tagline}</span>
        </span>
      </div>
      <div className="mx-auto text-center text-3xl my-16 block">
        <span className="inline-flex items-center font-semibold animate-bounce">
          <IconArrowDown className="mr-2 h-8 w-8" />
        </span>
      </div>
      <div className="flex flex-wrap justify-center my-8 gap-4">
        <a
          href={`${prefix}/learn`}
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-400 active:bg-yellow-400 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
        >
          {t.learnButton}
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mx-auto block my-4">{t.or}</span>
      <div className="flex flex-wrap flex-col items-center justify-center my-8 gap-6">
        <a
          href={`${prefix}/jyutping`}
          className="w-fit text-2xl text-center bg-[#6CAF59] hover:bg-[#CBF2AE] active:bg-[#CBF2AE] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
        >
          {t.viewSchemeButton}
          <IconTable className="ml-2 flex-shrink-0" />
        </a>
        <a
          href={`${prefix}/keyboard`}
          className="w-fit text-2xl text-center bg-[#cadd7a] hover:bg-[#e9f1c8] active:bg-[#e9f1c8] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
        >
          {t.resourcesButton}
          <IconKeyboard className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        {t.otherLanguagesHeading}
      </span>
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center items-center gap-5 my-12 max-w-6xl mx-auto">
        {localeLinks
          .filter((link) => link.locale !== locale)
          .map((link) => (
            <a
              key={link.locale}
              lang={link.locale}
              href={link.href}
              className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
      </div>
    </div>
  );
};

export default IndexPage;
