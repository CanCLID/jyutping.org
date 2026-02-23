interface HeadingTranslation {
  onsetHeading: string;
  syllabicNasalHeading: string;
  finalHeading: string;
  nucleiHeading: string;
  codaHeading: string;
  finalsChartHeading: string;
  toneHeading: string;
  referenceHeading: string;
  referenceId: string;
}

export const headingTranslations: Record<string, HeadingTranslation> = {
  cmn: {
    onsetHeading: "1. 聲母表",
    syllabicNasalHeading: "2. 鼻音單獨成韻",
    finalHeading: "3. 韻母",
    nucleiHeading: "3.1 韻腹",
    codaHeading: "3.2 韻尾",
    finalsChartHeading: "3.3 韻母表",
    toneHeading: "4. 字調",
    referenceHeading: "參考文獻",
    referenceId: "references-cmn",
  },
  en: {
    onsetHeading: "1. Onset",
    syllabicNasalHeading: "2. Syllabic nasal",
    finalHeading: "3. Final",
    nucleiHeading: "3.1 Nuclei",
    codaHeading: "3.2 Coda",
    finalsChartHeading: "3.3 Finals Chart",
    toneHeading: "4. Tone",
    referenceHeading: "Reference",
    referenceId: "reference",
  },
  ja: {
    onsetHeading: "1. 声母",
    syllabicNasalHeading: "2. 成節鼻音",
    finalHeading: "3. 韻母",
    nucleiHeading: "3.1 韻腹（母音）",
    codaHeading: "3.2 韻尾",
    finalsChartHeading: "3.3 韻母表",
    toneHeading: "4. 声調",
    referenceHeading: "参考文献",
    referenceId: "references-ja",
  },
  nan: {
    onsetHeading: "1. 聲母表",
    syllabicNasalHeading: "2. 鼻音單獨成韻",
    finalHeading: "3. 韻母",
    nucleiHeading: "3.1 韻腹",
    codaHeading: "3.2 韻尾",
    finalsChartHeading: "3.3 韻母表",
    toneHeading: "4. 字調",
    referenceHeading: "參考文獻",
    referenceId: "references-nan",
  },
  vi: {
    onsetHeading: "1. Thanh mẫu",
    syllabicNasalHeading: "2. Âm tiết mũi",
    finalHeading: "3. Vận mẫu",
    nucleiHeading: "3.1 Nguyên âm trong vận mẫu",
    codaHeading: "3.2 Âm cuối vận mẫu",
    finalsChartHeading: "3.3 Tất cả vận mẫu",
    toneHeading: "4. Thanh điệu",
    referenceHeading: "Tham khảo",
    referenceId: "references-vi",
  },
  wuu: {
    onsetHeading: "1. 聲母表",
    syllabicNasalHeading: "2. 鼻音單獨成韻",
    finalHeading: "3. 韻母",
    nucleiHeading: "3.1 韻腹",
    codaHeading: "3.2 韻尾",
    finalsChartHeading: "3.3 韻母表",
    toneHeading: "4. 字調",
    referenceHeading: "參考文獻",
    referenceId: "references-wuu",
  },
  yue: {
    onsetHeading: "1. 聲母表",
    syllabicNasalHeading: "2. 鼻音單獨成韻",
    finalHeading: "3. 韻母",
    nucleiHeading: "3.1 韻腹",
    codaHeading: "3.2 韻尾",
    finalsChartHeading: "3.3 韻母表",
    toneHeading: "4. 字調",
    referenceHeading: "參考文獻",
    referenceId: "references-yue",
  },
  yue_hans: {
    onsetHeading: "1. 声母表",
    syllabicNasalHeading: "2. 鼻音单独成韵",
    finalHeading: "3. 韵母",
    nucleiHeading: "3.1 韵腹",
    codaHeading: "3.2 韵尾",
    finalsChartHeading: "3.3 韵母表",
    toneHeading: "4. 字调",
    referenceHeading: "参考文献",
    referenceId: "references-yue",
  },
};

