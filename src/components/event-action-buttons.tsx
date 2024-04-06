"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { PiCircleBold } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface EventActionButtonsProps {
    rulebookLink?: string;
    registerLink?: string;
    submissionLink?: string;
    problemStatementLink?: string;
}
export const EventActionButtons: React.FC<EventActionButtonsProps> = ({
    rulebookLink,
    registerLink,
    submissionLink,
    problemStatementLink,
}) => {
    const router = useRouter();

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (registerLink && event.key.toLowerCase() === "o") {
                router.push(registerLink);
            } else if (event.key.toLowerCase() === "x") {
                rulebookLink && router.push(rulebookLink);
            }
        }

        document.addEventListener("keypress", handleKeyPress);

        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
    });

    const iconClassName = "text-lg mr-4";

    const LINKS_DATA = [
        {
            text: "Register",
            href: registerLink,
            icon: <PiCircleBold className={iconClassName} />,
            className: "border-primary",
        },
        {
            text: "RuleBook",
            href: rulebookLink,
            icon: <ImCross className={iconClassName} />,
            className: "border-destructive",
        },
        {
            text: "Submission",
            href: submissionLink,
            icon: <ImCross className={iconClassName} />,
        },
        {
            text: "Problem Statement",
            href: problemStatementLink,
            icon: <ImCross className={iconClassName} />,
        },
    ];

    return (
        <>
            {LINKS_DATA.map((link) => {
                return (
                    link.href && (
                        <Button
                            size={"lg"}
                            asChild
                            variant={"eventAction"}
                            key={link.text}
                            className={link.className}
                        >
                            <Link target="_blank" href={link.href}>
                                {link.icon}
                                {link.text}
                            </Link>
                        </Button>
                    )
                );
            })}
        </>
    );
};
