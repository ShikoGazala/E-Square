import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from './book-item.component';
import { TruncatePipe } from 'src/app/core/pipes/truncate.pipe';
import { AngularMaterialModule } from 'src/app/core/modules/angular-material.module';
import { CardModule } from '../card/card.module';

@NgModule({
  declarations: [BookItemComponent, TruncatePipe],
  exports: [BookItemComponent],
  imports: [CommonModule, AngularMaterialModule, CardModule],
})
export class BookItemModule {}
