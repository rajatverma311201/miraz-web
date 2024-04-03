"use client";
import { logout } from "@/actions/logout";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface LogoutBtnNavLinkProps {}

export const LogoutBtnNavLink: React.FC<LogoutBtnNavLinkProps> = ({}) => {
    const logoutHandler = () => {
        toast.loading("Logging out, Please Wait !!!");
        logout();
    };

    return (
        <Button variant={"navLink"} size={"navLinkSz"} onClick={logoutHandler}>
            Logout
        </Button>
    );
};
