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

export const EventFormSchema = z.object({
    title: z.string()
});

export const SpeakerFormSchema = z.object({
    name: z.string().min(1,{
        message: "name is required",
    }),
    image: z.string().min(5, {
        message: "image is required",
    }),
    link: z.string().min(5, {
        message: "link too short",
    }),
    bio: z.string().min(1, {
        message: "bio is required",
    }),
    qualification: z.string().min(5, {
        message: "qualification is required",
    }),
    keytalkId: z.string().min(5, {
        message: "keytalkId is required",
    }),
});