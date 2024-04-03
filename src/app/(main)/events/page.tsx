import Image from "next/image";
import { db } from "@/lib/db";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { EventCard } from "@/components/event-card";
import { EventsList } from "@/components/events-list";
import { $Enums, Event, EventType } from "@prisma/client";

interface EventsPageProps {}

const EventsPage: React.FC<EventsPageProps> = async ({}) => {
    const events = await db.event.findMany();

    return (
        <>
            <div className="mx-5 my-12 flex items-center justify-center py-6 text-white">
                <h1 className="text-7xl">Events</h1>
            </div>

            <EventsList events={events} />
        </>
    );
};

export default EventsPage;
