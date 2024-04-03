import Link from "next/link";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { EventSchema } from "@/zodSchemas";

interface EventCardProps {
    event: z.infer<typeof EventSchema> & { id: string };
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <Link href={`/events/${event.id}`} key={event.id}>
            <Card
                className="m-4 min-h-[300px] min-w-[280px] hover:shadow-[0_0px_8px_6px] hover:shadow-primary"
                // style={{
                //     backgroundImage: `url(${event.image})`,
                // }}
                key={event.id}
            >
                <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                    <CardDescription>{event.tagline}</CardDescription>
                </CardHeader>

                <CardFooter>{event.shortSummary}</CardFooter>
            </Card>
        </Link>
    );
};
