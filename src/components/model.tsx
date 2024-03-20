"use client";
import { FC, ReactNode } from "react";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ModelProps {
    model: any;
    title: String;
}

const generateFormSchema = (model: any) => {
    const formSchema: { [key: string]: any } = {};
    Object.keys(model).forEach((property) => {
        formSchema[property] = z.string().min(1, `${property} is required`);
    });
    return z.object(formSchema);
};

const ModelTemplate: FC<ModelProps> = ({ model, title }) => {
    const formSchema = generateFormSchema(model);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    };
    const schemaProperties = Object.keys(model);
    return (
        <div className="flex h-lvh w-full flex-col items-center justify-center pb-20">
            <h1 className="mb-5 border-b-2 border-black text-3xl">{title}</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-2/5 rounded-md bg-slate-300 p-10"
                >
                    {schemaProperties.map((property, index) => (
                        <FormField
                            key={property}
                            control={form.control}
                            name={property}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{property}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={property}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button className="mt-6 w-full" type="submit">
                        Save
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default ModelTemplate;
