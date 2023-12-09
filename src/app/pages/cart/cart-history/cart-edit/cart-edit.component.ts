import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book } from 'src/app/services/book.model';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-edit',
  templateUrl: './cart-edit.component.html',
  styleUrls: ['./cart-edit.component.css']
})

export class CartEditComponent {

  cartId!: number;
  books: Book[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CartEditComponent>,
    private cartService: CartService,
    private bookService: BookService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.cartId = this.data.cartId;
    const cart = this.cartService.getCart(this.cartId);

    if (cart !== null) {
      for (let i = 0; i < cart.bookId.length; i++) {
        const book = this.bookService.getBookById(cart.bookId[i]);
        if (book !== undefined) {
          book.quantity = cart.quantity[i];
          this.books.push(book);
        }
      }
    }
  }

  save() {
    const newQuantity = [];
    for (let i = 0; i < this.books.length; i++) {
      const quantity = this.books[i].quantity;
      if (quantity !== undefined) {
        newQuantity.push(quantity);
      }
    }

    const invalidQuantities = Object.values(newQuantity).filter(
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

    this.cartService.updateQuantity(this.cartId, newQuantity);
    this.cartService.updateCartStatus(this.cartId, 'in progress');
    this.dialogRef.close();
  }

}

