"use client";

import type React from "react";

interface AudioProps {
  id: string;
}

// Simple SVG Volume Up icon
const VolumeUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    role="img"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <title>Play audio</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
    />
  </svg>
);

const Audio: React.FC<AudioProps> = ({ id }) => {
  const handleClick = () => {
    const container = document.getElementById("dynamic-audio-container");
    if (!container) {
      console.error("Dynamic audio container not found.");
      return;
    }

    const basePath = container.dataset.audioBasePath || "/audio/"; // Default path if attribute is missing
    const audioSrc = `${basePath}${id}.mp3`;

    let audioElement = document.getElementById(id) as HTMLAudioElement | null;

    // If audio element doesn't exist, create it
    if (!audioElement) {
      audioElement = document.createElement("audio");
      audioElement.id = id;
      audioElement.src = audioSrc;
      audioElement.preload = "auto"; // Preload the audio when created

      // Add an empty track for accessibility compliance (though less critical for dynamically added elements)
      const track = document.createElement("track");
      track.kind = "captions";
      audioElement.appendChild(track);

      container.appendChild(audioElement);

      // Optional: Add error handling for audio loading itself
      audioElement.onerror = () => {
        console.error(`Error loading audio source: ${audioSrc}`);
        // Maybe remove the element or display feedback
        audioElement?.remove();
      };
    }

    // Play the audio element (either existing or newly created)
    audioElement.play().catch((error) => {
      console.error(`Error playing audio [${id}] (${audioSrc}):`, error);
      // Handle potential errors like user interaction required or file not found after creation attempt
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center justify-center p-1 rounded-md text-blue-600 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 mx-1 align-middle"
      aria-label={`Play audio ${id}`}
    >
      <VolumeUpIcon />
    </button>
  );
};

export default Audio;
