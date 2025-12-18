export type Course = {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: "sales" | "web-sns" | "business";
};

export type CourseCategory = {
  slug: string;
  name: string;
  description: string;
  courses: Course[];
};

export const salesCourses: Course[] = [
  {
    slug: "high-value",
    title: "高単価物販",
    description: "高単価商品を扱う物販ビジネスの基礎から実践までを学びます。",
    content: `
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
    `,
    category: "sales",
  },
  {
    slug: "mnp",
    title: "MNP",
    description: "携帯乗り換え（MNP）ビジネスの仕組みと実践方法を学びます。",
    content: `
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
    `,
    category: "sales",
  },
  {
    slug: "internet",
    title: "光回線乗り換え",
    description: "光回線の乗り換えビジネスについて詳しく解説します。",
    content: `
# 光回線乗り換えコース

光回線の乗り換えビジネスについて詳しく学べるコースです。

## このコースで学べること

- 光回線ビジネスの市場動向
- 各回線サービスの特徴
- 顧客へのアプローチ方法
- 契約獲得のコツ
    `,
    category: "sales",
  },
  {
    slug: "iphone",
    title: "iPhone",
    description: "iPhone関連のビジネス手法について学びます。",
    content: `
# iPhoneコース

iPhone関連のビジネス手法を学べるコースです。

## このコースで学べること

- iPhone市場の理解
- 仕入れと販売のノウハウ
- 付加価値の付け方
    `,
    category: "sales",
  },
  {
    slug: "note-summary",
    title: "物販情報noteまとめ",
    description: "物販に関する有益な情報をまとめて提供します。",
    content: `
# 物販情報noteまとめ

物販に関する有益な情報をまとめたリソース集です。

## 内容

- 物販の最新トレンド
- 成功者のインタビュー
- おすすめツール紹介
- よくある質問と回答
    `,
    category: "sales",
  },
];

