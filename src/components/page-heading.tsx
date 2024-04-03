import { cn } from "@/lib/utils";

interface PageHeadingProps {
    title: string;
    className?: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({
    title,
    className,
}) => {
    return (
        <h1 className={cn(className, "my-12 text-center text-7xl lg:my-20")}>
            {title}
        </h1>
    );
};
