import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Event } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { EventStatusBadge } from "./event-status-badge";

interface EventCardProps {
    event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <Link className="w-min" href={`/events/${event.id}`} key={event.id}>
            <Card
                className="relative min-h-[300px] min-w-[280px] hover:shadow-[0_0px_0px_3px] hover:shadow-primary"
                key={event.id}
            >
                <EventStatusBadge status={event.status as string} />
                <CardHeader className="pt-8">
                    <CardTitle className="text-cyan-300">
                        {event.name}
                    </CardTitle>
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
