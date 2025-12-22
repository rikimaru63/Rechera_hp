# Rechera 技術仕様書

このドキュメントは、Recheraプロジェクトの詳細な技術仕様を定義します。マスタープロンプトと合わせて参照することで、実装の詳細を理解できます。

---

## アーキテクチャ概要

Recheraは、フロントエンド（Next.js）とバックエンド（Strapi CMS）を分離した、モダンなJamstackアーキテクチャを採用しています。

```
┌─────────────────────────────────────────────────────────┐
│                     ユーザー                              │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                  Coolify (Reverse Proxy)                │
│                    SSL Termination                      │
└─────────────────────────────────────────────────────────┘
                            │
              ┌─────────────┴─────────────┐
              ▼                           ▼
┌───────────────────────┐   ┌───────────────────────┐
│   Frontend (Next.js)  │   │  Backend (Strapi)     │
│   - SSR/SSG           │   │  - REST API           │
│   - Tailwind CSS      │   │  - Admin Panel        │
│   - Framer Motion     │   │  - Authentication     │
└───────────────────────┘   └───────────────────────┘
                                        │
                                        ▼
                            ┌───────────────────────┐
                            │  PostgreSQL Database  │
                            └───────────────────────┘
                                        │
                                        ▼
                            ┌───────────────────────┐
                            │  S3 / Cloudinary      │
                            │  (Image Storage)      │
                            └───────────────────────┘
```

---

## フロントエンド技術仕様

### ディレクトリ構成

```
frontend/
├── app/
│   ├── layout.tsx                    # ルートレイアウト
│   ├── page.tsx                      # トップページ
│   ├── about/
│   │   └── page.tsx                  # はじめにページ
│   ├── courses/
│   │   ├── [category]/
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # コース詳細ページ
│   │   └── page.tsx                  # コース一覧ページ
│   └── login/
│       └── page.tsx                  # ログインページ
├── components/
│   ├── BackgroundBlobs.tsx           # Blob SVG アニメーション
│   ├── Navigation.tsx                # グローバルナビゲーション
│   ├── Footer.tsx                    # フッター
│   ├── CourseCard.tsx                # コースカード
│   └── ui/                           # shadcn/ui コンポーネント
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
├── lib/
│   ├── api.ts                        # Strapi API クライアント
│   └── utils.ts                      # ユーティリティ関数
├── public/
│   └── images/                       # 画像アセット
│       ├── hero-bg.webp
│       ├── instructor.webp
│       └── ...
├── styles/
│   └── globals.css                   # グローバルスタイル
├── next.config.js                    # Next.js 設定
├── tailwind.config.js                # Tailwind CSS 設定
└── package.json
```

### コンポーネント設計

#### 1. BackgroundBlobs.tsx

グラデーション背景の上に重ねる、3つのBlobアニメーションコンポーネント。

**Props:**
なし（静的コンポーネント）

**実装例:**

```tsx
export default function BackgroundBlobs() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        </filter>
      </defs>

      {/* Blob 1 - くすみピンク */}
      <path
        className="blob blob-1"
        d="M 300,300 Q 400,200 500,300 T 700,300 Q 600,400 500,500 T 300,300 Z"
        fill="#E8CCCC"
        opacity="0.4"
        filter="url(#blur)"
      />

      {/* Blob 2 - くすみブルー */}
      <path
        className="blob blob-2"
        d="M 800,200 Q 900,150 1000,200 T 1100,300 Q 1000,400 900,450 T 800,400 Z"
        fill="#CAD9DA"
        opacity="0.35"
        filter="url(#blur)"
      />

      {/* Blob 3 - 淡いベージュ */}
      <path
        className="blob blob-3"
        d="M 100,400 Q 200,350 300,400 T 500,400 Q 400,500 300,550 T 100,400 Z"
        fill="#F4E7E7"
        opacity="0.5"
        filter="url(#blur)"
      />
    </svg>
  );
}
```

#### 2. Navigation.tsx

グローバルナビゲーションコンポーネント。デスクトップ版とモバイル版を切り替え。

**Props:**
なし

**状態管理:**
- `mobileMenuOpen: boolean` - モバイルメニューの開閉状態

**実装例:**

```tsx
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Rechera
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className="hover:text-primary transition-colors">
              ホーム
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              はじめに
            </Link>
            {/* ドロップダウンメニュー実装 */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            {/* モバイルメニュー項目 */}
          </div>
        )}
      </div>
    </nav>
  );
}
```

