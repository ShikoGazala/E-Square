import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading$ = new BehaviorSubject<boolean>(false);

  setLoading(isLoading: boolean) {
    this.isLoading$.next(isLoading);
  }

  getLoading() {
    return this.isLoading$.asObservable();
  }
}
