let activeAudio: HTMLAudioElement | null = null;
let activeButton: HTMLButtonElement | null = null;

function clearPlayingState() {
  if (activeButton) {
    delete activeButton.dataset.playing;
    activeButton = null;
  }
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const button = target.closest<HTMLButtonElement>("button[data-audio-id]");
  if (!button) return;

  const id = button.dataset.audioId;
  if (!id) return;

  const src = `/audio/${encodeURIComponent(id)}.mp3`;

  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }
  clearPlayingState();

  const audio = new Audio(src);
  activeAudio = audio;
  activeButton = button;
  button.dataset.playing = "true";

  audio.addEventListener(
    "ended",
    () => {
      if (activeAudio === audio) {
        clearPlayingState();
      }
    },
    { once: true },
  );

  audio.addEventListener(
    "error",
    () => {
      if (activeAudio === audio) {
        clearPlayingState();
      }
      console.error(`Error loading audio source: ${src}`);
    },
    { once: true },
  );

  audio.play().catch((error) => {
    if (activeAudio === audio) {
      clearPlayingState();
    }
    console.error(`Error playing audio [${id}] (${src}):`, error);
  });
});
