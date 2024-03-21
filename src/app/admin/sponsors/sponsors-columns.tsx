"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { DeleteAlertDialog } from "@/components/delete-alert-dialog";
import { deleteSponsor } from "@/actions/sponsor";
import { toast } from "sonner";

export type Sponsor = {
    id: string;
    name: string;
    image: string;
    link: string;
    createdAt: Date;
    updatedAt: Date;
};

export const sponsorColumns: ColumnDef<Sponsor>[] = [
    {
        accessorKey: "image",
        header: "Image",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const sponsor = row.original;
            const { id } = sponsor;

            const handleDeleteAction = async (onSuccess?: () => void) => {
                const toastId = toast.loading(
                    "Removing sponsor, Please Wait...",
                );
                try {
                    await deleteSponsor(id);
                    toast.success("Sponsor removed successfully", {
                        id: toastId,
                    });
                    onSuccess?.();
                } catch (error) {
                    console.error(error);
                    toast.error("Failed to remove sponsor", { id: toastId });
                }
            };

            return (
                <>
                    <div className="flex gap-2">
                        <Button asChild size={"iconSm"} variant={"outline"}>
                            <Link href={`/admin/sponsors/${id}`}>
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
