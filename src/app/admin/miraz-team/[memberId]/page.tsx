import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import {TeamMemberForm  } from "@/components/admin/teammember-form";
import React from "react";

interface SponsorUpdatePageProps {
    params: { memberId: string };
}

const FaqUpdatePage: React.FC<SponsorUpdatePageProps> = async ({ params }) => {
    const { memberId } = params;

    const team = await db.mirazTeamMember.findUnique({
        where: {
            id: memberId,
        },
    });

    if (!team) {
        notFound();
    }

    return <TeamMemberForm member={team} memberId={memberId} />;
};

export default FaqUpdatePage;
