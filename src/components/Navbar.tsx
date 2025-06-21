import Link from "next/link";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <div className="grid grid-cols-3 items-center mt-8 px-4 bg-background">
      {/* Used to center the grid layout */}
      <div></div>

      <nav className="flex justify-center space-x-6">
        <Link href="/" className="text-casualTextGray hover:text-gray-100">
          Home
        </Link>
        <Link href="/about" className="text-casualTextGray hover:text-gray-200">
          About
        </Link>
        <Link
          href="/contact"
          className="text-casualTextGray hover:text-gray-200"
        >
          Contact
        </Link>
      </nav>

      {/* Right button */}
      <div className="flex justify-end sm:pr-5 md:pr-8 lg:pr-13">
        <Button>Login</Button>
      </div>
    </div>
  );
}
