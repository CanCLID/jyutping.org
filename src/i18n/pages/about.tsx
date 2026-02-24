import { makeResource } from "../utils";

type AboutPageTranslation = {
  acknowledgementsTitle: string;
  acknowledgementsP1: React.ReactElement;
  acknowledgementsP2: string;
  acknowledgementsP3: string;
  acknowledgementsP4: string;
  acknowledgementsP5: string;
  acknowledgementsP6: string;
  developContributeTitle: string;
  developContributeP1: string;
  emailText: React.ReactElement;
  githubText: React.ReactElement;
  keyboardText: React.ReactElement;
  finalParagraph: string;
}

export const getTranslations = makeResource<AboutPageTranslation>({
  cmn: {
    acknowledgementsTitle: "鸣谢",
    acknowledgementsP1: (
      <>
        本站由
        <a
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          粤语计算语言学基础建设组
        </a>
        建成，并得到
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          香港语言学学会 (LSHK)
        </a>
        的协助。网站源码全部开源在
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </a>
        ，欢迎外界贡献。
      </>
    ),
    acknowledgementsP2:
      "感谢 LSHK 粤拼小组和粤典对本站的支持。特别鸣谢 Chaak-ming Lau 博士，Kwan-hin Cheung 博士，Andy Chin 博士，Raymond Tze 先生和 Zungman Ceoi 先生为建设本站提供的帮助。",
    acknowledgementsP3: "感谢 Lim Hian-tong 先生提供本站台湾闽南语版本。",
    acknowledgementsP4: "感谢具区句鱼先生提供本站吴语版本。",
    acknowledgementsP5: "感谢以成提供本站越南语版本。",
    acknowledgementsP6: "感谢 Choco Chu 及 graphemecluster 提供本站日语版本。",
    developContributeTitle: "开发及贡献",
    developContributeP1: "如果你想支持粤拼或参与到我们的事务中，你可以：",
    emailText: (
      <>
        发邮件到
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline mx-1"
        >
          support@jyutping.org
        </a>
        告诉我们你的想法或者反馈意见。
      </>
    ),
    githubText: (
      <>
        在
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </a>
        上面新开一个 issue 讨论或者代码 pull request。
      </>
    ),
    keyboardText: (
      <>
        安装使用
        <a
          href="/keyboard"
          className="text-blue-600 hover:underline mx-1"
        >
          粤拼输入法
        </a>
        打字，以及同人分享本网站。
      </>
    ),
    finalParagraph:
      "如果你熟习粤语和其他语言，并愿意把本网站翻译成其他语言，请务必邮件联系我们，我们非常欢迎你的帮助和贡献。",
  },
  en: {
    acknowledgementsTitle: "Acknowledgements",
    acknowledgementsP1: (
      <>
        This website is developed by{" "}
        <a
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Cantonese Computational Linguistics Infrastructure Development
          Workgroup (CanCLID)
        </a>
        , with the assistance from{" "}
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          The Linguistic Society of Hong Kong (LSHK)
        </a>
        . All codes are open-sourced on{" "}
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
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
    acknowledgementsP6: "Thank Choco Chu and graphemecluster for providing the Japanese version of this site.",
    developContributeTitle: "Develop and Contribute",
    developContributeP1:
      "If you want to get involved or support Jyutping, you can:",
    emailText: (
      <>
        Email to{" "}
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline"
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
          className="text-blue-600 hover:underline"
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
          href="/keyboard"
          className="text-blue-600 hover:underline mx-1"
        >
          Jyutping keyboards
        </a>
        , and share this site with others.
      </>
    ),
    finalParagraph: "Your help and contribution is always appreciated.",
  },
  ja: {
    acknowledgementsTitle: "謝辞",
    acknowledgementsP1: (
      <>
        このウェブサイトは
        <a
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          広東語計算言語学基盤開発グループ (CanCLID)
        </a>
        によって開発され、
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          香港言語学会 (LSHK)
        </a>
        の協力を得ています。すべてのコードは
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </a>
        でオープンソースとして公開されており、貢献を歓迎しています。
      </>
    ),
    acknowledgementsP2:
      "LSHK 粤拼ワーキンググループと粤典のご支援に感謝いたします。特に Chaak-ming Lau 博士、Andy Chin 博士、Kwan-hin Cheung 博士、Raymond Tze 氏、Zungman Ceoi 氏のご協力に感謝いたします。",
    acknowledgementsP3:
      "Lim Hian-tong 氏には台湾閩南語版のご提供に感謝いたします。",
    acknowledgementsP4: "具區句魚氏には呉語版のご提供に感謝いたします。",
    acknowledgementsP5: "以成氏にはベトナム語版のご提供に感謝いたします。",
    acknowledgementsP6: "Choco Chu 氏とぐらふぃーむ氏には日本語版のご提供に感謝いたします。",
    developContributeTitle: "開発と貢献",
    developContributeP1:
      "粤拼の利用促進や私たちの取り組みへご協力いただける場合は、ぜひ以下をご検討ください：",
    emailText: (
      <>
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline"
        >
          support@jyutping.org
        </a>{" "}
        にメールを送って、ご意見やフィードバックをお聞かせください。
      </>
    ),
    githubText: (
      <>
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>{" "}
        で新しい issue を作成するか、プルリクエストを送信してください。
      </>
    ),
    keyboardText: (
      <>
        <a href="/keyboard" className="text-blue-600 hover:underline mr-1">
          粤拼キーボード
        </a>
        をインストールして使用し、このサイトを他の人と共有してください。
      </>
    ),
    finalParagraph:
      "広東語を理解でき、このウェブサイトを他の言語に翻訳していただける方は、ぜひメールでご連絡ください。皆様のご協力と貢献を心よりお待ちしております。",
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
          className="text-blue-600 hover:underline mx-1"
        >
          粵語計算語言學基礎建設組
        </a>
        建成，並得到
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          香港語言學學會 (LSHK)
        </a>
        的協助。網站源碼全部開源佇
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
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
    acknowledgementsP6: "感謝 Choco Chu 佮 graphemecluster 提供本站日語版本。",
    developContributeTitle: "開發佮貢獻",
    developContributeP1: "你若想欲支持粵拼抑是參與阮的事務，你會當：",
    emailText: (
      <>
        寄批
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline mx-1"
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
          className="text-blue-600 hover:underline mx-1"
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
          href="/keyboard"
          className="text-blue-600 hover:underline mx-1"
        >
          粵拼輸入法
        </a>
        打字，以及分享本站。
      </>
    ),
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
          className="text-blue-600 hover:underline mx-1"
        >
          Tổ phát triển cơ sở hạ tầng ngôn ngữ học tính toán tiếng Quảng Đông
          (CanCLID)
        </a>
        , với sự hỗ trợ của{" "}
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          Hội học Ngôn ngữ học Hồng Kông (LSHK)
        </a>
        . Tất cả các mã đều có nguồn mở trên{" "}
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
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
    acknowledgementsP6:
      "Cảm ơn Choco Chu và graphemecluster đã cung cấp phiên bản tiếng Nhật của trang web này.",
    developContributeTitle: "Phát triển và đóng góp",
    developContributeP1:
      "Nếu bạn muốn tham gia hoặc hỗ trợ Việt bính, bạn có thể:",
    emailText: (
      <>
        Gửi email tới{" "}
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline"
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
          className="text-blue-600 hover:underline"
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
          href="/keyboard"
          className="text-blue-600 hover:underline mx-1"
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
          className="text-blue-600 hover:underline mx-1"
        >
          粵語計算語言學基礎建設組
        </a>
        建成，並得到
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          香港語言學學會 (LSHK)
        </a>
        个協助。網站源碼全部開源在
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
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
    acknowledgementsP6: "感謝 Choco Chu 搭 graphemecluster 提供本站日語版本。",
    developContributeTitle: "開發搭貢獻",
    developContributeP1: "假使儂想支持粵拼或參與我伲个事務，好：",
    emailText: (
      <>
        發郵件到
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline mx-1"
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
          className="text-blue-600 hover:underline mx-1"
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
          href="/keyboard"
          className="text-blue-600 hover:underline mx-1"
        >
          粵拼輸入法
        </a>
        打字，以及分享本網站。
      </>
    ),
    finalParagraph:
      "假使儂會得粵語搭別個語言，外加願意拿本網站翻譯成功別他語言，請一定發郵件畀我伲，我伲交關歡迎儂个幫助搭貢獻。",
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
          className="text-blue-600 hover:underline mx-1"
        >
          粵語計算語言學基礎建設組
        </a>
        建成，並得到
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          香港語言學學會 (LSHK)
        </a>
        嘅協助。網站原始碼全部開源喺
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
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
    acknowledgementsP6: "感謝 Choco Chu 同 graphemecluster 提供本站日語版本。",
    developContributeTitle: "開發同貢獻",
    developContributeP1: "若果閣下想支持粵拼或者參與我哋嘅事務，你可以：",
    emailText: (
      <>
        傳送電郵至{" "}
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline"
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
          className="text-blue-600 hover:underline"
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
          href="/keyboard"
          className="text-blue-600 hover:underline mx-1"
        >
          粵拼輸入法
        </a>
        嚟打字，以及同人分享本網站。
      </>
    ),
    finalParagraph:
      "若果閣下識得粵語，並且願意將本網站翻譯成其他語言，請務必以電郵聯絡我哋，我哋非常歡迎你嘅幫助同貢獻。",
  },
  yue_hans: {
    acknowledgementsTitle: "鸣谢",
    acknowledgementsP1: (
      <>
        本站由
        <a
          href="https://github.com/orgs/CanCLID"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          粤语计算语言学基础建设组
        </a>
        建成，并得到
        <a
          href="https://www.lshk.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          香港语言学学会 (LSHK)
        </a>
        嘅协助。网站原始码全部开源喺
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mx-1"
        >
          GitHub
        </a>
        ，欢迎外界贡献。
      </>
    ),
    acknowledgementsP2:
      "感谢 LSHK 粤拼小组同粤典对本站嘅支持。特别鸣谢 Chaak-ming Lau 博士、Andy Chin 博士、Kwan-hin Cheung 博士、Raymond Tze 先生同 Zungman Ceoi 先生为建设本站提供嘅帮助。",
    acknowledgementsP3: "感谢 Lim Hian-tong 先生提供本站台湾闽南语版本。",
    acknowledgementsP4: "感谢具区句鱼先生提供本站吴语版本。",
    acknowledgementsP5: "感谢以成提供本站越南语版本。",
    acknowledgementsP6: "感谢 Choco Chu 同 graphemecluster 提供本站日语版本。",
    developContributeTitle: "开发同贡献",
    developContributeP1: "若果阁下想支持粤拼或者参与我哋嘅事务，你可以：",
    emailText: (
      <>
        传送电邮至{" "}
        <a
          href="mailto:support@jyutping.org"
          className="text-blue-600 hover:underline"
        >
          support@jyutping.org
        </a>{" "}
        话畀我哋知你嘅谂法或者回馈意见。
      </>
    ),
    githubText: (
      <>
        喺{" "}
        <a
          href="https://github.com/CanCLID/jyutping.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>{" "}
        上面新开一个 issue 讨论或者代码 pull request。
      </>
    ),
    keyboardText: (
      <>
        安装同使用
        <a
          href="/keyboard"
          className="text-blue-600 hover:underline mx-1"
        >
          粤拼输入法
        </a>
        嚟打字，以及同人分享本网站。
      </>
    ),
    finalParagraph:
      "若果阁下识得粤语，并且愿意将本网站翻译成其他语言，请务必以电邮联络我哋，我哋非常欢迎你嘅帮助同贡献。",
  },
});
