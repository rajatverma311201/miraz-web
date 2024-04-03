"use client";

import { EventCard } from "./event-card";

import { Event, EventType } from "@prisma/client";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckedState } from "@radix-ui/react-checkbox";
import { LiaSearchSolid } from "react-icons/lia";

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

    function eventTypeFilterChange(state: CheckedState, type: string) {
        setEventTypeFilter((prev) => {
            return { ...prev, [type]: state === true };
        });
    }

    return (
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
            <Card className="mx-8 mb-12 h-max w-max min-w-80">
                <CardHeader>
                    <CardTitle className="text-center">Filters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                    <Input
                        value={eventSearch}
                        placeholder=" Search events"
                        onChange={(e) => {
                            setEventSearch(e.target.value);
                            console.log(e.target.value);
                        }}
                    />
                    <div className="space-y-3">
                        {Object.keys(EventType).map((type, idx) => {
                            return (
                                <div key={idx}>
                                    <Checkbox
                                        id={type}
                                        onCheckedChange={(state) =>
                                            eventTypeFilterChange(state, type)
                                        }
                                    />
                                    <Label
                                        className="ml-4 cursor-pointer text-xl"
                                        htmlFor={type}
                                    >
                                        {type}
                                    </Label>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
            <div className="flex w-full flex-wrap justify-center gap-10">
                {filteredEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};
