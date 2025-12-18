"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "体系的な学び",
    description:
      "物販からWeb/SNSマーケティングまで、幅広いスキルを習得できます。初心者でも安心して学べるカリキュラムをご用意しています。",
  },
  {
    icon: Users,
    title: "居心地の良いコミュニティ",
    description:
      "アトリエのような安心感のある空間で、仲間とともに成長できます。同じ目標を持つ仲間との繋がりが、あなたの成長を加速させます。",
  },
  {
    icon: Sparkles,
    title: "個が輝く場所",
    description:
      "母でも妻でもなく一人の人間として、あなたらしく輝ける場所です。経済的・精神的な自立を目指し、最高に愛おしい人生を手に入れましょう。",
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
          <h2 className="text-[var(--rechera-text)] mb-4">
            Recheraで得られるもの
          </h2>
          <p className="text-[var(--rechera-text-muted)] max-w-2xl mx-auto">
            洗練された価値ある知識を身につけ、高単価で自由な時間とお金のゆとりを作る。
            経済的・精神的に自立した、あなたにとって最高の人生を。
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
              <Card className="h-full bg-[var(--rechera-cream)] border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300 hover:translate-y-[-4px]">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[var(--rechera-pink)]/30 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-[var(--rechera-text)]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-[var(--rechera-text)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--rechera-text-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
