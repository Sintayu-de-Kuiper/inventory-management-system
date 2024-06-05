import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

export default auth(async (request) => {
  const { pathname } = request.nextUrl;
  const session = request.auth;

  if (pathname === "/" && session) {
    const redirectUrl = new URL("/api/auth/signout", request.url);
    return NextResponse.redirect(redirectUrl);
  } else if (pathname !== "/" && !session) {
    const redirectUrl = new URL("/", request.url);
    return NextResponse.redirect(redirectUrl);
  }
  return NextResponse.next();
});
