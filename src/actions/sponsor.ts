"use server";

import { db } from "@/lib/db";
import { SponsorI } from "types";

export const addSponsor = async (data: SponsorI) => {
    await db.sponsor.create({
        data: {
            name: data.name,
            image: data.image,
            link: data.link,
        },
    });
};

export const updateSponsor = async (id: string, data: SponsorI) => {
    await db.sponsor.update({
        where: {
            id,
        },
        data: {
            name: data.name,
            image: data.image,
            link: data.link,
        },
    });
};

export const deleteSponsor = async (id: string) => {
    await db.sponsor.delete({
        where: {
            id,
        },
    });
};
