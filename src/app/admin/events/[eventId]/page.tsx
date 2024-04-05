import { CoordinatorFormPopover } from "@/components/admin/coordinator-form-popover";
import { EventForm } from "@/components/admin/event-form";
import { DataTable } from "@/components/data-table";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { CoordinatorColumns } from "./coordinator-column";

interface EventUpdatePageProps {
    params: { eventId: string };
}

const EventUpdatePage: React.FC<EventUpdatePageProps> = async ({ params }) => {
    const { eventId } = params;

    const event = await db.event.findUnique({
        where: {
            id: eventId,
        },
    });

    if (!event) {
        notFound();
    }

    const prizes = await db.prize.findFirst({
        where: {
            eventId,
        },
        select: {
            first: true,
            second: true,
            third: true,
        },
    });

    if (!prizes) {
        notFound();
    }

    const coordinators = await db.coordinator.findMany({
        where: {
            eventId,
        },
    });

    const finalData = {
        ...event,
        ...prizes,
    };

    return (
        <>
            <div className="flex items-start justify-center gap-10">
                {/* <EventForm event={finalData} eventId={eventId} /> */}

                <Card>
                    <CardHeader>
                        <CardTitle>Coordinators</CardTitle>
                        <CardDescription>
                            <CoordinatorFormPopover eventId={event.id} />
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable
                            columns={CoordinatorColumns}
                            data={coordinators}
                        />
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default EventUpdatePage;
