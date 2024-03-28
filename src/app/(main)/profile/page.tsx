import { LogoutBtn } from "@/components/auth/logout-btn";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getUser } from "@/lib/auth-utils";
import { LogOut } from "lucide-react";
import Image from "next/image";

interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = async ({}) => {
    const user = await getUser();

    return (
        <div className="pt-20">
            <Card className="mx-auto max-w-[500px]">
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-5">
                    <Image
                        height={200}
                        width={200}
                        src={user?.image || ""}
                        alt="user-image"
                        className="rounded-full"
                    />
                    <p className="text-xl font-medium">{user?.name}</p>
                    <p>{user?.email}</p>
                    <p>{user?.role}</p>
                </CardContent>
                <CardFooter>
                    <LogoutBtn>
                        <Button variant={"destructive"}>
                            Logout <LogOut className="ml-2 h-4 w-4" />
                        </Button>
                    </LogoutBtn>
                </CardFooter>
            </Card>
        </div>
    );
};
export default ProfilePage;
