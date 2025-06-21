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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="relative flex justify-center items-center  bg-backdrop  p-3 sm:p-4 lg:p-6 ">

        </div> */}

        <div className="flex-col justify-center items-center font-[family-name:var(--font-geist-sans)] bg-background min-h-screen w-full h-auto overflow-hidden">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
