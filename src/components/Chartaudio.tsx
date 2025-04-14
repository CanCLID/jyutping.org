import fs from "node:fs";
import path from "node:path";

// This component reads the filesystem, so it must run on the server.
// It reads the audio files present in the public/audio directory.

const Chartaudio = () => {
  const audioDir = path.join(process.cwd(), "public/audio");
  let audioFiles: string[] = [];

  try {
    // Read directory contents synchronously (safe for server components at build/request time)
    audioFiles = fs
      .readdirSync(audioDir)
      // Filter for .mp3 files only
      .filter((file) => path.extname(file).toLowerCase() === ".mp3");
  } catch (error) {
    console.error("Error reading audio directory:", audioDir, error);
    // Return null or an error message if the directory can't be read
    return <div className="text-red-500">Error loading audio files.</div>;
  }

  if (audioFiles.length === 0) {
    console.warn("No audio files found in:", audioDir);
    return null; // Don't render anything if no audio files
  }

  return (
    // Using a div wrapper, similar to the original <docaudio> tag
    <div
      className="chartaudio-container"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      {audioFiles.map((fileName) => {
        const audioId = path.basename(fileName, ".mp3"); // e.g., 'baa1'
        const audioSrc = `/audio/${fileName}`; // Public path

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
