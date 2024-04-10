"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn, getImageLink } from "@/lib/utils";
import { MirazTeamMemberSchema } from "@/zodSchemas";
import { MirazTeamMember } from "@prisma/client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { z } from "zod";

interface MirazTeamMemberCardProps extends Partial<MirazTeamMember> {}

export const MirazTeamMemberCard: React.FC<MirazTeamMemberCardProps> = ({
    name,
    email,
    role,
    image,
    linkedinLink,
    instagramLink,
}) => {
    const durationClasses = [
        // "duration-1000",
        "duration-2000",
        "duration-3000",
        "duration-4000",
        "duration-5000",
        "duration-6000",
        // "duration-7000",
        // "duration-8000",
    ];

    const randomDurationClass =
        durationClasses[Math.floor(Math.random() * durationClasses.length)];

    const imageLink = getImageLink(image as string);

    return (
        <motion.div
            className="group bg-primary "
            initial={{
                opacity: 0,
                scale: 0.75,
            }}
            viewport={{ once: true }}
            whileInView={{
                opacity: 1,
                scale: 1,
            }}
        >
            <Card className="relative z-10 w-80 overflow-hidden rounded-none group-hover:-translate-x-2 group-hover:-translate-y-2">
                <Image
                    className={cn(
                        " absolute bottom-0  right-0 z-[-1] aspect-auto h-full w-auto animate-pulse opacity-80",
                        randomDurationClass,
                    )}
                    width={100}
                    height={100}
                    alt="background"
                    src={"./member-bg.svg"}
                />
                <CardHeader>
                    <CardTitle className="uppercas">{name}</CardTitle>
                </CardHeader>
                <CardContent className="">
                    <div className="mx-auto aspect-square h-52  overflow-hidden rounded-full outline outline-2 outline-offset-4 outline-secondary">
                        <Image
                            height={500}
                            width={500}
                            src={imageLink || "/logo-1.png"}
                            alt="team member"
                            className="z-50  h-full w-full  object-cover"
                        />
                    </div>
                </CardContent>

                <CardFooter className=" flex flex-col gap-2">
                    <p className="uppercase">{role}</p>
                    <div className="flex justify-center gap-4">
                        {email && (
                            <Button
                                className="asChild rounded-none text-2xl "
                                size={"icon"}
                                variant={"outline"}
                                asChild
                            >
                                <Link href={`mailto:${email}` || "#"}>
                                    <IoMailOutline />
                                </Link>
                            </Button>
                        )}
                        {linkedinLink && (
                            <Button
                                className="asChild rounded-none text-xl"
                                size={"icon"}
                                variant={"outline"}
                                asChild
                            >
                                <Link href={linkedinLink}>
                                    <FaLinkedinIn />
                                </Link>
                            </Button>
                        )}
                        {instagramLink && (
                            <Button
                                className="asChild rounded-none text-2xl "
                                size={"icon"}
                                variant={"outline"}
                                asChild
                            >
                                <Link href={instagramLink}>
                                    <FaInstagram />
                                </Link>
                            </Button>
                        )}
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    );
};
