import type React from "react";
import {
  IconEar,
  IconLanguage,
  IconKeyboard,
  IconVocabulary,
  IconTable,
  IconBulb,
  IconArrowDown,
} from "@tabler/icons-react";

const CmnIndexPage: React.FC = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-[#1678d3] text-white">
      {/* Added container and dark mode text */}
      <h1 className="font-chiron-hei text-8xl my-16 mx-auto text-center">
        粵拼
      </h1>
      {/* Use font class */}
      <p className="font-chiron-hei leading-relaxed text-4xl mx-auto text-center">
        {/* Use font class */}
        簡單合理 易學易用
      </p>
      <p className="font-chiron-hei leading-relaxed text-4xl mx-auto text-center mb-16">
        {/* Use font class, added margin */}
        通行粵語拼音方案
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 items-center p-6 mx-auto max-w-5xl">
        {/* Added background and padding */}
        <p className="text-center text-3xl md:text-right font-semibold">
          為什麼要學粵拼？
        </p>
        <ul className="text-lg mx-auto md:col-span-2 space-y-3">
          {/* Increased spacing */}
          <li className="flex items-start">
            <IconEar className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>掌握粵拼可以幫助糾正懶音錯音，規範自己的粵語口音。</span>
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>漢字非拼音文字，需要一個拼音方案來準確表達粵語的發音。</span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>
              掌握粵拼，就能用粵拼輸入法來打粵語，作爲最自然簡單的打字方式。
            </span>
          </li>
        </ul>
      </div>
      <div className="mx-auto text-center text-3xl my-12 block">
        {/* Added margin */}
        <span className="inline-flex items-center font-semibold">
          <IconBulb className="mr-2" />
          {/* Adjusted icon style */}
          <span>學粵語就要學粵拼</span>
        </span>
      </div>
      <div className="mx-auto text-center text-3xl my-16 block">
        <span className="inline-flex items-center font-semibold animate-bounce">
          {/* Added bounce animation */}
          <IconArrowDown className="mr-2 h-8 w-8" /> {/* Increased size */}
        </span>
      </div>
      <div className="flex flex-wrap justify-center my-8 gap-4">
        {/* Added gap */}
        <a
          href="/cmn/learn" // Use standard <a> tag, keep locale prefix
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-400 dark:hover:bg-yellow-500 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Added transition
        >
          一文掌握粵拼
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mx-auto block my-4">或</span>
      {/* Added margin */}
      <div className="flex flex-wrap flex-col items-center justify-center my-8 gap-6">
        {/* Added gap */}
        <a
          href="/cmn/jyutping" // Use standard <a> tag, keep locale prefix
          className="w-fit text-2xl text-center hover:bg-[#CBF2AE] bg-[#B5E26F] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Adjusted colors
        >
          睇粵拼方案表
          <IconTable className="ml-2 flex-shrink-0" />
        </a>
        <a
          href="/cmn/keyboard" // Changed link to keyboard page, keep locale prefix
          className="w-fit text-2xl text-center bg-[#e3edb8] hover:bg-[#e9f1c8] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Adjusted colors
        >
          粵拼資源輸入法
          <IconKeyboard className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        想看其他語言版本？
      </span>
      {/* Links to other locales */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center gap-4 my-12 max-w-5xl mx-auto">
        <a
          href="/" // Use standard <a> tag
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-100  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150" // Adjusted styles
        >
          返去粵語版
        </a>

        <a
          href="/wuu" // Use standard <a> tag
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-100  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          換到吳語版
        </a>

        <a
          href="/nan" // Use standard <a> tag
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-100  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          換到台灣閩南語版
        </a>

        <a
          href="/vi" // Use standard <a> tag
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-100  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          Chuyển sang tiếng Việt
        </a>

        <a
          href="/en" // Use standard <a> tag
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-100  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          Switch to English
        </a>
      </div>
    </div>
  );
};

export default CmnIndexPage;
