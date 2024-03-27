import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Link from "next/link";
import { EventColumns } from "./event-columns";

interface EventsAdminPageProps {}

const EventsAdminPage: React.FC<EventsAdminPageProps> = async ({}) => {
    // const events = await db.event.find();
    const events = await db.event.findMany();
    return (
        <div className="flex w-lvw flex-col items-center gap-5 overflow-x-hidden">
            <Button asChild>
                <Link href="/admin/events/add">Add a new Event</Link>
            </Button>

            <DataTable columns={EventColumns} data={events} />
        </div>
    );
};

export default EventsAdminPage;
