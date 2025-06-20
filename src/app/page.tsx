import { NewsContainer } from "@/components/NewsContainer";

export default function Home() {
  return (
    // Custom Radial gradient :: globals.css
    <div className="min-h-screen bg-custom-radial-grad font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-center items-center">
        <div className="mt-15 leading-relaxed drop-shadow-md bg-black/10 backdrop-blur-4xl px-8 py-4 rounded-4xl">
          <h1 className="font-bold text-7xl text-center text-gray-300">
            Newstinct
          </h1>
          <p className="pt-2 text-center text-xl text-gray-300">
            Clarity through the Noise
          </p>
        </div>
      </div>
      <NewsContainer />
      {/* footer */}
      <div className="p-5"></div>
    </div>
  );
}
