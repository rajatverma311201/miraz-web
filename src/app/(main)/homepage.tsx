"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AboutContent } from "@/components/about-content";
import Link from "next/link";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";
import background from "@/../public/background.jpg";

const arr = ["Events", "Sponsors", "Team"];
const len = arr.length;

export default function HomePage() {
    const sections = [
        <HomeSection1 key={1} />,
        <HomeSection3 key={3} />,
        <HomeSection2 key={2} />,
    ];

    return (
        <>
            <Image
                className=" -z-10  opacity-25"
                alt="Background"
                src={background}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
            />
            <main className="overflow-y-scroll lg:h-screen">
                {/* <div className=""> */}
                {sections.map((section, index) => (
                    <SectionWrapper key={index}>{section}</SectionWrapper>
                ))}
                {/* </div> */}
            </main>
        </>
    );
}

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="grid min-h-screen lg:h-screen">{children}</div>
        </>
    );
};

const HomeSection1 = () => {
    const router = useRouter();
    const [count, setCount] = useState(0);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "ArrowDown") {
                event.preventDefault();
                setCount((prevCount) => (prevCount + 1) % len);
                const sound = new Audio("menuItemChange.wav");
                sound.play();
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                setCount((prevCount) => (prevCount - 1) % len);
                const sound = new Audio("menuItemChange.wav");
                sound.play();
            } else if (event.key === "Enter") {
                event.preventDefault();
                router.push(`/${arr.at(count)!.toLowerCase()}`);
            }
        },
        [count, router],
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    const LOGO_DATA = [
        {
            src: "/exodia_logo.jpeg",
            alt: "Exodia Logo",
        },
        {
            src: "/rannneeti_logo.jpeg",
            alt: "Rannneeti Logo",
        },
        {
            src: "/xpecto_logo.png",
            alt: "Xpecto Logo",
        },
    ];

    return (
        <div className="min-h-screen">
            <Image
                className="hidden md:m-8 md:inline"
                src="/logo-1.png"
                height={150}
                width={150}
                alt="Miraz Logo"
            />
            <div className="mt-20 flex flex-wrap justify-center gap-5 md:mt-0 md:gap-10">
                {LOGO_DATA.map((data, index) => {
                    return (
                        <Image
                            key={index}
                            src={data.src}
                            height={100}
                            width={100}
                            alt={data.alt}
                            className="h-16 w-16 rounded-full border-2  md:h-24 md:w-24 "
                        />
                    );
                })}
            </div>

            <div className="mt-24 lg:mt-12">
                <h1
                    className={
                        " mb-10 text-center text-7xl font-medium md:text-9xl lg:text-[10rem]"
                    }
                >
                    Miraz
                </h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{
                        opacity: [0, 1],
                        scale: [0.7, 1],
                    }}
                    transition={{ scale: { duration: 0.5 } }}
                    className="flex flex-col items-center justify-center space-y-4"
                >
                    <Link
                        href={`/${arr.at(count - 1)!.toLowerCase()}`}
                        className="text-xl opacity-50  md:text-2xl"
                    >
                        {arr.at(count - 1)}
                    </Link>
                    <Link
                        href={`/${arr.at(count)!.toLowerCase()}`}
                        className="text-3xl md:text-5xl"
                    >
                        {arr.at(count)}
                    </Link>
                    <Link
                        href={`/${arr.at((count + 1) % len)!.toLowerCase()}`}
                        className="text-xl opacity-50 md:text-2xl"
                    >
                        {arr.at((count + 1) % len)}
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

const HomeSection3 = () => {
    return (
        <>
            <PageHeading title="Teasers" className="text-white" />
            <div className="my-10 flex flex-wrap justify-center gap-5 px-5 md:gap-10">
                <iframe
                    src="https://drive.google.com/file/d/1ewYnovDaMHZfo5itVZGuCc0zIhql5u2N/preview"
                    allow="autoplay"
                    className="rounded-xl md:h-[40vh] md:w-[40vw]"
                ></iframe>

                <iframe
                    src="https://drive.google.com/file/d/1dn6IXgkCq2ZEZTZU_GiKidnyrTod2ZJ_/preview"
                    allow="autoplay"
                    className="rounded-xl md:h-[40vh] md:w-[40vw]"
                ></iframe>
            </div>
        </>
    );
};

const HomeSection2 = () => {
    return (
        <>
            <AboutContent />
        </>
    );
};
