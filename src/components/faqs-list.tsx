"use client";

import { Faq } from "@prisma/client";
import { Input } from "@/components/ui/input";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { GiSuperMushroom } from "react-icons/gi";
import { useEffect, useState } from "react";

interface FaqsListProps {
    faqs: Faq[];
}

export const FaqsList: React.FC<FaqsListProps> = ({ faqs }) => {
    const [searchString, setSearchString] = useState("");
    const [filteredFaqs, setFilteredFaqs] = useState(faqs);

    useEffect(() => {
        // filter faqs based on search string
        const filtered = faqs.filter((faq) =>
            faq.question.toLowerCase().includes(searchString.toLowerCase()),
        );

        setFilteredFaqs(filtered);
    }, [faqs, searchString]);

    return (
        <div className="mx-[5%] flex flex-col gap-4">
            <Input
                className="mx-auto mb-12 w-3/4 lg:w-1/2"
                placeholder="Search FAQs..."
                onChange={(e) => setSearchString(e.target.value)}
                value={searchString}
            />
            {filteredFaqs.map((faq) => {
                return (
                    <Accordion key={faq.id} type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex items-center gap-8">
                                    <GiSuperMushroom size={30} />
                                    <p className="text-start">{faq.question}</p>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="ml-16">{faq.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                );
            })}
        </div>
    );
};
