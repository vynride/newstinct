import { NewsContainer } from "@/components/NewsContainer";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-backdrop font-[family-name:var(--font-geist-sans)] p-3 sm:p-4 lg:p-6 overflow-hidden">
      <div className="relative bg-background w-full h-auto rounded-2xl overflow-hidden shadow-2xl border-black z-50">
        <div className="mt-15 px-8 pt-4">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-casualTextGray">
            Newstinct
          </h1>
          <p className="pt-2 text-center text-lg text-casualTextGray">
            <em> Cut through the Noise</em>
          </p>
        </div>
        <NewsContainer />
      </div>
    </div>
  );
}
