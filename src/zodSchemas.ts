import { z } from "zod";
export const faqFormSchema = z.object({
    question: z.string().min(5, {
        message: "question must be at least 5 characters.",
    }),
    answer: z.string().min(3, {
        message: "answer must be at least 3 characters.",
    }),
});
