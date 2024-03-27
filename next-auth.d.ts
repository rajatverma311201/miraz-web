import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth";

export type User = DefaultSession["user"] & {
    role: UserRole;
    isOAuth: boolean;
    id: string;
};

declare module "next-auth" {
    interface Session {
        user: User;
    }
}
