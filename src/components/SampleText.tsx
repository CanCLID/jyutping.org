import type React from "react";
import Audio from "./Audio.tsx"; // Import the existing Audio component

// Original sample texts (copied)
const bakfung =
  "有jau5 一jat1 次ci3 ， \
  北bak1 風fung1 同tung4 太taai3 陽joeng4 喺hai2 度dou6 拗aau3 緊gan2 邊bin1 個go3 叻lek1 啲di1 。 \
  佢keoi5 哋dei6 啱ngaam1 啱ngaam1 睇tai2 到dou2 有jau5 個go3 人jan4 行haang4 過gwo3 ，\
  呢nei1 個go3 人jan4 着zoek3 住zyu6 件gin6 大daai6 褸lau1 。\
  佢keoi5 哋dei6 就zau6 話waa6 嘞laak3 ，\
  邊bin1 個go3 可ho2 以ji5 整zing2 到dou3 呢nei1 個go3 人jan4 除ceoi4 咗zo2 件gin6 褸lau1 呢ne1 ，\
  就zau6 算syun3 邊bin1 個go3 叻lek1 啲di1 嘞laak3 。\
  於jyu1 是si6 ，\
  北bak1 風fung1 就zau6 搏bok3 命meng6 噉gam2 吹ceoi1 。\
  點dim2 知zi1 ，\
  佢keoi5 越jyut6 吹ceoi1 得dak1 犀sai1 利lei6 ，\
  嗰go2 個go3 人jan4 就zau6 越jyut6 係hai6 揦laa2 實sat6 件gin6 褸lau1 。\
  最zeoi3 後hau6 ，\
  北bak1 風fung1 冇mou5 晒saai3 符fu4 ，\
  唯wai4 有jau5 放fong3 棄hei3 。\
  跟gan1 住zyu6 ， \
  太taai3 陽joeng4 出ceot1 嚟lai4 曬saai3 咗zo2 一jat1 陣zan6 ，\
  嗰go2 個go3 人jan4 就zau6 即zik1 刻hak1 除ceoi4 咗zo2 件gin6 褸lau1 嘞laak3 。\
  於jyu1 是si6 ，\
  北bak1 風fung1 唯wai4 有jau5 認jing6 輸syu1 啦laa1 。";

