"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Palette, Layout, Monitor, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Palette,
    title: "デザイン基礎",
    description: "色彩理論、タイポグラフィ、レイアウトの基本を学びます。",
  },
  {
    icon: Layout,
    title: "UI/UXデザイン",
    description: "ユーザー体験を考慮した魅力的なインターフェース設計。",
  },
  {
    icon: Monitor,
    title: "レスポンシブデザイン",
    description: "PC・スマホ・タブレットに対応したデザイン手法。",
  },
  {
    icon: Sparkles,
    title: "実践プロジェクト",
    description: "実際のプロジェクトを通じてスキルを磨きます。",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function WebDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-[var(--rechera-pink)]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Link
              href="/"
              className="inline-flex items-center text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] mb-6 transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              ホームに戻る
            </Link>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--rechera-pink)]/40 text-sm font-medium text-[var(--rechera-text)] mb-6">
              WEBデザイン
            </span>
            <h1 className="text-[var(--rechera-text)] mb-6">WEBデザイン</h1>
            <p className="text-lg text-[var(--rechera-text-muted)] leading-relaxed">
              WEBデザインの基礎から実践まで、
              魅力的なウェブサイトを作るためのスキルを習得できます。
              デザインツールの使い方から、実際の制作まで丁寧にサポートします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-24 bg-[var(--rechera-cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--rechera-text)] mb-4">学べる内容</h2>
            <p className="text-[var(--rechera-text-muted)] max-w-2xl mx-auto">
              WEBデザインに必要なスキルを体系的に学べます。
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full bg-white border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--rechera-pink)]/20 flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-[var(--rechera-text)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--rechera-text)] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--rechera-text-muted)]">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-[var(--rechera-beige)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-[var(--rechera-text)] mb-6">
              WEBデザインを始めよう
            </h2>
            <p className="text-lg text-[var(--rechera-text-muted)] mb-8 max-w-2xl mx-auto">
              コンテンツは順次追加予定です。
              お楽しみにお待ちください。
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
