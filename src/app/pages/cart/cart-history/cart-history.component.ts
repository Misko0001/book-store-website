import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';
import { Book } from 'src/app/services/book.model';
import { CartEditComponent } from './cart-edit/cart-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart-history',
  templateUrl: './cart-history.component.html',
  styleUrls: ['./cart-history.component.css'],
})

export class CartHistoryComponent {

  cartHistory!: number[][];
  cartQuantity!: number[][];
  cartStatus: string[] = [];
  cartId: number[] = [];
  books: Book[][] = [];
  totalPrice: number[] = [];

  constructor(
    private cartService: CartService,
    private bookService: BookService,
    public userService: UserService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadCartHistory();
  }

  loadCartHistory(): void {
    this.cartHistory = this.cartService.getBookId(this.userService.currentUser.id);
    this.cartQuantity = this.cartService.getQuantity(this.userService.currentUser.id);
    this.cartStatus = this.cartService.getStatus(this.userService.currentUser.id);
    this.cartId = this.cartService.getCartId(this.userService.currentUser.id);

    this.books = [];
    this.totalPrice = [];

    for (let i = 0; i < this.cartHistory.length; i++) {
      let bookArray: Book[] = [];
      let total = 0;
      for (let j = 0; j < this.cartHistory[i].length; j++) {
        let book = this.bookService.getBookById(this.cartHistory[i][j]);
        if (book) {
          book.quantity = this.cartQuantity[i][j];
          total += book.price * book.quantity;
          bookArray.push(book);
        }
      }
      this.totalPrice.push(total);
      this.books.push(bookArray);
    }
  }

  deleteOrder(userId: number, index: number): void {
    this.cartService.deleteOrder(userId, index);
    this.loadCartHistory();
  }

  cancelOrder(userId: number, index: number): void {
    this.cartService.cancelOrder(userId, index);
    this.loadCartHistory();
  }

  getStatus(index: number): string {
    if (index < this.cartStatus.length) {
      return this.cartStatus[index];
    } else {
      return 'Unknown status';
    }
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const stars: string[] = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push('star');
    }

    if (rating % fullStars >= 0.5) {
      stars.push('star_half');
    }

    while (stars.length < 5) {
      stars.push('star_border');
    }

    return stars;
  }

  editCart(index: number) {
    const dialogRef = this.dialog.open(CartEditComponent, {
      disableClose: true,
      data: { cartId: this.cartId[index] }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadCartHistory();
    });
  }

}
