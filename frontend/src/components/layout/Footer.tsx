"use client";

import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const footerNavigation = {
  main: [
    { name: "ホーム", href: "/" },
    { name: "はじめに", href: "/about" },
    { name: "コース一覧", href: "/courses" },
    { name: "ログイン", href: "/login" },
  ],
  courses: [
    { name: "物販関連", href: "/courses/sales" },
    { name: "Web/SNS関連", href: "/courses/web-sns" },
    { name: "営業/その他", href: "/courses/business" },
  ],
  legal: [
    { name: "プライバシーポリシー", href: "/privacy" },
    { name: "利用規約", href: "/terms" },
    { name: "特定商取引法に基づく表記", href: "/tokushoho" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--rechera-beige)] border-t border-[var(--rechera-greige)]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight block mb-4"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
            >
              Rechera
            </Link>
            <p className="text-sm text-[var(--rechera-text-muted)] leading-relaxed mb-6">
              洗練された価値ある知識を付ける。
              <br />
              正解は一つじゃない。それぞれの色を混ぜて、自分だけの働き方を描こう。
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-xl bg-[var(--rechera-cream)] hover:bg-[var(--rechera-pink)]/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-[var(--rechera-text)]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-xl bg-[var(--rechera-cream)] hover:bg-[var(--rechera-pink)]/30 transition-all duration-300"
                aria-label="LINE"
              >
                <MessageCircle className="h-5 w-5 text-[var(--rechera-text)]" />
              </a>
              <a
                href="#"
                className="p-2 rounded-xl bg-[var(--rechera-cream)] hover:bg-[var(--rechera-pink)]/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-[var(--rechera-text)]" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--rechera-text)] mb-4">
              ナビゲーション
            </h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--rechera-text)] mb-4">
              コース
            </h3>
            <ul className="space-y-3">
              {footerNavigation.courses.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--rechera-text)] mb-4">
              その他
            </h3>
            <ul className="space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[var(--rechera-greige)]/20">
          <p className="text-center text-sm text-[var(--rechera-text-muted)]">
            &copy; {new Date().getFullYear()} Rechera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
