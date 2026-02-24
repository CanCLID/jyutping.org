import { makeResource } from "../utils";

type IndexPageTranslation = {
  subheading: string[];
  whyLearnHeading: string;
  reasonEar: string;
  reasonLanguage: string;
  reasonKeyboard: string;
  tagline: string;
  learnButton: string;
  or: string;
  viewSchemeButton: string;
  resourcesButton: string;
  otherLanguagesHeading: string;
};

export const getTranslations = makeResource<IndexPageTranslation>({
  cmn: {
    subheading: ["簡單合理 易學易用", "通行粵語拼音方案"],
    whyLearnHeading: "為什麼要學粵拼？",
    reasonEar: "掌握粵拼可以幫助糾正懶音錯音，規範自己的粵語口音。",
    reasonLanguage: "漢字非拼音文字，需要一個拼音方案來準確表達粵語的發音。",
    reasonKeyboard: "掌握粵拼，就能用粵拼輸入法來打粵語，作為最自然簡單的打字方式。",
    tagline: "學粵語就要學粵拼",
    learnButton: "一文掌握粵拼",
    or: "或",
    viewSchemeButton: "睇粵拼方案表",
    resourcesButton: "粵拼資源輸入法",
    otherLanguagesHeading: "想看其他語言版本？",
  },
  en: {
    subheading: ["The Standard Romanization Scheme for Cantonese"],
    whyLearnHeading: "Why learn Jyutping?",
    reasonEar: "Jyutping can help you correct your Cantonese pronunciations and accents. Jyutping to Cantonese is like Pinyin to Mandarin.",
    reasonLanguage: "Chinese characters are not phonographic, we need Jyutping to represent the sounds of Cantonese.",
    reasonKeyboard: "Knowing Jyutping, you can type Cantonese smoothly with Jyutping keyboards, the most natural and easiest way to type Cantonese.",
    tagline: "Like Pinyin for Mandarin, learn Jyutping for Cantonese",
    learnButton: "Learn Jyutping",
    or: "or",
    viewSchemeButton: "View the Scheme",
    resourcesButton: "Jyutping Resources",
    otherLanguagesHeading: "Want other Languages?",
  },
  ja: {
    subheading: ["広東語の標準ローマ字表記法"],
    whyLearnHeading: "なぜ粤拼を学ぶのか？",
    reasonEar: "粤拼は広東語の発音やアクセントを正確に習得するのに役立ちます。",
    reasonLanguage: "漢字は表音文字ではないため、広東語の音を表すにはローマ字表記が必要です。",
    reasonKeyboard: "粤拼に慣れ親しんだら、粤拼キーボードでスムーズに広東語を入力できます。これが最も自然で簡単な広東語入力方法です。",
    tagline: "広東語を学ぶならまず粤拼を",
    learnButton: "粤拼を学ぶ",
    or: "または",
    viewSchemeButton: "粤拼方案を見る",
    resourcesButton: "粤拼のリソース",
    otherLanguagesHeading: "他の言語をお探しですか？",
  },
  nan: {
    subheading: ["簡單合理 易學易用", "通行粵語拼音方案"],
    whyLearnHeading: "按怎欲學粵拼？",
    reasonEar: "學會曉粵拼會當幫助糾正懶音錯音，規範家己的粵語口音。",
    reasonLanguage: "漢字毋是拼音文字，需要一个拼音方案來準確表達粵語的發音。",
    reasonKeyboard: "學會曉粵拼，會當用粵拼輸入法來拍粵語，按呢拍字上蓋自然簡單。",
    tagline: "學粵語就要學粵拼",
    learnButton: "一文掌握粵拼",
    or: "或者",
    viewSchemeButton: "看粵拼方案表",
    resourcesButton: "粵拼資源輸入法",
    otherLanguagesHeading: "毋𧧸粵語？",
  },
  vi: {
    subheading: ["Đơn giản, hợp lý, dễ học, dễ dùng", "Phương án phiên âm tiếng Quảng Đông phổ biến"],
    whyLearnHeading: "Tại sao học Việt bính?",
    reasonEar: "Việt bính có thể giúp bạn sửa cách phát âm tiếng Quảng Đông của mình.",
    reasonLanguage: "Các chữ Hán không phải là chữ tượng thanh, chúng ta cần Việt bính để đại diện cho các âm của tiếng Quảng Đông.",
    reasonKeyboard: "Biết Việt bính, bạn có thể gõ tiếng Quảng Đông thuận tiện với bàn phím Việt bính, cách gõ tiếng Quảng Đông tự nhiên và dễ dàng nhất.",
    tagline: "Tôi đang học tiếng Quảng Đông và nói tiếng Việt.",
    learnButton: "Bắt đầu học Việt bính",
    or: "Hoặc",
    viewSchemeButton: "Xem bảng Việt bính",
    resourcesButton: "Tài liệu và Bàn phím",
    otherLanguagesHeading: "Không hiểu tiếng Việt?",
  },
  wuu: {
    subheading: ["便當合理 易學易用", "通行粵語拼音方案"],
    whyLearnHeading: "为啥要學粤拼？",
    reasonEar: "掌握粵拼好相幫糾正差誤讀音，規範自家个粵語發音。",
    reasonLanguage: "漢字弗是拼音文字，有得一隻拼音方案，表達粵語發音再會得準足。",
    reasonKeyboard: "會得粵拼，就好用粵拼輸入法錄粵語，打字頂便當頂省力。",
    tagline: "學粵語就要學粵拼",
    learnButton: "用吳語學粵拼",
    or: "或者",
    viewSchemeButton: "看粵拼方案表",
    resourcesButton: "粵拼資源輸入法",
    otherLanguagesHeading: "弗識講粵語？",
  },
  yue: {
    subheading: ["簡單合理 易學易用", "通行粵語拼音方案"],
    whyLearnHeading: "點解要學粵拼？",
    reasonEar: "學識粵拼可以幫助糾正懶音錯音，規範自己嘅粵語發音。",
    reasonLanguage: "漢字非拼音文字，需要一個拼音方案嚟準確表示粵語嘅發音。",
    reasonKeyboard: "學識粵拼，可以用粵拼輸入法嚟打粵語，作爲最自然簡單嘅打字方式。",
    tagline: "識粵語就要學粵拼",
    learnButton: "一文掌握粵拼",
    or: "或",
    viewSchemeButton: "睇粵拼方案表",
    resourcesButton: "粵拼資源輸入法",
    otherLanguagesHeading: "唔識粵語？",
  },
  yue_hans: {
    subheading: ["简单合理　易学易用", "通行粤语拼音方案"],
    whyLearnHeading: "点解要学粤拼？",
    reasonEar: "学识粤拼可以帮助纠正懒音错音，规范自己嘅粤语发音。",
    reasonLanguage: "汉字非拼音文字，需要一个拼音方案嚟准确表示粤语嘅发音。",
    reasonKeyboard: "学识粤拼，可以用粤拼输入法嚟打粤语，作为最自然简单嘅打字方式。",
    tagline: "识粤语就要学粤拼",
    learnButton: "一文掌握粤拼",
    or: "或",
    viewSchemeButton: "睇粤拼方案表",
    resourcesButton: "粤拼资源输入法",
    otherLanguagesHeading: "唔识粤语？",
  },
});
