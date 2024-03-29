"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { DeleteAlertDialog } from "@/components/delete-alert-dialog";
import { toast } from "sonner";
import { deleteSpeaker } from "@/actions/speaker";

export type Speaker = {
    id: string;
    name: string;
    image: string;
    qualification: string;
    bio: string;
    link: string;
    keytalkId: string;
    createdAt: Date;
    updatedAt: Date;
};

export const speakerColumns: ColumnDef<Speaker>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "image",
        header: "Image",
    },
    {
        accessorKey: "qualification",
        header: "Qualification",
    },
    {
        accessorKey: "bio",
        header: "Bio",
    },
    {
        accessorKey: "link",
        header: "link",
    },
    {
        accessorKey: "keytalkId",
        header: "Keytalk Title",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const speaker = row.original;
            const { id } = speaker;

            const handleDeleteAction = async (onSuccess?: () => void) => {
                const toastId = toast.loading(
                    "Removing Speaker, Please Wait...",
                );
                try {
                    await deleteSpeaker(id);
                    toast.success("Speaker removed successfully", {
                        id: toastId,
                    });
                    onSuccess?.();
                } catch (error) {
                    console.error(error);
                    toast.error("Failed to remove Speaker", { id: toastId });
                }
            };

            return (
                <>
                    <div className="flex gap-2">
                        <Button asChild size={"iconSm"} variant={"outline"}>
                            <Link href={`/admin/speakers/${id}`}>
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
