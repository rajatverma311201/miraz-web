import { MirazTeamMemberCard } from "@/components/miraz-team-card";
import { PageHeading } from "@/components/page-heading";
import { db } from "@/lib/db";

const MIRAZ_TEAM_DATA = [
    {
        name: "Rajat Verma",
        email: "xyz@abc.com",
        role: "Developer",
        image: "https://avatars.githubusercontent.com/u/76511373?s=400&u=6005dd23984a52f9edc75baffb5481fefa18cff2&v=4",
        linkedinLink: "test link",
        instagramLink: "test link",
    },
];

interface MirazTeamPageProps {}

const MirazTeamPage: React.FC<MirazTeamPageProps> = async () => {
    const members = await db.mirazTeamMember.findMany();

    return (
        <>
            <PageHeading title="Miraz Team" />

            <div className="flex flex-wrap items-center justify-center gap-20 pt-10">
                {members.map((member) => (
                    <MirazTeamMemberCard
                        key={member.id}
                        name={member.name}
                        email={member.email}
                        role={member.role}
                        image={member.image}
                        linkedinLink={member.linkedinLink}
                        instagramLink={member.instagramLink}
                    />
                ))}
            </div>
        </>
    );
};

export default MirazTeamPage;
