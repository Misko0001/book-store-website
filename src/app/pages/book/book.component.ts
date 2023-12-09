import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookAddedNotificationComponent } from 'src/app/pages/book/book-added-notification/book-added-notification.component';
import { BookService } from 'src/app/services/book.service';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  book: any;

  constructor(
    private dialog: MatDialog, 
    private bookService: BookService, 
    private userService: UserService,
    private location: Location,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  getId(): number {
    let originalString = this.location.path();
    let changedString = parseInt(originalString.split("/").pop() + "");
    return changedString;
  }

  ngOnInit() {
    const bookId = this.getId();
    this.book = this.bookService.getBookById(bookId);
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

  addToCart() {
    if (this.userService.isBookInCart(this.userService.currentUser.id, this.getId())) {
      this.snackBar.open(
        'The book has already been added to the cart', '', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom'
        }
      );
    } else if (this.userService.currentUser.id == 0) {
      this.router.navigate(['/login']);
    } else {
      this.userService.addBookToCart(this.userService.currentUser.id, this.getId());
      this.dialog.open(BookAddedNotificationComponent);
    } 
  }

}
