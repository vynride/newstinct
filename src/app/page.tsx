import { NewsContainer } from "@/components/NewsContainer";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#061A33] font-[family-name:var(--font-geist-sans)] p-4 sm:p-6 lg:p-8 overflow-hidden">

      <div className="relative bg-[#0B1120] w-full h-auto rounded-2xl overflow-hidden shadow-xl">
        <div className="mt-15 px-8 pt-4">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-[#C0D6ED]">
            Newstinct
          </h1>
          <p className="pt-2 text-center text-xl text-[#C0D6ED]">
            Clarity through the Noise
          </p>
        </div>
        <NewsContainer />
      </div>
    </div>
  );
}
