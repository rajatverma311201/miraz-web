"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { AboutContent } from "@/components/about-content";
import Link from "next/link";
import Image from "next/image";
import { PageHeading } from "@/components/page-heading";
import background from "@/../public/background.jpg";
import { IoIosArrowDown } from "react-icons/io";

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
            <main className="overflow-y-scroll scroll-smooth lg:h-svh">
                {sections.map((section, index) => (
                    <SectionWrapper key={index}>{section}</SectionWrapper>
                ))}
            </main>
        </>
    );
}

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div>{children}</div>
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
        <div className="relative flex h-svh flex-col items-center justify-center">
            <Image
                className="absolute left-6 top-6 w-1/4 md:w-auto"
                src="/logo-1.png"
                height={150}
                width={150}
                alt="Miraz Logo"
            />
            {/* <div className="flex justify-center gap-5 md:gap-10">
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
            </div> */}

            <h1 className="mb-10 text-7xl font-medium md:text-9xl lg:text-[10rem]">
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

            <a href="#proEvent" className="absolute bottom-8">
                <IoIosArrowDown className="mx-auto" />
            </a>
        </div>
    );
};

const HomeSection3 = () => {
    return (
        <>
            <div id="proEvent">
                <PageHeading title="Pro Event" className="text-white" />
            </div>
            <div className="flex justify-center gap-20">
                <Image
                    src="/proShowComedy.jpeg"
                    alt="ProEvent Comedy"
                    width={400}
                    height={400}
                    className="w-9/12 rounded-md pb-12 md:w-[30%]"
                />
                <Image
                    src="/musicalNight.jpeg"
                    alt="Musical Night"
                    width={400}
                    height={400}
                    className="w-9/12 rounded-md pb-12 md:w-[35%]"
                />
            </div>

            <PageHeading title="Teasers" className="h-min text-white" />
            <div className="mb-10 flex flex-wrap justify-center gap-5 px-5 md:gap-10">
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
