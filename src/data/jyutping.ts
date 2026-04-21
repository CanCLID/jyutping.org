import { makeResource } from "@/i18n/utils";

type OnsetRowKey =
  | "affricate"
  | "approximant"
  | "fricative"
  | "lateral"
  | "nasal"
  | "plosive";

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
