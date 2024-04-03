import { FaqsList } from "@/components/faqs-list";
import { PageHeading } from "@/components/page-heading";

import { db } from "@/lib/db";

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
