import { Nav } from "@/components/nav";
import Link from "next/link";

interface SpecificSponsorAdminPageProps {
    params: {
        id: Number
    };
}

const SpecificSponsorAdminPage: React.FC<SpecificSponsorAdminPageProps> = ({ params }) => {
    const sponsorDocument = {
        id: 456,
        name: "Miraz",
        image: "https://t4.ftcdn.net/jpg/01/42/20/17/360_F_142201762_qMCuIAolgpz4NbF5T5m66KQJzYzrEbUv.jpg",
        link: "https://www.google.com",
    }
    return (
        <div className="flex flex-col items-center gap-10">
            <Nav/>
            <p className="text-3xl font-bold">Sponsor Info</p>
            <div className="flex flex-col justify-center items-start gap-5 border-2 border-black border-solid p-3 rounded-2xl">
                <div className="flex justify-between gap-5">
                    <p>Image : </p>
                    <img src={sponsorDocument.image} alt="speaker image"/> 
                </div>     
                <div className="flex justify-between gap-5">
                    <p> Name :  </p>
                    <p className="font-semibold">{sponsorDocument.name}</p>
                </div>
                <div className="flex justify-between gap-5">
                    <p>Link :  </p>
                    <Link href={sponsorDocument.link} className="font-semibold">
                        <p>{sponsorDocument.link} </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default SpecificSponsorAdminPage;