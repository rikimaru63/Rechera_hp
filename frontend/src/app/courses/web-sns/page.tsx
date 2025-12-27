"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { webSnsCourses, snsSubcategories } from "@/lib/courses";

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

export default function WebSnsCoursesPage() {
  // サブカテゴリでコースをグループ化
  const getCoursesBySubcategory = (subcategorySlug: string) => {
    return webSnsCourses.filter(
      (course) => course.subcategory === subcategorySlug
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-[var(--rechera-blue)]/20">
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--rechera-blue)]/40 text-sm font-medium text-[var(--rechera-text)] mb-6">
              SNS Marketing
            </span>
            <h1 className="text-[var(--rechera-text)] mb-6">SNS関連</h1>
            <p className="text-lg text-[var(--rechera-text-muted)] leading-relaxed">
              SNSマーケティング、インスタグラム運用、ライティングなど、
              オンラインでの発信力を高めるスキルを習得できます。
              これからの時代に必須のデジタルスキルを身につけましょう。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subcategory Sections */}
      {snsSubcategories.map((subcategory, index) => {
        const courses = getCoursesBySubcategory(subcategory.slug);
        if (courses.length === 0) return null;

        const isEven = index % 2 === 0;
        const bgColor = isEven
          ? "bg-[var(--rechera-cream)]"
          : "bg-[var(--rechera-beige)]";

        return (
          <section key={subcategory.slug} className={`py-16 lg:py-20 ${bgColor}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--rechera-blue)]/30 flex items-center justify-center">
                    <Play className="w-4 h-4 text-[var(--rechera-text)]" />
                  </div>
                  <h2 className="text-xl font-semibold text-[var(--rechera-text)]">
                    {subcategory.name}
                  </h2>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {courses.map((course) => (
                  <motion.div key={course.slug} variants={itemVariants}>
                    <Link href={`/courses/web-sns/${course.slug}`}>
                      <Card className="h-full bg-white border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300 hover:translate-y-[-4px] cursor-pointer">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 rounded-2xl bg-[var(--rechera-blue)]/20 flex items-center justify-center mb-4">
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
        );
      })}
    </>
  );
}
