"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
interface NavigateBackBtnProps {
    className?: string;
}

export const NavigateBackBtn: React.FC<NavigateBackBtnProps> = ({}) => {
    const router = useRouter();
    const handleMoveBack = () => {
        router.back();
    };

    return (
        <Button onClick={handleMoveBack} className="flex items-center gap-2">
            <ArrowLeft size={18} /> Back
        </Button>
    );
};
