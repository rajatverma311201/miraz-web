import { FaqForm } from "@/components/admin/faq-form";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface FaqUpdatePageProps {
    params: { faqId: string };
}

const FaqUpdatePage: React.FC<FaqUpdatePageProps> = async ({ params }) => {
    const { faqId } = params;

    const faq = await db.faq.findUnique({
        where: {
            id: faqId,
        },
    });

    if (!faq) {
        notFound();
    }

    return <FaqForm faq={faq} faqId={faqId} />;
};

export default FaqUpdatePage;
