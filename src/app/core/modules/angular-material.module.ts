import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const modules = [
  MatSliderModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatIconModule,
];
@NgModule({
  imports: [CommonModule, ...modules],
  exports: modules,
})
export class AngularMaterialModule {}
