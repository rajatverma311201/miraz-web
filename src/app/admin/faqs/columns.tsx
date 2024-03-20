"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

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

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link href={`/admin/faqs/${id}`}>
                                <Pencil size={15} className="mr-2" /> Edit
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="hover:text-red-200x cursor-pointer text-red-600 hover:bg-red-600/70">
                            <Trash2 size={15} className="mr-2" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
