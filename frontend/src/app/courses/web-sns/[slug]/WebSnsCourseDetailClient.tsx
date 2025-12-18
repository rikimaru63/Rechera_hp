"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/lib/courses";

interface WebSnsCourseDetailClientProps {
  course: Course;
  prevCourse: Course | null;
  nextCourse: Course | null;
  relatedCourses: Course[];
}

export default function WebSnsCourseDetailClient({
  course,
  prevCourse,
  nextCourse,
  relatedCourses,
}: WebSnsCourseDetailClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-[var(--rechera-blue)]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/courses/web-sns"
              className="inline-flex items-center text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] mb-6 transition-colors"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Web/SNS関連に戻る
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className="bg-[var(--rechera-blue)]/40 text-[var(--rechera-text)] rounded-full"
              >
                Web/SNS関連
              </Badge>
            </div>
            <h1 className="text-[var(--rechera-text)] mb-4">{course.title}</h1>
            <p className="text-lg text-[var(--rechera-text-muted)] max-w-3xl">
              {course.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-[var(--rechera-cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Course Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="bg-white border-none rounded-3xl soft-shadow overflow-hidden">
                <CardContent className="p-8 lg:p-12">
                  {/* Content Preview */}
                  <div className="prose prose-lg max-w-none">
                    <div className="flex items-center gap-3 p-6 bg-[var(--rechera-beige)] rounded-2xl mb-8">
                      <Lock className="w-6 h-6 text-[var(--rechera-text-muted)]" />
                      <div>
                        <p className="font-medium text-[var(--rechera-text)] mb-1">
                          このコンテンツは会員限定です
                        </p>
                        <p className="text-sm text-[var(--rechera-text-muted)]">
                          ログインして全てのコンテンツにアクセスしましょう
                        </p>
                      </div>
                    </div>

                    {/* Course Preview */}
                    <div className="space-y-6 text-[var(--rechera-text)]">
                      <h2 className="text-2xl font-bold">コース概要</h2>
                      <p className="text-[var(--rechera-text-muted)] leading-relaxed">
                        {course.description}
                      </p>

                      <h3 className="text-xl font-semibold mt-8">
                        このコースで学べること
                      </h3>
                      <ul className="space-y-3">
                        {[
                          "実践的なスキルと知識",
                          "すぐに使えるテンプレート",
                          "成功事例とケーススタディ",
                          "個別サポート対応",
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-3 text-[var(--rechera-text-muted)]"
                          >
                            <div className="w-5 h-5 rounded-full bg-[var(--rechera-blue)] flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-12 pt-8 border-t border-[var(--rechera-greige)]/20">
                    <Link href="/login">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto rounded-2xl bg-[var(--rechera-blue)] text-[var(--rechera-text)] hover:bg-[var(--rechera-blue)]/80 px-8 py-6 text-base font-medium transition-all duration-300"
                      >
                        ログインしてコンテンツを見る
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                {prevCourse ? (
                  <Link
                    href={`/courses/web-sns/${prevCourse.slug}`}
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
                    href={`/courses/web-sns/${nextCourse.slug}`}
                    className="flex items-center gap-2 text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] transition-colors"
                  >
                    <span className="text-sm">次のコース</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 space-y-8"
            >
              {/* Related Courses */}
              <Card className="bg-white border-none rounded-3xl soft-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[var(--rechera-text)] mb-4">
                    関連コース
                  </h3>
                  <div className="space-y-4">
                    {relatedCourses.map((relatedCourse) => (
                      <Link
                        key={relatedCourse.slug}
                        href={`/courses/web-sns/${relatedCourse.slug}`}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--rechera-beige)] transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[var(--rechera-blue)]/20 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-5 h-5 text-[var(--rechera-text)]" />
                        </div>
                        <div>
                          <p className="font-medium text-[var(--rechera-text)] text-sm">
                            {relatedCourse.title}
                          </p>
                          <p className="text-xs text-[var(--rechera-text-muted)] mt-1 line-clamp-2">
                            {relatedCourse.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-[var(--rechera-blue)]/20 border-none rounded-3xl">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-[var(--rechera-text)] mb-2">
                    全コンテンツにアクセス
                  </h3>
                  <p className="text-sm text-[var(--rechera-text-muted)] mb-4">
                    会員登録して、すべてのコースを学習しましょう
                  </p>
                  <Link href="/login">
                    <Button className="w-full rounded-2xl bg-[var(--rechera-blue)] text-[var(--rechera-text)] hover:bg-[var(--rechera-blue)]/80">
                      ログイン
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
