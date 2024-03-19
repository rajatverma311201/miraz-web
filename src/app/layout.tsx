import type { Metadata } from "next";
import Aleo from "next/font/local";
import "./globals.css";
import React from "react";

const aleo = Aleo({
    src: '../../public/fonts/Aleo/Aleo.ttf',
    variable: '--font-aleo',
});

export const metadata: Metadata = {
    title: "Miraz",
    description: "Fest of IIT Mandi 2024",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={aleo.className}>{children}</body>
        </html>
    );
}
