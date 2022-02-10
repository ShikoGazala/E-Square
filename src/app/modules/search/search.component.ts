import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/core/services/data.service';
import { distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';
import { BooksService } from 'src/app/core/services/books.service';
import { Book, BookI } from 'src/app/shared/models/book.model';
import { Observable, Subject } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/shared/models/user.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  search$ = new Subject();
  bookI$: Observable<BookI>;
  user$: Observable<User>;
  wishlist$: Observable<Book[]>;
  searchText = '';
  PageNumber = 0;
  constructor(
    public dataService: DataService,
    private booksService: BooksService,
    public dialog: MatDialog
  ) {
    this.user$ = this.dataService.getUser();
    this.bookI$ = this.search$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((text: any) => this.booksService.getBooks(text.text, text.page))
    );

    this.wishlist$ = this.dataService.getWishlist();
  }

  ngOnInit(): void {}

  search() {
    this.search$.next({ text: this.searchText, page: this.PageNumber });
  }

  pageChanged(event: PageEvent) {
    this.PageNumber = event.pageIndex || 0;
    this.search();
  }
}
