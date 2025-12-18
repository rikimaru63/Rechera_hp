"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login - will be connected to Strapi auth
    console.log("Login attempt:", { email, password });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 bg-[var(--rechera-cream)]">
      <div className="mx-auto max-w-md w-full px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <Link
              href="/"
              className="inline-block text-3xl font-bold tracking-tight mb-4"
              style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
            >
              Rechera
            </Link>
            <h1 className="text-2xl font-semibold text-[var(--rechera-text)] mb-2">
              ログイン
            </h1>
            <p className="text-[var(--rechera-text-muted)]">
              アカウントにログインして学習を始めましょう
            </p>
          </div>

          {/* Login Card */}
          <Card className="bg-white border-none rounded-3xl soft-shadow">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-[var(--rechera-text)]"
                  >
                    メールアドレス
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--rechera-text-muted)]" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-12 rounded-2xl border-[var(--rechera-greige)] focus:border-[var(--rechera-pink)] focus:ring-[var(--rechera-pink)]"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-[var(--rechera-text)]"
                  >
                    パスワード
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--rechera-text-muted)]" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="パスワードを入力"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-12 pr-12 h-12 rounded-2xl border-[var(--rechera-greige)] focus:border-[var(--rechera-pink)] focus:ring-[var(--rechera-pink)]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="text-right">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] transition-colors"
                  >
                    パスワードをお忘れですか？
                  </Link>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 rounded-2xl bg-[var(--rechera-pink)] text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/80 font-medium transition-all duration-300"
                >
                  ログイン
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[var(--rechera-greige)]/30" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-[var(--rechera-text-muted)]">
                    または
                  </span>
                </div>
              </div>

              {/* Register Link */}
              <p className="text-center text-sm text-[var(--rechera-text-muted)]">
                アカウントをお持ちでない方は
                <Link
                  href="/register"
                  className="ml-1 font-medium text-[var(--rechera-text)] hover:text-[var(--rechera-pink)] transition-colors"
                >
                  新規登録
                </Link>
              </p>
            </CardContent>
          </Card>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="text-sm text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] transition-colors"
            >
              ← ホームに戻る
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
