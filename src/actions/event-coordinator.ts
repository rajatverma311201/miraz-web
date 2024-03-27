"use server";

import { z } from "zod";

import { db } from "@/lib/db";
import { CoordinatorFormSchema } from "@/zodSchemas";

export const addCoordinator = async (
    coordinatorData: z.infer<typeof CoordinatorFormSchema>,
    eventId: string,
) => {
    await db.coordinator.create({
        data: { ...coordinatorData, eventId },
    });
};

export const updateCoordinator = async (
    coordinatorData: z.infer<typeof CoordinatorFormSchema>,
    coordinatorId: string,
) => {
    await db.coordinator.update({
        where: { id: coordinatorId },
        data: coordinatorData,
    });
};

export const deleteCoordinator = async (coordinatorId: string) => {
    await db.coordinator.delete({ where: { id: coordinatorId } });
};
