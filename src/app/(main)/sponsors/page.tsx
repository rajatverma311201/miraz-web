import { PageHeading } from "@/components/page-heading";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SponsorSchema } from "@/zodSchemas";
import Image from "next/image";
import Link from "next/link";
import { z } from "zod";

import { Metadata } from "next";
import { cn, getImageLink } from "@/lib/utils";

import sponsors from "./mirazDB.Sponsor.json";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Miraz Sponsors",
        description: `Our sponsors: ${sponsors.map((sponsor) => sponsor.name).join(", ")}`,
    };
}

interface SponsorsPageProps {}

const SponsorsPage: React.FC<SponsorsPageProps> = async ({}) => {
    const ieee = {
        _id: "ieee",
        name: "IEEE IIT Mandi Student Branch",
        type: "Associate Title Sponsor",
        image: "/sponsors/ieee.png",
        link: "https://ieee.iitmandi.ac.in/",
    };
    return (
        <>
            <PageHeading title="Our Sponsors" />
            <div className="mb-10 flex items-center justify-center">
                <SponsorCard
                    className="mx-auto w-max"
                    key={ieee.name}
                    name={ieee.name}
                    image={ieee.image}
                    link={ieee.link}
                    type={ieee.type as string}
                />
            </div>
            <div className=" flex flex-wrap items-center justify-center gap-5 pb-10 md:gap-10">
                {sponsors.map((sponsor) => (
                    <SponsorCard
                        key={sponsor.name}
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

interface SponsorCardProps extends z.infer<typeof SponsorSchema> {
    className?: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
    name,
    type,
    image,
    link,
    className,
}) => {
    const imgLink = getImageLink(image);

    return (
        <Link href={link} target="_blank">
            <Card
                className={cn(
                    "w-80 hover:scale-105 hover:outline hover:outline-2 hover:outline-primary",
                    className,
                )}
            >
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription className="uppercase">
                        {type || "sponsor"}
                    </CardDescription>
                </CardHeader>
                <CardContent className=" flex items-center justify-center">
                    <Image
                        className="w-3/4"
                        src={imgLink}
                        alt={name}
                        width={500}
                        height={500}
                    />
                </CardContent>
            </Card>
        </Link>
    );
};
