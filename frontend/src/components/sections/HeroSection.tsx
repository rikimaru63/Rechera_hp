"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/common/HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Rechera Logo - Large Centered Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center"
          >
            <Image
              src="/images/rechera-logo.png"
              alt="Rechera"
              width={500}
              height={150}
              className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[500px] h-auto"
              priority
            />
          </motion.div>

          {/* Main Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-[var(--rechera-text)] font-medium max-w-3xl mx-auto"
          >
            あなたらしい働き方を育てていく場所
          </motion.p>

          {/* Brand Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="inline-block"
          >
            <span className="px-6 py-2 rounded-full bg-[var(--rechera-pink)]/40 text-sm font-medium text-[var(--rechera-text)]">
              Rechera Pallet
            </span>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-lg sm:text-xl text-[var(--rechera-text-muted)] max-w-2xl mx-auto"
          >
            正解は一つじゃない。それぞれの色を混ぜて、
            <br className="hidden sm:block" />
            自分だけの働き方を描こう。
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/about">
              <Button
                size="lg"
                className="rounded-2xl bg-[var(--rechera-pink)] text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/80 px-8 py-6 text-base font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              >
                はじめに
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl border-[var(--rechera-greige)] text-[var(--rechera-text)] hover:bg-[var(--rechera-beige)] px-8 py-6 text-base font-medium transition-all duration-300"
              >
                ログイン
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[var(--rechera-greige)] flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[var(--rechera-pink)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
