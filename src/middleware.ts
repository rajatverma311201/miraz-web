// import { auth } from "@/auth";
import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    protectedRoutes,
    publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req: any) => {
    const { nextUrl } = req;
    console.log("[middleware]", nextUrl.pathname);

    const isLoggedIn = !!req.auth?.user;

    const isProtectedRoute = nextUrl?.pathname?.startsWith(protectedRoutes);

    const isApiAuthRoute = nextUrl?.pathname?.startsWith(apiAuthPrefix);
    const isAuthRoute = authRoutes.includes(nextUrl?.pathname);

    if (isApiAuthRoute) {
        return null;
    }

    if (!isLoggedIn && isProtectedRoute) {
        return Response.redirect(new URL(`/auth/login`, nextUrl));
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(
                new URL(DEFAULT_LOGIN_REDIRECT, nextUrl).toString(),
            );
        }
        return null;
    }

    return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
