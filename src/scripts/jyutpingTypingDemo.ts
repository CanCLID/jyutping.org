type Candidate = {
  word: string;
  reading: string;
};

type DemoFrame = {
  phraseIndex: number;
  activeLine: 0 | 1;
  lines: [string, string];
  preedit: string;
  keyHint: string;
  candidates: Candidate[];
  durationMs: number;
};

const DEMO_FRAMES: readonly DemoFrame[] = [
  // Phrase 0: 粵語拼音 (jyutjyupingjam)
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "j", keyHint: "j", durationMs: 270, candidates: [
    { word: "有", reading: "jau5" },
    { word: "人", reading: "jan4" },
    { word: "一", reading: "jat1" },
    { word: "以", reading: "ji5" },
    { word: "日", reading: "jat6" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jy", keyHint: "y", durationMs: 240, candidates: [
    { word: "如", reading: "jyu4" },
    { word: "於", reading: "jyu1" },
    { word: "與", reading: "jyu5" },
    { word: "預", reading: "jyu6" },
    { word: "語", reading: "jyu5" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyu", keyHint: "u", durationMs: 240, candidates: [
    { word: "如", reading: "jyu4" },
    { word: "於", reading: "jyu1" },
    { word: "與", reading: "jyu5" },
    { word: "預", reading: "jyu6" },
    { word: "語", reading: "jyu5" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyut", keyHint: "t", durationMs: 340, candidates: [
    { word: "月", reading: "jyut6" },
    { word: "越", reading: "jyut6" },
    { word: "乙", reading: "jyut6" },
    { word: "粵", reading: "jyut6" },
    { word: "穴", reading: "jyut6" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyut j", keyHint: "j", durationMs: 260, candidates: [
    { word: "月入", reading: "jyut6 jap6" },
    { word: "粵語", reading: "jyut6 jyu5" },
    { word: "越野", reading: "jyut6 je5" },
    { word: "越洋", reading: "jyut6 joeng4" },
    { word: "月圓", reading: "jyut6 jyun4" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyut jy", keyHint: "y", durationMs: 240, candidates: [
    { word: "粵語", reading: "jyut6 jyu5" },
    { word: "粵語殘片", reading: "jyut6 jyu5 caan4 pin2" },
    { word: "月", reading: "jyut6" },
    { word: "越", reading: "jyut6" },
    { word: "乙", reading: "jyut6" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyut jyu", keyHint: "u", durationMs: 340, candidates: [
    { word: "粵語", reading: "jyut6 jyu5" },
    { word: "粵語殘片", reading: "jyut6 jyu5 caan4 pin2" },
    { word: "月", reading: "jyut6" },
    { word: "越", reading: "jyut6" },
    { word: "乙", reading: "jyut6" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyut jyu p", keyHint: "p", durationMs: 240, candidates: [
    { word: "粵語拍", reading: "jyut6 jyu5 paak3" },
    { word: "粵語", reading: "jyut6 jyu5" },
    { word: "月", reading: "jyut6" },
    { word: "越", reading: "jyut6" },
    { word: "乙", reading: "jyut6" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyut jyu pi", keyHint: "i", durationMs: 240, candidates: [
    { word: "粵語Ｐ", reading: "jyut6 jyu5 pi1" },
    { word: "粵語", reading: "jyut6 jyu5" },
    { word: "月", reading: "jyut6" },
    { word: "越", reading: "jyut6" },
    { word: "乙", reading: "jyut6" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyut jyu pin", keyHint: "n", durationMs: 240, candidates: [
    { word: "粵語片", reading: "jyut6 jyu5 pin3" },
    { word: "粵語", reading: "jyut6 jyu5" },
    { word: "月", reading: "jyut6" },
    { word: "越", reading: "jyut6" },
    { word: "乙", reading: "jyut6" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyut jyu ping", keyHint: "g", durationMs: 340, candidates: [
    { word: "粵語評", reading: "jyut6 jyu5 ping4" },
    { word: "粵語", reading: "jyut6 jyu5" },
    { word: "月", reading: "jyut6" },
    { word: "越", reading: "jyut6" },
    { word: "乙", reading: "jyut6" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyut jyu ping j", keyHint: "j", durationMs: 240, candidates: [
    { word: "粵語平日", reading: "jyut6 jyu5 ping4 jat6" },
    { word: "粵語拼音方案", reading: "jyut6 jyu5 ping3 jam1 fong1 on3" },
    { word: "粵語", reading: "jyut6 jyu5" },
    { word: "月", reading: "jyut6" },
    { word: "越", reading: "jyut6" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyut jyu ping ja", keyHint: "a", durationMs: 240, candidates: [
    { word: "粵語評也", reading: "jyut6 jyu5 ping4 jaa5" },
    { word: "粵語", reading: "jyut6 jyu5" },
    { word: "月", reading: "jyut6" },
    { word: "越", reading: "jyut6" },
    { word: "乙", reading: "jyut6" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["", ""], preedit: "jyut jyu ping jam", keyHint: "m", durationMs: 1000, candidates: [
    { word: "粵語拼音", reading: "jyut6 jyu5 ping3 jam1" },
    { word: "粵語拼音方案", reading: "jyut6 jyu5 ping3 jam1 fong1 on3" },
    { word: "粵語", reading: "jyut6 jyu5" },
    { word: "月", reading: "jyut6" },
    { word: "越", reading: "jyut6" },
  ] },
  { phraseIndex: 0, activeLine: 0, lines: ["粵語拼音", ""], preedit: "", keyHint: "Space", durationMs: 700, candidates: [] },

  // Phrase 1: 好易學 (houjihok)
  { phraseIndex: 1, activeLine: 0, lines: ["粵語拼音", ""], preedit: "h", keyHint: "h", durationMs: 260, candidates: [
    { word: "係", reading: "hai6" },
    { word: "後", reading: "hau6" },
    { word: "可", reading: "ho2" },
    { word: "開", reading: "hoi1" },
    { word: "去", reading: "heoi3" },
  ] },
  { phraseIndex: 1, activeLine: 0, lines: ["粵語拼音", ""], preedit: "ho", keyHint: "o", durationMs: 240, candidates: [
    { word: "可", reading: "ho2" },
    { word: "何", reading: "ho4" },
    { word: "河", reading: "ho4" },
    { word: "賀", reading: "ho6" },
    { word: "荷", reading: "ho4" },
  ] },
  { phraseIndex: 1, activeLine: 0, lines: ["粵語拼音", ""], preedit: "hou", keyHint: "u", durationMs: 340, candidates: [
    { word: "好", reading: "hou2" },
    { word: "號", reading: "hou6" },
    { word: "豪", reading: "hou4" },
    { word: "毫", reading: "hou4" },
    { word: "浩", reading: "hou6" },
  ] },
  { phraseIndex: 1, activeLine: 0, lines: ["粵語拼音", ""], preedit: "hou j", keyHint: "j", durationMs: 260, candidates: [
    { word: "好友", reading: "hou2 jau5" },
    { word: "好易", reading: "hou2 ji6" },
    { word: "好人", reading: "hou2 jan4" },
    { word: "好意", reading: "hou2 ji3" },
    { word: "好嘢", reading: "hou2 je5" },
  ] },
  { phraseIndex: 1, activeLine: 0, lines: ["粵語拼音", ""], preedit: "hou ji", keyHint: "i", durationMs: 340, candidates: [
    { word: "好易", reading: "hou2 ji6" },
    { word: "好意", reading: "hou2 ji3" },
    { word: "好意思", reading: "hou2 ji3 si1" },
    { word: "好耳", reading: "hou2 ji5" },
    { word: "好", reading: "hou2" },
  ] },
  { phraseIndex: 1, activeLine: 0, lines: ["粵語拼音", ""], preedit: "hou ji h", keyHint: "h", durationMs: 260, candidates: [
    { word: "好易係", reading: "hou2 ji6 hai6" },
    { word: "好易", reading: "hou2 ji6" },
    { word: "好意", reading: "hou2 ji3" },
    { word: "好耳", reading: "hou2 ji5" },
    { word: "好", reading: "hou2" },
  ] },
  { phraseIndex: 1, activeLine: 0, lines: ["粵語拼音", ""], preedit: "hou ji ho", keyHint: "o", durationMs: 240, candidates: [
    { word: "好易可", reading: "hou2 ji6 ho2" },
    { word: "好易", reading: "hou2 ji6" },
    { word: "好意", reading: "hou2 ji3" },
    { word: "好耳", reading: "hou2 ji5" },
    { word: "好", reading: "hou2" },
  ] },
  { phraseIndex: 1, activeLine: 0, lines: ["粵語拼音", ""], preedit: "hou ji hok", keyHint: "k", durationMs: 950, candidates: [
    { word: "好易學", reading: "hou2 ji6 hok6" },
    { word: "好易", reading: "hou2 ji6" },
    { word: "好意", reading: "hou2 ji3" },
    { word: "好耳", reading: "hou2 ji5" },
    { word: "好", reading: "hou2" },
  ] },
  { phraseIndex: 1, activeLine: 0, lines: ["粵語拼音好易學", ""], preedit: "", keyHint: "Space", durationMs: 600, candidates: [] },
  { phraseIndex: 1, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "", keyHint: "Enter", durationMs: 400, candidates: [] },

  // Phrase 2: 半個鐘就學得識 (bungozungzauhokdaksik)
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "b", keyHint: "b", durationMs: 260, candidates: [
    { word: "不", reading: "bat1" },
    { word: "本", reading: "bun2" },
    { word: "比", reading: "bei2" },
    { word: "表", reading: "biu2" },
    { word: "部", reading: "bou6" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bu", keyHint: "u", durationMs: 200, candidates: [] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun", keyHint: "n", durationMs: 340, candidates: [
    { word: "本", reading: "bun2" },
    { word: "半", reading: "bun3" },
    { word: "般", reading: "bun1" },
    { word: "伴", reading: "bun6" },
    { word: "搬", reading: "bun1" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bung", keyHint: "g", durationMs: 260, candidates: [
    { word: "捧", reading: "bung2" },
    { word: "本港", reading: "bun2 gong2" },
    { word: "半價", reading: "bun3 gaa3" },
    { word: "本金", reading: "bun2 gam1" },
    { word: "半個", reading: "bun3 go3" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go", keyHint: "o", durationMs: 340, candidates: [
    { word: "半個", reading: "bun3 go3" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
    { word: "塜", reading: "bung6" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go z", keyHint: "z", durationMs: 260, candidates: [
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
    { word: "塜", reading: "bung6" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go z u", keyHint: "u", durationMs: 240, candidates: [
    { word: "半個鐘屋", reading: "bun3 go3 zung1 uk1" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go z u n", keyHint: "n", durationMs: 240, candidates: [
    { word: "半個鐘屋內", reading: "bun3 go3 zung1 uk1 noi6" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung", keyHint: "g", durationMs: 340, candidates: [
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
    { word: "塜", reading: "bung6" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung z", keyHint: "z", durationMs: 260, candidates: [
    { word: "半個鐘就", reading: "bun3 go3 zung1 zau6" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung za", keyHint: "a", durationMs: 240, candidates: [
    { word: "半個鐘炸", reading: "bun3 go3 zung1 zaa3" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung zau", keyHint: "u", durationMs: 340, candidates: [
    { word: "半個鐘就", reading: "bun3 go3 zung1 zau6" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung zau h", keyHint: "h", durationMs: 260, candidates: [
    { word: "半個鐘就係", reading: "bun3 go3 zung1 zau6 hai6" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung zau ho", keyHint: "o", durationMs: 240, candidates: [
    { word: "半個鐘就可", reading: "bun3 go3 zung1 zau6 ho2" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung zau hok", keyHint: "k", durationMs: 340, candidates: [
    { word: "半個鐘走學", reading: "bun3 go3 zung1 zau2 hok6" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung zau hok d", keyHint: "d", durationMs: 260, candidates: [
    { word: "半個鐘就學到", reading: "bun3 go3 zung1 zau6 hok6 dou3" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung zau hok da", keyHint: "a", durationMs: 240, candidates: [
    { word: "半個鐘走學打", reading: "bun3 go3 zung1 zau2 hok6 daa2" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung zau hok dak", keyHint: "k", durationMs: 340, candidates: [
    { word: "半個鐘走學得", reading: "bun3 go3 zung1 zau2 hok6 dak1" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung zau hok dak s", keyHint: "s", durationMs: 260, candidates: [
    { word: "半個鐘就學得識", reading: "bun3 go3 zung1 zau6 hok6 dak1 sik1" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung zau hok dak si", keyHint: "i", durationMs: 240, candidates: [
    { word: "半個鐘走學特使", reading: "bun3 go3 zung1 zau2 hok6 dak6 si3" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", ""], preedit: "bun go zung zau hok dak sik", keyHint: "k", durationMs: 1200, candidates: [
    { word: "半個鐘就學得識", reading: "bun3 go3 zung1 zau6 hok6 dak1 sik1" },
    { word: "半個鐘", reading: "bun3 go3 zung1" },
    { word: "半個", reading: "bun3 go3" },
    { word: "捧", reading: "bung2" },
    { word: "甭", reading: "bung2" },
  ] },
  { phraseIndex: 2, activeLine: 1, lines: ["粵語拼音好易學", "半個鐘就學得識"], preedit: "", keyHint: "Space", durationMs: 3000, candidates: [] },
];

const RESTING_FRAME_INDEX = DEMO_FRAMES.length - 2;

class JyutpingTypingDemo extends HTMLElement {
  private frameIndex = RESTING_FRAME_INDEX;
  private playing = false;
  private inView = true;
  private timerId: number | null = null;
  private observer: IntersectionObserver | null = null;

  private row1El: HTMLElement | null = null;
  private row2El: HTMLElement | null = null;
  private line1El: HTMLElement | null = null;
  private line2El: HTMLElement | null = null;
  private preeditEl: HTMLElement | null = null;
  private caretEl: HTMLElement | null = null;
  private popupEl: HTMLElement | null = null;
  private keycapEl: HTMLElement | null = null;
  private rowEls: HTMLElement[] = [];
  private stepButtons: HTMLButtonElement[] = [];
  private toggleBtn: HTMLButtonElement | null = null;
  private playIconEl: HTMLElement | null = null;
  private pauseIconEl: HTMLElement | null = null;

  connectedCallback() {
    this.row1El = this.querySelector("[data-typing-row1]");
    this.row2El = this.querySelector("[data-typing-row2]");
    this.line1El = this.querySelector("[data-typing-line1]");
    this.line2El = this.querySelector("[data-typing-line2]");
    this.preeditEl = this.querySelector("[data-typing-preedit]");
    this.caretEl = this.querySelector("[data-typing-caret]");
    this.popupEl = this.querySelector("[data-typing-candidates]");
    this.keycapEl = this.querySelector("[data-typing-keycap]");
    this.rowEls = Array.from(this.querySelectorAll("[data-candidate-row]"));
    this.stepButtons = Array.from(this.querySelectorAll("button[data-typing-step]"));
    this.toggleBtn = this.querySelector("button[data-typing-toggle]");
    this.playIconEl = this.querySelector("[data-icon-play]");
    this.pauseIconEl = this.querySelector("[data-icon-pause]");

    this.toggleBtn?.addEventListener("click", () => {
      this.setPlaying(!this.playing);
    });

    this.querySelector("button[data-typing-replay]")?.addEventListener("click", () => {
      this.frameIndex = 0;
      this.renderFrame();
      this.setPlaying(true);
    });

    for (const btn of this.stepButtons) {
      btn.addEventListener("click", () => {
        const step = Number(btn.dataset.typingStep ?? "0");
        const targetIndex = DEMO_FRAMES.findIndex((frame) => frame.phraseIndex === step);
        if (targetIndex >= 0) {
          this.frameIndex = targetIndex;
          this.renderFrame();
          this.setPlaying(true);
        }
      });
    }

    document.addEventListener("visibilitychange", this.handleVisibilityChange);

    this.observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        this.inView = entry.isIntersecting;
        if (this.inView && this.playing) {
          this.scheduleNext();
        } else {
          this.clearTimer();
        }
      },
      { threshold: 0.2 },
    );
    this.observer.observe(this);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.frameIndex = prefersReducedMotion ? RESTING_FRAME_INDEX : 0;
    this.renderFrame();
    this.setPlaying(!prefersReducedMotion);
  }

  disconnectedCallback() {
    this.clearTimer();
    this.observer?.disconnect();
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
  }

  private handleVisibilityChange = () => {
    if (document.hidden) {
      this.clearTimer();
    } else if (this.playing && this.inView) {
      this.scheduleNext();
    }
  };

  private setPlaying(nextPlaying: boolean) {
    this.playing = nextPlaying;
    this.dataset.playing = String(nextPlaying);

    if (this.toggleBtn) {
      const playLabel = this.toggleBtn.dataset.labelPlay ?? "Play";
      const pauseLabel = this.toggleBtn.dataset.labelPause ?? "Pause";
      this.toggleBtn.setAttribute("aria-label", nextPlaying ? pauseLabel : playLabel);
      this.toggleBtn.setAttribute("aria-pressed", String(nextPlaying));
    }

    if (this.playIconEl && this.pauseIconEl) {
      this.playIconEl.hidden = nextPlaying;
      this.pauseIconEl.hidden = !nextPlaying;
    }

    this.clearTimer();
    if (nextPlaying && this.inView) {
      this.scheduleNext();
    }
  }

  private clearTimer() {
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  private scheduleNext() {
    this.clearTimer();
    const current = DEMO_FRAMES[this.frameIndex];
    if (!current) return;

    this.timerId = window.setTimeout(() => {
      if (!this.playing || !this.inView || document.hidden) return;
      this.frameIndex = (this.frameIndex + 1) % DEMO_FRAMES.length;
      this.renderFrame();
      this.scheduleNext();
    }, current.durationMs);
  }

  private renderFrame() {
    const frame = DEMO_FRAMES[this.frameIndex];
    if (!frame) return;

    if (this.line1El) this.line1El.textContent = frame.lines[0];
    if (this.line2El) this.line2El.textContent = frame.lines[1];

    const targetRow = frame.activeLine === 0 ? this.row1El : this.row2El;
    if (targetRow && this.preeditEl && this.caretEl) {
      if (this.preeditEl.parentElement !== targetRow) {
        targetRow.append(this.preeditEl, this.caretEl);
      }
    }

    if (this.preeditEl) {
      this.preeditEl.textContent = frame.preedit;
      this.preeditEl.hidden = frame.preedit.length === 0;
    }
    if (this.keycapEl) {
      this.keycapEl.textContent = frame.keyHint;
    }

    for (const btn of this.stepButtons) {
      const step = Number(btn.dataset.typingStep ?? "-1");
      const isActive = step === frame.phraseIndex;
      btn.setAttribute("aria-current", isActive ? "step" : "false");
      btn.classList.toggle("bg-[#eef5fc]", isActive);
      btn.classList.toggle("text-[#0b467e]", isActive);
      btn.classList.toggle("font-semibold", isActive);
      btn.classList.toggle("text-slate-600", !isActive);
    }

    if (this.popupEl) {
      const hasCandidates = frame.candidates.length > 0;
      this.popupEl.classList.toggle("opacity-0", !hasCandidates);
      this.popupEl.classList.toggle("pointer-events-none", !hasCandidates);
    }

    for (let i = 0; i < this.rowEls.length; i++) {
      const row = this.rowEls[i];
      const candidate = frame.candidates[i];
      if (!row) continue;

      if (!candidate) {
        row.hidden = true;
        continue;
      }

      row.hidden = false;
      const wordEl = row.querySelector("[data-candidate-word]");
      const readingEl = row.querySelector("[data-candidate-reading]");
      if (wordEl) wordEl.textContent = candidate.word;
      if (readingEl) readingEl.textContent = candidate.reading;
    }
  }
}

if (!customElements.get("jyutping-typing-demo")) {
  customElements.define("jyutping-typing-demo", JyutpingTypingDemo);
}
