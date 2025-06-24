import { promises as fs } from "fs";
import { ReactNode } from "react";
import path from "path";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Article from "@/types/article";

export async function NewsCard(): Promise<ReactNode> {
  const file: string = await fs.readFile(
    path.join(process.cwd(), "public/articles/articles.json"),
    "utf-8"
  );
  const data: Article[] = JSON.parse(file);

  const renderList = (): ReactNode => {
    return (
      <div className="text-center w-full mx-1 sm:mx-5 space-y-2 overflow-hidden">
        {data.map((article: Article, index: number) => (
          <div
            className="border-1 shadow-xl border-[#313638a6] text-casualTextGray py-1 px-2 sm:py-3 sm:px-5 text-base rounded-md"
            key={index}
          >
            <Card className="flex flex-wrap items-center p-0 bg-background w-full">
              <div className="flex w-full justify-between items-center">
                <Image
                  src={`/placeholders/placeholder${index%5 + 1}.jpg`}
                  alt="thumbnail"
                  width={100}
                  height={100}
                  className="w-20 h-16 sm:w-28 sm:h-20 rounded object-cover"
                />
                <h3 className="text-casualTextGray break-words font-semibold text-left flex-1 text-wrap:balance pr-2 pl-3 sm:pr-4 sm:pl-5">
                  {article.headline}
                </h3>

                <p className="text-muted-foreground text-[12px] sm:text-base text-right shrink-0 sm:w-20">
                  || {article.rating} ||
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-background border-[#313638a6] flex justify-center items-center mt-8 mx-5 py-10 rounded-xl">
      {renderList()}
    </div>
  );
}
