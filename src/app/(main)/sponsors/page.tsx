import { PageHeading } from "@/components/page-heading";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { db } from "@/lib/db";
import { SponsorSchema } from "@/zodSchemas";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

import { Metadata } from "next";
import { getImageLink } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
    const sponsors = await db.sponsor.findMany({});
    return {
        title: "Miraz Sponsors",
        description: `Our sponsors: ${sponsors.map((sponsor) => sponsor.name).join(", ")}`,
    };
}

interface SponsorsPageProps {}

const SponsorsPage: React.FC<SponsorsPageProps> = async ({}) => {
    const sponsors = await db.sponsor.findMany({});

    return (
        <>
            <PageHeading title="Our Sponsors" />
            <div className=" flex flex-wrap items-center justify-center gap-5 md:gap-10">
                {sponsors.map((sponsor) => (
                    <SponsorCard
                        key={sponsor.id}
                        name={sponsor.name}
                        image={sponsor.image}
                        link={sponsor.link}
                        type={sponsor.type as string}
                    />
                ))}
            </div>
        </>
    );
};

export default SponsorsPage;

interface SponsorCardProps extends z.infer<typeof SponsorSchema> {}

const SponsorCard: React.FC<SponsorCardProps> = ({
    name,
    type,
    image,
    link,
}) => {
    const imgLink = getImageLink(image);

    return (
        <Link href={link} target="_blank">
            <Card className="w-80 hover:scale-105 hover:outline hover:outline-2 hover:outline-primary">
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription className="uppercase">
                        {type || "sponsor"}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center">
                    <Image src={imgLink} alt={name} width={200} height={200} />
                </CardContent>
            </Card>
        </Link>
    );
};
