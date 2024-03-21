import { Nav } from "@/components/nav";
import Link from "next/link";

interface SpeakerAdminPageProps {}

const SpeakerAdminPage: React.FC<SpeakerAdminPageProps> = ({}) => {
    const speakers = [
        { name: "Hackathon", id: 1 },
        { name: "Singin Event", id: 4 },
        { name: "Fashion Show", id: 8 },
        { name: "Robo Fight", id: 18 },
        { name: "Cricket Match", id: 2 },
        { name: "Tug of war", id: 3 },
        { name: "Speaker Talk", id: 10 },
    ];
    return (
        <div className="flex w-lvw flex-col items-center gap-5">
            <ul className="flex w-4/5 flex-col items-center gap-5">
                <li className="flex h-5 w-full items-center justify-between border-4 border-solid border-black px-3 py-3">
                    <h2 className="font-bold">Name</h2>
                    <p className="font-bold">Id</p>
                </li>
                {speakers.map((speaker) => {
                    const { name, id } = speaker;
                    return (
                        <li key={id} className="w-full">
                            <Link
                                href={`/admin/speakers/${id}`}
                                className="flex h-5 w-full items-center justify-between border-x-4 border-b-2 border-solid border-black px-3 py-3 hover:border-b-4"
                            >
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
