import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import NavBar from "@/components/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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

        <div className="flex-col justify-center items-center font-[family-name:var(--font-manrope)] bg-background min-h-screen w-full h-auto rounded-2xl overflow-hidden shadow-2xl border-black z-50">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
