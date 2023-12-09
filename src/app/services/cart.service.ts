import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class CartService {

    static cartList: Array<Cart> = [
        {
            id: 1,
            userId: 1,
            orderStatus: 'arrived',
            bookId: [1, 3, 12],
            quantity: [2, 1, 3]
        },
        {
            id: 2,
            userId: 1,
            orderStatus: 'in progress',
            bookId: [23],
            quantity: [2]
        },
        {
            id: 3,
            userId: 2,
            orderStatus: 'arrived',
            bookId: [1, 3, 12],
            quantity: [3, 2, 1]
        },
        {
            id: 4,
            userId: 2,
            orderStatus: 'in progress',
            bookId: [3, 5, 15],
            quantity: [2, 2, 1]
        },
        {
            id: 5,
            userId: 2,
            orderStatus: 'cancelled',
            bookId: [18, 11],
            quantity: [1, 2]
        }
    ];

    getCart(id: number): Cart | null {
        const cart = CartService.cartList.find(cart => cart.id === id);
        return cart ? cart : null;
    }

    getCartId(id: number): number[] {
        const cartId: number[] = [];
        CartService.cartList.forEach(cart => {
            if (cart.userId === id) {
                cartId.push(cart.id);
            }
        });
        return cartId;
    }

    getStatus(id: number) {
        const status: string[] = [];
        CartService.cartList.forEach(cart => {
            if (cart.userId === id) {
                status.push(cart.orderStatus);
            }
        });
        return status;
    }

    getBookId(id: number) {
        const bookId: number[][] = [];
        CartService.cartList.forEach(cart => {
            if (cart.userId === id) {
                bookId.push(cart.bookId);
            }
        });
        return bookId;
    }

    getQuantity(id: number) {
        const quantity: number[][] = [];
        CartService.cartList.forEach(cart => {
            if (cart.userId === id) {
                quantity.push(cart.quantity);
            }
        });
        return quantity;
    }

    addOrder(
        userId: number,
        orderStatus: 'arrived' | 'in progress' | 'cancelled',
        bookId: number[],
        quantity: number[]
    ): Cart {
        let maxId: number = 0;

        CartService.cartList.forEach(cart => {
            if (maxId < cart.id) {
                maxId = cart.id
            }
        });

        let id = ++maxId;
        
        let cart: Cart = {
            id,
            userId,
            orderStatus,
            bookId,
            quantity
        }

        CartService.cartList.push(cart);

        return cart;
    }

    deleteOrder(userId: number, index: number): void {
        const filteredCartList = CartService.cartList.filter(
            cart => cart.userId === userId
        );
        
        if (filteredCartList.length > index) {
            const orderId = filteredCartList[index].id;
            CartService.cartList = CartService.cartList.filter(
            cart => !(cart.userId === userId && cart.id === orderId)
            );
        }
    }

    cancelOrder(userId: number, index: number): void {
        const filteredCartList = CartService.cartList.filter((cart) => 
            cart.userId === userId
        );

        if (filteredCartList.length > index) {
            filteredCartList[index].orderStatus = 'cancelled';
        }
    }

    updateCart(cart: Cart): void {
        const existingCartIndex = CartService.cartList.findIndex(c => c.id === cart.id);
        if (existingCartIndex !== -1) {
            CartService.cartList[existingCartIndex] = cart;
        }
    }

    updateCartStatus(cartId: number, status: 'arrived' | 'in progress' | 'cancelled'): void {
        const cart = CartService.cartList.find(cart => cart.id === cartId);
        if (cart) {
            cart.orderStatus = status;
        }
    }

    updateQuantity(cartId: number, quantity: number[]) {
        const cart = CartService.cartList.find(cart => cart.id === cartId);
        if (cart) {
            cart.quantity = quantity;
        }
    }
}