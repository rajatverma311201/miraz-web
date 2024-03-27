"use client";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useEffect, useState } from "react";
interface AuthPopoverProps {}

export const AuthPopover: React.FC<AuthPopoverProps> = ({}) => {
    const searchParams = useSearchParams();

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;

    const callbackUrl = searchParams.get("callbackUrl");

    const clickHandler = (provider: "google" | "github") => {
        console.log("[AuthPopover]\n clickHandler() ");
        signIn(provider, {
            callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        });
    };

    return (
        // <Popover>
        //     <PopoverTrigger>
        //         <Button size="lg" variant="outline">
        //             Login
        //         </Button>
        //     </PopoverTrigger>
        //     <PopoverContent>
        <div className="flex  items-center gap-x-2">
            <Button
                size="icon"
                // className="w-full"
                variant="outline"
                onClick={() => clickHandler("google")}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button
                size="icon"
                // className="w-full"
                variant="outline"
                onClick={() => clickHandler("github")}
            >
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
        //     </PopoverContent>
        // </Popover>
    );
};
