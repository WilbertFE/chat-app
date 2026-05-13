import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/servers", "/messages", "/global", "/profile", "/help"];
const publicRoutes = ["/signin", "/signup"];

export function proxy(request: NextRequest) {
  // Optimistic cookie check — avoids JWT decryption which can fail in Edge runtime.
  // next-auth sets "next-auth.session-token" on HTTP and "__Secure-next-auth.session-token" on HTTPS.
  const sessionToken =
    request.cookies.get("next-auth.session-token") ??
    request.cookies.get("__Secure-next-auth.session-token");

  const path = request.nextUrl.pathname;
  const isProtected = protectedRoutes.some((r) => path.startsWith(r));
  const isPublic = publicRoutes.some((r) => path.startsWith(r));

  if (isProtected && !sessionToken) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (isPublic && sessionToken) {
    return NextResponse.redirect(new URL("/messages", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
