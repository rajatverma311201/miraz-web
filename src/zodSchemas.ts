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
    name: z.string().min(1,{
        message: "name is required",
    }),
    image: z.string().min(5, {
        message: "image is required",
    }),
    link: z.string().min(5, {
        message: "link too short",
    }),
});

export const TeamMemberFormSchema = z.object({
    name: z.string().min(1,{
        message: "name is required",
    }),
    email: z.string().min(1, {message:'Email is required'}).email({message:'Invalid email'}),
    role: z.string().min(1,{
        message: "role is required",
    }),
});
