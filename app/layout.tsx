import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar.component";

export const metadata: Metadata = {
    title: "Beatmods",
    description: "Developed by the BSManager team",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <body className={inter.className + " min-h-screen flex flex-col "}>
                <NavBar/>
                {children}
            </body>
        </html>
    );
}
