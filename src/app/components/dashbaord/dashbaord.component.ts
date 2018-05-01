import { BookDialogComponent } from './../book-dialog/book-dialog.component';
import { Book } from './../../shared/interfaces/book';
import { BooksLibraryService } from './../../shared/services/books-library.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.scss']
})
export class DashbaordComponent implements OnInit {

  // booksList: Book[];
  new_book;

  constructor(public _booksLibraryService: BooksLibraryService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getBooksList();
  }

  getBooksList(): void {
    this._booksLibraryService.getBooksList().subscribe(data => {
      // this.booksList = data;
    });
  }

  addNewBook() {

    this.new_book = {
      title: '',
      author: '',
      date: '',
      id: Number((Math.random() * 10000).toFixed())
    };

    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: '350px',
      height: '245px',
      data: { title: this.new_book.title, author: this.new_book.author, date: this.new_book.date, id: this.new_book.id }
    });

    dialogRef.afterClosed().subscribe(() => {
      return this.getBooksList();
    });

  }

  deleteBook(bookID: number) {
    this._booksLibraryService.deleteBookFromLibarary(bookID).subscribe(data => {
      return this.getBooksList();
    });

  }

}
