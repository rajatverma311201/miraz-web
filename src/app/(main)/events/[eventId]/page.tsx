import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Link from "next/link";
import { PiCircleBold } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import { EventActionButtons } from "@/components/event-action-buttons";

interface EventDetailPageProps {
    params: {
        eventId: string;
    };
}

const EventDetailPage: React.FC<EventDetailPageProps> = async ({ params }) => {
    const { eventId } = params;
    const event = await db.event.findUnique({ where: { id: eventId } });

    return (
        <div className="flex flex-col items-center justify-center gap-12 text-white">
            <div className="mt-8 flex flex-col items-center justify-center gap-4">
                <h1 className=" text-6xl ">{event!.name}</h1>
                <p className="italic">&quot;{event!.tagline}&quot;</p>
            </div>

            <div className="mx-48 flex flex-col gap-6 text-wrap">
                <p className="text-xl">Club: {event!.club}</p>
                <div>
                    <h2 className="mb-2 text-xl">Description: </h2>
                    <p>{event!.description}</p>
                </div>
            </div>
            <EventActionButtons
                registerLink="/"
                rulebookLink={event!.rulebookLink}
            />
        </div>
    );
};
export default EventDetailPage;
