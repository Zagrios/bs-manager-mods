import { auth } from "@/auth";
import Link from "next/link";

export async function NavBar() {
    const session = await auth();

    return (
        <header className="fixed top-0 w-full z-0 relative">
            <div className="bg-base-100 w-full">
                <div className="navbar mx-auto max-w-7xl">
                    <div className="navbar-start">
                        {/* Menu pour les appareils mobiles */}
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/mods">Mods</Link></li>
                                <li><Link href="/wiki">Wiki</Link></li>
                            </ul>
                        </div>
                        {/* Logo */}
                        <Link href="/" className="btn btn-ghost normal-case text-xl">BeatModsV2</Link>
                    </div>
                    {/* Menu pour les écrans larges */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/mods">Mods</Link></li>
                            <li><Link href="/wiki">Wiki</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {session ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={session.user?.image ?? ''} alt="Profil" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link href="" className="justify-between">Profile</Link></li>
                                    <li><Link href="">Settings</Link></li>
                                    <li><Link href="">Upload Mods</Link></li>
                                    <li><Link href="/api/auth/signout">Logout</Link></li>
                                </ul>
                            </div>
                        ) : (
                            <Link href="/api/auth/signin" className="btn">Login</Link>
                        )}
                    </div>
                </div>
            </div>
    </header>
    );
}