const maanboujansanglou =
  "在zoi6 你nei5 身san1 邊bin1 ，\
  路lou6 雖seoi1 遠jyun5 未mei6 疲pei4 倦gyun6 ，\
  伴bun6 你nei5 漫maan6 行hang4 一jat1 段dyun6 接zip3 一jat1 段dyun6 ，\
  越jyut6 過gwo3 高gou1 峰fung1 另ling6 一jat1 峰fung1 卻koek3 又jau6 見gin3 ，\
  目muk6 標biu1 推teoi1 遠jyun5 讓joeng6 理lei5 想soeng2 永wing5 遠jyun5 在zoi6 前cin4 面min6 ，\
  路lou6 縱zung3 崎kei1 嶇keoi1 亦jik6 不bat1 怕paa3 受sau6 磨mo4 練lin6 ，\
  願jyun6 一jat1 生sang1 中zung1 苦fu2 痛tung3 快faai3 樂lok6 也jaa5 體tai2 驗jim6 ，\
  愉jyu4 快faai3 悲bei1 哀oi1 在zoi6 身san1 邊bin1 轉zyun3 又jau6 轉zyun3 ，\
  風fung1 中zung1 賞soeng2 雪syut3 霧mou6 裏leoi5 賞soeng2 花faa1 快faai3 樂lok6 迴wui4 旋syun4 ，\
  毋mou4 用jung6 計gai3 較gaau3 快faai3 欣jan1 賞soeng2 身san1 邊bin1 美mei5 麗lai6 每mui5 一jat1 天tin1 ，\
  還waan4 願jyun6 確kok3 信seon3 美mei5 景ging2 良loeng4 辰san4 在zoi6 腳goek3 邊bin1 ，\
  願jyun6 將zoeng1 歡fun1 笑siu3 聲seng1 蓋koi3 掩jim2 苦fu2 痛tung3 那naa5 一jat1 面min6 ，\
  悲bei1 也jaa5 好hou2 ，\
  喜hei2 也jaa5 好hou2 ，\
  每mui5 天tin1 找zaau2 到dou2 新san1 發faat3 現jin6 ，\
  讓joeng6 疾zat6 風fung1 吹ceoi1 啊aa3 吹ceoi1 ，\
  儘zeon6 管gun2 給kap1 我ngo5 倆loeng5 考haau2 驗jim6 ，\
  小siu2 雨jyu5 點dim2 ，\
  放fong3 心sam1 灑saa2 ，\
  早zou2 已ji5 決kyut3 心sam1 向hoeng3 着zoek6 前cin4 ，\
  路lou6 縱zung3 崎kei1 嶇keoi1 亦jik6 不bat1 怕paa3 受sau6 磨mo4 練lin6 ，\
  願jyun6 一jat1 生sang1 中zung1 苦fu2 痛tung3 快faai3 樂lok6 也jaa5 體tai2 驗jim6 ，\
  愉jyu4 快faai3 悲bei1 哀oi1 在zoi6 身san1 邊bin1 轉zyun3 又jau6 轉zyun3 ，\
  風fung1 中zung1 賞soeng2 雪syut3 霧mou6 裏leoi5 賞soeng2 花faa1 快faai3 樂lok6 迴wui4 旋syun4 ，\
  毋mou4 用jung6 計gai3 較gaau3 快faai3 欣jan1 賞soeng2 身san1 邊bin1 美mei5 麗lai6 每mui5 一jat1 天tin1 ，\
  還waan4 願jyun6 確kok3 信seon3 美mei5 景ging2 良loeng4 辰san4 在zoi6 腳goek3 邊bin1 ，\
  願jyun6 將zoeng1 歡fun1 笑siu3 聲seng1 蓋koi3 掩jim2 苦fu2 痛tung3 那naa5 一jat1 面min6 ，\
  悲bei1 也jaa5 好hou2 ，\
  喜hei2 也jaa5 好hou2 ，\
  每mui5 天tin1 找zaau2 到dou2 新san1 發faat3 現jin6 ，\
  讓joeng6 疾zat6 風fung1 吹ceoi1 啊aa3 吹ceoi1 ，\
  儘zeon6 管gun2 給kap1 我ngo5 倆loeng5 考haau2 驗jim6 ，\
  小siu2 雨jyu5 點dim2 ，\
  放fong3 心sam1 灑saa2 ，\
  早zou2 已ji5 決kyut3 心sam1 向hoeng3 着zoek6 前cin4";

