import Audio from "./Audio.tsx";
import fusisaanhaa from "../texts/fusisaanhaa.txt?raw";
import bakfung from "../texts/bakfung.txt?raw";
import maanboujansanglou from "../texts/maanboujansanglou.txt?raw";
import coisandou from "../texts/coisandou.txt?raw";

// Break each line into glyphons
const parseText = (text: string): { char: string; jyutping: string | null }[] => {
  const result: { char: string; jyutping: string | null }[] = [];
  // Do not split at fullwidth spaces, which are useful in lyrics
  const glyphons = text.trim().split(/(?:(?!\u3000)\s)+/);

  for (const glyphon of glyphons) {
    let char = glyphon;
    let jyutping: string | null = null;

    // Check if the last part looks like Jyutping (letters followed by a digit)
    // Also handle font variations. 使2si2（2 after 使 means pick another jyutping font） 使sai2
    const match = glyphon.match(/^(.[\d]??)([a-z]+\d)$/);
    if (match) {
      [, char, jyutping] = match;
    }

    result.push({ char, jyutping });
  }

  return result;
};

const isSafari =
  typeof navigator !== "undefined" &&
  /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);

const samples = {
  bakfung,
  maanboujansanglou,
  coisandou,
  fusisaanhaa,
};

interface SampleTextProps {
  sample?: keyof typeof samples;
}

const SampleText: React.FC<SampleTextProps> = ({ sample = "bakfung" }) => {
  return <TextWithAudioAndJyutPing>{samples[sample]}</TextWithAudioAndJyutPing>;
};

function TextWithAudioAndJyutPing({ children: text }: { children: string }) {
  return (
    <div className="my-6 p-4 border border-neutral-800 rounded-md">
      {text.trim().split(/\r\n?|\n/).map((line, lineIndex) => (
        <div key={lineIndex} className="flex flex-wrap items-end leading-loose">
          {parseText(line).map((item, index) => (
            <div key={index} className="inline-flex flex-col items-center mx-1">
              {/* Audio button above character */}
              {item.jyutping ? (
                <Audio id={item.jyutping} />
              ) : (
                <span className="size-6 inline-block" />
              )}
              {/* Character */}
              {item.char.length === 2 && /^\d$/.test(item.char[1]) ? (
                <span className="text-4xl font-jyutping my-1">
                  <span>{item.char[0]}</span>
                  {!isSafari && (
                    <span className="select-none">{item.char[1]}</span>
                  )}
                </span>
              ) : (
                <span className="text-4xl font-jyutping my-1">{item.char}</span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SampleText;
