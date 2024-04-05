import { FaqsList } from "@/components/faqs-list";
import { PageHeading } from "@/components/page-heading";

import { db } from "@/lib/db";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const faqs = await db.faq.findMany();
    return {
        title: "Miraz Faqs",
        description: `Our faqs: ${faqs.map((faq) => faq.question + "-" + faq.answer).join(", ")}`,
    };
}
interface FaqsPageProps {}

const FaqsPage: React.FC<FaqsPageProps> = async () => {
    const faqs = await db.faq.findMany();

    return (
        <>
            <PageHeading title="FAQs" />
            <FaqsList faqs={faqs} />
        </>
    );
};

export default FaqsPage;
