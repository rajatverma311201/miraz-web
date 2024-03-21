import { Nav } from "@/components/nav";

interface TimelineAdminPageProps {}

const TimelineAdminPage: React.FC<TimelineAdminPageProps> = ({}) => {
    const timeline = [
        { Title: "Hackathon", Date: 1 },
        { Title: "Singin Event", Date: 4 },
        { Title: "Fashion Show", Date: 8 },
        { Title: "Robo Fight", Date: 18 },
        { Title: "Cricket Match", Date: 2 },
        { Title: "Tug of war", Date: 3 },
        { Title: "Speaker Talk", Date: 10 },
    ];
    return (
        <div className="flex w-lvw flex-col items-center gap-5">
            <ul className="flex w-4/5 flex-col items-center gap-5">
                <li className="flex h-5 w-full items-center justify-between border-4 border-solid border-black px-3 py-3">
                    <h2 className="font-bold">Title</h2>
                    <p className="font-bold">Date</p>
                </li>
                {timeline.map((event, index) => {
                    const { Title, Date } = event;
                    return (
                        <li
                            key={index}
                            className="flex h-5 w-full items-center justify-between border-x-4 border-b-2 border-solid border-black px-3 py-3 hover:border-b-4"
                        >
                            <p>{Title}</p>
                            <p>{Date}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default TimelineAdminPage;
