import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Nav } from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Miraz",
    description: "Fest of IIT Mandi 2024",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <html lang="en">
            <SessionProvider session={session}>
                <body className={cn(inter.className, "")}>
                    <Toaster
                        richColors={true}
                        theme="light"
                        position="top-center"
                    />
                    {children}
                </body>
            </SessionProvider>
        </html>
    );
}
