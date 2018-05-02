import { BooksLibraryService } from './../../shared/services/books-library.service';
import { Component, OnInit, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Book } from '../../shared/interfaces/book';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.scss']
})
export class BookDialogComponent implements OnInit {

  public bookEditForm: FormGroup;
  selectedBook: Book;
  new_book = false;


  constructor(public dialogRef: MatDialogRef<BookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _booksLibraryService: BooksLibraryService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    if (this.data.title === '') {
      this.new_book = true;
    }


    this.bookEditForm = this.fb.group({
      id: this.data.id,
      title: [this.data.title, Validators.required],
      author: [this.data.author, Validators.required],
      date: [this.data.date, Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]
    });
  }

  saveContent() {

    if (this.bookEditForm.dirty) {
      this.selectedBook = this.bookEditForm.getRawValue();

      if (this.bookEditForm.controls['title'].dirty) {
        const result = this._booksLibraryService.getLocalBooksList().find(book => book.title === this.selectedBook.title);

        if (result) {
          alert('book is already exist');
        }
      }

      if (this.new_book) {
        this._booksLibraryService.addBookToLibarary(this.selectedBook);
        this.new_book = false;
        this.dialogRef.close();
      }

      else {
        this.dialogRef.close(this.selectedBook);
      }
    }

    else {
      this.dialogRef.close();
    }

  }

  cancel() {
    this.dialogRef.close();
  }
}
