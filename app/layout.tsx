import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/nav-bar.component";

export const metadata: Metadata = {
    title: "BeatmodsV2",
    description: "Developed by the BSManager team",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <header className="w-full">
                    <NavBar />
                </header>
                {children}
            </body>
        </html>
    );
}
