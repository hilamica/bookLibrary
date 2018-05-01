import { Subject } from 'rxjs/Subject';
import { Book } from './../interfaces/book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BooksLibraryService {

  booksList: Book[] = [];


  constructor(private http: HttpClient) {

  }

  httpRequest(req: string, id: string, book?: Book): Observable<any> {
    return this.http.request(req, `/booksList/${id}`, { body: book });
  }

  getBooksList(): Observable<Book[]> {
    return new Observable(observer => {
      this.httpRequest('get', '').subscribe(data => {
        this.booksList = data;
        observer.next(data);
      });
    });
  }

  saveEditableBook(book: Book): Observable<any> {
    return this.httpRequest('put', String(book.id), book);
  }

  getBook(bookID: string) {
    return this.httpRequest('get', bookID);
  }

  deleteBookFromLibarary(bookID: number) {
    return this.httpRequest('delete', String(bookID));
  }

  addBookToLibarary(newBook: Book) {
    return this.httpRequest('post', '', newBook);
  }


}
