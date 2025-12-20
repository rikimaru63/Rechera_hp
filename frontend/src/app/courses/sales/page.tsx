"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { salesCourses } from "@/lib/courses";
import VideoCard from "@/components/common/VideoCard";

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

const introVideos = [
  {
    title: "講師加藤の自己紹介",
    youtubeUrl: "https://youtu.be/Q6Vns2_TnU0",
    description: "物販講師の自己紹介と経歴について",
  },
  {
    title: "物販コンテンツ概要",
    youtubeUrl: "https://youtu.be/YlwfG_tamv4",
    description: "物販コンテンツの全体像と学習の進め方",
  },
  {
    title: "物販情報",
    youtubeUrl: "https://youtu.be/vPw4JKmxNcQ",
    description: "最新の物販情報とトレンド",
  },
  {
    title: "利益管理表の使い方",
    youtubeUrl: "https://youtu.be/PVlti__xiP4",
    description: "利益を管理するためのスプレッドシートの使い方",
  },
];

export default function SalesCoursesPage() {
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
              href="/courses"
              className="inline-flex items-center text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] mb-6 transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              コース一覧に戻る
            </Link>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--rechera-pink)]/40 text-sm font-medium text-[var(--rechera-text)] mb-6">
              Sales
            </span>
            <h1 className="text-[var(--rechera-text)] mb-6">物販関連</h1>
            <p className="text-lg text-[var(--rechera-text-muted)] leading-relaxed">
              高単価物販、MNP、光回線乗り換えなど、物販ビジネスのスキルを習得できます。
              実践的なノウハウを学び、副業や本業として物販ビジネスを始めましょう。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Videos Section */}
      <section className="py-16 lg:py-24 bg-[var(--rechera-beige)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-semibold text-[var(--rechera-text)] mb-4">
              まずはこちらから
            </h2>
            <p className="text-[var(--rechera-text-muted)]">
              物販を始める前に、まずこちらの動画をご覧ください
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {introVideos.map((video, index) => (
              <VideoCard
                key={index}
                title={video.title}
                youtubeUrl={video.youtubeUrl}
                description={video.description}
              />
            ))}
          </div>

          {/* Spreadsheet Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <a
              href="https://docs.google.com/spreadsheets/d/1ren3LDqIAcSIz42thuVoaoHU9yd8H7dhFKK_50pxToM/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--rechera-pink)]/30 hover:bg-[var(--rechera-pink)]/50 rounded-2xl text-[var(--rechera-text)] font-medium transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                <path d="M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z"/>
              </svg>
              利益管理表（個人用）をコピーして使用
            </a>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 lg:py-24 bg-[var(--rechera-cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-semibold text-[var(--rechera-text)] mb-4">
              コース一覧
            </h2>
            <p className="text-[var(--rechera-text-muted)]">
              学びたいコースを選択してください
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {salesCourses.map((course) => (
              <motion.div key={course.slug} variants={itemVariants}>
                <Link href={`/courses/sales/${course.slug}`}>
                  <Card className="h-full bg-white border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300 hover:translate-y-[-4px] cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--rechera-pink)]/20 flex items-center justify-center mb-4">
                        <BookOpen className="w-6 h-6 text-[var(--rechera-text)]" />
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--rechera-text)] mb-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-[var(--rechera-text-muted)] line-clamp-3">
                        {course.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
