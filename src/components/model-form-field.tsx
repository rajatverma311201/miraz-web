"use client";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "./ui/input";
import { DateTimePicker } from "@/components/date-time-picker";
interface ModelFormFieldProps {
    form: any;
    label: string;
    placeholder?: string;
    isTextArea?: boolean;
    fieldName: string;
    type?: string;
}
export const ModelFormField: React.FC<ModelFormFieldProps> = ({
    form,
    fieldName,
    label,
    placeholder,
    isTextArea,
    type = "text",
}) => {
    return (
        <FormField
            control={form.control}
            name={fieldName}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <>
                            {type == "date" ? (
                                <DateTimePicker
                                    datetime={field.value}
                                    setDatetime={field.onChange}
                                />
                            ) : null}

                            {type != "date" &&
                                (isTextArea ? (
                                    <Textarea
                                        placeholder={placeholder}
                                        {...field}
                                    />
                                ) : (
                                    <Input
                                        placeholder={placeholder}
                                        {...field}
                                        {...(type === "number" && {
                                            inputMode: "numeric",
                                            pattern: "[0-9]*",

                                            onChange: (event) =>
                                                field.onChange(
                                                    +event.target.value,
                                                ),
                                        })}
                                    />
                                ))}
                        </>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
