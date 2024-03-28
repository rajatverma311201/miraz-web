import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";
import background from "../../public/background.webp";

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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(inter.className, "")}>
                <Toaster
                    richColors={true}
                    theme="light"
                    position="top-center"
                />
                <Image
                    alt="background"
                    src={background}
                    quality={100}
                    fill
                    sizes="100vw"
                    className="-z-50"
                    // style={{
                    //     objectFit: "cover",
                    // }}
                />
                {children}
            </body>
        </html>
    );
}
