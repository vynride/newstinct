import { promises as fs } from "fs";
import { ReactNode } from "react";
import path from "path";

interface Article {
  headline: string;
  rating: number;
  id: number;
  url: string;
  content?: string;
  author?: string;
  date?: string;
}

export async function NewsContainer(): Promise<ReactNode> {
  const file: string = await fs.readFile(
    path.join(process.cwd(), "public/articles/articles.json"),
    "utf-8"
  );
  const data: Article[] = JSON.parse(file);

  const renderList = (): ReactNode => {
    return (
      <ol className="text-center w-full mx-5">
        {/* TODO :: Define type for this JSON item bro */}
        {data.map((item: Article, index: number) => (
          <li
            className="border-2 shadow-xl border-[#313638a6] text-casualTextGray mb-3 py-3 px-5 text-md rounded-md text-wrap:balance"
            key={index}
          >
            {item.headline}
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="bg-[#0B1120] flex justify-center items-center mt-8 mx-5 py-10 rounded-xl">
      {renderList()}
    </div>
  );
}
