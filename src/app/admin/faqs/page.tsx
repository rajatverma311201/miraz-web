import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Link from "next/link";

interface FaqsAdminPageProps {}

const FaqsAdminPage: React.FC<FaqsAdminPageProps> = async ({}) => {
    const faqs = await db.faq.findMany();
    return (
        <div className="flex w-lvw flex-col items-center gap-5 overflow-x-hidden">
            <Button asChild>
                <Link href="/admin/faqs/add">Add a new FAQ</Link>
            </Button>
            <ul className="flex w-4/5 flex-col items-center gap-5">
                {/* {faqs.map((faq) => {
                    const { question, answer, id } = faq;
                    return (
                        <li
                            key={id}
                            className="flex w-full flex-col justify-between border-x-4 border-b-2 border-solid border-black px-3 py-3 hover:border-b-4"
                        >
                            <div className="border-b-2 border-solid border-black">
                                <p> Question : </p>
                                <p className="font-semibold"> {question} </p>
                            </div>
                            <div>
                                <p> Answer : </p>
                                <p className="font-semibold"> {answer} </p>
                            </div>
                        </li>
                    );
                })} */}
            </ul>
        </div>
    );
};

export default FaqsAdminPage;
