import { auth } from "@/auth"
import Link from "next/link";

export async function NavBar() {
    const session = await auth();
    
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <button className="btn btn-ghost text-xl">BeatModsV2</button>
            </div>
            <div className="navbar-end">
                {session ? (
                    <div>
                        <p>Logged in as {session.user?.name}</p>
                        <Link href="/api/auth/signout">Logout</Link>
                    </div>
                ) : (
                    <Link href="/api/auth/signin">Login</Link>
                )}
            </div>
        </div>
    )
}