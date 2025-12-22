"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
              SNS関連に戻る
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className="bg-[var(--rechera-blue)]/40 text-[var(--rechera-text)] rounded-full"
              >
                SNS関連
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
              className="prose prose-lg max-w-none prose-headings:text-[var(--rechera-text)] prose-p:text-[var(--rechera-text-muted)] prose-strong:text-[var(--rechera-text)] prose-a:text-[var(--rechera-blue)] prose-a:no-underline hover:prose-a:underline prose-ul:text-[var(--rechera-text-muted)] prose-ol:text-[var(--rechera-text-muted)] prose-li:marker:text-[var(--rechera-blue)] prose-blockquote:border-l-[var(--rechera-blue)] prose-blockquote:text-[var(--rechera-text-muted)] prose-code:bg-[var(--rechera-beige)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[var(--rechera-text)] prose-pre:bg-[var(--rechera-beige)] prose-table:text-[var(--rechera-text-muted)] prose-th:text-[var(--rechera-text)] prose-th:bg-[var(--rechera-blue)]/20"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {course.content}
              </ReactMarkdown>
            </motion.div>
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
                    href={`/courses/web-sns/${relatedCourse.slug}`}
                  >
                    <Card className="h-full bg-white border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300 hover:translate-y-[-4px]">
                      <CardContent className="p-6">
                        <div className="w-10 h-10 rounded-xl bg-[var(--rechera-blue)]/20 flex items-center justify-center mb-4">
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
