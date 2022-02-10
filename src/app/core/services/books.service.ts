import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book, BookI } from 'src/app/shared/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  readonly maxResults = 20;
  readonly baseUrl = `https://www.googleapis.com/books/v1/volumes?maxResults=${this.maxResults}&q=`;

  constructor(private http: HttpClient) {}

  getBooks(searchText: string, pageNumber: number): Observable<BookI> {
    console.log(pageNumber);

    const url = `${this.baseUrl}${searchText}&startIndex=${
      pageNumber * this.maxResults
    }`;
    return this.http.get<BookI>(url).pipe(
      map((books) => {
        books.items = books?.items?.map((b: any) => {
          const id = b.id;
          b = b.volumeInfo;
          return {
            id,
            authors: b.authors?.toString(),
            categories: b.categories?.toString(),
            contentVersion: b.contentVersion,
            description: b.description,
            imageLinks: b.imageLinks?.thumbnail,
            language: b.language,
            maturityRating: b.maturityRating,
            pageCount: b.pageCount,
            publishedDate: b.publishedDate,
            publisher: b.publisher,
            title: b.title,
            isWishlist: false,
          };
        });
        return books;
      })
    );
  }
}
