export default interface Article {
  headline: string;
  rating: number;
  id: number;
  url: string;
  content?: string;
  author?: string;
  date?: string;
}