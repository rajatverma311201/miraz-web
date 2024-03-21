import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import { SponsorForm } from "@/components/admin/sponsors-form";
import React from "react";

interface SponsorUpdatePageProps {
    params: { sponsorId: string };
}

const FaqUpdatePage: React.FC<SponsorUpdatePageProps> = async ({ params }) => {
    const { sponsorId } = params;

    const sponsor = await db.sponsor.findUnique({
        where: {
            id: sponsorId,
        },
    });

    if (!sponsor) {
        notFound();
    }

    return <SponsorForm sponsor={sponsor} sponsorId={sponsorId} />;
};

export default FaqUpdatePage;
