import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';

export const routes: Routes = [{ path: '', component: SearchComponent }];

export const SearchRoutes = RouterModule.forChild(routes);
