import Link from "next/link";
import { Button } from "./ui/button";
import { NavigationDrawerWrapper } from "./navigation-drawer-wrapper";
import { getUser } from "@/lib/auth-utils";
import { LogoutBtnNavLink } from "./auth/logout-btn-nav-link";

interface NavigationDrawerProps {}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = async ({}) => {
    const user = await getUser();

    return (
        <>
            <NavigationDrawerWrapper>
                <div className="flex flex-col gap-5 px-5 lg:gap-6">
                    {DATA.map((item) => {
                        if (item.title === "Login/Register" && user) {
                            return null;
                        }

                        if (item.title === "Logout" && user) {
                            return (
                                <div key={item.href} className="bg-primary">
                                    <LogoutBtnNavLink key={item.href} />
                                </div>
                            );
                        }

                        if (
                            ["Profile", "Logout"].includes(item.title) &&
                            !user
                        ) {
                            return null;
                        }

                        return (
                            <div key={item.href} className="bg-primary">
                                <Button
                                    asChild
                                    key={item.href}
                                    variant={"navLink"}
                                    size={"navLinkSz"}
                                >
                                    <Link href={item.href}>{item.title}</Link>
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </NavigationDrawerWrapper>
            <div className="hidden flex-col gap-5 px-5 lg:gap-6">
                {DATA.map((item) => {
                    if (item.title === "Login/Register" && user) {
                        return null;
                    }

                    if (item.title === "Logout" && user) {
                        return (
                            <div key={item.href} className="bg-primary">
                                <LogoutBtnNavLink key={item.href} />
                            </div>
                        );
                    }

                    if (["Profile", "Logout"].includes(item.title) && !user) {
                        return null;
                    }

                    return (
                        <div key={item.href} className="bg-primary">
                            <Button
                                asChild
                                key={item.href}
                                variant={"navLink"}
                                size={"navLinkSz"}
                            >
                                <Link href={item.href}>{item.title}</Link>
                            </Button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

const DATA = [
    {
        title: "Home",
        description: "Go to the home page",
        href: "/",
    },

    {
        title: "Events",
        description: "View all events",
        href: "/events",
    },
    {
        title: "Keytalks",
        description: "View all keytalks",
        href: "/keytalks",
    },
    {
        title: "Sponsors",
        description: "View all sponsors",
        href: "/sponsors",
    },
    {
        title: "Miraz Team",
        description: "Meet the team",
        href: "/team",
    },
    {
        title: "Payment",
        description: "Payment Details",
        href: "/payment",
    },

    {
        title: "Login/Register",
        description: "Login to your account",
        href: "/auth/login",
    },

    {
        title: "Profile",
        description: "View your profile",
        href: "/profile",
    },

    {
        title: "Logout",
        description: "Logout from your account",
        href: "/auth/logout",
    },
];
