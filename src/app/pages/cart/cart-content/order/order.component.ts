import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/services/book.model';
import { Cart } from 'src/app/services/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {

  books: Book[] = [];
  totalPrice: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService: CartService,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    if (this.data && this.data.cartItems && this.data.quantities) {
      this.books = this.data.cartItems.map((item: Book) => {
        const quantity = this.data.quantities[item.id] || 0;
        const totalPrice = item.price * quantity;
        this.totalPrice += totalPrice;
        
        return {
          ...item,
          quantity: quantity,
          totalPrice: totalPrice
        };
      });
    }
  }

  confirmOrder() {
    this.cartService.addOrder(
      this.userService.currentUser.id,
      'in progress', 
      this.books.map(book => book.id || 0), 
      this.books.map(book => book.quantity || 0)
    );
    this.userService.updateCart(this.userService.currentUser.id, []);
  }

}

