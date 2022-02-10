import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailsComponent implements OnInit {
  keys: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { book: any }) {
    this.keys = Object.keys(this.data.book);
  }

  ngOnInit(): void {}
}
