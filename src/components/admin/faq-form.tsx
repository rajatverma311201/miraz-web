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
import { faqFormSchema } from "@/zodSchemas";
import { addFaq, updateFaq } from "@/actions/faq";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

interface FaqFormProps {
    faq?: {
        question: string;
        answer: string;
    };
    faqId?: string;
}

export const FaqForm: React.FC<FaqFormProps> = ({ faq, faqId }) => {
    const router = useRouter();

    const form = useForm<z.infer<typeof faqFormSchema>>({
        resolver: zodResolver(faqFormSchema),
        defaultValues: {
            question: faqId ? faq?.question : "",
            answer: faqId ? faq?.answer : "",
        },
    });

    const onSubmit = async (values: z.infer<typeof faqFormSchema>) => {
        const toastId = toast.loading(
            `${faqId ? "Updating" : "Adding"} FAQ, Please Wait...`,
        );

        try {
            if (faqId) {
                await updateFaq(faqId, values);
            } else {
                await addFaq(values);
            }
            toast.success(`FAQ ${faqId ? "Updated" : "Added"} Successfully`, {
                id: toastId,
            });
            router.refresh();
            router.back();
        } catch (error) {
            toast.error(`FAQ ${faqId ? "update" : "add"} failed`, {
                id: toastId,
            });
        }
    };

    return (
        <>
            <Card className="mx-auto max-w-[500px]">
                <CardHeader>
                    <CardTitle>
                        {faqId ? "Update FAQ" : "Add a new FAQ"}
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
                                name="question"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Question</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter the question"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="answer"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Answer</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Enter the answer"
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
