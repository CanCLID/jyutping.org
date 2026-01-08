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

const ViIndexPage: React.FC = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-[#1678d3] text-white">
      <h1 className="font-chiron-hei text-8xl my-16 mx-auto text-center">
        粵拼
      </h1>
      {/* Use font class, Changed text */}
      <p className="font-chiron-hei text-4xl my-8 mx-auto text-center">
        {/* Use font class */}
        Đơn giản, hợp lý, dễ học, dễ dùng
      </p>
      <p className="font-chiron-hei leading-relaxed text-4xl mx-auto text-center mb-16">
        {/* Use font class, added margin */}
        Phương án phiên âm tiếng Quảng Đông phổ biến
      </p>
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 my-16 items-center p-6">
        {/* Added background and padding */}
        <p className="text-center text-3xl md:text-right font-semibold">
          Tại sao học Việt bính?
        </p>
        <ul className="text-lg mx-auto md:col-span-2 space-y-3">
          {/* Increased spacing */}
          <li className="flex items-start">
            <IconEar className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>
              Việt bính có thể giúp bạn sửa cách phát âm tiếng Quảng Đông của
              mình.
            </span>
          </li>
          <li className="flex items-start">
            <IconLanguage className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>
              Các chữ Hán không phải là chữ tượng thanh, chúng ta cần Việt bính
              để đại diện cho các âm của tiếng Quảng Đông.
            </span>
          </li>
          <li className="flex items-start">
            <IconKeyboard className="mr-3 mt-1 flex-shrink-0" />
            {/* Adjusted icon style */}
            <span>
              Biết Việt bính, bạn có thể gõ tiếng Quảng Đông thuận tiện với bàn
              phím Việt bính, cách gõ tiếng Quảng Đông tự nhiên và dễ dàng nhất.
            </span>
          </li>
        </ul>
      </div>
      <div className="mx-auto text-center text-3xl my-12 font-semibold">
        {/* Added font-semibold */}
        <span className="inline-flex items-center">
          <IconBulb className="mr-2" />
          {/* Adjusted icon style */}
          <span>Tôi đang học tiếng Quảng Đông và nói tiếng Việt.</span>
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
          href="/vi/learn", keep locale prefix
          className="text-2xl text-center bg-yellow-300 text-neutral-800 hover:bg-yellow-400 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Added transition
        >
          Bắt đầu học Việt bính
          <IconVocabulary className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mx-auto block my-4">Hoặc</span>
      {/* Added margin */}
      <div className="flex flex-wrap flex-col items-center justify-center my-8 gap-6">
        {/* Added gap */}
        <a
          href="/vi/jyutping", keep locale prefix
          className="w-fit text-2xl text-center bg-[#6CAF59] hover:bg-[#CBF2AE] active:bg-[#CBF2AE] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Adjusted colors
        >
          Xem bảng Việt bính
          <IconTable className="ml-2 flex-shrink-0" />
        </a>
        <a
          href="/vi/keyboard" // Changed link to keyboard page, keep locale prefix
          className="w-fit text-2xl text-center bg-[#cadd7a] hover:bg-[#e9f1c8] active:bg-[#e9f1c8] text-neutral-800 px-8 py-4 rounded-md inline-flex items-center transition-colors duration-150" // Adjusted colors
        >
          Tài liệu và Bàn phím
          <IconKeyboard className="ml-2 flex-shrink-0" />
        </a>
      </div>
      <span className="text-2xl text-center mt-32 mb-12 mx-auto block">
        Không hiểu tiếng Việt?
      </span>
      {/* Links to other locales */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around items-center gap-4 my-12 mx-auto max-w-5xl">
        <a
          href="/cmn"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150" // Adjusted styles
        >
          切到普通話 / 國語版
        </a>
        <a
          href="/wuu"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          換到吳語版
        </a>
        <a
          href="/"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          返去粵語版
        </a>
        <a
          href="/nan"
          className="bg-neutral-50 text-neutral-800 hover:bg-neutral-200 active:bg-neutral-200  px-4 py-2 rounded-md w-full md:w-auto text-center transition-colors duration-150"
        >
          換到台灣閩南語版
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

export default ViIndexPage;
