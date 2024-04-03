import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { MessageToast } from "@/components/message-toast";
import { NavigationDrawer } from "@/components/navigation-drawer";

const inter = Inter({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

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

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();

    return (
        <html lang="en" className="dark">
            <SessionProvider session={session}>
                <body className={cn(robotoMono.className, "relative")}>
                    <Toaster
                        richColors={true}
                        theme="dark"
                        position="top-center"
                    />

                    <MessageToast />

                    <NavigationDrawer />

                    {children}
                </body>
            </SessionProvider>
        </html>
    );
}
