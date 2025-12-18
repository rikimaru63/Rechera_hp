# Rechera MVP 開発マスタープロンプト

このドキュメントは、AI開発者（Claude、ChatGPT等）がRecheraのMVPを構築するための完全な指示書です。このプロンプトを開発環境に投入することで、要件通りのウェブサイトを構築できます。

---

## プロジェクト概要

**プロジェクト名:** Rechera（リシェラ）

**目的:** 女性向けSNS運用スクールのウェブサイトを構築し、洗練された価値ある知識を提供する居心地の良いオンライン学習プラットフォームを実現する。

**ターゲットユーザー:** 20代半ば〜30代後半の子育て世代の女性。在宅ワーク、フリーランス、起業家志向。誠実さと上品さを重視し、安心感のある学習環境を求めている。

**ブランドコンセプト:**
- 洗練された価値ある知識を付ける
- 高単価で自由な時間、お金のゆとりを作る
- 経済的・精神的に自立してあなたにとって最高に愛おしい人生を手に入れる
- 母でも妻でもなく一人の人間として「個」が輝ける居場所（アトリエ）

**Rechera Pallet:** 正解は一つじゃない。それぞれの色を混ぜて、自分だけの働き方を描こう🎨

---

## 技術スタック

### フロントエンド
- **フレームワーク:** Next.js 14+ (App Router)
- **スタイリング:** Tailwind CSS 4
- **UI コンポーネント:** shadcn/ui
- **フォント:** Noto Sans JP + Poppins (Google Fonts)
- **アニメーション:** Framer Motion または GSAP

### バックエンド（CMS）
- **CMS:** Strapi 4+
- **データベース:** PostgreSQL 15+
- **認証:** Strapi 標準認証 + ロールベースアクセス制御

### デプロイメント
- **コンテナ:** Docker + Docker Compose
- **オーケストレーション:** Coolify
- **画像管理:** AWS S3 または Cloudinary

---

## デザイン仕様

### カラーパレット（クライアント確定版）

以下のカラーコードを厳密に使用してください。

| 役割 | カラーコード | RGB | 用途 |
|:---|:---|:---|:---|
| **くすみピンク（プライマリ）** | #E8CCCC | rgb(232, 204, 204) | CTA、アクセント、ホバー状態 |
| **淡いベージュ（プライマリ）** | #F4E7E7 | rgb(244, 231, 231) | セクション背景、カード背景 |
| **グレージュ（セカンダリ）** | #CCCACA | rgb(204, 202, 202) | テキスト補助、ボーダー |
| **くすみブルー（セカンダリ）** | #CAD9DA | rgb(202, 217, 218) | アクセント、セクション背景 |
| **クリーム色（ベース）** | #FFF8F0 | rgb(255, 248, 240) | ページ全体の背景 |
| **テキスト（本文）** | #333333 | rgb(51, 51, 51) | 本文テキスト |
| **テキスト（補助）** | #666666 | rgb(102, 102, 102) | キャプション、補助情報 |

### タイポグラフィ

**Fluid Typography** を使用し、あらゆる画面サイズで最適な文字サイズを実現してください。

```css
h1 {
  font-size: clamp(2rem, 6vw, 3.5rem);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -0.01em;
}

h3 {
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  line-height: 1.4;
  font-weight: 600;
}

p {
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  line-height: 1.8;
  letter-spacing: 0.01em;
}
```

### UI コンポーネントのデザイン方針

**丸みのあるUI:** すべてのボタン、カード、入力フォームに `border-radius: 16px` 以上を適用してください。

**ふんわりとした立体感:** 微妙なシャドウを使用し、過度な影を避けてください。

```css
/* 基本シャドウ */
box-shadow: 0 2px 8px rgba(51, 51, 68, 0.08);

/* ホバー時シャドウ */
box-shadow: 0 8px 24px rgba(51, 51, 68, 0.12);
```

**スムーズなトランジション:** すべてのインタラクティブ要素に `transition: all 0.3s ease` を適用してください。

---

## 背景エフェクト実装

### グラデーション背景アニメーション

ファーストビュー（Hero Section）に、以下のグラデーション背景を実装してください。

