import { MirazTeamMemberCard } from "@/components/miraz-team-card";
import { PageHeading } from "@/components/page-heading";
import { db } from "@/lib/db";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Miraz Team",
};

interface MirazTeamPageProps {}

const MirazTeamPage: React.FC<MirazTeamPageProps> = async () => {
    const members = await db.mirazTeamMember.findMany();

    return (
        <>
            <PageHeading title="Miraz Team" />

            <div className="flex flex-wrap items-center justify-center gap-20 py-10 ">
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
