"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  ArrowRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("パスワードが一致しません");
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError("パスワードは6文字以上で入力してください");
      return;
    }

    setIsLoading(true);

    const result = await register({
      username,
      email,
      password,
    });

    setIsLoading(false);

    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.error || "登録に失敗しました");
    }
  };

  // Success state
  if (isSuccess) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 bg-[var(--rechera-cream)]">
        <div className="mx-auto max-w-md w-full px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white border-none rounded-3xl soft-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-2xl font-semibold text-[var(--rechera-text)] mb-4">
                  登録完了
                </h1>
                <p className="text-[var(--rechera-text-muted)] mb-6 leading-relaxed">
                  アカウントの登録が完了しました。
                  <br />
                  管理者による承認後、ログインできるようになります。
                  <br />
                  しばらくお待ちください。
                </p>
                <Link href="/login">
                  <Button className="w-full h-12 rounded-2xl bg-[var(--rechera-pink)] text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/80 font-medium transition-all duration-300">
                    ログインページへ
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-[var(--rechera-cream)]">
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
              新規登録
            </h1>
            <p className="text-[var(--rechera-text-muted)]">
              アカウントを作成して学習を始めましょう
            </p>
          </div>

          {/* Register Card */}
          <Card className="bg-white border-none rounded-3xl soft-shadow">
            <CardContent className="p-8">
              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-red-50 flex items-center gap-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-600">{error}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Username */}
                <div className="space-y-2">
                  <label
                    htmlFor="username"
                    className="text-sm font-medium text-[var(--rechera-text)]"
                  >
                    ユーザー名
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--rechera-text-muted)]" />
                    <Input
                      id="username"
                      type="text"
                      placeholder="お名前またはニックネーム"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="pl-12 h-12 rounded-2xl border-[var(--rechera-greige)] focus:border-[var(--rechera-pink)] focus:ring-[var(--rechera-pink)]"
                      required
                      disabled={isLoading}
                      minLength={3}
                    />
                  </div>
                </div>

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
                      disabled={isLoading}
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
                      placeholder="6文字以上"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-12 pr-12 h-12 rounded-2xl border-[var(--rechera-greige)] focus:border-[var(--rechera-pink)] focus:ring-[var(--rechera-pink)]"
                      required
                      disabled={isLoading}
                      minLength={6}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] transition-colors"
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-[var(--rechera-text)]"
                  >
                    パスワード（確認）
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--rechera-text-muted)]" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="パスワードを再入力"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="pl-12 pr-12 h-12 rounded-2xl border-[var(--rechera-greige)] focus:border-[var(--rechera-pink)] focus:ring-[var(--rechera-pink)]"
                      required
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[var(--rechera-text-muted)] hover:text-[var(--rechera-text)] transition-colors"
                      disabled={isLoading}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-12 rounded-2xl bg-[var(--rechera-pink)] text-[var(--rechera-text)] hover:bg-[var(--rechera-pink)]/80 font-medium transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      登録中...
                    </span>
                  ) : (
                    <>
                      アカウントを作成
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
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

              {/* Login Link */}
              <p className="text-center text-sm text-[var(--rechera-text-muted)]">
                すでにアカウントをお持ちの方は
                <Link
                  href="/login"
                  className="ml-1 font-medium text-[var(--rechera-text)] hover:text-[var(--rechera-pink)] transition-colors"
                >
                  ログイン
                </Link>
              </p>
            </CardContent>
          </Card>

          {/* Notice */}
          <p className="text-center text-xs text-[var(--rechera-text-muted)] mt-6">
            登録後、管理者による承認が必要です。
            <br />
            承認後にログインできるようになります。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
