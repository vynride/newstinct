import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Newstinct",
  // TODO :: add desc
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex justify-center items-center min-h-screen bg-backdrop font-[family-name:var(--font-geist-sans)] p-3 sm:p-4 lg:p-6 overflow-hidden">
          <div className="relative bg-background w-full h-auto rounded-2xl overflow-hidden shadow-2xl border-black z-50">
            <NavBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
