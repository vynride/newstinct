import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="items-center justify-between text-casualTextGray text-center mt-15">
      <h2 className="text-5xl pb-10 underline underline-offset-10">Contact</h2>
      <h3 className="text-2xl p-10 text-wrap:balance">
        For any questions or suggestions please feel free to contact
      </h3>

      <div>
        <div className="flex justify-center">
          <h3 className="text-2xl">X / Twitter:</h3>
          <Link
            className="pl-5 pb-3 text-2xl text-[#0f766e]"
            href="https://x.com/vynride"
            target="_blank"
          >
            @vynride
          </Link>
        </div>

        <div className="flex justify-center">
          <h3 className="text-2xl">Email:</h3>
          <h3 className="pl-5 pb-3 text-2xl text-[#0f766e]">
            {" "}
            vynride@gmail.com
          </h3>
        </div>
      </div>
    </div>
  );
}