```css
.gradient-background {
  background: linear-gradient(
    135deg,
    #FFF8F0 0%,
    #F4E7E7 25%,
    #E8CCCC 50%,
    #CAD9DA 75%,
    #FFF8F0 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### Blob SVG アニメーション

グラデーション背景の上に、以下の3つのBlobアニメーションを重ねてください。

```html
<svg viewBox="0 0 1200 600" className="absolute inset-0 w-full h-full">
  <defs>
    <filter id="blur">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
    </filter>
  </defs>
  
  <!-- Blob 1: くすみピンク -->
  <path class="blob blob-1"
    d="M 300,300 Q 400,200 500,300 T 700,300 Q 600,400 500,500 T 300,300 Z"
    fill="#E8CCCC" opacity="0.4" filter="url(#blur)" />
  
  <!-- Blob 2: くすみブルー -->
  <path class="blob blob-2"
    d="M 800,200 Q 900,150 1000,200 T 1100,300 Q 1000,400 900,450 T 800,400 Z"
    fill="#CAD9DA" opacity="0.35" filter="url(#blur)" />
  
  <!-- Blob 3: 淡いベージュ -->
  <path class="blob blob-3"
    d="M 100,400 Q 200,350 300,400 T 500,400 Q 400,500 300,550 T 100,400 Z"
    fill="#F4E7E7" opacity="0.5" filter="url(#blur)" />
</svg>
```

```css
@keyframes blobAnimation {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -30px) scale(1.1); }
  50% { transform: translate(-10px, 20px) scale(0.95); }
  75% { transform: translate(30px, 10px) scale(1.05); }
}

.blob {
  animation: blobAnimation 8s ease-in-out infinite;
  will-change: transform;
}

.blob-1 { animation-delay: 0s; }
.blob-2 { animation-delay: 2s; }
.blob-3 { animation-delay: 4s; }
```

---

## サイト構成

### サイトマップ

```
/
├── / (ホーム - 講師紹介中心)
├── /about (はじめに)
├── /courses (コース一覧)
│   ├── /courses/sales (物販関連)
│   │   ├── /courses/sales/high-value (高単価物販)
│   │   ├── /courses/sales/mnp (MNP)
│   │   ├── /courses/sales/internet (光回線乗り換え)
│   │   ├── /courses/sales/iphone (iPhone)
│   │   └── /courses/sales/note-summary (物販情報noteまとめ)
│   ├── /courses/web-sns (Web/SNS関連)
│   │   ├── /courses/web-sns/design (WEBデザイン)
│   │   ├── /courses/web-sns/sns-marketing (SNSマーケティング)
│   │   ├── /courses/web-sns/marketing-basics (マーケティングとは)
│   │   ├── /courses/web-sns/why-instagram (インスタを使うべき理由)
│   │   ├── /courses/web-sns/account-setup (初期アカウント設定方法)
│   │   ├── /courses/web-sns/profile (永久不変のフォローされるプロフィール)
│   │   ├── /courses/web-sns/concept-design (アカウントコンセプト設計ワーク)
│   │   ├── /courses/web-sns/target-setting (ターゲット設定３つの原則)
│   │   ├── /courses/web-sns/features (基礎・各機能の目的と活用方法)
│   │   ├── /courses/web-sns/insights (インサイトの見方と分析)
│   │   ├── /courses/web-sns/hashtags (ハッシュタグ完全攻略)
│   │   ├── /courses/web-sns/layout (基本のレイアウト)
│   │   ├── /courses/web-sns/post-checklist (投稿チェックリスト)
│   │   ├── /courses/web-sns/content-management (投稿コンテンツ管理シート)
│   │   ├── /courses/web-sns/killer-words (インスタ運用で使えるキラーワード)
│   │   ├── /courses/web-sns/writing (ライティング・言語化)
│   │   ├── /courses/web-sns/stories (差がつく！ストーリー運用)
│   │   └── /courses/web-sns/line-official (公式ライン作成方法)
│   └── /courses/business (営業/その他)
│       ├── /courses/business/sales-points (売れる営業のポイント)
│       ├── /courses/business/consultation (個別相談の流れマニュアル)
│       ├── /courses/business/mindmap (エデュケーター公開用マインドマップ)
│       ├── /courses/business/zoom-archive (ZOOMアーカイブ)
│       └── /courses/business/discord (Discord使用方法)
└── /login (ログイン)
```

### ページテンプレート

#### 1. トップページ（/）

**構成:**
1. **ファーストビュー（Hero Section）**
   - グラデーション背景 + Blob アニメーション
   - 中央配置のメインメッセージ
   - CTAボタン（「はじめに」「ログイン」）

2. **Recheraで得られるもの（Features Section）**
   - 3カラムのカードレイアウト
   - アイコン + 見出し + 説明文

3. **講師紹介（Instructor Section）**
   - 講師の写真（クライアント提供画像を使用）
   - プロフィール
   - 実績・メッセージ

4. **CTA Section**
   - 最終行動喚起
   - 「Recheraについて詳しく見る」ボタン

**コンテンツ例:**

```markdown
# ファーストビュー
見出し: 洗練された価値ある知識を付ける
サブテキスト: 正解は一つじゃない。それぞれの色を混ぜて、自分だけの働き方を描こう🎨