interface JyutpingPageContentTranslation {
  intro: string;
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

export const contentTranslations: Record<string, JyutpingPageContentTranslation> = {
  cmn: {
    intro: "「香港語言學學會粵語拼音方案」，簡稱「粵拼」。",
    alertIpaTitle: "關於 IPA 轉寫",
    alertIpaContent: (
      <p>
        本頁面所用國際音標轉寫皆爲寬式轉寫，錄音數據來源爲粵典。詳情請見{" "}
        <a href="#references-cmn" className="text-blue-600 hover:underline">
          參考文獻
        </a>{" "}
        一節。
      </p>
    ),
    onsetTableHeaders: [
      "雙脣音",
      "脣齒音",
      "齒齦音",
      "硬齶音",
      "軟齶音",
      "喉音",
    ],
    onsetRowHeaders: ["爆發音", "塞擦音", "鼻音", "擦音", "近音", "邊近音"],
    alertNullInitial: <p>零聲母唔用字母做標記，例如「呀」只拼作 aa。</p>,
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
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
        <strong>a</strong> 和 <strong>oet</strong> 於 2018 年新增。詳情請看{" "}
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          這裏
        </a>
        。
      </p>
    ),
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
  },
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
    codaRowHeaders: ["Plosive", "Nasal", "Vowel"],
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
  },
  ja: {
    intro: "「香港言語学会広東語ローマ字表記法」、略称「粤拼」。",
    alertIpaTitle: "IPA 表記について",
    alertIpaContent: (
      <p>
        このページで使用されている国際音声記号（IPA）はすべて音素表記です。音声データは{" "}
        <a
          href="https://words.hk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          粵典 words.hk
        </a>{" "}
        から提供されています。詳細は{" "}
        <a href="#references-ja" className="text-blue-600 hover:underline">
          参考文献
        </a>{" "}
        をご覧ください。
      </p>
    ),
    onsetTableHeaders: [
      "両唇音",
      "唇歯音",
      "歯茎音",
      "硬口蓋音",
      "軟口蓋音",
      "声門音",
    ],
    onsetRowHeaders: [
      "破裂音",
      "破擦音",
      "鼻音",
      "摩擦音",
      "接近音",
      "側面接近音",
    ],
    alertNullInitial: (
      <p>
        ゼロ声母（声母なし）は文字で表記しません。例えば「呀」は aa
        とだけ表記します。
      </p>
    ),
    codaRowHeaders: ["破裂音", "鼻音", "母音"],
    finalsChartColHeaders1: [
      "単母音",
      "二重母音",
      "鼻音韻尾",
      "破裂音韻尾（入声韻）",
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
        <strong>a</strong> と <strong>oet</strong> は 2018
        年に追加されました。詳細は{" "}
        <a
          href="https://e40058f5-5f04-4db7-8d70-4650bee22b88.filesusr.com/ugd/508b98_8bead2fef24f46e79eba9bc86faf3075.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          こちら
        </a>{" "}
        をご覧ください。
      </p>
    ),
    toneTableHeaders: ["平", "上", "去", "入"],
    toneRowHeaders: ["陰", "陽"],
    alertToneMarks: (
      <>
        <p>声調は音節の末尾に数字で表記します。</p>
        <p>
          <strong>例：</strong>
          fu1（夫）、fu2（虎）、fu3（副）、fu4（扶）、fu5（婦）、fu6（父）
        </p>
      </>
    ),
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
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
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
  },
  vi: {
    intro:
      "Việt bính: Phương án phiên âm tiếng Quảng Đông của Hội học Ngôn ngữ học Hồng Kông",
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
    codaRowHeaders: ["Âm bật", "Âm mũi", "Nguyên âm"],
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
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
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
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
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
  },
  yue_hans: {
    intro: "「香港语言学学会粤语拼音方案」，简称「粤拼」。",
    alertIpaTitle: "关于 IPA 转写",
    alertIpaContent: (
      <p>
        本页面所用国际音标转写皆系宽式转写，录音数据来源系粤典。详情请见{" "}
        <a href="#references-yue" className="text-blue-600 hover:underline">
          参考文献
        </a>{" "}
        一节。
      </p>
    ),
    onsetTableHeaders: [
      "双唇音",
      "唇齿音",
      "齿龈音",
      "硬腭音",
      "软腭音",
      "喉音",
    ],
    onsetRowHeaders: ["爆发音", "塞擦音", "鼻音", "擦音", "近音", "边近音"],
    alertNullInitial: <p>零声母唔用字母做标记，例如「呀」只拼作 aa。</p>,
    codaRowHeaders: ["爆发音", "鼻音", "元音"],
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
        <strong>a</strong> 同 <strong>oet</strong> 于 2018 年新增。详情请睇{" "}
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
    toneTableHeaders: ["平", "上", "去", "入"],
    toneRowHeaders: ["阴", "阳"],
    alertToneMarks: (
      <>
        <p>声调标喺音节后面。</p>
        <p>
          <strong>示例：</strong>
          fu1 （夫），fu2 （虎）, fu3 （副）, fu4 （扶）, fu5 （妇）, fu6 （父）
        </p>
      </>
    ),
  },
};

export function generateSlug(englishText: string): string {
  // Use English text as the base for consistent slugs
  // Keep dots for subheadings like 3.1 but drop trailing dots such as "1." in
  // headings like "1. Onset" to avoid generating slugs like "1.-onset".
  return (
    englishText
      .toLowerCase()
      .replace(/\.(?=\s|$)/g, "") // Remove dots not followed by a digit
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w.-]+/g, "")
  ); // Allow word characters, dots, and hyphens
};
