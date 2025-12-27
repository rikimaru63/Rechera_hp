import type { Metadata } from "next";
import { Noto_Sans_JP, Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import AuthenticatedLayout from "@/components/layout/AuthenticatedLayout";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rechera | 女性向けSNS運用スクール",
  description: "洗練された価値ある知識を付ける。正解は一つじゃない。それぞれの色を混ぜて、自分だけの働き方を描こう。",
  keywords: ["SNS運用", "女性向けスクール", "在宅ワーク", "フリーランス", "起業", "インスタグラム", "マーケティング"],
  openGraph: {
    title: "Rechera | 女性向けSNS運用スクール",
    description: "洗練された価値ある知識を付ける。正解は一つじゃない。それぞれの色を混ぜて、自分だけの働き方を描こう。",
    type: "website",
    locale: "ja_JP",
    siteName: "Rechera",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rechera | 女性向けSNS運用スクール",
    description: "洗練された価値ある知識を付ける。正解は一つじゃない。それぞれの色を混ぜて、自分だけの働き方を描こう。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${poppins.variable} font-sans antialiased`}
      >
        <AuthProvider>
          <AuthenticatedLayout>{children}</AuthenticatedLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
