import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { RouterUrls } from 'src/app/shared/models/router-urls.enum';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate() {
    return this.dataService
      .getUser()
      .pipe(
        map((val) =>
          !!val.username ? true : this.router.parseUrl(RouterUrls.Welcome)
        )
      );
  }
}