# Features
1. 体系的な学び
   物販からWeb/SNSマーケティングまで、幅広いスキルを習得できます

2. 居心地の良いコミュニティ
   アトリエのような安心感のある空間で、仲間とともに成長できます

3. 個が輝く場所
   母でも妻でもなく一人の人間として、あなたらしく輝ける場所です
```

#### 2. はじめにページ（/about）

**構成:**
1. **ページヘッダー**
   - ページタイトル「はじめに」
   - リード文

2. **Recheraの理念**
   - ブランドメッセージ
   - ターゲットペルソナへの共感メッセージ

3. **学べる内容**
   - 物販関連、Web/SNS関連、営業/その他の概要

4. **CTA**
   - 「コース一覧を見る」ボタン

#### 3. コース詳細ページ（/courses/:category/:slug）

**構成:**
1. **ページヘッダー**
   - コースタイトル
   - カテゴリバッジ
   - リード文

2. **メインコンテンツ（2カラム）**
   - 左: コース本文（Markdown対応）
   - 右: サイドバー（関連コース、CTA）

3. **関連コース**
   - 同じカテゴリの他のコース

4. **CTA**
   - 「次のコースへ」ボタン

---

## グローバルナビゲーション

### デスクトップ版

**構成:**
- ロゴ（左）
- メニュー項目（中央）
  - ホーム
  - はじめに
  - 物販関連（ドロップダウン）
  - Web/SNS関連（メガメニュー - 2カラム表示）
  - 営業/その他（ドロップダウン）
- ログイン/ユーザーアイコン（右）

**スタイル:**
- 高さ: 80px
- 背景: クリーム色（#FFF8F0）、半透明
- スクロール時: sticky（追従）
- ホバー時: くすみピンク背景

### モバイル版

**構成:**
- ハンバーガーメニュー
- アコーディオン式のメニュー展開
- スムーズなアニメーション

---

## CMS統合（Strapi）

### データベーススキーマ

#### Course（コース）

| フィールド | 型 | 必須 | 説明 |
|:---|:---|:---|:---|
| title | String | ✓ | コースタイトル |
| slug | String | ✓ | URL用スラッグ（ユニーク） |
| category | Enum | ✓ | カテゴリ（sales, web-sns, business） |
| description | Text | ✓ | コース説明 |
| content | RichText | ✓ | コース本文（Markdown） |
| thumbnail | Media | - | サムネイル画像 |
| order | Number | - | 表示順序 |
| published | Boolean | ✓ | 公開状態 |
| createdAt | DateTime | ✓ | 作成日時 |
| updatedAt | DateTime | ✓ | 更新日時 |

#### User（ユーザー拡張）

Strapiの標準ユーザーモデルに以下のロールを追加してください。

| ロール | 権限 |
|:---|:---|
| **Admin** | 全機能へのアクセス、ユーザー管理、コンテンツの作成・編集・削除 |
| **Editor** | コンテンツの作成・編集・削除（ユーザー管理は不可） |
| **Viewer** | コンテンツの閲覧のみ |

### API エンドポイント

以下のエンドポイントを実装してください。

```
GET    /api/courses              # コース一覧取得
GET    /api/courses/:slug        # コース詳細取得
POST   /api/courses              # コース作成（Admin/Editor）
PUT    /api/courses/:id          # コース更新（Admin/Editor）
DELETE /api/courses/:id          # コース削除（Admin）
GET    /api/courses/category/:category  # カテゴリ別コース一覧
```

---

## Coolify デプロイメント設定

### Docker Compose 設定

以下の `docker-compose.yml` を作成してください。

```yaml
version: '3.8'

