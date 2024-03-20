"use client"

import { Nav } from "@/components/nav";
import Link from "next/link";
import { useEffect, useState } from "react";

interface KeytalksAdminPageProps {}

const KeytalksAdminPage: React.FC<KeytalksAdminPageProps> = () => {
    const keyTalks = [
        {title: "Hackathon", time: 1, speakers: [{name: "Miraz", qualification: "Ph. D", id: 1}]},
        {title: "Singin Event", time: 4, speakers: [{name: "Miraz", qualification: "Ph. D", id: 1}]},
        {title: "Fashion Show", time: 8, speakers: [{name: "Miraz", qualification: "Ph. D", id: 1}]},
        {title: "Robo Fight", time: 18, speakers: [{name: "Miraz", qualification: "Ph. D", id: 1}]},
        {title: "Cricket Match", time: 2, speakers: [{name: "Miraz", qualification: "Ph. D", id: 1}]},
        {title: "Tug of war", time: 3, speakers: [{name: "Miraz", qualification: "Ph. D", id: 1}]},
        {title: "Speaker Talk", time: 10, speakers: [{name: "Miraz", qualification: "Ph. D", id: 1}]}
    ];
    const [showingSpeakers, setShowingSpeakers] = useState<boolean[]>([]);
    useEffect(() => {
        setShowingSpeakers(keyTalks.map(() => false));
    }, []);
    return (
        <div className="flex flex-col items-center w-lvw gap-5">
            <Nav />
            <ul className="w-4/5 flex flex-col items-center gap-5">
                <li className="w-full flex justify-between items-center px-3 py-3 h-5 border-4 border-black border-solid">
                    <h2 className="font-bold">Title</h2>
                    <p className="font-bold">Speakers</p>
                    <p className="font-bold">Time</p>
                </li>
                {keyTalks.map((keyTalk, index) => {
                    const { title, time, speakers } = keyTalk;
                    return (
                        <li key={index} className="w-full flex flex-col gap-5 justify-between items-center px-3 py-3 border-b-2 hover:border-b-4 border-x-4 border-black border-solid">
                            <div className="w-full flex justify-between items-center h-5">
                                <p>{title}</p>
                                <p>{time}</p>
                                <div onClick={() => setShowingSpeakers(showingSpeakers.map((val,ind) => ind == index ? !val : val))}>
                                    <p>{showingSpeakers[index] ? "Hide" : "See"} Speakers</p>
                                </div>
                            </div>
                            <ul className={`w-full ${showingSpeakers[index] ? "block" : "hidden"}`}>
                            <li className="w-full flex justify-between items-center px-3 py-3 h-5 border-4 border-black border-solid">
                                <h2 className="font-bold">Name</h2>
                                <p className="font-bold">Qualification</p>
                            </li>
                                {speakers.map(speaker => {
                                    const { name, qualification, id } = speaker;
                                    return (
                                        <li key={name}>
                                            <Link href={`/admin/speakers/${id}`} className="w-full flex justify-between items-center px-3 py-3 h-5 border-b-2 hover:border-b-4 border-x-4 border-black border-solid">
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