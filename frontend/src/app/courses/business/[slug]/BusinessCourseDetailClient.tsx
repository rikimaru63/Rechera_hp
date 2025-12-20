"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import VideoCard from "@/components/common/VideoCard";
import type { Course } from "@/lib/courses";

interface BusinessCourseDetailClientProps {
  course: Course;
  prevCourse: Course | null;
  nextCourse: Course | null;
  relatedCourses: Course[];
}

// Zoom archive videos
const zoomArchiveVideos = [
  { title: "8月30日", youtubeUrl: "https://youtu.be/2eZC5inbeQE", year: "2023" },
  { title: "9月24日", youtubeUrl: "https://youtu.be/OvNhlOurR-w", year: "2023" },
  { title: "10月23日", youtubeUrl: "https://youtu.be/cdFEPEPh6SA", year: "2023" },
  { title: "11月23日", youtubeUrl: "https://youtu.be/CPrMqdiN_54", year: "2023" },
  { title: "12月27日", youtubeUrl: "https://youtu.be/83Gk5BJTJKE", year: "2023" },
  { title: "2月26日", youtubeUrl: "https://youtu.be/NtEPxnHyJmc", year: "2024" },
  { title: "3月27日", youtubeUrl: "https://youtu.be/xXtaJvZ5GLc", year: "2024" },
  { title: "4月25日", youtubeUrl: "https://youtu.be/QIASQjfUqq0", year: "2024" },
  { title: "5月27日", youtubeUrl: "https://youtu.be/w8JB2kqME68", year: "2024" },
  { title: "7月29日", youtubeUrl: "https://youtu.be/xKeW9ZUmOQ8", year: "2024" },
  { title: "8月30日", youtubeUrl: "https://youtu.be/55yAG7oxrqk", year: "2024" },
  { title: "9月29日", youtubeUrl: "https://youtu.be/MT-6C_pIKZw", year: "2024" },
  { title: "10月24日", youtubeUrl: "https://youtu.be/UB38gDPC_Qo", year: "2024" },
  { title: "11月21日", youtubeUrl: "https://youtu.be/c5uv6UuHmC8", year: "2024" },
  { title: "12月19日", youtubeUrl: "https://youtu.be/J_4T8XcLuhw", year: "2024" },
];

export default function BusinessCourseDetailClient({
  course,
  prevCourse,
  nextCourse,
  relatedCourses,
}: BusinessCourseDetailClientProps) {
  const isZoomArchive = course.slug === "zoom-archive";

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-[var(--rechera-beige)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/courses/business"
              className="inline-flex items-center text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] mb-6 transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              営業/その他に戻る
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className="bg-[var(--rechera-greige)]/40 text-[var(--rechera-text)] rounded-full"
              >
                営業/その他
              </Badge>
            </div>
            <h1 className="text-[var(--rechera-text)] mb-4">{course.title}</h1>
            <p className="text-lg text-[var(--rechera-text-muted)] max-w-3xl">
              {course.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zoom Archive Section */}
      {isZoomArchive && (
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
                全体ZOOMアーカイブ
              </h2>
              <p className="text-[var(--rechera-text-muted)]">
                過去の全体ZOOMセミナーの録画をご覧いただけます
              </p>
            </motion.div>

            {/* 2024 Videos */}
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <Calendar className="w-5 h-5 text-[var(--rechera-pink)]" />
                <h3 className="text-xl font-semibold text-[var(--rechera-text)]">
                  2024年
                </h3>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {zoomArchiveVideos
                  .filter((v) => v.year === "2024")
                  .map((video, index) => (
                    <VideoCard
                      key={index}
                      title={`全体ZOOM ${video.title}`}
                      youtubeUrl={video.youtubeUrl}
                    />
                  ))}
              </div>
            </div>

            {/* 2023 Videos */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <Calendar className="w-5 h-5 text-[var(--rechera-pink)]" />
                <h3 className="text-xl font-semibold text-[var(--rechera-text)]">
                  2023年
                </h3>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {zoomArchiveVideos
                  .filter((v) => v.year === "2023")
                  .map((video, index) => (
                    <VideoCard
                      key={index}
                      title={`全体ZOOM ${video.title}`}
                      youtubeUrl={video.youtubeUrl}
                    />
                  ))}
              </div>
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
                href={`/courses/business/${prevCourse.slug}`}
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
                href={`/courses/business/${nextCourse.slug}`}
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
                    href={`/courses/business/${relatedCourse.slug}`}
                  >
                    <Card className="h-full bg-white border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300 hover:translate-y-[-4px]">
                      <CardContent className="p-6">
                        <div className="w-10 h-10 rounded-xl bg-[var(--rechera-beige)] flex items-center justify-center mb-4">
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
