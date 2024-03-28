import Link from "next/link";
import { AuthPopover } from "@/components/auth-popover";
import { getUser } from "@/lib/auth-utils";
import { UserBtn } from "@/components/auth/user-btn";

interface NavProps {}
const Nav: React.FC<NavProps> = async ({}) => {
    const user = await getUser();

    return (
        <nav className="fixed z-50 flex h-14 w-full items-center justify-between border bg-secondary px-4 py-2">
            <p>Miraz Logo</p>
            <div className="flex items-center justify-center gap-10">
                {user ? <UserBtn /> : <AuthPopover />}
            </div>
        </nav>
    );
};

export { Nav };
