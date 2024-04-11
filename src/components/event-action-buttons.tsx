"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { FaBook } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";
import { MdUploadFile } from "react-icons/md";

interface EventActionButtonsProps {
    rulebookLink?: string;
    registrationLink?: string;
    submissionLink?: string;
    problemStatementLink?: string;
}
export const EventActionButtons: React.FC<EventActionButtonsProps> = ({
    rulebookLink,
    registrationLink,
    submissionLink,
    problemStatementLink,
}) => {
    const LINKS_DATA = [
        {
            text: "Register",
            href: registrationLink,
            icon: <FaRegPenToSquare />,
            className: "bg-primary",
        },
        {
            text: "RuleBook",
            href: rulebookLink,
            icon: <FaBook />,
            className: "bg-primaryRed",
        },
        {
            text: "Submission",
            href: submissionLink,
            icon: <MdUploadFile />,
            className: "bg-primaryGreen",
        },
        {
            text: "Problem Statement",
            href: problemStatementLink,
            className: "bg-primaryViolet",
        },
    ];

    return (
        <>
            {LINKS_DATA.map((link) => {
                return (
                    link.href && (
                        <Button
                            className={`w-min text-white ${link.className}`}
                            size={"lg"}
                            asChild
                            variant={"eventAction"}
                            key={link.text}
                        >
                            <Link target="_blank" href={link.href}>
                                {link.icon}
                                <p className="ml-2">{link.text}</p>
                            </Link>
                        </Button>
                    )
                );
            })}
        </>
    );
};
