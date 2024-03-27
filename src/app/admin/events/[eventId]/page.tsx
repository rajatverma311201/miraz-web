import { EventForm } from "@/components/admin/event-form";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

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
            <div>
                <EventForm event={finalData} eventId={eventId} />

                <h2>Coordinators</h2>
                <ul>
                    <li></li>
                </ul>
            </div>
        </>
    );
};

export default EventUpdatePage;
