"use client";

import { logout } from "@/actions/logout";
import { toast } from "sonner";

interface LogoutButtonProps {
    children?: React.ReactNode;
}

export const LogoutBtn: React.FC<LogoutButtonProps> = ({ children }) => {
    const onClick = () => {
        toast.loading("Logging out, Please Wait !!!");
        logout();
    };

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
};
