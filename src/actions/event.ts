"use server";

import { db } from "@/lib/db";

type Event = {
    title: string;
}

export const addEvent = async (data: Event) => {
    await db.event.create({
        data: {
            title: data.title,
        },
    });
};

export const updateEvent = async (id: string, data: Event) => {
    await db.event.update({
        where: {
            id,
        },
        data: {
            title: data.title
        },
    });
};

export const deleteEvent = async (id: string) => {
    await db.event.delete({
        where: {
            id,
        },
    });
};
