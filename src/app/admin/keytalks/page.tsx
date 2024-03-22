import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Link from "next/link";
import { KeyTalkColumns } from "./keytalks-columns";

interface KeytalksAdminPageProps {}

export type KeyTalk = {
    id: string;
    title: string;
    time: Date;
    speakers: {
        id: string;
        name: string;
        image: string;
        qualification: string;
        bio: string | null;
        link: string;
        keytalkId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[];
};

const KeytalksAdminPage: React.FC<KeytalksAdminPageProps> = async () => {
    const keyTalks = await db.keytalk.findMany({
        select: {
            id: true,
            title: true,
            time: true,
            speakers: true,
        },
    });

    return (
        <div className="flex w-lvw flex-col items-center gap-5 overflow-x-hidden">
            <Button asChild>
                <Link href="/admin/keytalks/add">Add a new Keytalk</Link>
            </Button>

            <DataTable columns={KeyTalkColumns} data={keyTalks} />
        </div>
    );
};

export default KeytalksAdminPage;
