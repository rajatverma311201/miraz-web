import { KeytalkForm } from "@/components/admin/keytalk-form";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface KeytalkUpdatePageProps {
    params: { keytalkId: string };
}

const KeytalkUpdatePage: React.FC<KeytalkUpdatePageProps> = async ({ params }) => {
    const { keytalkId } = params;

    const keytalk = await db.keytalk.findUnique({
        where: {
            id: keytalkId,
        },
    });

    if (!keytalk) {
        notFound();
    }

    return <KeytalkForm keytalk={keytalk} keytalkId={keytalkId} />;
};

export default KeytalkUpdatePage;
