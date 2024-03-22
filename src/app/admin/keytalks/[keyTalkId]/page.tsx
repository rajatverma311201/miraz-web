import { KeyTalkForm } from "@/components/admin/keytalk-form";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface KeyTalkUpdatePageProps {
    params: { keyTalkId: string };
}

const KeyTalkUpdatePage: React.FC<KeyTalkUpdatePageProps> = async ({
    params,
}) => {
    const { keyTalkId } = params;

    const keyTalk = await db.keytalk.findUnique({
        where: {
            id: keyTalkId,
        },
        select: {
            id: true,
            title: true,
            time: true,
            createdAt: true,
            updatedAt: true,
            speakers: true,
        },
    });

    if (!keyTalk) {
        notFound();
    }

    return <KeyTalkForm keyTalk={keyTalk} keyTalkId={keyTalkId} />;
};

export default KeyTalkUpdatePage;
