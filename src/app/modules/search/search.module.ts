import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRoutes } from './search.routing.module';
import { AngularMaterialModule } from 'src/app/core/modules/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { BookItemModule } from 'src/app/shared/components/book-item/book-item.module';
import { BookDetailsModule } from 'src/app/shared/components/book-details/book-details.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    CardModule,
    BookItemModule,
    BookDetailsModule,
    SearchRoutes,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SearchModule {}
