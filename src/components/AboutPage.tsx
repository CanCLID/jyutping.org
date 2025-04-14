import type React from "react";
import { IconBrandGithub, IconMail, IconKeyboard } from "@tabler/icons-react";

// Define an interface for the translation structure
interface AboutPageTranslation {
  acknowledgementsTitle: string;
  acknowledgementsP1: React.ReactNode;
  acknowledgementsP2: string;
  acknowledgementsP3: string;
  acknowledgementsP4: string;
  acknowledgementsP5: string;
  developContributeTitle: string;
  developContributeP1: string;
  emailText: React.ReactNode;
  githubText: React.ReactNode;
  keyboardText: React.ReactNode | null; // Can be null if missing
  finalParagraph: string;
}

// Define translations for static text (using <a> tags now)
const translations: Record<string, AboutPageTranslation> = {
  en: {
    acknowledgementsTitle: "Acknowledgements",
    acknowledgementsP1: (
      <>
        This website is developed by{" "}
        <a
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Cantonese Computational Linguistics Infrastructure Development
          Workgroup (CanCLID)
        </a>
        , with the assistance from{" "}
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          The Linguistic Society of Hong Kong (LSHK)
        </a>
        . All codes are open-sourced on{" "}
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          GitHub
        </a>
        , contributions are highly welcomed.
      </>
    ),
    acknowledgementsP2:
      "This site is made possible thanks to the Jyutping Workgroup of LSHK and words.hk. Special thanks to Dr. Chaak-ming Lau, Dr. Kwan-hin Cheung, Dr. Andy Chin, Mr. Raymond Tze and Mr. Zungman Ceoi.",
    acknowledgementsP3:
      "Thank Mr. Lim Hian-tong for providing the Taiwanese Hokkien version of this site.",
    acknowledgementsP4:
      "Thank Mr. 具區句魚 for providing the Wu version of this site.",
    acknowledgementsP5:
      "Thank 以成 (Wong Yising) for providing the Vietnamese version of this site.",
    developContributeTitle: "Develop and Contribute",
    developContributeP1:
      "If you want to get involved or support Jyutping, you can:",
    emailText: (
      <>
        Email to{" "}
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          support@jyutping.org
        </a>{" "}
        to tell us your thoughts or any feedbacks.
      </>
    ),
    githubText: (
      <>
        Contribute on{" "}
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          GitHub
        </a>{" "}
        by opening a new issue or making a new pull request of codes.
      </>
    ),
    keyboardText: (
      <>
        Install and type with
        <a
          href="/keyboard" // Keep relative link for internal navigation
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          Jyutping keyboards
        </a>
        , and share this site with others.
      </>
    ),
    finalParagraph: "Your help and contribution is always appreciated.",
  },
  yue: {
    acknowledgementsTitle: "鳴謝",
    acknowledgementsP1: (
      <>
        本站由
        <a
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          粵語計算語言學基礎建設組
        </a>
        建成，並得到
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          香港語言學學會 (LSHK)
        </a>
        嘅協助。網站原始碼全部開源喺
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          GitHub
        </a>
        ，歡迎外界貢獻。
      </>
    ),
    acknowledgementsP2:
      "感謝 LSHK 粵拼小組同粵典對本站嘅支持。特別鳴謝 Chaak-ming Lau 博士、Andy Chin 博士、Kwan-hin Cheung 博士、Raymond Tze 先生同 Zungman Ceoi 先生爲建設本站提供嘅幫助。",
    acknowledgementsP3: "感謝 Lim Hian-tong 先生提供本站臺灣閩南語版本。",
    acknowledgementsP4: "感謝具區句魚先生提供本站吳語版本。",
    acknowledgementsP5: "感謝以成提供本站越南語版本。",
    developContributeTitle: "開發同貢獻",
    developContributeP1: "若果閣下想支持粵拼或者參與我哋嘅事務，你可以：",
    emailText: (
      <>
        傳送電郵至{" "}
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          support@jyutping.org
        </a>{" "}
        話畀我哋知你嘅諗法或者回饋意見。
      </>
    ),
    githubText: (
      <>
        喺{" "}
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          GitHub
        </a>{" "}
        上面新開一個 issue 討論或者代碼 pull request。
      </>
    ),
    keyboardText: (
      <>
        安裝同使用
        <a
          href="/keyboard" // Keep relative link
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          粵拼輸入法
        </a>
        嚟打字，以及同人分享本網站。
      </>
    ),
    finalParagraph:
      "若果閣下識得粵語，並且願意將本網站翻譯成其他語言，請務必以電郵聯絡我哋，我哋非常歡迎你嘅幫助同貢獻。",
  },
  cmn: {
    acknowledgementsTitle: "鸣谢",
    acknowledgementsP1: (
      <>
        本站由
        <a
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          粵語計算語言學基礎建設組
        </a>
        建成，并得到
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          香港語言學學會 (LSHK)
        </a>
        的協助。網站源碼全部開源在
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          GitHub
        </a>
        ，歡迎外界貢獻。
      </>
    ),
    acknowledgementsP2:
      "感謝 LSHK 粵拼小組和粵典對本站的支持。特別鳴謝 Chaak-ming Lau 博士，Kwan-hin Cheung 博士，Andy Chin 博士，Raymond Tze 先生和 Zungman Ceoi 先生爲建設本站提供的幫助。",
    acknowledgementsP3: "感谢 Lim Hian-tong 先生提供本站臺灣闽南语版本。",
    acknowledgementsP4: "感谢具区句鱼先生提供本站吴语版本。",
    acknowledgementsP5: "感謝以成提供本站越南語版本。",
    developContributeTitle: "開發及貢獻",
    developContributeP1: "如果你想支持粵拼或參與到我們的事務中，你可以：",
    emailText: (
      <>
        發郵件到
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          support@jyutping.org
        </a>
        告訴我們你的想法或者反饋意見。
      </>
    ),
    githubText: (
      <>
        在
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          GitHub
        </a>
        上面新開一個 issue 討論或者代碼 pull request。
      </>
    ),
    keyboardText: (
      <>
        安裝使用
        <a
          href="/keyboard" // Keep relative link
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          粵拼輸入法
        </a>
        打字，以及同人分享本網站。
      </>
    ),
    finalParagraph:
      "如果你熟習粵語和其他語言，并願意把本網站翻譯成其他語言，請務必郵件聯繫我們，我們非常歡迎你的幫助和貢獻。",
  },
  nan: {
    acknowledgementsTitle: "鳴謝",
    acknowledgementsP1: (
      <>
        本站由
        <a
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          粵語計算語言學基礎建設組
        </a>
        建成，並得到
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          香港語言學學會 (LSHK)
        </a>
        的協助。網站源碼全部開源佇
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          GitHub
        </a>
        ，歡迎外界貢獻。
      </>
    ),
    acknowledgementsP2:
      "感謝 LSHK 粵拼小組佮粵典對本站的支持。特別感謝 Chaak-ming Lau 博士，Kwan-hin Cheung 博士，Andy Chin 博士，Raymond Tze 先生佮 Zungman Ceoi 先生為著建設本站所提供的幫助。",
    acknowledgementsP3: "感謝 Lim Hian-tong 先生提供本站臺灣閩南語版本。",
    acknowledgementsP4: "感謝具區句魚先生提供本站吳語版本。",
    acknowledgementsP5: "感謝以成提供本站越南語版本。",
    developContributeTitle: "開發佮貢獻",
    developContributeP1: "你若想欲支持粵拼抑是參與阮的事務，你會當：",
    emailText: (
      <>
        寄批
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          support@jyutping.org
        </a>
        予阮知影你的想法抑是意見。
      </>
    ),
    githubText: (
      <>
        佇{" "}
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          GitHub
        </a>{" "}
        頂面開一个新的 issue 討論抑是代碼 pull request。
      </>
    ),
    keyboardText: (
      <>
        安裝使用
        <a
          href="/keyboard" // Keep relative link
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          粵拼輸入法
        </a>
        打字，以及分享本站。
      </>
    ), // Missing in NAN source
    finalParagraph:
      "你若會曉粵語佮其他語言，而且願意共這个網站翻譯做其他語言，請你著寄批聯絡阮，阮真歡迎你的幫助佮貢獻。",
  },
  vi: {
    acknowledgementsTitle: "Lời cảm ơn",
    acknowledgementsP1: (
      <>
        Trang web này được phát triển bởi{" "}
        <a
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          Tổ phát triển cơ sở hạ tầng ngôn ngữ học tính toán tiếng Quảng Đông
          (CanCLID)
        </a>
        , với sự hỗ trợ của{" "}
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          Hội học thuật ngôn ngữ học Hồng Kông (LSHK)
        </a>
        . Tất cả các mã đều có nguồn mở trên{" "}
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          GitHub
        </a>
        , các đóng góp rất được hoan nghênh.
      </>
    ),
    acknowledgementsP2:
      "Trang web này được thực hiện nhờ Tổ Việt bính của LSHK và words.hk. Đặc biệt cảm ơn Tiến sĩ Chaak-ming Lau, Tiến sĩ Andy Chin, Tiến sĩ Kwan-hin Cheung, Ông Raymond Tze và Ông Zungman Ceoi.",
    acknowledgementsP3:
      "Cảm ơn Ông Lim Hian-tong đã cung cấp phiên bản tiếng Phúc Kiến Đài Loan của trang web này.",
    acknowledgementsP4:
      "Cảm ơn Ông 具區句魚 đã cung cấp phiên bản tiếng Ngô của trang web này.",
    acknowledgementsP5:
      "Cảm ơn 以成 (Dĩ Thành) đã cung cấp phiên bản tiếng Việt của trang web này.",
    developContributeTitle: "Phát triển và đóng góp",
    developContributeP1:
      "Nếu bạn muốn tham gia hoặc hỗ trợ Việt bính, bạn có thể:",
    emailText: (
      <>
        Gửi email tới{" "}
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          support@jyutping.org
        </a>{" "}
        để cho chúng tôi biết suy nghĩ của bạn hoặc bất kỳ phản hồi nào.
      </>
    ),
    githubText: (
      <>
        Đóng góp trên{" "}
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          GitHub
        </a>{" "}
        bằng cách mở một issue mới hoặc thực hiện một pull request mới.
      </>
    ),
    keyboardText: (
      <>
        Cài đặt và sử dụng{" "}
        <a
          href="/keyboard" // Keep relative link
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          Bàn phím Việt bính
        </a>{" "}
        để nhập và chia sẻ trang web này với những người khác.
      </>
    ),
    finalParagraph:
      "Nếu bạn biết tiếng Quảng Đông và các ngôn ngữ khác và sẵn sàng dịch trang web này sang các ngôn ngữ khác, vui lòng liên hệ với chúng tôi qua email. Chúng tôi hoan nghênh sự giúp đỡ và đóng góp của bạn.",
  },
  wuu: {
    acknowledgementsTitle: "鳴謝",
    acknowledgementsP1: (
      <>
        本站由
        <a
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          粵語計算語言學基礎建設組
        </a>
        建成，並得到
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          香港語言學學會 (LSHK)
        </a>
        个協助。網站源碼全部開源在
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          GitHub
        </a>
        ，歡迎外界个貢獻。
      </>
    ),
    acknowledgementsP2:
      "感謝 LSHK 粵拼小組搭粵典對本站个支持。特別鳴謝 Chaak-ming Lau 博士，Andy Chin 博士，Kwan-hin Cheung 博士，Raymond Tze 先生搭 Zungman Ceoi 先生爲建設本站提供个幫助。",
    acknowledgementsP3: "感謝 Lim Hiantong 先生提供本站臺灣閩南語版本。",
    acknowledgementsP4: "感謝具區句魚先生提供本站吳語版本。",
    acknowledgementsP5: "感謝以成提供本站越南語版本。",
    developContributeTitle: "開發搭貢獻",
    developContributeP1: "假使儂想支持粵拼或參與我伲个事務，好：",
    emailText: (
      <>
        發郵件到
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          support@jyutping.org
        </a>
        告訴我伲儂个想法或反饋意見。
      </>
    ),
    githubText: (
      <>
        在{" "}
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          GitHub
        </a>{" "}
        上向新開一隻 issue 討論或代碼 pull request。
      </>
    ),
    keyboardText: (
      <>
        安裝搭使用
        <a
          href="/keyboard" // Keep relative link
          className="text-blue-600 hover:underline dark:text-blue-400 mx-1"
        >
          粵拼輸入法
        </a>
        打字，以及分享本網站。
      </>
    ),
    finalParagraph:
      "假使儂會得粵語搭別個語言，外加願意拿本網站翻譯成功別他語言，請一定發郵件畀我伲，我伲交關歡迎儂个幫助搭貢獻。",
  },
};

