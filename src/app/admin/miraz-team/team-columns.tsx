"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { DeleteAlertDialog } from "@/components/delete-alert-dialog";
import { deleteTeamMember } from "@/actions/team_member";
import { toast } from "sonner";
import { MirazTeamMember } from "@prisma/client";

export const teamColumns: ColumnDef<MirazTeamMember>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const team_member = row.original;
            const { id } = team_member;

            const handleDeleteAction = async (onSuccess?: () => void) => {
                const toastId = toast.loading(
                    "Removing team member, Please Wait...",
                );
                try {
                    await deleteTeamMember(id);
                    toast.success("Team member removed successfully", {
                        id: toastId,
                    });
                    onSuccess?.();
                } catch (error) {
                    console.error(error);
                    toast.error("Failed to remove team member", {
                        id: toastId,
                    });
                }
            };

            return (
                <>
                    <div className="flex gap-2">
                        <Button asChild size={"iconSm"} variant={"outline"}>
                            <Link href={`/admin/miraz-team/${id}`}>
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
