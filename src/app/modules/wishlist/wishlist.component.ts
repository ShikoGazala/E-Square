import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataService } from 'src/app/core/services/data.service';
import { Book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  books$: Observable<Book[]>;
  constructor(private dataService: DataService) {
    this.books$ = this.dataService.getWishlist();
  }

  ngOnInit(): void {}
}