#### 3. CourseCard.tsx

コース一覧で使用するカードコンポーネント。

**Props:**

```typescript
interface CourseCardProps {
  title: string;
  description: string;
  category: "sales" | "web-sns" | "business";
  slug: string;
  thumbnail?: string;
}
```

**実装例:**

```tsx
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CourseCard({
  title,
  description,
  category,
  slug,
  thumbnail,
}: CourseCardProps) {
  const categoryLabels = {
    sales: "物販関連",
    "web-sns": "Web/SNS関連",
    business: "営業/その他",
  };

  return (
    <Link href={`/courses/${category}/${slug}`}>
      <Card className="soft-shadow smooth-transition hover:soft-shadow-hover hover:-translate-y-2 border-none cursor-pointer">
        {thumbnail && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <CardHeader>
          <div className="text-xs text-primary font-medium mb-2">
            {categoryLabels[category]}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
```

### API クライアント実装

#### lib/api.ts

Strapi API との通信を管理するクライアント。

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export interface Course {
  id: number;
  attributes: {
    title: string;
    slug: string;
    category: "sales" | "web-sns" | "business";
    description: string;
    content: string;
    thumbnail?: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    order: number;
    published: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export async function getCourses(): Promise<Course[]> {
  const res = await fetch(`${API_URL}/api/courses?populate=*`, {
    next: { revalidate: 60 }, // ISR: 60秒ごとに再検証
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }
  
  const data = await res.json();
  return data.data;
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const res = await fetch(
    `${API_URL}/api/courses?filters[slug][$eq]=${slug}&populate=*`,
    {
      next: { revalidate: 60 },
    }
  );
  
  if (!res.ok) {
    throw new Error("Failed to fetch course");
  }
  
  const data = await res.json();
  return data.data[0] || null;
}

export async function getCoursesByCategory(
  category: string
): Promise<Course[]> {
  const res = await fetch(
    `${API_URL}/api/courses?filters[category][$eq]=${category}&populate=*`,
    {
      next: { revalidate: 60 },
    }
  );
  
  if (!res.ok) {
    throw new Error("Failed to fetch courses");
  }
  
  const data = await res.json();
  return data.data;
}
```

### スタイリング仕様

#### globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Rechera カラーパレット */
    --color-primary-pink: 232 204 204; /* #E8CCCC */
    --color-primary-beige: 244 231 231; /* #F4E7E7 */
    --color-secondary-greige: 204 202 202; /* #CCCACA */
    --color-secondary-blue: 202 217 218; /* #CAD9DA */
    --color-cream: 255 248 240; /* #FFF8F0 */
    
    --background: var(--color-cream);
    --foreground: 51 51 51; /* #333333 */
    --primary: var(--color-primary-pink);
    --secondary: var(--color-secondary-blue);
    --muted: var(--color-primary-beige);
    --border: 232 232 232; /* #E8E8E8 */
    --radius: 1rem; /* 16px */
  }
  
  body {
    @apply bg-background text-foreground;
    font-family: 'Noto Sans JP', 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Fluid Typography */
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
}

@layer utilities {
  /* グラデーション背景アニメーション */
  .gradient-background {
    background: linear-gradient(
      135deg,
      rgb(var(--color-cream)) 0%,
      rgb(var(--color-primary-beige)) 25%,
      rgb(var(--color-primary-pink)) 50%,
      rgb(var(--color-secondary-blue)) 75%,
      rgb(var(--color-cream)) 100%
    );
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  /* Blob アニメーション */
  .blob {
    animation: blobAnimation 8s ease-in-out infinite;
    will-change: transform;
  }
  
  @keyframes blobAnimation {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(20px, -30px) scale(1.1); }
    50% { transform: translate(-10px, 20px) scale(0.95); }
    75% { transform: translate(30px, 10px) scale(1.05); }
  }
  
  .blob-1 { animation-delay: 0s; }
  .blob-2 { animation-delay: 2s; }
  .blob-3 { animation-delay: 4s; }
  
  /* ふんわりとした立体感 */
  .soft-shadow {
    box-shadow: 0 2px 8px rgba(51, 51, 68, 0.08);
  }
  
  .soft-shadow-hover {
    box-shadow: 0 8px 24px rgba(51, 51, 68, 0.12);
  }
  
  /* スムーズなトランジション */
  .smooth-transition {
    transition: all 0.3s ease;
  }
}
```

---

## バックエンド技術仕様

### Strapi プロジェクト構成

```
backend/
├── config/
│   ├── database.js                  # データベース設定
│   ├── server.js                    # サーバー設定
│   └── plugins.js                   # プラグイン設定
├── src/
│   ├── api/
│   │   └── course/
│   │       ├── content-types/
│   │       │   └── course/
│   │       │       └── schema.json  # Course スキーマ定義
│   │       ├── controllers/
│   │       │   └── course.js        # Course コントローラー
│   │       ├── routes/
│   │       │   └── course.js        # Course ルート
│   │       └── services/
│   │           └── course.js        # Course サービス
│   ├── extensions/
│   │   └── users-permissions/
│   │       └── content-types/
│   │           └── user/
│   │               └── schema.json  # User スキーマ拡張
│   └── index.js
├── public/
│   └── uploads/                     # アップロードファイル
├── .env                             # 環境変数
├── package.json
└── Dockerfile
```

### データベーススキーマ

#### Course（コース）

```json
{
  "kind": "collectionType",
  "collectionName": "courses",
  "info": {
    "singularName": "course",
    "pluralName": "courses",
    "displayName": "Course",
    "description": "コース情報"
  },
  "options": {
    "draftAndPublish": true
  },
  "attributes": {
    "title": {
      "type": "string",
      "required": true,
      "maxLength": 255
    },
    "slug": {
      "type": "uid",
      "targetField": "title",
      "required": true
    },
    "category": {
      "type": "enumeration",
      "enum": ["sales", "web-sns", "business"],
      "required": true
    },
    "description": {
      "type": "text",
      "required": true
    },
    "content": {
      "type": "richtext",
      "required": true
    },
    "thumbnail": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images"]
    },
    "order": {
      "type": "integer",
      "default": 0
    },
    "published": {
      "type": "boolean",
      "default": false
    }
  }
}
```

#### User（ユーザー拡張）

Strapiの標準ユーザーモデルを拡張し、ロールフィールドを追加します。

```json
{
  "kind": "collectionType",
  "collectionName": "up_users",
  "info": {
    "name": "user",
    "description": "",
    "singularName": "user",
    "pluralName": "users",
    "displayName": "User"
  },
  "options": {
    "draftAndPublish": false,
    "timestamps": true
  },
  "attributes": {
    "username": {
      "type": "string",
      "minLength": 3,
      "unique": true,
      "configurable": false,
      "required": true
    },
    "email": {
      "type": "email",
      "minLength": 6,
      "configurable": false,
      "required": true
    },
    "provider": {
      "type": "string",
      "configurable": false
    },
    "password": {
      "type": "password",
      "minLength": 6,
      "configurable": false,
      "private": true
    },
    "resetPasswordToken": {
      "type": "string",
      "configurable": false,
      "private": true
    },
    "confirmationToken": {
      "type": "string",
      "configurable": false,
      "private": true
    },
    "confirmed": {
      "type": "boolean",
      "default": false,
      "configurable": false
    },
    "blocked": {
      "type": "boolean",
      "default": false,
      "configurable": false
    },
    "role": {
      "type": "relation",
      "relation": "manyToOne",
      "target": "plugin::users-permissions.role",
      "inversedBy": "users",
      "configurable": false
    }
  }
}
```

### ロールベースアクセス制御

#### ロール定義

| ロール | 権限 |
|:---|:---|
| **Admin** | - 全コンテンツの作成・編集・削除<br>- ユーザー管理<br>- システム設定変更 |
| **Editor** | - コンテンツの作成・編集・削除<br>- 自分が作成したコンテンツの管理 |
| **Viewer** | - 公開されたコンテンツの閲覧のみ |

#### 権限設定

Strapi管理画面で以下の権限を設定してください。

**Admin:**
- Course: `find`, `findOne`, `create`, `update`, `delete`
- Upload: `upload`, `destroy`
- Users-permissions: `find`, `findOne`, `create`, `update`, `destroy`

**Editor:**
- Course: `find`, `findOne`, `create`, `update`, `delete` (自分が作成したもののみ)
- Upload: `upload`

**Viewer:**
- Course: `find`, `findOne` (published=true のもののみ)

### API エンドポイント

#### GET /api/courses

コース一覧を取得します。

**クエリパラメータ:**
- `filters[category][$eq]` - カテゴリでフィルタリング
- `filters[published][$eq]` - 公開状態でフィルタリング
- `sort` - ソート順序（例: `order:asc`）
- `populate` - リレーションを含める（例: `thumbnail`）

**レスポンス例:**

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "高単価物販",
        "slug": "high-value",
        "category": "sales",
        "description": "高単価物販の基礎から応用まで学べるコースです。",
        "content": "...",
        "thumbnail": {
          "data": {
            "attributes": {
              "url": "/uploads/thumbnail_123.webp"
            }
          }
        },
        "order": 1,
        "published": true,
        "createdAt": "2024-01-01T00:00:00.000Z",
        "updatedAt": "2024-01-01T00:00:00.000Z"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

#### GET /api/courses/:id

特定のコースを取得します。

**レスポンス例:**

```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "高単価物販",
      "slug": "high-value",
      "category": "sales",
      "description": "高単価物販の基礎から応用まで学べるコースです。",
      "content": "# コース内容\n\n...",
      "thumbnail": {
        "data": {
          "attributes": {
            "url": "/uploads/thumbnail_123.webp"
          }
        }
      },
      "order": 1,
      "published": true,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

#### POST /api/courses

新しいコースを作成します（Admin/Editorのみ）。

**リクエストボディ:**

```json
{
  "data": {
    "title": "新しいコース",
    "category": "sales",
    "description": "コースの説明",
    "content": "# コース内容\n\n...",
    "order": 10,
    "published": false
  }
}
```

#### PUT /api/courses/:id

コースを更新します（Admin/Editorのみ）。

**リクエストボディ:**

```json
{
  "data": {
    "title": "更新されたコース",
    "published": true
  }
}
```

#### DELETE /api/courses/:id

コースを削除します（Adminのみ）。

---

## デプロイメント仕様

### Docker 設定

#### frontend/Dockerfile

```dockerfile
FROM node:20-alpine AS base

# 依存関係のインストール
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# ビルド
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm install -g pnpm && pnpm build

# 本番環境
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### backend/Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN npm install -g pnpm && pnpm install --frozen-lockfile --production

COPY . .

ENV NODE_ENV production

RUN pnpm build

EXPOSE 1337

CMD ["pnpm", "start"]
```

### Docker Compose

```yaml
version: '3.8'

services:
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
    networks:
      - rechera-network

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
      - AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
      - AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
      - AWS_REGION=${AWS_REGION}
      - AWS_BUCKET=${AWS_BUCKET}
    depends_on:
      - postgres
    restart: unless-stopped
    networks:
      - rechera-network

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=rechera
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: unless-stopped
    networks:
      - rechera-network

volumes:
  postgres_data:

networks:
  rechera-network:
    driver: bridge
```

### 環境変数

#### .env.production

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

---

## パフォーマンス最適化

### 画像最適化

すべての画像を以下の手順で最適化してください。

1. **WebP 変換:** JPEG/PNG を WebP に変換
2. **レスポンシブ画像:** 複数サイズを生成（320px, 640px, 1024px, 1920px）
3. **遅延読み込み:** Next.js の `<Image>` コンポーネントを使用
4. **CDN配信:** S3 + CloudFront または Cloudinary を使用

### コード分割

Next.js の動的インポートを使用して、必要なコンポーネントのみを読み込みます。

```tsx
import dynamic from 'next/dynamic';

const BackgroundBlobs = dynamic(() => import('@/components/BackgroundBlobs'), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
```

### キャッシング戦略

- **静的ページ:** SSG（Static Site Generation）を使用
- **動的ページ:** ISR（Incremental Static Regeneration）を使用（60秒ごとに再検証）
- **API レスポンス:** Strapi 側で Redis キャッシュを設定

---

## セキュリティ仕様

### 認証・認可

- **JWT トークン:** Strapi の標準 JWT 認証を使用
- **HTTPS 必須:** すべての通信を HTTPS で暗号化
- **CORS 設定:** フロントエンドのドメインのみを許可

### 環境変数の管理

- **絶対にハードコードしない:** すべての機密情報を環境変数で管理
- **Git にコミットしない:** `.env` ファイルを `.gitignore` に追加
- **Coolify で管理:** 環境変数は Coolify の管理画面で設定

---

## テスト仕様

### フロントエンドテスト

- **ユニットテスト:** Jest + React Testing Library
- **E2Eテスト:** Playwright
- **ビジュアルリグレッションテスト:** Chromatic

### バックエンドテスト

- **APIテスト:** Strapi の標準テストフレームワーク
- **統合テスト:** Supertest

---

このドキュメントは、Recheraプロジェクトの技術的な詳細を網羅しています。実装時は、マスタープロンプトと合わせて参照してください。
