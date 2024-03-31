"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { PiCircleBold } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface EventActionButtonsProps {
    rulebookLink: string;
    registerLink: string;
    submissionLink?: string;
    problemStatementLink?: string;
}
export const EventActionButtons: React.FC<EventActionButtonsProps> = ({
    rulebookLink,
    registerLink,
}) => {
    const router = useRouter();

    useEffect(() => {
        function handleKeyPress(event: KeyboardEvent) {
            if (event.key.toLowerCase() === "o") {
                router.push(registerLink);
            } else if (event.key.toLowerCase() === "x") {
                router.push(rulebookLink);
            }
        }

        document.addEventListener("keypress", handleKeyPress);

        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
    });

    return (
        <div className="flex justify-center gap-28">
            <Button
                asChild
                className="border-x-2 border-primary bg-transparent hover:scale-125 hover:bg-transparent"
            >
                <Link href="/" className="flex gap-2">
                    <PiCircleBold className="text-lg font-bold" />
                    Register
                </Link>
            </Button>
            <Button
                asChild
                className="border-x-2 border-destructive bg-transparent hover:scale-125 hover:bg-transparent"
            >
                <Link href={rulebookLink} className="flex gap-2">
                    <ImCross className="text-lg" />
                    RuleBook
                </Link>
            </Button>
        </div>
    );
};
