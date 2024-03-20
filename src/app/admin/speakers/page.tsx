import { Nav } from "@/components/nav";
import Link from "next/link";

interface SpeakerAdminPageProps {}

const SpeakerAdminPage: React.FC<SpeakerAdminPageProps> = ({}) => {
    const speakers = [
        {name: "Hackathon", id: 1},
        {name: "Singin Event", id: 4},
        {name: "Fashion Show", id: 8},
        {name: "Robo Fight", id: 18},
        {name: "Cricket Match", id: 2},
        {name: "Tug of war", id: 3},
        {name: "Speaker Talk", id: 10},
    ];
    return (
        <div className="flex flex-col items-center w-lvw gap-5">
            <Nav />
            <ul className="w-4/5 flex flex-col items-center gap-5">
                <li className="w-full flex justify-between items-center px-3 py-3 h-5 border-4 border-black border-solid">
                    <h2 className="font-bold">Name</h2>
                    <p className="font-bold">Id</p>
                </li>
                {speakers.map(speaker => {
                    const { name, id } = speaker;
                    return (
                        <li key={id} className="w-full">
                            <Link href={`/admin/speakers/${id}`} className="w-full flex justify-between items-center px-3 py-3 h-5 border-b-2 hover:border-b-4 border-x-4 border-black border-solid">
                                <p>{name}</p>
                                <p>{id}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SpeakerAdminPage;