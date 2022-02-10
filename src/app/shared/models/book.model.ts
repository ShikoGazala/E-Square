export interface BookI {
  totalItems: number;
  items: Book[];
}
export interface Book {
  id: string;
  authors: string;
  categories: string;
  contentVersion: string;
  description: string;
  imageLinks: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  publishedDate: string;
  publisher: string;
  title: string;
  isWishlist: boolean;
}
