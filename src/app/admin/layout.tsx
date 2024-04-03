import { Nav } from "@/components/nav";
import { getUser } from "@/lib/auth-utils";
import { UserRole } from "@prisma/client";
import { redirect } from "next/navigation";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export const revalidate = 0;
export const dynamic = "force-dynamic";

const AdminLayout: React.FC<AdminLayoutProps> = async ({ children }) => {
    const user = await getUser();
    if (!user) {
        redirect("/login");
    }
    if (user.role == UserRole.USER) {
        redirect("/");
    }
    return (
        <>
            <Nav />

            <main className="h-full overflow-x-hidden px-2 py-4 pt-20">
                {children}
            </main>
        </>
    );
};
export default AdminLayout;