export const webSnsCourses: Course[] = [
  {
    slug: "design",
    title: "WEBデザイン",
    description: "WEBデザインの基礎からトレンドまでを学びます。",
    content: `
# WEBデザインコース

WEBデザインの基礎から最新トレンドまでを学べるコースです。

## このコースで学べること

- デザインの基本原則
- カラーとタイポグラフィ
- レイアウトの考え方
- 実践的なデザインツールの使い方
    `,
    category: "web-sns",
  },
  {
    slug: "sns-marketing",
    title: "SNSマーケティング",
    description: "SNSを活用したマーケティング戦略を学びます。",
    content: `
# SNSマーケティングコース

SNSを活用した効果的なマーケティング戦略を学べるコースです。

## このコースで学べること

- 各SNSプラットフォームの特徴
- コンテンツ戦略の立て方
- エンゲージメントを高める方法
- 分析と改善のサイクル
    `,
    category: "web-sns",
  },
  {
    slug: "marketing-basics",
    title: "マーケティングとは",
    description: "マーケティングの基本概念と重要性を解説します。",
    content: `
# マーケティングとは

マーケティングの基本概念と重要性を学べるコースです。

## このコースで学べること

- マーケティングの定義と歴史
- 4Pと4Cの考え方
- ターゲティングとポジショニング
- デジタルマーケティングの基礎
    `,
    category: "web-sns",
  },
  {
    slug: "why-instagram",
    title: "インスタを使うべき理由",
    description: "なぜ今インスタグラムが重要なのかを解説します。",
    content: `
# インスタを使うべき理由

インスタグラムがビジネスに重要な理由を学べるコースです。

## このコースで学べること

- インスタグラムの市場規模と成長
- ユーザー層の特徴
- ビジネス活用のメリット
- 他SNSとの比較
    `,
    category: "web-sns",
  },
  {
    slug: "account-setup",
    title: "初期アカウント設定方法",
    description: "インスタグラムアカウントの効果的な初期設定を学びます。",
    content: `
# 初期アカウント設定方法

インスタグラムアカウントの効果的な初期設定を学べるコースです。

## このコースで学べること

- ビジネスアカウントへの切り替え
- プロフィール写真の選び方
- 自己紹介文の書き方
- 連絡先情報の設定
    `,
    category: "web-sns",
  },
  {
    slug: "profile",
    title: "永久不変のフォローされるプロフィール",
    description: "フォロワーを獲得するプロフィールの作り方を学びます。",
    content: `
# 永久不変のフォローされるプロフィール

フォロワーを獲得するための魅力的なプロフィールの作り方を学べるコースです。

## このコースで学べること

- プロフィールの重要性
- 効果的なプロフィール写真
- 魅力的な自己紹介文の書き方
- CTAの設置方法
    `,
    category: "web-sns",
  },
  {
    slug: "concept-design",
    title: "アカウントコンセプト設計ワーク",
    description: "アカウントのコンセプトを設計するワークショップ形式のコースです。",
    content: `
# アカウントコンセプト設計ワーク

アカウントのコンセプトを設計するワークショップ形式のコースです。

## このコースで学べること

- コンセプトの重要性
- 自分の強みの発見
- ターゲット設定
- 差別化ポイントの明確化
    `,
    category: "web-sns",
  },
  {
    slug: "target-setting",
    title: "ターゲット設定３つの原則",
    description: "効果的なターゲット設定の3つの原則を学びます。",
    content: `
# ターゲット設定３つの原則

効果的なターゲット設定の3つの原則を学べるコースです。

## このコースで学べること

- ペルソナの作成方法
- ニーズの分析
- 市場規模の把握
- ターゲットの絞り込み
    `,
    category: "web-sns",
  },
  {
    slug: "features",
    title: "基礎・各機能の目的と活用方法",
    description: "インスタグラムの各機能の目的と活用方法を解説します。",
    content: `
# 基礎・各機能の目的と活用方法

インスタグラムの各機能の目的と効果的な活用方法を学べるコースです。

## このコースで学べること

- フィード投稿の活用
- ストーリーズの使い方
- リールの作成方法
- IGTVとライブ配信
    `,
    category: "web-sns",
  },
  {
    slug: "insights",
    title: "インサイトの見方と分析",
    description: "インスタグラムインサイトの見方と分析方法を学びます。",
    content: `
# インサイトの見方と分析

インスタグラムインサイトの見方と分析方法を学べるコースです。

## このコースで学べること

- インサイトの基本項目
- リーチとインプレッション
- エンゲージメント率の計算
- データに基づく改善
    `,
    category: "web-sns",
  },
  {
    slug: "hashtags",
    title: "ハッシュタグ完全攻略",
    description: "効果的なハッシュタグ戦略を完全解説します。",
    content: `
# ハッシュタグ完全攻略

効果的なハッシュタグ戦略を学べるコースです。

## このコースで学べること

- ハッシュタグの役割
- 人気タグと関連タグの使い分け
- オリジナルタグの作成
- タグ戦略の最適化
    `,
    category: "web-sns",
  },
  {
    slug: "layout",
    title: "基本のレイアウト",
    description: "インスタグラムの基本的なレイアウトパターンを学びます。",
    content: `
# 基本のレイアウト

インスタグラムの基本的なレイアウトパターンを学べるコースです。

## このコースで学べること

- グリッドレイアウトの種類
- 統一感のある世界観の作り方
- カラーパレットの選び方
- 投稿の配置パターン
    `,
    category: "web-sns",
  },
  {
    slug: "post-checklist",
    title: "投稿チェックリスト",
    description: "投稿前に確認すべきチェックリストを提供します。",
    content: `
# 投稿チェックリスト

投稿前に確認すべきチェックリストを学べるコースです。

## チェック項目

- [ ] 画像のクオリティは十分か
- [ ] キャプションは適切か
- [ ] ハッシュタグは最適化されているか
- [ ] CTAは含まれているか
- [ ] 投稿時間は最適か
    `,
    category: "web-sns",
  },
  {
    slug: "content-management",
    title: "投稿コンテンツ管理シート",
    description: "コンテンツを効率的に管理するためのシートを提供します。",
    content: `
# 投稿コンテンツ管理シート

コンテンツを効率的に管理するためのシートの使い方を学べるコースです。

## このコースで学べること

- コンテンツカレンダーの作成
- 投稿スケジュールの管理
- パフォーマンス記録
- 改善点の追跡
    `,
    category: "web-sns",
  },
  {
    slug: "killer-words",
    title: "インスタ運用で使えるキラーワード",
    description: "エンゲージメントを高めるキラーワードを紹介します。",
    content: `
# インスタ運用で使えるキラーワード

エンゲージメントを高めるキラーワードを学べるコースです。

## このコースで学べること

- 注目を集めるフック
- 行動を促すCTA
- 共感を生むフレーズ
- シェアされやすい言葉
    `,
    category: "web-sns",
  },
  {
    slug: "writing",
    title: "ライティング・言語化",
    description: "魅力的な文章を書くためのライティングスキルを学びます。",
    content: `
# ライティング・言語化

魅力的な文章を書くためのライティングスキルを学べるコースです。

## このコースで学べること

- 読まれるキャプションの構造
- ストーリーテリングの技術
- 言語化の練習方法
- コピーライティングの基礎
    `,
    category: "web-sns",
  },
  {
    slug: "stories",
    title: "差がつく！ストーリー運用",
    description: "ストーリーズを効果的に活用する方法を学びます。",
    content: `
# 差がつく！ストーリー運用

ストーリーズを効果的に活用する方法を学べるコースです。

## このコースで学べること

- ストーリーズの特性理解
- エンゲージメント向上テクニック
- ハイライトの活用
- ストーリーズ専用コンテンツの作成
    `,
    category: "web-sns",
  },
  {
    slug: "line-official",
    title: "公式ライン作成方法",
    description: "公式LINEアカウントの作成と活用方法を学びます。",
    content: `
# 公式ライン作成方法

公式LINEアカウントの作成と活用方法を学べるコースです。

## このコースで学べること

- LINE公式アカウントの開設
- 基本設定の方法
- メッセージ配信のコツ
- リッチメニューの作成
    `,
    category: "web-sns",
  },
];

