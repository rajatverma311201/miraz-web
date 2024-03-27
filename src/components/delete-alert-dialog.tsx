"use client";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface DeleteAlertDialogProps {
    action: (onSuccess?: () => void) => void;
}

export const DeleteAlertDialog: React.FC<DeleteAlertDialogProps> = ({
    action,
}) => {
    const router = useRouter();
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    size={"iconSm"}
                    variant={"outline"}
                    className="text-destructive"
                >
                    <Trash2 size={16} />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the item.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className={buttonVariants({ variant: "destructive" })}
                        onClick={(e) => action(() => router.refresh())}
                    >
                        Continue
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};
