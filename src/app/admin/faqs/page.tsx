import { Nav } from "@/components/nav";
import Link from "next/link";

interface FaqsAdminPageProps {}

const FaqsAdminPage: React.FC<FaqsAdminPageProps> = ({}) => {
    const faqs = [
        {question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, soluta. Animi voluptatem numquam explicabo fugit voluptate atque asperiores, accusantium exercitationem tempora, eveniet tenetur odio est hic magnam dolor odit rem?"},
        {question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, soluta. Animi voluptatem numquam explicabo fugit voluptate atque asperiores, accusantium exercitationem tempora, eveniet tenetur odio est hic magnam dolor odit rem?"},
        {question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, soluta. Animi voluptatem numquam explicabo fugit voluptate atque asperiores, accusantium exercitationem tempora, eveniet tenetur odio est hic magnam dolor odit rem?"},
        {question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, soluta. Animi voluptatem numquam explicabo fugit voluptate atque asperiores, accusantium exercitationem tempora, eveniet tenetur odio est hic magnam dolor odit rem?"},
        {question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, soluta. Animi voluptatem numquam explicabo fugit voluptate atque asperiores, accusantium exercitationem tempora, eveniet tenetur odio est hic magnam dolor odit rem?"},
        {question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, soluta. Animi voluptatem numquam explicabo fugit voluptate atque asperiores, accusantium exercitationem tempora, eveniet tenetur odio est hic magnam dolor odit rem?"},
        {question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, soluta. Animi voluptatem numquam explicabo fugit voluptate atque asperiores, accusantium exercitationem tempora, eveniet tenetur odio est hic magnam dolor odit rem?"},
    ];
    return (
        <div className="flex flex-col items-center w-lvw gap-5 overflow-x-hidden">
            <Nav />
            <ul className="w-4/5 flex flex-col items-center gap-5">
                {faqs.map(faq => {
                    const { question, answer } = faq;
                    return (
                        <li key={question} className="w-full flex flex-col justify-between px-3 py-3 border-b-2 hover:border-b-4 border-x-4 border-black border-solid">
                            <div className="border-b-2 border-black border-solid">
                                <p> Question : </p>
                                <p className="font-semibold"> {question} </p>
                            </div>
                            <div>
                                <p> Answer : </p>
                                <p className="font-semibold"> {answer} </p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        <Link className="font-semibold bg-slate-600 p-2 rounded-lg" href="events/add">Add FAQs</Link>
        
        </div>
    );
};
export default FaqsAdminPage;
