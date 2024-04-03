"use client";

import { EventCard } from "./event-card";

import { Event } from "@prisma/client";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

interface EventsListProps {
    events: Event[];
}

export const EventsList: React.FC<EventsListProps> = ({ events }) => {
    const [eventSearch, setEventSearch] = useState<string>("");
    const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);
    useEffect(() => {
        const timer = setTimeout(() => {
            const filtered = events.filter((event) =>
                event!.name.toLowerCase().includes(eventSearch.toLowerCase()),
            );
            setFilteredEvents(filtered);
        }, 500);

        return () => clearTimeout(timer);
    }, [eventSearch, events]);

    return (
        <>
            <Card className="mx-auto max-w-96">
                <CardHeader />
                <CardContent>
                    <Input
                        className=""
                        value={eventSearch}
                        onChange={(e) => {
                            setEventSearch(e.target.value);
                            console.log(e.target.value);
                        }}
                    />
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-20 ">
                {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </>
    );
};
