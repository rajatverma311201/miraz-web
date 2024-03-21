import { Nav } from "@/components/nav";

interface AdminLayoutProps {
    children: React.ReactNode;
}

export const revalidate = 0;
export const dynamic = "force-dynamic";

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
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
