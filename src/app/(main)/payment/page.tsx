import { PageHeading } from "@/components/page-heading";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

interface PaymentPageProps {}

const PaymentPage: React.FC<PaymentPageProps> = ({}) => {
    return (
        <>
            <PageHeading title="Payment" />

            <Card className="mx-auto w-max text-center">
                <CardHeader></CardHeader>
                <CardContent className="flex flex-col gap-8 px-20">
                    {paymentDetails.map((detail, idx) => {
                        return (
                            <div key={idx} className="text-3xl">
                                <p className="mb-2 ">{detail.key}</p>
                                <p>{detail.value}</p>
                            </div>
                        );
                    })}
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
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
