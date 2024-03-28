"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DeleteAlertDialog } from "@/components/delete-alert-dialog";
import { deleteCoordinator } from "@/actions/event-coordinator";
import { toast } from "sonner";
import { CoordinatorFormPopover } from "@/components/admin/coordinator-form-popover";
import { CoordinatorFormSchema } from "@/zodSchemas";
import { z } from "zod";

export type Coordinator = {
    id: string;
} & z.infer<typeof CoordinatorFormSchema>;

export const CoordinatorColumns: ColumnDef<Coordinator>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "contact",
        header: "Contact",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const coordinator = row.original;
            const { id, name, contact } = coordinator;

            const handleDeleteAction = async (onSuccess?: () => void) => {
                const toastId = toast.loading(
                    "Deleting Coordinator, Please Wait...",
                );
                try {
                    await deleteCoordinator(id);
                    toast.success("Coordinator Deleted Successfully", {
                        id: toastId,
                    });
                    onSuccess?.();
                } catch (error) {
                    console.error(error);
                    toast.error("Failed to delete Coordinator", {
                        id: toastId,
                    });
                }
            };

            return (
                <>
                    <div className="flex gap-2">
                        <CoordinatorFormPopover
                            eventId={id}
                            coordinatorId={id}
                            coordinator={coordinator}
                        />
                        <DeleteAlertDialog action={handleDeleteAction} />
                    </div>
                </>
            );
        },
    },
];