const coisandou =
  "財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  心sam1  得dak1  好hou2  報bou3 ，\
  財coi4  神san4  話waa6  財coi4  神san4  話waa6  搵wan2  錢cin2  依ji1  正zing3  路lou6 ，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  走zau2  快faai3  兩loeng5  步bou6 ，\
  得dak1  到dou2  佢keoi5  睇tai2  起hei2  你nei5  你nei5  有jau5  前cin4  途tou4 ，\
  闔hap6  府fu2  慶hing3  新san1  歲seoi3  喜hei2  氣hei3  盈jing4  盈jing4 ，\
  齊cai4  賀ho6  你nei5  多do1  福fuk1  蔭jam1  壯zong3  健gin6  強koeng4  勁ging6 ，\
  又jau6  祝zuk1  你nei5  今gam1  年nin4  慶hing3  獲wok6  榮wing4  昇sing1 ，\
  朝ziu1  晚maan5  多do1  多do1  歡fun1  笑siu3  錦gam2  繡sau3  前cin4  程cing4 ，\
  願jyun6  夫fu1  婦fu5  恩jan1  愛oi3  體tai2  貼tip3  入jap6  微mei4 ，\
  成sing4  日jat6  有jau5  吉gat1  星sing1  照ziu3  百baak3  事si6  無mou4  忌gei6 ，\
  共gung6  親can1  友jau5  相soeng1  見gin3  說syut3  話waa6  投tau4  機gei1 ，\
  充cung1  滿mun5  新san1  春ceon1  喜hei2  氣hei3  歡fun1  暢coeng3  揚joeng4  眉mei4 ，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  心sam1  得dak1  好hou2  報bou3 ，\
  財coi4  神san4  話waa6  財coi4  神san4  話waa6  搵wan2  錢cin2  依ji1  正zing3  路lou6 ，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  走zau2  快faai3  兩loeng5  步bou6 ，\
  得dak1  到dou2  佢keoi5  睇tai2  起hei2  你nei5  你nei5  有jau5  前cin4  途tou4 ，\
  啦 ……，\
  啦 ……，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  走zau2  快faai3  兩loeng5  步bou6 ，\
  得dak1  到dou2  佢keoi5  睇tai2  起hei2  你nei5  你nei5  有jau5  前cin4  途tou4 ，\
  賀ho6  所so2  有jau5  鴛jin1  侶leoi5  花faa1  結git3  並bing6  頭tau4  （ 結git3  並bing6  頭tau4  ），\
  還waan4  望mong6  各gok3  位wai2  工gung1  友jau5  百baak3  業jip6  成sing4  就zau6  （ 有jau5  成sing4  就zau6  ），\
  大daai6  家gaa1  冇mou5  爭zang1  鬥dau3  快faai3  樂lok6  無mou4  憂jau1  （ 樂lok6  無mou4  憂jau1  ），\
  聽teng1  隻zek3  歌go1  輕hing1  鬆sung1  下haa5  拋paau1  卻koek3  恨han6  愁sau4 ，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  心sam1  得dak1  好hou2  報bou3 ，\
  財coi4  神san4  話waa6  財coi4  神san4  話waa6  搵wan2  錢cin2  依ji1  正zing3  路lou6 ，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  走zau2  快faai3  兩loeng5  步bou6 ，\
  得dak1  到dou2  佢keoi5  睇tai2  起hei2  你nei5  你nei5  有jau5  前cin4  途tou4 ，\
  啦 ……，\
  啦 ……，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  走zau2  快faai3  兩loeng5  步bou6 ，\
  得dak1  到dou2  佢keoi5  睇tai2  起hei2  你nei5  你nei5  有jau5  前cin4  途tou4 ，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  心sam1  得dak1  好hou2  報bou3 ，\
  財coi4  神san4  話waa6  財coi4  神san4  話waa6  搵wan2  錢cin2  依ji1  正zing3  路lou6 ，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  走zau2  快faai3  兩loeng5  步bou6 ，\
  得dak1  到dou2  佢keoi5  睇tai2  起hei2  你nei5  你nei5  有jau5  前cin4  途tou4 ，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  心sam1  得dak1  好hou2  報bou3 ，\
  財coi4  神san4  話waa6  財coi4  神san4  話waa6  搵wan2  錢cin2  依ji1  正zing3  路lou6 ，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  走zau2  快faai3  兩loeng5  步bou6 ，\
  得dak1  到dou2  佢keoi5  睇tai2  起hei2  你nei5  你nei5  有jau5  前cin4  途tou4 ，\
  啦 ……，\
  啦 ……，\
  財coi4  神san4  到dou3  財coi4  神san4  到dou3  好hou2  走zau2  快faai3  兩loeng5  步bou6 ，\
  得dak1  到dou2  佢keoi5  睇tai2  起hei2  你nei5  你nei5  有jau5  前cin4  途tou4 ，\
  大daai6  眾zung3  慶hing3  新san1  春ceon1  望mong6  財coi4  神san4  到dou3";

