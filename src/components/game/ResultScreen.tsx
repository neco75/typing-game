import React from "react";

export interface GameResults {
  score: number;
  kpm: number;
  accuracy: number;
  time: number;
  missedChars: { [key: string]: number };
}

interface ResultScreenProps {
  results: GameResults;
  onRestart: () => void;
  onConfig: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  results,
  onRestart,
  onConfig,
}) => {
  const sortedMissedChars = Object.entries(results.missedChars).sort(
    ([, a], [, b]) => b - a
  );
  return (
    <div className="w-full max-w-xl mx-auto p-8 bg-gray-800 rounded-xl shadow-lg text-white border border-gray-700">
      <h1 className="text-4xl font-bold text-center text-cyan-400 mb-4">
        結果
      </h1>
      <div className="bg-gray-700 p-4 rounded-lg mb-6 text-center">
        <p className="text-lg text-gray-400">スコア</p>
        <p className="text-6xl font-bold text-yellow-400">{results.score}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center mb-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-400">KPM (キー/分)</p>
          <p className="text-3xl font-bold">{results.kpm.toFixed(2)}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-400">正確性</p>
          <p className="text-3xl font-bold">{results.accuracy.toFixed(2)}%</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-400">時間</p>
          <p className="text-3xl font-bold">{results.time.toFixed(2)}s</p>
        </div>
      </div>
      {sortedMissedChars.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">ミスしたキー</h2>
          <div className="bg-gray-700 p-4 rounded-lg max-h-32 overflow-y-auto">
            {sortedMissedChars.map(([char, count]) => (
              <div
                key={char}
                className="flex justify-between items-center text-lg"
              >
                <span className="font-mono bg-gray-800 px-2 py-1 rounded">{`'${
                  char === " " ? "Space" : char
                }'`}</span>
                <span>{count} 回</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex space-x-4 mt-8">
        <button
          onClick={onRestart}
          className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          もう一度 (同じ設定)
        </button>
        <button
          onClick={onConfig}
          className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
        >
          設定に戻る
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
