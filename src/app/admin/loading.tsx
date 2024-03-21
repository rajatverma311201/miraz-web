import { Loader } from "lucide-react";
import React from "react";

interface AdminLoadingProps {}

const AdminLoading: React.FC<AdminLoadingProps> = ({}) => {
    return (
        <div className="grid h-full place-content-center">
            <Loader size="50" className="animate-spin text-primary" />
        </div>
    );
};
export default AdminLoading;
