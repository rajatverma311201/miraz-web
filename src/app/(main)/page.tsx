import Image from "next/image";
import HomePage from "./homepage";
import background from "@/../public/background.jpg";

export default function Home() {
    return (
        <>
            <Image
                className="-z-10 opacity-25"
                alt="Background"
                src={background}
                placeholder="blur"
                quality={100}
                fill
                sizes="100vw"
                style={{
                    objectFit: "cover",
                }}
            />
            <HomePage />
        </>
    );
}
