import { TestBed, inject } from '@angular/core/testing';

import { BooksLibraryService } from './books-library.service';

describe('BooksLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksLibraryService]
    });
  });

  it('should be created', inject([BooksLibraryService], (service: BooksLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
