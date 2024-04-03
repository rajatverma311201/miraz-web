import { db } from "@/lib/db";
import { EventsList } from "@/components/events-list";

interface EventsPageProps {}

const EventsPage: React.FC<EventsPageProps> = async ({}) => {
    const events = await db.event.findMany();

    return (
        <>
            <h1 className="my-20 text-center text-7xl">Events</h1>
            <EventsList events={events} />
        </>
    );
};

export default EventsPage;
