"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface NumbersCardListProps {}

export const NumbersCardList: React.FC<NumbersCardListProps> = ({}) => {
    return (
        <div className="flex w-full flex-wrap items-center justify-center gap-5">
            <NumberCard number="10k" title="Participation" />
            <NumberCard number={400} title="Colleges" />
            <NumberCard number="1M" title="Reach" />
            <NumberCard number={50} title="Events" />
        </div>
    );
};

interface NumberCardProps {
    // number: number;
    number: string | number;
    title: string;
}

const NumberCard: React.FC<NumberCardProps> = ({ number, title }) => {
    // const [displayNumber, setDisplayNumber] = useState(0);

    // const timerSeconds = 1;
    // const fps = 30;

    // useEffect(() => {
    //     const frames = fps * timerSeconds; // timerSeconds seconds at fps frames per second
    //     const incrementPerFrame = number / frames;

    //     const interval = setInterval(() => {
    //         setDisplayNumber((prevNumber) => {
    //             const nextNumber = prevNumber + incrementPerFrame;
    //             if (nextNumber >= number) {
    //                 clearInterval(interval);
    //                 return number;
    //             }
    //             return nextNumber;
    //         });
    //     }, 1000 / fps);

    //     return () => clearInterval(interval);
    // }, [number]);

    return (
        <Card className="w-60  bg-transparent backdrop-blur-lg">
            <CardTitle className="text-center text-primary">
                <CardHeader>{title}</CardHeader>
            </CardTitle>
            <CardContent className="text-center text-3xl font-bold sm:text-4xl">
                {/* {Math.round(displayNumber)}+ */}
                {number}+
            </CardContent>
        </Card>
    );
};
