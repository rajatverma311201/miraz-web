"use client";

import { Key, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const arr = ["Events", "Sponsors", "Team", "Keytalks", "Faq", "About"];
const len = arr.length;

export default function Home() {
    const router = useRouter();
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "ArrowDown") {
                setCount((prevCount) => (prevCount + 1) % len);
                const sound = new Audio("menuItemChange.wav");
                sound.play();
            } else if (event.key === "ArrowUp") {
                setCount((prevCount) => (prevCount - 1) % len);
                const sound = new Audio("menuItemChange.wav");
                sound.play();
            } else if (event.key === "Enter") {
                router.push(`/${arr.at(count)!.toLowerCase()}`);
            }
        },
        [count, router],
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 2000);

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            clearTimeout(timeoutId);
        };
    }, [handleKeyDown]);

    return (
        <main className="flex h-full min-h-screen flex-col items-center justify-center space-y-4 p-24 text-white">
            <motion.h1
                layout
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                    opacity: [1, 0.3, 1],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    ease: "linear",
                    scale: { repeat: 2 },
                    opacity: { repeat: 2 },
                    layout: { scale: 0.5, duration: 0.5 },
                }}
                className={`text-[10rem] font-medium`}
            >
                Miraz
            </motion.h1>

            {loading && (
                <div className="min-w-72 border-2 border-white p-1">
                    <motion.div
                        initial={{ width: "5%" }}
                        animate={{ width: "100%" }}
                        transition={{
                            ease: [0.72, 1.16, 0.66, 0.48],
                            duration: 2,
                        }}
                        className="min-h-4 bg-white"
                    ></motion.div>
                </div>
            )}

            {!loading && (
                <>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{
                            opacity: [0, 1],
                            scale: [0.7, 1],
                        }}
                        transition={{ scale: { duration: 0.5 } }}
                        className="flex flex-col items-center justify-center space-y-4"
                    >
                        <div className="text-3xl opacity-50">
                            {arr.at(count - 1)}
                        </div>
                        <div className="text-6xl">{arr.at(count)}</div>
                        <div className="text-3xl opacity-50">
                            {arr.at((count + 1) % len)}
                        </div>
                    </motion.div>
                </>
            )}
        </main>
    );
}
