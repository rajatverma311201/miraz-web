"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

interface MessageToastProps {}

export const MessageToast: React.FC<MessageToastProps> = ({}) => {
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const unauthorized = searchParams.get("error") === "unauthorized";

        const urlError = searchParams.get("error") === "OAuthAccountNotLinked";

        const loggedOut = searchParams.get("loggedOut") === "true";

        const loggedIn = searchParams.get("loggedIn") === "true";

        if (unauthorized) {
            toast.error(
                "Unauthorized access!, You are not allowed to access the page!",
            );
            router.replace("?", undefined);
        }

        if (urlError) {
            toast.error("Email already in use with a different provider!");
            router.replace("?", undefined);
        }

        if (loggedOut) {
            toast.success("Logged out successfully!");
            router.replace("?", undefined);
        }

        if (loggedIn) {
            toast.success("Logged in successfully!");
            router.replace("?", undefined);
        }
    }, [searchParams, router]);

    return <></>;
};
