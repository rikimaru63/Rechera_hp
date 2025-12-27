import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const COOKIE_NAME = "rechera-auth-token";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    if (!token) {
      return NextResponse.json(
        { error: "認証が必要です" },
        { status: 401 }
      );
    }

    // Get user from Strapi
    const response = await fetch(`${STRAPI_URL}/api/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      // Token is invalid, clear cookie
      cookieStore.delete(COOKIE_NAME);
      return NextResponse.json(
        { error: "セッションが無効です" },
        { status: 401 }
      );
    }

    const userData = await response.json();

    return NextResponse.json({
      user: {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        courseType: userData.courseType || "standard",
        isApproved: userData.isApproved ?? false,
        isActive: userData.isActive ?? true,
        isAdmin: userData.isAdmin ?? false,
      },
    });
  } catch (error) {
    console.error("Get user error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
