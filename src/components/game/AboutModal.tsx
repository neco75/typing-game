import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-gray-800 text-white rounded-lg shadow-xl w-full max-w-4xl p-6 mx-4 relative border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              このアプリについて
            </h2>
            <p className="text-gray-300 mb-4">
              英語学習とブラインドタッチ習得を同時に行うことを目的としたタイピングゲームです。リスニング能力と正しい運指の向上もサポートします。
            </p>
            <p className="text-gray-300 mb-4">
              このアプリは要件定義のためのヒアリング~実装までGemini
              AIを使用しています。
            </p>
            <div className="space-y-2 mb-6">
              <h3 className="font-semibold text-lg text-gray-200">主な機能</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>3つの問題カテゴリ（日常会話、ビジネス、TOEIC）</li>
                <li>高品質な音声読み上げ（速度・性別調整可能）</li>
                <li>正しい指の動きを示す運指ガイド</li>
                <li>詳細なプレイ結果の表示（スコア, KPM, 正確性）</li>
              </ul>
            </div>
            <details className="space-y-2 mb-6">
              <summary className="font-semibold text-lg text-gray-200">
                開発した背景や感想など
              </summary>
              <p className="text-gray-300 mb-4">
                最近分割キーボードを作成し、ブラインドタッチの練習用に作成しました。また、英語の苦手意識をなくさないとまずいと考え、手を動かすだけではなく音でも覚えることのできるような作りにしました。(英語の単位や卒論作成・発表などでも英語を使うのでそろそろなんとかしないとまずい…)
              </p>
              <p className="text-gray-300 mb-4">
                今回の開発では初めて要件定義をするところからAIを使用してみました。普段何も考えず開発を始めることが多かったのですが、よくYouTubeで見ているエンジニアさんがAIを用いてヒアリングをしているところを見て試しに取り入れてみました。壁打ちしてみるとかなり作りたいものがクリアになったので、今後も取り入れていきたいです。
              </p>
              <p className="text-gray-300 mb-4">
                実装もGeminiのCanvasを使用しています。最初はCursorの学生無料のProプランで実装していこうと考えていたのですが、なぜかFreeプランに戻っていたのでGeminiの会話を引き継いで実装しました。ある程度の実装手順などはこちらで考えることもありましたが、ほとんどAIが実装してくれました。楽だけど私いりますこれ？って感情です。とても就職後の人生が不安ですね。
              </p>
              <p className="text-gray-300 mb-4">
                現在(2025/6/16)はclaude
                codeがエンジニア界隈で盛り上がっているようですが、Geminiでこれなら一体どれだけすごいものができるんでしょうか？まだ学生だと手を出しづらいのでいつか触ってみたい。(福利厚生とかで採用されないかなー)
              </p>
              <p className="text-gray-300 mb-4">
                色々思うところはありますが、考えたものが素早く形になる時代に生まれてよかったと思います。これからも暇なときに楽しいものを作っていきたいです。
              </p>
            </details>
            <a
              href="https://github.com/neco75/typing-game"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                ></path>
              </svg>
              GitHubでソースコードを見る
            </a>
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
              aria-label="閉じる"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;
