import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Link from "next/link";
import { faqColumns } from "./faq-columns";
import React from "react";

interface FaqsAdminPageProps {}

const FaqsAdminPage: React.FC<FaqsAdminPageProps> = async ({}) => {
    const faqs = await db.faq.findMany();

    return (
        <div className="flex w-lvw flex-col items-center gap-5 overflow-x-hidden">
            <Button asChild>
                <Link href="/admin/faqs/add">Add a new FAQ</Link>
            </Button>
            <DataTable columns={faqColumns} data={faqs} />
        </div>
    );
};

export default FaqsAdminPage;
