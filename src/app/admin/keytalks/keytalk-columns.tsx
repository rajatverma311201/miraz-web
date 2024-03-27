"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { DeleteAlertDialog } from "@/components/delete-alert-dialog";
import { deleteKeyTalk } from "@/actions/key_talk";
import { toast } from "sonner";

export type KeyTalk = {
    id: string;
    title: string;
    time: string;
    speaker?: string[];
    createdAt: Date;
    updatedAt: Date;
};

export const KeytalkColumns: ColumnDef<KeyTalk>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "time",
        header: "Time",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const keyTalk = row.original;
            const { id } = keyTalk;

            const handleDeleteAction = async (onSuccess?: () => void) => {
                const toastId = toast.loading(
                    "Removing Key Talk, Please Wait...",
                );
                try {
                    await deleteKeyTalk(id);
                    toast.success("Key Talk removed successfully", {
                        id: toastId,
                    });
                    onSuccess?.();
                } catch (error) {
                    console.error(error);
                    toast.error("Failed to remove Key Talk", { id: toastId });
                }
            };

            return (
                <>
                    <div className="flex gap-2">
                        <Link href={`/admin/keytalks/speakers/${id}`}>Show Speakers</Link>
                        <Button asChild size={"iconSm"} variant={"outline"}>
                            <Link href={`/admin/keytalks/speakers/${id}`}>
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
