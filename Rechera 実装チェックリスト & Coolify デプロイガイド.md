# Rechera 実装チェックリスト & Coolify デプロイガイド

このドキュメントは、Recheraプロジェクトの実装を段階的に進めるためのチェックリストと、Coolifyへのデプロイ手順を提供します。

---

## 実装チェックリスト

### Phase 1: プロジェクト初期化（推定時間: 4時間）

#### フロントエンド（Next.js）

- [ ] **Next.js プロジェクトの作成**
  ```bash
  npx create-next-app@latest frontend --typescript --tailwind --app
  ```

- [ ] **必要なパッケージのインストール**
  ```bash
  cd frontend
  pnpm add framer-motion lucide-react
  pnpm add -D @types/node
  ```

- [ ] **shadcn/ui のセットアップ**
  ```bash
  npx shadcn-ui@latest init
  ```

- [ ] **shadcn/ui コンポーネントのインストール**
  ```bash
  npx shadcn-ui@latest add button card input navigation-menu
  ```

- [ ] **Google Fonts の追加**
  - `app/layout.tsx` に Noto Sans JP + Poppins を追加
  - フォントの読み込みを確認

- [ ] **Tailwind CSS 設定のカスタマイズ**
  - `tailwind.config.js` にカラーパレットを定義
  - Fluid Typography の設定を追加

- [ ] **グローバルスタイルの実装**
  - `app/globals.css` にカラーパレット、アニメーション、ユーティリティクラスを追加

#### バックエンド（Strapi）

- [ ] **Strapi プロジェクトの作成**
  ```bash
  npx create-strapi-app@latest backend --quickstart
  ```

- [ ] **PostgreSQL への接続設定**
  - `config/database.js` を編集
  - 環境変数を設定

- [ ] **Course コンテンツタイプの作成**
  - Strapi 管理画面で Course モデルを定義
  - フィールド（title, slug, category, description, content, thumbnail, order, published）を追加

- [ ] **ユーザーロールの設定**
  - Admin、Editor、Viewer ロールを作成
  - 各ロールの権限を設定

- [ ] **画像アップロード設定**
  - AWS S3 または Cloudinary の設定
  - プラグインのインストールと設定

---

### Phase 2: デザインシステム構築（推定時間: 6時間）

#### カラーパレットの実装

- [ ] **CSS変数の定義**
  - `app/globals.css` に Rechera カラーパレットを定義
  - すべてのカラーコードが正確であることを確認

- [ ] **カラーパレットのテスト**
  - テストページを作成し、すべての色が正しく表示されることを確認

#### タイポグラフィの実装

- [ ] **Fluid Typography の実装**
  - h1, h2, h3, p に clamp() を使用したフォントサイズを設定
  - レスポンシブ対応を確認

- [ ] **フォントウェイトとレタースペーシングの調整**
  - デザイン仕様通りに設定

#### 背景エフェクトの実装

- [ ] **グラデーション背景アニメーションの実装**
  - `.gradient-background` クラスを作成
  - アニメーションが滑らかに動作することを確認

- [ ] **Blob SVG アニメーションの実装**
  - `components/BackgroundBlobs.tsx` を作成
  - 3つの Blob が正しくアニメーションすることを確認

- [ ] **パフォーマンスの確認**
  - アニメーションが60fps で動作することを確認
  - `will-change` プロパティの適用を確認

#### UI コンポーネントの実装

- [ ] **丸みのあるUIの適用**
  - すべてのボタン、カード、入力フォームに `border-radius: 16px` 以上を適用

- [ ] **ふんわりとした立体感の実装**
  - `.soft-shadow` と `.soft-shadow-hover` クラスを作成
  - ホバー時のアニメーションを確認

- [ ] **スムーズなトランジションの実装**
  - `.smooth-transition` クラスを作成
  - すべてのインタラクティブ要素に適用

---

### Phase 3: コンポーネント実装（推定時間: 8時間）

#### グローバルナビゲーション

