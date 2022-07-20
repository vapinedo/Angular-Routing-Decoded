import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoadGuard implements CanLoad {
  constructor(private authSvc: AuthService, private router: Router) {}

  canLoad():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.authSvc
      .isLoggedIn()
      .pipe(
        map((isLoggedIn: any) => isLoggedIn || this.router.createUrlTree(['']))
      );
  }
}
