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

const EnIndexPage: React.FC = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-[#1678d3] text-white">
      <h1 className="font-chiron-hei text-8xl my-16 mx-auto text-center">
        粵拼
      </h1>
      <p className="font-chiron-hei text-4xl my-8 mx-auto text-center">
        {/* Use font class */}
        The Standard Romanization Scheme for Cantonese
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 items-center p-6 max-w-5xl mx-auto">
        {/* Added background and padding */}
        <p className="text-center text-3xl md:text-right font-semibold">
          Why learn Jyutping?
        </p>
        <ul className="text-lg mx-auto md:col-span-2 space-y-3">
          {/* Increased spacing */}
          <li className="flex items-start">
            <IconEar className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>
              Jyutping can help you correct your Cantonese pronunciations and
              accents. Jyutping to Cantonese is like Pinyin to Mandarin.
            </span>
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>
              Chinese characters are not phonographic, we need Jyutping to
              represent the sounds of Cantonese.
            </span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>
              Knowing Jyutping, you can type Cantonese smoothly with Jyutping
              keyboards, the most natural and easiest way to type Cantonese.
            </span>
          </li>
        </ul>
      </div>
      <div className="mx-auto text-center text-3xl my-12 block">
        {/* Added margin */}
        <span className="inline-flex items-center font-semibold">
          <IconBulb className="mr-2" />
          {/* Adjusted icon style */}
          <span>Like Pinyin for Mandarin, learn Jyutping for Cantonese</span>
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
          href="/en/learn" // Use standard <a> tag, keep locale prefix
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-400 dark:hover:bg-yellow-500 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Added transition
        >
          Learn Jyutping
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mx-auto block my-4">or</span>
      {/* Added margin */}
      <div className="flex flex-wrap flex-col items-center justify-center my-8 gap-6">
        {/* Added gap */}
        <a
          href="/en/jyutping" // Use standard <a> tag, keep locale prefix
          className="w-fit text-2xl text-center hover:bg-[#CBF2AE] bg-[#B5E26F] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Adjusted colors
        >
          View the Scheme
          <IconTable className="ml-2 flex-shrink-0" />
        </a>
        <a
          href="/en/keyboard" // Changed link to keyboard page
          className="w-fit text-2xl text-center bg-[#e3edb8] hover:bg-[#e9f1c8] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Adjusted colors
        >
          Jyutping Resources
          <IconKeyboard className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        Want other Languages?
      </span>
      {/* Links to other locales */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center gap-4 my-12 mx-auto max-w-5xl">
        <a
          href="/cmn" // Use standard <a> tag
          className="bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150" // Adjusted styles
        >
          切到普通話 / 國語版
        </a>

        <a
          href="/wuu" // Use standard <a> tag
          className="bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          換到吳語版
        </a>
        <a
          href="/" // Use standard <a> tag
          className="bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          返去粵語版
        </a>
        <a
          href="/nan" // Use standard <a> tag
          className="bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          換到台灣閩南語版
        </a>

        <a
          href="/vi" // Use standard <a> tag
          className="bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          Chuyển sang tiếng Việt
        </a>
      </div>
    </div>
  );
};

export default EnIndexPage;
