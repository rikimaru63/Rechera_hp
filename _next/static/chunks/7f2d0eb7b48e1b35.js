(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,15288,e=>{"use strict";var t=e.i(43476),s=e.i(75157);function i({className:e,...i}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,s.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...i})}function r({className:e,...i}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,s.cn)("px-6",e),...i})}e.s(["Card",()=>i,"CardContent",()=>r])},10980,e=>{"use strict";let t=(0,e.i(75254).default)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);e.s(["BookOpen",()=>t],10980)},71689,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-left",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",()=>t],71689)},35591,e=>{"use strict";var t=e.i(43476),s=e.i(46932);let i=(0,e.i(75254).default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);var r=e.i(15288),n=e.i(71645);function a({title:e,youtubeUrl:a,description:o}){let[l,c]=(0,n.useState)(!1),d=function(e){for(let t of[/youtu\.be\/([^?&]+)/,/youtube\.com\/watch\?v=([^&]+)/,/youtube\.com\/embed\/([^?&]+)/]){let s=e.match(t);if(s)return s[1]}return null}(a);return d?(0,t.jsx)(s.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},children:(0,t.jsx)(r.Card,{className:"bg-[var(--rechera-beige)] border-none rounded-3xl soft-shadow overflow-hidden hover:soft-shadow-hover transition-all duration-300",children:(0,t.jsxs)(r.CardContent,{className:"p-0",children:[(0,t.jsx)("div",{className:"aspect-video relative",children:l?(0,t.jsx)("iframe",{src:`https://www.youtube.com/embed/${d}?autoplay=1`,title:e,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"w-full h-full"}):(0,t.jsxs)("button",{onClick:()=>c(!0),className:"w-full h-full relative group cursor-pointer",children:[(0,t.jsx)("img",{src:`https://img.youtube.com/vi/${d}/maxresdefault.jpg`,alt:e,className:"w-full h-full object-cover",onError:e=>{e.target.src=`https://img.youtube.com/vi/${d}/hqdefault.jpg`}}),(0,t.jsx)("div",{className:"absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center",children:(0,t.jsx)("div",{className:"w-16 h-16 rounded-full bg-[var(--rechera-pink)]/90 group-hover:bg-[var(--rechera-pink)] flex items-center justify-center transition-all group-hover:scale-110",children:(0,t.jsx)(i,{className:"w-7 h-7 text-white ml-1",fill:"white"})})})]})}),(0,t.jsxs)("div",{className:"p-5",children:[(0,t.jsx)("h3",{className:"font-medium text-[var(--rechera-text)]",children:e}),o&&(0,t.jsx)("p",{className:"text-sm text-[var(--rechera-text-muted)] mt-2",children:o})]})]})})}):null}e.s(["default",()=>a],35591)},6859,e=>{"use strict";let t=[{slug:"high-value",title:"高単価物販",description:"高単価商品を扱う物販ビジネスの基礎から実践までを学びます。",content:`
# 高単価物販コース

高単価商品を扱う物販ビジネスの基礎から実践までを体系的に学べるコースです。

## このコースで学べること

- 高単価商品の選び方と仕入れ先の見つけ方
- 利益率を最大化する価格設定
- 効果的な販売チャネルの選択
- 顧客対応とリピーター獲得の方法

## カリキュラム

1. **高単価物販の基礎知識**
   - 高単価物販とは何か
   - メリット・デメリットの理解
   - 成功事例の紹介

2. **商品選定と仕入れ**
   - 売れる商品の見つけ方
   - 仕入れ先のリサーチ方法
   - 交渉のポイント

3. **販売戦略**
   - 価格設定の考え方
   - 商品ページの作成
   - 集客方法

4. **実践ワーク**
   - 実際に商品を仕入れて販売
   - 振り返りと改善
    `,category:"sales"},{slug:"mnp",title:"MNP",description:"携帯乗り換え（MNP）ビジネスの仕組みと実践方法を学びます。",content:`
# MNPコース

携帯乗り換え（MNP）ビジネスの仕組みと実践方法を学べるコースです。

## このコースで学べること

- MNPビジネスの基本的な仕組み
- 各キャリアの特徴と比較
- 効率的な案件獲得方法
- コンプライアンスの重要性

## カリキュラム

1. **MNPの基礎**
2. **キャリア別の特徴**
3. **実践的なアプローチ**
4. **トラブル対応**
    `,category:"sales"},{slug:"internet",title:"光回線乗り換え",description:"光回線の乗り換えビジネスについて詳しく解説します。",content:`
# 光回線乗り換えコース

光回線の乗り換えビジネスについて詳しく学べるコースです。

## このコースで学べること

- 光回線ビジネスの市場動向
- 各回線サービスの特徴
- 顧客へのアプローチ方法
- 契約獲得のコツ
    `,category:"sales"},{slug:"iphone",title:"iPhone",description:"iPhone関連のビジネス手法について学びます。",content:`
# iPhoneコース

iPhone関連のビジネス手法を学べるコースです。

## このコースで学べること

- iPhone市場の理解
- 仕入れと販売のノウハウ
- 付加価値の付け方
    `,category:"sales"},{slug:"note-summary",title:"物販情報noteまとめ",description:"物販に関する有益な情報をまとめて提供します。",content:`
# 物販情報noteまとめ

物販に関する有益な情報をまとめたリソース集です。

## 内容

- 物販の最新トレンド
- 成功者のインタビュー
- おすすめツール紹介
- よくある質問と回答
    `,category:"sales"}],s=[{slug:"design",title:"WEBデザイン",description:"WEBデザインの基礎からトレンドまでを学びます。",content:`
# WEBデザインコース

WEBデザインの基礎から最新トレンドまでを学べるコースです。

## このコースで学べること

- デザインの基本原則
- カラーとタイポグラフィ
- レイアウトの考え方
- 実践的なデザインツールの使い方
    `,category:"web-sns"},{slug:"sns-marketing",title:"SNSマーケティング",description:"SNSを活用したマーケティング戦略を学びます。",content:`
# SNSマーケティングコース

SNSを活用した効果的なマーケティング戦略を学べるコースです。

## このコースで学べること

- 各SNSプラットフォームの特徴
- コンテンツ戦略の立て方
- エンゲージメントを高める方法
- 分析と改善のサイクル
    `,category:"web-sns"},{slug:"marketing-basics",title:"マーケティングとは",description:"マーケティングの基本概念と重要性を解説します。",content:`
# マーケティングとは

マーケティングの基本概念と重要性を学べるコースです。

## このコースで学べること

- マーケティングの定義と歴史
- 4Pと4Cの考え方
- ターゲティングとポジショニング
- デジタルマーケティングの基礎
    `,category:"web-sns"},{slug:"why-instagram",title:"インスタを使うべき理由",description:"なぜ今インスタグラムが重要なのかを解説します。",content:`
# インスタを使うべき理由

インスタグラムがビジネスに重要な理由を学べるコースです。

## このコースで学べること

- インスタグラムの市場規模と成長
- ユーザー層の特徴
- ビジネス活用のメリット
- 他SNSとの比較
    `,category:"web-sns"},{slug:"account-setup",title:"初期アカウント設定方法",description:"インスタグラムアカウントの効果的な初期設定を学びます。",content:`
# 初期アカウント設定方法

インスタグラムアカウントの効果的な初期設定を学べるコースです。

## このコースで学べること

- ビジネスアカウントへの切り替え
- プロフィール写真の選び方
- 自己紹介文の書き方
- 連絡先情報の設定
    `,category:"web-sns"},{slug:"profile",title:"永久不変のフォローされるプロフィール",description:"フォロワーを獲得するプロフィールの作り方を学びます。",content:`
# 永久不変のフォローされるプロフィール

フォロワーを獲得するための魅力的なプロフィールの作り方を学べるコースです。

## このコースで学べること

- プロフィールの重要性
- 効果的なプロフィール写真
- 魅力的な自己紹介文の書き方
- CTAの設置方法
    `,category:"web-sns"},{slug:"concept-design",title:"アカウントコンセプト設計ワーク",description:"アカウントのコンセプトを設計するワークショップ形式のコースです。",content:`
# アカウントコンセプト設計ワーク

アカウントのコンセプトを設計するワークショップ形式のコースです。

## このコースで学べること

- コンセプトの重要性
- 自分の強みの発見
- ターゲット設定
- 差別化ポイントの明確化
    `,category:"web-sns"},{slug:"target-setting",title:"ターゲット設定３つの原則",description:"効果的なターゲット設定の3つの原則を学びます。",content:`
# ターゲット設定３つの原則

効果的なターゲット設定の3つの原則を学べるコースです。

## このコースで学べること

- ペルソナの作成方法
- ニーズの分析
- 市場規模の把握
- ターゲットの絞り込み
    `,category:"web-sns"},{slug:"features",title:"基礎・各機能の目的と活用方法",description:"インスタグラムの各機能の目的と活用方法を解説します。",content:`
# 基礎・各機能の目的と活用方法

インスタグラムの各機能の目的と効果的な活用方法を学べるコースです。

## このコースで学べること

- フィード投稿の活用
- ストーリーズの使い方
- リールの作成方法
- IGTVとライブ配信
    `,category:"web-sns"},{slug:"insights",title:"インサイトの見方と分析",description:"インスタグラムインサイトの見方と分析方法を学びます。",content:`
# インサイトの見方と分析

インスタグラムインサイトの見方と分析方法を学べるコースです。

## このコースで学べること

- インサイトの基本項目
- リーチとインプレッション
- エンゲージメント率の計算
- データに基づく改善
    `,category:"web-sns"},{slug:"hashtags",title:"ハッシュタグ完全攻略",description:"効果的なハッシュタグ戦略を完全解説します。",content:`
# ハッシュタグ完全攻略

効果的なハッシュタグ戦略を学べるコースです。

## このコースで学べること

- ハッシュタグの役割
- 人気タグと関連タグの使い分け
- オリジナルタグの作成
- タグ戦略の最適化
    `,category:"web-sns"},{slug:"layout",title:"基本のレイアウト",description:"インスタグラムの基本的なレイアウトパターンを学びます。",content:`
# 基本のレイアウト

インスタグラムの基本的なレイアウトパターンを学べるコースです。

## このコースで学べること

- グリッドレイアウトの種類
- 統一感のある世界観の作り方
- カラーパレットの選び方
- 投稿の配置パターン
    `,category:"web-sns"},{slug:"post-checklist",title:"投稿チェックリスト",description:"投稿前に確認すべきチェックリストを提供します。",content:`
# 投稿チェックリスト

投稿前に確認すべきチェックリストを学べるコースです。

## チェック項目

- [ ] 画像のクオリティは十分か
- [ ] キャプションは適切か
- [ ] ハッシュタグは最適化されているか
- [ ] CTAは含まれているか
- [ ] 投稿時間は最適か
    `,category:"web-sns"},{slug:"content-management",title:"投稿コンテンツ管理シート",description:"コンテンツを効率的に管理するためのシートを提供します。",content:`
# 投稿コンテンツ管理シート

コンテンツを効率的に管理するためのシートの使い方を学べるコースです。

## このコースで学べること

- コンテンツカレンダーの作成
- 投稿スケジュールの管理
- パフォーマンス記録
- 改善点の追跡
    `,category:"web-sns"},{slug:"killer-words",title:"インスタ運用で使えるキラーワード",description:"エンゲージメントを高めるキラーワードを紹介します。",content:`
# インスタ運用で使えるキラーワード

エンゲージメントを高めるキラーワードを学べるコースです。

## このコースで学べること

- 注目を集めるフック
- 行動を促すCTA
- 共感を生むフレーズ
- シェアされやすい言葉
    `,category:"web-sns"},{slug:"writing",title:"ライティング・言語化",description:"魅力的な文章を書くためのライティングスキルを学びます。",content:`
# ライティング・言語化

魅力的な文章を書くためのライティングスキルを学べるコースです。

## このコースで学べること

- 読まれるキャプションの構造
- ストーリーテリングの技術
- 言語化の練習方法
- コピーライティングの基礎
    `,category:"web-sns"},{slug:"stories",title:"差がつく！ストーリー運用",description:"ストーリーズを効果的に活用する方法を学びます。",content:`
# 差がつく！ストーリー運用

ストーリーズを効果的に活用する方法を学べるコースです。

## このコースで学べること

- ストーリーズの特性理解
- エンゲージメント向上テクニック
- ハイライトの活用
- ストーリーズ専用コンテンツの作成
    `,category:"web-sns"},{slug:"line-official",title:"公式ライン作成方法",description:"公式LINEアカウントの作成と活用方法を学びます。",content:`
# 公式ライン作成方法

公式LINEアカウントの作成と活用方法を学べるコースです。

## このコースで学べること

- LINE公式アカウントの開設
- 基本設定の方法
- メッセージ配信のコツ
- リッチメニューの作成
    `,category:"web-sns"}],i=[{slug:"sales-points",title:"売れる営業のポイント",description:"成約率を上げるための営業テクニックを学びます。",content:`
# 売れる営業のポイント

成約率を上げるための営業テクニックを学べるコースです。

## このコースで学べること

- 営業の基本マインド
- ヒアリングの技術
- 提案の組み立て方
- クロージングのコツ
    `,category:"business"},{slug:"consultation",title:"個別相談の流れマニュアル",description:"個別相談を効果的に進めるためのマニュアルです。",content:`
# 個別相談の流れマニュアル

個別相談を効果的に進めるためのマニュアルです。

## このコースで学べること

- 事前準備の方法
- アイスブレイクの仕方
- ニーズの引き出し方
- 提案からクロージングまで
    `,category:"business"},{slug:"mindmap",title:"エデュケーター公開用マインドマップ",description:"教育者向けのマインドマップを提供します。",content:`
# エデュケーター公開用マインドマップ

教育者向けのマインドマップを学べるコースです。

## 内容

- ビジネス全体の構造
- スキルツリー
- 学習ロードマップ
    `,category:"business"},{slug:"zoom-archive",title:"ZOOMアーカイブ",description:"過去のZOOMセミナーのアーカイブを視聴できます。",content:`
# ZOOMアーカイブ

過去のZOOMセミナーのアーカイブを視聴できるコースです。

## 視聴可能なコンテンツ

- 過去のセミナー録画
- Q&Aセッション
- ゲストスピーカー講演
    `,category:"business"},{slug:"discord",title:"Discord使用方法",description:"コミュニティDiscordの使用方法を解説します。",content:`
# Discord使用方法

コミュニティDiscordの使用方法を学べるコースです。

## このコースで学べること

- Discordの基本操作
- チャンネルの使い分け
- コミュニティルール
- 効果的な質問の仕方
    `,category:"business"}],r=[{slug:"sales",name:"物販関連",description:"高単価物販、MNP、光回線乗り換えなど、物販ビジネスのスキルを習得できます。",courses:t},{slug:"web-sns",name:"Web/SNS関連",description:"SNSマーケティング、インスタグラム運用など、オンラインでの発信力を高めるスキルを習得できます。",courses:s},{slug:"business",name:"営業/その他",description:"売れる営業のポイント、個別相談の流れなど、ビジネスの基盤となるスキルを習得できます。",courses:i}];e.s(["businessCourses",0,i,"courseCategories",0,r,"salesCourses",0,t,"webSnsCourses",0,s])},13394,e=>{"use strict";var t=e.i(43476),s=e.i(22016),i=e.i(46932),r=e.i(71689),n=e.i(10980),a=e.i(15288),o=e.i(6859),l=e.i(35591);let c={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},d={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5,ease:"easeOut"}}},u=[{title:"講師加藤の自己紹介",youtubeUrl:"https://youtu.be/Q6Vns2_TnU0",description:"物販講師の自己紹介と経歴について"},{title:"物販コンテンツ概要",youtubeUrl:"https://youtu.be/YlwfG_tamv4",description:"物販コンテンツの全体像と学習の進め方"},{title:"物販情報",youtubeUrl:"https://youtu.be/vPw4JKmxNcQ",description:"最新の物販情報とトレンド"},{title:"利益管理表の使い方",youtubeUrl:"https://youtu.be/PVlti__xiP4",description:"利益を管理するためのスプレッドシートの使い方"}];function h(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("section",{className:"py-20 lg:py-32 bg-[var(--rechera-pink)]/20",children:(0,t.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-3xl",children:[(0,t.jsxs)(s.default,{href:"/courses",className:"inline-flex items-center text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] mb-6 transition-colors",children:[(0,t.jsx)(r.ArrowLeft,{className:"mr-1 h-4 w-4"}),"コース一覧に戻る"]}),(0,t.jsx)("span",{className:"inline-block px-4 py-1.5 rounded-full bg-[var(--rechera-pink)]/40 text-sm font-medium text-[var(--rechera-text)] mb-6",children:"Sales"}),(0,t.jsx)("h1",{className:"text-[var(--rechera-text)] mb-6",children:"物販関連"}),(0,t.jsx)("p",{className:"text-lg text-[var(--rechera-text-muted)] leading-relaxed",children:"高単価物販、MNP、光回線乗り換えなど、物販ビジネスのスキルを習得できます。 実践的なノウハウを学び、副業や本業として物販ビジネスを始めましょう。"})]})})}),(0,t.jsx)("section",{className:"py-16 lg:py-24 bg-[var(--rechera-beige)]",children:(0,t.jsxs)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[(0,t.jsx)("h2",{className:"text-2xl font-semibold text-[var(--rechera-text)] mb-4",children:"まずはこちらから"}),(0,t.jsx)("p",{className:"text-[var(--rechera-text-muted)]",children:"物販を始める前に、まずこちらの動画をご覧ください"})]}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto",children:u.map((e,s)=>(0,t.jsx)(l.default,{title:e.title,youtubeUrl:e.youtubeUrl,description:e.description},s))}),(0,t.jsx)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.3},className:"mt-8 text-center",children:(0,t.jsxs)("a",{href:"https://docs.google.com/spreadsheets/d/1ren3LDqIAcSIz42thuVoaoHU9yd8H7dhFKK_50pxToM/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-3 bg-[var(--rechera-pink)]/30 hover:bg-[var(--rechera-pink)]/50 rounded-2xl text-[var(--rechera-text)] font-medium transition-colors",children:[(0,t.jsxs)("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"currentColor",children:[(0,t.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"}),(0,t.jsx)("path",{d:"M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z"})]}),"利益管理表（個人用）をコピーして使用"]})})]})}),(0,t.jsx)("section",{className:"py-20 lg:py-24 bg-[var(--rechera-cream)]",children:(0,t.jsxs)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[(0,t.jsxs)(i.motion.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},className:"text-center mb-12",children:[(0,t.jsx)("h2",{className:"text-2xl font-semibold text-[var(--rechera-text)] mb-4",children:"コース一覧"}),(0,t.jsx)("p",{className:"text-[var(--rechera-text-muted)]",children:"学びたいコースを選択してください"})]}),(0,t.jsx)(i.motion.div,{variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0},className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:o.salesCourses.map(e=>(0,t.jsx)(i.motion.div,{variants:d,children:(0,t.jsx)(s.default,{href:`/courses/sales/${e.slug}`,children:(0,t.jsx)(a.Card,{className:"h-full bg-white border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300 hover:translate-y-[-4px] cursor-pointer",children:(0,t.jsxs)(a.CardContent,{className:"p-6",children:[(0,t.jsx)("div",{className:"w-12 h-12 rounded-2xl bg-[var(--rechera-pink)]/20 flex items-center justify-center mb-4",children:(0,t.jsx)(n.BookOpen,{className:"w-6 h-6 text-[var(--rechera-text)]"})}),(0,t.jsx)("h3",{className:"text-lg font-semibold text-[var(--rechera-text)] mb-2",children:e.title}),(0,t.jsx)("p",{className:"text-sm text-[var(--rechera-text-muted)] line-clamp-3",children:e.description})]})})})},e.slug))})]})})]})}e.s(["default",()=>h])}]);