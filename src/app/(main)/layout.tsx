import Image from "next/image";
import background from "@/../public/background.jpg";
import { BackgroundBeams } from "@/components/background-beams";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <BackgroundBeams />
            <div className=" pb-10">{children}</div>
        </>
    );
};
export default MainLayout;
