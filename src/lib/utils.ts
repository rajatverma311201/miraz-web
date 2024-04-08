import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getImageLink = (image: string) => {
    if (!image.includes("drive.google.com")) {
        return image;
    }
    const imageId = image.split("/d/")[1].split("/")[0];
    return `https://drive.google.com/thumbnail?id=${imageId}`;
};
