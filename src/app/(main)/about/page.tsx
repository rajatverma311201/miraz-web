interface AboutUsPageProps {}

const AboutUsPage: React.FC<AboutUsPageProps> = ({}) => {
    return (
        <>
            <div className="p-10">
                <h1 className="text-center text-5xl text-primary">About Us</h1>
                <div className="my-10 px-40 text-xl font-light">
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

export default AboutUsPage;
