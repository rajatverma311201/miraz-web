"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldValues, useForm } from "react-hook-form";
import { date, z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { EventFormSchema } from "@/zodSchemas";
import { addEvent, updateEvent } from "@/actions/event";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import { ModelFormField } from "@/components/model-form-field";

interface EventFormProps {
    event?: z.infer<typeof EventFormSchema>;
    eventId?: string;
}

export const EventForm: React.FC<EventFormProps> = ({ event, eventId }) => {
    const router = useRouter();

    const defValues = {
        name: "",
        club: "",
        tagline: "",
        shortSummary: "",
        longSummary: "",
        description: "",
        image: "",
        rulebookLink: "",
        problemStatementLink: "",
        submissionLink: "",
        startTime: new Date(),
        endTime: new Date(),
        isLive: false,
        status: "",
    };

    const form = useForm<z.infer<typeof EventFormSchema>>({
        resolver: zodResolver(EventFormSchema),
        defaultValues: event || defValues,
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
            toast.success(
                `Event ${eventId ? "Updated" : "Added"} Successfully`,
                {
                    id: toastId,
                },
            );
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
            <Card className="max-w-[600px]">
                <CardHeader>
                    <CardTitle>
                        {eventId ? "Update Event" : "Add a new Event"}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                        >
                            <ModelFormField
                                form={form}
                                fieldName="name"
                                label="Name"
                                placeholder="Enter the name"
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <ModelFormField
                                    form={form}
                                    fieldName="club"
                                    label="Club"
                                    placeholder="Enter the club"
                                />

                                <ModelFormField
                                    form={form}
                                    fieldName="tagline"
                                    label="Tagline"
                                    placeholder="Enter the tagline"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <ModelFormField
                                    form={form}
                                    fieldName="shortSummary"
                                    label="Short Summary"
                                    placeholder="Enter the short summary"
                                    isTextArea
                                />

                                <ModelFormField
                                    form={form}
                                    fieldName="longSummary"
                                    label="Long Summary"
                                    placeholder="Enter the long summary"
                                    isTextArea
                                />
                            </div>

                            <ModelFormField
                                form={form}
                                fieldName="description"
                                label="Description"
                                placeholder="Enter the description"
                                isTextArea
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <ModelFormField
                                    form={form}
                                    fieldName="image"
                                    label="Image"
                                    placeholder="Enter the image"
                                />

                                <ModelFormField
                                    form={form}
                                    fieldName="rulebookLink"
                                    label="Rulebook Link"
                                    placeholder="Enter the rulebook link"
                                />

                                <ModelFormField
                                    form={form}
                                    fieldName="problemStatementLink"
                                    label="Problem Statement Link"
                                    placeholder="Enter the problem statement link"
                                />

                                <ModelFormField
                                    form={form}
                                    fieldName="submissionLink"
                                    label="Submission Link"
                                    placeholder="Enter the submission link"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <ModelFormField
                                    form={form}
                                    fieldName="startTime"
                                    label="Start Date Time"
                                    type="date"
                                />
                                <ModelFormField
                                    form={form}
                                    fieldName="endTime"
                                    label="End Date Time"
                                    type="date"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <ModelFormField
                                    form={form}
                                    fieldName="teamMinSize"
                                    label="Minimum Team Size"
                                    type="number"
                                />
                                <ModelFormField
                                    form={form}
                                    fieldName="teamMaxSize"
                                    label="Maximum Team Size"
                                    type="number"
                                />
                                <ModelFormField
                                    form={form}
                                    fieldName="prizeWorth"
                                    label="Total Prizes Worth"
                                    placeholder="Enter total Prizes"
                                    type="number"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <ModelFormField
                                    form={form}
                                    fieldName="first"
                                    label="First Prize"
                                    placeholder=""
                                    type="number"
                                />
                                <ModelFormField
                                    form={form}
                                    fieldName="second"
                                    label="Second Prize"
                                    placeholder=""
                                    type="number"
                                />
                                <ModelFormField
                                    form={form}
                                    fieldName="third"
                                    label="Third Prize"
                                    placeholder=""
                                    type="number"
                                />
                            </div>

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
