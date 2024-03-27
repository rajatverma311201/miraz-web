"use client";
import { CoordinatorFormSchema } from "@/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { ModelFormField } from "../model-form-field";
import { Button } from "../ui/button";
import { addCoordinator, updateCoordinator } from "@/actions/event-coordinator";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface CoordinatorFormProps {
    eventId: string;
    coordinatorId?: string;
    coordinator?: {
        name: string;
        contact: string;
    };
    onSettled?: () => void;
}

export const CoordinatorForm: React.FC<CoordinatorFormProps> = ({
    eventId,
    coordinatorId,
    coordinator,
    onSettled,
}) => {
    const router = useRouter();

    const form = useForm<z.infer<typeof CoordinatorFormSchema>>({
        resolver: zodResolver(CoordinatorFormSchema),
        defaultValues: {
            name: coordinatorId ? coordinator?.name : "",
            contact: coordinatorId ? coordinator?.contact : "",
        },
    });

    const onSubmit = async (values: z.infer<typeof CoordinatorFormSchema>) => {
        const toastId = toast.loading(
            `${coordinatorId ? "Updating" : "Adding"} Coordinator, Please Wait...`,
        );

        try {
            if (coordinatorId) {
                await updateCoordinator(values, coordinatorId);
            } else {
                await addCoordinator(values, eventId);
            }
            router.refresh();
            toast.success(
                `Coordinator ${coordinatorId ? "Updated" : "Added"} Successfully`,
                {
                    id: toastId,
                },
            );
        } catch (error) {
            toast.error(
                `Coordinator ${coordinatorId ? "update" : "add"} failed`,
                {
                    id: toastId,
                },
            );
        } finally {
            onSettled?.();
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <ModelFormField label="Name" fieldName="name" form={form} />
                <ModelFormField
                    label="Contact"
                    fieldName="contact"
                    form={form}
                />
                <Button size={"sm"} type="submit" className="btn btn-primary">
                    Submit
                </Button>
            </form>
        </Form>
    );
};
