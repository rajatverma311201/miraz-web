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

export const metadata: Metadata = {
    title: "Miraz Payments",
    description:
        "Pay for your registration here, You can pay by UPI or direct bank transfer.",
};

interface PaymentPageProps {}

const PaymentPage: React.FC<PaymentPageProps> = ({}) => {
    return (
        <>
            <PageHeading title="Payment" />
            <div className="p-2">
                <Card className="mx-auto max-w-[750px] text-center">
                    <CardHeader className="">
                        <CardTitle>Payment Details</CardTitle>
                        <CardDescription>
                            Pay via UPI/QR or Bank Transfer
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
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

                        <hr />

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
