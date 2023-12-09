export interface Cart {
    id: number;
    userId: number;
    orderStatus: 'arrived' | 'in progress' | 'cancelled';
    bookId: number[];
    quantity: number[];
}