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

    return <EventForm event={event} eventId={eventId} />;
};

export default EventUpdatePage;
