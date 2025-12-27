import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const COOKIE_NAME = "rechera-auth-token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Call Strapi login endpoint
    const response = await fetch(`${STRAPI_URL}/api/auth/local`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier: email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.message || "ログインに失敗しました" },
        { status: response.status }
      );
    }

    // Get user details with custom fields
    const userResponse = await fetch(`${STRAPI_URL}/api/users/me`, {
      headers: { Authorization: `Bearer ${data.jwt}` },
    });

    const userData = await userResponse.json();

    // Set JWT in HttpOnly cookie
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, data.jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: COOKIE_MAX_AGE,
      path: "/",
    });

    return NextResponse.json({
      user: {
        id: userData.id,
        username: userData.username,
        email: userData.email,
        courseType: userData.courseType || "standard",
        isApproved: userData.isApproved ?? false,
        isActive: userData.isActive ?? true,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
