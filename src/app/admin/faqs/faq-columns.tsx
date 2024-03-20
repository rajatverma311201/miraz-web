"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { DeleteAlertDialog } from "@/components/delete-alert-dialog";
import { deleteFaq } from "@/actions/faq";
import { toast } from "sonner";

export type Faq = {
    id: string;
    question: string;
    answer: string;
    createdAt: Date;
    updatedAt: Date;
};

export const faqColumns: ColumnDef<Faq>[] = [
    {
        accessorKey: "question",
        header: "Question",
    },
    {
        accessorKey: "answer",
        header: "Answer",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const faq = row.original;
            const { id } = faq;

            const handleDeleteAction = async (onSuccess?: () => void) => {
                const toastId = toast.loading("Deleting FAQ, Please Wait...");
                try {
                    await deleteFaq(id);
                    toast.success("FAQ Deleted Successfully", { id: toastId });
                    onSuccess?.();
                } catch (error) {
                    console.error(error);
                    toast.error("Failed to delete FAQ", { id: toastId });
                }
            };

            return (
                <>
                    <div className="flex gap-2">
                        <Button asChild size={"iconSm"} variant={"outline"}>
                            <Link href={`/admin/faqs/${id}`}>
                                <Pencil size={16} />
                            </Link>
                        </Button>
                        <DeleteAlertDialog action={handleDeleteAction} />
                    </div>
                </>
            );
        },
    },
];
