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
        <div className="p-10">
            <PageHeading title="Miraz Team" />
            {/* <p>
                Our team is a group of passionate individuals who are dedicated
                to creating a better future for our clients. We are committed to
                providing the best service possible, and we work hard to ensure
                that our clients are satisfied with the results. Our team is
                made up of experienced professionals who have a wealth of
                knowledge and expertise in their respective fields. We are
                always looking for ways to improve our services and stay ahead
                of the competition. If you are looking for a team that is
                dedicated to your success, then look no further than Miraz Team.
            </p> */}

            <div className="flex flex-wrap items-center justify-center gap-20 pt-20">
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
        </div>
    );
};

export default MirazTeamPage;
