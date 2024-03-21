import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import React from "react";
import { sponsorColumns } from "./sponsors-columns";
import { db } from "@/lib/db";

interface SponsorsAdminPageProps {}

const SponsorsAdminPage: React.FC<SponsorsAdminPageProps> = async ({}) => {
    const sponsors = await db.sponsor.findMany();
    return (
        <div className="flex w-lvw flex-col items-center gap-5 overflow-x-hidden">
            <Button asChild>
                <Link href="./sponsors/add">Add a new sponsor</Link>
            </Button>
            <DataTable columns={sponsorColumns} data={sponsors} />
        </div>
    );
};

export default SponsorsAdminPage;
