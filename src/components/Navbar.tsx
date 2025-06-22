import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <div className="grid grid-cols-3 items-center mt-8 px-4 bg-background">
      <div className="flex justify-start pl-2 sm:pl-5 md:pl-8 lg:pl-20">
          <Link className="text-center font-bold text-2xl sm:text-3xl text-[#0f766e] hover:text-[#0f766dcd]" href="/">
            Newstinct 🐧
          </Link>
          {/* <p className="pt-2 text-center text-lg text-casualTextGray">
            <em> Clarity through the Chaos</em>
          </p> */}
      </div>

      <nav className="flex justify-center space-x-2 sm:space-x-4 md:space-x-6">
        <Link href="/" className="text-casualTextGray hover:text-gray-400 text-md underline underline-offset-10">
          Home
        </Link>
        <Link href="/about" className="text-casualTextGray hover:text-gray-400 underline underline-offset-10">
          About
        </Link>
        <Link
          href="/contact"
          className="text-casualTextGray hover:text-gray-400 underline underline-offset-10"
        >
          Contact
        </Link>
      </nav>

      <div className="flex justify-end pr-2 sm:pr-5 md:pr-8 lg:pr-20">
        <Button>Login</Button>
      </div>
    </div>
  );
}
