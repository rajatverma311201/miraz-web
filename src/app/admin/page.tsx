// import { db } from "@/lib/db";
import Link from "next/link";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";

interface AdminHomePageProps {}

const AdminHomePage: React.FC<AdminHomePageProps> = async ({}) => {
    // const res = await db.faq.findMany();
    const models = [
        { name: "Events", entries: 1, link: "admin/events" },
        { name: "FAQ's", entries: 4, link: "admin/faqs" },
        { name: "Key Talks", entries: 8, link: "admin/keytalks" },
        { name: "Miraz Team", entries: 18, link: "admin/miraz-team" },
        { name: "Sponsors", entries: 2, link: "admin/sponsors" },
        { name: "Timeline", entries: 3, link: "admin/timeline" },
        { name: "Speakers", entries: 10, link: "admin/speakers" },
    ];

    return (
        <div className="flex w-lvw flex-col items-center gap-5">
            {/* <h1>AdminHomePage</h1>
            <hr />
            <h2>FAQ&apos;s</h2>
            <ul>
                {res.map((item) => (
                    <li key={item.id} className="mb-4">
                        <p>{item.question} </p>
                        <span className="font-bold">{item.answer}</span>
                    </li>
                ))}
                </ul> */}
            <div className="flex w-4/5 flex-col items-center gap-5">
                {models.map((model) => {
                    const { name, entries, link } = model;
                    return (
                        <>
                            <Link href={link} className={"group w-full"}>
                                <Card key={name}>
                                    <CardHeader className="flex flex-row items-center justify-between">
                                        <CardTitle className="hover:underline">
                                            {name}
                                        </CardTitle>
                                        <CardDescription>
                                            {entries === 1
                                                ? entries + " entry"
                                                : entries + " entries"}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default AdminHomePage;
