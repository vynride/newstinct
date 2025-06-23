import Link from "next/link";
// import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3 items-center gap-y-3 sm:gap-y-0 mt-8 px-1 sm:px-4 bg-background text-base">
      <div className="order-1 sm:order-none w-full flex justify-center sm:justify-start sm:pl-5 md:pl-8 lg:pl-20">
        <Link
          className="text-center font-bold text-xl sm:text-3xl text-[#0f766e] hover:text-[#0f766dcd]"
          href="/"
        >
          Newstinct 🐧
        </Link>
        {/* <p className="pt-2 text-center text-lg text-casualTextGray">
            <em> Clarity through the Chaos</em>
          </p> */}
      </div>

      <nav className="order-2 sm:order-none flex justify-center space-x-2 sm:space-x-4 md:space-x-6 w-full">
        <Link
          href="/"
          className="text-casualTextGray hover:text-gray-400 text-base underline underline-offset-8"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-casualTextGray hover:text-gray-400 underline underline-offset-8"
        >
          About
        </Link>
        <Link
          href="/blogs"
          className="text-casualTextGray hover:text-gray-400 underline underline-offset-8"
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-casualTextGray hover:text-gray-400 underline underline-offset-8"
        >
          Contact
        </Link>
      </nav>

      <div className="order-3 sm:order-none w-full flex justify-center sm:justify-end sm:pr-5 md:pr-8 lg:pr-20">
        {/* TODO :: Add Login  */}
        {/* <Button>Login</Button> */}
      </div>
    </div>
  );
}
