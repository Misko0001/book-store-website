import { Component, Inject, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-added-notification',
  templateUrl: './book-added-notification.component.html',
  styleUrls: ['./book-added-notification.component.css']
})
export class BookAddedNotificationComponent implements OnInit {

  book: any;

  constructor(
    private bookService: BookService, 
    private location: Location,
    @Inject(MAT_DIALOG_DATA) private data: { quantity: string }
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

}
