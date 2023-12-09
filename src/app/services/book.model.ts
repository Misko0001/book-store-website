export interface Book {
    id: number;
    name: string;
    description: string;
    image: string;
    genre: string;
    pageNumber: number;
    author: string;
    publishDate: Date;
    price: number;
    rating: number;
    quantity?: number;
}