import React, { useState } from "react";

export interface GameConfig {
  genre: string;
  count: number;
  speed: number;
  gender: string;
}

interface ConfigScreenProps {
  onStart: (config: GameConfig) => void;
}

const ConfigScreen: React.FC<ConfigScreenProps> = ({ onStart }) => {
  const [config, setConfig] = useState<GameConfig>({
    genre: "daily",
    count: 5,
    speed: 1.0,
    gender: "female",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setConfig((prev) => ({
      ...prev,
      [name]: name === "count" || name === "speed" ? Number(value) : value,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-gray-800 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        タイピングゲーム設定
      </h1>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="genre"
            className="block text-sm font-medium text-gray-300"
          >
            ジャンル
          </label>
          <select
            id="genre"
            name="genre"
            value={config.genre}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md text-white"
          >
            <option value="daily">日常会話</option>
            <option value="business">ビジネス</option>
            <option value="toeic">TOEIC</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="count"
            className="block text-sm font-medium text-gray-300"
          >
            問題数 ({config.count})
          </label>
          <input
            type="range"
            id="count"
            name="count"
            min="1"
            max="10"
            value={config.count}
            onChange={handleChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
        </div>
        <div>
          <label
            htmlFor="speed"
            className="block text-sm font-medium text-gray-300"
          >
            読み上げ速度 ({config.speed.toFixed(2)}x)
          </label>
          <input
            type="range"
            id="speed"
            name="speed"
            min="0.5"
            max="1.5"
            step="0.05"
            value={config.speed}
            onChange={handleChange}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
        </div>
        <div>
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-300"
          >
            声の性別
          </label>
          <select
            id="gender"
            name="gender"
            value={config.gender}
            onChange={handleChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-700 border-gray-600 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md text-white"
          >
            <option value="female">女性</option>
            <option value="male">男性</option>
          </select>
        </div>
      </div>
      <button
        onClick={() => onStart(config)}
        className="mt-8 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        ゲーム開始
      </button>
    </div>
  );
};

export default ConfigScreen;
