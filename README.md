# English Typing Game

## 概要 (Overview)

これは、英語学習とブラインドタッチ習得を同時に行うことを目的としたタイピングゲームです。リスニング能力と正しい運指（指の使いかた）の向上もサポートします。Next.js を使用して構築されています。

## 主な機能 (Features)

- **豊富な問題カテゴリ**: 「日常会話」「ビジネス」「TOEIC 風」の 3 つのジャンルから問題を選択できます。
- **音声読み上げ**: 問題文はネイティブな発音で読み上げられ、リスニング能力を鍛えます。
  - **Google Cloud Text-to-Speech** を利用した高品質な音声（API キー設定時）。
  - 読み上げ速度と声の性別（男性/女性）を調整可能。
- **運指ガイド**: 次に打つべきキーと、それに対応する指を視覚的に表示し、正しいタイピングフォームの習得を助けます。
- **リアルタイムフィードバック**:
  - 正解・不正解時にそれぞれ異なる効果音が鳴ります。
  - 滑らかな画面遷移アニメーションによる快適な UI/UX。
- **詳細な結果表示**:
  - **スコア**: 速さと正確性を考慮した総合的な得点。
  - **KPM (Keys Per Minute)**: 1 分間あたりのキー入力数。
  - **正確性 (%)**: タイプミスの少なさ。
  - ミスしたキーの一覧。

## 使用技術 (Tech Stack)

- **フレームワーク**: [Next.js](https://nextjs.org/)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **アニメーション**: [Framer Motion](https://www.framer.com/motion/)
- **音声合成**: [Google Cloud Text-to-Speech API](https://cloud.google.com/text-to-speech) / Web Speech API

## ローカルでの起動方法 (Getting Started)

### 1. 前提条件

- [Node.js](https://nodejs.org/) (v18.17.0 以上)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2. プロジェクトのクローン

```bash
git clone [リポジトリのURL]
cd [プロジェクト名]
```

### 3. 依存パッケージのインストール

```bash
npm install
```

### 4. 環境変数の設定

プロジェクトのルートディレクトリに .env.local という名前のファイルを作成し、Google Cloud Text-to-Speech API のキーを設定します。

```bash
NEXT_PUBLIC_GOOGLE_API_KEY=YOUR_API_KEY
```

※API キーを設定しない場合でも、ブラウザ標準の音声合成機能でアプリケーションは動作します。ブラウザ標準の音声合成機能を使用する場合、性別の切り替えができません。

### 5. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開くと、アプリケーションが表示されます。

※Gemini AI で作成
