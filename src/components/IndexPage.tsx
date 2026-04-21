import {
  IconEar,
  IconLanguage,
  IconKeyboard,
  IconVocabulary,
  IconTable,
  IconArrowDown,
  IconArrowRight,
  IconSparkles,
  IconWorld,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import type { Locale } from "@/i18n/utils";
import { I18n } from "@/i18n/utils";
import { getTranslations } from "@/i18n/pages/index";

const localeLinks: ReadonlyArray<{
  locale: Exclude<Locale, "yue_hans">;
  label: string;
}> = [
  { locale: "yue", label: "返去粵語版" },
  { locale: "cmn", label: "切到普通話 / 國語版" },
  { locale: "nan", label: "換到台灣閩南語版" },
  { locale: "wuu", label: "換到吳語版" },
  { locale: "vi", label: "Chuyển sang tiếng Việt" },
  { locale: "en", label: "Switch to English" },
  { locale: "ja", label: "日本語版に切り替える" },
];

interface Props {
  locale: string;
}

const IndexPage: React.FC<Props> = ({ locale }) => {
  const t = getTranslations(locale);
  const prefix = locale === I18n.defaultLocale ? "" : `/${locale}`;
  const useJyutpingFont = ["cmn", "nan", "wuu", "yue"].includes(locale);
  const bodyFont = useJyutpingFont ? "font-jyutping " : "";
  const toolLogoClassName =
    "h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg ring-1 ring-neutral-200";
  const toolRowClassName =
    "flex items-center gap-3 rounded-xl bg-neutral-50 px-4 py-3 transition-colors hover:bg-[#1678d3]/8";
  const linkedToolRowClassName = `${toolRowClassName} !text-neutral-900 !no-underline hover:!text-neutral-900 hover:!no-underline visited:!text-neutral-900`;

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#1678d3] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#3fa0ee_0%,_#1678d3_45%,_#0c4f8c_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-32 md:pb-28 md:pt-40 text-center">
          <div className="flex flex-col items-center">
            <h1 className="font-jyutping text-7xl md:text-9xl leading-none tracking-wide drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
              粵拼
            </h1>
          </div>
          <div className="mt-10 space-y-2">
            {t.subheading.map((line, i) => (
              <p
                key={i}
                className={`${bodyFont}text-2xl md:text-4xl font-medium text-white/95 leading-relaxed`}
              >
                {line}
              </p>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${prefix}/learn`}
              className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-8 py-4 text-lg font-semibold text-neutral-900 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 hover:bg-yellow-400 active:translate-y-0"
            >
              {t.learnButton}
              <IconVocabulary className="h-5 w-5" />
            </a>
            <a
              href={`${prefix}/keyboard`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/20"
            >
              {t.tryKeyboardButton}
              <IconKeyboard className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-16 flex justify-center text-white/50">
            <IconArrowDown className="h-6 w-6 animate-bounce" />
          </div>
        </div>
      </section>

      {/* What is Jyutping? */}
      <section className="bg-neutral-50 text-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1678d3]/10 px-3 py-1 text-sm font-semibold text-[#1678d3] mb-5">
                <IconSparkles className="h-4 w-4" />
                {t.whatIsHeading}
              </div>
              <div
                className={`${bodyFont}text-xl md:text-2xl leading-relaxed text-neutral-800 space-y-4`}
              >
                {t.whatIsBody.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-white p-8 md:p-10 shadow-xl shadow-neutral-900/5 ring-1 ring-[#1678d3]">
              <div className="space-y-4">
                <div>
                  <p
                    className={`${bodyFont}text-2xl md:text-4xl font-medium text-[#1678d3]`}
                  >
                    {t.jyutpingLabel}
                  </p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-medium">
                    <span className="font-jyutping text-[#1678d3]">
                      nei5 hou2
                    </span>
                    <IconArrowRight className="inline-block mx-3 h-5 w-5 align-middle text-neutral-400" />
                    <span className="text-neutral-900">你好</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why learn? */}
      <section className="bg-[#1678d3] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            {t.whyLearnHeading}
          </h2>
          <div className="mx-auto mb-14 h-1 w-16 rounded-full bg-yellow-300" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: IconEar, text: t.reasonEar, tint: "text-yellow-300" },
              {
                icon: IconLanguage,
                text: t.reasonLanguage,
                tint: "text-[#CBF2AE]",
              },
              {
                icon: IconKeyboard,
                text: t.reasonKeyboard,
                tint: "text-white",
              },
            ].map(({ icon: Icon, text, tint }, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white/10 p-8 ring-1 ring-white/15 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/15"
              >
                <Icon className={`h-12 w-12 ${tint} mb-6`} stroke={1.5} />
                <p className={`text-xl leading-relaxed text-white/95`}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything Jyutping — resource previews */}
      <section className="bg-neutral-50 text-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-14">
            {t.everythingHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Type it */}
            <article className="flex flex-col rounded-3xl bg-white p-8 transition-all">
              <a
                href={`${prefix}/keyboard#input-methods`}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#1678d3]/10 px-3 py-1 text-sm font-semibold !text-[#1678d3] !no-underline transition-colors hover:bg-[#1678d3]/15 hover:!text-[#1678d3] hover:!no-underline visited:!text-[#1678d3]"
              >
                <IconKeyboard className="h-4 w-4" />
                {t.typeItHeading}
              </a>
              <div className="mt-auto space-y-2">
                {[
                  {
                    name: "TypeDuck",
                    sub: "typeduck.hk",
                    href: "https://www.typeduck.hk/web/",
                    img: "/img/typeduck-app-icon.jpg",
                  },
                  {
                    name: "粵拼輸入法",
                    sub: "jyutping.app",
                    href: "https://jyutping.app/",
                    img: "/img/jyutping-app.png",
                  },
                  {
                    name: "Cantoboard",
                    sub: "App Store",
                    href: "https://apps.apple.com/us/app/cantoboard-%E6%99%BA%E8%83%BD%E5%BB%A3%E6%9D%B1%E8%A9%B1%E4%B8%AD%E6%96%87%E8%BC%B8%E5%85%A5%E6%B3%95%E9%8D%B5%E7%9B%A4/id6752963850",
                    img: "/img/cantoboard.png",
                  },
                ].map(({ name, sub, href, img }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkedToolRowClassName}
                  >
                    <div className={`${toolLogoClassName} bg-white`}>
                      <img
                        src={img}
                        alt={name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm truncate">{name}</p>
                      <p className="text-xs text-neutral-500 truncate">{sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </article>

            {/* Look it up */}
            <article className="flex flex-col rounded-3xl bg-white p-8 transition-all">
              <a
                href={`${prefix}/keyboard#dictionaries`}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#6CAF59]/15 px-3 py-1 text-sm font-semibold !text-[#4a8f3d] !no-underline transition-colors hover:bg-[#6CAF59]/20 hover:!text-[#4a8f3d] hover:!no-underline visited:!text-[#4a8f3d]"
              >
                <IconVocabulary className="h-4 w-4" />
                {t.lookItUpHeading}
              </a>
              <div className="mt-auto space-y-2">
                {[
                  {
                    name: "粵音資料集叢",
                    sub: "jyut.net",
                    href: "https://jyut.net/",
                    img: "/img/jyutnet-icon.webp",
                    logoBackgroundClassName: "bg-[#647d8a]",
                  },
                  {
                    name: "粵語辭叢",
                    sub: "jyutjyu.com",
                    href: "https://jyutjyu.com/",
                    img: "/img/jyutjyu.svg",
                    logoBackgroundClassName: "bg-white",
                  },
                  {
                    name: "Google Translate",
                    sub: "translate.google.com",
                    href: "https://translate.google.com/?hl=yue&sl=auto&tl=en&op=translate",
                    img: "/img/google-translate.png",
                    logoBackgroundClassName: "bg-white",
                  },
                ].map(({ name, sub, href, img, logoBackgroundClassName }) => (
                  <a
                    key={sub}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkedToolRowClassName}
                  >
                    <div
                      className={`${toolLogoClassName} ${logoBackgroundClassName}`}
                    >
                      <img
                        src={img}
                        alt={name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm truncate">{name}</p>
                      <p className="text-xs text-neutral-500 truncate">{sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </article>

            {/* Learn it */}
            <article className="flex flex-col rounded-3xl bg-white p-8 transition-all">
              <a
                href={`${prefix}/keyboard#learning`}
                className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-yellow-300/30 px-3 py-1 text-sm font-semibold !text-yellow-800 !no-underline transition-colors hover:bg-yellow-300/40 hover:!text-yellow-800 hover:!no-underline visited:!text-yellow-800"
              >
                <IconPlayerPlayFilled className="h-4 w-4" />
                {t.learnItHeading}
              </a>
              <div className="mt-auto space-y-2">
                {[
                  {
                    name: "LearnDuck",
                    sub: "learnduck.app",
                    href: "https://chaaklau.github.io/LearnDuck/",
                    img: "/img/learnduck.png",
                  },
                  {
                    name: "冚唪唥粵文",
                    sub: "hambaanglaang.hk",
                    href: "https://hambaanglaang.hk/",
                    img: "/img/hambaanglaang_logoB_v2.png",
                  },
                  {
                    name: "翻轉粵語教室",
                    sub: "polyu.edu.hk",
                    href: "https://www.polyu.edu.hk/clc/cantonese/home/",
                    img: "/img/flipped.png",
                  },
                ].map(({ name, sub, href, img }) => (
                  <a
                    key={sub + name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkedToolRowClassName}
                  >
                    <div className={`${toolLogoClassName} bg-white`}>
                      <img
                        src={img}
                        alt={name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm truncate">{name}</p>
                      <p className="text-xs text-neutral-500 truncate">{sub}</p>
                    </div>
                  </a>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#1678d3] text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p
            className={`${bodyFont}text-4xl md:text-5xl mb-10 leading-tight`}
          >
            {t.tagline}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`${prefix}/jyutping`}
              className="inline-flex items-center gap-2 rounded-full bg-[#F4E6A6] px-7 py-3.5 text-lg font-semibold text-[#0C4F8C] transition-colors hover:bg-[#F8EDBF]"
            >
              {t.viewSchemeButton}
              <IconTable className="h-5 w-5" />
            </a>
            <a
              href={`${prefix}/keyboard`}
              className="inline-flex items-center gap-2 rounded-full bg-[#E6F0FF] px-7 py-3.5 text-lg font-semibold text-[#0C4F8C] transition-colors hover:bg-[#F0F6FF]"
            >
              {t.resourcesButton}
              <IconKeyboard className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Language switcher */}
      <section className="bg-neutral-100 text-neutral-900">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="flex items-center justify-center gap-2 text-center text-lg font-semibold mb-8 text-neutral-700">
            <IconWorld className="h-5 w-5" />
            {t.otherLanguagesHeading}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {localeLinks
              .filter((link) => link.locale !== locale.replace(/_.*/, ""))
              .map((link) => (
                <a
                  key={link.locale}
                  lang={link.locale.replaceAll("_", "-")}
                  href={
                    link.locale === I18n.defaultLocale ? "/" : `/${link.locale}`
                  }
                  className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium text-neutral-800 transition-all hover:border-[#1678d3] hover:text-[#1678d3] hover:shadow-sm"
                >
                  {link.label}
                </a>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;
