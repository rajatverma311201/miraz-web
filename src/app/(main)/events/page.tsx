import { db } from "@/lib/db";
import { EventsList } from "@/components/events-list";
import { PageHeading } from "@/components/page-heading";
import { Metadata } from "next";

interface EventsPageProps {}

export async function generateMetadata(): Promise<Metadata> {
    const events = await db.event.findMany();
    return {
        title: "Miraz Events",
        description: `Events: ${events.map((event) => event.name + "@" + event.club).join(", ")}`,
    };
}

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
