import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  // Skip middleware for tRPC requests
  if (request.nextUrl.pathname.startsWith('/api/trpc')) {
    return NextResponse.next();
  }
  return await updateSession(request);
}

export const config = {
  matcher: [
    // Exclude api/trpc from the matcher
    "/((?!api/trpc|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/users/:path*",
    "/contact/:path*",
  ]
}