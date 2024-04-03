"use client";

import { EventCard } from "@/components/event-card";

import { Event } from "@prisma/client";

import { useEffect, useState } from "react";
import { EventsFilterCard } from "@/components/events-filter-card";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { IoFilterOutline } from "react-icons/io5";

interface EventsListProps {
    events: Event[];
}

export const EventsList: React.FC<EventsListProps> = ({ events }) => {
    const [eventSearch, setEventSearch] = useState<string>("");
    const [eventTypeFilter, setEventTypeFilter] = useState({
        SPORTS: false,
        CULT: false,
        TECH: false,
    });
    const [filteredEvents, setFilteredEvents] = useState<Event[]>(events);

    useEffect(() => {
        const filtered = events.filter((event) => {
            // if all values in eventTypeFilter are false, return true
            if (!Object.values(eventTypeFilter).some((val) => val === true)) {
                return true;
            }

            if (eventTypeFilter[event.type!]) {
                return true;
            }
            return false;
        });
        const filtered2 = filtered.filter((event) => {
            if (eventSearch) {
                return event.name.toLowerCase().includes(eventSearch);
            }
            return true;
        });
        setFilteredEvents(filtered2);
    }, [eventSearch, eventTypeFilter, events]);

    return (
        <>
            <div className="mb-4 text-center lg:hidden">
                <Popover>
                    <PopoverTrigger className="" asChild>
                        <Button variant="outline">
                            <IoFilterOutline />
                            <p className="ml-2">Filter</p>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <EventsFilterCard
                            eventTypeFilter={eventTypeFilter}
                            eventSearch={eventSearch}
                            setEventSearch={setEventSearch}
                            setEventTypeFilter={setEventTypeFilter}
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:items-start">
                <EventsFilterCard
                    eventTypeFilter={eventTypeFilter}
                    className="mx-8 mb-8 hidden h-max w-max min-w-80 lg:inline"
                    eventSearch={eventSearch}
                    setEventSearch={setEventSearch}
                    setEventTypeFilter={setEventTypeFilter}
                />
                <div className="flex w-full flex-wrap justify-center gap-10">
                    {filteredEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </>
    );
};
