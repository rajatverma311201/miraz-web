import Link from "next/link";

interface NavProps {}
const Nav: React.FC<NavProps> = ({}) => {
    return (
        <nav className="w-full flex px-4 py-2 justify-between items-center border-b-2 border-solid border-black h-14">
            <p>Miraz Logo</p>
            <div className="flex justify-center gap-10 items-center">
                <Link className="font-semibold" href="admin/Login">Login</Link>
                <Link className="font-semibold" href="admin/Sign Up">Sign Up</Link>
            </div>
        </nav>
    );
};

export { Nav };