import { NewsCard } from "@/components/NewsContainer";

export default async function Home() {
  return (
    <>
      {/* Making Home() async is not a good approach as the page waits till content is loaded
      A better approach is to use an async fn here and pass props to NewsCard instead

      Even better approach is to use MongoDB */}
      {await NewsCard()}
    </>
  );
}
