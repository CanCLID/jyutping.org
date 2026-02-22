import Audio from "./Audio.tsx";

interface Props {
  honzi: string;
  jyutping: string;
  otherTranscription?: string;
}

const jyutpingRegex = /^([gk]w?|ng|[bpmfdtnlhwzcsj]?)(?![1-6]?$)((aa?|oe?|eo?|y?u|i?)(ng|[iumnptk]?))([1-6]?)$/;

const ExampleCharacterItem: React.FC<Props> = ({ honzi, jyutping, otherTranscription }) => {
  const roms = jyutping.split(" ");
  const trans = (otherTranscription ?? "").split(" ");
  return (
    <li className="whitespace-nowrap">
      {Array.from(honzi, (char, i) => {
        const rom = jyutpingRegex.exec(roms[i])!;
        const annotated = (
          <ruby key={i} className="[ruby-align:center] [ruby-position:over]">
            <ruby lang="yue" className="text-3xl [ruby-align:center] [ruby-position:over]">
              {char}
              <rt lang="yue-Latn-jyutping" className="text-xl font-semibold mx-0.5">
                <span className="text-yellow-600">{rom[1]}</span>{/* onset */}
                <span className="text-cyan-600">{rom[3]}</span>{/* nucleus */}
                <span className="text-slate-500">{rom[4]}</span>{/* coda */}
                <span className="text-orange-600">{rom[5]}</span>{/* tone */}
              </rt>
            </ruby>
            <rt><Audio id={rom[0]} /></rt>
          </ruby>
        );
        return otherTranscription
          ? (
            <ruby key={i} className="[ruby-align:center] [ruby-position:under]">
              {annotated}
              <rt>{trans[i] || "\xa0"}</rt>
            </ruby>
          )
          : annotated;
      })}
    </li>
  );
};

export default ExampleCharacterItem;
