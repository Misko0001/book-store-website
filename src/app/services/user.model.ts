export interface User {
    id: number;
    nameSurname: string;
    email: string;
    phone: string;
    address: string;
    favoriteGenre: string;
    password: string;
    cartBooksId: number[];
}