import { PageHeading } from "@/components/page-heading";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Miraz Keytalks",
};
interface KeytalksPageProps {}

const KeytalksPage: React.FC<KeytalksPageProps> = ({}) => {
    return <PageHeading title="KeyTalks" />;
};
export default KeytalksPage;
