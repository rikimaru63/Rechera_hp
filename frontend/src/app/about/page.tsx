"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Target, Palette, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const philosophies = [
  {
    icon: Sparkles,
    title: "洗練された価値ある知識を付ける",
    description:
      "時代に流されない本質的なスキルと知識を身につけることで、長期的に活躍できる力を養います。",
  },
  {
    icon: Target,
    title: "高単価で自由な時間、お金のゆとりを作る",
    description:
      "効率的に働き、質の高い価値を提供することで、時間とお金の両方に余裕を持てる働き方を実現します。",
  },
  {
    icon: Heart,
    title: "経済的・精神的に自立する",
    description:
      "誰かに依存せず、自分の力で人生を切り開く力を身につけ、本当の意味での自由を手に入れます。",
  },
  {
    icon: Palette,
    title: "「個」が輝ける居場所",
    description:
      "母でも妻でもなく、一人の人間として自分らしく輝ける場所。それがRecheraです。",
  },
];

const courseCategories = [
  {
    title: "物販関連",
    description: "高単価物販、MNP、光回線、iPhoneなど、実践的な物販スキルを学べます。",
    href: "/courses/sales",
    color: "bg-[var(--rechera-pink)]/20",
  },
  {
    title: "Web/SNS関連",
    description:
      "SNSマーケティング、インスタグラム運用、ライティングなど、オンラインでの発信力を高めます。",
    href: "/courses/web-sns",
    color: "bg-[var(--rechera-blue)]/20",
  },
  {
    title: "営業/その他",
    description:
      "売れる営業のポイント、個別相談の流れなど、ビジネスの基盤となるスキルを習得します。",
    href: "/courses/business",
    color: "bg-[var(--rechera-beige)]",
  },
];

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--rechera-pink)]/40 text-sm font-medium text-[var(--rechera-text)] mb-6">
              About Rechera
            </span>
            <h1 className="text-[var(--rechera-text)] mb-6">はじめに</h1>
            <p className="text-lg text-[var(--rechera-text-muted)] leading-relaxed">
              Recheraは、20代半ば〜30代後半の子育て世代の女性に向けた、
              SNS運用スクールです。在宅ワーク、フリーランス、起業を目指す方に、
              洗練された価値ある知識を提供します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 bg-[var(--rechera-cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--rechera-text)] mb-4">Recheraの理念</h2>
            <p className="text-[var(--rechera-text-muted)] max-w-2xl mx-auto">
              私たちが大切にしている4つの価値観
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {philosophies.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-[var(--rechera-beige)] border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--rechera-pink)]/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-[var(--rechera-text)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--rechera-text)] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[var(--rechera-text-muted)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Target User Section */}
      <section className="py-20 lg:py-32 bg-[var(--rechera-blue)]/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[var(--rechera-text)] mb-6">
                こんな方に
                <br />
                おすすめです
              </h2>
              <ul className="space-y-4">
                {[
                  "子育てしながら在宅で働きたい方",
                  "フリーランスとして独立したい方",
                  "SNSを使って自分のビジネスを始めたい方",
                  "誠実で上品なコミュニティで学びたい方",
                  "経済的・精神的に自立したい方",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--rechera-pink)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[var(--rechera-text)]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[var(--rechera-cream)] rounded-3xl p-8 soft-shadow"
            >
              <h3 className="text-xl font-semibold text-[var(--rechera-text)] mb-4">
                Rechera Pallet
              </h3>
              <p className="text-[var(--rechera-text-muted)] leading-relaxed mb-6">
                正解は一つじゃない。それぞれの色を混ぜて、自分だけの働き方を描こう。
              </p>
              <p className="text-[var(--rechera-text-muted)] leading-relaxed">
                Recheraは、一人ひとりの個性を大切にしています。
                画一的な成功法則を押し付けるのではなく、
                あなたらしい働き方を一緒に見つけていく場所です。
                アトリエのような居心地の良い空間で、
                仲間とともに成長していきましょう。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Overview Section */}
      <section className="py-20 lg:py-32 bg-[var(--rechera-cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-[var(--rechera-text)] mb-4">学べる内容</h2>
            <p className="text-[var(--rechera-text-muted)] max-w-2xl mx-auto">
              物販からSNSマーケティングまで、幅広いスキルを習得できます
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {courseCategories.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link href={category.href}>
                  <Card
                    className={`h-full ${category.color} border-none rounded-3xl soft-shadow hover:soft-shadow-hover transition-all duration-300 hover:translate-y-[-4px] cursor-pointer`}
                  >
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold text-[var(--rechera-text)] mb-3">
                        {category.title}
                      </h3>
                      <p className="text-[var(--rechera-text-muted)] leading-relaxed mb-4">
                        {category.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-[var(--rechera-text)]">
                        詳しく見る
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[var(--rechera-pink)]/20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-[var(--rechera-text)]">
              一緒に、
              <br className="sm:hidden" />
              はじめませんか？
            </h2>
            <p className="text-lg text-[var(--rechera-text-muted)] max-w-2xl mx-auto">
              Recheraで、洗練された価値ある知識を身につけ、
              あなたにとって最高に愛おしい人生を手に入れましょう。
            </p>
            <Link href="/courses">
              <Button
                size="lg"
                className="rounded-2xl bg-[var(--rechera-pink)] text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/80 px-10 py-7 text-lg font-medium transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              >
                コース一覧を見る
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
