import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import { AngularMaterialModule } from 'src/app/core/modules/angular-material.module';

@NgModule({
  declarations: [BookDetailsComponent],
  exports: [BookDetailsComponent],
  entryComponents: [BookDetailsComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class BookDetailsModule {}
