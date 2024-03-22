"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeleteAlertDialog } from "@/components/delete-alert-dialog";
import { toast } from "sonner";

import Link from "next/link";
import { deleteKeyTalk } from "@/actions/keytalks";
import type { KeyTalk } from "./page";

export const KeyTalkColumns: ColumnDef<KeyTalk>[] = [
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "time",
        header: "time",
        cell: ({ row }) => {
            const value = row.original;
            return value
                ? new Date(value.time).toDateString()
                : new Date().toDateString();
        },
    },
    {
        accessorKey: "speakers",
        header: "Speakers",
        cell: ({ row }) => {
            const names = row.original.speakers.map(
                (speaker) => speaker.name,
            ) || ["speaker"];
            return names.length > 1 ? names.join(", ") : names[0];
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const event = row.original;
            const { id } = event;

            const handleDeleteAction = async (onSuccess?: () => void) => {
                const toastId = toast.loading(
                    "Deleting Key talk, Please Wait...",
                );
                try {
                    await deleteKeyTalk(id);
                    toast.success("Key talk Deleted Successfully", {
                        id: toastId,
                    });
                    onSuccess?.();
                } catch (error) {
                    console.error(error);
                    toast.error("Failed to delete Key talk", { id: toastId });
                }
            };

            return (
                <>
                    <div className="flex gap-2">
                        <Button asChild size={"iconSm"} variant={"outline"}>
                            <Link href={`/admin/keytalks/${id}`}>
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
