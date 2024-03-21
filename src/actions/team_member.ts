"use server";

import { db } from "@/lib/db";
import { MirazTeamMemberI } from "types";

export const addTeamMember = async (data: MirazTeamMemberI) => {
    await db.mirazTeamMember.create({
        data: {
            name: data.name,
            email: data.email,
            role: data.role,
        },
    });
};

export const updateTeamMember = async (id: string, data: MirazTeamMemberI) => {
    await db.mirazTeamMember.update({
        where: {
            id,
        },
        data: {
            name: data.name,
            email: data.email,
            role: data.role,
        },
    });
};

export const deleteTeamMember = async (id: string) => {
    await db.mirazTeamMember.delete({
        where: {
            id,
        },
    });
};
