// import { db } from "@/lib/db";
import Link from "next/link";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import { db } from "@/lib/db";

interface AdminHomePageProps {}

const AdminHomePage: React.FC<AdminHomePageProps> = async ({}) => {
    const countEvents=await db.event.count();
    const countFaqs=await db.faq.count();
    const countKeytalks=await db.keytalk.count();
    const countMembers=await db.mirazTeamMember.count();
    const countSponser=await db.sponsor.count();
    const countTimeline=await db.timeline.count();
    const countSpeaker=await db.speaker.count();
    const models = [
        { name: "Events", entries: countEvents, link: "admin/events" },
        { name: "FAQ's", entries: countFaqs, link: "admin/faqs" },
        { name: "Key Talks", entries: countKeytalks, link: "admin/keytalks" },
        { name: "Miraz Team", entries: countMembers, link: "admin/miraz-team" },
        { name: "Sponsors", entries: countSponser, link: "admin/sponsors" },
        { name: "Timeline", entries: countTimeline, link: "admin/timeline" },
        { name: "Speakers", entries: countSpeaker, link: "admin/speakers" },
    ];

    return (
        <div className="flex w-lvw flex-col items-center gap-5">
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
                                        
                                         {entries <= 1 
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
