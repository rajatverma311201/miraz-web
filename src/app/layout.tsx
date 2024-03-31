import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";
import background from "../../public/background.webp";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Nav } from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Miraz",
    description: "Fest of IIT Mandi 2024",
};

const pixelFont = localFont({
    src: [
        {
            path: "./fonts/pixel_operator/PixelOperatorMono.ttf",
            weight: "normal",
            style: "normal",
        },
    ],
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <html lang="en">
            <SessionProvider session={session}>
                <body className={cn(inter.className, "bg-black", "")}>
                    <Toaster
                        richColors={true}
                        theme="light"
                        position="top-center"
                    />
                    {/* <Image
                        alt="background"
                        src={background}
                        quality={100}
                        fill
                        sizes="100vw"
                        className="-z-50"
                    /> */}
                    {children}
                </body>
            </SessionProvider>
        </html>
    );
}
