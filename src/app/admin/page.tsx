// import { db } from "@/lib/db";
import { Nav } from "@/components/nav";
import Link from "next/link";

interface AdminHomePageProps {}

const AdminHomePage: React.FC<AdminHomePageProps> = async ({}) => {
    // const res = await db.faq.findMany();
    const models = [
        {name: "Events", entries: 1, link: "admin/events"},
        {name: "FAQ's", entries: 4, link: "admin/faqs"},
        {name: "Key Talks", entries: 8, link: "admin/keytalks"},
        {name: "Miraz Team", entries: 18, link: "admin/miraz-team"},
        {name: "Sponsers", entries: 2, link: "admin/sponsors"},
        {name: "Timeline", entries: 3, link: "admin/timeline"},
        {name: "Speakers", entries: 10, link: "admin/speakers"},
    ];

    return (
        <div className="flex flex-col items-center w-lvw gap-5">
            {/* <h1>AdminHomePage</h1>
            <hr />
            <h2>FAQ&apos;s</h2>
            <ul>
                {res.map((item) => (
                    <li key={item.id} className="mb-4">
                        <p>{item.question} </p>
                        <span className="font-bold">{item.answer}</span>
                    </li>
                ))}
                </ul> */}
            <Nav />
            <ul className="w-4/5 flex flex-col items-center gap-5">
                <li className="w-full flex justify-between items-center px-3 py-3 h-5 border-4 border-black border-solid">
                    <h2 className="font-bold">Models</h2>
                    <p className="font-bold">Number of Entries</p>
                </li>
                {models.map(model => {
                    const { name, entries, link } = model;
                    return (
                        <li key={name} className="w-full flex justify-between items-center px-3 py-3 h-5 border-b-2 hover:border-b-4 border-x-4 border-black border-solid">
                            <Link href={link}>{name}</Link>
                            <p>{entries}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default AdminHomePage;
