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
            <body className="min-h-screen flex flex-col ">
                <NavBar/>
                {children}
            </body>
        </html>
    );
}
