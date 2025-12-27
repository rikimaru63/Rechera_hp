"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--rechera-blue)]/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--rechera-pink)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--rechera-beige)]/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Heading */}
          <h2 className="text-[var(--rechera-text)]">
            あなたらしい働き方を、
            <br className="sm:hidden" />
            一緒に見つけませんか？
          </h2>

          {/* Description */}
          <p className="text-lg text-[var(--rechera-text-muted)] max-w-2xl mx-auto leading-relaxed">
            Recheraは、洗練された価値ある知識を身につけ、
            経済的・精神的に自立したい女性のための学びの場です。
            母でも妻でもなく、一人の人間として「個」が輝ける場所で、
            あなたにとって最高に愛おしい人生を手に入れましょう。
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/about">
              <Button
                size="lg"
                className="rounded-2xl bg-[var(--rechera-pink)] text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/80 px-10 py-7 text-lg font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              >
                はじめのメッセージを受け取る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-[var(--rechera-text-muted)]"
          >
            Rechera Pallet - 正解は一つじゃない。それぞれの色を混ぜて、自分だけの働き方を描こう
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
