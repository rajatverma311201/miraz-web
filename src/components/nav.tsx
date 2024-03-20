import Link from "next/link";

interface NavProps {}
const Nav: React.FC<NavProps> = ({}) => {
    return (
        <nav className="fixed flex h-14 w-full items-center justify-between border-b-2 border-solid border-black bg-white px-4 py-2">
            <p>Miraz Logo</p>
            <div className="flex items-center justify-center gap-10">
                <Link className="font-semibold" href="admin/Login">
                    Login
                </Link>
                <Link className="font-semibold" href="admin/Sign Up">
                    Sign Up
                </Link>
            </div>
        </nav>
    );
};

export { Nav };
