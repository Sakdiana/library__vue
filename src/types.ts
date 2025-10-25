export interface Category {
  id: number;
  name: string;
}

// Тип для книги
export interface Book {
  id: number;
  name: string;
  autor: string;
  bookCover: string;
  categoryId: number;
  isNew: boolean;
  isPopular: boolean;
  description: string;
}