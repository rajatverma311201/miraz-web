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
        <h1
            className={cn(
                className,
                " px-5 py-10 text-center text-5xl font-bold uppercase text-primary md:text-6xl lg:py-20 lg:text-7xl",
            )}
        >
            {title}
        </h1>
    );
};
