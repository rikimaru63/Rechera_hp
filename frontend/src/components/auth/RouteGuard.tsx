"use client";

import { useAuth } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RouteGuardProps {
  children: ReactNode;
}

/**
 * Public paths that don't require authentication
 */
const PUBLIC_PATHS = ["/login", "/register", "/forgot-password", "/reset-password"];

/**
 * SNS paths that require Master course type
 */
const SNS_PATHS = ["/courses/web-sns"];

/**
 * RouteGuard component for client-side route protection
 */
export default function RouteGuard({ children }: RouteGuardProps) {
  const { user, isLoading, isAuthenticated, canAccessSNS } = useAuth();
  const pathname = usePathname();

  // Check if current path is public
  const isPublicPath = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  // Show nothing while loading (prevents flash)
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--rechera-cream)]">
        <div className="animate-pulse text-[var(--rechera-text-muted)]">
          読み込み中...
        </div>
      </div>
    );
  }

  // Public paths don't need protection
  if (isPublicPath) {
    return <>{children}</>;
  }

  // User is logged in but not approved
  if (user && !user.isApproved) {
    return <PendingApprovalPage />;
  }

  // User is logged in but deactivated
  if (user && !user.isActive) {
    return <DeactivatedPage />;
  }

  // Check SNS access for standard users
  const isSNSPath = SNS_PATHS.some((path) => pathname.startsWith(path));
  if (isSNSPath && !canAccessSNS) {
    return <AccessDeniedPage />;
  }

  // User is authenticated and has access
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Not authenticated - this should be handled by middleware redirect
  // but just in case, show nothing
  return null;
}

/**
 * Pending approval page
 */
function PendingApprovalPage() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--rechera-cream)] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 soft-shadow text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--rechera-yellow)]/30 flex items-center justify-center">
          <Clock className="w-8 h-8 text-[var(--rechera-text)]" />
        </div>
        <h1 className="text-2xl font-semibold text-[var(--rechera-text)] mb-4">
          承認待ち
        </h1>
        <p className="text-[var(--rechera-text-muted)] mb-6 leading-relaxed">
          アカウントの登録が完了しました。
          <br />
          管理者による承認をお待ちください。
          <br />
          承認後、コースにアクセスできるようになります。
        </p>
        <Button
          variant="outline"
          onClick={logout}
          className="rounded-2xl border-[var(--rechera-greige)] text-[var(--rechera-text)]"
        >
          ログアウト
        </Button>
      </motion.div>
    </div>
  );
}

/**
 * Deactivated account page
 */
function DeactivatedPage() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--rechera-cream)] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 soft-shadow text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--rechera-pink)]/30 flex items-center justify-center">
          <Lock className="w-8 h-8 text-[var(--rechera-text)]" />
        </div>
        <h1 className="text-2xl font-semibold text-[var(--rechera-text)] mb-4">
          アクセス停止中
        </h1>
        <p className="text-[var(--rechera-text-muted)] mb-6 leading-relaxed">
          お客様のアカウントは現在停止されています。
          <br />
          ご質問がある場合は、管理者にお問い合わせください。
        </p>
        <Button
          variant="outline"
          onClick={logout}
          className="rounded-2xl border-[var(--rechera-greige)] text-[var(--rechera-text)]"
        >
          ログアウト
        </Button>
      </motion.div>
    </div>
  );
}

/**
 * Access denied page (for SNS courses with standard course type)
 */
function AccessDeniedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--rechera-cream)] px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 soft-shadow text-center"
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--rechera-blue)]/30 flex items-center justify-center">
          <Lock className="w-8 h-8 text-[var(--rechera-text)]" />
        </div>
        <h1 className="text-2xl font-semibold text-[var(--rechera-text)] mb-4">
          マスターコース限定
        </h1>
        <p className="text-[var(--rechera-text-muted)] mb-6 leading-relaxed">
          このコンテンツはマスターコース加入者限定です。
          <br />
          マスターコースへのアップグレードについては、
          <br />
          管理者にお問い合わせください。
        </p>
        <Link href="/">
          <Button
            variant="outline"
            className="rounded-2xl border-[var(--rechera-greige)] text-[var(--rechera-text)]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            ホームに戻る
          </Button>
        </Link>
      </motion.div>
    </div>
  );
}
