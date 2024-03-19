import { db } from "@/lib/db";

interface AdminHomePageProps {}

const AdminHomePage: React.FC<AdminHomePageProps> = async ({}) => {
    const res = await db.faq.findMany();

    return (
        <>
            <h1>AdminHomePage</h1>
            <hr />
            <h2>FAQ&apos;s</h2>
            <ul>
                {res.map((item) => (
                    <li key={item.id} className="mb-4">
                        <p>{item.question} </p>
                        <span className="font-bold">{item.answer}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default AdminHomePage;