- [ ] **Navigation.tsx の作成**
  - デスクトップ版ナビゲーションの実装
  - モバイル版ハンバーガーメニューの実装

- [ ] **ドロップダウンメニューの実装**
  - 物販関連、Web/SNS関連、営業/その他のメニュー項目を追加
  - ホバー時のアニメーションを実装

- [ ] **スティッキーナビゲーションの実装**
  - スクロール時に追従することを確認
  - 背景の半透明効果を実装

#### BackgroundBlobs コンポーネント

- [ ] **BackgroundBlobs.tsx の作成**
  - 3つの Blob SVG を実装
  - アニメーションの遅延を設定

- [ ] **ぼかしフィルターの適用**
  - `feGaussianBlur` を使用してぼかし効果を実装

#### CourseCard コンポーネント

- [ ] **CourseCard.tsx の作成**
  - カードレイアウトの実装
  - サムネイル画像の表示
  - カテゴリバッジの実装

- [ ] **ホバーエフェクトの実装**
  - ホバー時にカードが浮き上がるアニメーション
  - シャドウの変化

---

### Phase 4: ページ実装（推定時間: 12時間）

#### トップページ（/）

- [ ] **ファーストビュー（Hero Section）の実装**
  - グラデーション背景 + Blob アニメーションの統合
  - メインメッセージの配置
  - CTAボタンの実装

- [ ] **Features Section の実装**
  - 3カラムのカードレイアウト
  - アイコン + 見出し + 説明文の配置

- [ ] **講師紹介 Section の実装**
  - 講師の写真（クライアント提供画像）の配置
  - プロフィールテキストの実装

- [ ] **CTA Section の実装**
  - 最終行動喚起の配置
  - ボタンのアニメーション

#### はじめにページ（/about）

- [ ] **ページヘッダーの実装**
  - ページタイトルとリード文の配置

- [ ] **Recheraの理念 Section の実装**
  - ブランドメッセージの配置
  - ターゲットペルソナへの共感メッセージ

- [ ] **学べる内容 Section の実装**
  - 物販関連、Web/SNS関連、営業/その他の概要

- [ ] **CTA の実装**
  - 「コース一覧を見る」ボタン

#### コース詳細ページ（/courses/[category]/[slug]）

- [ ] **ページヘッダーの実装**
  - コースタイトルの動的表示
  - カテゴリバッジの実装

- [ ] **2カラムレイアウトの実装**
  - 左: コース本文（Markdown対応）
  - 右: サイドバー（関連コース、CTA）

- [ ] **Markdown レンダリングの実装**
  - `react-markdown` または `next-mdx-remote` を使用
  - コードブロック、画像、リンクの対応

- [ ] **関連コース Section の実装**
  - 同じカテゴリの他のコースを表示

---

### Phase 5: API統合（推定時間: 6時間）

#### API クライアントの実装

- [ ] **lib/api.ts の作成**
  - `getCourses()` 関数の実装
  - `getCourseBySlug()` 関数の実装
  - `getCoursesByCategory()` 関数の実装

- [ ] **エラーハンドリングの実装**
  - ネットワークエラーの処理
  - 404エラーの処理

#### データフェッチングの実装

- [ ] **トップページでのデータフェッチ**
  - コース一覧の取得
  - ISR（Incremental Static Regeneration）の設定

- [ ] **コース詳細ページでのデータフェッチ**
  - 動的ルートパラメータの取得
  - コースデータの取得

- [ ] **カテゴリ別コース一覧の実装**
  - カテゴリフィルタリングの実装

---

### Phase 6: レスポンシブデザイン（推定時間: 4時間）

#### モバイル対応

- [ ] **モバイル（375px〜）での表示確認**
  - すべてのページが正常に表示されることを確認
  - テキストが読みやすいことを確認

- [ ] **ハンバーガーメニューの動作確認**
  - メニューの開閉がスムーズであることを確認
  - アコーディオンメニューの動作確認

#### タブレット対応

