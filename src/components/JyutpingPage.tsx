import Alert from "@/components/Alert.tsx";
import Audio from "@/components/Audio.tsx";
import { headingTranslations, contentTranslations, generateSlug } from "@/i18n/pages/jyutping";

interface JyutpingPageProps {
  locale: string;
}

const tableBaseClass = "border border-collapse border-gray-300 my-4";
const thClass = "border border-gray-300 p-2 bg-gray-100";
const tdClass = "border border-gray-300 p-2";
const tdHighlightClass = "border border-gray-300 p-1 bg-yellow-100";
const tdMutedClass = "border border-gray-300 p-1 bg-gray-200";

const JyutpingPage: React.FC<JyutpingPageProps> = ({ locale }) => {
  const headingsT =
    headingTranslations[locale] || headingTranslations.en; // Falling back to English
  const contentT = contentTranslations[locale] || contentTranslations.en;
  const tEn = headingTranslations.en; // Get English translations for slug generation

  // lang="yue" is added for every <td> below such as to distinguish between Cantonese and Japanese content and ensure that
  // the Chinese font is correctly applied to those cells and the Japanese font is applied to the rest of the Japanese page

  return (
    <>
      <div className="container max-w-4xl mx-auto p-4">
        {contentT.intro && (
          <p className="text-lg mb-6 font-semibold">{contentT.intro}</p>
        )}
        <Alert title={contentT.alertIpaTitle}>{contentT.alertIpaContent}</Alert>
        <h2
          id={generateSlug(tEn.onsetHeading)}
          className="text-3xl font-semibold mt-8 mb-4 scroll-mt-20"
        >
          {headingsT.onsetHeading}
        </h2>
        <div className="overflow-x-auto">
          <table className={tableBaseClass}>
            <thead>
              <tr>
                <th className={thClass} />
                {contentT.onsetTableHeaders.map((header) => (
                  <th key={header} className={thClass}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={thClass} scope="row">{contentT.onsetRowHeaders[0]}</th>
                <td className={tdClass} lang="yue">
                  b [p] 巴 <Audio id="baa1" />
                  <br />p [pʰ] 怕 <Audio id="paa3" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  d [t] 打 <Audio id="daa2" />
                  <br />t [tʰ] 他 <Audio id="taa1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  g [k] 家 <Audio id="gaa1" />
                  <br />k [kʰ] 卡 <Audio id="kaa1" />
                  <br />
                  gw [kʷ] 瓜 <Audio id="gwaa1" />
                  <br />
                  kw [kʷʰ] 夸 <Audio id="kwaa1" />
                </td>
                <td className={tdClass} lang="yue" />
              </tr>
              {/* Yue/Cmn/Nan/Wuu have Affricate row here, En/Vi have Nasal */}
              {["yue", "cmn", "nan", "wuu"].includes(locale) ? (
                <tr>
                  <th className={thClass} scope="row">{contentT.onsetRowHeaders[1]}</th>
                  {/* Affricate */}
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue">
                    z [t͡s~t͡ʃ] 渣 <Audio id="zaa1" />
                    <br />c [t͡sʰ~t͡ʃʰ] 叉 <Audio id="caa1" />
                  </td>
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue" />
                </tr>
              ) : (
                <tr>
                  <th className={thClass} scope="row">{contentT.onsetRowHeaders[1]}</th>
                  {/* Nasal */}
                  <td className={tdClass} lang="yue">
                    m [m] 媽 <Audio id="maa1" />
                  </td>
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue">
                    n [n] 那 <Audio id="naa5" />
                  </td>
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue">
                    ng [ŋ] 牙 <Audio id="ngaa4" />
                  </td>
                  <td className={tdClass} lang="yue" />
                </tr>
              )}
              {/* Yue/Cmn/Nan/Wuu have Nasal row here, En/Vi have Affricate */}
              {["yue", "cmn", "nan", "wuu"].includes(locale) ? (
                <tr>
                  <th className={thClass} scope="row">{contentT.onsetRowHeaders[2]}</th>
                  {/* Nasal */}
                  <td className={tdClass} lang="yue">
                    m [m] 媽 <Audio id="maa1" />
                  </td>
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue">
                    n [n] 那 <Audio id="naa5" />
                  </td>
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue">
                    ng [ŋ] 牙 <Audio id="ngaa4" />
                  </td>
                  <td className={tdClass} lang="yue" />
                </tr>
              ) : (
                <tr>
                  <th className={thClass} scope="row">{contentT.onsetRowHeaders[2]}</th>
                  {/* Affricate */}
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue">
                    z [t͡s~t͡ʃ] 渣 <Audio id="zaa1" />
                    <br />c [t͡sʰ~t͡ʃʰ] 叉 <Audio id="caa1" />
                  </td>
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue" />
                  <td className={tdClass} lang="yue" />
                </tr>
              )}
              <tr>
                <th className={thClass} scope="row">{contentT.onsetRowHeaders[3]}</th>
                {/* Fricative */}
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  f [f] 花 <Audio id="faa1" />
                </td>
                <td className={tdClass} lang="yue">
                  s [s] 沙 <Audio id="saa1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  h [h] 蝦 <Audio id="haa1" />
                </td>
              </tr>
              <tr>
                <th className={thClass} scope="row">{contentT.onsetRowHeaders[4]}</th>
                {/* Approximant */}
                <td className={tdClass} lang="yue">
                  w [w] 蛙 <Audio id="waa1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  j [j] 也 <Audio id="jaa5" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
              </tr>
              <tr>
                <th className={thClass} scope="row">{contentT.onsetRowHeaders[5]}</th>
                {/* Lateral Approximant */}
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  l [l] 啦 <Audio id="laa1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
              </tr>
            </tbody>
          </table>
        </div>
        <Alert>{contentT.alertNullInitial}</Alert>
        <h2
          id={generateSlug(tEn.syllabicNasalHeading)}
          className="text-3xl font-semibold mt-8 mb-4 scroll-mt-20"
        >
          {headingsT.syllabicNasalHeading}
        </h2>
        <div className="overflow-x-auto">
          <table className={tableBaseClass}>
            <tbody>
              <tr>
                <td className={tdClass} lang="yue">
                  m [m̩] 唔 <Audio id="m4" />
                </td>
                <td className={tdClass} lang="yue">
                  ng [ŋ̩] 吳 <Audio id="ng4" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2
          id={generateSlug(tEn.finalHeading)}
          className="text-3xl font-semibold mt-8 mb-4 scroll-mt-20"
        >
          {headingsT.finalHeading}
        </h2>
        <h3
          id={generateSlug(tEn.nucleiHeading)}
          className="text-2xl font-semibold mt-6 mb-3 scroll-mt-20"
        >
          {headingsT.nucleiHeading}
        </h3>
        {/* Nuclei Table */}
        <div className="overflow-x-auto">
          <table className={tableBaseClass}>
            <tbody>
              <tr>
                <td className={tdClass} lang="yue">
                  i [iː] 詩 <Audio id="si1" />
                  <br />i<sub>後接 -ng, -k</sub> [e] 星 <Audio id="sing1" /> 識
                  <Audio id="sik1" />
                  <br />
                  yu [y] 書 <Audio id="syu1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  u [uː] 夫 <Audio id="fu1" />
                  <br />u<sub>後接 -ng, -k</sub> [o] 風 <Audio id="fung1" /> 福
                  <Audio id="fuk1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass} lang="yue">
                  e<sub>後接 -i</sub> [e] 四 <Audio id="sei3" />
                  <br />
                  eo [ɵ] 詢 <Audio id="seon1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  o<sub>後接 -u</sub> [o] 蘇 <Audio id="sou1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass} lang="yue">
                  e [ɛː] 些 <Audio id="se1" />
                  <br />
                  oe [œː] 鋸 <Audio id="goe3" />
                </td>
                <td className={tdClass} lang="yue">
                  a [ɐ] 新 <Audio id="san1" />
                </td>
                <td className={tdClass} lang="yue">
                  o [ɔː] 疏 <Audio id="so1" />
                </td>
              </tr>
              <tr>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  aa [aː] 沙 <Audio id="saa1" />
                </td>
                <td className={tdClass} lang="yue" />
              </tr>
            </tbody>
          </table>
        </div>
        <h3
          id={generateSlug(tEn.codaHeading)}
          className="text-2xl font-semibold mt-6 mb-3 scroll-mt-20"
        >
          {headingsT.codaHeading}
        </h3>
        {/* Coda Table */}
        <div className="overflow-x-auto">
          <table className={tableBaseClass}>
            <tbody>
              <tr>
                <th className={thClass} scope="row">{contentT.codaRowHeaders[0]}</th>
                <td className={tdClass} lang="yue">
                  p [p̚] 溼 <Audio id="sap1" />
                </td>
                <td className={tdClass} lang="yue">
                  t [t̚] 失 <Audio id="sat1" />
                </td>
                <td className={tdClass} lang="yue">
                  k [k̚] 塞 <Audio id="sak1" />
                </td>
              </tr>
              <tr>
                <th className={thClass} scope="row">{contentT.codaRowHeaders[1]}</th>
                <td className={tdClass} lang="yue">
                  m [m] 心 <Audio id="sam1" />
                </td>
                <td className={tdClass} lang="yue">
                  n [n] 身 <Audio id="san1" />
                </td>
                <td className={tdClass} lang="yue">
                  ng [ŋ] 生 <Audio id="sang1" />
                </td>
              </tr>
              <tr>
                <th className={thClass} scope="row">{contentT.codaRowHeaders[2]}</th>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  i [i] 西 <Audio id="sai1" /> 需 <Audio id="seoi1" />
                </td>
                <td className={tdClass} lang="yue">
                  u [u] 收 <Audio id="sau1" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3
          id={generateSlug(tEn.finalsChartHeading)}
          className="text-2xl font-semibold mt-6 mb-3 scroll-mt-20"
        >
          {headingsT.finalsChartHeading}
        </h3>
        <div className="overflow-x-auto">
          <table className={`${tableBaseClass} text-xs sm:text-sm [&_td]:!p-1`}>
            <thead>
              <tr>
                <th className={thClass} colSpan={2} rowSpan={2}>
                  {contentT.finalsChartRowHeader}
                </th>
                <th className={thClass}>
                  {contentT.finalsChartColHeaders1[0]}
                </th>
                <th className={thClass} colSpan={2}>
                  {contentT.finalsChartColHeaders1[1]}
                </th>
                <th className={thClass} colSpan={3}>
                  {contentT.finalsChartColHeaders1[2]}
                </th>
                <th className={thClass} colSpan={3}>
                  {contentT.finalsChartColHeaders1[3]}
                </th>
              </tr>
              <tr>
                {contentT.finalsChartColHeaders2.map((header) => (
                  <th key={header} className={thClass}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={thClass} rowSpan={2} scope="row">
                  i
                </th>
                <th className={thClass} scope="row">[iː]</th>
                <td className={tdClass} lang="yue">
                  i 思 <Audio id="si1" />
                </td>
                <td className={tdMutedClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  iu 消 <Audio id="siu1" />
                </td>
                <td className={tdClass} lang="yue">
                  im 閃 <Audio id="sim2" />
                </td>
                <td className={tdClass} lang="yue">
                  in 先 <Audio id="sin1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  ip 攝 <Audio id="sip3" />
                </td>
                <td className={tdClass} lang="yue">
                  it 泄 <Audio id="sit3" />
                </td>
                <td className={tdClass} lang="yue" />
              </tr>
              <tr>
                <th className={thClass} scope="row">[e]</th>
                <td className={tdClass} lang="yue" />
                <td className={tdMutedClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  ing 升 <Audio id="sing1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  ik 識 <Audio id="sik1" />
                </td>
              </tr>
              <tr>
                <th className={thClass} scope="row">yu</th>
                <th className={thClass} scope="row">[yː]</th>
                <td className={tdClass} lang="yue">
                  yu 書 <Audio id="syu1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  yun 孫 <Audio id="syun1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  yut 雪 <Audio id="syut3" />
                </td>
                <td className={tdClass} lang="yue" />
              </tr>
              <tr>
                <th className={thClass} rowSpan={2} scope="row">
                  u
                </th>
                <th className={thClass} scope="row">[uː]</th>
                <td className={tdClass} lang="yue">
                  u 夫 <Audio id="fu1" />
                </td>
                <td className={tdClass} lang="yue">
                  ui 灰 <Audio id="fui1" />
                </td>
                <td className={tdMutedClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  un 歡 <Audio id="fun1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  ut 闊 <Audio id="fut3" />
                </td>
                <td className={tdClass} lang="yue" />
              </tr>
              <tr>
                <th className={thClass} scope="row">[o]</th>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdMutedClass} lang="yue" />
                <td className={tdClass} lang="yue">um</td>{" "}
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  ung 風 <Audio id="fung1" />
                </td>
                <td className={tdClass} lang="yue">up</td>{" "}
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  uk 福 <Audio id="fuk1" />
                </td>
              </tr>
              <tr>
                <th className={thClass} rowSpan={2} scope="row">
                  e
                </th>
                <th className={thClass} scope="row">[e]</th>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  ei 四 <Audio id="sei3" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">en </td>{" "}
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
              </tr>
              <tr>
                <th className={thClass} scope="row">[ɛː]</th>
                <td className={tdClass} lang="yue">
                  e 些 <Audio id="se1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  eu 掉 <Audio id="deu6" />
                </td>
                <td className={tdClass} lang="yue">
                  em 𦧷 <Audio id="lem2" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  eng 鄭 <Audio id="zeng6" />
                </td>
                <td className={tdClass} lang="yue">
                  ep 夾 <Audio id="gep6" />
                </td>
                <td className={tdClass} lang="yue">
                  et 坺 <Audio id="pet6" />
                </td>
                <td className={tdClass} lang="yue">
                  ek 石 <Audio id="sek6" />
                </td>
              </tr>
              <tr>
                <th className={thClass} scope="row">eo</th>
                <th className={thClass} scope="row">[ɵ]</th>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  eoi 需 <Audio id="seoi1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  eon 詢 <Audio id="seon1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  eot 摔 <Audio id="seot1" />
                </td>
                <td className={tdClass} lang="yue" />
              </tr>
              <tr>
                <th className={thClass} scope="row">oe</th>
                <th className={thClass} scope="row">[œː]</th>
                <td className={tdClass} lang="yue">
                  oe 鋸 <Audio id="goe3" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  oeng 疆 <Audio id="goeng1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdHighlightClass} lang="yue">
                  oet <Audio id="oet6" />
                </td>
                <td className={tdClass} lang="yue">
                  oek 腳 <Audio id="goek3" />
                </td>
              </tr>
              <tr>
                <th className={thClass} rowSpan={2} scope="row">
                  o
                </th>
                <th className={thClass} scope="row">[o]</th>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  ou 好 <Audio id="hou2" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
              </tr>
              <tr>
                <th className={thClass} scope="row">[ɔː]</th>
                <td className={tdClass} lang="yue">
                  o 可 <Audio id="ho2" />
                </td>
                <td className={tdClass} lang="yue">
                  oi 開 <Audio id="hoi1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  on 看 <Audio id="hon3" />
                </td>
                <td className={tdClass} lang="yue">
                  ong 康 <Audio id="hong1" />
                </td>
                <td className={tdClass} lang="yue" />
                <td className={tdClass} lang="yue">
                  ot 喝 <Audio id="hot3" />
                </td>
                <td className={tdClass} lang="yue">
                  ok 學 <Audio id="hok6" />
                </td>
              </tr>
              <tr>
                <th className={thClass} scope="row">a</th>
                <th className={thClass} scope="row">[ɐ]</th>
                <td className={tdHighlightClass} lang="yue">
                  a 嘞 <Audio id="la3" />
                </td>
                <td className={tdClass} lang="yue">
                  ai 擠 <Audio id="zai1" />
                </td>
                <td className={tdClass} lang="yue">
                  au 周 <Audio id="zau1" />
                </td>
                <td className={tdClass} lang="yue">
                  am 斟 <Audio id="zam1" />
                </td>
                <td className={tdClass} lang="yue">
                  an 珍 <Audio id="zan1" />
                </td>
                <td className={tdClass} lang="yue">
                  ang 增 <Audio id="zang1" />
                </td>
                <td className={tdClass} lang="yue">
                  ap 汁 <Audio id="zap1" />
                </td>
                <td className={tdClass} lang="yue">
                  at 侄 <Audio id="zat6" />
                </td>
                <td className={tdClass} lang="yue">
                  ak 則 <Audio id="zak1" />
                </td>
              </tr>
              <tr>
                <th className={thClass} scope="row">aa</th>
                <th className={thClass} scope="row">[aː]</th>
                <td className={tdClass} lang="yue">
                  aa 渣 <Audio id="zaa1" />
                </td>
                <td className={tdClass} lang="yue">
                  aai 齋 <Audio id="zaai1" />
                </td>
                <td className={tdClass} lang="yue">
                  aau 嘲 <Audio id="zaau1" />
                </td>
                <td className={tdClass} lang="yue">
                  aam 站 <Audio id="zaam6" />
                </td>
                <td className={tdClass} lang="yue">
                  aan 讚 <Audio id="zaan3" />
                </td>
                <td className={tdClass} lang="yue">
                  aang 掙 <Audio id="zaang6" />
                </td>
                <td className={tdClass} lang="yue">
                  aap 集 <Audio id="zaap6" />
                </td>
                <td className={tdClass} lang="yue">
                  aat 扎 <Audio id="zaat3" />
                </td>
                <td className={tdClass} lang="yue">
                  aak 責 <Audio id="zaak6" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Alert color="secondary">{contentT.alertAddedFinals}</Alert>
        <h2
          id={generateSlug(tEn.toneHeading)}
          className="text-3xl font-semibold mt-8 mb-4 scroll-mt-20"
        >
          {headingsT.toneHeading}
        </h2>
        <div className="overflow-x-auto [&_th]:px-4">
          <table className={tableBaseClass}>
            <thead>
              <tr>
                <th className={thClass} />
                {contentT.toneTableHeaders.map((header) => (
                  <th key={header} className={thClass}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={thClass} scope="row">{contentT.toneRowHeaders[0]}</th>
                <td className={tdClass} lang="yue">
                  1 [˥] 詩 <Audio id="si1" />
                </td>
                <td className={tdClass} lang="yue">
                  2 [˧˥] 史 <Audio id="si2" />
                </td>
                <td className={tdClass} lang="yue">
                  3 [˧] 試 <Audio id="si3" />
                </td>
                <td className={tdClass} lang="yue">
                  1 [˥] 識 <Audio id="sik1" />
                  <br />3 [˧] 洩 <Audio id="sit3" />
                </td>
              </tr>
              <tr>
                <th className={thClass} scope="row">{contentT.toneRowHeaders[1]}</th>
                <td className={tdClass} lang="yue">
                  4 [˨˩] 時 <Audio id="si4" />
                </td>
                <td className={tdClass} lang="yue">
                  5 [˩˧] 市 <Audio id="si5" />
                </td>
                <td className={tdClass} lang="yue">
                  6 [˨] 事 <Audio id="si6" />
                </td>
                <td className={tdClass} lang="yue">
                  6 [˨] 蝕 <Audio id="sit6" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Alert>{contentT.alertToneMarks}</Alert>
        <h2
          id={headingsT.referenceId}
          className="text-3xl font-semibold mt-8 mb-4 scroll-mt-20"
        >
          {headingsT.referenceHeading}
        </h2>
        <div className="prose max-w-none text-sm space-y-2 mb-8" lang="yue">
          <p>
            Bauer, Robert S., and Paul K. Benedict. 2011.
            <em>Modern cantonese phonology</em>. Vol. 102. Walter de Gruyter
          </p>
          <p>
            Mok, Peggy Pik-Ki, and Peggy, Wai-Yi Wong. 2010. Perception of the
            merging tones in Hong Kong Cantonese: preliminary data on
            monosyllables.
            <em>Speech Prosody 2010-Fifth International Conference</em>.
          </p>
          <p>
            Zee, Eric. 1991. Chinese (Hong Kong Cantonese).
            <em>Journal of the International Phonetic Association</em> 21.1:
            46-48.
          </p>
          <p>
            Stephen, Matthews. 1992.
            <em>Jyutping 粵拼 - Cantonese Romanization Scheme</em>. The
            Linguistic Society of Hong Kong.{" "}
            <a
              href="https://lshk.org/jyutping-scheme/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://lshk.org/jyutping-scheme/
            </a>
          </p>
          <p>
            人文電算硏究中心 2003：“粵語審音配詞字庫”，關子尹
            主持，“兩文三語敎育網上支援計劃”之工作項目之一，二零零三年一月十二日推出，香港優質敎育基金，存取於二零零七年十一月二十日，{" "}
            <a
              href="http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              http://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/
            </a>
            。
          </p>
        </div>
      </div>
    </>
  );
};

export default JyutpingPage;
