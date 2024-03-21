import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Link from "next/link";
import { teamColumns } from "./team-columns";
import React from "react";

interface MirazTeamAdminPageProps {}

const MirazTeamAdminPage: React.FC<MirazTeamAdminPageProps> =async ({}) => {
    const team_member = await db.mirazTeamMember.findMany();

    return (
        <div className="flex w-lvw flex-col items-center gap-5 overflow-x-hidden">
        <Button asChild>
            <Link href="/admin/miraz-team/add">Add new Team Member</Link>
        </Button>
        <DataTable columns={teamColumns} data={team_member} />
        </div>
    );
};
export default MirazTeamAdminPage;
