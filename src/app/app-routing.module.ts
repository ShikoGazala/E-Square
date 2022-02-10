import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { RouterUrls } from './shared/models/router-urls.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: RouterUrls.Welcome,
    pathMatch: 'full',
  },
  {
    path: RouterUrls.Welcome,
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: RouterUrls.Search,
    loadChildren: () =>
      import('./modules/search/search.module').then((m) => m.SearchModule),
    //canActivate: [AuthGuard],
  },
  {
    path: RouterUrls.Wishlist,
    loadChildren: () =>
      import('./modules/wishlist/wishlist.module').then(
        (m) => m.WishlistModule
      ),
    //canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
