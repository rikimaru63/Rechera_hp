"use client";

import { motion } from "framer-motion";
import { Check, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-[var(--rechera-beige)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--rechera-cream)] soft-shadow">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--rechera-cream)] to-[var(--rechera-pink)]/20"></div>
                  <div className="relative z-10 text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/50 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-[var(--rechera-text)]/30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-[var(--rechera-text-muted)]">
                      イメージ画像
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h1 className="text-4xl lg:text-5xl font-light text-[var(--rechera-text)] mb-8 tracking-wide">
                はじめに
              </h1>
              <p className="text-xl text-[var(--rechera-text)] mb-6">
                Recheraへようこそ🌿ご入会おめでとうございます！
              </p>
              <div className="space-y-4 text-[var(--rechera-text-muted)] leading-relaxed">
                <p>
                  初めに、やり方よりも先に「考え方」と向き合う時間を作ります
                </p>
                <p>それは、ビジネスはノウハウだけでは続かないからです。</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mindset Section */}
      <section className="py-20 lg:py-32 bg-[var(--rechera-cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--rechera-text)] mb-4">
              私たち女性にとって、
              <br />
              土台となるマインドが結果を左右します
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              "どんな未来を叶えたいのか",
              "なぜ収入を増やしたいのか",
              "そのために、何を優先し、何を手放すのか",
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-[var(--rechera-beige)] border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--rechera-pink)]/30 flex items-center justify-center mx-auto mb-4">
                      <Check className="w-6 h-6 text-[var(--rechera-text)]" />
                    </div>
                    <p className="text-[var(--rechera-text)] font-medium">
                      {item}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 bg-[var(--rechera-blue)]/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <p className="text-lg text-[var(--rechera-text)] leading-relaxed">
              こうした問いに、
              <br />
              自分の言葉で答えられるようになることをとても大切にしています。
            </p>
            <p className="text-[var(--rechera-text-muted)] leading-relaxed">
              正解はありません。誰かの成功をなぞる必要もありません。
            </p>
            <p className="text-lg text-[var(--rechera-text)]">
              大切なのは「なんとなく」ではなく
              <br />
              自分で選んで進むという姿勢です🌷
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 lg:py-32 bg-[var(--rechera-cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-[var(--rechera-text)] mb-6">
              このページにある動画は
            </h2>
            <p className="text-[var(--rechera-text-muted)] max-w-2xl mx-auto leading-relaxed">
              これから行動を積み重ねていくための軸をつくるものです。
            </p>
            <p className="text-[var(--rechera-pink)] mt-4">
              すぐに完璧に理解しようとしなくて大丈夫です🌸
            </p>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-[var(--rechera-beige)] border-none rounded-3xl soft-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[var(--rechera-beige)] to-[var(--rechera-pink)]/20">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-[var(--rechera-pink)]/40 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-[var(--rechera-pink)]/60 transition-colors">
                      <Play className="w-8 h-8 text-[var(--rechera-text)] ml-1" />
                    </div>
                    <p className="text-sm text-[var(--rechera-text-muted)]">
                      動画プレースホルダー
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 space-y-2"
          >
            <p className="text-[var(--rechera-text)]">何度も見返しながら、</p>
            <p className="text-lg text-[var(--rechera-text)] font-medium">
              今の自分に必要な言葉を受け取っていきましょう！
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
