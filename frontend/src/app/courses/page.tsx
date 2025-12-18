"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courseCategories } from "@/lib/courses";

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

export default function CoursesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-[var(--rechera-beige)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--rechera-pink)]/40 text-sm font-medium text-[var(--rechera-text)] mb-6">
              Courses
            </span>
            <h1 className="text-[var(--rechera-text)] mb-6">コース一覧</h1>
            <p className="text-lg text-[var(--rechera-text-muted)] leading-relaxed">
              物販からSNSマーケティングまで、幅広いスキルを習得できます。
              あなたの目標に合わせて、最適なコースを見つけてください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Course Categories */}
      {courseCategories.map((category, categoryIndex) => (
        <section
          key={category.slug}
          className={`py-20 lg:py-24 ${
            categoryIndex % 2 === 0
              ? "bg-[var(--rechera-cream)]"
              : "bg-[var(--rechera-beige)]/50"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-[var(--rechera-text)] mb-2">
                    {category.name}
                  </h2>
                  <p className="text-[var(--rechera-text-muted)] max-w-2xl">
                    {category.description}
                  </p>
                </div>
                <Link
                  href={`/courses/${category.slug}`}
                  className="inline-flex items-center text-sm font-medium text-[var(--rechera-text)] hover:text-[var(--rechera-pink)] transition-colors"
                >
                  すべて見る
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            {/* Courses Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {category.courses.slice(0, 6).map((course) => (
                <motion.div key={course.slug} variants={itemVariants}>
                  <Link href={`/courses/${category.slug}/${course.slug}`}>
                    <Card className="h-full bg-white border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300 hover:translate-y-[-4px] cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-[var(--rechera-pink)]/20 flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-6 h-6 text-[var(--rechera-text)]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-semibold text-[var(--rechera-text)] mb-2 line-clamp-2">
                              {course.title}
                            </h3>
                            <p className="text-sm text-[var(--rechera-text-muted)] line-clamp-2">
                              {course.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Show more if there are more courses */}
            {category.courses.length > 6 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mt-8"
              >
                <Link
                  href={`/courses/${category.slug}`}
                  className="inline-flex items-center px-6 py-3 rounded-2xl bg-[var(--rechera-pink)]/20 text-[var(--rechera-text)] font-medium hover:bg-[var(--rechera-pink)]/30 transition-all duration-300"
                >
                  さらに {category.courses.length - 6} コースを見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
