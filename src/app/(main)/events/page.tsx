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

interface EventsPageProps {}

const EventsPage: React.FC<EventsPageProps> = async ({}) => {
    const events = await db.event.findMany();

    return (
        <>
            <div className="mx-5 my-12 flex items-center justify-center py-6 text-white">
                <h1 className="text-7xl">Events</h1>
            </div>

            <div className="mx-16 flex flex-wrap items-center justify-start gap-8">
                {events.map((event) => {
                    return (
                        <Link href={`/events/${event.id}`} key={event.id}>
                            <Card
                                className="m-4 min-h-[300px] min-w-[280px]"
                                // style={{
                                //     backgroundImage: `url(${event.image})`,
                                // }}
                                key={event.id}
                            >
                                <CardHeader>
                                    <CardTitle>{event.name}</CardTitle>
                                    <CardDescription>
                                        {event.tagline}
                                    </CardDescription>
                                </CardHeader>

                                <CardFooter>{event.shortSummary}</CardFooter>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default EventsPage;
