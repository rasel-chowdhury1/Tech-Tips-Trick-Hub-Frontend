import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

import { getCurrentUser } from "./services/AuthServices";

const AuthRoutes = ["/login", "/register", "/forgot-password"];

type Role = keyof typeof roleBasedRoutes;
const roleBasedRoutes = {
  user: [/^\/userDashboard/],
  admin: [/^\/adminDashboard/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const user = await getCurrentUser();

  // If user is not logged in
  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      // Allow access to auth-related routes
      return NextResponse.next();
    } else {
      // Redirect to login if trying to access restricted routes
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url),
      );
    }
  }

  // If user is logged in but trying to access a restricted route
  const userRole = user?.role as Role;

  if (userRole && roleBasedRoutes[userRole]) {
    const routes = roleBasedRoutes[userRole];

    // Check if the route matches the allowed patterns
    if (routes.some((route) => route.test(pathname))) {
      return NextResponse.next();
    } else {
      // Redirect to user's default dashboard if unauthorized access
      const redirectUrl =
        userRole === "admin" ? "/adminDashboard" : "/userDashboard";

      return NextResponse.redirect(new URL(redirectUrl, request.url));
    }
  }

  // Default to homepage if no specific role or route matches
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/userDashboard",
    "/userDashboard/:page*",
    "/adminDashboard",
    "/adminDashboard/:page*",
  ],
};
