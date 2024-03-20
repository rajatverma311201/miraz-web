import { NavigateBackBtn } from "@/components/navigate-back-btn";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = ({}) => {
    return (
        <>
            <div className="grid h-full place-content-center space-y-4">
                <h1 className="text-center text-3xl font-semibold text-gray-600">
                    <span className="text-5xl"> 404 </span>
                    <br /> Page Not Found
                </h1>
                <div>
                    <p className="text-center">
                        Sorry, the page you are looking for does not exist.
                    </p>
                    <p className="text-center">
                        You can always visit the home page or go back.
                    </p>
                </div>

                <div className="flex justify-center gap-4">
                    <Button asChild>
                        <Link
                            replace
                            href={"/"}
                            className="flex items-center gap-2"
                        >
                            <Home size={18} /> Home
                        </Link>
                    </Button>
                    <NavigateBackBtn className="" />
                </div>
            </div>
        </>
    );
};
export default NotFoundPage;
