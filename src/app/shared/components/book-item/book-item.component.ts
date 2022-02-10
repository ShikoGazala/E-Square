import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/core/services/data.service';
import { Book } from '../../models/book.model';
import { BookDetailsComponent } from '../book-details/book-details.component';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent implements OnInit {
  @Input() book: Book = {} as Book;
  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  itemClicked() {
    this.dialog.open(BookDetailsComponent, {
      data: {
        book: this.book,
      },
    });
  }

  likeClicked(event: Event) {
    event.stopPropagation();
    this.book.isWishlist = !this.book.isWishlist;
    this.dataService.setWishlist(this.book);
  }
}
