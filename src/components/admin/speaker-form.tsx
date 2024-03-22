"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { SpeakerFormSchema } from "@/zodSchemas";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import React from "react";
import { addSpeaker, updateSpeaker } from "@/actions/speaker";
import { Input } from "@/components/ui/input";

interface SpeakerFormProps {
    speaker?: {
        name:string;
        image: string;
        link: string;
        qualification: string;
        bio: string;
        keytalkId: string;
    };
    speakerId?: string;
}

export const SpeakerForm: React.FC<SpeakerFormProps> = ({
    speaker,
    speakerId,
}) => {
    const router = useRouter();

    const form = useForm<z.infer<typeof SpeakerFormSchema>>({
        resolver: zodResolver(SpeakerFormSchema),
        defaultValues: {
            name: speakerId ? speaker?.name : "",
            image: speakerId ? speaker?.image : "",
            link: speakerId ? speaker?.link : "",
            qualification : speakerId ? speaker?.qualification : "",
            bio: speakerId ? speaker?.bio : "",
            keytalkId: speakerId ? speaker?.keytalkId : "",
        },
    });

    const onSubmit = async (values: z.infer<typeof SpeakerFormSchema>) => {
        const toastId = toast.loading(
            `${speakerId ? "Updating" : "Adding"} Speaker, Please Wait...`,
        );

        try {
            if (speakerId) {
                await updateSpeaker(speakerId, values);
            } else {
                await addSpeaker(values);
            }
            toast.success(
                `Speaker ${speakerId ? "Updated" : "Added"} Successfully`,
                {
                    id: toastId,
                },
            );
            router.refresh();
            router.back();
        } catch (error) {
            toast.error(`Speaker ${speakerId ? "update" : "add"} failed`, {
                id: toastId,
            });
        }
    };

    return (
        <>
            <Card className="mx-auto max-w-[500px]">
                <CardHeader>
                    <CardTitle>
                        {speakerId ? "Update Speaker" : "Add a new Speaker"}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Speaker's name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Speaker's image link"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="link"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Link</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Speaker's link"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="qualification"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Qualification</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Speaker's qualification"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />             
                            <FormField
                                control={form.control}
                                name="bio"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Bio</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter Speaker's bio"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="keytalkId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Key Talk</FormLabel>
                                        <FormControl>
                                            
                                            <Input
                                                placeholder="Enter Speaker's Key-talk"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                disabled={form.formState.isSubmitting}
                                className="disabled:cursor-not-allowed"
                            >
                                {form.formState.isSubmitting ? (
                                    <>
                                        <Loader2
                                            size={16}
                                            className="mr-2 animate-spin"
                                        />
                                        Please Wait
                                    </>
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
};
