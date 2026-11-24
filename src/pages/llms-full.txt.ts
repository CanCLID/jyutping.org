import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getJyutpingSections } from "@/data/jyutping";
import { languageNames } from "@/i18n/languageNames";
import { getPageMeta } from "@/i18n/pageMeta";
import { I18n, formatBcp47Locale, getLocalePath } from "@/i18n/utils";
import { getEntryLocale, getLocalizedContentPath, toCanonicalUrl } from "@/utils/content";
import { getCanonicalSiteUrl } from "@/utils/jsonLd";

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = getCanonicalSiteUrl(site);
  const learnEntries = await getCollection("learn");
  const blogEntries = await getCollection("blog");

  const sectionSummaryEn = getJyutpingSections("en")
    .map((s) => `- \`#${s.slug}\`: ${s.text}`)
    .join("\n");

  const localizedPages = I18n.locales.map((locale) => {
    const label = `${languageNames[locale] ?? locale} (${formatBcp47Locale(locale)})`;
    const home = toCanonicalUrl(getLocalePath("/", locale), siteUrl);
    const learn = toCanonicalUrl(getLocalePath("/learn", locale), siteUrl);
    const scheme = toCanonicalUrl(getLocalePath("/jyutping", locale), siteUrl);
    const blog = toCanonicalUrl(getLocalePath("/blog", locale), siteUrl);
    const keyboard = toCanonicalUrl(getLocalePath("/keyboard", locale), siteUrl);
    const about = toCanonicalUrl(getLocalePath("/about", locale), siteUrl);
    return `- **${label}**: [Home](${home}) | [Learn](${learn}) | [Scheme](${scheme}) | [Blog](${blog}) | [Resources](${keyboard}) | [About](${about})`;
  });

  const learnIndex = I18n.locales.flatMap((locale) => {
    const entry = learnEntries.find((item) => getEntryLocale(item.id) === locale);
    if (!entry) return [];
    return [`- **${formatBcp47Locale(locale)}**: [${entry.data.title}](${toCanonicalUrl(getLocalizedContentPath("learn", entry.id), siteUrl)}) — ${entry.data.description ?? ""}`];
  });

  const blogIndex = I18n.locales.flatMap((locale) => {
    const posts = blogEntries
      .filter((item) => getEntryLocale(item.id) === locale)
      .toSorted((a, b) => (a.data.weight || 0) - (b.data.weight || 0));
    return posts.map(
      (post) =>
        `- **${formatBcp47Locale(locale)}**: [${post.data.title}](${toCanonicalUrl(getLocalizedContentPath("blog", post.id), siteUrl)}) — ${post.data.description ?? ""}`,
    );
  });

  const body = `# Complete Jyutping Scheme Reference (粵拼全表規範)

> Authoritative specification of **Jyutping** (粵拼, *The Linguistic Society of Hong Kong Cantonese Romanization Scheme*), published by the Linguistic Society of Hong Kong (LSHK) in 1993 and hosted at ${siteUrl.toString()}.

## Overview & Syllable Structure

A Cantonese syllable in Jyutping has the structure:

- \`[Onset] + Final + Tone\` (where \`Onset\` is optional and \`Final = Nucleus + [Coda]\`), OR
- \`Syllabic Nasal + Tone\` (\`m\`, \`ng\`).

Jyutping uses only plain ASCII letters (\`a–z\`) plus digits \`1–6\` for tones, making it unambiguous, phonetic, and ideal for dictionaries, pedagogy, and keyboards. Note \`c\`, \`z\`, \`j\`, \`eo\`, \`oe\`, \`yu\` in Cantonese Jyutping follow LSHK phonemic values (e.g., \`j\` = [j], \`z\` = [t͡s~t͡ʃ], \`c\` = [t͡sʰ~t͡ʃʰ], NOT English/Mandarin Pinyin values).

Scheme document outline (${toCanonicalUrl("/en/jyutping", siteUrl)}):
${sectionSummaryEn}

---

## 1. Onsets (聲母 — 19 initials plus zero onset)

| Jyutping | IPA | Place | Manner | Example |
| :--- | :--- | :--- | :--- | :--- |
| b | [p] | Bilabial | Unaspirated plosive | 巴 baa1 |
| p | [pʰ] | Bilabial | Aspirated plosive | 怕 paa3 |
| m | [m] | Bilabial | Nasal | 媽 maa1 |
| f | [f] | Labio-dental | Fricative | 花 faa1 |
| w | [w] | Bilabial | Approximant | 蛙 waa1 |
| d | [t] | Alveolar-dental | Unaspirated plosive | 打 daa2 |
| t | [tʰ] | Alveolar-dental | Aspirated plosive | 他 taa1 |
| n | [n] | Alveolar-dental | Nasal | 那 naa5 |
| l | [l] | Alveolar-dental | Lateral approximant | 啦 laa1 |
| z | [t͡s~t͡ʃ] | Alveolar-dental | Unaspirated affricate | 渣 zaa1 |
| c | [t͡sʰ~t͡ʃʰ] | Alveolar-dental | Aspirated affricate | 叉 caa1 |
| s | [s] | Alveolar-dental | Fricative | 沙 saa1 |
| j | [j] | Palatal | Approximant | 也 jaa5 |
| g | [k] | Velar | Unaspirated plosive | 家 gaa1 |
| k | [kʰ] | Velar | Aspirated plosive | 卡 kaa1 |
| ng | [ŋ] | Velar | Nasal | 牙 ngaa4 |
| gw | [kʷ] | Labialized velar | Unaspirated plosive | 瓜 gwaa1 |
| kw | [kʷʰ] | Labialized velar | Aspirated plosive | 夸 kwaa1 |
| h | [h] | Glottal | Fricative | 蝦 haa1 |

Zero onset: syllables starting directly with a vowel nucleus or syllabic nasal have no onset letter (e.g., 亞 aa3, 愛 oi3).

---

## 2. Syllabic Nasals (鼻音單獨成韻 — 2 syllabic consonants)

| Jyutping | IPA | Example |
| :--- | :--- | :--- |
| m | [m̩] | 唔 m4 |
| ng | [ŋ̩] | 吳 ng4 |

---

## 3. Finals (韻母 = 韻腹 Nucleus + 韻尾 Coda)

### 3.1 Vowel Nuclei (韻腹 — 9 orthographic nuclei)

| Jyutping | Allophone / Context | IPA | Example |
| :--- | :--- | :--- | :--- |
| i | Default | [iː] | 詩 si1 |
| i | Before \`-ng\`, \`-k\` | [e] | 星 sing1, 識 sik1 |
| yu | All contexts | [y] / [yː] | 書 syu1 |
| u | Default | [uː] | 夫 fu1 |
| u | Before \`-ng\`, \`-k\` | [o] | 風 fung1, 福 fuk1 |
| e | Before \`-i\` | [e] | 四 sei3 |
| e | Elsewhere | [ɛː] | 些 se1 |
| eo | Always followed by \`-i\`, \`-n\`, \`-t\` | [ɵ] | 詢 seon1 |
| oe | All contexts | [œː] | 鋸 goe3 |
| o | Before \`-u\` | [o] | 蘇 sou1 |
| o | Elsewhere | [ɔː] | 疏 so1 |
| a | Always followed by a coda (except colloquial \`a\`) | [ɐ] | 新 san1 |
| aa | Long open front/central vowel | [aː] | 沙 saa1 |

### 3.2 Codas (韻尾 — 8 codas plus open final \`-\`)

| Category | Codas & Examples |
| :--- | :--- |
| Vowel glides | \`-i\` [i] 西 sai1 / 需 seoi1; \`-u\` [u] 收 sau1 |
| Nasal codas | \`-m\` [m] 心 sam1; \`-n\` [n] 身 san1; \`-ng\` [ŋ] 生 sang1 |
| Checked plosive codas (入聲韻) | \`-p\` [p̚] 溼 sap1; \`-t\` [t̚] 失 sat1; \`-k\` [k̚] 塞 sak1 |

### 3.3 Complete Finals Chart (韻母表)

All standard LSHK finals plus documented colloquial finals (\`a\`, \`oet\`, \`um\`, \`up\`, \`en\`):

| Nucleus | IPA | Open (\`-\`) | \`-i\` | \`-u\` | \`-m\` | \`-n\` | \`-ng\` | \`-p\` | \`-t\` | \`-k\` |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| i | [iː] | i 思 (si1) | — | iu 消 (siu1) | im 閃 (sim2) | in 先 (sin1) | — | ip 攝 (sip3) | it 泄 (sit3) | — |
| i | [e] | — | — | — | — | — | ing 升 (sing1) | — | — | ik 識 (sik1) |
| yu | [yː] | yu 書 (syu1) | — | — | — | yun 孫 (syun1) | — | — | yut 雪 (syut3) | — |
| u | [uː] | u 夫 (fu1) | ui 灰 (fui1) | — | — | un 歡 (fun1) | — | — | ut 闊 (fut3) | — |
| u | [o] | — | — | — | um (colloquial) | — | ung 風 (fung1) | up (colloquial) | — | uk 福 (fuk1) |
| e | [e] | — | ei 四 (sei3) | — | — | en (colloquial) | — | — | — | — |
| e | [ɛː] | e 些 (se1) | — | eu 掉 (deu6) | em 𦧷 (lem2) | — | eng 鄭 (zeng6) | ep 夾 (gep6) | et 坺 (pet6) | ek 石 (sek6) |
| eo | [ɵ] | — | eoi 需 (seoi1) | — | — | eon 詢 (seon1) | — | — | eot 摔 (seot1) | — |
| oe | [œː] | oe 鋸 (goe3) | — | — | — | — | oeng 疆 (goeng1) | — | oet (oet6, colloquial) | oek 腳 (goek3) |
| o | [o] | — | — | ou 好 (hou2) | — | — | — | — | — | — |
| o | [ɔː] | o 可 (ho2) | oi 開 (hoi1) | — | — | on 看 (hon3) | ong 康 (hong1) | — | ot 喝 (hot3) | ok 學 (hok6) |
| a | [ɐ] | a 嘞 (la3, colloquial) | ai 擠 (zai1) | au 周 (zau1) | am 斟 (zam1) | an 珍 (zan1) | ang 增 (zang1) | ap 汁 (zap1) | at 侄 (zat6) | ak 則 (zak1) |
| aa | [aː] | aa 渣 (zaa1) | aai 齋 (zaai1) | aau 嘲 (zaau1) | aam 站 (zaam6) | aan 讚 (zaan3) | aang 掙 (zaang6) | aap 集 (zaap6) | aat 扎 (zaat3) | aak 責 (zaak6) |

---

## 4. Tones (字調 — 6 distinctive tones)

| Tone # | Register & Category | Pitch Contour (Chao) | Example (Open/Nasal) | Checked Entering Tone (\`-p/-t/-k\`) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | 陰平 Yin Ping (High Level / Falling) | [˥] (55 / 53) | 詩 si1 | High Entering (陰入): 識 sik1 |
| 2 | 陰上 Yin Shang (High Rising) | [˧˥] (35) | 史 si2 | — |
| 3 | 陰去 Yin Qu (Mid Level) | [˧] (33) | 試 si3 | Mid Entering (中入): 洩 sit3 |
| 4 | 陽平 Yang Ping (Low Falling) | [˨˩] (21 / 11) | 時 si4 | — |
| 5 | 陽上 Yang Shang (Low Rising) | [˩˧] (23 / 13) | 市 si5 | — |
| 6 | 陽去 Yang Qu (Low Level) | [˨] (22) | 事 si6 | Low Entering (陽入): 蝕 sit6 |

Note on traditional 9-tone terminology: Cantonese has 6 phonetic tone contours across 9 traditional Middle Chinese tone categories because the 3 checked ("entering", 入聲) syllables ending in \`-p\`, \`-t\`, \`-k\` share pitch levels with tones \`1\`, \`3\`, and \`6\`.

---

## 5. Academic References

1. Bauer, Robert S., and Paul K. Benedict. 2011. *Modern Cantonese Phonology*. Vol. 102. Walter de Gruyter.
2. Mok, Peggy Pik-Ki, and Peggy Wai-Yi Wong. 2010. Perception of the merging tones in Hong Kong Cantonese: preliminary data on monosyllables. *Speech Prosody 2010-Fifth International Conference*.
3. Zee, Eric. 1991. Chinese (Hong Kong Cantonese). *Journal of the International Phonetic Association* 21.1: 46–48.
4. Matthews, Stephen. 1992. *Jyutping 粵拼 - Cantonese Romanization Scheme*. The Linguistic Society of Hong Kong. https://lshk.org/jyutping-scheme/
5. 香港中文大學人文電算硏究中心（2018）：《漢語多功能字庫》，https://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/

---

## 6. Ecosystem Tools, Keyboards & Dictionaries

${getPageMeta("en").descriptions.keyboard}

- Keyboards & Input Methods: [TypeDuck](https://www.typeduck.hk/), [Jyutping App](https://jyutping.app/), [rime-cantonese](https://jyutping.net/), Gboard, Cantoboard, OtterBoard, Sogou
- Practice & Extensions: [LearnDuck](https://chaaklau.github.io/LearnDuck/), [jyutping.io](https://jyutping.io/), [inject-jyutping](https://github.com/CanCLID/inject-jyutping)
- Dictionaries & Corpora: [jyut.net](https://jyut.net/), [jyutjyu.com](https://jyutjyu.com/), [words.hk](https://words.hk/), [shyyp.net](https://shyyp.net/hant)
- Learning & Typography: [hambaanglaang.hk](https://hambaanglaang.hk/), [PolyU Cantonese](https://www.polyu.edu.hk/clc/cantonese/home/), [visual-fonts.com](https://visual-fonts.com/), [Wing Font](https://wing-fonts.chunlaw.io/)

## 7. Multilingual Site Index

${localizedPages.join("\n")}

### Learning Guides

${learnIndex.join("\n")}

### Blog Articles

${blogIndex.join("\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
