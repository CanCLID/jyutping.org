import {
  IconArrowDown,
  IconBulb,
  IconEar,
  IconKeyboard,
  IconLanguage,
  IconTable,
  IconVocabulary,
} from "@tabler/icons-react";
import type React from "react";

const JaIndexPage: React.FC = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-[#1678d3] text-white">
      <h1 className="font-jyutping text-8xl my-16 mx-auto text-center">
        粵拼
      </h1>
      <p className="text-4xl my-8 mx-auto text-center">
        {/* Do not add `font-jyutping` for Japanese - Japanese text should not be annotated with Cantonese pronunciation */}
        広東語の標準ローマ字表記法
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 items-center p-6 max-w-5xl mx-auto">
        <p className="text-center text-3xl md:text-right font-semibold">
          なぜ粤拼を学ぶのか？
        </p>
        <ul className="text-lg mx-auto md:col-span-2 space-y-3">
          <li className="flex items-start">
            <IconEar className="mr-3 mt-1 flex-shrink-0" />
            <span>
              粤拼は広東語の発音やアクセントを正確に習得するのに役立ちます。
            </span>
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-3 mt-1 flex-shrink-0" />
            <span>
              漢字は表音文字ではないため、広東語の音を表すにはローマ字表記が必要です。
            </span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-3 mt-1 flex-shrink-0" />
            <span>
              粤拼に慣れ親しんだら、粤拼キーボードでスムーズに広東語を入力できます。これが最も自然で簡単な広東語入力方法です。
            </span>
          </li>
        </ul>
      </div>
      <div className="mx-auto text-center text-3xl my-12 block">
        <span className="inline-flex items-center font-semibold">
          <IconBulb className="mr-2" />
          <span>広東語を学ぶならまず粤拼を</span>
        </span>
      </div>
      <div className="mx-auto text-center text-3xl my-16 block">
        <span className="inline-flex items-center font-semibold animate-bounce">
          <IconArrowDown className="mr-2 h-8 w-8" />
        </span>
      </div>
      <div className="flex flex-wrap justify-center my-8 gap-4">
        <a
          href="/ja/learn"
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-400 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
        >
          粤拼を学ぶ
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mx-auto block my-4">または</span>
      <div className="flex flex-wrap flex-col items-center justify-center my-8 gap-6">
        <a
          href="/ja/jyutping"
          className="w-fit text-2xl text-center bg-[#6CAF59] hover:bg-[#CBF2AE] active:bg-[#CBF2AE] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
        >
          粤拼方案を見る
          <IconTable className="ml-2 flex-shrink-0" />
        </a>
        <a
          href="/ja/keyboard"
          className="w-fit text-2xl text-center bg-[#cadd7a] hover:bg-[#e9f1c8] active:bg-[#e9f1c8] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150"
        >
          粤拼のリソース
          <IconKeyboard className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        他の言語をお探しですか？
      </span>
          {/* Links to other locales */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center gap-4 my-12 mx-auto max-w-5xl">
        <a
          lang="en"
          href="/en"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          Switch to English
        </a>

        <a
          lang="cmn"
          href="/cmn"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          切到普通話 / 國語版
        </a>

        <a
          lang="nan"
          href="/nan"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          換到台灣閩南語版
        </a>

        <a
          lang="yue"
          href="/"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          返去粵語版
        </a>

        <a
          lang="vi"
          href="/vi"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          Chuyển sang tiếng Việt
        </a>
      </div>
    </div>
  );
};

export default JaIndexPage;
