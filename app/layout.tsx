import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from '@/components/nav-bar.component'
import { Session } from 'next-auth'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BeatmodsV2",
  description: "Developed by the BSManager team",
};

export default function RootLayout({ session, children }: Readonly<{ session: Session, children: React.ReactNode }>) {
  return (
    <html lang="en">
        <body>
            <header className='w-full'>
                <NavBar/>
            </header>
            {children}
        </body>
    </html>
  );
}
