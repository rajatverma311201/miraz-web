import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Link from "next/link";
import { speakerColumns } from "./speaker-columns";
import React from "react";
import { Speaker } from "./speaker-columns";
interface SpeakerAdminPageProps {}

const assignTitles = async (speaker: Speaker[]) => {
    for (let i = 0; i < speaker.length; i++) {
        let {keytalkId} = speaker[i];
        if(keytalkId === null) {speaker[i].keytalkId='None';}
        else{
            // console.log("keytalkId",keytalkId);
            const keytalkTitle = await db.keytalk.findUnique({
                where: {
                    id: keytalkId
                },
                select: {
                    title: true
                }
            });
            // console.log("keytalkTitle",keytalkTitle);
            if(keytalkTitle !== null) {  
                speaker[i] = { ...speaker[i], keytalkId: keytalkTitle.title };
            }
        }
    }
    return speaker;
};

const SpeakerAdminPage: React.FC<SpeakerAdminPageProps> = async ({}) => {

    let speaker = await db.speaker.findMany();

    const updatedSpeaker = await assignTitles(speaker as Speaker[]);

    // console.log("speaker",updatedSpeaker);

    return (
        <div className="flex w-lvw flex-col items-center gap-5 overflow-x-hidden">
            <Button asChild>
                <Link href="/admin/speakers/add">Add new Speaker</Link>
            </Button>
            <DataTable columns={speakerColumns} data={updatedSpeaker as Speaker[]} />
        </div>
    );
};

export default SpeakerAdminPage;
