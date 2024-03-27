"use client";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { CoordinatorForm } from "./coordinator-form";
import { useState } from "react";
import { CoordinatorFormSchema } from "@/zodSchemas";
import { z } from "zod";
import { Pencil } from "lucide-react";

interface CoordinatorFormPopoverProps {
    eventId: string;
    coordinatorId?: string;
    coordinator?: z.infer<typeof CoordinatorFormSchema>;
}

export const CoordinatorFormPopover: React.FC<CoordinatorFormPopoverProps> = ({
    eventId,
    coordinatorId,
    coordinator,
}) => {
    const [open, setOpen] = useState(false);

    const onSettled = () => {
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                {coordinatorId ? (
                    <Button size={"iconSm"} variant={"outline"}>
                        <Pencil size={16} />
                    </Button>
                ) : (
                    <Button size={"sm"}>Add</Button>
                )}
            </PopoverTrigger>

            <PopoverContent className="w-80">
                <CoordinatorForm
                    eventId={eventId}
                    onSettled={onSettled}
                    coordinatorId={coordinatorId}
                    coordinator={coordinator}
                />
            </PopoverContent>
        </Popover>
    );
};
