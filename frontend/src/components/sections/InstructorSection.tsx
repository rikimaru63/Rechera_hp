"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function InstructorSection() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--rechera-cream)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[var(--rechera-text)] mb-4">講師紹介</h2>
          <p className="text-[var(--rechera-text-muted)] max-w-2xl mx-auto">
            あなたの成長をサポートする、経験豊富な講師をご紹介します。
          </p>
        </motion.div>

        {/* Instructor Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[var(--rechera-beige)] rounded-3xl soft-shadow overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative aspect-square lg:aspect-auto lg:min-h-[400px] bg-[var(--rechera-pink)]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for instructor image */}
                  <div className="w-48 h-48 rounded-full bg-[var(--rechera-pink)]/30 flex items-center justify-center">
                    <span className="text-6xl text-[var(--rechera-text)]/30">R</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--rechera-pink)]/40 text-sm font-medium text-[var(--rechera-text)] mb-4">
                    Founder & Instructor
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--rechera-text)] mb-2">
                    講師名
                  </h3>
                  <p className="text-[var(--rechera-text-muted)]">
                    Rechera 代表 / SNSマーケティング講師
                  </p>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[var(--rechera-pink)]/40" />
                  <blockquote className="pl-8 text-[var(--rechera-text)] leading-relaxed">
                    私自身も子育てをしながら、在宅ワークで経済的自立を実現しました。
                    同じ悩みを持つ女性たちに、私が学んできたことをお伝えしたい。
                    Recheraは、あなたの「個」が輝ける場所です。
                  </blockquote>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[var(--rechera-cream)] rounded-2xl">
                    <div className="text-2xl font-bold text-[var(--rechera-text)]">
                      500+
                    </div>
                    <div className="text-sm text-[var(--rechera-text-muted)]">
                      受講生
                    </div>
                  </div>
                  <div className="text-center p-4 bg-[var(--rechera-cream)] rounded-2xl">
                    <div className="text-2xl font-bold text-[var(--rechera-text)]">
                      5年+
                    </div>
                    <div className="text-sm text-[var(--rechera-text-muted)]">
                      講師歴
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