services:
  # フロントエンド（Next.js）
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:1337
      - NEXT_PUBLIC_SITE_URL=${SITE_URL}
    depends_on:
      - backend
    restart: unless-stopped

  # バックエンド（Strapi）
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "1337:1337"
    environment:
      - DATABASE_CLIENT=postgres
      - DATABASE_HOST=postgres
      - DATABASE_PORT=5432
      - DATABASE_NAME=rechera
      - DATABASE_USERNAME=postgres
      - DATABASE_PASSWORD=${DB_PASSWORD}
      - JWT_SECRET=${JWT_SECRET}
      - ADMIN_JWT_SECRET=${ADMIN_JWT_SECRET}
    depends_on:
      - postgres
    restart: unless-stopped

  # データベース（PostgreSQL）
  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=rechera
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  postgres_data:
```

### 環境変数テンプレート

`.env.production` ファイルを作成し、以下の環境変数を設定してください。

```env
# サイト設定
SITE_URL=https://rechera.jp

# データベース
DB_PASSWORD=<SECURE_PASSWORD>

# JWT
JWT_SECRET=<SECURE_JWT_SECRET>
ADMIN_JWT_SECRET=<SECURE_ADMIN_JWT_SECRET>

# 画像管理（S3またはCloudinary）
AWS_ACCESS_KEY_ID=<YOUR_AWS_KEY>
AWS_SECRET_ACCESS_KEY=<YOUR_AWS_SECRET>
AWS_REGION=ap-northeast-1
AWS_BUCKET=rechera-assets

