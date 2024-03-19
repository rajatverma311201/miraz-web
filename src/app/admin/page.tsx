import { db } from "@/lib/db";

interface AdminHomePageProps {}

const AdminHomePage: React.FC<AdminHomePageProps> = async ({}) => {
    const res = await db.fAQ.findMany();

    return (
        <>
            <h1>AdminHomePage</h1>
            <hr />
            <h2>FAQ&apos;s</h2>
            <ul>
                {res.map((faq) => (
                    <li key={faq.id} className="mb-4">
                        <p>{faq.question} </p>
                        <span className="font-bold">{faq.answer}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default AdminHomePage;
