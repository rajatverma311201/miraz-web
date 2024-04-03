import { BackgroundBeams } from "@/components/background-beams";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="">
            <BackgroundBeams />
            {children}
        </div>
    );
};
export default MainLayout;
