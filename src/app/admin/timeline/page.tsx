import { Nav } from "@/components/nav";

interface TimelineAdminPageProps {}

const TimelineAdminPage: React.FC<TimelineAdminPageProps> = ({}) => {
    const timeline = [
        {Title: "Hackathon", Date: 1},
        {Title: "Singin Event", Date: 4},
        {Title: "Fashion Show", Date: 8},
        {Title: "Robo Fight", Date: 18},
        {Title: "Cricket Match", Date: 2},
        {Title: "Tug of war", Date: 3},
        {Title: "Speaker Talk", Date: 10},
    ];
    return (
        <div className="flex flex-col items-center w-lvw gap-5">
            <Nav />
            <ul className="w-4/5 flex flex-col items-center gap-5">
                <li className="w-full flex justify-between items-center px-3 py-3 h-5 border-4 border-black border-solid">
                    <h2 className="font-bold">Title</h2>
                    <p className="font-bold">Date</p>
                </li>
                {timeline.map((event, index) => {
                    const { Title, Date } = event;
                    return (
                        <li key={index} className="w-full flex justify-between items-center px-3 py-3 h-5 border-b-2 hover:border-b-4 border-x-4 border-black border-solid">
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
