import React, { useState, useEffect, useCallback, useMemo } from "react";
import VisualKeyboard from "@/components/keyboard/VisualKeyboard";
import { GameConfig } from "./ConfigScreen";
import { GameResults } from "./ResultScreen";
import { mockQuestions, Question } from "@/data/questions";
import {
  speak,
  playBeep,
  playCorrectSound,
  playSuccessSound,
} from "@/lib/audio";

interface GameScreenProps {
  config: GameConfig;
  onFinish: (results: GameResults) => void;
}

const GameScreen: React.FC<GameScreenProps> = ({ config, onFinish }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [totalTyped, setTotalTyped] = useState(0);
  const [totalErrors, setTotalErrors] = useState(0);
  const [missedChars, setMissedChars] = useState<{ [key: string]: number }>({});
  const [isSpeaking, setIsSpeaking] = useState(false);
  const currentQuestion = useMemo(
    () => questions[currentQIndex],
    [questions, currentQIndex]
  );

  useEffect(() => {
    const selectedQuestions = mockQuestions[config.genre]
      .sort(() => 0.5 - Math.random())
      .slice(0, config.count);
    setQuestions(selectedQuestions);
  }, [config.genre, config.count]);

  const playSound = useCallback(
    async (text: string, speed: number, gender: string) => {
      setIsSpeaking(true);
      await speak(text, speed, gender);
      setIsSpeaking(false);
    },
    []
  );

  useEffect(() => {
    if (currentQuestion) {
      setTypedText("");
      playSound(currentQuestion.text, config.speed, config.gender);
      if (currentQIndex === 0) {
        setStartTime(Date.now());
      }
    }
  }, [currentQuestion, config, playSound, currentQIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (
        !currentQuestion ||
        ["Shift", "CapsLock", "Tab", "Enter", "Backspace"].includes(e.key)
      ) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      const correctKey = currentQuestion.text[typedText.length];
      if (e.key === correctKey) {
        playCorrectSound();
        setTypedText((prev) => prev + e.key);
        setTotalTyped((prev) => prev + 1);
      } else if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
        playBeep();
        setTotalErrors((prev) => prev + 1);
        setMissedChars((prev) => ({
          ...prev,
          [correctKey]: (prev[correctKey] || 0) + 1,
        }));
      }
    },
    [typedText, currentQuestion]
  );

  useEffect(() => {
    if (currentQuestion && typedText === currentQuestion.text) {
      if (currentQIndex < questions.length - 1) {
        playSuccessSound();
        setCurrentQIndex((prev) => prev + 1);
      } else {
        playSuccessSound();
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000;
        const totalAttempts = totalTyped + totalErrors;
        const accuracy =
          totalAttempts > 0 ? (totalTyped / totalAttempts) * 100 : 100;
        const timeInMinutes = timeTaken / 60;
        const kpm = timeInMinutes > 0 ? totalTyped / timeInMinutes : 0;
        const score = Math.floor(kpm * (accuracy / 100));
        onFinish({ score, kpm, accuracy, time: timeTaken, missedChars });
      }
    }
  }, [
    typedText,
    currentQuestion,
    currentQIndex,
    questions,
    startTime,
    onFinish,
    totalTyped,
    totalErrors,
    missedChars,
  ]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!currentQuestion)
    return (
      <div className="text-white text-center text-xl">問題の準備中...</div>
    );

  const nextKey = currentQuestion.text[typedText.length];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
      <div className="w-full p-6 bg-gray-800 rounded-xl shadow-lg">
        <p className="text-gray-400 text-lg mb-2 text-center">
          問題 {currentQIndex + 1} / {questions.length}
        </p>
        <div className="text-3xl font-mono p-4 bg-gray-900 rounded-lg text-white tracking-wider text-center">
          {currentQuestion.text.split("").map((char, index) => {
            let colorClass = "text-gray-500";
            if (index < typedText.length) colorClass = "text-green-400";
            if (index === typedText.length)
              colorClass = "border-b-2 border-cyan-400 animate-pulse";
            return (
              <span key={index} className={colorClass}>
                {char}
              </span>
            );
          })}
        </div>
        <div className="text-center mt-3 text-gray-300 text-lg">
          {currentQuestion.japanese}
        </div>
        <div className="mt-4 text-center">
          <button
            onClick={() =>
              playSound(currentQuestion.text, config.speed, config.gender)
            }
            disabled={isSpeaking}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSpeaking ? "読み上げ中..." : "もう一度聞く"}
          </button>
        </div>
      </div>
      <VisualKeyboard nextKey={nextKey} />
    </div>
  );
};

export default GameScreen;
