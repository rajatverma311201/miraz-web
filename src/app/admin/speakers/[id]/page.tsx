import { Nav } from "@/components/nav";
import Link from "next/link";

interface SpecificSpeakerAdminPageProps {
    params: {
        id: Number
    };
}

const SpecificSpeakerAdminPage: React.FC<SpecificSpeakerAdminPageProps> = ({ params }) => {
    const speakerDocument = {
        name: "Miraz",
        qualification: "Ph. D",
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "https://t4.ftcdn.net/jpg/01/42/20/17/360_F_142201762_qMCuIAolgpz4NbF5T5m66KQJzYzrEbUv.jpg",
        link: "https://www.google.com",
    }
    return (
        <div className="flex flex-col items-center gap-10">
            <Nav/>
            <p className="text-3xl font-bold">Speaker Info</p>
            <div className="flex flex-col justify-center items-start gap-5 border-2 border-black border-solid p-3 rounded-2xl">
                <div className="flex justify-between gap-5">
                    <p>Image : </p>
                    <img src={speakerDocument.image} alt="speaker image"/> 
                </div>     
                <div className="flex justify-between gap-5">
                    <p> Name :  </p>
                    <p className="font-semibold">{speakerDocument.name}</p>
                </div>
                <div className="flex justify-between gap-5">
                    <p>Qualification : </p>
                    <p className="font-semibold">{speakerDocument.qualification}</p>
                </div>
                <div className="flex justify-between gap-5">
                    <p>Bio : </p>
                    <p className="font-semibold">{speakerDocument.bio}</p>
                </div>
                <div className="flex justify-between gap-5">
                    <p>Link :  </p>
                    <Link href={speakerDocument.link} className="font-semibold">
                        <p>{speakerDocument.link} </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default SpecificSpeakerAdminPage;