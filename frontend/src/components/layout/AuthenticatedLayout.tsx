"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import RouteGuard from "@/components/auth/RouteGuard";

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

/**
 * Paths that should not show header/footer
 */
const NO_LAYOUT_PATHS = ["/login", "/register", "/forgot-password", "/reset-password"];

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const pathname = usePathname();

  // Check if current path should hide header/footer
  const hideLayout = NO_LAYOUT_PATHS.some((path) => pathname.startsWith(path));

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <RouteGuard>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </RouteGuard>
  );
}
