import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/core/modules/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { WishlistComponent } from './wishlist.component';
import { WishlistRoutes } from './wishlist.routing.module';
import { BookItemModule } from 'src/app/shared/components/book-item/book-item.module';

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    CardModule,
    AngularMaterialModule,
    WishlistRoutes,
    ReactiveFormsModule,
    BookItemModule,
  ],
})
export class WishlistModule {}
