"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LuMenu } from "react-icons/lu";

interface NavigationDrawerWrapperProps {
    children?: React.ReactNode;
}

export const NavigationDrawerWrapper: React.FC<
    NavigationDrawerWrapperProps
> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = usePathname();

    useEffect(() => {
        if (isOpen) {
            setIsOpen(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="">
                <Button className="fixed right-0 top-0 z-50 rounded-none border-none px-6 text-base uppercase">
                    <LuMenu className="mr-2 text-lg" /> Menu
                </Button>
            </SheetTrigger>
            <SheetContent
                className="h-full w-full rounded-none border-none bg-transparent pr-16 pt-12 md:w-3/4"
                side={"right"}
            >
                {children}
            </SheetContent>
        </Sheet>
    );
};
