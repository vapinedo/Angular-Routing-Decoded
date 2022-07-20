import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthPreloadStrategyI implements PreloadingStrategy {
  constructor(private authSvc: AuthService) {}

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.authSvc
      .isLoggedIn()
      .pipe(switchMap((isUserLoggedIn) => (isUserLoggedIn ? fn() : of(null))));
  }
}
