import { NewsContainer } from "@/components/NewsContainer";


export default function Home() {
  return (
    <>
      <div className="mt-15 px-8 pt-4">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-casualTextGray">
          Newstinct
        </h1>
        <p className="pt-2 text-center text-lg text-casualTextGray">
          <em> Clarity through the Chaos</em>
        </p>
      </div>
      <NewsContainer />
    </>
  );
}
