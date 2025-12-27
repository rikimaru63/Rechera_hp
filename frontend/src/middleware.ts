import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "rechera-auth-token";

// Public paths that don't require authentication
const PUBLIC_PATHS = ["/login", "/register", "/forgot-password", "/reset-password"];

// Static file patterns to ignore
const STATIC_PATTERNS = [
  "/_next",
  "/favicon.ico",
  "/images",
  "/activity",
  "/api/auth", // Auth API routes should be public
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and API auth routes
  if (STATIC_PATTERNS.some((pattern) => pathname.startsWith(pattern))) {
    return NextResponse.next();
  }

  // Check if it's a public path
  const isPublicPath = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

  // Get auth token from cookie
  const token = request.cookies.get(COOKIE_NAME)?.value;

  // If no token and not a public path, redirect to login
  if (!token && !isPublicPath) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If has token and on login/register page, redirect to home
  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
