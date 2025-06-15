export interface Question {
  id: string;
  text: string;
  japanese: string;
}

export const mockQuestions: { [key: string]: Question[] } = {
  daily: [
    {
      id: "d01",
      text: "Hello, how are you doing today?",
      japanese: "こんにちは、今日の調子はどうですか？",
    },
    {
      id: "d02",
      text: "What do you do for a living?",
      japanese: "お仕事は何をされていますか？",
    },
    {
      id: "d03",
      text: "Could you tell me how to get to the station?",
      japanese: "駅への行き方を教えていただけますか？",
    },
    {
      id: "d04",
      text: "I'm sorry, I didn't catch what you said.",
      japanese: "すみません、おっしゃったことが聞き取れませんでした。",
    },
    {
      id: "d05",
      text: "It's a beautiful day, isn't it?",
      japanese: "素晴らしい天気ですね。",
    },
    {
      id: "d06",
      text: "Let's grab a coffee sometime.",
      japanese: "今度、コーヒーでも飲みに行きましょう。",
    },
    {
      id: "d07",
      text: "What are your plans for the weekend?",
      japanese: "週末の予定は何ですか？",
    },
    {
      id: "d08",
      text: "Can I have the bill, please?",
      japanese: "お会計をお願いします。",
    },
    {
      id: "d09",
      text: "It was nice meeting you.",
      japanese: "お会いできてよかったです。",
    },
    {
      id: "d10",
      text: "See you later, have a good one.",
      japanese: "また後でね、良い一日を。",
    },
    {
      id: "d11",
      text: "Do you have any recommendations for a good restaurant around here?",
      japanese: "この辺りで良いレストランのおすすめはありますか？",
    },
    {
      id: "d12",
      text: "How long does it take to get there by bus?",
      japanese: "バスでそこまでどのくらいかかりますか？",
    },
    {
      id: "d13",
      text: "I'd like to make a reservation for two people at seven.",
      japanese: "7時に2名で予約をお願いしたいのですが。",
    },
    {
      id: "d14",
      text: "What kind of music do you listen to?",
      japanese: "どんな種類の音楽を聴きますか？",
    },
    {
      id: "d15",
      text: "I'm just browsing, thank you.",
      japanese: "見ているだけです、ありがとう。",
    },
    {
      id: "d16",
      text: "Could you speak a little more slowly, please?",
      japanese: "もう少しゆっくり話していただけますか？",
    },
    {
      id: "d17",
      text: "Where is the nearest subway station?",
      japanese: "一番近い地下鉄の駅はどこですか？",
    },
    {
      id: "d18",
      text: "This is my first time visiting this country.",
      japanese: "この国を訪れるのは初めてです。",
    },
    {
      id: "d19",
      text: "I'll have the same thing, please.",
      japanese: "私も同じものをお願いします。",
    },
    {
      id: "d20",
      text: "Do you accept credit cards?",
      japanese: "クレジットカードは使えますか？",
    },
  ],
  business: [
    {
      id: "b01",
      text: "Let's schedule a meeting for next week.",
      japanese: "来週、会議の日程を調整しましょう。",
    },
    {
      id: "b02",
      text: "Could you please send me the report by email?",
      japanese: "そのレポートをメールで送っていただけますか？",
    },
    {
      id: "b03",
      text: "I'm looking forward to working with you.",
      japanese: "あなたと一緒にお仕事できるのを楽しみにしています。",
    },
    {
      id: "b04",
      text: "We need to finalize the project proposal.",
      japanese: "私たちはプロジェクトの提案を最終決定する必要があります。",
    },
    {
      id: "b05",
      text: "What are the main objectives for this quarter?",
      japanese: "今四半期の主な目標は何ですか？",
    },
    {
      id: "b06",
      text: "Let me confirm the details and get back to you.",
      japanese: "詳細を確認して、折り返しご連絡します。",
    },
    {
      id: "b07",
      text: "We need to improve our workflow efficiency.",
      japanese: "私たちはワークフローの効率を改善する必要があります。",
    },
    {
      id: "b08",
      text: "The deadline is approaching, so let's prioritize this task.",
      japanese: "締め切りが近づいているので、このタスクを優先しましょう。",
    },
    {
      id: "b09",
      text: "Thank you for your prompt response.",
      japanese: "迅速なご返信ありがとうございます。",
    },
    {
      id: "b10",
      text: "Could we postpone the meeting until tomorrow?",
      japanese: "会議を明日に延期できますでしょうか？",
    },
    {
      id: "b11",
      text: "Please find the attached file for your review.",
      japanese: "ご確認のため、添付ファイルをご覧ください。",
    },
    {
      id: "b12",
      text: "I'll be out of the office next Monday.",
      japanese: "来週の月曜日は、私は不在にしております。",
    },
    {
      id: "b13",
      text: "Let's touch base again in a few days.",
      japanese: "数日後にまた連絡を取り合いましょう。",
    },
    {
      id: "b14",
      text: "What's the budget for this project?",
      japanese: "このプロジェクトの予算はいくらですか？",
    },
    {
      id: "b15",
      text: "We have to consider the long-term strategy.",
      japanese: "私たちは長期的な戦略を考慮しなければなりません。",
    },
    {
      id: "b16",
      text: "He is in charge of the marketing department.",
      japanese: "彼はマーケティング部門の責任者です。",
    },
    {
      id: "b17",
      text: "Let's brainstorm some new ideas for the campaign.",
      japanese:
        "キャンペーンの新しいアイデアをブレインストーミングしましょう。",
    },
    {
      id: "b18",
      text: "We need to negotiate the terms of the contract.",
      japanese: "契約の条件について交渉する必要があります。",
    },
    {
      id: "b19",
      text: "Could you provide me with an update on the progress?",
      japanese: "進捗状況について最新情報をいただけますか？",
    },
    {
      id: "b20",
      text: "Our company specializes in software development.",
      japanese: "当社はソフトウェア開発を専門としています。",
    },
  ],
  toeic: [
    {
      id: "t01",
      text: "The new regulations will be implemented next month.",
      japanese: "新しい規制は来月実施されます。",
    },
    {
      id: "t02",
      text: "All employees are required to attend the workshop.",
      japanese: "全従業員はその研修会への参加が義務付けられています。",
    },
    {
      id: "t03",
      text: "The marketing department has exceeded its sales target.",
      japanese: "マーケティング部門は売上目標を超えました。",
    },
    {
      id: "t04",
      text: "Please review the attached documents carefully.",
      japanese: "添付された書類を注意深く確認してください。",
    },
    {
      id: "t05",
      text: "The company announced its quarterly earnings yesterday.",
      japanese: "その会社は昨日、四半期決算を発表しました。",
    },
    {
      id: "t06",
      text: "Applicants should submit their resumes by Friday.",
      japanese: "応募者は金曜日までに履歴書を提出してください。",
    },
    {
      id: "t07",
      text: "The train has been delayed due to mechanical issues.",
      japanese: "その電車は機械の不具合により遅延しています。",
    },
    {
      id: "t08",
      text: "You can find more information on our official website.",
      japanese: "詳細は公式ウェブサイトでご確認いただけます。",
    },
    {
      id: "t09",
      text: "Customer satisfaction is our top priority.",
      japanese: "顧客満足が我々の最優先事項です。",
    },
    {
      id: "t10",
      text: "The factory will be temporarily closed for maintenance.",
      japanese: "その工場はメンテナンスのため一時的に閉鎖されます。",
    },
    {
      id: "t11",
      text: "The conference has been rescheduled for next Wednesday.",
      japanese: "その会議は来週の水曜日に日程変更されました。",
    },
    {
      id: "t12",
      text: "All products are inspected for quality before shipment.",
      japanese: "すべての製品は出荷前に品質検査を受けます。",
    },
    {
      id: "t13",
      text: "The government has introduced new import restrictions.",
      japanese: "政府は新たな輸入制限を導入しました。",
    },
    {
      id: "t14",
      text: "Ms. Tanaka was promoted to the position of senior manager.",
      japanese: "田中さんはシニアマネージャーの職に昇進しました。",
    },
    {
      id: "t15",
      text: "The construction of the new bridge is expected to be completed next year.",
      japanese: "新しい橋の建設は来年完了する予定です。",
    },
    {
      id: "t16",
      text: "Please do not hesitate to contact us if you have any questions.",
      japanese: "ご質問がございましたら、遠慮なくお問い合わせください。",
    },
    {
      id: "t17",
      text: "The museum is easily accessible by public transportation.",
      japanese: "その博物館は公共交通機関で簡単に行くことができます。",
    },
    {
      id: "t18",
      text: "We offer a competitive salary and excellent benefits.",
      japanese: "私たちは競争力のある給与と素晴らしい福利厚生を提供します。",
    },
    {
      id: "t19",
      text: "The session will cover a wide range of topics.",
      japanese: "そのセッションでは幅広いトピックが扱われます。",
    },
    {
      id: "t20",
      text: "The survey results will be analyzed by our research team.",
      japanese: "調査結果は私たちの研究チームによって分析されます。",
    },
    {
      id: "d21",
      text: "Are you coming to the party tonight?",
      japanese: "今夜パーティーに来ますか？",
    },
    {
      id: "d22",
      text: "I forgot to set my alarm clock.",
      japanese: "目覚まし時計をセットし忘れました。",
    },
    {
      id: "d23",
      text: "Could you help me carry these bags?",
      japanese: "これらのバッグを運ぶのを手伝ってくれませんか？",
    },
    {
      id: "d24",
      text: "It's raining cats and dogs outside.",
      japanese: "外は土砂降りの雨です。",
    },
    {
      id: "d25",
      text: "I'm thinking of adopting a cat.",
      japanese: "猫を飼おうか考えています。",
    },
    {
      id: "d26",
      text: "What time does the train leave?",
      japanese: "電車は何時に出発しますか？",
    },
    {
      id: "d27",
      text: "I didn't catch what you said.",
      japanese: "何て言ったのか聞き取れませんでした。",
    },
    {
      id: "d28",
      text: "Let's meet up for coffee this afternoon.",
      japanese: "今日の午後、コーヒーを飲みに会いましょう。",
    },
    {
      id: "d29",
      text: "Do you have any plans for the weekend?",
      japanese: "週末の予定はありますか？",
    },
    {
      id: "d30",
      text: "I'm running late; I'll be there in 10 minutes.",
      japanese: "遅れています。あと10分で着きます。",
    },
    {
      id: "d31",
      text: "Feel free to use my umbrella.",
      japanese: "遠慮なく私の傘を使ってください。",
    },
    {
      id: "d32",
      text: "I'm craving something sweet after dinner.",
      japanese: "夕食後に甘いものが食べたくなりました。",
    },
    {
      id: "d33",
      text: "Let's catch up sometime soon!",
      japanese: "また近いうちに会いましょう！",
    },
    {
      id: "d34",
      text: "What did you think of the movie?",
      japanese: "映画を見てどう思いましたか？",
    },
    {
      id: "d35",
      text: "I'm sorry I didn't respond earlier.",
      japanese: "早く返事をしなくてごめんなさい。",
    },
    {
      id: "d36",
      text: "She's really good at playing the guitar.",
      japanese: "彼女はギターを弾くのが本当に上手です。",
    },
    {
      id: "d37",
      text: "This neighborhood is so quiet at night.",
      japanese: "この辺りは夜とても静かです。",
    },
    {
      id: "d38",
      text: "I'll grab some groceries on my way home.",
      japanese: "帰りに食料品を買ってきます。",
    },
    {
      id: "d39",
      text: "Can I have a glass of water, please?",
      japanese: "水を一杯いただけますか？",
    },
    {
      id: "d40",
      text: "He just started learning to cook last month.",
      japanese: "彼は先月料理を習い始めました。",
    },
    {
      id: "d41",
      text: "Do you mind if I open the window?",
      japanese: "窓を開けてもいいですか？",
    },
    {
      id: "d42",
      text: "She's looking for a new apartment downtown.",
      japanese: "彼女は中心街で新しいアパートを探しています。",
    },
    {
      id: "d43",
      text: "The traffic was terrible this morning.",
      japanese: "今朝はひどい渋滞でした。",
    },
    {
      id: "d44",
      text: "I got a haircut and dyed my hair blue.",
      japanese: "髪を切って青く染めました。",
    },
    {
      id: "d45",
      text: "What kind of music do you like?",
      japanese: "どんな音楽が好きですか？",
    },
    {
      id: "d46",
      text: "Please remind me to call my mom later.",
      japanese: "後で母に電話することを思い出させてください。",
    },
    {
      id: "d47",
      text: "I need to pick up my prescription at the pharmacy.",
      japanese: "薬局で処方箋を受け取らないといけません。",
    },
    {
      id: "d48",
      text: "This coffee tastes a bit too bitter.",
      japanese: "このコーヒーは少し苦すぎます。",
    },
    {
      id: "d49",
      text: "She smiled when she saw the surprise.",
      japanese: "彼女はサプライズを見て笑顔になりました。",
    },
    {
      id: "d50",
      text: "It's a bit chilly today; maybe wear a jacket.",
      japanese:
        "今日は少し肌寒いので、ジャケットを着たほうがいいかもしれません。",
    },
    {
      id: "d51",
      text: "I'm trying to save money for a trip.",
      japanese: "旅行のためにお金を節約しようとしています。",
    },
    {
      id: "d52",
      text: "Can you turn down the volume a little?",
      japanese: "もう少し音量を下げていただけますか？",
    },
    {
      id: "d53",
      text: "We should order pizza for dinner.",
      japanese: "夕食にピザを注文すべきですね。",
    },
    {
      id: "d54",
      text: "I forgot my umbrella on the train.",
      japanese: "電車に傘を忘れました。",
    },
    {
      id: "d55",
      text: "What did you want to tell me yesterday?",
      japanese: "昨日、何を伝えたかったの？",
    },
    {
      id: "d56",
      text: "They're planning a surprise party for his birthday.",
      japanese: "彼の誕生日にサプライズパーティーを計画しています。",
    },
    {
      id: "d57",
      text: "I think I lost my keys at the mall.",
      japanese: "ショッピングモールで鍵をなくしたと思います。",
    },
    {
      id: "d58",
      text: "Can you recommend a good restaurant around here?",
      japanese: "この辺りでいいレストランを勧めてくれませんか？",
    },
    {
      id: "d59",
      text: "Let's take a taxi home; it's too late to walk.",
      japanese: "タクシーで帰りましょう。歩くには遅すぎます。",
    },
    {
      id: "d60",
      text: "I'm so tired; I could fall asleep anywhere.",
      japanese: "とても疲れています。どこでも寝られそうです。",
    },
    {
      id: "d61",
      text: "She finally finished reading that book.",
      japanese: "彼女はついにその本を読み終えました。",
    },
    {
      id: "d62",
      text: "What do you usually do on weekends?",
      japanese: "普段週末は何をしていますか？",
    },
    {
      id: "d63",
      text: "I spilled coffee all over my shirt.",
      japanese: "シャツにコーヒーを全部こぼしてしまいました。",
    },
    {
      id: "d64",
      text: "Are you free this Saturday morning?",
      japanese: "今週土曜日の午前中は空いていますか？",
    },
    {
      id: "d65",
      text: "I really need a vacation.",
      japanese: "本当に休暇が必要です。",
    },
    {
      id: "d66",
      text: "He just moved to a new city last month.",
      japanese: "彼は先月新しい都市に引っ越してきました。",
    },
    {
      id: "d67",
      text: "This burger is actually pretty delicious.",
      japanese: "このバーガーは意外と美味しいです。",
    },
    {
      id: "d68",
      text: "Don't worry, I'll pick up the bill this time.",
      japanese: "心配しないで、今回は私がお会計を払います。",
    },
    {
      id: "d69",
      text: "Did you see the latest episode of that show?",
      japanese: "あの番組の最新のエピソードを見ましたか？",
    },
    {
      id: "d70",
      text: "I might go jogging later if the weather is nice.",
      japanese: "天気が良ければ後でジョギングに行くかもしれません。",
    },
    {
      id: "d71",
      text: "She's been feeling under the weather lately.",
      japanese: "彼女は最近体調が優れないみたいです。",
    },
    {
      id: "d72",
      text: "Let's plan a road trip for the summer holidays.",
      japanese: "夏休みにドライブ旅行を計画しましょう。",
    },
    {
      id: "d73",
      text: "That concert last night was absolutely amazing!",
      japanese: "昨夜のコンサートは本当に素晴らしかったです！",
    },
    {
      id: "d74",
      text: "I'm looking forward to the weekend already.",
      japanese: "もう週末が待ち遠しいです。",
    },
    {
      id: "d75",
      text: "Can you text me the address of the restaurant?",
      japanese: "レストランの住所を私にメールしてくれますか？",
    },
    {
      id: "d76",
      text: "I slept through my alarm this morning.",
      japanese: "今朝アラームが鳴ったのに寝坊しました。",
    },
    {
      id: "d77",
      text: "They always make me laugh when I'm sad.",
      japanese: "私が悲しいとき、彼らはいつも私を笑わせてくれます。",
    },
    {
      id: "d78",
      text: "I think there is a chance of rain tomorrow.",
      japanese: "明日は雨が降る可能性があると思います。",
    },
    {
      id: "d79",
      text: "Could you do me a favor and send me the file?",
      japanese: "お願いがあるんだけど、そのファイルを送ってもらえる？",
    },
    {
      id: "d80",
      text: "She's never been to Tokyo before.",
      japanese: "彼女は以前東京に行ったことがありません。",
    },
    {
      id: "d81",
      text: "I'll call you when I arrive at the airport.",
      japanese: "空港に着いたら電話しますね。",
    },
    {
      id: "d82",
      text: "He's trying to learn how to dance salsa.",
      japanese: "彼はサルサを踊る方法を習おうとしています。",
    },
    {
      id: "d83",
      text: "Time flies when you're having fun.",
      japanese: "楽しいときは時間が飛ぶように過ぎてしまいます。",
    },
    {
      id: "d84",
      text: "I was stuck in traffic for an hour today.",
      japanese: "今日は1時間も渋滞に捕まっていました。",
    },
    {
      id: "d85",
      text: "Let's exchange phone numbers.",
      japanese: "電話番号を交換しましょう。",
    },
    {
      id: "d86",
      text: "He accidentally sent the email to the wrong person.",
      japanese: "彼は間違えてそのメールを別の人に送信してしまいました。",
    },
    {
      id: "d87",
      text: "She's been waiting for an hour already!",
      japanese: "彼女はもう1時間も待っているんですよ！",
    },
    {
      id: "d88",
      text: "Do you want to come over for dinner tonight?",
      japanese: "今夜、うちに夕食を食べに来ませんか？",
    },
    {
      id: "d89",
      text: "It looks like it's going to snow later.",
      japanese: "後で雪が降りそうですね。",
    },
    {
      id: "d90",
      text: "I'm going to start learning French.",
      japanese: "フランス語の勉強を始めようと思っています。",
    },
    {
      id: "d91",
      text: "If you hurry, we can catch the early train.",
      japanese: "急げば早い電車に乗れます。",
    },
    {
      id: "d92",
      text: "The bakery on the corner sells delicious bread.",
      japanese: "角のパン屋はおいしいパンを売っています。",
    },
    {
      id: "d93",
      text: "I can't believe we ran into each other here!",
      japanese: "ここでばったり会うなんて信じられない！",
    },
    {
      id: "d94",
      text: "She's expecting a baby in November.",
      japanese: "彼女は11月に赤ちゃんを出産する予定です。",
    },
    {
      id: "d95",
      text: "Let's hurry; the store closes at 7 PM.",
      japanese: "急ごう。店は午後7時に閉まります。",
    },
    {
      id: "d96",
      text: "I forgot to mention, I'll be out of town next week.",
      japanese: "言い忘れたけど、来週は町を離れています。",
    },
    {
      id: "d97",
      text: "My phone battery died on the way here.",
      japanese: "来る途中でスマホのバッテリーが切れました。",
    },
    {
      id: "d98",
      text: "He can't decide which movie to watch tonight.",
      japanese: "彼は今夜どの映画を見るか決められません。",
    },
    {
      id: "d99",
      text: "I'm planning to bake a cake for her birthday.",
      japanese: "彼女の誕生日にケーキを焼く予定です。",
    },
    {
      id: "d100",
      text: "Could you keep an eye on my bag for a moment?",
      japanese: "ちょっとの間、私のバッグを見ていてくれますか？",
    },

    {
      id: "b21",
      text: "Could you send me the report by tomorrow morning?",
      japanese: "明日の午前中までにレポートを送っていただけますか？",
    },
    {
      id: "b22",
      text: "I'm writing to confirm our meeting on Thursday.",
      japanese: "木曜日のミーティングを確認させていただきます。",
    },
    {
      id: "b23",
      text: "Please let me know if you have any questions.",
      japanese: "ご不明な点がありましたらお知らせください。",
    },
    {
      id: "b24",
      text: "We need to finalize the budget by Friday.",
      japanese: "金曜日までに予算を確定する必要があります。",
    },
    {
      id: "b25",
      text: "I will brief the team on the new policy next week.",
      japanese: "来週、新しい方針についてチームに説明します。",
    },
    {
      id: "b26",
      text: "The deadline for this project is next Monday.",
      japanese: "このプロジェクトの締め切りは次の月曜日です。",
    },
    {
      id: "b27",
      text: "Could you please provide the latest figures?",
      japanese: "最新の数値を提供していただけますか？",
    },
    {
      id: "b28",
      text: "Our company is pleased to offer you this position.",
      japanese:
        "当社はあなたにこのポジションを提供できることを嬉しく思います。",
    },
    {
      id: "b29",
      text: "Thank you for your prompt reply.",
      japanese: "迅速なご返答ありがとうございます。",
    },
    {
      id: "b30",
      text: "I look forward to hearing from you soon.",
      japanese: "近いうちにご連絡をお待ちしています。",
    },
    {
      id: "b31",
      text: "The meeting room is booked from 2 PM to 3 PM.",
      japanese: "会議室は午後2時から午後3時まで予約されています。",
    },
    {
      id: "b32",
      text: "I apologize for the delay in responding to your email.",
      japanese: "メールの返信が遅れてしまい、申し訳ありません。",
    },
    {
      id: "b33",
      text: "Let's touch base after you've reviewed the document.",
      japanese: "書類を確認した後に連絡を取り合いましょう。",
    },
    {
      id: "b34",
      text: "Please find the attached file for your review.",
      japanese: "添付ファイルをご確認ください。",
    },
    {
      id: "b35",
      text: "Our quarterly report will be published next week.",
      japanese: "四半期報告書は来週発表されます。",
    },
    {
      id: "b36",
      text: "She has been promoted to department manager.",
      japanese: "彼女は部長に昇進しました。",
    },
    {
      id: "b37",
      text: "We are unable to accommodate your request at this time.",
      japanese: "現時点ではあなたの要望にお応えできません。",
    },
    {
      id: "b38",
      text: "He will be out of the office next week.",
      japanese: "彼は来週不在です。",
    },
    {
      id: "b39",
      text: "We need to address this issue immediately.",
      japanese: "この問題に直ちに対処する必要があります。",
    },
    {
      id: "b40",
      text: "All employees must submit their reports by Friday.",
      japanese: "全社員は金曜日までに報告書を提出しなければなりません。",
    },
    {
      id: "b41",
      text: "Thank you for your cooperation on this matter.",
      japanese: "この件につきご協力いただきありがとうございます。",
    },
    {
      id: "b42",
      text: "We have scheduled a conference call for 10 AM tomorrow.",
      japanese: "明日の午前10時に電話会議を予定しています。",
    },
    {
      id: "b43",
      text: "Could you please update the project plan?",
      japanese: "プロジェクト計画を更新していただけますか？",
    },
    {
      id: "b44",
      text: "I'm afraid I have to decline your invitation.",
      japanese: "残念ながら、ご招待を辞退させていただきます。",
    },
    {
      id: "b45",
      text: "Your application is being processed.",
      japanese: "あなたの申請は現在処理中です。",
    },
    {
      id: "b46",
      text: "Please let me know your availability for a meeting.",
      japanese: "ミーティングの日程についてご都合をお知らせください。",
    },
    {
      id: "b47",
      text: "We appreciate your prompt attention to this matter.",
      japanese: "この件について迅速に対応していただき、感謝します。",
    },
    {
      id: "b48",
      text: "The marketing team will launch the campaign next week.",
      japanese: "マーケティングチームが来週キャンペーンを開始します。",
    },
    {
      id: "b49",
      text: "Please review the attached document.",
      japanese: "添付書類をご確認ください。",
    },
    {
      id: "b50",
      text: "This contract must be signed by both parties.",
      japanese: "この契約書は両当事者が署名しなければなりません。",
    },
    {
      id: "b51",
      text: "I will get back to you with the revised proposal.",
      japanese: "修正案をご連絡いたします。",
    },
    {
      id: "b52",
      text: "We're counting on your expertise for this project.",
      japanese: "このプロジェクトにはあなたの専門知識を期待しています。",
    },
    {
      id: "b53",
      text: "I'll forward the email to our supervisor.",
      japanese: "そのメールを上司に転送します。",
    },
    {
      id: "b54",
      text: "Please remind me to send the invoice later.",
      japanese: "後で請求書を送るように思い出させてください。",
    },
    {
      id: "b55",
      text: "The shipment is scheduled to arrive on Wednesday.",
      japanese: "荷物は水曜日に到着予定です。",
    },
    {
      id: "b56",
      text: "Let's prepare a presentation for the client meeting.",
      japanese: "クライアントとの会議用にプレゼンテーションを準備しましょう。",
    },
    {
      id: "b57",
      text: "Could you clarify the requirements for this task?",
      japanese: "このタスクの要件を明確にしていただけますか？",
    },
    {
      id: "b58",
      text: "I'll follow up with you on Monday morning.",
      japanese: "月曜日の朝にフォローアップします。",
    },
    {
      id: "b59",
      text: "Our office will be closed during the national holiday.",
      japanese: "国民の祝日の間、オフィスは休業します。",
    },
    {
      id: "b60",
      text: "We look forward to a successful partnership.",
      japanese: "成功裏のパートナーシップを楽しみにしています。",
    },
    {
      id: "b61",
      text: "The board of directors will review the proposal next week.",
      japanese: "取締役会が来週提案書を検討します。",
    },
    {
      id: "b62",
      text: "Please prioritize these tasks accordingly.",
      japanese: "これらのタスクを優先して対応してください。",
    },
    {
      id: "b63",
      text: "The training session is mandatory for all staff.",
      japanese: "研修会は全スタッフ必須です。",
    },
    {
      id: "b64",
      text: "I will arrange transportation for the clients.",
      japanese: "クライアントのために交通手段を手配します。",
    },
    {
      id: "b65",
      text: "Your feedback would be greatly appreciated.",
      japanese: "ご意見をいただければ幸いです。",
    },
    {
      id: "b66",
      text: "We're pleased with your performance this quarter.",
      japanese: "今四半期のあなたの業績に満足しています。",
    },
    {
      id: "b67",
      text: "Could you send the documents by courier?",
      japanese: "書類を宅配便で送っていただけますか？",
    },
    {
      id: "b68",
      text: "I need to reschedule our appointment.",
      japanese: "予定を変更しなければなりません。",
    },
    {
      id: "b69",
      text: "He handles all the communications with the vendor.",
      japanese: "彼はベンダーとのすべてのやり取りを担当しています。",
    },
    {
      id: "b70",
      text: "We should reconvene after the holiday.",
      japanese: "休暇の後に再度集まりましょう。",
    },
    {
      id: "b71",
      text: "I've CC'd the team on this email.",
      japanese: "このメールでチームをCCしました。",
    },
    {
      id: "b72",
      text: "The computer system is currently down for maintenance.",
      japanese: "コンピュータシステムは現在メンテナンスのため停止しています。",
    },
    {
      id: "b73",
      text: "Our profits have steadily increased this year.",
      japanese: "今年は利益が着実に増加しています。",
    },
    {
      id: "b74",
      text: "Please provide your comments by the end of the week.",
      japanese: "週末までにご意見をお聞かせください。",
    },
    {
      id: "b75",
      text: "The accounting department will handle your request.",
      japanese: "経理部門があなたの依頼を対応します。",
    },
    {
      id: "b76",
      text: "Let's start the meeting now that everyone is here.",
      japanese: "全員そろったのでミーティングを始めましょう。",
    },
    {
      id: "b77",
      text: "Your proposal has been well received by management.",
      japanese: "あなたの提案は経営陣に好評でした。",
    },
    {
      id: "b78",
      text: "We regret to inform you that the position has been filled.",
      japanese:
        "残念ながら、そのポジションはすでに埋まっていることをお知らせいたします。",
    },
    {
      id: "b79",
      text: "Please confirm whether you will attend the conference.",
      japanese: "会議に出席するかどうかご確認ください。",
    },
    {
      id: "b80",
      text: "All data will be backed up nightly.",
      japanese: "すべてのデータは毎晩バックアップされます。",
    },
    {
      id: "b81",
      text: "I will draft an agenda for tomorrow's meeting.",
      japanese: "明日の会議の議題を作成します。",
    },
    {
      id: "b82",
      text: "Please address this matter with the HR department.",
      japanese: "この件については人事部にご相談ください。",
    },
    {
      id: "b83",
      text: "Could you transfer this call to Mr. Smith?",
      japanese: "この電話をスミスさんに転送していただけますか？",
    },
    {
      id: "b84",
      text: "Let's wrap up the discussion and vote.",
      japanese: "議論をまとめて、投票しましょう。",
    },
    {
      id: "b85",
      text: "He has asked to be included in the email chain.",
      japanese: "彼はメールの連絡網に含めてほしいと言っています。",
    },
    {
      id: "b86",
      text: "We'll conduct the training next Monday.",
      japanese: "来週の月曜日に研修を行います。",
    },
    {
      id: "b87",
      text: "All expenses need to be approved before reimbursement.",
      japanese: "経費は払い戻し前に承認される必要があります。",
    },
    {
      id: "b88",
      text: "The new software will streamline the workflow.",
      japanese: "新しいソフトウェアは作業の流れを効率化します。",
    },
    {
      id: "b89",
      text: "Please excuse my absence from the meeting yesterday.",
      japanese: "昨日の会議を欠席したことをご容赦ください。",
    },
    {
      id: "b90",
      text: "I have attached the minutes from our last meeting.",
      japanese: "先日の会議の議事録を添付しました。",
    },
    {
      id: "b91",
      text: "We should evaluate the candidate's qualifications.",
      japanese: "候補者の資格を評価すべきです。",
    },
    {
      id: "b92",
      text: "I will attend the conference call this afternoon.",
      japanese: "今日の午後の電話会議に参加します。",
    },
    {
      id: "b93",
      text: "Our team is expanding, and we have new positions available.",
      japanese: "私たちのチームは拡大しており、新しいポジションがあります。",
    },
    {
      id: "b94",
      text: "Please ensure all team members receive the memo.",
      japanese: "チームの全員がメモを受け取るよう確認してください。",
    },
    {
      id: "b95",
      text: "The CEO will make an announcement at the assembly.",
      japanese: "CEOが集会で発表を行います。",
    },
    {
      id: "b96",
      text: "Let's conduct a risk analysis for the project.",
      japanese: "そのプロジェクトのリスク分析を実施しましょう。",
    },
    {
      id: "b97",
      text: "Could you prepare the financial statements for review?",
      japanese: "確認用に財務諸表を準備していただけますか？",
    },
    {
      id: "b98",
      text: "I appreciate your patience during this transition.",
      japanese: "この移行期間中のご辛抱に感謝いたします。",
    },
    {
      id: "b99",
      text: "Please reference section 4 for more details.",
      japanese: "詳細はセクション4を参照してください。",
    },
    {
      id: "b100",
      text: "All participants must wear badges at the event.",
      japanese: "イベントでは参加者全員がバッジを着用しなければなりません。",
    },

    {
      id: "t21",
      text: "The presentation has been postponed until Friday.",
      japanese: "プレゼンテーションは金曜日まで延期されました。",
    },
    {
      id: "t22",
      text: "She was hired as a marketing specialist last month.",
      japanese:
        "彼女は先月、マーケティングスペシャリストとして採用されました。",
    },
    {
      id: "t23",
      text: "I regret to inform you that your application was rejected.",
      japanese: "残念ながら、あなたの応募は不採用でした。",
    },
    {
      id: "t24",
      text: "This device is compatible with most operating systems.",
      japanese: "この機器はほとんどのOSに対応しています。",
    },
    {
      id: "t25",
      text: "By the time we arrived, the event had already started.",
      japanese: "私たちが到着した時には、イベントはすでに始まっていました。",
    },
    {
      id: "t26",
      text: "You are required to wear a helmet in this area.",
      japanese: "このエリアではヘルメットの着用が義務付けられています。",
    },
    {
      id: "t27",
      text: "Despite the delay, the team completed the project on time.",
      japanese:
        "遅れにもかかわらず、チームはプロジェクトを期限内に完成させました。",
    },
    {
      id: "t28",
      text: "I am currently participating in a training program.",
      japanese: "現在、研修プログラムに参加しています。",
    },
    {
      id: "t29",
      text: "You will be responsible for handling client inquiries.",
      japanese: "あなたは顧客からの問い合わせ対応を担当することになります。",
    },
    {
      id: "t30",
      text: "It is important to back up the data regularly.",
      japanese: "定期的にデータをバックアップすることは重要です。",
    },
    {
      id: "t31",
      text: "He is likely to receive a promotion after the next review.",
      japanese: "次の評価の後、彼は昇進する可能性が高いです。",
    },
    {
      id: "t32",
      text: "The manual explains how to operate the machine safely.",
      japanese: "マニュアルには機械を安全に操作する方法が説明されています。",
    },
    {
      id: "t33",
      text: "This software has been updated to improve security.",
      japanese:
        "このソフトウェアはセキュリティ向上のためにアップデートされました。",
    },
    {
      id: "t34",
      text: "Please submit the report by email before noon.",
      japanese: "正午までに電子メールでレポートを提出してください。",
    },
    {
      id: "t35",
      text: "We have been experiencing technical difficulties.",
      japanese: "技術的な問題が発生しています。",
    },
    {
      id: "t36",
      text: "They were given a detailed explanation of the process.",
      japanese: "彼らにはそのプロセスの詳細な説明が与えられました。",
    },
    {
      id: "t37",
      text: "Meeting the deadline is our top priority this month.",
      japanese: "期限を守ることが今月の最優先事項です。",
    },
    {
      id: "t38",
      text: "Our turnover has increased significantly this quarter.",
      japanese: "今四半期の売上高は大幅に増加しました。",
    },
    {
      id: "t39",
      text: "We suggest that all members be notified of the change.",
      japanese: "変更についてすべてのメンバーに通知することを提案します。",
    },
    {
      id: "t40",
      text: "You must obtain approval from your supervisor.",
      japanese: "上司の承認を得る必要があります。",
    },
    {
      id: "t41",
      text: "The candidate failed to meet the minimum qualifications.",
      japanese: "候補者は最低限の資格を満たせませんでした。",
    },
    {
      id: "t42",
      text: "Advertising on social media can boost sales.",
      japanese: "SNS上での広告は売上を押し上げることができます。",
    },
    {
      id: "t43",
      text: "This chair is designed to provide extra comfort.",
      japanese: "この椅子はさらなる快適性を提供するよう設計されています。",
    },
    {
      id: "t44",
      text: "He was asked to demonstrate the new software.",
      japanese: "彼は新しいソフトウェアを実演するよう依頼されました。",
    },
    {
      id: "t45",
      text: "The flight was delayed due to heavy fog.",
      japanese: "濃霧のため、飛行機は遅延しました。",
    },
    {
      id: "t46",
      text: "Electricity bills have risen steadily.",
      japanese: "電気代は着実に上昇しています。",
    },
    {
      id: "t47",
      text: "The company is considering a merger with a competitor.",
      japanese: "会社は競合他社との合併を検討しています。",
    },
    {
      id: "t48",
      text: "It is assumed that productivity will improve next year.",
      japanese: "生産性は来年改善すると見込まれています。",
    },
    {
      id: "t49",
      text: "I managed to fix the printer before the meeting.",
      japanese: "会議の前にプリンターを修理することができました。",
    },
    {
      id: "t50",
      text: "Check whether the equipment is powered off.",
      japanese: "機器の電源がオフになっているか確認してください。",
    },
    {
      id: "t51",
      text: "Most of the staff have completed the orientation course.",
      japanese: "スタッフのほとんどがオリエンテーションコースを修了しました。",
    },
    {
      id: "t52",
      text: "They plan to relocate the office to a larger space.",
      japanese: "彼らはオフィスをより広い場所に移転する予定です。",
    },
    {
      id: "t53",
      text: "How long does it take to process an application?",
      japanese: "申請を処理するのにどれくらい時間がかかりますか？",
    },
    {
      id: "t54",
      text: "You should carefully read the safety instructions.",
      japanese: "安全指示を注意深く読むべきです。",
    },
    {
      id: "t55",
      text: "No smoking is allowed inside the building.",
      japanese: "建物内は全面禁煙です。",
    },
    {
      id: "t56",
      text: "I would rather work from home tomorrow.",
      japanese: "明日はむしろ在宅で働きたいです。",
    },
    {
      id: "t57",
      text: "The project will launch before the end of the year.",
      japanese: "プロジェクトは年内に開始されます。",
    },
    {
      id: "t58",
      text: "They could not reach an agreement in the negotiation.",
      japanese: "交渉で合意に達することができませんでした。",
    },
    {
      id: "t59",
      text: "The new system has a user-friendly interface.",
      japanese:
        "新しいシステムはユーザーフレンドリーなインターフェースを備えています。",
    },
    {
      id: "t60",
      text: "Make sure you follow the safety instructions closely.",
      japanese: "安全指示に注意深く従ってください。",
    },
    {
      id: "t61",
      text: "Make sure to submit your application by the deadline.",
      japanese: "締め切りまでに申請書を必ず提出してください。",
    },
    {
      id: "t62",
      text: "I expect that business will pick up soon.",
      japanese: "商売はまもなく活気づくと期待しています。",
    },
    {
      id: "t63",
      text: "It has been raining for three hours straight.",
      japanese: "雨が3時間ぶっ続けで降っています。",
    },
    {
      id: "t64",
      text: "Everyone was told to evacuate the building immediately.",
      japanese: "全員が直ちに建物を避難するように言われました。",
    },
    {
      id: "t65",
      text: "The CEO postponed the conference due to the emergency.",
      japanese: "緊急事態のため、CEOは会議を延期しました。",
    },
    {
      id: "t66",
      text: "The goods were delivered one day earlier than scheduled.",
      japanese: "商品の納品は予定より1日早く行われました。",
    },
    {
      id: "t67",
      text: "Filing the reports in duplicate is required by law.",
      japanese: "報告書を複写で提出することが法律で義務付けられています。",
    },
    {
      id: "t68",
      text: "We have to meet every other Monday.",
      japanese: "隔週の月曜日に会わなければなりません。",
    },
    {
      id: "t69",
      text: "The internet connection in this office is very stable.",
      japanese: "このオフィスのインターネット接続は非常に安定しています。",
    },
    {
      id: "t70",
      text: "They found the new software difficult to use initially.",
      japanese: "彼らは当初、新しいソフトウェアを使いにくいと感じました。",
    },
    {
      id: "t71",
      text: "The seminar was attended by more than 100 people.",
      japanese: "セミナーには100人以上が参加しました。",
    },
    {
      id: "t72",
      text: "You will receive a confirmation email shortly.",
      japanese: "間もなく確認のメールが届きます。",
    },
    {
      id: "t73",
      text: "He would rather take the train than drive.",
      japanese: "彼は車を運転するより電車を利用したいと思っています。",
    },
    {
      id: "t74",
      text: "It seems that the file has been deleted accidentally.",
      japanese: "ファイルが誤って削除されたようです。",
    },
    {
      id: "t75",
      text: "All visitors must wear ID badges at all times.",
      japanese: "訪問者は常にIDバッジを着用しなければなりません。",
    },
    {
      id: "t76",
      text: "This task cannot be completed without additional funding.",
      japanese: "このタスクは追加資金がなければ完了できません。",
    },
    {
      id: "t77",
      text: "Children under 5 are not allowed in this area.",
      japanese: "5歳未満の子供はこのエリアには立ち入りできません。",
    },
    {
      id: "t78",
      text: "Even if you hurry, it might not be enough time.",
      japanese: "急いでも、十分な時間はないかもしれません。",
    },
    {
      id: "t79",
      text: "The study shows that online advertising is effective.",
      japanese: "その調査によると、オンライン広告は効果的です。",
    },
    {
      id: "t80",
      text: "I need to get permission before changing the schedule.",
      japanese: "スケジュールを変更する前に許可を得る必要があります。",
    },
    {
      id: "t81",
      text: "Everyone knows how to operate this machine.",
      japanese: "誰でもこの機械の操作方法を知っています。",
    },
    {
      id: "t82",
      text: "Let's assume that we'll need an extra week.",
      japanese: "あと1週間必要だと仮定しましょう。",
    },
    {
      id: "t83",
      text: "He promised to finish the work ahead of schedule.",
      japanese: "彼は予定より早く仕事を終えると約束しました。",
    },
    {
      id: "t84",
      text: "These figures include all associated costs.",
      japanese: "これらの数値にはすべての関連費用が含まれています。",
    },
    {
      id: "t85",
      text: "No customer complaints were received after the update.",
      japanese: "アップデート後、顧客からの苦情は一件もありませんでした。",
    },
    {
      id: "t86",
      text: "We expect to receive your shipment by Wednesday.",
      japanese: "水曜日までに出荷物を受け取る見込みです。",
    },
    {
      id: "t87",
      text: "It is unlikely that the issue will recur.",
      japanese: "この問題が再発する可能性は低いです。",
    },
    {
      id: "t88",
      text: "We have decided to introduce a new product line.",
      japanese: "新しい製品ラインを導入することに決めました。",
    },
    {
      id: "t89",
      text: "You will have your performance review next month.",
      japanese: "来月、あなたの評価が行われます。",
    },
    {
      id: "t90",
      text: "The documents should be filed in alphabetical order.",
      japanese: "書類はアルファベット順に整理する必要があります。",
    },
    {
      id: "t91",
      text: "You need to authorize the payment on the terminal.",
      japanese: "ターミナルで支払いを承認する必要があります。",
    },
    {
      id: "t92",
      text: "They are supposed to arrive at 6 PM.",
      japanese: "彼らは午後6時に到着する予定です。",
    },
    {
      id: "t93",
      text: "I was surprised that he solved the problem quickly.",
      japanese: "彼がすぐに問題を解決したので驚きました。",
    },
    {
      id: "t94",
      text: "Has anyone found a solution to the error?",
      japanese: "そのエラーに対する解決策が誰か見つけましたか？",
    },
    {
      id: "t95",
      text: "The file was corrupted, so we need to download it again.",
      japanese: "ファイルが破損したので、再度ダウンロードする必要があります。",
    },
    {
      id: "t96",
      text: "The final draft will be ready by Tuesday.",
      japanese: "最終案は火曜日までに準備されます。",
    },
    {
      id: "t97",
      text: "Make sure to send the report by the end of the day.",
      japanese: "必ず当日中にレポートを送ってください。",
    },
    {
      id: "t98",
      text: "Is it necessary to update the software manually?",
      japanese: "ソフトウェアを手動で更新する必要がありますか？",
    },
    {
      id: "t99",
      text: "They will celebrate the company's 50th anniversary next year.",
      japanese: "彼らは来年、会社の50周年を祝います。",
    },
    {
      id: "t100",
      text: "I realized that I had forgotten my wallet at home.",
      japanese: "自分の財布を家に忘れてきたことに気づきました。",
    },
  ],
};
