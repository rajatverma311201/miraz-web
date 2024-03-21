import { z } from "zod";
export const FaqFormSchema = z.object({
    question: z.string().min(5, {
        message: "question must be at least 5 characters.",
    }),
    answer: z.string().min(3, {
        message: "answer must be at least 3 characters.",
    }),
});

export const SponsorFormSchema = z.object({
    name: z.string(),
    image: z.string().min(5, {
        message: "link too short",
    }),
    link: z.string().min(5, {
        message: "link too short",
    }),
});

export const EventFormSchema = z.object({
    title: z.string()
});