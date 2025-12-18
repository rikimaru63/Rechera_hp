# Rechera - 女性向けSNS運用スクール

洗練された価値ある知識を付ける。正解は一つじゃない。それぞれの色を混ぜて、自分だけの働き方を描こう。

## プロジェクト構成

```
Rechera_hp/
├── frontend/           # Next.js フロントエンド
├── backend/            # Strapi CMS バックエンド
├── docker-compose.yml  # Docker Compose 設定
├── .env.example        # 環境変数テンプレート
└── README.md           # このファイル
```

## 技術スタック

### フロントエンド
- Next.js 14+ (App Router)
- Tailwind CSS 4
- shadcn/ui
- Framer Motion
- TypeScript

### バックエンド
- Strapi 5
- PostgreSQL 15

### デプロイメント
- Docker + Docker Compose
- Coolify 対応

## 開発環境のセットアップ

### 必要条件
- Node.js 18+
- npm または yarn
- Docker & Docker Compose（本番環境用）

### フロントエンドの起動

```bash
cd frontend
npm install
npm run dev
```

フロントエンドは http://localhost:3000 で起動します。

### バックエンドの起動（Strapi）

**注意**: 初回セットアップ時は、以下のコマンドでStrapiプロジェクトを初期化してください：

```bash
cd backend
npx create-strapi-app@latest . --quickstart
```

または、既存の設定ファイルを使用する場合：

```bash
cd backend
npm install
npm run develop
```

Strapi 管理画面は http://localhost:1337/admin でアクセスできます。

## Docker でのデプロイ

### 環境変数の設定

```bash
cp .env.example .env
# .env ファイルを編集して必要な値を設定
```

### コンテナの起動

```bash
docker-compose up -d
```

### サービスの確認

- フロントエンド: http://localhost:3000
- Strapi 管理画面: http://localhost:1337/admin

## Coolify へのデプロイ

1. Coolify ダッシュボードで新規プロジェクトを作成
2. Git リポジトリを接続
3. `docker-compose.yml` をプロジェクトルートに配置
4. 環境変数を Coolify で設定
5. 「Deploy」をクリックしてビルド・デプロイを実行
6. SSL 証明書を自動設定（Let's Encrypt）

## コンテンツ管理

### コースの追加

1. Strapi 管理画面にログイン
2. Content Manager > Courses を選択
3. 「Create new entry」をクリック
4. 必要なフィールドを入力：
   - title: コースタイトル
   - slug: URL用スラッグ（自動生成）
   - category: sales / web-sns / business
   - description: コース説明
   - content: コース本文（Markdown対応）
   - thumbnail: サムネイル画像
   - order: 表示順序
5. 「Save」→「Publish」

### ユーザーロール

| ロール | 権限 |
|:---|:---|
| Admin | 全機能へのアクセス、ユーザー管理 |
| Editor | コンテンツの作成・編集・削除 |
| Viewer | コンテンツの閲覧のみ |

## デザインシステム

### カラーパレット

| 役割 | カラーコード |
|:---|:---|
| くすみピンク（プライマリ） | #E8CCCC |
| 淡いベージュ（プライマリ） | #F4E7E7 |
| グレージュ（セカンダリ） | #CCCACA |
| くすみブルー（セカンダリ） | #CAD9DA |
| クリーム色（ベース） | #FFF8F0 |
| テキスト（本文） | #333333 |
| テキスト（補助） | #666666 |

### タイポグラフィ

- 見出し: Poppins
- 本文: Noto Sans JP
- Fluid Typography 対応

## ライセンス

MIT License

## サポート

問題や質問がある場合は、Issue を作成してください。
