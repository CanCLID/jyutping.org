import fs from "node:fs";
import path from "node:path";

// This component reads the filesystem, so it must run on the server.
// It reads the audio files present in the public/audio directory.

const Chartaudio = () => {
  const audioDir = path.join(process.cwd(), "public/audio");
  let audioFiles: string[] = [];

  try {
    audioFiles = fs
      .readdirSync(audioDir)
      .filter((file) => path.extname(file).toLowerCase() === ".mp3");
  } catch (error) {
    console.error("Error reading audio directory:", audioDir, error);
    return <div className="text-red-500">Error loading audio files.</div>;
  }

  if (audioFiles.length === 0) {
    console.warn("No audio files found in:", audioDir);
    return null;
  }

  return (
    <div
      className="chartaudio-container"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      {audioFiles.map((fileName) => {
        const audioId = path.basename(fileName, ".mp3");
        const audioSrc = `/audio/${fileName}`;

        return (
          <audio key={audioId} id={audioId} src={audioSrc} preload="none">
            {/* Add an empty track element for accessibility compliance */}
            <track kind="captions" />
          </audio>
        );
      })}
    </div>
  );
};

export default Chartaudio;
