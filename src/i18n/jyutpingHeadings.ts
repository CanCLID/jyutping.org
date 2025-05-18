// src/i18n/jyutpingHeadings.ts

// Define an interface for the translation structure (simplified for headings)
interface JyutpingHeadingTranslation {
  onsetHeading: string;
  syllabicNasalHeading: string;
  finalHeading: string;
  nucleiHeading: string;
  codaHeading: string;
  finalsChartHeading: string;
  toneHeading: string;
  referenceHeading: string;
  referenceId: string; // Keep the ID for slug generation
}

// Define translations (only heading-related parts)
// Extracted from src/components/JyutpingPage.tsx
export const jyutpingHeadingsTranslations: Record<
  string,
  JyutpingHeadingTranslation
> = {
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
};

// Helper function to generate slugs for non-reference headings
// Ensures consistency across languages for linking within the page structure
export const generateSlug = (englishText: string): string => {
  // Use English text as the base for consistent slugs
  // Keep dots for subheadings like 3.1, 3.2, 3.3
  return (
    englishText
      .toLowerCase()
      // .replace(/\./g, "") // Keep the dots
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^\w.-]+/g, "")
  ); // Allow word characters, dots, and hyphens
};
