"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    number: "01",
    title: "体系的な学び",
    description:
      "物販からWeb・SNSマーケティングまで、今の自分に必要な順番で学べるカリキュラムを用意しています。",
    image: "/images/feature-learning.png",
  },
  {
    icon: Users,
    number: "02",
    title: "居心地の良いコミュニティ",
    description:
      "Recheraは、競争したり、比べ合ったりする場所ではなく、アトリエのような、あたたかな空間で同じように考え、進んでいる仲間と自分のペースで成長していけます。",
    image: "/images/feature-community.png",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "個が輝く場所",
    description:
      "母でも、妻でも、何者かにならなくてもいい。「あなた」として、大切に扱われる場所です。経済的にも、気持ちの面でも、自分の人生を自分で選べる力を少しずつ育てていきます。",
    image: "/images/feature-individual.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--rechera-beige)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[var(--rechera-text)] mb-6">
            Recheraで得られるもの
          </h2>
          <p className="text-[var(--rechera-text-muted)] max-w-2xl mx-auto text-lg leading-relaxed">
            「在宅で働きたい」
            <br />
            「収入の不安を減らしたい」
            <br />
            「何から始めればいいかわからない」
            <br />
            <span className="mt-4 block">
              そんな状態からでも、安心して一歩ずつ進めるように設計されています。
            </span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-[var(--rechera-cream)] border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300 hover:translate-y-[-4px] overflow-hidden flex flex-col">
                <CardContent className="p-8 flex-grow">
                  {/* Number & Icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-[var(--rechera-pink)]/60" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
                      {feature.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[var(--rechera-pink)]/30 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[var(--rechera-text)]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[var(--rechera-text)] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--rechera-text-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>

                {/* Feature Image - Bottom (always aligned) */}
                <div className="relative w-full h-52 overflow-hidden mt-auto">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
