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
    description:
        "Join us at Miraz 2024, the annual extravaganza hosted by IIT Mandi's Student Gymkhana! Experience the perfect blend of sports, cultural, and tech events that will leave you exhilarated. Get ready for a whirlwind of excitement as students from across the country showcase their talents and compete for glory. Don't miss out on the electrifying atmosphere and unforgettable memories at Miraz 2024. Mark your calendars and be part of the action at IIT Mandi's premier college fest!",
    keywords:
        "Fest,IIT Mandi,Miraz,2024,College Fest,Student Gymkhana,Nukkad Natak, Stage Play, Mono Act, Battle of Bands, Acoustic Dreams, Tarangini, Aesthetic Avatar, 24-Hour Design Marathon, Vintage Visions, Photo Story, Street Photography, B Roll Challenge, Live sketching, Mr. and Ms. Miraz, General Quiz, Anime Quiz, Sports Quiz, APD, Spin-A-Yarn, Creative writing, Slam poetry, Rant poetry, Cricket, Football, Basketball, Volleyball, Table Tennis, Athletics, Badminton, Lawn Tennis, Hockey, Chess, FIFA, Valorant, BGMI, Wheeling on Mars, Egg Drop Challenge, Tech Themed Photography, Gamejam, DeFused, Build-A-Thon, IPL Auction, CryptoMania, DIY Robo bot Race, EV Modelling, RC Car, Bug Bounty, Manthan,Retro,Games,Sports,Tech,Cult,Lit,IIT Mandi Fest,Indian Institute of Technology Mandi Himachal Pradesh,Yantrik,cg^2d,Heuristics,E-Cell,Robotronics,SAE,SAIC,nirman,Gustaakh Saale,Music,Designauts,PMC,Artgeeks,Qurosity,TSOD,UhlLekh",
    openGraph: {
        title: "Miraz IIT Mandi",
        url: "https://miraz.live",
        description:
            "Miraz 2024, the annual extravaganza hosted by IIT Mandi's Student Gymkhana!",
        images: [
            {
                url: "/logo-1.png",
                alt: "Miraz-Logo",
            },
        ],
    },

    robots: "index, follow",

    metadataBase: new URL("https://miraz.live/"),
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