const fusisaanhaa =
  "攔laan4  路lou6  雨jyu5  偏pin1  似ci5  雪syut3  花faa1 ，\
  飲jam2  泣jap1  的dik1  你nei5  凍dung3  嗎maa1 ，\
  這ze5  風fung1  褸lau1  我ngo5  給kap1  你nei5  磨mo4  到dou3  有jau5  襟kam1  花faa1 ，\
  連lin4  調diu6  了liu5  職zik1  也jaa5  不bat1  怕paa3 ，\
  怎zam2  麼mo1  始ci2  終zung1  牽hin1  掛gwaa3 ，\
  苦fu2  心sam1  選syun2  中zung3  今gam1  天tin1  想soeng2  車ce1  你nei5  回wui4  家gaa1 ，\
  原jyun4  諒loeng6  我ngo5  不bat1  再zoi3  送sung3  花faa1 ，\
  傷soeng1  口hau2  應jing1  要jiu3  結git3  疤baa1 ，\
  花faa1  瓣faan2  鋪pou1  滿mun5  心sam1  裡leoi5  墳fan4  場coeng4  才coi4  害hoi6  怕paa3 ，\
  如jyu4  若joek6  你nei5  非fei1  我ngo5  不bat1  嫁gaa3 ，\
  彼bei2  此ci2  終zung1  必bit1  火fo2  化faa3 ，\
  一jat1  生sang1  一jat1  世sai3  等dang2  一jat1  天tin1  需seoi1  要jiu3  代doi6  價gaa3 ，\
  誰seoi4  都dou1  只zi2  得dak1  那naa5  雙soeng1  手sau2 ，\
  靠kaau3  擁jung2  抱pou5  亦jik6  難naan4  任jam6  你nei5  擁jung2  有jau5 ，\
  要jiu3  擁jung2  有jau5  必bit1  先sin1  懂dung2  失sat1  去heoi3  怎zam2  接zip3  受sau6 ，\
  曾cang4  沿jyun4  著zoek3  雪syut3  路lou6  浪long6  遊jau4 ，\
  為wai4  何ho4  為wai6  好hou2  事si6  淚leoi6  流lau4 ，\
  誰seoi4  能nang4  憑pang4  愛oi3  意ji3  要jiu3  富fu3  士si6  山saan1  私si1  有jau5 ，\
  何ho4  不bat1  把baa2  悲bei1  哀oi1  感gam2  覺gok3 ，\
  假gaa2  設cit3  是si6  來loi4  自zi6  你nei5  虛heoi1  構kau3 ，\
  試si3  管gun2  裡leoi5  找zaau2  不bat1  到dou3  它taa1  染jim5  污wu1  眼ngaan5  眸mau4 ，\
  前cin4  塵can4  硬ngaang6  化faa6  像zoeng6  石sek6  頭tau4 ，\
  隨ceoi4  緣jyun4  地dei6  拋paau1  下haa6  便bin6  逃tou4  走zau2 ，\
  我ngo5  絕zyut6  不bat1  罕hon2  有jau5 ，\
  往wong5  街gaai1  裡leoi5  繞jiu2  過gwo3  一jat1  周zau1 ，\
  我ngo5  便bin6  化faa6  烏wu1  有jau5 ，\
  情cing4  人jan4  節zit3  不bat1  要jiu3  說syut3  穿cyun1 ，\
  只zi2  敢gam2  撫fu2  你nei5  髮faat3  端dyun1 ，\
  這ze5  種zung2  姿zi1  態taai3  可ho2  會wui5  令ling6  你nei5  更gang3  心sam1  酸syun1 ，\
  留lau4  在zoi6  汽hei3  車ce1  裡leoi5  取ceoi2  暖nyun5 ，\
  應jing1  該goi1  怎zam2  麼mo1  規kwai1  勸hyun3 ，\
  怎zam2  麼mo1  可ho2  以ji5  將zoeng1  手sau2  腕wun2  忍jan2  痛tung3  劃waak6  損syun2 ，\
  人jan4  活wut6  到dou3  幾gei2  歲seoi3  算syun3  短dyun2 ，\
  失sat1  戀lyun2  只zi2  有jau5  更gang3  短dyun2 ，\
  歸gwai1  家gaa1  需seoi1  要jiu3  幾gei2  里lei5  路lou6  誰seoi4  能nang4  預jyu6  算syun3 ，\
  忘mong4  掉diu6  我ngo5  跟gan1  你nei5  恩jan1  怨jyun3 ，\
  櫻jing1  花faa1  開hoi1  了liu5  幾gei2  轉zyun3 ，\
  東dung1  京ging1  之zi1  旅leoi5  一jat1  早zou2  比bei2  一jat1  世sai3  遙jiu4  遠jyun5 ，\
  你nei5  還waan4  嫌jim4  不bat1  夠gau3 ，\
  我ngo5  把baa2  這ze5  陳can4  年nin4  風fung1  褸lau1 ，\
  送sung3  贈zang6  你nei5  解gaai2  咒zau3";

