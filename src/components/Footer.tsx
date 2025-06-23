import Link from "next/link";

export default function PageFooter() {
    return (
        <div className="items-center justify-between text-casualTextGray text-center mt-2 mb-5">
            <h2 className="">Made with 🐧 by &nbsp;<Link className="text-[#0f766e]" href='https://x.com/vynride' target="_blank">Vivian</Link></h2>
             
        </div>
    );
}
