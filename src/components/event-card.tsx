import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { z } from "zod";
import { EventSchema } from "@/zodSchemas";
import Image from "next/image";
import { Event } from "@prisma/client";

interface EventCardProps {
    event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <Link className="w-min" href={`/events/${event.id}`} key={event.id}>
            <Card
                className="min-h-[300px] min-w-[280px] hover:shadow-[0_0px_0px_3px] hover:shadow-primary"
                key={event.id}
            >
                <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <Image
                        className="h-fit w-full"
                        src={event.image}
                        alt={event.name}
                        width={500}
                        height={500}
                    />
                </CardContent>

                <CardFooter>&quot;{event.tagline}&quot;</CardFooter>
            </Card>
        </Link>
    );
};
