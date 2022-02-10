import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book.model';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private user$: BehaviorSubject<User> = new BehaviorSubject({ username: '' });
  private wishlist$: BehaviorSubject<Book[]> = new BehaviorSubject(
    [] as Book[]
  );
  private wishlist: Book[] = [];
  constructor() {}

  setUser(user: User): void {
    this.user$.next(user);
  }
  getUser(): Observable<User> {
    return this.user$.asObservable();
  }

  setWishlist(book: Book) {
    const findBook = this.wishlist.findIndex((b) => b.id === book.id);

    findBook > -1
      ? this.wishlist.splice(findBook, 1)
      : this.wishlist.push(book);
    this.wishlist$.next(this.wishlist);
  }

  getWishlist() {
    return this.wishlist$.asObservable();
  }
}
