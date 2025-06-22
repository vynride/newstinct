import type { Metadata } from "next";
import {  Manrope } from "next/font/google";
import NavBar from "@/components/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Newstinct",
  // TODO :: add desc
  description: "",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {/* <div className="relative flex justify-center items-center  bg-backdrop  p-3 sm:p-4 lg:p-6 ">

        </div> */}

        <div className="flex-col justify-center items-center font-[family-name:var(--font-manrope)] bg-background min-h-screen w-full h-auto overflow-hidden">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
