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
    name: z.string().min(1, {
        message: "name is required",
    }),
    image: z.string().min(5, {
        message: "image is required",
    }),
    link: z.string().min(5, {
        message: "link too short",
    }),
});

export const MirazTeamMemberSchema = z.object({
    name: z.string().min(1, {
        message: "name is required",
    }),
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email" }),
    role: z.string().min(1, {
        message: "role is required",
    }),
    image: z.string().min(5, {
        message: "image is required",
    }),
    linkedinLink: z.string(),
    instagramLink: z.string(),
});

export const TeamMemberFormSchema = z.object({}).merge(MirazTeamMemberSchema);

export const EventPrizeSchema = z.object({
    first: z.number(),
    second: z.number(),
    third: z.number(),
});

export const EventSchema = z.object({
    name: z.string(),
    club: z.string(),
    tagline: z.string(),
    shortSummary: z.string(),
    longSummary: z.string(),
    image: z.string(),
    rulebookLink: z.string(),
    description: z.string(),
    problemStatementLink: z.string(),
    submissionLink: z.string(),
    startTime: z.date(),
    endTime: z.date(),
    isLive: z.boolean(),
    status: z.string(),
    prizeWorth: z.number(),
    teamMaxSize: z.number(),
    teamMinSize: z.number(),
});

export const EventFormSchema = z
    .object({})
    .merge(EventSchema)
    .merge(EventPrizeSchema);

export const CoordinatorFormSchema = z.object({
    name: z.string().min(1, {
        message: "name is required",
    }),
    contact: z.string().min(5, {
        message: "contact too short",
    }),
});

export const SpeakerFormSchema = z.object({
    name: z.string().min(1, {
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
    qualification: z.string().min(1, {
        message: "qualification is required",
    }),
    keytalkId: z.string().min(1, {
        message: "keytalkId is required",
    }),
});

export const KeytalkFormSchema = z.object({
    title: z.string().min(1, {
        message: "Title is Required.",
    }),
    time: z.string().min(1, {
        message: "Time is Required.",
    }),
});
