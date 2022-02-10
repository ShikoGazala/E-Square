import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './wishlist.component';

export const routes: Routes = [{ path: '', component: WishlistComponent }];

export const WishlistRoutes = RouterModule.forChild(routes);
