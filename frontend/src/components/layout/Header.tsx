"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Navigation Structure
const navigation = {
  main: [
    { name: "ホーム", href: "/" },
    { name: "はじめに", href: "/about" },
    { name: "WEBデザイン", href: "/courses/web-design" },
    { name: "ZOOMアーカイブ", href: "/courses/business/zoom-archive" },
  ],
  courses: [
    {
      name: "物販関連",
      href: "/courses/sales",
      items: [
        { name: "高単価物販", href: "/courses/sales/high-value" },
        { name: "MNP", href: "/courses/sales/mnp" },
        { name: "光回線乗り換え", href: "/courses/sales/internet" },
        { name: "iPhone", href: "/courses/sales/iphone" },
        { name: "物販情報noteまとめ", href: "/courses/sales/note-summary" },
        { name: "ロードマップ", href: "/courses/sales/roadmap" },
      ],
    },
    {
      name: "SNS関連",
      href: "/courses/web-sns",
      items: [
        { name: "SNSマーケティング", href: "/courses/web-sns/sns-marketing" },
        { name: "マーケティングとは", href: "/courses/web-sns/marketing-basics" },
        { name: "インスタを使うべき理由", href: "/courses/web-sns/why-instagram" },
        { name: "初期アカウント設定方法", href: "/courses/web-sns/account-setup" },
        { name: "永久不変のフォローされるプロフィール", href: "/courses/web-sns/profile" },
        { name: "アカウントコンセプト設計ワーク", href: "/courses/web-sns/concept-design" },
        { name: "ターゲット設定３つの原則", href: "/courses/web-sns/target-setting" },
        { name: "基礎・各機能の目的と活用方法", href: "/courses/web-sns/features" },
        { name: "インサイトの見方と分析", href: "/courses/web-sns/insights" },
        { name: "ハッシュタグ完全攻略", href: "/courses/web-sns/hashtags" },
        { name: "基本のレイアウト", href: "/courses/web-sns/layout" },
        { name: "投稿チェックリスト", href: "/courses/web-sns/post-checklist" },
        { name: "投稿コンテンツ管理シート", href: "/courses/web-sns/content-management" },
        { name: "インスタ運用で使えるキラーワード", href: "/courses/web-sns/killer-words" },
        { name: "ライティング・言語化", href: "/courses/web-sns/writing" },
        { name: "差がつく！ストーリー運用", href: "/courses/web-sns/stories" },
        { name: "公式ライン作成方法", href: "/courses/web-sns/line-official" },
      ],
    },
    {
      name: "営業/その他",
      href: "/courses/business",
      items: [
        { name: "売れる営業のポイント", href: "/courses/business/sales-points" },
        { name: "個別相談の流れマニュアル", href: "/courses/business/consultation" },
        { name: "エデュケーター公開用マインドマップ", href: "/courses/business/mindmap" },
        { name: "Discord使用方法", href: "/courses/business/discord" },
      ],
    },
  ],
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--rechera-cream)]/95 backdrop-blur-sm border-b border-[var(--rechera-greige)]/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.span
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
              whileHover={{ scale: 1.02 }}
            >
              Rechera
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/30 rounded-xl transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* Course Dropdowns */}
            {navigation.courses.map((category) => (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/30 rounded-xl transition-all duration-300">
                    {category.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className={`w-64 bg-[var(--rechera-cream)] border-[var(--rechera-greige)]/30 rounded-2xl shadow-lg ${
                    category.name === "Web/SNS関連" ? "max-h-[70vh] overflow-y-auto" : ""
                  }`}
                  align="start"
                >
                  {category.items.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        href={item.href}
                        className="w-full px-4 py-2.5 text-sm text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/30 rounded-xl cursor-pointer transition-all duration-300"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Login Button (Desktop) */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link href="/login">
              <Button
                variant="outline"
                className="rounded-2xl border-[var(--rechera-pink)] text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/30 transition-all duration-300"
              >
                <User className="h-4 w-4 mr-2" />
                ログイン
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] bg-[var(--rechera-cream)] border-[var(--rechera-greige)]/30"
            >
              <div className="flex flex-col gap-6 pt-8">
                {/* Mobile Logo */}
                <Link
                  href="/"
                  className="text-2xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
                  onClick={() => setIsOpen(false)}
                >
                  Rechera
                </Link>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-2">
                  {navigation.main.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-4 py-3 text-base font-medium text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/30 rounded-xl transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Mobile Course Accordions */}
                  <Accordion type="single" collapsible className="w-full">
                    {navigation.courses.map((category, index) => (
                      <AccordionItem
                        key={category.name}
                        value={`item-${index}`}
                        className="border-b-0"
                      >
                        <AccordionTrigger className="px-4 py-3 text-base font-medium text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/30 rounded-xl hover:no-underline transition-all duration-300">
                          {category.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-1 pl-4">
                            {category.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="px-4 py-2.5 text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/20 rounded-xl transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </nav>

                {/* Mobile Login Button */}
                <div className="pt-4 border-t border-[var(--rechera-greige)]/30">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button className="w-full rounded-2xl bg-[var(--rechera-pink)] text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/80 transition-all duration-300">
                      <User className="h-4 w-4 mr-2" />
                      ログイン
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
