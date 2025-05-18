import type React from "react"; // Use import type
import {
  IconEar,
  IconLanguage,
  IconKeyboard,
  IconVocabulary,
  IconTable,
  IconBulb,
  IconArrowDown,
} from "@tabler/icons-react";

const YueIndexPage: React.FC = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-[#1678d3] text-white">
      {/* Added container and dark mode text */}
      <h1 className="font-chiron-hei text-8xl my-16 mx-auto text-center">
        粵拼
      </h1>
      {/* Use font class */}
      <p className="leading-relaxed text-3xl mx-auto text-center">
        {/* Use font class */}
        简单合理&nbsp;&nbsp;易学易用
      </p>
      <p className="leading-relaxed text-3xl mx-auto text-center mb-16">
        {/* Use font class, added margin */}
        通行粤语拼音方案
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 items-center p-6 max-w-5xl mx-auto">
        {/* Added background and padding */}
        <p className="text-center text-3xl md:text-right font-semibold">
          点解要学粤拼？
        </p>
        <ul className="text-lg mx-auto md:col-span-2 space-y-3">
          {/* Increased spacing */}
          <li className="flex items-start">
            <IconEar className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>学识粤拼可以帮助纠正懒音错音，规范自己嘅粤语发音。</span>
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>汉字非拼音文字， 需要一个拼音方案嚟准确表示粤语嘅发音。</span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>
              学识粤拼，可以用粤拼输入法嚟打粤语，作为最自然简单嘅打字方式。
            </span>
          </li>
        </ul>
      </div>
      <div className="mx-auto text-center text-3xl block my-12">
        {/* Added margin */}
        <span className="inline-flex items-center font-semibold">
          <IconBulb className="mr-2" />
          {/* Adjusted icon style */}
          <span>识粤语就要学粤拼</span>
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
          href="/learn" // Use standard <a> tag
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-400 active:bg-yellow-400 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Added transition and active state
        >
          一文掌握粤拼
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mx-auto block my-4">或</span>
      {/* Added margin */}
      <div className="flex flex-wrap flex-col items-center justify-center my-8 gap-6">
        <a
          href="/jyutping" // Use standard <a> tag
          className="w-fit text-2xl text-center hover:bg-[#CBF2AE] active:bg-[#CBF2AE] bg-[#6CAF59] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Adjusted colors and added active state
        >
          睇粤拼方案表
          <IconTable className="ml-2 flex-shrink-0" />
        </a>
        <a
          href="/keyboard" // Use standard <a> tag
          className="w-fit text-2xl text-center bg-[#cadd7a] hover:bg-[#e9f1c8] active:bg-[#e9f1c8] active:bg-[#e9f1c8] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Adjusted colors and added active state
        >
          粤拼资源输入法
          <IconKeyboard className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        唔识粤语？
      </span>
      {/* Links to other locales */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center gap-4 my-12 max-w-5xl mx-auto">
        <a
          href="/cmn" // Use standard <a> tag
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150" // Adjusted styles and added active state
        >
          切到普通话 / 国语版
        </a>

        <a
          href="/wuu" // Use standard <a> tag
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150" // Added active state
        >
          换到吴语版
        </a>

        <a
          href="/nan" // Use standard <a> tag
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150" // Added active state
        >
          换到台湾闽南语版
        </a>

        <a
          href="/vi" // Use standard <a> tag
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150" // Added active state
        >
          Chuyển sang tiếng Việt
        </a>

        <a
          href="/en" // Use standard <a> tag
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150" // Added active state
        >
          Switch to English
        </a>
      </div>
    </div>
  );
};

export default YueIndexPage;