- [ ] **タブレット（768px〜）での表示確認**
  - 2カラムレイアウトが正常に表示されることを確認
  - ナビゲーションメニューの表示確認

#### デスクトップ対応

- [ ] **デスクトップ（1024px〜）での表示確認**
  - 3カラムレイアウトが正常に表示されることを確認
  - ドロップダウンメニューの動作確認

#### 大画面対応

- [ ] **大画面（1440px〜）での表示確認**
  - コンテンツが中央に配置されることを確認
  - 最大幅が適切に設定されていることを確認

---

### Phase 7: パフォーマンス最適化（推定時間: 4時間）

#### 画像最適化

- [ ] **WebP 変換**
  - すべての JPEG/PNG を WebP に変換
  - 画質を確認

- [ ] **レスポンシブ画像の生成**
  - 複数サイズ（320px, 640px, 1024px, 1920px）を生成
  - `<Image>` コンポーネントの `sizes` 属性を設定

- [ ] **遅延読み込みの実装**
  - Next.js の `<Image>` コンポーネントを使用
  - `loading="lazy"` の確認

#### コード分割

- [ ] **動的インポートの実装**
  - 大きなコンポーネントを動的にインポート
  - ローディング状態の実装

#### キャッシング

- [ ] **ISR の設定**
  - `revalidate` オプションを 60 秒に設定
  - キャッシュが正常に動作することを確認

---

### Phase 8: テスト（推定時間: 6時間）

#### 機能テスト

- [ ] **ナビゲーションのテスト**
  - すべてのリンクが正常に動作することを確認
  - ドロップダウンメニューの動作確認

- [ ] **フォームのテスト**
  - ログインフォームの動作確認
  - バリデーションの確認

#### パフォーマンステスト

- [ ] **Lighthouse スコアの確認**
  - Performance: 90以上
  - Accessibility: 90以上
  - Best Practices: 90以上
  - SEO: 90以上

- [ ] **ページロード速度の確認**
  - 3秒以下であることを確認

#### ブラウザ互換性テスト

- [ ] **Chrome での動作確認**
- [ ] **Firefox での動作確認**
- [ ] **Safari での動作確認**
- [ ] **Edge での動作確認**

---

## Coolify デプロイガイド

### 事前準備

#### 必要なもの

- Coolify がインストールされたサーバー
- Git リポジトリ（GitHub、GitLab、Bitbucket等）
- ドメイン名（オプション）
- AWS S3 または Cloudinary アカウント

#### 環境変数の準備

以下の環境変数を準備してください。

```env
# サイト設定
SITE_URL=https://rechera.jp

# データベース
DB_PASSWORD=<SECURE_PASSWORD>

# JWT
JWT_SECRET=<SECURE_JWT_SECRET>
ADMIN_JWT_SECRET=<SECURE_ADMIN_JWT_SECRET>

# AWS S3
AWS_ACCESS_KEY_ID=<YOUR_AWS_KEY>
AWS_SECRET_ACCESS_KEY=<YOUR_AWS_SECRET>
AWS_REGION=ap-northeast-1
AWS_BUCKET=rechera-assets
```

**セキュアなパスワード生成:**

```bash
# Linux/Mac
openssl rand -base64 32

# または
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

---

### Step 1: Git リポジトリの準備

#### 1.1 プロジェクト構成

プロジェクトのルートディレクトリに以下のファイルを配置してください。

```
rechera/
├── frontend/                # Next.js プロジェクト
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── Dockerfile
│   ├── next.config.js
│   ├── package.json
│   └── ...
├── backend/                 # Strapi プロジェクト
│   ├── config/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
├── docker-compose.yml       # Docker Compose 設定
├── .env.example             # 環境変数のサンプル
├── .gitignore
└── README.md
```

#### 1.2 .gitignore の設定

```gitignore
# 環境変数
.env
.env.local
.env.production

# Node modules
node_modules/

# Next.js
frontend/.next/
frontend/out/

# Strapi
backend/.tmp/
backend/build/
backend/public/uploads/

