"use server";

import { db } from "@/lib/db";
import { MirazTeamMemberSchema } from "@/zodSchemas";
import { z } from "zod";

interface ModelSchema extends z.infer<typeof MirazTeamMemberSchema> {}

export const addTeamMember = async (data: ModelSchema) => {
    const vals = MirazTeamMemberSchema.parse(data);

    await db.mirazTeamMember.create({
        data: vals,
    });
};

export const updateTeamMember = async (id: string, data: ModelSchema) => {
    const vals = MirazTeamMemberSchema.parse(data);
    await db.mirazTeamMember.update({
        where: {
            id,
        },
        data: vals,
    });
};

export const deleteTeamMember = async (id: string) => {
    await db.mirazTeamMember.delete({
        where: {
            id,
        },
    });
};
