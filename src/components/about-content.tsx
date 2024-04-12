import { NumbersCardList } from "@/components/numbers-card-list";
import { PageHeading } from "@/components/page-heading";

interface AboutContentProps {}

export const AboutContent: React.FC<AboutContentProps> = ({}) => {
    return (
        <>
            <div className="p-4 md:p-6 lg:p-10">
                <PageHeading title="About Us" />
                <div className="mb-10 px-5 text-lg  font-light sm:text-xl md:px-16 lg:px-40">
                    <p className=" font-light text-muted-foreground">
                        Hit up those controllers, let that retro buzz fill the
                        room, step in through the valleys of those screens and
                        gameboys; into a world where pixels meet peak.
                    </p>
                    <p className="my-4 text-center">
                        <HighlightText>Miraz, IIT Mandi</HighlightText>
                    </p>
                    <p className="text-muted-foreground">
                        Welcome to the ultimate college fest of the{" "}
                        <HighlightText>Shivaliks!</HighlightText> As wills would
                        clash against one another, the bitter loss, the ecstasy
                        of joy, the triumph of sportsmanship; with beats so
                        powerful the mountains start to vibe and the power of
                        words in the woods, where the pen battles to thrive.
                        Join us for an epic journey through a pixelated
                        wonderland, where creativity and energy collide to
                        create an unforgettable experience! Gear up for non-stop
                        excitement and adventure.
                    </p>
                </div>

                <NumbersCardList />
            </div>
        </>
    );
};

interface HighlightTextProps {
    children: React.ReactNode;
}
const HighlightText: React.FC<HighlightTextProps> = ({ children }) => {
    return (
        <span className="text-2xl font-medium text-primary">{children}</span>
    );
};
