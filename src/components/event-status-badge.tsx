import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

interface EventStatusBadgeProps {
    status: string;
}

export const EventStatusBadge: React.FC<EventStatusBadgeProps> = ({
    status,
}) => {
    if (status) {
        return (
            <Badge
                className={cn(
                    "bg-primaryYellow absolute right-1 top-1 font-[900] uppercase hover:bg-primary/80",
                    status?.toLowerCase().includes("on") &&
                        "bg-primaryGreen hover:bg-primaryGreen/80",
                    status?.toLowerCase().includes("off") &&
                        "bg-primaryOrange hover:bg-primaryOrange/80",
                )}
            >
                {status}
            </Badge>
        );
    }
    return null;
};
