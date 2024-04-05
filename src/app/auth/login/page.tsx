"use client";

import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

import { PageHeading } from "@/components/page-heading";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
    const searchParams = useSearchParams();

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const urlError =
        searchParams.get("error") === "OAuthAccountNotLinked"
            ? "Email already in use with a different provider!"
            : "";

    const clickHandler = (provider: "google" | "github") => {
        toast.loading("Logging in, Please Wait !!!");
        console.log("[AuthPopover]\n clickHandler() ");
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT + "?loggedIn=true",
        });
    };

    return (
        <>
            <PageHeading title="Login / Register" />
            <Card className="mx-auto w-max min-w-80 max-w-96  lg:translate-y-12 lg:scale-[1.2]">
                <CardHeader className="flex flex-col items-center gap-4">
                    <Image
                        width={200}
                        height={200}
                        src="/logo-1.png"
                        alt="logo"
                    />
                </CardHeader>
                <CardContent className="flex flex-col items-stretch gap-5 py-12">
                    <Button
                        className="text-base"
                        variant={"outline"}
                        size={"lg"}
                        onClick={() => clickHandler("google")}
                    >
                        <FcGoogle className="mr-2 h-6 w-6" />
                        Google
                    </Button>
                    <Button
                        className="text-base"
                        variant={"outline"}
                        size={"lg"}
                        onClick={() => clickHandler("github")}
                    >
                        <FaGithub className="mr-2 h-6 w-6" />
                        Github
                    </Button>
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
        </>
    );
};

export default LoginPage;
