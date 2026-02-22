import type React from "react";
import Audio from "./Audio.tsx";
import fusisaanhaa from "../texts/fusisaanhaa.txt?raw";
import bakfung from "../texts/bakfung.txt?raw";
import maanboujansanglou from "../texts/maanboujansanglou.txt?raw";
import coisandou from "../texts/coisandou.txt?raw";

// Parses text into character/jyutping pairs
const parseText = (
  text: string
): { char: string; jyutping: string | null }[] => {
  const result: { char: string; jyutping: string | null }[] = [];
  const pairs = text.split(/\s+/).filter(Boolean);

  for (const pair of pairs) {
    // Handle cases like '字jyutping' or just '字' or 'punctuation'
    let char = pair;
    let jyutping: string | null = null;

    // Check if the last part looks like Jyutping (letters followed by a digit)
    // Also handle font variations. 使2si2（2 after 使 means pick another jyutping font） 使sai2
    const match = pair.match(/^(.+?)([\d]{0,1}?)([a-z]+\d)$/); // Assuming one character has not more than ten variations
    if (match) {
      // Check if the first part is a single character
      if (match[1].length === 1) {
        char = match[1] + match[2];
        jyutping = match[3];
      } else {
        // Invalid otherwise
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

const isSafari =
  typeof navigator !== "undefined" &&
  /Version\/[\d\.]+.*Safari/.test(navigator.userAgent);

interface SampleTextProps {
  sample?: "bakfung" | "maanboujansanglou" | "coisandou" | "fusisaanhaa";
}

const SampleText: React.FC<SampleTextProps> = ({
  sample = "bakfung",
}) => {
  let inputText = bakfung;

  if (sample === "maanboujansanglou") {
    inputText = maanboujansanglou;
  } else if (sample === "coisandou") {
    inputText = coisandou;
  } else if (sample === "fusisaanhaa") {
    inputText = fusisaanhaa;
  }

  return <TextWithAudioAndJyutPing>{inputText}</TextWithAudioAndJyutPing>;
};

function TextWithAudioAndJyutPing({ children }: { children: string }) {
  const parsedItems = parseText(children);

  return (
    <div className="my-6 p-4 border border-neutral-800 rounded-md">
      <div className="flex flex-wrap items-end leading-loose">
        {parsedItems.map((item, index) => (
          <div
            key={`${item.char}-${item.jyutping || "no-jp"}-${index}`}
            className="inline-flex flex-col items-center mx-1"
          >
            {/* Audio button above character */}
            {item.jyutping ? (
              <Audio id={item.jyutping} />
            ) : (
              <span className="h-[28px] w-6 inline-block" />
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
    </div>
  );
}

export default SampleText;
