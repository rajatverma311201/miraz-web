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
        console.log(unauthorized, "error");

        if (unauthorized) {
            toast.error(
                "Unauthorized access!, You are not allowed to access the page!",
            );

            router.replace("?", undefined);
        }
    }, [searchParams, router]);

    return <></>;
};
