"use server";

import { db } from "@/lib/db";
import { SpeakerI } from "types";

export const addSpeaker = async (data: SpeakerI) => {
    const newSpeaker = await db.speaker.create({
        data: {
            name:data.name,
            image: data.image,
            link: data.image,
            qualification: data.qualification,
            bio: data.bio,
            keytalkId: data.keytalkId,
        },
    });
    const keytalk = await db.keytalk.findUnique({
        where: {
            id: data.keytalkId,
        },
        select: {
            speakers: true,
        },
    });
    const speakers = keytalk?.speakers;
    if (speakers) {
        speakers.push(newSpeaker);
    }
    await db.keytalk.update({
        where: {
            id: data.keytalkId,
        },
        data: {
            speakers: {
                set: speakers,
            },
        },
    });
};

export const updateSpeaker = async (id: string, data: SpeakerI) => {
    const speaker = await db.speaker.findUnique({
        where: {
            id,
        },
    });
    const updatedSpeaker = await db.speaker.update({
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
    if (speaker?.keytalkId !== data.keytalkId) {
        const newKeytalk = await db.keytalk.findUnique({
            where: {
                id: data.keytalkId,
            },
            select: {
                speakers: true,
            },
        });
        const speakers = newKeytalk?.speakers;
        if (speakers) {
            speakers.push(updatedSpeaker);
        }
        await db.keytalk.update({
            where: {
                id: data.keytalkId,
            },
            data: {
                speakers: {
                    set: speakers,
                },
            },
        });
        if (!speaker || !speaker?.keytalkId) {
            return;
        }
        const oldKeytalk = await db.keytalk.findUnique({
            where: {
                id: speaker.keytalkId,
            },
            select: {
                speakers: true,
            },
        });
        const oldSpeakers = oldKeytalk?.speakers;
        if (oldSpeakers) {
            const index = oldSpeakers.findIndex((s) => s.id === id);
            oldSpeakers.splice(index, 1);
        }
        await db.keytalk.update({
            where: {
                id: speaker.keytalkId,
            },
            data: {
                speakers: {
                    set: oldSpeakers,
                },
            },
        });
    }
};

export const deleteSpeaker = async (id: string) => {
    const speaker = await db.speaker.findUnique({
        where: {
            id,
        },
    });
    if (!speaker || !speaker?.keytalkId) {
        return;
    }
    const keytalk = await db.keytalk.findUnique({
        where: {
            id: speaker.keytalkId,
        },
        select: {
            speakers: true,
        }
    });
    const speakers = keytalk?.speakers;
    if (speakers) {
        const index = speakers.findIndex((s) => s.id === id);
        speakers.splice(index, 1);
    }
    await db.keytalk.update({
        where: {
            id: speaker.keytalkId,
        },
        data: {
            speakers: {
                set: speakers,
            },
        },
    });
    await db.speaker.delete({
        where: {
            id,
        },
    });
};
