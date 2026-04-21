import { makeResource } from "@/i18n/utils";

type OnsetRowKey =
  | "affricate"
  | "approximant"
  | "fricative"
  | "lateral"
  | "nasal"
  | "plosive";

export type JyutpingSectionKey =
  | "coda"
  | "final"
  | "finals_chart"
  | "nuclei"
  | "onset"
  | "reference"
  | "syllabic_nasal"
  | "tone";

type JyutpingSectionHeading = {
  depth: 2 | 3;
  id: string;
  key: JyutpingSectionKey;
  slug: string;
  text: string;
};

type JyutpingSectionLabels = Record<JyutpingSectionKey, string>;

type JyutpingTableLabels = {
  codaRowHeaders: string[];
  finalsChartColHeaders1: string[];
  finalsChartColHeaders2: string[];
  finalsChartRowHeader: string;
  onsetRowOrder: OnsetRowKey[];
  onsetTableHeaders: string[];
  onsetTableRowLabels: Record<OnsetRowKey, string>;
  toneRowHeaders: string[];
  toneTableHeaders: string[];
};

const jyutpingSectionMeta: Array<Omit<JyutpingSectionHeading, "text">> = [
  { depth: 2, id: "1-onset", key: "onset", slug: "1-onset" },
  { depth: 2, id: "2-syllabic-nasal", key: "syllabic_nasal", slug: "2-syllabic-nasal" },
  { depth: 2, id: "3-final", key: "final", slug: "3-final" },
  { depth: 3, id: "3.1-nuclei", key: "nuclei", slug: "3.1-nuclei" },
  { depth: 3, id: "3.2-coda", key: "coda", slug: "3.2-coda" },
  { depth: 3, id: "3.3-finals-chart", key: "finals_chart", slug: "3.3-finals-chart" },
  { depth: 2, id: "4-tone", key: "tone", slug: "4-tone" },
  { depth: 2, id: "reference", key: "reference", slug: "reference" },
];

const getJyutpingSectionLabels = makeResource<JyutpingSectionLabels>({
  cmn: {
    coda: "3.2 韻尾",
    final: "3. 韻母",
    finals_chart: "3.3 韻母表",
    nuclei: "3.1 韻腹",
    onset: "1. 聲母表",
    reference: "參考文獻",
    syllabic_nasal: "2. 鼻音單獨成韻",
    tone: "4. 字調",
  },
  en: {
    coda: "3.2 Coda",
    final: "3. Final",
    finals_chart: "3.3 Finals Chart",
    nuclei: "3.1 Nuclei",
    onset: "1. Onset",
    reference: "Reference",
    syllabic_nasal: "2. Syllabic nasal",
    tone: "4. Tone",
  },
  ja: {
    coda: "3.2 韻尾",
    final: "3. 韻母",
    finals_chart: "3.3 韻母表",
    nuclei: "3.1 韻腹（母音）",
    onset: "1. 声母",
    reference: "参考文献",
    syllabic_nasal: "2. 成節鼻音",
    tone: "4. 声調",
  },
  nan: {
    coda: "3.2 韻尾",
    final: "3. 韻母",
    finals_chart: "3.3 韻母表",
    nuclei: "3.1 韻腹",
    onset: "1. 聲母表",
    reference: "參考文獻",
    syllabic_nasal: "2. 鼻音單獨成韻",
    tone: "4. 字調",
  },
  vi: {
    coda: "3.2 Âm cuối vận mẫu",
    final: "3. Vận mẫu",
    finals_chart: "3.3 Tất cả vận mẫu",
    nuclei: "3.1 Nguyên âm trong vận mẫu",
    onset: "1. Thanh mẫu",
    reference: "Tham khảo",
    syllabic_nasal: "2. Âm tiết mũi",
    tone: "4. Thanh điệu",
  },
  wuu: {
    coda: "3.2 韻尾",
    final: "3. 韻母",
    finals_chart: "3.3 韻母表",
    nuclei: "3.1 韻腹",
    onset: "1. 聲母表",
    reference: "參考文獻",
    syllabic_nasal: "2. 鼻音單獨成韻",
    tone: "4. 字調",
  },
  yue: {
    coda: "3.2 韻尾",
    final: "3. 韻母",
    finals_chart: "3.3 韻母表",
    nuclei: "3.1 韻腹",
    onset: "1. 聲母表",
    reference: "參考文獻",
    syllabic_nasal: "2. 鼻音單獨成韻",
    tone: "4. 字調",
  },
  yue_hans: {
    coda: "3.2 韵尾",
    final: "3. 韵母",
    finals_chart: "3.3 韵母表",
    nuclei: "3.1 韵腹",
    onset: "1. 声母表",
    reference: "参考文献",
    syllabic_nasal: "2. 鼻音单独成韵",
    tone: "4. 字调",
  },
});

