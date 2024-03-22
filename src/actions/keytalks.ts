"use server";

import { db } from "@/lib/db";
import { keyTalkFormSchema } from "@/zodSchemas";
import { z } from "zod";

type KeyTalk = z.infer<typeof keyTalkFormSchema>

export const addKeyTalk = async (data: KeyTalk) => {
    await db.keytalk.create({
        data: {
            title: data.title,
            time: data.time,
            speakers: {
                create: data.speakers?.map((speaker) => ({
                    name: speaker.name,
                    image: speaker.image,
                    qualification: speaker.qualification,
                    bio: speaker.bio,
                    link: speaker.link,
                })),
            },
        },
    });
};


export const updateKeyTalk = async (id: string, data: KeyTalk) => {
    await db.keytalk.update({
        where: {
            id,
        },
        data: {
            title: data.title,
            time: data.time,
            speakers: {
                updateMany: data.speakers?.map((speaker) => ({
                    where: { id: speaker.id },
                    data: {
                        name: speaker.name,
                        image: speaker.image,
                        qualification: speaker.qualification,
                        bio: speaker.bio,
                        link: speaker.link,
                    },
                })),
            },
        },
    });
};

export const deleteKeyTalk = async (id: string) => {
    console.log("Deleting Key Talk with id: ", id);
    await db.keytalk.delete({
        where: {
            id,
        },
    });
};
