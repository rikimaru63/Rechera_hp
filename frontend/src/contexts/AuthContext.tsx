"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * User type definition
 */
export interface User {
  id: number;
  username: string;
  email: string;
  courseType: "standard" | "master";
  isApproved: boolean;
  isActive: boolean;
  isAdmin: boolean;
}

/**
 * Auth context type definition
 */
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  canAccessSNS: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string; pendingApproval?: boolean }>;
  register: (data: RegisterData) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  registrationNote?: string;
}

/**
 * Auth context
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * Public paths that don't require authentication
 */
const PUBLIC_PATHS = ["/login", "/register", "/forgot-password", "/reset-password"];

/**
 * Auth provider component
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  /**
   * Check if user is authenticated
   */
  const isAuthenticated = !!user && user.isApproved && user.isActive;

  /**
   * Check if user can access SNS courses
   */
  const canAccessSNS = isAuthenticated && user?.courseType === "master";

  /**
   * Check if user is admin
   */
  const isAdmin = isAuthenticated && (user?.isAdmin ?? false);

  /**
   * Fetch current user from API
   */
  const refreshUser = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/me");
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Login function
   */
  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string; pendingApproval?: boolean }> => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error || "ログインに失敗しました" };
      }

      // Check if user is approved and active
      if (!data.user.isApproved) {
        return {
          success: false,
          error: "アカウントは承認待ちです。管理者の承認をお待ちください。",
          pendingApproval: true,
        };
      }

      if (!data.user.isActive) {
        return {
          success: false,
          error: "アカウントが無効化されています。管理者にお問い合わせください。",
        };
      }

      setUser(data.user);
      return { success: true };
    } catch {
      return { success: false, error: "ネットワークエラーが発生しました" };
    }
  };

  /**
   * Register function
   */
  const register = async (
    data: RegisterData
  ): Promise<{ success: boolean; error?: string }> => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return { success: false, error: result.error || "登録に失敗しました" };
      }

      return { success: true };
    } catch {
      return { success: false, error: "ネットワークエラーが発生しました" };
    }
  };

  /**
   * Logout function
   */
  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      setUser(null);
      router.push("/login");
    }
  }, [router]);

  /**
   * Check auth status on mount
   */
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  /**
   * Redirect to login if not authenticated (for protected routes)
   */
  useEffect(() => {
    if (isLoading) return;

    const isPublicPath = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

    if (!isPublicPath && !user) {
      router.push("/login");
    }
  }, [isLoading, user, pathname, router]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated,
        canAccessSNS,
        isAdmin,
        login,
        register,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook to use auth context
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