export const businessCourses: Course[] = [
  {
    slug: "sales-points",
    title: "売れる営業のポイント",
    description: "成約率を上げるための営業テクニックを学びます。",
    content: `
# 売れる営業のポイント

成約率を上げるための営業テクニックを学べるコースです。

## このコースで学べること

- 営業の基本マインド
- ヒアリングの技術
- 提案の組み立て方
- クロージングのコツ
    `,
    category: "business",
  },
  {
    slug: "consultation",
    title: "個別相談の流れマニュアル",
    description: "個別相談を効果的に進めるためのマニュアルです。",
    content: `
# 個別相談の流れマニュアル

個別相談を効果的に進めるためのマニュアルです。

## このコースで学べること

- 事前準備の方法
- アイスブレイクの仕方
- ニーズの引き出し方
- 提案からクロージングまで
    `,
    category: "business",
  },
  {
    slug: "mindmap",
    title: "エデュケーター公開用マインドマップ",
    description: "教育者向けのマインドマップを提供します。",
    content: `
# エデュケーター公開用マインドマップ

教育者向けのマインドマップを学べるコースです。

## 内容

- ビジネス全体の構造
- スキルツリー
- 学習ロードマップ
    `,
    category: "business",
  },
  {
    slug: "zoom-archive",
    title: "ZOOMアーカイブ",
    description: "過去のZOOMセミナーのアーカイブを視聴できます。",
    content: `
# ZOOMアーカイブ

過去のZOOMセミナーのアーカイブを視聴できるコースです。

## 視聴可能なコンテンツ

- 過去のセミナー録画
- Q&Aセッション
- ゲストスピーカー講演
    `,
    category: "business",
  },
  {
    slug: "discord",
    title: "Discord使用方法",
    description: "コミュニティDiscordの使用方法を解説します。",
    content: `
# Discord使用方法

コミュニティDiscordの使用方法を学べるコースです。

## このコースで学べること

- Discordの基本操作
- チャンネルの使い分け
- コミュニティルール
- 効果的な質問の仕方
    `,
    category: "business",
  },
];

export const courseCategories: CourseCategory[] = [
  {
    slug: "sales",
    name: "物販関連",
    description: "高単価物販、MNP、光回線乗り換えなど、物販ビジネスのスキルを習得できます。",
    courses: salesCourses,
  },
  {
    slug: "web-sns",
    name: "Web/SNS関連",
    description: "SNSマーケティング、インスタグラム運用など、オンラインでの発信力を高めるスキルを習得できます。",
    courses: webSnsCourses,
  },
  {
    slug: "business",
    name: "営業/その他",
    description: "売れる営業のポイント、個別相談の流れなど、ビジネスの基盤となるスキルを習得できます。",
    courses: businessCourses,
  },
];

export function getCourseBySlug(
  category: string,
  slug: string
): Course | undefined {
  const categoryData = courseCategories.find((c) => c.slug === category);
  if (!categoryData) return undefined;
  return categoryData.courses.find((course) => course.slug === slug);
}

export function getCoursesByCategory(category: string): Course[] {
  const categoryData = courseCategories.find((c) => c.slug === category);
  return categoryData?.courses || [];
}

export function getAllCourses(): Course[] {
  return courseCategories.flatMap((category) => category.courses);
}
