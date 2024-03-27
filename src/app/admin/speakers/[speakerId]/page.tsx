import { SpeakerForm } from "@/components/admin/speaker-form";
import { db } from "@/lib/db";
import { Speaker } from "@/app/admin/speakers/speaker-columns";
import { notFound } from "next/navigation";

interface EventUpdatePageProps {
    params: { speakerId: string };
}

const EventUpdatePage: React.FC<EventUpdatePageProps> = async ({ params }) => {
    const { speakerId } = params;

    const speaker = await db.speaker.findUnique({
        where: {
            id: speakerId,
        },
    });

    if (!speaker) {
        notFound();
    }

    const keytalks = await db.keytalk.findMany({
        select: {
            id: true,
            title: true,
        },
    });

    return (
        <SpeakerForm
            speaker={speaker as Speaker}
            speakerId={speakerId}
            keytalks={keytalks}
        />
    );
};

export default EventUpdatePage;