# Docker
*.log
```

#### 1.3 Git リポジトリへのプッシュ

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <YOUR_GIT_REPOSITORY_URL>
git push -u origin main
```

---

### Step 2: Coolify でのプロジェクト作成

#### 2.1 Coolify ダッシュボードにログイン

ブラウザで Coolify のダッシュボードにアクセスしてください。

```
https://your-coolify-server.com
```

#### 2.2 新規プロジェクトの作成

1. **「Projects」** をクリック
2. **「+ New Project」** をクリック
3. プロジェクト名を入力（例: `rechera`）
4. **「Create」** をクリック

#### 2.3 Git リポジトリの接続

1. **「+ New Resource」** をクリック
2. **「Git Repository」** を選択
3. Git プロバイダーを選択（GitHub、GitLab、Bitbucket等）
4. リポジトリ URL を入力
5. ブランチを選択（例: `main`）
6. **「Connect」** をクリック

---

### Step 3: Docker Compose の設定

#### 3.1 Build Pack の選択

1. **「Build Pack」** で **「Docker Compose」** を選択
2. **「docker-compose.yml」** のパスを確認（ルートディレクトリにある場合は `/docker-compose.yml`）

#### 3.2 環境変数の設定

1. **「Environment Variables」** タブをクリック
2. 以下の環境変数を追加

| キー | 値 | 説明 |
|:---|:---|:---|
| `SITE_URL` | `https://rechera.jp` | サイトURL |
| `DB_PASSWORD` | `<SECURE_PASSWORD>` | データベースパスワード |
| `JWT_SECRET` | `<SECURE_JWT_SECRET>` | JWT シークレット |
| `ADMIN_JWT_SECRET` | `<SECURE_ADMIN_JWT_SECRET>` | Admin JWT シークレット |
| `AWS_ACCESS_KEY_ID` | `<YOUR_AWS_KEY>` | AWS アクセスキー |
| `AWS_SECRET_ACCESS_KEY` | `<YOUR_AWS_SECRET>` | AWS シークレットキー |
| `AWS_REGION` | `ap-northeast-1` | AWS リージョン |
| `AWS_BUCKET` | `rechera-assets` | S3 バケット名 |

**重要:** 環境変数は「Secret」にチェックを入れて、ログに表示されないようにしてください。

---

### Step 4: ドメインとSSL証明書の設定

#### 4.1 ドメインの設定

1. **「Domains」** タブをクリック
2. **「+ Add Domain」** をクリック
3. ドメイン名を入力（例: `rechera.jp`）
4. **「Add」** をクリック

#### 4.2 DNS レコードの設定

ドメインレジストラ（お名前.com、ムームードメイン等）で、以下の DNS レコードを追加してください。

| タイプ | ホスト | 値 | TTL |
|:---|:---|:---|:---|
| A | @ | `<COOLIFY_SERVER_IP>` | 3600 |
| A | www | `<COOLIFY_SERVER_IP>` | 3600 |

#### 4.3 SSL証明書の自動設定

Coolify は Let's Encrypt を使用して、自動的に SSL 証明書を発行します。

1. **「SSL」** タブをクリック
2. **「Enable SSL」** をクリック
3. 証明書の発行を待つ（通常1〜2分）

---

### Step 5: デプロイの実行

#### 5.1 初回デプロイ

1. **「Deploy」** ボタンをクリック
2. ビルドログを確認
3. デプロイが完了するまで待つ（通常5〜10分）

#### 5.2 デプロイログの確認

デプロイ中は、リアルタイムでログを確認できます。

```
[frontend] Building...
[frontend] Successfully built
[backend] Building...
[backend] Successfully built
[postgres] Starting...
[postgres] Ready
[backend] Starting...
[backend] Ready
[frontend] Starting...
[frontend] Ready
```

#### 5.3 デプロイの成功確認

デプロイが成功すると、以下のメッセージが表示されます。

```
✅ Deployment successful!
🌐 Your application is now live at https://rechera.jp
```

---

### Step 6: 初期設定

