import { promises as fs } from "fs";
import { ReactNode } from "react";
import path from "path";
import { Card } from "@/components/ui/card";

interface Article {
  headline: string;
  rating: number;
  id: number;
  url: string;
  content?: string;
  author?: string;
  date?: string;
}

export async function NewsCard(): Promise<ReactNode> {
  const file: string = await fs.readFile(
    path.join(process.cwd(), "public/articles/articles.json"),
    "utf-8"
  );
  const data: Article[] = JSON.parse(file);

  const renderList = (): ReactNode => {
    return (
      <div className="text-center w-full mx-5 space-y-3">
        {data.map((article: Article, index: number) => (
          <div
            className="border-2 shadow-xl border-[#313638a6] text-casualTextGray py-3 px-5 text-md rounded-md"
            key={index}
          >
            <Card className="flex items-center p-4 bg-background w-full">
              {/* TODO :: Add Images */}
              {/* <Image src="/404.jpg" alt="thumbnail" width={20} height={20} className="w-20 h-20 rounded object-cover"/> */}

              <div className="flex w-full justify-between items-center">
                <h3 className="text-casualTextGray font-semibold text-left flex-1 text-wrap:balance pr-4">
                  {article.headline}
                </h3>

                <p className="text-muted-foreground text-sm text-right shrink-0 w-20">
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
