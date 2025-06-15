"use client";

import React, { useState, useEffect } from "react";
// Transition 型をインポート
import { motion, AnimatePresence, Transition } from "framer-motion";
import ConfigScreen, { GameConfig } from "@/components/game/ConfigScreen";
import GameScreen from "@/components/game/GameScreen";
import ResultScreen, { GameResults } from "@/components/game/ResultScreen";

type GameState = "config" | "playing" | "result";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("config");
  const [config, setConfig] = useState<GameConfig | null>(null);
  const [results, setResults] = useState<GameResults | null>(null);

  useEffect(() => {
    if (
      "speechSynthesis" in window &&
      window.speechSynthesis.getVoices().length === 0
    ) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  const handleStart = (newConfig: GameConfig) => {
    setConfig(newConfig);
    setGameState("playing");
  };

  const handleFinish = (finalResults: GameResults) => {
    setResults(finalResults);
    setGameState("result");
  };

  const handleRestart = () => {
    setGameState("playing");
  };

  const handleConfig = () => {
    setResults(null);
    setConfig(null);
    setGameState("config");
  };

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 },
  };

  // pageTransitionオブジェクトにTransition型を明示的に指定
  const pageTransition: Transition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <main className="bg-gray-900 min-h-screen w-full flex items-center justify-center font-sans p-4 overflow-hidden">
      <AnimatePresence mode="wait">
        {gameState === "config" && (
          <motion.div
            key="config"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ConfigScreen onStart={handleStart} />
          </motion.div>
        )}
        {gameState === "playing" && config && (
          <motion.div
            key="playing"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full"
          >
            <GameScreen config={config} onFinish={handleFinish} />
          </motion.div>
        )}
        {gameState === "result" && results && (
          <motion.div
            key="result"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <ResultScreen
              results={results}
              onRestart={handleRestart}
              onConfig={handleConfig}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
