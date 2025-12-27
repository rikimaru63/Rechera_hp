import { NextRequest, NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export async function POST(request: NextRequest) {
  try {
    const { username, email, password, registrationNote } = await request.json();

    // Call Strapi register endpoint
    const response = await fetch(`${STRAPI_URL}/api/auth/local/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        registrationNote,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.message || "登録に失敗しました" },
        { status: response.status }
      );
    }

    // Don't set cookie - user needs admin approval first
    return NextResponse.json({
      success: true,
      message: "登録が完了しました。管理者の承認をお待ちください。",
    });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
