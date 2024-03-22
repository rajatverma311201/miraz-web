"use server";

import { db } from "@/lib/db";
import { SpeakerI } from "types";

export const addSpeaker = async (data: SpeakerI) => {
    await db.speaker.create({
        data: {
            name:data.name,
            image: data.image,
            link: data.image,
            qualification: data.qualification,
            bio: data.bio,
            keytalkId: data.keytalkId,
        },
    });
};

export const updateSpeaker = async (id: string, data: SpeakerI) => {
    await db.speaker.update({
        where: {
            id,
        },
        data: {
            name:data.name,
            image: data.image,
            link: data.image,
            qualification: data.qualification,
            bio: data.bio,
            keytalkId: data.keytalkId,
        },
    });
};

export const deleteSpeaker = async (id: string) => {
    await db.speaker.delete({
        where: {
            id,
        },
    });
};
