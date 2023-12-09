import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookAddedNotificationComponent } from 'src/app/pages/book/book-added-notification/book-added-notification.component';
import { Book } from 'src/app/services/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {

  displayColumns = ["image", "name", "genre", "pageNumber", "author", "publishDate", "price", "rating"];

  bookSource = new MatTableDataSource<Book>();

  @ViewChild(MatSort) sort !: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor (
    private bookService: BookService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.bookSource.data = this.bookService.getBooks();
  }

  ngAfterViewInit() {
    this.bookSource.sort = this.sort;
    this.bookSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.bookSource.filter = filterValue.trim().toLocaleLowerCase();
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
