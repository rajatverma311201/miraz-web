/**
 * Array of public routes.
 */
export const publicRoutes: string[] = ["/", "/auth/new-verification"];

/**
 * Array of authentication routes.
 * These routes redirect logged in users to settings page
 * only for non-authenticated users.
 */
export const authRoutes: string[] = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
];

/**
 * Protected routes.
 */

export const protectedRoutes: string[] = ["/admin"];

/**
 * The prefix for the authentication API routes.
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * Default redirect path after login.
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/";

/**
 * LOGIN ROUTE.
 */
export const LOGIN_ROUTE: string = "/auth/login";
