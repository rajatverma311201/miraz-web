import Link from "next/link";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return <>{children}</>;
};
export default MainLayout;
