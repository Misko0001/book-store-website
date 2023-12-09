import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/app/services/book.model';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';
import { OrderComponent } from './order/order.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})

export class CartContentComponent implements OnInit {

  displayColumns = ["image", "name", "genre", "pageNumber", "author", "publishDate", "price", "rating", "input", "delete"];

  cartSource = new MatTableDataSource<Book>();
  bookQuantity: { [key: number]: number } = {};

  constructor(
    private userService: UserService,
    private bookService: BookService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    let cartBooksId = this.userService.getCartBooksId(this.userService.currentUser.id);
    let books: Book[] = [];

    for (let i = 0; i < cartBooksId.length; i++) {
      let book = this.bookService.getBookById(cartBooksId[i]);
      if (book) {
        books.push(book);
        this.bookQuantity[book.id] = 1;
      }
    }

    this.cartSource.data = books;
  }

  removeBookFromCart(book: Book): void {
    const index = this.cartSource.data.indexOf(book);
    let cartBooksId = this.userService.getCartBooksId(this.userService.currentUser.id);

    if (index >= 0) {
      cartBooksId.splice(index, 1);
      this.cartSource.data.splice(index, 1);
      this.cartSource._updateChangeSubscription();
      delete this.bookQuantity[book.id];
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

  order() {
    const invalidQuantities = Object.values(this.bookQuantity).filter(
      quantity => isNaN(quantity) || quantity <= 0
    );
    if (invalidQuantities.length > 0) {
      this.snackBar.open(
        'Invalid quantities detected', '', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        }
      );
      return;
    }

    this.dialog.open(OrderComponent, {
      data: {
        cartItems: this.cartSource.data,
        quantities: this.bookQuantity
      }
    });
  }
  
}