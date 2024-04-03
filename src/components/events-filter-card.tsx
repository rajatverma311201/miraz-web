import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckedState } from "@radix-ui/react-checkbox";
import { EventType } from "@prisma/client";
import { cn } from "@/lib/utils";

interface EventsFilterCardProps {
    eventSearch: string;
    eventTypeFilter: {
        SPORTS: boolean;
        CULT: boolean;
        TECH: boolean;
    };
    setEventTypeFilter: React.Dispatch<
        React.SetStateAction<{
            SPORTS: boolean;
            CULT: boolean;
            TECH: boolean;
        }>
    >;
    setEventSearch: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
}

export const EventsFilterCard: React.FC<EventsFilterCardProps> = ({
    eventSearch,
    eventTypeFilter,
    setEventTypeFilter,
    setEventSearch,
    className,
}) => {
    function eventTypeFilterChange(state: CheckedState, type: string) {
        setEventTypeFilter((prev) => {
            return { ...prev, [type]: state === true };
        });
    }

    return (
        <Card className={cn(className, "")}>
            <CardHeader>
                <CardTitle className="text-center">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <Input
                    value={eventSearch}
                    placeholder=" Search events"
                    onChange={(e) => {
                        setEventSearch(e.target.value);
                        console.log(e.target.value);
                    }}
                />
                <div className="space-y-3">
                    {Object.keys(EventType).map((type, idx) => {
                        return (
                            <div key={idx}>
                                <Checkbox
                                    id={type}
                                    onCheckedChange={(state) =>
                                        eventTypeFilterChange(state, type)
                                    }
                                    checked={
                                        eventTypeFilter[
                                            type as keyof typeof eventTypeFilter
                                        ]
                                    }
                                />
                                <Label
                                    className="ml-4 cursor-pointer text-xl"
                                    htmlFor={type}
                                >
                                    {type}
                                </Label>
                            </div>
                        );
                    })}
                </div>
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    );
};
