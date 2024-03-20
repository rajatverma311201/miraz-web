import Link from "next/link";

interface NavProps {}
const Nav: React.FC<NavProps> = ({}) => {
    return (
        <nav className="fixed z-50 flex h-14 w-full items-center justify-between border bg-secondary px-4 py-2">
            <p>Miraz Logo</p>
            <div className="flex items-center justify-center gap-10">
                <Link className="font-medium" href="admin/Login">
                    Login
                </Link>
                <Link className="font-medium" href="admin/Sign Up">
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};

export { Nav };
