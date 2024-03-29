import NextAuth, { Account, Session, User } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { type UserRole } from "@prisma/client";
import { type JWT } from "@auth/core/jwt";

import authConfig from "@/auth.config";
import { getUserById } from "@/lib/auth-utils";

import { db } from "@/lib/db";
import { getAccountByUserId } from "@/lib/auth-utils";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
    update,
} = NextAuth({
    pages: {
        signOut: "/",
        signIn: "/auth/login",
        error: "/auth/error",
    },

    events: {
        linkAccount: async ({ user }) => linkAccountEvent({ user }),
    },

    callbacks: {
        signIn: ({ user, account }) => signInCB({ user, account }),

        session: ({ token, session }) => sessionCB({ token, session }),

        jwt: ({ token }) => jwtCB({ token }),
    },

    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },

    ...authConfig,
});

interface LinkAccountEventProps {
    user: User;
}
const linkAccountEvent = async ({ user }: LinkAccountEventProps) => {
    await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
    });
};

interface SignInCBProps {
    user: User;
    account: Account | null;
}
const signInCB = async ({ user, account }: SignInCBProps) => {
    if (account?.provider !== "credentials") return true;

    const existingUser = await getUserById(user.id);

    if (!existingUser || !existingUser.emailVerified) {
        return false;
    }

    return true;
};

interface JWTProps {
    token: JWT;
}
const jwtCB = async ({ token }: JWTProps) => {
    if (!token.sub) return token;

    const existingUser = await getUserById(token.sub);

    if (!existingUser) return token;

    const existingAccount = await getAccountByUserId(existingUser.id);

    token.isOAuth = !!existingAccount;
    token.name = existingUser.name;
    token.email = existingUser.email;
    token.role = existingUser.role;

    return token;
};

interface SessionCBProps {
    token: JWT;
    session: Session;
}
const sessionCB = async ({ token, session }: SessionCBProps) => {
    if (token.sub && session.user) {
        session.user.id = token.sub;
    }

    if (token.role && session.user) {
        session.user.role = token.role as UserRole;
    }

    if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.isOAuth = token.isOAuth as boolean;
    }

    return session;
};
