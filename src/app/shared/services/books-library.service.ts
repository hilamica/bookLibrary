import { environment } from './../../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { Book } from './../interfaces/book';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BooksLibraryService {

  booksList: Book[] = [];
  booksListSubject = new Subject<Book[]>();

  constructor(private http: HttpClient) {
  }

  httpRequest(req: string, id: string, book?: Book): Observable<any> {
    return this.http.request(req, `${environment.api}/booksList/${id}`, { body: book });
  }

  getLocalBooksList(): Book[] {
    return this.booksList;
  }

  getBooksList(): Observable<Book[]> {
    return new Observable(observer => {
      this.httpRequest('get', '').subscribe(data => {
        this.booksList = data;
        observer.next(data);
      });
    });
  }

  deleteBookFromLibarary(bookID: number) {
    const index = this.booksList.findIndex(bookItr => bookItr.id === bookID);
    this.booksList.splice(index, 1);
    this.booksListSubject.next(this.booksList.slice());
  }

  addBookToLibarary(newBook: Book) {
    this.booksList.push(newBook);
  }

}