#### 6.1 Strapi 管理者アカウントの作成

1. ブラウザで `https://rechera.jp/admin` にアクセス
2. 管理者アカウント情報を入力
   - Email: `admin@rechera.jp`
   - Password: `<SECURE_PASSWORD>`
   - Username: `admin`
3. **「Let's start」** をクリック

#### 6.2 ロールの設定

1. **「Settings」** → **「Users & Permissions Plugin」** → **「Roles」** をクリック
2. **「Admin」** ロールの権限を確認
3. **「Editor」** ロールを作成し、権限を設定
4. **「Viewer」** ロールを作成し、権限を設定

#### 6.3 初期コンテンツの作成

1. **「Content Manager」** → **「Courses」** をクリック
2. **「+ Create new entry」** をクリック
3. コース情報を入力
4. **「Save」** → **「Publish」** をクリック

---

### Step 7: 動作確認

#### 7.1 フロントエンドの確認

1. ブラウザで `https://rechera.jp` にアクセス
2. トップページが正常に表示されることを確認
3. ナビゲーションメニューが動作することを確認
4. コース詳細ページが表示されることを確認

#### 7.2 バックエンドの確認

1. ブラウザで `https://rechera.jp/admin` にアクセス
2. ログインできることを確認
3. コースの作成・編集・削除ができることを確認

#### 7.3 パフォーマンスの確認

1. Chrome DevTools を開く
2. **「Lighthouse」** タブをクリック
3. **「Generate report」** をクリック
4. スコアが 90 以上であることを確認

---

### Step 8: 継続的デプロイの設定

#### 8.1 自動デプロイの有効化

1. Coolify ダッシュボードで **「Settings」** タブをクリック
2. **「Auto Deploy」** を有効化
3. **「Save」** をクリック

これで、Git リポジトリに変更をプッシュすると、自動的にデプロイされます。

#### 8.2 Webhook の設定（オプション）

GitHub、GitLab、Bitbucket で Webhook を設定すると、プッシュ時に即座にデプロイが開始されます。

1. Git プロバイダーの設定画面で **「Webhooks」** をクリック
2. Coolify が提供する Webhook URL を追加
3. **「Push events」** を有効化

---

## トラブルシューティング

### デプロイが失敗する場合

#### 問題: Docker イメージのビルドに失敗する

**原因:** Dockerfile の設定ミス、または依存関係のインストールエラー

**解決策:**
1. ビルドログを確認
2. ローカル環境で `docker build` を実行し、エラーを特定
3. Dockerfile を修正してプッシュ

#### 問題: データベースに接続できない

**原因:** 環境変数の設定ミス、またはデータベースが起動していない

**解決策:**
1. 環境変数が正しく設定されているか確認
2. Docker Compose ログで PostgreSQL の起動を確認
3. `docker-compose logs postgres` でエラーを確認

#### 問題: SSL証明書が発行されない

**原因:** DNS レコードが正しく設定されていない、またはドメインが Coolify サーバーを指していない

**解決策:**
1. DNS レコードを確認（`nslookup rechera.jp`）
2. ドメインが Coolify サーバーの IP アドレスを指しているか確認
3. DNS の伝播を待つ（最大24時間）

---

### パフォーマンスが悪い場合

#### 問題: ページロード速度が遅い

**原因:** 画像が最適化されていない、または CDN が設定されていない

**解決策:**
1. すべての画像を WebP に変換
2. Next.js の `<Image>` コンポーネントを使用
3. S3 + CloudFront または Cloudinary を使用

#### 問題: Lighthouse スコアが低い

**原因:** パフォーマンス最適化が不十分

**解決策:**
1. 不要な JavaScript を削除
2. コード分割を実装
3. キャッシング戦略を見直す

---

## まとめ

このチェックリストとデプロイガイドに従うことで、Recheraプロジェクトを段階的に実装し、Coolifyに正常にデプロイできます。各ステップを慎重に進め、問題が発生した場合はトラブルシューティングセクションを参照してください。

**成功を祈っています！**
