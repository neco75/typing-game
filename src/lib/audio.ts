// Google Cloud Text-to-Speech API 関連
export const speak = async (
  text: string,
  speakingRate: number,
  gender: string
) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  if (!apiKey) {
    console.warn(
      "APIキーが設定されていません。ブラウザの音声合成機能で代用します。"
    );
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = speakingRate;

      const getVoicesPromise = (): Promise<SpeechSynthesisVoice[]> => {
        return new Promise((resolve) => {
          const voices = window.speechSynthesis.getVoices();
          if (voices.length > 0) {
            resolve(voices);
            return;
          }
          window.speechSynthesis.onvoiceschanged = () => {
            resolve(window.speechSynthesis.getVoices());
          };
        });
      };

      const voices = await getVoicesPromise();
      const usVoices = voices.filter((voice) => voice.lang === "en-US");
      let selectedVoice = usVoices.find((voice) =>
        voice.name.toLowerCase().includes(gender)
      );
      if (!selectedVoice) selectedVoice = usVoices[0];
      utterance.voice = selectedVoice;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
    return;
  }

  const API_ENDPOINT = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
  const payload = {
    input: { text },
    voice: { languageCode: "en-US", ssmlGender: gender.toUpperCase() },
    audioConfig: { audioEncoding: "MP3", speakingRate },
  };

  try {
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error.message || "APIリクエストに失敗しました");
    }
    const data = await response.json();
    if (data.audioContent) {
      const audioSrc = `data:audio/mp3;base64,${data.audioContent}`;
      new Audio(audioSrc).play();
    }
  } catch (error) {
    console.error("Google Text-to-Speech APIエラー:", error);
    alert("音声の生成に失敗しました。APIキーや設定を確認してください。");
  }
};
// AudioContextを一度だけ生成して共有する
let audioContext: AudioContext | null = null;
if (typeof window !== "undefined") {
  audioContext = new (window.AudioContext ||
    (window as any).webkitAudioContext)();
}

// 汎用的なサウンドプレイヤー
const playSound = (
  type: OscillatorType,
  frequency: number,
  duration: number
) => {
  // 共有されたAudioContextを使用する
  if (!audioContext) return;

  // ユーザーの操作によって中断されたコンテキストを再開する
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  gainNode.gain.setValueAtTime(0, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.01);

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.start(audioContext.currentTime);

  gainNode.gain.exponentialRampToValueAtTime(
    0.00001,
    audioContext.currentTime + duration
  );
  oscillator.stop(audioContext.currentTime + duration);
};

// 正解時の音
export const playCorrectSound = () => {
  playSound("sine", 600, 0.05);
};

// 問題クリア時の音
export const playSuccessSound = () => {
  // 共有されたAudioContextを使用する
  if (!audioContext) return;

  // ユーザーの操作によって中断されたコンテキストを再開する
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const playNote = (freq: number, startTime: number, duration: number) => {
    const osc = audioContext!.createOscillator();
    const gain = audioContext!.createGain();
    osc.connect(gain);
    gain.connect(audioContext!.destination);
    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, audioContext!.currentTime);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.4, startTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);
    osc.start(startTime);
    osc.stop(startTime + duration);
  };

  const now = audioContext.currentTime;
  playNote(523.25, now, 0.1); // C5
  playNote(659.25, now + 0.1, 0.1); // E5
  playNote(783.99, now + 0.2, 0.15); // G5
};

// エラー音再生 (Web Audio API)
export const playBeep = () => {
  playSound("square", 200, 0.1);
};
