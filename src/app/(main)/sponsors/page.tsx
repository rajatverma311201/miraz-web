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

interface SponsorsPageProps {}

const SponsorsPage: React.FC<SponsorsPageProps> = async ({}) => {
    const sponsors = await db.sponsor.findMany({});
    console.log(sponsors);

    return (
        <>
            <PageHeading title="Our Sponsors" />
            <div className="my-10 flex flex-wrap gap-5 ">
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
                    <Image src={image} alt={name} width={200} height={200} />
                </CardContent>
            </Card>
        </Link>
    );
};
