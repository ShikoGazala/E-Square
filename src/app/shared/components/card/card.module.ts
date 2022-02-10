import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/core/modules/angular-material.module';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [CommonModule, AngularMaterialModule],
})
export class CardModule {}
