"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Check,
  X,
  Crown,
  Ban,
  RefreshCw,
  Search,
  Filter,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface User {
  id: number;
  username: string;
  email: string;
  courseType: "standard" | "master";
  isApproved: boolean;
  isActive: boolean;
  createdAt: string;
  approvedAt?: string;
  deactivatedAt?: string;
  registrationNote?: string;
}

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [adminToken, setAdminToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Admin login
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    try {
      const response = await fetch(`${API_URL}/api/auth/local`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: adminEmail,
          password: adminPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setLoginError(data?.error?.message || "ログインに失敗しました");
        return;
      }

      setAdminToken(data.jwt);
      setIsLoggedIn(true);
      fetchUsers(data.jwt);
    } catch {
      setLoginError("ネットワークエラーが発生しました");
    }
  };

  // Fetch users
  const fetchUsers = async (token: string) => {
    setIsLoading(true);
    setError("");

    try {
      const params = new URLSearchParams();
      if (filter !== "all") params.append("status", filter);
      if (search) params.append("search", search);

      const query = params.toString() ? `?${params.toString()}` : "";

      const response = await fetch(`${API_URL}/api/user-management${query}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error("ユーザー取得に失敗しました");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError("ユーザー一覧の取得に失敗しました");
    } finally {
      setIsLoading(false);
    }
  };

  // Approve user
  const approveUser = async (userId: number, courseType: "standard" | "master") => {
    try {
      const response = await fetch(
        `${API_URL}/api/user-management/${userId}/approve`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          },
          body: JSON.stringify({ courseType }),
        }
      );

      if (!response.ok) throw new Error();

      fetchUsers(adminToken);
    } catch {
      alert("承認に失敗しました");
    }
  };

  // Reject user
  const rejectUser = async (userId: number) => {
    if (!confirm("このユーザーを拒否しますか？")) return;

    try {
      const response = await fetch(
        `${API_URL}/api/user-management/${userId}/reject`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${adminToken}` },
        }
      );

      if (!response.ok) throw new Error();

      fetchUsers(adminToken);
    } catch {
      alert("拒否に失敗しました");
    }
  };

  // Deactivate user
  const deactivateUser = async (userId: number) => {
    if (!confirm("このユーザーを無効化しますか？")) return;

    try {
      const response = await fetch(
        `${API_URL}/api/user-management/${userId}/deactivate`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${adminToken}` },
        }
      );

      if (!response.ok) throw new Error();

      fetchUsers(adminToken);
    } catch {
      alert("無効化に失敗しました");
    }
  };

  // Reactivate user
  const reactivateUser = async (userId: number) => {
    try {
      const response = await fetch(
        `${API_URL}/api/user-management/${userId}/reactivate`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${adminToken}` },
        }
      );

      if (!response.ok) throw new Error();

      fetchUsers(adminToken);
    } catch {
      alert("再有効化に失敗しました");
    }
  };

  // Update course type
  const updateCourseType = async (userId: number, courseType: "standard" | "master") => {
    try {
      const response = await fetch(
        `${API_URL}/api/user-management/${userId}/course-type`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          },
          body: JSON.stringify({ courseType }),
        }
      );

      if (!response.ok) throw new Error();

      fetchUsers(adminToken);
    } catch {
      alert("コースタイプの更新に失敗しました");
    }
  };

  // Effect to refetch when filter/search changes
  useEffect(() => {
    if (isLoggedIn && adminToken) {
      fetchUsers(adminToken);
    }
  }, [filter]);

  // Admin login page
  if (!isLoggedIn) {
    return (
      <section className="min-h-screen flex items-center justify-center py-20 bg-[var(--rechera-cream)]">
        <div className="mx-auto max-w-md w-full px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-[var(--rechera-text)] mb-2">
                管理者ログイン
              </h1>
              <p className="text-[var(--rechera-text-muted)]">
                管理画面にアクセスするにはログインが必要です
              </p>
            </div>

            <Card className="bg-white border-none rounded-3xl soft-shadow">
              <CardContent className="p-8">
                {loginError && (
                  <div className="mb-6 p-4 rounded-2xl bg-red-50 text-sm text-red-600">
                    {loginError}
                  </div>
                )}

                <form onSubmit={handleAdminLogin} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--rechera-text)]">
                      メールアドレス
                    </label>
                    <Input
                      type="email"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      className="h-12 rounded-2xl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[var(--rechera-text)]">
                      パスワード
                    </label>
                    <Input
                      type="password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="h-12 rounded-2xl"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-2xl bg-[var(--rechera-pink)] text-[var(--rechera-text)]"
                  >
                    ログイン
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-[var(--rechera-cream)] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-semibold text-[var(--rechera-text)] mb-2">
            ユーザー管理
          </h1>
          <p className="text-[var(--rechera-text-muted)]">
            ユーザーの承認、コースタイプの変更、アクセス管理を行います
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white border-none rounded-2xl soft-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--rechera-blue)]/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-[var(--rechera-text)]" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--rechera-text)]">
                  {users.length}
                </p>
                <p className="text-sm text-[var(--rechera-text-muted)]">
                  全ユーザー
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-none rounded-2xl soft-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--rechera-yellow)]/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-[var(--rechera-text)]" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--rechera-text)]">
                  {users.filter((u) => !u.isApproved).length}
                </p>
                <p className="text-sm text-[var(--rechera-text-muted)]">
                  承認待ち
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-none rounded-2xl soft-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--rechera-pink)]/20 flex items-center justify-center">
                <Crown className="w-5 h-5 text-[var(--rechera-text)]" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--rechera-text)]">
                  {users.filter((u) => u.courseType === "master" && u.isApproved).length}
                </p>
                <p className="text-sm text-[var(--rechera-text-muted)]">
                  マスター
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-none rounded-2xl soft-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <Ban className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="text-2xl font-semibold text-[var(--rechera-text)]">
                  {users.filter((u) => !u.isActive).length}
                </p>
                <p className="text-sm text-[var(--rechera-text-muted)]">
                  無効
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-white border-none rounded-2xl soft-shadow mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--rechera-text-muted)]" />
                <Input
                  placeholder="名前やメールで検索..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && fetchUsers(adminToken)}
                  className="pl-10 h-10 rounded-xl"
                />
              </div>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full sm:w-48 h-10 rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="フィルター" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">全て</SelectItem>
                  <SelectItem value="pending">承認待ち</SelectItem>
                  <SelectItem value="approved">承認済み</SelectItem>
                  <SelectItem value="inactive">無効</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                onClick={() => fetchUsers(adminToken)}
                className="rounded-xl"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                更新
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Error */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 text-red-600">
            {error}
          </div>
        )}

        {/* User List */}
        {isLoading ? (
          <div className="text-center py-12 text-[var(--rechera-text-muted)]">
            読み込み中...
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-12 text-[var(--rechera-text-muted)]">
            ユーザーが見つかりません
          </div>
        ) : (
          <div className="space-y-4">
            {users.map((user) => (
              <Card
                key={user.id}
                className="bg-white border-none rounded-2xl soft-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* User Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-[var(--rechera-text)]">
                          {user.username}
                        </span>
                        {user.courseType === "master" && (
                          <Crown className="w-4 h-4 text-[var(--rechera-pink)]" />
                        )}
                        {!user.isApproved && (
                          <Badge className="bg-[var(--rechera-yellow)]/20 text-[var(--rechera-text)] text-xs">
                            承認待ち
                          </Badge>
                        )}
                        {!user.isActive && (
                          <Badge className="bg-red-100 text-red-600 text-xs">
                            無効
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-[var(--rechera-text-muted)]">
                        {user.email}
                      </p>
                      <p className="text-xs text-[var(--rechera-text-muted)] mt-1">
                        登録日:{" "}
                        {new Date(user.createdAt).toLocaleDateString("ja-JP")}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Pending Users */}
                      {!user.isApproved && (
                        <>
                          <Button
                            size="sm"
                            onClick={() => approveUser(user.id, "standard")}
                            className="rounded-xl bg-green-500 hover:bg-green-600 text-white"
                          >
                            <Check className="w-4 h-4 mr-1" />
                            Standard承認
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => approveUser(user.id, "master")}
                            className="rounded-xl bg-[var(--rechera-pink)] hover:bg-[var(--rechera-pink)]/80 text-[var(--rechera-text)]"
                          >
                            <Crown className="w-4 h-4 mr-1" />
                            Master承認
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => rejectUser(user.id)}
                            className="rounded-xl border-red-300 text-red-500 hover:bg-red-50"
                          >
                            <X className="w-4 h-4 mr-1" />
                            拒否
                          </Button>
                        </>
                      )}

                      {/* Approved Users */}
                      {user.isApproved && user.isActive && (
                        <>
                          <Select
                            value={user.courseType}
                            onValueChange={(value: "standard" | "master") =>
                              updateCourseType(user.id, value)
                            }
                          >
                            <SelectTrigger className="w-36 h-8 rounded-xl text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="standard">Standard</SelectItem>
                              <SelectItem value="master">Master</SelectItem>
                            </SelectContent>
                          </Select>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => deactivateUser(user.id)}
                            className="rounded-xl border-red-300 text-red-500 hover:bg-red-50"
                          >
                            <Ban className="w-4 h-4 mr-1" />
                            無効化
                          </Button>
                        </>
                      )}

                      {/* Inactive Users */}
                      {!user.isActive && (
                        <Button
                          size="sm"
                          onClick={() => reactivateUser(user.id)}
                          className="rounded-xl bg-green-500 hover:bg-green-600 text-white"
                        >
                          <RefreshCw className="w-4 h-4 mr-1" />
                          再有効化
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
