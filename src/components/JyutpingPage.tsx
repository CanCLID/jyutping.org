import type React from "react";
import Alert from "@/components/Alert.tsx";
import Audio from "@/components/Audio.tsx";
import {
  jyutpingHeadingsTranslations,
  generateSlug, // Import the slug generator
} from "@/i18n/jyutpingHeadings";

// Define an interface for the *rest* of the translation structure (non-heading parts)
interface JyutpingPageContentTranslation {
  intro: string; // Optional intro paragraph
  alertIpaTitle: string;
  alertIpaContent: React.ReactNode;
  onsetTableHeaders: string[];
  onsetRowHeaders: string[];
  alertNullInitial: React.ReactNode;
  codaRowHeaders: string[];
  finalsChartColHeaders1: string[];
  finalsChartColHeaders2: string[];
  finalsChartRowHeader: string;
  alertAddedFinals: React.ReactNode;
  toneTableHeaders: string[];
  toneRowHeaders: string[];
  alertToneMarks: React.ReactNode;
}

// Define translations for content *other* than headings
const contentTranslations: Record<string, JyutpingPageContentTranslation> = {
  en: {
    intro:
      "The Linguistic Society of Hong Kong Cantonese Romanization Scheme, abbreviated as Jyutping.",
    alertIpaTitle: "About IPA transcriptions",
    alertIpaContent: (
      <p>
        All IPA transcriptions on this page are phonemic transcriptions，source
        of the audio data is{" "}
        <a
          href="https://words.hk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          粵典 works.hk
        </a>
        . For further details please see{" "}
        <a href="#reference" className="text-blue-600 hover:underline">
          Reference
        </a>
        .
      </p>
    ),
    // onsetHeading removed
    onsetTableHeaders: [
      "Bilabial",
      "Labio-dental",
      "Alveolar-dental",
      "Palatal",
      "Velar",
      "Glottal",
    ],
    onsetRowHeaders: [
      "Plosive",
      "Nasal",
      "Affricate",
      "Fricative",
      "Approximant",
      "Lateral Approximant",
    ],
    alertNullInitial: (
      <p>Null initial is not represented, e.g. "呀" is only spelt as "aa".</p>
    ),
    // syllabicNasalHeading removed
    // finalHeading removed
    // nucleiHeading removed
    // codaHeading removed
    codaRowHeaders: ["Plosive", "Nasal", "Vowel"],
    // finalsChartHeading removed
    finalsChartColHeaders1: [
      "Monothong",
      "Diphthong",
      "Nasal coda",
      "Plosive coda",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "Nuclei",
    alertAddedFinals: (
      <p>
        <strong>a</strong> and <strong>oet</strong> were added in 2018. Please
        see{" "}
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          here
        </a>{" "}
        for further information.
      </p>
    ),
    // toneHeading removed
    toneTableHeaders: ["平", "上", "去", "入"],
    toneRowHeaders: ["陰", "陽"],
    alertToneMarks: (
      <>
        <p>Tone marks appear at the end of the syllables.</p>
        <p>
          <strong>Examples:</strong>
          fu1 (夫), fu2 (虎), fu3 (副), fu4 (扶), fu5 (婦), fu6 (父)
        </p>
      </>
    ),
    // referenceHeading removed
    // referenceId removed
  },
  yue: {
    intro: "「香港語言學學會粵語拼音方案」，簡稱「粵拼」。",
    alertIpaTitle: "關於 IPA 轉寫",
    alertIpaContent: (
      <p>
        本頁面所用國際音標轉寫皆係寬式轉寫，錄音數據來源係粵典。詳情請見{" "}
        <a href="#references-yue" className="text-blue-600 hover:underline">
          參考文獻
        </a>{" "}
        一節。
      </p>
    ),
    // onsetHeading removed
    onsetTableHeaders: [
      "雙脣音",
      "脣齒音",
      "齒齦音",
      "硬腭音",
      "軟腭音",
      "喉音",
    ],
    onsetRowHeaders: ["爆發音", "塞擦音", "鼻音", "擦音", "近音", "邊近音"],
    alertNullInitial: <p>零聲母唔用字母做標記，例如「呀」只拼作 aa。</p>,
    // syllabicNasalHeading removed
    // finalHeading removed
    // nucleiHeading removed
    // codaHeading removed
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
    // finalsChartHeading removed
    finalsChartColHeaders1: [
      "單元音",
      "複元音",
      "鼻音韻尾",
      "爆發音韻尾（入聲韻）",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "韻腹",
    alertAddedFinals: (
      <p>
        <strong>a</strong> 同 <strong>oet</strong> 於 2018 年新增。詳情請睇{" "}
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          呢度
        </a>
        。
      </p>
    ),
    // toneHeading removed
    toneTableHeaders: ["平", "上", "去", "入"],
    toneRowHeaders: ["陰", "陽"],
    alertToneMarks: (
      <>
        <p>聲調標喺音節後面。</p>
        <p>
          <strong>示例：</strong>
          fu1 （夫），fu2 （虎）, fu3 （副）, fu4 （扶）, fu5 （婦）, fu6 （父）
        </p>
      </>
    ),
    // referenceHeading removed
    // referenceId removed
  },
  cmn: {
    intro: "「香港语言学学会粤语拼音方案」，简称「粤拼」。",
    alertIpaTitle: "关于 IPA 转写",
    alertIpaContent: (
      <p>
        本页面所用国际音标转写皆为宽式转写，录音数据来源为粤典。详情请见{" "}
        <a href="#references-cmn" className="text-blue-600 hover:underline">
          参考文献
        </a>{" "}
        一节。
      </p>
    ),
    // onsetHeading removed
    onsetTableHeaders: [
      "双唇音",
      "唇齿音",
      "齿龈音",
      "硬腭音",
      "软腭音",
      "喉音",
    ],
    onsetRowHeaders: ["爆发音", "塞擦音", "鼻音", "擦音", "近音", "边近音"],
    // Note: Same as Yue, might need specific Cmn phrasing if available
    alertNullInitial: <p>零声母唔用字母做标记，例如「呀」只拼作 aa。</p>,
    // syllabicNasalHeading removed
    // finalHeading removed
    // nucleiHeading removed
    // codaHeading removed
    codaRowHeaders: ["爆发音", "鼻音", "元音"],
    // finalsChartHeading removed
    finalsChartColHeaders1: [
      "单元音",
      "复元音",
      "鼻音韵尾",
      "爆发音韵尾（入声韵）",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "韵腹",
    alertAddedFinals: (
      <p>
        <strong>a</strong> 和 <strong>oet</strong> 于 2018 年新增。详情请看{" "}
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          这里
        </a>
        。
      </p>
    ),
    // toneHeading removed
    toneTableHeaders: ["平", "上", "去", "入"],
    toneRowHeaders: ["阴", "阳"],
    alertToneMarks: (
      <>
        <p>声调标在音节后。</p>
        <p>
          <strong>示例：</strong>
          fu1 （夫），fu2 （虎）, fu3 （副）, fu4 （扶）, fu5 （妇）, fu6 （父）
        </p>
      </>
    ),
    // referenceHeading removed
    // referenceId removed
  },
  nan: {
    intro: "「香港語言學學會粵語拼音方案」，簡稱「粵拼」。",
    alertIpaTitle: "關於 IPA 轉寫",
    alertIpaContent: (
      <p>
        本頁面所用的國際音標轉寫攏是寬式轉寫，錄音數 據來源是粵典。詳情請看{" "}
        <a href="#references-nan" className="text-blue-600 hover:underline">
          參考文獻
        </a>{" "}
        遐。
      </p>
    ),
    // onsetHeading removed
    onsetTableHeaders: [
      "雙脣音",
      "脣齒音",
      "齒齦音",
      "硬腭音",
      "軟腭音",
      "喉音",
    ],
    onsetRowHeaders: ["爆發音", "塞擦音", "鼻音", "擦音", "近音", "邊近音"],
    alertNullInitial: <p>零聲母無用字母做標記，譬如講「呀」干焦拼做 aa。</p>,
    // syllabicNasalHeading removed
    // finalHeading removed
    // nucleiHeading removed
    // codaHeading removed
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
    // finalsChartHeading removed
    finalsChartColHeaders1: [
      "單元音",
      "複元音",
      "鼻音韻尾",
      "爆發音韻尾（入聲韻）",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "韻腹",
    alertAddedFinals: (
      <p>
        <strong>a</strong> 佮 <strong>oet</strong> 佇 2018 年新增。詳情請 看{" "}
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          遮
        </a>
        。
      </p>
    ),
    // toneHeading removed
    toneTableHeaders: ["平", "上", "去", "入"],
    toneRowHeaders: ["陰", "陽"],
    alertToneMarks: (
      <>
        <p>聲調標佇音節後壁。</p>
        <p>
          <strong>舉例：</strong> fu1 （夫），fu2 （虎）, fu3 （副）, fu4
          （扶）, fu5 （婦）, fu6 （父 ）
        </p>
      </>
    ),
    // referenceHeading removed
    // referenceId removed
  },
  vi: {
    intro:
      "Việt bính: Phương pháp phiên âm tiếng Quảng Đông của Hội học thuật ngôn ngữ học Hồng Kông",
    alertIpaTitle: "Về phiên âm IPA",
    alertIpaContent: (
      <p>
        Tất cả các phiên âm IPA trên trang này đều là chuyển tả âm vị, nguồn của
        dữ liệu âm thanh là{" "}
        <a
          href="https://words.hk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          粵典 works.hk
        </a>
        . Để biết thêm chi tiết vui lòng xem{" "}
        <a href="#references-vi" className="text-blue-600 hover:underline">
          Tham khảo
        </a>
        .
      </p>
    ),
    // onsetHeading removed
    onsetTableHeaders: [
      "Âm đôi môi",
      "Âm môi răng",
      "Âm răng",
      "Âm vòm",
      "Âm vòm mềm",
      "Âm hầu",
    ],
    onsetRowHeaders: [
      "Âm bật",
      "Âm tắc xát",
      "Âm mũi",
      "Âm xát",
      "Âm tiếp cận",
      "Âm tiếp cận cạnh lưỡi",
    ],
    alertNullInitial: (
      <p>
        Không thanh mẫu không cầu dấu chữ cái, ví dụ: "呀" chỉ được đánh thành
        "aa".
      </p>
    ),
    // syllabicNasalHeading removed
    // finalHeading removed
    // nucleiHeading removed
    // codaHeading removed
    codaRowHeaders: ["Âm bật", "Âm mũi", "Nguyên âm"],
    // finalsChartHeading removed
    finalsChartColHeaders1: [
      "Nguyên âm đơn",
      "Nguyên âm kép",
      "Âm mũi cuối vận mẫu",
      "Âm bật cuối vận mẫu (Thanh nhập)",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "Nguyên âm trong vận mẫu",
    alertAddedFinals: (
      <p>
        <strong>a</strong> và <strong>oet</strong> đã được thêm vào năm 2018.
        Chi tiết vui lòng xem tại{" "}
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          đây
        </a>
        .
      </p>
    ),
    // toneHeading removed
    toneTableHeaders: ["Bằng", "Thượng", "Khứ", "Nhập"],
    toneRowHeaders: ["Âm", "Dương"],
    alertToneMarks: (
      <>
        <p>Thanh điệu được đánh dấu sau âm tiết.</p>
        <p>
          <strong>Thí dụ:</strong> fu1 （夫），fu2 （虎）, fu3 （副）, fu4
          （扶）, fu5 （婦）, fu6 （父）
        </p>
      </>
    ),
    // referenceHeading removed
    // referenceId removed
  },
  wuu: {
    intro: "「香港語言學學會粵語拼音方案」，略稱「粵拼」。",
    alertIpaTitle: "關於 IPA 轉寫",
    alertIpaContent: (
      <p>
        本葉面用个國際音標轉寫全是寬式轉寫，錄音數據來自粵典。具體請參{" "}
        <a href="#references-wuu" className="text-blue-600 hover:underline">
          參考文獻
        </a>{" "}
        一節。
      </p>
    ),
    // onsetHeading removed
    onsetTableHeaders: [
      "雙脣音",
      "脣齒音",
      "齒齦音",
      "硬腭音",
      "軟腭音",
      "喉音",
    ],
    onsetRowHeaders: ["爆發音", "塞擦音", "鼻音", "擦音", "近音", "邊近音"],
    alertNullInitial: <p>零聲母弗用字母做標記，譬方「呀」單單是 aa。</p>,
    // syllabicNasalHeading removed
    // finalHeading removed
    // nucleiHeading removed
    // codaHeading removed
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
    // finalsChartHeading removed
    finalsChartColHeaders1: [
      "單元音",
      "複元音",
      "鼻音韻尾",
      "爆發音韻尾（入聲韻）",
    ],
    finalsChartColHeaders2: [
      "-",
      "-i",
      "-u",
      "-m",
      "-n",
      "-ng",
      "-p",
      "-t",
      "-k",
    ],
    finalsChartRowHeader: "韻腹",
    alertAddedFinals: (
      <p>
        <strong>a</strong> 搭 <strong>oet</strong> 是 2018 年新增。具體請參{" "}
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          此地
        </a>
        。
      </p>
    ),
    // toneHeading removed
    toneTableHeaders: ["平", "上", "去", "入"],
    toneRowHeaders: ["陰", "陽"],
    alertToneMarks: (
      <>
        <p>聲調標在音節後。</p>
        <p>
          <strong>示例：</strong>
          fu1 （夫），fu2 （虎）, fu3 （副）, fu4 （扶）, fu5 （婦）, fu6 （父）
        </p>
      </>
    ),
    // referenceHeading removed
    // referenceId removed
  },
};

interface JyutpingPageProps {
  locale: string;
}

// Add dark mode classes to tables and text
const tableBaseClass = "my-4 border border-collapse border-gray-300";
const thClass = "border p-2 bg-gray-100";
const tdClass = "border p-2";
const tdHighlightClass = "border p-1 bg-yellow-100"; // Highlight for new finals
const tdMutedClass = "border p-1 bg-gray-300";

const JyutpingPage: React.FC<JyutpingPageProps> = ({ locale }) => {
  // Get translations for headings and content, falling back to English
  const headingsT =
    jyutpingHeadingsTranslations[locale] || jyutpingHeadingsTranslations.en;
  const contentT = contentTranslations[locale] || contentTranslations.en;
  const tEn = jyutpingHeadingsTranslations.en; // Get English translations for slug generation

  return (
    <>
      <div className="container max-w-4xl mx-auto p-4">
        {contentT.intro && (
          <p className="text-lg mb-6 font-semibold">{contentT.intro}</p>
        )}
        <Alert title={contentT.alertIpaTitle}>{contentT.alertIpaContent}</Alert>
        {/* Use heading from centralized translations and consistent slug */}
        <h2
          id={generateSlug(tEn.onsetHeading)} // Use slug generated from English text
          className="text-3xl font-semibold mt-8 mb-4 scroll-mt-20"
        >
          {headingsT.onsetHeading}
        </h2>
        <div className="overflow-x-auto">
          <table className={tableBaseClass}>
            <thead>
              <tr>
                <th className={thClass} />
                {contentT.onsetTableHeaders.map((header) => (
                  <th key={header} className={thClass}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>{contentT.onsetRowHeaders[0]}</td>
                <td className={tdClass}>
                  b [p] 巴 <Audio id="baa1" />
                  <br />p [pʰ] 怕 <Audio id="paa3" />
                </td>
                <td className={tdClass} />
                <td className={tdClass}>
                  d [t] 打 <Audio id="daa2" />
                  <br />t [tʰ] 他 <Audio id="taa1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass}>
                  g [k] 家 <Audio id="gaa1" />
                  <br />k [kʰ] 卡 <Audio id="kaa1" />
                  <br />
                  gw [kʷ] 瓜 <Audio id="gwaa1" />
                  <br />
                  kw [kʷʰ] 夸 <Audio id="kwaa1" />
                </td>
                <td className={tdClass} />
              </tr>
              {/* Yue/Cmn/Nan/Wuu have Affricate row here, En/Vi have Nasal */}
              {["yue", "cmn", "nan", "wuu"].includes(locale) ? (
                <tr>
                  <td className={tdClass}>{contentT.onsetRowHeaders[1]}</td>
                  {/* Affricate */}
                  <td className={tdClass} />
                  <td className={tdClass} />
                  <td className={tdClass}>
                    z [t͡s~t͡ʃ] 渣 <Audio id="zaa1" />
                    <br />c [t͡sʰ~t͡ʃʰ] 叉 <Audio id="caa1" />
                  </td>
                  <td className={tdClass} />
                  <td className={tdClass} />
                  <td className={tdClass} />
                </tr>
              ) : (
                <tr>
                  <td className={tdClass}>{contentT.onsetRowHeaders[1]}</td>
                  {/* Nasal */}
                  <td className={tdClass}>
                    m [m] 媽 <Audio id="maa1" />
                  </td>
                  <td className={tdClass} />
                  <td className={tdClass}>
                    n [n] 那 <Audio id="naa5" />
                  </td>
                  <td className={tdClass} />
                  <td className={tdClass}>
                    ng [ŋ] 牙 <Audio id="ngaa4" />
                  </td>
                  <td className={tdClass} />
                </tr>
              )}
              {/* Yue/Cmn/Nan/Wuu have Nasal row here, En/Vi have Affricate */}
              {["yue", "cmn", "nan", "wuu"].includes(locale) ? (
                <tr>
                  <td className={tdClass}>{contentT.onsetRowHeaders[2]}</td>
                  {/* Nasal */}
                  <td className={tdClass}>
                    m [m] 媽 <Audio id="maa1" />
                  </td>
                  <td className={tdClass} />
                  <td className={tdClass}>
                    n [n] 那 <Audio id="naa5" />
                  </td>
                  <td className={tdClass} />
                  <td className={tdClass}>
                    ng [ŋ] 牙 <Audio id="ngaa4" />
                  </td>
                  <td className={tdClass} />
                </tr>
              ) : (
                <tr>
                  <td className={tdClass}>{contentT.onsetRowHeaders[2]}</td>
                  {/* Affricate */}
                  <td className={tdClass} />
                  <td className={tdClass} />
                  <td className={tdClass}>
                    z [t͡s~t͡ʃ] 渣 <Audio id="zaa1" />
                    <br />c [t͡sʰ~t͡ʃʰ] 叉 <Audio id="caa1" />
                  </td>
                  <td className={tdClass} />
                  <td className={tdClass} />
                  <td className={tdClass} />
                </tr>
              )}
              <tr>
                <td className={tdClass}>{contentT.onsetRowHeaders[3]}</td>
                {/* Fricative */}
                <td className={tdClass} />
                <td className={tdClass}>
                  f [f] 花 <Audio id="faa1" />
                </td>
                <td className={tdClass}>
                  s [s] 沙 <Audio id="saa1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  h [h] 蝦 <Audio id="haa1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass}>{contentT.onsetRowHeaders[4]}</td>
                {/* Approximant */}
                <td className={tdClass}>
                  w [w] 蛙 <Audio id="waa1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  j [j] 也 <Audio id="jaa5" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
              </tr>
              <tr>
                <td className={tdClass}>{contentT.onsetRowHeaders[5]}</td>
                {/* Lateral Approximant */}
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  l [l] 啦 <Audio id="laa1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass} />
              </tr>
            </tbody>
          </table>
        </div>
        <Alert>{contentT.alertNullInitial}</Alert>
        {/* Use heading from centralized translations and consistent slug */}
        <h2
          id={generateSlug(tEn.syllabicNasalHeading)} // Use slug generated from English text
          className="text-3xl font-semibold mt-8 mb-4 scroll-mt-20"
        >
          {headingsT.syllabicNasalHeading}
        </h2>
        <div className="overflow-x-auto">
          <table className={tableBaseClass}>
            <thead>
              <tr>
                <th className={tdClass}>
                  m [m̩] 唔 <Audio id="m4" />
                </th>
                <th className={tdClass}>
                  ng [ŋ̩] 吳 <Audio id="ng4" />
                </th>
              </tr>
            </thead>
          </table>
        </div>
        {/* Use heading from centralized translations and consistent slug */}
        <h2
          id={generateSlug(tEn.finalHeading)} // Use slug generated from English text
          className="text-3xl font-semibold mt-8 mb-4 scroll-mt-20"
        >
          {headingsT.finalHeading}
        </h2>
        {/* Use heading from centralized translations and consistent slug */}
        <h3
          id={generateSlug(tEn.nucleiHeading)} // Use slug generated from English text
          className="text-2xl font-semibold mt-6 mb-3 scroll-mt-20"
        >
          {headingsT.nucleiHeading}
        </h3>
        {/* Nuclei Table - Modified */}
        <div className="overflow-x-auto">
          <table className={tableBaseClass}>
            <tbody>
              <tr>
                <td className={tdClass}>
                  i [iː] 詩 <Audio id="si1" />
                  <br />i<sub>後接 -ng, -k</sub> [e] 星 <Audio id="sing1" /> 識
                  <Audio id="sik1" />
                  <br />
                  yu [y] 書 <Audio id="syu1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass}>
                  u [uː] 夫 <Audio id="fu1" />
                  <br />u<sub>後接 -ng, -k</sub> [o] 風 <Audio id="fung1" /> 福
                  <Audio id="fuk1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass}>
                  e<sub>後接 -i</sub> [e] 四 <Audio id="sei3" />
                  <br />
                  eo [ɵ] 詢 <Audio id="seon1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass}>
                  o<sub>後接 -u</sub> [o] 蘇 <Audio id="sou1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass}>
                  e [ɛː] 些 <Audio id="se1" />
                  <br />
                  oe [œː] 鋸 <Audio id="goe3" />
                </td>
                <td className={tdClass}>
                  a [ɐ] 新 <Audio id="san1" />
                </td>
                <td className={tdClass}>
                  o [ɔː] 疏 <Audio id="so1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass} />
                <td className={tdClass}>
                  aa [aː] 沙 <Audio id="saa1" />
                </td>
                <td className={tdClass} />
              </tr>
            </tbody>
          </table>
        </div>
        {/* Use heading from centralized translations and consistent slug */}
        <h3
          id={generateSlug(tEn.codaHeading)} // Use slug generated from English text
          className="text-2xl font-semibold mt-6 mb-3 scroll-mt-20"
        >
          {headingsT.codaHeading}
        </h3>
        {/* Coda Table - Modified */}
        <div className="overflow-x-auto">
          <table className={tableBaseClass}>
            <tbody>
              <tr>
                <td className={tdClass}>{contentT.codaRowHeaders[0]}</td>
                <td className={tdClass}>
                  p [p̚] 溼 <Audio id="sap1" />
                </td>
                <td className={tdClass}>
                  t [t̚] 失 <Audio id="sat1" />
                </td>
                <td className={tdClass}>
                  k [k̚] 塞 <Audio id="sak1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass}>{contentT.codaRowHeaders[1]}</td>
                <td className={tdClass}>
                  m [m] 心 <Audio id="sam1" />
                </td>
                <td className={tdClass}>
                  n [n] 身 <Audio id="san1" />
                </td>
                <td className={tdClass}>
                  ng [ŋ] 生 <Audio id="sang1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass}>{contentT.codaRowHeaders[2]}</td>
                <td className={tdClass} />
                <td className={tdClass}>
                  i [i] 西 <Audio id="sai1" /> 需 <Audio id="seoi1" />
                </td>
                <td className={tdClass}>
                  u [u] 收 <Audio id="sau1" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Use heading from centralized translations and consistent slug */}
        <h3
          id={generateSlug(tEn.finalsChartHeading)} // Use slug generated from English text
          className="text-2xl font-semibold mt-6 mb-3 scroll-mt-20"
        >
          {headingsT.finalsChartHeading}
        </h3>
        <div className="overflow-x-auto">
          <table className={`${tableBaseClass} text-xs`}>
            <thead>
              <tr>
                <th className={thClass} colSpan={2} rowSpan={2}>
                  {contentT.finalsChartRowHeader}
                </th>
                <th className={thClass}>
                  {contentT.finalsChartColHeaders1[0]}
                </th>
                <th className={thClass} colSpan={2}>
                  {contentT.finalsChartColHeaders1[1]}
                </th>
                <th className={thClass} colSpan={3}>
                  {contentT.finalsChartColHeaders1[2]}
                </th>
                <th className={thClass} colSpan={3}>
                  {contentT.finalsChartColHeaders1[3]}
                </th>
              </tr>
              <tr>
                {contentT.finalsChartColHeaders2.map((header) => (
                  <td
                    key={header}
                    className={`${tdClass} font-semibold text-center`}
                  >
                    {" "}
                    {/* Adjusted header cell style */}
                    {header}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass} rowSpan={2}>
                  i
                </td>
                <td className={tdClass}>[iː]</td>
                <td className={tdClass}>
                  i 思 <Audio id="si1" />
                </td>
                <td className={tdMutedClass} />
                <td className={tdClass}>
                  iu 消 <Audio id="siu1" />
                </td>
                <td className={tdClass}>
                  im 閃 <Audio id="sim2" />
                </td>
                <td className={tdClass}>
                  in 先 <Audio id="sin1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass}>
                  ip 攝 <Audio id="sip3" />
                </td>
                <td className={tdClass}>
                  it 泄 <Audio id="sit3" />
                </td>
                <td className={tdClass} />
              </tr>
              <tr>
                <td className={tdClass}>[e]</td>
                <td className={tdClass} />
                <td className={tdMutedClass} />
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  ing 升 <Audio id="sing1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  ik 識 <Audio id="sik1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass}>yu</td>
                <td className={tdClass}>[yː]</td>
                <td className={tdClass}>
                  yu 書 <Audio id="syu1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  yun 孫 <Audio id="syun1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  yut 雪 <Audio id="syut3" />
                </td>
                <td className={tdClass} />
              </tr>
              <tr>
                <td className={tdClass} rowSpan={2}>
                  u
                </td>
                <td className={tdClass}>[uː]</td>
                <td className={tdClass}>
                  u 夫 <Audio id="fu1" />
                </td>
                <td className={tdClass}>
                  ui 灰 <Audio id="fui1" />
                </td>
                <td className={tdMutedClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  un 歡 <Audio id="fun1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  ut 闊 <Audio id="fut3" />
                </td>
                <td className={tdClass} />
              </tr>
              <tr>
                <td className={tdClass}>[o]</td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdMutedClass} />
                <td className={tdClass}>um</td>{" "}
                {/* Assuming this should be a cell like others */}
                <td className={tdClass} />
                <td className={tdClass}>
                  ung 風 <Audio id="fung1" />
                </td>
                <td className={tdClass}>up</td>{" "}
                {/* Assuming this should be a cell like others */}
                <td className={tdClass} />
                <td className={tdClass}>
                  uk 福 <Audio id="fuk1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass} rowSpan={2}>
                  e
                </td>
                <td className={tdClass}>[e]</td>
                <td className={tdClass} />
                <td className={tdClass}>
                  ei 四 <Audio id="sei3" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>en </td>{" "}
                {/* Assuming this should be a cell like others */}
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass} />
              </tr>
              <tr>
                <td className={tdClass}>[ɛː]</td>
                <td className={tdClass}>
                  e 些 <Audio id="se1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass}>
                  eu 掉 <Audio id="deu6" />
                </td>
                <td className={tdClass}>
                  em 舐 <Audio id="lem2" />
                </td>
                <td className={tdClass} />
                <td className={tdClass}>
                  eng 鄭 <Audio id="zeng6" />
                </td>
                <td className={tdClass}>
                  ep 夾 <Audio id="gep6" />
                </td>
                <td className={tdClass}>
                  et 坺 <Audio id="pet6" />
                </td>
                <td className={tdClass}>
                  ek 石 <Audio id="sek6" />
                </td>
              </tr>
              <tr>
                <td className={tdClass}>eo</td>
                <td className={tdClass}>[ɵ]</td>
                <td className={tdClass} />
                <td className={tdClass}>
                  eoi 需 <Audio id="seoi1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  eon 詢 <Audio id="seon1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  eot 摔 <Audio id="seot1" />
                </td>
                <td className={tdClass} />
              </tr>
              <tr>
                <td className={tdClass}>oe</td>
                <td className={tdClass}>[œː]</td>
                <td className={tdClass}>
                  oe 鋸 <Audio id="goe3" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  oeng 疆 <Audio id="goeng1" />
                </td>
                <td className={tdClass} />
                <td className={tdHighlightClass}>
                  oet <Audio id="oet6" />
                </td>
                <td className={tdClass}>
                  oek 腳 <Audio id="goek3" />
                </td>
              </tr>
              <tr>
                <td className={tdClass} rowSpan={2}>
                  o
                </td>
                <td className={tdClass}>[o]</td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  ou 好 <Audio id="hou2" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass} />
              </tr>
              <tr>
                <td className={tdClass}>[ɔː]</td>
                <td className={tdClass}>
                  o 可 <Audio id="ho2" />
                </td>
                <td className={tdClass}>
                  oi 開 <Audio id="hoi1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass} />
                <td className={tdClass}>
                  on 看 <Audio id="hon3" />
                </td>
                <td className={tdClass}>
                  ong 康 <Audio id="hong1" />
                </td>
                <td className={tdClass} />
                <td className={tdClass}>
                  ot 喝 <Audio id="hot3" />
                </td>
                <td className={tdClass}>
                  ok 學 <Audio id="hok6" />
                </td>
              </tr>
              <tr>
                <td className={tdClass}>a</td>
                <td className={tdClass}>[ɐ]</td>
                <td className={tdHighlightClass}>
                  a 嘞 <Audio id="la3" />
                </td>
                <td className={tdClass}>
                  ai 擠 <Audio id="zai1" />
                </td>
                <td className={tdClass}>
                  au 周 <Audio id="zau1" />
                </td>
                <td className={tdClass}>
                  am 斟 <Audio id="zam1" />
                </td>
                <td className={tdClass}>
                  an 珍 <Audio id="zan1" />
                </td>
                <td className={tdClass}>
                  ang 增 <Audio id="zang1" />
                </td>
                <td className={tdClass}>
                  ap 汁 <Audio id="zap1" />
                </td>
                <td className={tdClass}>
                  at 侄 <Audio id="zat6" />
                </td>
                <td className={tdClass}>
                  ak 則 <Audio id="zak1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass}>aa</td>
                <td className={tdClass}>[aː]</td>
                <td className={tdClass}>
                  aa 渣 <Audio id="zaa1" />
                </td>
                <td className={tdClass}>
                  aai 齋 <Audio id="zaai1" />
                </td>
                <td className={tdClass}>
                  aau 嘲 <Audio id="zaau1" />
                </td>
                <td className={tdClass}>
                  aam 站 <Audio id="zaam6" />
                </td>
                <td className={tdClass}>
                  aan 讚 <Audio id="zaan3" />
                </td>
                <td className={tdClass}>
                  aang 掙 <Audio id="zaang6" />
                </td>
                <td className={tdClass}>
                  aap 集 <Audio id="zaap6" />
                </td>
                <td className={tdClass}>
                  aat 扎 <Audio id="zaat3" />
                </td>
                <td className={tdClass}>
                  aak 責 <Audio id="zaak6" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Alert color="secondary">{contentT.alertAddedFinals}</Alert>
        {/* Use heading from centralized translations and consistent slug */}
        <h2
          id={generateSlug(tEn.toneHeading)} // Use slug generated from English text
          className="text-3xl font-semibold mt-8 mb-4 scroll-mt-20"
        >
          {headingsT.toneHeading}
        </h2>
        <div className="overflow-x-auto">
          <table className={tableBaseClass}>
            <thead>
              <tr>
                <th className={thClass} />
                {contentT.toneTableHeaders.map((header) => (
                  <th key={header} className={thClass}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>{contentT.toneRowHeaders[0]}</td>
                <td className={tdClass}>
                  1 [˥] 詩 <Audio id="si1" />
                </td>
                <td className={tdClass}>
                  2 [˧˥] 史 <Audio id="si2" />
                </td>
                <td className={tdClass}>
                  3 [˧] 試 <Audio id="si3" />
                </td>
                <td className={tdClass}>
                  1 [˥] 識 <Audio id="sik1" />
                  <br />3 [˧] 洩 <Audio id="sit3" />
                </td>
              </tr>
              <tr>
                <td className={tdClass}>{contentT.toneRowHeaders[1]}</td>
                <td className={tdClass}>
                  4 [˨˩] 時 <Audio id="si4" />
                </td>
                <td className={tdClass}>
                  5 [˩˧] 市 <Audio id="si5" />
                </td>
                <td className={tdClass}>
                  6 [˨] 事 <Audio id="si6" />
                </td>
                <td className={tdClass}>
                  6 [˨] 蝕 <Audio id="sit6" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Alert>{contentT.alertToneMarks}</Alert>
        {/* Use heading and ID from centralized translations */}
        <h2
          id={headingsT.referenceId} // Use the locale-specific ID
          className="text-3xl font-semibold mt-8 mb-4 scroll-mt-20"
        >
          {headingsT.referenceHeading}
        </h2>
        <div className="prose max-w-none text-sm space-y-2 mb-8">
          <p>
            Bauer, Robert S., and Paul K. Benedict. 2011.
            <em>Modern cantonese phonology</em>. Vol. 102. Walter de Gruyter
          </p>
          <p>
            Mok, Peggy Pik-Ki, and Peggy, Wai-Yi Wong. 2010. Perception of the
            merging tones in Hong Kong Cantonese: preliminary data on
            monosyllables.
            <em>Speech Prosody 2010-Fifth International Conference</em>.
          </p>
          <p>
            Zee, Eric. 1991. Chinese (Hong Kong Cantonese).
            <em>Journal of the International Phonetic Association</em> 21.1:
            46-48.
          </p>
          <p>
            Stephen, Matthews. 1992.
            <em>Jyutping 粵拼 - Cantonese Romanization Scheme</em>. The
            Linguistic Society of Hong Kong.{" "}
            <a
              href="https://lshk.org/jyutping-scheme/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://lshk.org/jyutping-scheme/
            </a>
          </p>
          <p>
            人文電算硏究中心 2003：“粵語審音配詞字庫”，關子尹
            主持，“兩文三語敎育網上支援計劃”之工作項目之一，二零零三年一月十二日推出，香港優質敎育基金，存取於二零零七年十一月二十日，{" "}
            <a
              href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/
            </a>
            。
          </p>
        </div>
      </div>
    </>
  );
};

export default JyutpingPage;
