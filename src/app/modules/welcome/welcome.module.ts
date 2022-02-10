import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutes } from './welcome.routing.module';
import { AngularMaterialModule } from 'src/app/core/modules/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    CardModule,
    AngularMaterialModule,
    WelcomeRoutes,
    ReactiveFormsModule,
  ],
})
export class WelcomeModule {}
