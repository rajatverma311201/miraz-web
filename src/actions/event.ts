"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { EventFormSchema, EventPrizeSchema, EventSchema } from "@/zodSchemas";

export const addEvent = async (data: z.infer<typeof EventFormSchema>) => {
    const prizes = EventPrizeSchema.parse(data);
    const eventData = EventSchema.parse(data);
    const newEvent = await db.event.create({
        data: {
            ...eventData,
        },
    });
    await db.prize.create({
        data: {
            ...prizes,
            eventId: newEvent.id,
        },
    });
};

export const updateEvent = async (
    id: string,
    data: Partial<z.infer<typeof EventFormSchema>>,
) => {
    const prizes = EventPrizeSchema.parse(data);
    const eventData = EventSchema.parse(data);

    const eventPrizes = await db.prize.findFirst({
        where: {
            eventId: id,
        },
    });

    if (!eventPrizes) {
        await db.prize.create({
            data: {
                ...prizes,
                eventId: id,
            },
        });
    } else {
        await db.prize.update({
            where: {
                id: eventPrizes.id,
            },
            data: {
                ...prizes,
            },
        });
    }

    await db.event.update({
        where: {
            id,
        },
        data: {
            ...eventData,
        },
    });
};

export const deleteEvent = async (id: string) => {
    const eventPrizes = await db.prize.findFirst({
        where: {
            eventId: id,
        },
    });

    if (eventPrizes) {
        await db.prize.delete({
            where: {
                id: eventPrizes.id,
            },
        });
    }

    await db.event.delete({
        where: {
            id,
        },
    });
};