export const getJyutpingTableLabels = makeResource<JyutpingTableLabels>({
  cmn: {
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
    finalsChartColHeaders1: ["單元音", "複元音", "鼻音韻尾", "爆發音韻尾（入聲韻）"],
    finalsChartColHeaders2: ["-", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
    finalsChartRowHeader: "韻腹",
    onsetRowOrder: ["plosive", "affricate", "nasal", "fricative", "approximant", "lateral"],
    onsetTableHeaders: ["雙脣音", "脣齒音", "齒齦音", "硬齶音", "軟齶音", "喉音"],
    onsetTableRowLabels: {
      affricate: "塞擦音",
      approximant: "近音",
      fricative: "擦音",
      lateral: "邊近音",
      nasal: "鼻音",
      plosive: "爆發音",
    },
    toneRowHeaders: ["陰", "陽"],
    toneTableHeaders: ["平", "上", "去", "入"],
  },
  en: {
    codaRowHeaders: ["Plosive", "Nasal", "Vowel"],
    finalsChartColHeaders1: ["Monothong", "Diphthong", "Nasal coda", "Plosive coda"],
    finalsChartColHeaders2: ["-", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
    finalsChartRowHeader: "Nuclei",
    onsetRowOrder: ["plosive", "nasal", "affricate", "fricative", "approximant", "lateral"],
    onsetTableHeaders: ["Bilabial", "Labio-dental", "Alveolar-dental", "Palatal", "Velar", "Glottal"],
    onsetTableRowLabels: {
      affricate: "Affricate",
      approximant: "Approximant",
      fricative: "Fricative",
      lateral: "Lateral Approximant",
      nasal: "Nasal",
      plosive: "Plosive",
    },
    toneRowHeaders: ["陰", "陽"],
    toneTableHeaders: ["平", "上", "去", "入"],
  },
  ja: {
    codaRowHeaders: ["破裂音", "鼻音", "母音"],
    finalsChartColHeaders1: ["単母音", "二重母音", "鼻音韻尾", "破裂音韻尾（入声韻）"],
    finalsChartColHeaders2: ["-", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
    finalsChartRowHeader: "韻腹",
    onsetRowOrder: ["plosive", "affricate", "nasal", "fricative", "approximant", "lateral"],
    onsetTableHeaders: ["両唇音", "唇歯音", "歯茎音", "硬口蓋音", "軟口蓋音", "声門音"],
    onsetTableRowLabels: {
      affricate: "破擦音",
      approximant: "接近音",
      fricative: "摩擦音",
      lateral: "側面接近音",
      nasal: "鼻音",
      plosive: "破裂音",
    },
    toneRowHeaders: ["陰", "陽"],
    toneTableHeaders: ["平", "上", "去", "入"],
  },
  nan: {
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
    finalsChartColHeaders1: ["單元音", "複元音", "鼻音韻尾", "爆發音韻尾（入聲韻）"],
    finalsChartColHeaders2: ["-", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
    finalsChartRowHeader: "韻腹",
    onsetRowOrder: ["plosive", "affricate", "nasal", "fricative", "approximant", "lateral"],
    onsetTableHeaders: ["雙脣音", "脣齒音", "齒齦音", "硬腭音", "軟腭音", "喉音"],
    onsetTableRowLabels: {
      affricate: "塞擦音",
      approximant: "近音",
      fricative: "擦音",
      lateral: "邊近音",
      nasal: "鼻音",
      plosive: "爆發音",
    },
    toneRowHeaders: ["陰", "陽"],
    toneTableHeaders: ["平", "上", "去", "入"],
  },
  vi: {
    codaRowHeaders: ["Âm bật", "Âm mũi", "Nguyên âm"],
    finalsChartColHeaders1: ["Nguyên âm đơn", "Nguyên âm kép", "Âm mũi cuối vận mẫu", "Âm bật cuối vận mẫu (Thanh nhập)"],
    finalsChartColHeaders2: ["-", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
    finalsChartRowHeader: "Nguyên âm trong vận mẫu",
    onsetRowOrder: ["plosive", "nasal", "affricate", "fricative", "approximant", "lateral"],
    onsetTableHeaders: ["Âm đôi môi", "Âm môi răng", "Âm răng", "Âm vòm", "Âm vòm mềm", "Âm hầu"],
    onsetTableRowLabels: {
      affricate: "Âm tắc xát",
      approximant: "Âm tiếp cận",
      fricative: "Âm xát",
      lateral: "Âm tiếp cận cạnh lưỡi",
      nasal: "Âm mũi",
      plosive: "Âm bật",
    },
    toneRowHeaders: ["Âm", "Dương"],
    toneTableHeaders: ["Bằng", "Thượng", "Khứ", "Nhập"],
  },
  wuu: {
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
    finalsChartColHeaders1: ["單元音", "複元音", "鼻音韻尾", "爆發音韻尾（入聲韻）"],
    finalsChartColHeaders2: ["-", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
    finalsChartRowHeader: "韻腹",
    onsetRowOrder: ["plosive", "affricate", "nasal", "fricative", "approximant", "lateral"],
    onsetTableHeaders: ["雙脣音", "脣齒音", "齒齦音", "硬腭音", "軟腭音", "喉音"],
    onsetTableRowLabels: {
      affricate: "塞擦音",
      approximant: "近音",
      fricative: "擦音",
      lateral: "邊近音",
      nasal: "鼻音",
      plosive: "爆發音",
    },
    toneRowHeaders: ["陰", "陽"],
    toneTableHeaders: ["平", "上", "去", "入"],
  },
  yue: {
    codaRowHeaders: ["爆發音", "鼻音", "元音"],
    finalsChartColHeaders1: ["單元音", "複元音", "鼻音韻尾", "爆發音韻尾（入聲韻）"],
    finalsChartColHeaders2: ["-", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
    finalsChartRowHeader: "韻腹",
    onsetRowOrder: ["plosive", "affricate", "nasal", "fricative", "approximant", "lateral"],
    onsetTableHeaders: ["雙脣音", "脣齒音", "齒齦音", "硬腭音", "軟腭音", "喉音"],
    onsetTableRowLabels: {
      affricate: "塞擦音",
      approximant: "近音",
      fricative: "擦音",
      lateral: "邊近音",
      nasal: "鼻音",
      plosive: "爆發音",
    },
    toneRowHeaders: ["陰", "陽"],
    toneTableHeaders: ["平", "上", "去", "入"],
  },
  yue_hans: {
    codaRowHeaders: ["爆发音", "鼻音", "元音"],
    finalsChartColHeaders1: ["单元音", "复元音", "鼻音韵尾", "爆发音韵尾（入声韵）"],
    finalsChartColHeaders2: ["-", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
    finalsChartRowHeader: "韵腹",
    onsetRowOrder: ["plosive", "affricate", "nasal", "fricative", "approximant", "lateral"],
    onsetTableHeaders: ["双唇音", "唇齿音", "齿龈音", "硬腭音", "软腭音", "喉音"],
    onsetTableRowLabels: {
      affricate: "塞擦音",
      approximant: "近音",
      fricative: "擦音",
      lateral: "边近音",
      nasal: "鼻音",
      plosive: "爆发音",
    },
    toneRowHeaders: ["阴", "阳"],
    toneTableHeaders: ["平", "上", "去", "入"],
  },
});

export function getJyutpingSection(locale: string, key: JyutpingSectionKey): JyutpingSectionHeading {
  const labels = getJyutpingSectionLabels(locale);
  const section = jyutpingSectionMeta.find((entry) => entry.key === key);

  if (!section) {
    throw new Error(`Unknown Jyutping section key: ${key}`);
  }

  return {
    ...section,
    text: labels[key],
  };
}

export function getJyutpingSections(locale: string): JyutpingSectionHeading[] {
  const labels = getJyutpingSectionLabels(locale);

  return jyutpingSectionMeta.map((section) => ({
    ...section,
    text: labels[section.key],
  }));
}
