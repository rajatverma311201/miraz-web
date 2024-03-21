"use client";

import { Nav } from "@/components/nav";
import Link from "next/link";
import { useEffect, useState } from "react";

interface KeytalksAdminPageProps {}

const KeytalksAdminPage: React.FC<KeytalksAdminPageProps> = () => {
    const keyTalks = [
        {
            title: "Hackathon",
            time: 1,
            speakers: [{ name: "Miraz", qualification: "Ph. D", id: 1 }],
        },
        {
            title: "Singin Event",
            time: 4,
            speakers: [{ name: "Miraz", qualification: "Ph. D", id: 1 }],
        },
        {
            title: "Fashion Show",
            time: 8,
            speakers: [{ name: "Miraz", qualification: "Ph. D", id: 1 }],
        },
        {
            title: "Robo Fight",
            time: 18,
            speakers: [{ name: "Miraz", qualification: "Ph. D", id: 1 }],
        },
        {
            title: "Cricket Match",
            time: 2,
            speakers: [{ name: "Miraz", qualification: "Ph. D", id: 1 }],
        },
        {
            title: "Tug of war",
            time: 3,
            speakers: [{ name: "Miraz", qualification: "Ph. D", id: 1 }],
        },
        {
            title: "Speaker Talk",
            time: 10,
            speakers: [{ name: "Miraz", qualification: "Ph. D", id: 1 }],
        },
    ];
    const [showingSpeakers, setShowingSpeakers] = useState<boolean[]>([]);
    useEffect(() => {
        setShowingSpeakers(keyTalks.map(() => false));
    }, []);
    return (
        <div className="flex w-lvw flex-col items-center gap-5">
            <ul className="flex w-4/5 flex-col items-center gap-5">
                <li className="flex h-5 w-full items-center justify-between border-4 border-solid border-black px-3 py-3">
                    <h2 className="font-bold">Title</h2>
                    <p className="font-bold">Speakers</p>
                    <p className="font-bold">Time</p>
                </li>
                {keyTalks.map((keyTalk, index) => {
                    const { title, time, speakers } = keyTalk;
                    return (
                        <li
                            key={index}
                            className="flex w-full flex-col items-center justify-between gap-5 border-x-4 border-b-2 border-solid border-black px-3 py-3 hover:border-b-4"
                        >
                            <div className="flex h-5 w-full items-center justify-between">
                                <p>{title}</p>
                                <p>{time}</p>
                                <div
                                    onClick={() =>
                                        setShowingSpeakers(
                                            showingSpeakers.map((val, ind) =>
                                                ind == index ? !val : val,
                                            ),
                                        )
                                    }
                                >
                                    <p>
                                        {showingSpeakers[index]
                                            ? "Hide"
                                            : "See"}{" "}
                                        Speakers
                                    </p>
                                </div>
                            </div>
                            <ul
                                className={`w-full ${showingSpeakers[index] ? "block" : "hidden"}`}
                            >
                                <li className="flex h-5 w-full items-center justify-between border-4 border-solid border-black px-3 py-3">
                                    <h2 className="font-bold">Name</h2>
                                    <p className="font-bold">Qualification</p>
                                </li>
                                {speakers.map((speaker) => {
                                    const { name, qualification, id } = speaker;
                                    return (
                                        <li key={name}>
                                            <Link
                                                href={`/admin/speakers/${id}`}
                                                className="flex h-5 w-full items-center justify-between border-x-4 border-b-2 border-solid border-black px-3 py-3 hover:border-b-4"
                                            >
                                                <p>{name}</p>
                                                <p>{qualification}</p>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default KeytalksAdminPage;
