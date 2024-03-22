import { z } from "zod";
export const faqFormSchema = z.object({
    question: z.string().min(5, {
        message: "question must be at least 5 characters.",
    }),
    answer: z.string().min(3, {
        message: "answer must be at least 3 characters.",
    }),
});

export const keyTalkFormSchema = z.object({
    title: z.string().min(5, {
        message: "title must be at least 5 characters.",
    }),
    time: z.date(),
    speakers: z.optional(z.array(z.object({
        id: z.string(),
        name: z.string().min(3, {
            message: "name must be at least 3 characters.",
        }),
        image: z.string().url(),
        qualification: z.string().min(3, {
            message: "qualification must be at least 3 characters.",
        }),
        bio: z.string().nullable(),
        link: z.string().url(),
        keytalkId: z.string().nullable(),
        createdAt: z.date(),
        updatedAt: z.date(),
    }))),
});