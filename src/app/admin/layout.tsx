import { Nav } from "@/components/nav";

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <>
            <Nav />

            <main className="h-full px-2 py-4 pt-20">{children}</main>
        </>
    );
};
export default AdminLayout;
