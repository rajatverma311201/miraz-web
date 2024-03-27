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
import { EventFormSchema } from "@/zodSchemas";
import { addEvent, updateEvent } from "@/actions/event";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface EventFormProps {
    event?: {
        title: string;
    };
    eventId?: string;
}

export const EventForm: React.FC<EventFormProps> = ({ event, eventId }) => {
    const router = useRouter();

    const form = useForm<z.infer<typeof EventFormSchema>>({
        resolver: zodResolver(EventFormSchema),
        defaultValues: {
            title: eventId ? event?.title : "",
        },
    });

    const onSubmit = async (values: z.infer<typeof EventFormSchema>) => {
        const toastId = toast.loading(
            `${eventId ? "Updating" : "Adding"} Event, Please Wait...`,
        );

        try {
            if (eventId) {
                await updateEvent(eventId, values);
            } else {
                await addEvent(values);
            }
            toast.success(`Event ${eventId ? "Updated" : "Added"} Successfully`, {
                id: toastId,
            });
            router.refresh();
            router.back();
        } catch (error) {
            toast.error(`Event ${eventId ? "update" : "add"} failed`, {
                id: toastId,
            });
        }
    };

    return (
        <>
            <Card className="mx-auto max-w-[500px]">
                <CardHeader>
                    <CardTitle>
                        {eventId ? "Update Event" : "Add a new Event"}
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
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter the title"
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
