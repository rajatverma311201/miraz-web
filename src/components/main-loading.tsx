import { Loader2 } from "lucide-react";
import Image from "next/image";

export const MainLoading = () => {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-10">
            <Image
                alt="Loading"
                src={"/logo-1.png"}
                width={200}
                height={200}
                className="h-auto w-80 animate-pulse"
            />
            <Loader2 className="h-16 w-16 animate-spin" />
        </div>
    );
};
