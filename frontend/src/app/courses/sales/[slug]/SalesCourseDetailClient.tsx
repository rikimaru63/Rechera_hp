"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import VideoCard from "@/components/common/VideoCard";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Course } from "@/lib/courses";

interface SalesCourseDetailClientProps {
  course: Course;
  prevCourse: Course | null;
  nextCourse: Course | null;
  relatedCourses: Course[];
}

// Video data for each course
const courseVideos: Record<string, { title: string; youtubeUrl: string }[]> = {
  mnp: [
    { title: "メカニズム", youtubeUrl: "https://youtu.be/EcIW30QG9WY" },
    { title: "MNPとは？", youtubeUrl: "https://youtu.be/7jDqPiD9TEY" },
    { title: "プロセス", youtubeUrl: "https://youtu.be/DJzddMT0uOo" },
    { title: "手配師", youtubeUrl: "https://youtu.be/lTecAOxPgWE" },
    { title: "専門用語", youtubeUrl: "https://youtu.be/hLx5I2rPd6I" },
    { title: "流れ・課題", youtubeUrl: "https://youtu.be/Tzh9soBB-nk" },
  ],
  internet: [
    { title: "光回線運用法", youtubeUrl: "https://youtu.be/OXGIoSWpnfU" },
    { title: "基礎知識", youtubeUrl: "https://youtu.be/FCtcXizZoM0" },
    { title: "契約", youtubeUrl: "https://youtu.be/AWiOfHLar4M" },
  ],
  iphone: [
    { title: "概要", youtubeUrl: "https://youtu.be/-I17ocAGHKA" },
    { title: "買取屋", youtubeUrl: "https://youtu.be/Pknrqh4u0jU" },
    { title: "購入タイミング", youtubeUrl: "https://youtu.be/unPDYSMhShk" },
    { title: "端末購入", youtubeUrl: "https://youtu.be/6T_elWByXtk" },
    { title: "クレカ用意", youtubeUrl: "https://youtu.be/TVnJMW9sSms" },
    { title: "デビットカード", youtubeUrl: "https://youtu.be/4sltkq-ErIc" },
    { title: "AppleIDの作成", youtubeUrl: "https://youtu.be/_ouvzYSdVoQ" },
    { title: "連携", youtubeUrl: "https://youtu.be/MKYHL_iUB4k" },
    { title: "Appleギフト", youtubeUrl: "https://youtu.be/hqePNdNL3Cg" },
    { title: "2025年新型iPhone伝達", youtubeUrl: "https://youtu.be/FgIfwt0fx4I" },
  ],
};

export default function SalesCourseDetailClient({
  course,
  prevCourse,
  nextCourse,
  relatedCourses,
}: SalesCourseDetailClientProps) {
  const videos = courseVideos[course.slug] || [];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-[var(--rechera-pink)]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/courses/sales"
              className="inline-flex items-center text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] mb-6 transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              物販関連に戻る
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className="bg-[var(--rechera-pink)]/40 text-[var(--rechera-text)] rounded-full"
              >
                物販関連
              </Badge>
            </div>
            <h1 className="text-[var(--rechera-text)] mb-4">{course.title}</h1>
            <p className="text-lg text-[var(--rechera-text-muted)] max-w-3xl">
              {course.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Markdown Content Section */}
      {course.content && (
        <section className="py-16 lg:py-24 bg-[var(--rechera-cream)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none prose-headings:text-[var(--rechera-text)] prose-p:text-[var(--rechera-text-muted)] prose-strong:text-[var(--rechera-text)] prose-a:text-[var(--rechera-pink)] prose-a:no-underline hover:prose-a:underline prose-ul:text-[var(--rechera-text-muted)] prose-ol:text-[var(--rechera-text-muted)] prose-li:marker:text-[var(--rechera-pink)] prose-blockquote:border-l-[var(--rechera-pink)] prose-blockquote:text-[var(--rechera-text-muted)] prose-code:bg-[var(--rechera-beige)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[var(--rechera-text)] prose-pre:bg-[var(--rechera-beige)] prose-table:text-[var(--rechera-text-muted)] prose-th:text-[var(--rechera-text)] prose-th:bg-[var(--rechera-pink)]/20"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {course.content}
              </ReactMarkdown>
            </motion.div>
          </div>
        </section>
      )}

      {/* Video Content Section */}
      {videos.length > 0 && (
        <section className="py-16 lg:py-24 bg-[var(--rechera-cream)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-semibold text-[var(--rechera-text)] mb-4">
                コンテンツ動画
              </h2>
              <p className="text-[var(--rechera-text-muted)]">
                順番に視聴して学習を進めましょう
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <VideoCard
                  key={index}
                  title={video.title}
                  youtubeUrl={video.youtubeUrl}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation & Related */}
      <section className="py-16 lg:py-24 bg-[var(--rechera-beige)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="flex justify-between items-center mb-16">
            {prevCourse ? (
              <Link
                href={`/courses/sales/${prevCourse.slug}`}
                className="flex items-center gap-2 text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">前のコース</span>
              </Link>
            ) : (
              <div />
            )}
            {nextCourse ? (
              <Link
                href={`/courses/sales/${nextCourse.slug}`}
                className="flex items-center gap-2 text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] transition-colors"
              >
                <span className="text-sm">次のコース</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Related Courses */}
          {relatedCourses.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-[var(--rechera-text)] mb-6 text-center">
                関連コース
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedCourses.map((relatedCourse) => (
                  <Link
                    key={relatedCourse.slug}
                    href={`/courses/sales/${relatedCourse.slug}`}
                  >
                    <Card className="h-full bg-white border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300 hover:translate-y-[-4px]">
                      <CardContent className="p-6">
                        <div className="w-10 h-10 rounded-xl bg-[var(--rechera-pink)]/20 flex items-center justify-center mb-4">
                          <BookOpen className="w-5 h-5 text-[var(--rechera-text)]" />
                        </div>
                        <h4 className="font-medium text-[var(--rechera-text)] mb-2">
                          {relatedCourse.title}
                        </h4>
                        <p className="text-sm text-[var(--rechera-text-muted)] line-clamp-2">
                          {relatedCourse.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
