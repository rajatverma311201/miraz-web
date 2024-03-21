import { Nav } from "@/components/nav";
import Link from "next/link";

interface EventsAdminPageProps {}

const EventsAdminPage: React.FC<EventsAdminPageProps> = () => {
    const onClickHandler = () => {
        console.log("Add Events Button Clicked");
    };
    const events = [
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
                    <h2 className="font-bold">Event Name</h2>
                    <p className="font-bold">Event Id</p>
                </li>
                {events.map((event) => {
                    const { name, id } = event;
                    return (
                        <li
                            key={id}
                            className="flex h-5 w-full items-center justify-between border-x-4 border-b-2 border-solid border-black px-3 py-3 hover:border-b-4"
                        >
                            <p>{name}</p>
                            <p>{id}</p>
                        </li>
                    );
                })}
            </ul>
            <Link
                className="rounded-lg bg-slate-600 p-2 font-semibold"
                href="events/add"
            >
                Add Events
            </Link>
        </div>
    );
};
export default EventsAdminPage;
