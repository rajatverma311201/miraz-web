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
import { KeytalkFormSchema } from "@/zodSchemas";
import { addKeyTalk, updateKeyTalk } from "@/actions/key_talk";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface KeytalkFormProps {
    keytalk?: {
        title: string;
        time: string;
    };
    keytalkId?: string;
}

export const KeytalkForm: React.FC<KeytalkFormProps> = ({ keytalk, keytalkId }) => {
    const router = useRouter();

    const form = useForm<z.infer<typeof KeytalkFormSchema>>({
        resolver: zodResolver(KeytalkFormSchema),
        defaultValues: {
            title: keytalkId ? keytalk?.title : "",
            time: keytalkId ? keytalk?.time : "",
        },
    });

    const onSubmit = async (values: z.infer<typeof KeytalkFormSchema>) => {
        const toastId = toast.loading(
            `${keytalkId ? "Updating" : "Adding"} Keytalk, Please Wait...`,
        );

        try {
            if (keytalkId) {
                await updateKeyTalk(keytalkId, values);
            } else {
                await addKeyTalk(values);
            }
            toast.success(`Keytalk ${keytalkId ? "Updated" : "Added"} Successfully`, {
                id: toastId,
            });
            router.refresh();
            router.back();
        } catch (error) {
            toast.error(`Keytalk ${keytalkId ? "update" : "add"} failed`, {
                id: toastId,
            });
        }
    };

    return (
        <>
            <Card className="mx-auto max-w-[500px]">
                <CardHeader>
                    <CardTitle>
                        {keytalkId ? "Update Keytalk" : "Add a new keytalk"}
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
                            <FormField
                                control={form.control}
                                name="time"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Time</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter the time"
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
