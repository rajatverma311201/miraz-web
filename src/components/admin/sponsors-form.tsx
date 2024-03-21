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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { SponsorFormSchema } from "@/zodSchemas";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import React from "react";
import { addSponsor, updateSponsor } from "@/actions/sponsor";
import { Input } from "@/components/ui/input";

interface SponsorFormProps {
    sponsor?: {
        name: string;
        image: string;
        link: string;
    };
    sponsorId?: string;
}

export const SponsorForm: React.FC<SponsorFormProps> = ({
    sponsor,
    sponsorId,
}) => {
    const router = useRouter();

    const form = useForm<z.infer<typeof SponsorFormSchema>>({
        resolver: zodResolver(SponsorFormSchema),
        defaultValues: {
            name: sponsorId ? sponsor?.name : "",
            image: sponsorId ? sponsor?.image : "",
            link: sponsorId ? sponsor?.link : "",
        },
    });

    const onSubmit = async (values: z.infer<typeof SponsorFormSchema>) => {
        const toastId = toast.loading(
            `${sponsorId ? "Updating" : "Adding"} Sponsor, Please Wait...`,
        );

        try {
            if (sponsorId) {
                await updateSponsor(sponsorId, values);
            } else {
                await addSponsor(values);
            }
            toast.success(
                `Sponsor ${sponsorId ? "Updated" : "Added"} Successfully`,
                {
                    id: toastId,
                },
            );
            router.refresh();
            router.back();
        } catch (error) {
            toast.error(`Sponsor ${sponsorId ? "update" : "add"} failed`, {
                id: toastId,
            });
        }
    };

    return (
        <>
            <Card className="mx-auto max-w-[500px]">
                <CardHeader>
                    <CardTitle>
                        {sponsorId ? "Update Sponsor" : "Add a new Sponsor"}
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
                                                placeholder="Enter sponsor's name"
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
                                            <Textarea
                                                placeholder="Enter sponsor image"
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
                                            <Textarea
                                                placeholder="Enter sponsor link"
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
