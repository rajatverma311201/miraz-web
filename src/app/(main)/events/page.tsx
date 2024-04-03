import { db } from "@/lib/db";
import { EventsList } from "@/components/events-list";
import { PageHeading } from "@/components/page-heading";

interface EventsPageProps {}

const EventsPage: React.FC<EventsPageProps> = async ({}) => {
    const events = await db.event.findMany();

    return (
        <>
            <PageHeading title="Events" />
            <EventsList events={events} />
        </>
    );
};

export default EventsPage;