# または Cloudinary
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUD_NAME>
CLOUDINARY_API_KEY=<YOUR_API_KEY>
CLOUDINARY_API_SECRET=<YOUR_API_SECRET>
```

### Coolify デプロイ手順

1. Coolify ダッシュボードで新規プロジェクトを作成
2. Git リポジトリを接続
3. `docker-compose.yml` をプロジェクトルートに配置
4. 環境変数を Coolify で設定
5. 「Deploy」をクリックしてビルド・デプロイを実行
6. SSL 証明書を自動設定（Let's Encrypt）

---

## クライアント提供アセット

### 画像の配置

クライアントから提供された以下の画像を適切に配置してください。

| 画像ファイル | 用途 | 配置場所 |
|:---|:---|:---|
| S__289611846_0.jpg | カラーパレット参照用 | ドキュメントのみ（実装には不要） |
| S__289611857_0.jpg | トップページ背景 | `/public/images/hero-bg.jpg` |
| S__289611859_0.jpg | 講師紹介セクション | `/public/images/instructor.jpg` |
| S__289611860_0.jpg | Aboutページ背景 | `/public/images/about-bg.jpg` |
| S__289611861_0.jpg | Features セクション | `/public/images/feature-1.jpg` |
| S__289611862_0.jpg | Features セクション | `/public/images/feature-2.jpg` |
| S__289611863_0.jpg | Features セクション | `/public/images/feature-3.jpg` |

**画像最適化:**
- すべての画像を WebP 形式に変換
- レスポンシブ画像を生成（複数サイズ）
- 遅延読み込み（Lazy Loading）を実装

---

## 実装チェックリスト

### デザインシステム
- [ ] カラーパレットが全ページで統一されている
- [ ] Fluid Typography が実装されている
- [ ] 丸みのあるUI（border-radius: 16px以上）が適用されている
- [ ] ふんわりとした立体感（微妙なシャドウ）が実装されている
- [ ] スムーズなトランジション（0.3s ease）が適用されている

### 背景エフェクト
- [ ] グラデーション背景アニメーションが動作している
- [ ] Blob SVG アニメーションが3つ実装されている
- [ ] アニメーションが滑らかで、パフォーマンスに問題がない

### ページ構成
- [ ] トップページが完成している
- [ ] はじめにページが完成している
- [ ] 全コース詳細ページが実装されている
- [ ] グローバルナビゲーションが機能している
- [ ] モバイル対応ハンバーガーメニューが動作している

### CMS統合
- [ ] Strapi が起動している
- [ ] Course モデルが定義されている
- [ ] ユーザーロール（Admin、Editor、Viewer）が設定されている
- [ ] API エンドポイントが機能している
- [ ] フロントエンドとバックエンドが正常に連携している

### レスポンシブデザイン
- [ ] モバイル（375px〜）で正常に表示される
- [ ] タブレット（768px〜）で正常に表示される
- [ ] デスクトップ（1024px〜）で正常に表示される
- [ ] 大画面（1440px〜）で正常に表示される

### パフォーマンス
- [ ] ページロード速度が 3 秒以下
- [ ] Lighthouse スコアが 90 以上
- [ ] 画像が最適化されている（WebP、遅延読み込み）
- [ ] キャッシングが設定されている

### デプロイメント
- [ ] Docker イメージがビルドされている
- [ ] Coolify で正常にデプロイされている
- [ ] SSL 証明書が有効になっている
- [ ] データベースが正常に動作している
- [ ] 本番環境で全機能が動作している

---

## 開発の進め方

### Phase 1: プロジェクト初期化（1日目）
1. Next.js プロジェクトの作成
2. Tailwind CSS + shadcn/ui のセットアップ
3. Google Fonts（Noto Sans JP + Poppins）の導入
4. カラーパレットの定義（CSS変数）
5. Fluid Typography の実装

### Phase 2: デザインシステム構築（1日目）
1. グローバルナビゲーションの実装
2. 背景エフェクト（グラデーション + Blob）の実装
3. 共通コンポーネント（Button、Card、Input）の作成
4. レスポンシブデザインの確認

### Phase 3: ページ実装（2日目）
1. トップページの実装
2. はじめにページの実装
3. コース詳細ページテンプレートの実装
4. 全コースページの生成

### Phase 4: CMS統合（3日目）
1. Strapi のセットアップ
2. データベーススキーマの定義
3. API エンドポイントの実装
4. フロントエンドとの連携
5. ユーザーロールの設定

### Phase 5: デプロイメント（4日目）
1. Docker Compose の作成
2. 環境変数の設定
3. Coolify でのデプロイ
4. SSL 証明書の設定
5. 本番環境での動作確認

### Phase 6: 最終調整（5日目）
1. パフォーマンス最適化
2. アクセシビリティチェック
3. ブラウザ互換性確認
4. バグ修正
5. ドキュメント作成

---

## 重要な注意事項

### デザイン
- **カラーパレットは厳密に守ってください。** クライアント確定版のカラーコードから逸脱しないこと。
- **丸みのあるUIは必須です。** すべてのボタン、カード、入力フォームに適用してください。
- **背景エフェクトは必ず実装してください。** グラデーション + Blob の組み合わせが、Recheraのブランドアイデンティティの核心です。

### 技術
- **Fluid Typography を使用してください。** 固定フォントサイズは使用しないこと。
- **レスポンシブデザインは必須です。** モバイルファーストのアプローチで実装してください。
- **パフォーマンスを重視してください。** 画像最適化、遅延読み込み、キャッシングを実装してください。

### CMS
- **複数ユーザー管理は必須です。** Admin、Editor、Viewer の3つのロールを実装してください。
- **ロールベースアクセス制御を実装してください。** 各ロールの権限を厳密に管理してください。

### デプロイメント
- **Coolify でのデプロイを前提としてください。** Docker Compose を使用してください。
- **環境変数は絶対にハードコードしないでください。** `.env` ファイルで管理してください。

---

## 成功の定義

このプロジェクトは、以下の条件を満たした時に成功とみなされます。

1. **デザイン:** ターゲットペルソナ（20代半ば〜30代後半の子育て世代の女性）が「ここなら安心して学べそう」と感じられる、優しく洗練されたデザインが実現されている。

2. **機能:** 複数ユーザーがコンテンツを管理・編集でき、ロールベースアクセス制御が正常に機能している。

3. **パフォーマンス:** ページロード速度が 3 秒以下、Lighthouse スコアが 90 以上。

4. **デプロイメント:** Coolify で正常にデプロイされ、SSL 証明書が有効になっている。

5. **ユーザー体験:** 初心者でも直感的に操作でき、長時間見ていても疲れないデザインが実現されている。

---

## サポートドキュメント

このマスタープロンプトと合わせて、以下のドキュメントを参照してください。

1. **rechera_integrated_knowledge_base.md** - 統合ナレッジベース（デザインシステム、カラーパレット、タイポグラフィ、背景エフェクト、複数ページ構成、CMS統合、Coolifyデプロイメント）
2. **rechera_background_effects_guide.md** - 背景エフェクト実装ガイド（詳細なコード例付き）
3. **client_assets_analysis.md** - クライアント提供画像の分析と配置指示

---

## 質問・不明点がある場合

このマスタープロンプトに不明点がある場合は、以下の優先順位で判断してください。

1. **ターゲットペルソナの視点で考える:** 「20代半ば〜30代後半の子育て世代の女性が、安心して学べる環境か？」
2. **ブランドコンセプトに立ち返る:** 「洗練」「優しさ」「成長」「居心地の良さ」を体現しているか？
3. **技術的なベストプラクティスに従う:** パフォーマンス、アクセシビリティ、セキュリティを優先する。

---

**このマスタープロンプトを使用して、Recheraの素晴らしいMVPを構築してください。成功を祈っています！**
