"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { z } from "zod";
import { MirazTeamMemberSchema } from "@/zodSchemas";
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

const MirazTeamPage: React.FC<MirazTeamPageProps> = () => {
    return (
        <div className="p-10">
            <h1 className="text-center text-5xl">Miraz Team</h1>
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
                {Array.from({ length: 10 }).map((_, index) => (
                    <MirazTeamMemberCard key={index} {...MIRAZ_TEAM_DATA[0]} />
                ))}
            </div>
        </div>
    );
};

export default MirazTeamPage;

interface MirazTeamMemberCardProps
    extends z.infer<typeof MirazTeamMemberSchema> {}

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

    return (
        <motion.div
            className="group bg-primary/50 "
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
            <Card className="relative z-10 rounded-none group-hover:-translate-x-2 group-hover:-translate-y-2">
                <Image
                    className={cn(
                        " absolute bottom-0  right-0 z-[-1] aspect-auto h-auto w-auto animate-pulse opacity-80",
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
                    <Image
                        height={500}
                        width={500}
                        src={image}
                        alt="team member"
                        className="z-50 h-52 w-auto"
                    />
                </CardContent>

                <CardFooter className=" flex flex-col gap-2">
                    <p className="uppercase">{role}</p>
                    <div className="flex justify-center gap-4">
                        <Button
                            className="asChild rounded-none text-2xl "
                            size={"icon"}
                            variant={"outline"}
                            asChild
                        >
                            <Link href={`mailto:${email}`}>
                                <IoMailOutline />
                            </Link>
                        </Button>
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
                    </div>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

// export const AnimCard1 = () => {
//     return (
//         <>
//             <div>
//                 <motion.div
//                     className="relative overflow-hidden  bg-primary/50"
//                     // whileHover={{
//                     //     borderBottomLeftRadius: "0",
//                     //     borderTopRightRadius: "10%",
//                     // }}
//                     // transition={{
//                     //     duration: 0.5,
//                     //     type: "spring",
//                     //     damping: 10,
//                     //     stiffness: 200,
//                     // }}
//                 >
//                     <motion.div
//                         layout
//                         className=" h-96 min-w-72 max-w-80 overflow-hidden   rounded-bl-[50%] border bg-accent  shadow-none hover:shadow-lg"
//                         whileHover={{
//                             borderBottomLeftRadius: "0",
//                             textAlign: "left",
//                             borderTopRightRadius: "50%",
//                         }}
//                         // transition={{
//                         //     duration: 0.5,
//                         //     type: "spring",
//                         //     damping: 10,
//                         //     stiffness: 150,
//                         // }}
//                     >
//                         <Card className="flex h-full w-full flex-col items-stretch justify-between rounded-none border-none  shadow-none">
//                             <CardHeader className="">
//                                 <CardTitle>{MIRAZ_TEAM_DATA[0].name}</CardTitle>
//                                 <CardDescription>
//                                     {MIRAZ_TEAM_DATA[0].role}
//                                 </CardDescription>
//                             </CardHeader>
//                             <CardContent className=" flex items-center justify-center">
//                                 <Image
//                                     height={500}
//                                     width={500}
//                                     src={MIRAZ_TEAM_DATA[0].image}
//                                     alt="team member"
//                                     className="h-52 w-auto rounded "
//                                 />
//                             </CardContent>
//                             <CardFooter className="flex justify-end gap-2">
//                                 <FaLinkedin
//                                     size={40}
//                                     className=" text-muted-foreground"
//                                 />

//                                 <FaInstagramSquare
//                                     size={40}
//                                     className="text-muted-foreground"
//                                 />
//                             </CardFooter>
//                         </Card>
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </>
//     );
// };