interface AboutPageProps {
  locale: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ locale }) => {
  const t = translations[locale] || translations.en; // Fallback to English

  return (
    // Added container and dark mode text colors
    <div className="container mx-auto px-4 py-8 text-gray-800 dark:text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
        {" "}
        {/* Increased gap */}
        {/* Acknowledgements Column */}
        <div className="prose dark:prose-invert max-w-none">
          {" "}
          {/* Use prose for better text styling */}
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-600">
            {t.acknowledgementsTitle}
          </h2>
          <p className="mb-4">{t.acknowledgementsP1}</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            {" "}
            {/* Use list for better structure */}
            <li>{t.acknowledgementsP2}</li>
            <li>{t.acknowledgementsP3}</li>
            <li>{t.acknowledgementsP4}</li>
            <li>{t.acknowledgementsP5}</li>
          </ul>
        </div>
        {/* Develop & Contribute Column */}
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2 dark:border-gray-600">
            {t.developContributeTitle}
          </h2>
          <p className="mb-4">{t.developContributeP1}</p>
          <ul className="list-none space-y-3">
            <li className="flex items-start">
              <IconMail className="mr-3 mt-1 flex-shrink-0 h-5 w-5 text-gray-500 dark:text-gray-400" />{" "}
              {/* Adjusted icon style */}
              <span>{t.emailText}</span>
            </li>
            <li className="flex items-start">
              <IconBrandGithub className="mr-3 mt-1 flex-shrink-0 h-5 w-5 text-gray-500 dark:text-gray-400" />{" "}
              {/* Adjusted icon style */}
              <span>{t.githubText}</span>
            </li>
            {/* Conditionally render keyboard link if text exists for the locale */}
            {t.keyboardText && (
              <li className="flex items-start">
                <IconKeyboard className="mr-3 mt-1 flex-shrink-0 h-5 w-5 text-gray-500 dark:text-gray-400" />{" "}
                {/* Adjusted icon style */}
                <span>{t.keyboardText}</span>
              </li>
            )}
          </ul>
          <p className="mt-6 italic text-sm">{t.finalParagraph}</p>{" "}
          {/* Adjusted style */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
