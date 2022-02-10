import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

export const routes: Routes = [{ path: '', component: WelcomeComponent }];

export const WelcomeRoutes = RouterModule.forChild(routes);
