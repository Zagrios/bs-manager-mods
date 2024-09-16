import { auth } from "@/auth";
import Link from "next/link";
import Logo from "../public/svg/logo.svg";
import Image from "next/image";

export async function NavBar() {
    const session = await auth();

    return (
        <header className="bg-base-200 fixed top-0 w-full z-0 relative">
            <div className="navbar mx-auto max-w-7xl">
                <div className="navbar-start">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image priority src={Logo} alt="BeatMods" height={40} />
                        <p>BeatMods</p>
                    </Link>
                </div>
                {/* Menu pour les écrans larges */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/ModsList">Mods</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {session ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={session.user?.image ?? ""} alt="Profil" />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <Link href="" className="justify-between">
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link href="">Settings</Link>
                                </li>
                                <li>
                                    <Link href="">Upload Mods</Link>
                                </li>
                                <li>
                                    <Link href="/api/auth/signout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link href="/api/auth/signin" className="btn">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
