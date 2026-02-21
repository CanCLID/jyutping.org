import type React from "react";
import {
  IconEar,
  IconKeyboard,
  IconLanguage,
  IconVocabulary,
  IconTable,
  IconBulb,
  IconArrowDown,
} from "@tabler/icons-react";

const WuuIndexPage: React.FC = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-[#1678d3] text-white">
      {/* Added container and dark mode text */}
      <h1 className="font-jyutping text-8xl my-16 mx-auto text-center">
        粵拼
      </h1>
      
      <p className="font-jyutping leading-relaxed text-4xl mx-auto text-center">
        
        便當合理 易學易用
      </p>
      <p className="font-jyutping leading-relaxed text-4xl mx-auto text-center mb-16">
        
        通行粵語拼音方案
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 items-center p-6 mx-auto max-w-5xl">
        
        <p className="text-center text-3xl md:text-right font-semibold">
          为啥要學粤拼？
        </p>
        <ul className="text-lg mx-auto md:col-span-2 space-y-3">
          
          <li className="flex items-start">
            <IconEar className="mr-3 mt-1 flex-shrink-0" />
            
            <span>掌握粵拼好相幫糾正差誤讀音，規範自家个粵語發音。</span>
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-3 mt-1 flex-shrink-0" />
            
            <span>
              漢字弗是拼音文字，有得一隻拼音方案，表達粵語發音再會得準足。
            </span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-3 mt-1 flex-shrink-0" />
            
            <span>會得粵拼，就好用粵拼輸入法錄粵語，打字頂便當頂省力。</span>
          </li>
        </ul>
      </div>
      <div className="mx-auto text-center text-3xl my-12 font-semibold">
        
        <span className="inline-flex items-center">
          <IconBulb className="mr-2" />
          
          <span>學粵語就要學粵拼</span>
        </span>
      </div>
      <div className="mx-auto text-center text-3xl my-16 block">
        <span className="inline-flex items-center font-semibold animate-bounce">
          
          <IconArrowDown className="mr-2 h-8 w-8" /> 
        </span>
      </div>
      <div className="flex flex-wrap justify-center my-8 gap-4">
        
        <a
          href="/wuu/learn"
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-400 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
        >
          用吳語學粵拼
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mx-auto block my-4">或者</span>
      
      <div className="flex flex-wrap flex-col items-center justify-center my-8 gap-6">
        
        <a
          href="/wuu/jyutping"
          className="w-fit text-2xl text-center bg-[#6CAF59] hover:bg-[#CBF2AE] active:bg-[#CBF2AE] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
        >
          看粵拼方案表
          <IconTable className="ml-2 flex-shrink-0" />
        </a>
        <a
          href="/wuu/keyboard" // Changed link to keyboard page
          className="w-fit text-2xl text-center bg-[#cadd7a] hover:bg-[#e9f1c8] active:bg-[#e9f1c8] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
        >
          粵拼資源輸入法
          <IconKeyboard className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        弗識講粵語？
      </span>
      {/* Links to other locales */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center gap-4 my-12 max-w-5xl mx-auto">
        <a
          href="/cmn"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          切到普通話 / 國語版
        </a>

        <a
          href="/"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          革到粵語版
        </a>

        <a
          href="/nan"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          換到台灣閩南語版
        </a>

        <a
          href="/vi"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          Chuyển sang tiếng Việt
        </a>

        <a
          href="/en"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          Switch to English
        </a>
      </div>
    </div>
  );
};

export default WuuIndexPage;
