"use server";

import { db } from "@/lib/db";
import { KeyTalkI } from "types";

export const addKeyTalk = async (data: KeyTalkI) => {
    await db.keytalk.create({
        data: {
            title: data.title,
            time: data.time,
        },
    });
};

export const updateKeyTalk = async (id: string, data: KeyTalkI) => {
    await db.keytalk.update({
        where: {
            id,
        },
        data: {
            title: data.title,
            time: data.time,
        },
    });
};

export const deleteKeyTalk = async (id: string) => {
    await db.keytalk.delete({
        where: {
            id,
        },
    });
};
