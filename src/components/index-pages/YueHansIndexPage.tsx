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

const YueIndexPage: React.FC = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-[#1678d3] text-white">
      {/* Added container and dark mode text */}
      <h1 className="font-jyutping text-8xl my-16 mx-auto text-center">
        粵拼
      </h1>
      
      <p className="leading-relaxed text-3xl mx-auto text-center">
        
        简单合理&nbsp;&nbsp;易学易用
      </p>
      <p className="leading-relaxed text-3xl mx-auto text-center mb-16">
        
        通行粤语拼音方案
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 items-center p-6 max-w-5xl mx-auto">
        
        <p className="text-center text-3xl md:text-right font-semibold">
          点解要学粤拼？
        </p>
        <ul className="text-lg mx-auto md:col-span-2 space-y-3">
          
          <li className="flex items-start">
            <IconEar className="mr-3 mt-1 flex-shrink-0" />
            
            <span>学识粤拼可以帮助纠正懒音错音，规范自己嘅粤语发音。</span>
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-3 mt-1 flex-shrink-0" />
            
            <span>汉字非拼音文字， 需要一个拼音方案嚟准确表示粤语嘅发音。</span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-3 mt-1 flex-shrink-0" />
            
            <span>
              学识粤拼，可以用粤拼输入法嚟打粤语，作为最自然简单嘅打字方式。
            </span>
          </li>
        </ul>
      </div>
      <div className="mx-auto text-center text-3xl block my-12">
        
        <span className="inline-flex items-center font-semibold">
          <IconBulb className="mr-2" />
          
          <span>识粤语就要学粤拼</span>
        </span>
      </div>
      <div className="mx-auto text-center text-3xl my-16 block">
        <span className="inline-flex items-center font-semibold animate-bounce">
          
          <IconArrowDown className="mr-2 h-8 w-8" /> 
        </span>
      </div>
      <div className="flex flex-wrap justify-center my-8 gap-4">
        
        <a
          href="/yue_hans/learn"
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-400 active:bg-yellow-400 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
        >
          一文掌握粤拼
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mx-auto block my-4">或</span>
      
      <div className="flex flex-wrap flex-col items-center justify-center my-8 gap-6">
        <a
          href="/yue_hans/jyutping"
          className="w-fit text-2xl text-center hover:bg-[#CBF2AE] active:bg-[#CBF2AE] bg-[#6CAF59] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
        >
          睇粤拼方案表
          <IconTable className="ml-2 flex-shrink-0" />
        </a>
        <a
          href="/yue_hans/keyboard"
          className="w-fit text-2xl text-center bg-[#cadd7a] hover:bg-[#e9f1c8] active:bg-[#e9f1c8] active:bg-[#e9f1c8] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
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
          href="/cmn"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          切到普通话 / 国语版
        </a>

        <a
          href="/wuu"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          换到吴语版
        </a>

        <a
          href="/nan"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          换到台湾闽南语版
        </a>

        <a
          href="/vi"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          Chuyển sang tiếng Việt
        </a>

        <a
          href="/en"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          Switch to English
        </a>
      </div>
    </div>
  );
};

export default YueIndexPage;
