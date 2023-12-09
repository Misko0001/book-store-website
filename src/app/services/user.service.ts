import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable()
export class UserService {

    currentUser: User = UserService.userList[0];

    static userList: Array<User> = [
        {
            id: 0,
            nameSurname: '',
            email: '',
            phone: '',
            address: '',
            favoriteGenre: '',
            password: '',
            cartBooksId: []
        },
        {
            id: 1,
            nameSurname: 'Miloš Stanković',
            email: 'stankovicmilos100@yahoo.com',
            phone: '0600754107',
            address: 'Adresa 1',
            favoriteGenre: 'Genre 1',
            password: 'lozinka123',
            cartBooksId: [24, 20]
        },
        {
            id: 2,
            nameSurname: 'user',
            email: 'user@mail.com',
            phone: '1234567890',
            address: 'Adresa 10',
            favoriteGenre: 'Genre 3',
            password: 'user',
            cartBooksId: [30, 9, 18]
        }
    ];

    getUserById(id: number): User {
        let foundUser!: User;
        UserService.userList.forEach(user => {
            if (user.id == id) {
                foundUser = user;
            }
        });
        this.currentUser = foundUser;
        return foundUser;
    }

    getUser(email: string): User {
        this.currentUser = UserService.userList.find(userToFind => userToFind.email == email)!;
        return this.currentUser;
    }

    isPasswordCorrect(email: string, password: string): boolean {
        return UserService.userList.find(userToFind => (
            userToFind.email == email && userToFind.password == password
        )) != undefined;
    }

    isPasswordConfirm(password: string, confirm: string) {
        return password == confirm;
    }

    registerUser(
        nameSurname: string, 
        email: string, 
        phone: string, 
        address: string, 
        favoriteGenre: string, 
        password: string,
        cartBooksId: number[]
    ): User {
        let maxId: number = 0;

        UserService.userList.forEach(user => {
            if (maxId < user.id) {
                maxId = user.id;
            }
        });

        let id = ++maxId;

        let user: User = {
            id,
            nameSurname,
            email,
            phone,
            address,
            favoriteGenre,
            password,
            cartBooksId
        }

        UserService.userList.push(user);

        this.currentUser = user;

        return user;
    }

    getCartBooksId(id: number) {
        let cartBooksId!: number[];
        UserService.userList.forEach(user => {
            if (user.id == id) {
                cartBooksId = user.cartBooksId;
            }
        });
        return cartBooksId;
    }

    addBookToCart(userId: number, bookId: number) {
        if (userId !== 0) {
            const user = UserService.userList.find((user) => user.id === userId);
            if (user) {
                user.cartBooksId.push(bookId);
            }
        }
    }

    isBookInCart(userId: number, bookId: number): boolean {
        const user = UserService.userList.find((user) => user.id === userId);
        if (user) {
            return user.cartBooksId.includes(bookId);
        }
        return false;
    }

    updateCart(userId: number, cartBooksId: number[]) {
        const cart = UserService.userList.find(cart => cart.id === userId);
        if (cart) {
            cart.cartBooksId = cartBooksId;
        }
    }

}