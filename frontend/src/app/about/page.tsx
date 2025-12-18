"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function AboutPage() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--rechera-cream)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[var(--rechera-beige)]">
              {/* Placeholder image - cozy workspace aesthetic */}
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Decorative elements to represent the aesthetic */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--rechera-beige)] to-[var(--rechera-pink)]/20"></div>
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
            className="space-y-8"
          >
            {/* Title */}
            <h1
              className="text-4xl lg:text-5xl font-light text-[var(--rechera-text)] tracking-wide"
              style={{ fontFamily: "var(--font-poppins), serif" }}
            >
              はじめに
            </h1>

            {/* Welcome Message */}
            <div className="space-y-6 text-[var(--rechera-text)]">
              <p className="text-lg">
                Recheraへようこそ🌿ご入会おめでとうございます！
              </p>

              <div className="space-y-2">
                <p>
                  初めに、やり方よりも先に「考え方」と向き合う時間を作ります
                </p>
                <p className="text-[var(--rechera-text-muted)]">
                  それは、ビジネスはノウハウだけでは続かないからです。
                </p>
              </div>

              <div className="space-y-3">
                <p>私たち女性にとって、</p>
                <p>土台となるマインドが結果を左右します。</p>

                <ul className="space-y-2 py-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[var(--rechera-text)]" />
                    <span>どんな未来を叶えたいのか</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[var(--rechera-text)]" />
                    <span>なぜ収入を増やしたいのか</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[var(--rechera-text)]" />
                    <span>そのために、何を優先し、何を手放すのか</span>
                  </li>
                </ul>

                <p>こうした問いに、</p>
                <p>
                  自分の言葉で答えられるようになることをとても大切にしています。
                </p>
                <p>正解はありません。誰かの成功をなぞる必要もありません。</p>
                <p>
                  大切なのは「なんとなく」ではなく自分で選んで進むという姿勢です🌷
                </p>
              </div>

              <div className="space-y-2 pt-4">
                <p>このページにある動画は、</p>
                <p>これから行動を積み重ねていくための軸をつくるものです。</p>
                <p className="text-[var(--rechera-pink-dark)]">
                  すぐに完璧に理解しようとしなくて大丈夫です🌸
                </p>
                <p>何度も見返しながら、</p>
                <p>今の自分に必要な言葉を受け取っていきましょう！</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
