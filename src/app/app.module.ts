import { NonEnglishPipe } from './shared/pipes/non-english.pipe';
import { BookDialogComponent } from './components/book-dialog/book-dialog.component';
import { BooksLibraryService } from './shared/services/books-library.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { GrowlModule } from 'primeng/growl';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { DashbaordComponent } from './components/dashbaord/dashbaord.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { TitleCasePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DashbaordComponent,
    BookDialogComponent,
    NonEnglishPipe
  ],
  entryComponents: [BookDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    ConfirmDialogModule
  ],
  providers: [BooksLibraryService,
    TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
