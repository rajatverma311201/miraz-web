import { db } from "@/lib/db";
import { EventActionButtons } from "@/components/event-action-buttons";
import Image from "next/image";
import { LuCalendarClock } from "react-icons/lu";
import { AiOutlineTeam, AiOutlineTrophy } from "react-icons/ai";
import { RUPEE_ICON } from "@/lib/constants";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

interface EventDetailPageProps {
    params: {
        eventId: string;
    };
}

const EventDetailPage: React.FC<EventDetailPageProps> = async ({ params }) => {
    const { eventId } = params;
    const event = await db.event.findUnique({ where: { id: eventId } });
    const startTime = new Date(event!.startTime);
    const endTime = new Date(event!.endTime);
    const dateOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    } as Intl.DateTimeFormatOptions;

    const timeOptions = {
        hour: "numeric",
        minute: "numeric",
    } as Intl.DateTimeFormatOptions;

    const iconOpts = {
        size: 35,
        className: "text-xl text-orange-500",
    };

    return (
        <>
            <Image
                className="-z-10 opacity-20 blur-sm"
                src={event!.image}
                alt="event"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
            />
            <div className="py-20 md:pb-5">
                <h1 className="transfor text-center text-5xl font-medium uppercase text-orange-500">
                    {event!.name}
                </h1>
                <p className="mt-6 text-center italic">
                    &quot;{event!.tagline}&quot;
                </p>

                <div className="my-12 flex flex-col items-center justify-center gap-12 px-5 md:px-10 lg:flex-row lg:gap-32 lg:px-24">
                    <Card>
                        <CardHeader />
                        <CardContent>
                            <Image
                                className="h-auto w-full rounded lg:w-96"
                                src={event!.image}
                                alt="event"
                                width={500}
                                height={500}
                            />
                        </CardContent>

                        <CardFooter className="mt- grid grid-cols-[50px_1fr]  items-center gap-4 text-lg font-light md:text-xl ">
                            <LuCalendarClock {...iconOpts} />
                            {startTime.toLocaleDateString("en-in", dateOptions)}
                            {", "}
                            {startTime.toLocaleTimeString("en-gb", timeOptions)}
                            hrs
                            <AiOutlineTeam {...iconOpts} />
                            {event!.teamMinSize} - {event!.teamMaxSize}
                            <AiOutlineTrophy {...iconOpts} />
                            <div>
                                <span className="font- mr-2 text-2xl">
                                    {RUPEE_ICON}
                                </span>
                                {event!.prizeWorth}
                            </div>
                        </CardFooter>
                    </Card>

                    <div>
                        <p className="mb-4 text-xl">{event!.club}</p>
                        <p className="text-base font-light md:text-lg">
                            {event!.description}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20 ">
                    <EventActionButtons
                        registerLink="/"
                        rulebookLink={event!.rulebookLink}
                    />
                </div>
            </div>
        </>
    );
};
export default EventDetailPage;
