import { Nav } from "@/components/nav";

interface MirazTeamAdminPageProps {}

const MirazTeamAdminPage: React.FC<MirazTeamAdminPageProps> = ({}) => {
    const mirazTeamMenbers = [
        {name: "Hackathon",email: "123@gmail.com", role: "volunteer"},
        {name: "Singin Event",email: "123@gmail.com", role: "volunteer"},
        {name: "Fashion Show",email: "123@gmail.com", role: "volunteer"},
        {name: "Robo Fight", email: "123@gmail.com", role: "volunteer"},
        {name: "Cricket Match",email: "123@gmail.com", role: "volunteer"},
        {name: "Tug of war",email: "123@gmail.com", role: "volunteer"},
        {name: "Speaker Talk", email: "123@gmail.com", role: "volunteer"},
    ];
    return (
        <div className="flex flex-col items-center w-lvw gap-5">
            <Nav />
            <ul className="w-4/5 flex flex-col items-center gap-5">
                <li className="w-full flex justify-between items-center px-3 py-3 h-5 border-4 border-black border-solid">
                    <h2 className="font-bold">Name</h2>
                    <p className="font-bold">Email</p>
                    <p className="font-bold">Role</p>
                </li>
                {mirazTeamMenbers.map(mirazTeamMenber => {
                    const { name, email, role } = mirazTeamMenber;
                    return (
                        <li key={email} className="w-full flex justify-between items-center px-3 py-3 h-5 border-b-2 hover:border-b-4 border-x-4 border-black border-solid">
                            <p>{name}</p>
                            <p>{email}</p>
                            <p>{role}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );;
};
export default MirazTeamAdminPage;
