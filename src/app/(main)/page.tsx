"use client";

import { Key, useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const arr = ["Events", "Sponsors", "Team", "Keytalks", "Faq", "About"];
const len = arr.length;

export default function Home() {
    const router = useRouter();
    const [count, setCount] = useState(0);

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
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <main className="flex h-full min-h-screen flex-col items-center justify-center space-y-4 p-24 text-white">
            <h1 className={"  text-[10rem] font-medium [perspective:500px]  "}>
                <span className="[transform-style:preserve-3d] [transform:rotateX(75deg)_rotateY(0deg)]">
                    Miraz
                </span>
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
                <div className="text-3xl opacity-50">{arr.at(count - 1)}</div>
                <div className="text-6xl">{arr.at(count)}</div>
                <div className="text-3xl opacity-50">
                    {arr.at((count + 1) % len)}
                </div>
            </motion.div>
        </main>
    );
}
