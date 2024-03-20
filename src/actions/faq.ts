"use server";

import { db } from "@/lib/db";
import { FaqI } from "types";

export const addFaq = async (data: FaqI) => {
    await db.faq.create({
        data: {
            question: data.question,
            answer: data.answer,
        },
    });
};

export const updateFaq = async (id: string, data: FaqI) => {
    await db.faq.update({
        where: {
            id,
        },
        data: {
            question: data.question,
            answer: data.answer,
        },
    });
};

export const deleteFaq = async (id: string) => {
    await db.faq.delete({
        where: {
            id,
        },
    });
};
