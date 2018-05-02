import { isNullOrUndefined } from 'util';
import { BooksLibraryService } from './../../shared/services/books-library.service';
import { Book } from './../../shared/interfaces/book';
import { BookDialogComponent } from './../book-dialog/book-dialog.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService, Message } from 'primeng/components/common/api';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [ConfirmationService]
})
export class BookComponent implements OnInit {


  @Input() bookItem: Book;
  @Output() bookToDelete: EventEmitter<number> = new EventEmitter<number>();
  openAccordion = false;
  msgs: Message[] = [];

  constructor(public dialog: MatDialog, private _booksLibraryService: BooksLibraryService,
    private confirmationService: ConfirmationService
  ) {
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
      if (!isNullOrUndefined(data)) {
        this.bookItem = data;
      }
    });
  }


  deleteBook() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this book?',
      header: 'Delete Confirmation',
      accept: () => {
        this.bookToDelete.emit(this.bookItem.id);
      },
      reject: () => {
        return;
      }
    });
  }
}
