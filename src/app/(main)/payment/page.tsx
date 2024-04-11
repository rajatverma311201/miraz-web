import { PageHeading } from "@/components/page-heading";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Miraz Payments",
    description:
        "Pay for your registration here, You can pay by UPI or direct bank transfer.",
};

// const registrationFormLink =
//     "https://drive.google.com/drive/folders/1bKZxvdYZzLnA7ajOiSaMkA7E0ZJPd1uB?usp=drive_link";

const registrationFormLink = "https://linktr.ee/Miraz_IIT_MANDI";

const sportsFeeStructureLink =
    "https://drive.google.com/file/d/1DADsT-blh00wcsNQwyt7Uifo6RkppqEN/view?usp=sharing";

const otherFeeStructureLink =
    "https://drive.google.com/drive/folders/10YySAc-eDBuX1ia91TL17N9zEnUs5X1i";

interface PaymentPageProps {}

const PaymentPage: React.FC<PaymentPageProps> = ({}) => {
    return (
        <>
            <PageHeading title="Payment" />
            <div className="p-2">
                <Card className="mx-auto max-w-[1000px] text-center">
                    <CardHeader className="">
                        <CardTitle>Payment Details</CardTitle>
                        <CardDescription>
                            Pay via UPI/QR or Bank Transfer
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                        <div className="text-lg">
                            <h2>Click on this button for registration</h2>
                            <Button
                                asChild
                                className="bg-primaryGreen uppercase text-black  underline hover:bg-primaryGreen/90"
                            >
                                <Link
                                    target="_blank"
                                    href={registrationFormLink}
                                >
                                    Registration
                                </Link>
                            </Button>
                            <h2 className="mt-5">Fee Structures</h2>
                            <div className="space-x-5">
                                <Button
                                    asChild
                                    className="bg-primaryYellow uppercase text-black  underline hover:bg-primaryYellow/90"
                                >
                                    <Link
                                        target="_blank"
                                        href={sportsFeeStructureLink}
                                    >
                                        Sports Fee
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    className="bg-primaryYellow uppercase text-black  underline hover:bg-primaryYellow/90"
                                >
                                    <Link
                                        target="_blank"
                                        href={otherFeeStructureLink}
                                    >
                                        Other Fee
                                    </Link>
                                </Button>
                            </div>
                            <p className="my-5">
                                Contact in case of any doubt :{" "}
                                <Link
                                    href={"tel:9485999199"}
                                    className="underline"
                                >
                                    9485999199
                                </Link>
                            </p>
                        </div>
                        <div className="[column-rule-style:solid] [column-rule-width:1px] md:columns-2">
                            <div>
                                <Image
                                    src="/upi-qr-code.png"
                                    alt="UPI QR Code"
                                    width={200}
                                    height={200}
                                    className="mx-auto"
                                />
                                <p className="mt-4 text-primary">
                                    Scan the QR Code to pay via UPI
                                </p>
                                <p>OR</p>
                                <p className="mb-1 text-xl font-bold uppercase text-primary">
                                    UPI ID
                                </p>
                                <p className="text-xl">36299062221@sbi</p>
                            </div>

                            <hr className="my-5 border-white md:hidden" />

                            <div className="flex flex-col gap-5 px-10">
                                {paymentDetails.map((detail, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className="text-lg sm:text-xl"
                                        >
                                            <p className="mb-1 font-bold uppercase text-primary">
                                                {detail.key}
                                            </p>
                                            <p>{detail.value}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </>
    );
};

const paymentDetails = [
    {
        key: "Account Name",
        value: "IIT Mandi Exodia 2019",
    },
    {
        key: "Account Number",
        value: "36299062221",
    },
    {
        key: "IFSC Code",
        value: "SBIN0013711",
    },
    {
        key: "Bank & Branch",
        value: "State Bank Of India, IIT Mandi Branch",
    },
];

export default PaymentPage;
