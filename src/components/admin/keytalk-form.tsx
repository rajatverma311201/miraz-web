"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { keyTalkFormSchema } from "@/zodSchemas";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { addKeyTalk, updateKeyTalk } from "@/actions/keytalks";
import type { KeyTalk } from "@/app/admin/keytalks/page";

import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { CalendarIcon, Loader2 } from "lucide-react";
import { TimePicker } from "../ui/datetime-picker";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Input } from "../ui/input";

interface KeyTalkFormProps {
    keyTalk?: KeyTalk;
    keyTalkId?: string;
}

export const KeyTalkForm: React.FC<KeyTalkFormProps> = ({
    keyTalk,
    keyTalkId,
}) => {
    const router = useRouter();

    const form = useForm<z.infer<typeof keyTalkFormSchema>>({
        // resolver: zodResolver(keyTalkFormSchema),
        defaultValues: {
            title: keyTalkId ? keyTalk?.title : "",
            time: keyTalkId ? keyTalk?.time : new Date(),
            speakers: keyTalkId ? keyTalk?.speakers : [],
        },
    });

    const onSubmit = async (values: z.infer<typeof keyTalkFormSchema>) => {
        const toastId = toast.loading(
            `${keyTalkId ? "Updating" : "Adding"} Key talk, Please Wait...`,
        );

        try {
            if (keyTalkId) {
                await updateKeyTalk(keyTalkId, values);
            } else {
                await addKeyTalk(values);
            }
            toast.success(` ${keyTalkId ? "Updated" : "Added"} Successfully`, {
                id: toastId,
            });
            router.refresh();
            router.back();
        } catch (error) {
            toast.error(`Key talk ${keyTalkId ? "update" : "add"} failed`, {
                id: toastId,
            });
        }
    };

    return (
        <>
            <Card className="mx-auto max-w-[500px]">
                <CardHeader>
                    <CardTitle>
                        {keyTalkId ? "Update Key talk" : "Add a new Key talk"}
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
                                            <Input
                                                placeholder="Enter the name"
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
                                    <FormItem className="flex flex-col">
                                        <FormLabel className="text-left">
                                            DateTime
                                        </FormLabel>
                                        <Popover>
                                            <FormControl>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        className={cn(
                                                            "w-[280px] justify-start text-left font-normal",
                                                            !field.value &&
                                                                "text-muted-foreground",
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                "PPP HH:mm:ss",
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pick a date
                                                            </span>
                                                        )}
                                                    </Button>
                                                </PopoverTrigger>
                                            </FormControl>
                                            <PopoverContent
                                                side="right"
                                                className="w-auto p-0"
                                            >
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                />
                                                <div className="border-t border-border p-3">
                                                    <TimePicker
                                                        setDate={field.onChange}
                                                        date={field.value}
                                                    />
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </FormItem>
                                )}
                            />
                            <p className="mt-2 text-xl">Speakers</p>
                            {!!keyTalkId &&
                                keyTalk?.speakers.map((speaker, i) => (
                                    <span key={i}>{speaker.name + " "}</span>
                                ))}
                            <p></p>
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
