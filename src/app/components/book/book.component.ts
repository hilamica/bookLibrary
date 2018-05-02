import { BooksLibraryService } from './../../shared/services/books-library.service';
import { Book } from './../../shared/interfaces/book';
import { BookDialogComponent } from './../book-dialog/book-dialog.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() bookItem: Book;
  @Output() bookToDelete: EventEmitter<number> = new EventEmitter<number>();
  openAccordion = false;

  constructor(public dialog: MatDialog, private _booksLibraryService: BooksLibraryService) {
  }

  ngOnInit() {
  }

  editBookDetails() {
    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: '350px',
      height: '245px',
      data: { title: this.bookItem.title, author: this.bookItem.author, date: this.bookItem.date, id: this.bookItem.id }
    });

    dialogRef.afterClosed().subscribe(data => {
      this.bookItem = data;
    });
  }

  deleteBook() {
    alert('Are you sure you want to delete ' + this.bookItem.title + '?');
    this.bookToDelete.emit(this.bookItem.id);
  }

}