// Function to parse the text into character/jyutping pairs
const parseText = (
  text: string
): { char: string; jyutping: string | null }[] => {
  const result: { char: string; jyutping: string | null }[] = [];
  const pairs = text.split(/\s+/).filter(Boolean); // Split by one or more spaces and remove empty strings

  for (const pair of pairs) {
    // Handle cases like '字jyutping' or just '字' or 'punctuation'
    let char = pair;
    let jyutping: string | null = null;

    // Check if the last part looks like Jyutping (letters followed by a digit)
    const match = pair.match(/^(.+?)([a-z]+\d)$/);
    if (match) {
      // Check if the first part is a single character (common case)
      if (match[1].length === 1) {
        char = match[1];
        jyutping = match[2];
      } else {
        // If the first part is multiple characters, treat the whole thing as a single unit without jyutping for now
        // This might need refinement depending on expected input variations
        char = pair;
        jyutping = null;
      }
    } else {
      // No valid jyutping found at the end, treat the whole pair as the character
      char = pair;
      jyutping = null;
    }

    result.push({ char, jyutping });
  }

  return result;
};

// Define props for the component
interface SampleTextProps {
  sample?: "bakfung" | "maanboujansanglou" | "coisandou" | "fusisaanhaa"; // Use specific sample names
}

const SampleText: React.FC<SampleTextProps> = ({
  sample = "bakfung", // Default to bakfung
}) => {
  let inputText = bakfung; // Default text

  // Select text based on prop
  if (sample === "maanboujansanglou") {
    inputText = maanboujansanglou;
  } else if (sample === "coisandou") {
    inputText = coisandou;
  } else if (sample === "fusisaanhaa") {
    inputText = fusisaanhaa;
  }

  const parsedItems = parseText(inputText);

  // Removed dynamic audio tag generation - relies on Chartaudio.astro in parent

  return (
    <div className="my-6 p-4 border border-neutral-800 rounded-md">
      {/* Display text with audio buttons */}
      <div className="flex flex-wrap items-end leading-loose">
        {parsedItems.map((item, index) => (
          <div
            // Use a more robust key if possible, index is fallback
            key={`${item.char}-${item.jyutping || "no-jp"}-${index}`}
            className="inline-flex flex-col items-center mx-1"
          >
            {/* Audio button above character */}
            {item.jyutping ? (
              <Audio id={item.jyutping} />
            ) : (
              <span className="h-[28px] w-6 inline-block" /> // Placeholder for alignment (adjust height if needed)
            )}
            {/* Character */}
            <span className="text-4xl font-chiron-hei my-1">{item.char}</span>
            {/* Added dark mode text color */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleText;
